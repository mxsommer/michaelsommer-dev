const express = require("express");
const router = express.Router();
const lucid1 = require("../ai/lucid1");

// GET /ai/analyze?domain=michaelsommer.dev
router.get("/analyze", (req, res) => {
  const domain = req.query.domain;

  if (!domain) return res.status(400).json({ error: "Missing domain" });

  const valuation = lucid1.evaluateDomain(domain);
  const classification = lucid1.classifyDomain(domain);
  const whois = lucid1.simulateWHOIS(domain);

  res.json({
    domain,
    valuation,
    classification,
    whois
  });
});

module.exports = router;

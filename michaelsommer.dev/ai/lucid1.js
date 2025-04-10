// Domain Strategist AI 🧠 - LUCID-1
const lucid1 = {
  evaluateDomain(domain) {
    const lengthScore = 100 - Math.min(domain.length, 25) * 2;
    const tldBoost = domain.endsWith('.dev') ? 25 : 10;
    const value = Math.floor(1000 + lengthScore * 30 + tldBoost * 50);
    return `$${value.toLocaleString()}`;
  },

  classifyDomain(domain) {
    const keywords = {
      tech: ["dev", "app", "tech", "cloud", "code"],
      portfolio: ["name", "me", "work", "portfolio"],
      commercial: ["store", "shop", "market", "buy", "sell"],
      personal: ["blog", "diary", "life", "home"]
    };

    let match = "Unclassified";
    Object.entries(keywords).forEach(([label, words]) => {
      if (words.some(w => domain.toLowerCase().includes(w))) {
        match = label.charAt(0).toUpperCase() + label.slice(1);
      }
    });

    return match;
  },

  simulateWHOIS(domain) {
    const available = domain.length % 2 === 0 ? false : true;
    const daysToExpire = 365 + Math.floor(Math.random() * 500);

    return {
      domain,
      available,
      registrar: available ? null : "Namecheap, Inc.",
      expiry: available ? null : new Date(Date.now() + daysToExpire * 86400000).toISOString().split('T')[0]
    };
  }
};

module.exports = lucid1;

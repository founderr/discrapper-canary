var o = e(475637),
  t = e(925300),
  a = {
    ordinalNumber: (0, t.Z)({
      matchPattern: /^(\d+)?/i,
      parsePattern: /\d+/i,
      valueCallback: function(n) {
        return parseInt(n, 10)
      }
    }),
    era: (0, o.Z)({
      matchPatterns: {
        narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
        abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
        wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^p/i, /^n/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: (0, o.Z)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
        wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/1/i, /2/i, /3/i, /4/i],
        any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
      },
      defaultParseWidth: "any",
      valueCallback: function(n) {
        return n + 1
      }
    }),
    month: (0, o.Z)({
      matchPatterns: {
        narrow: /^[slmkcwpg]/i,
        abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
        wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i],
        any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i]
      },
      defaultParseWidth: "any"
    }),
    day: (0, o.Z)({
      matchPatterns: {
        narrow: /^[npwścs]/i,
        short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
        abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
        wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
        abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
        any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, o.Z)({
      matchPatterns: {
        narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
        any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        narrow: {
          am: /^a$/i,
          pm: /^p$/i,
          midnight: /pó(ł|l)n/i,
          noon: /po(ł|l)/i,
          morning: /rano/i,
          afternoon: /po\s*po(ł|l)/i,
          evening: /wiecz/i,
          night: /noc/i
        },
        any: {
          am: /^am/i,
          pm: /^pm/i,
          midnight: /pó(ł|l)n/i,
          noon: /po(ł|l)/i,
          morning: /rano/i,
          afternoon: /po\s*po(ł|l)/i,
          evening: /wiecz/i,
          night: /noc/i
        }
      },
      defaultParseWidth: "any"
    })
  };
i.Z = a
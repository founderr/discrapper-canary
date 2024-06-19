var i = t(475637),
  n = t(925300),
  o = {
    ordinalNumber: (0, n.Z)({
      matchPattern: /^(\d+)[ºªo]?/i,
      parsePattern: /\d+/i,
      valueCallback: function(e) {
        return parseInt(e, 10)
      }
    }),
    era: (0, i.Z)({
      matchPatterns: {
        narrow: /^(ac|dc|a|d)/i,
        abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
        wide: /^(antes de cristo|depois de cristo)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^ac/i, /^dc/i],
        wide: [/^antes de cristo/i, /^depois de cristo/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: (0, i.Z)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^T[1234]/i,
        wide: /^[1234](º)? trimestre/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/1/i, /2/i, /3/i, /4/i]
      },
      defaultParseWidth: "any",
      valueCallback: function(e) {
        return e + 1
      }
    }),
    month: (0, i.Z)({
      matchPatterns: {
        narrow: /^[jfmajsond]/i,
        abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
        wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
      },
      defaultParseWidth: "any"
    }),
    day: (0, i.Z)({
      matchPatterns: {
        narrow: /^(dom|[23456]ª?|s[aá]b)/i,
        short: /^(dom|[23456]ª?|s[aá]b)/i,
        abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
        wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
        narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
        any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, i.Z)({
      matchPatterns: {
        narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
        any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mn|^meia[-\s]noite/i,
          noon: /^md|^meio[-\s]dia/i,
          morning: /manhã/i,
          afternoon: /tarde/i,
          evening: /tarde/i,
          night: /noite/i
        }
      },
      defaultParseWidth: "any"
    })
  };
a.Z = o
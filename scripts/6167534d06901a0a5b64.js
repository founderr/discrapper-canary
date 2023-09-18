"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [49151], {
        349151: (e, i, a) => {
            a.r(i);
            a.d(i, {
                default: () => h
            });
            var t = {
                lessThanXSeconds: {
                    one: "moins d’une seconde",
                    other: "moins de {{count}} secondes"
                },
                xSeconds: {
                    one: "1 seconde",
                    other: "{{count}} secondes"
                },
                halfAMinute: "30 secondes",
                lessThanXMinutes: {
                    one: "moins d’une minute",
                    other: "moins de {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "environ 1 heure",
                    other: "environ {{count}} heures"
                },
                xHours: {
                    one: "1 heure",
                    other: "{{count}} heures"
                },
                xDays: {
                    one: "1 jour",
                    other: "{{count}} jours"
                },
                aboutXWeeks: {
                    one: "environ 1 semaine",
                    other: "environ {{count}} semaines"
                },
                xWeeks: {
                    one: "1 semaine",
                    other: "{{count}} semaines"
                },
                aboutXMonths: {
                    one: "environ 1 mois",
                    other: "environ {{count}} mois"
                },
                xMonths: {
                    one: "1 mois",
                    other: "{{count}} mois"
                },
                aboutXYears: {
                    one: "environ 1 an",
                    other: "environ {{count}} ans"
                },
                xYears: {
                    one: "1 an",
                    other: "{{count}} ans"
                },
                overXYears: {
                    one: "plus d’un an",
                    other: "plus de {{count}} ans"
                },
                almostXYears: {
                    one: "presqu’un an",
                    other: "presque {{count}} ans"
                }
            };
            const n = function(e, i, a) {
                var n, r = t[e];
                n = "string" == typeof r ? r : 1 === i ? r.one : r.other.replace("{{count}}", String(i));
                return null != a && a.addSuffix ? a.comparison && a.comparison > 0 ? "dans " + n : "il y a " + n : n
            };
            var r = a(849526);
            const o = {
                date: (0, r.Z)({
                    formats: {
                        full: "EEEE d MMMM y",
                        long: "d MMMM y",
                        medium: "d MMM y",
                        short: "dd/MM/y"
                    },
                    defaultWidth: "full"
                }),
                time: (0, r.Z)({
                    formats: {
                        full: "HH:mm:ss zzzz",
                        long: "HH:mm:ss z",
                        medium: "HH:mm:ss",
                        short: "HH:mm"
                    },
                    defaultWidth: "full"
                }),
                dateTime: (0, r.Z)({
                    formats: {
                        full: "{{date}} 'à' {{time}}",
                        long: "{{date}} 'à' {{time}}",
                        medium: "{{date}}, {{time}}",
                        short: "{{date}}, {{time}}"
                    },
                    defaultWidth: "full"
                })
            };
            var s = {
                lastWeek: "eeee 'dernier à' p",
                yesterday: "'hier à' p",
                today: "'aujourd’hui à' p",
                tomorrow: "'demain à' p'",
                nextWeek: "eeee 'prochain à' p",
                other: "P"
            };
            const d = function(e, i, a, t) {
                return s[e]
            };
            var m = a(688486);
            const u = {
                ordinalNumber: function(e, i) {
                    var a = Number(e),
                        t = null == i ? void 0 : i.unit;
                    if (0 === a) return "0";
                    return a + (1 === a ? t && ["year", "week", "hour", "minute", "second"].includes(t) ? "ère" : "er" : "ème")
                },
                era: (0, m.Z)({
                    values: {
                        narrow: ["av. J.-C", "ap. J.-C"],
                        abbreviated: ["av. J.-C", "ap. J.-C"],
                        wide: ["avant Jésus-Christ", "après Jésus-Christ"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: (0, m.Z)({
                    values: {
                        narrow: ["T1", "T2", "T3", "T4"],
                        abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
                        wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: (0, m.Z)({
                    values: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                        wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                    },
                    defaultWidth: "wide"
                }),
                day: (0, m.Z)({
                    values: {
                        narrow: ["D", "L", "M", "M", "J", "V", "S"],
                        short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
                        abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                        wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: (0, m.Z)({
                    values: {
                        narrow: {
                            am: "AM",
                            pm: "PM",
                            midnight: "minuit",
                            noon: "midi",
                            morning: "mat.",
                            afternoon: "ap.m.",
                            evening: "soir",
                            night: "mat."
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "minuit",
                            noon: "midi",
                            morning: "matin",
                            afternoon: "après-midi",
                            evening: "soir",
                            night: "matin"
                        },
                        wide: {
                            am: "AM",
                            pm: "PM",
                            midnight: "minuit",
                            noon: "midi",
                            morning: "du matin",
                            afternoon: "de l’après-midi",
                            evening: "du soir",
                            night: "du matin"
                        }
                    },
                    defaultWidth: "wide"
                })
            };
            var l = a(276723);
            const h = {
                code: "fr",
                formatDistance: n,
                formatLong: o,
                formatRelative: d,
                localize: u,
                match: {
                    ordinalNumber: (0, a(360974).Z)({
                        matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e)
                        }
                    }),
                    era: (0, l.Z)({
                        matchPatterns: {
                            narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
                            abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
                            wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^av/i, /^ap/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, l.Z)({
                        matchPatterns: {
                            narrow: /^T?[1234]/i,
                            abbreviated: /^[1234](er|ème|e)? trim\.?/i,
                            wide: /^[1234](er|ème|e)? trimestre/i
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
                    month: (0, l.Z)({
                        matchPatterns: {
                            narrow: /^[jfmasond]/i,
                            abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
                            wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                            any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, l.Z)({
                        matchPatterns: {
                            narrow: /^[lmjvsd]/i,
                            short: /^(di|lu|ma|me|je|ve|sa)/i,
                            abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
                            wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
                            any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, l.Z)({
                        matchPatterns: {
                            narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
                            any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^min/i,
                                noon: /^mid/i,
                                morning: /mat/i,
                                afternoon: /ap/i,
                                evening: /soir/i,
                                night: /nuit/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                },
                options: {
                    weekStartsOn: 1,
                    firstWeekContainsDate: 4
                }
            }
        }
    }
]);
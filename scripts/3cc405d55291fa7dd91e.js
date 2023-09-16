"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43372], {
        843372: (e, t, a) => {
            a.r(t);
            a.d(t, {
                default: () => p
            });
            var i = {
                    about: "körülbelül",
                    over: "több mint",
                    almost: "majdnem",
                    lessthan: "kevesebb mint"
                },
                n = {
                    xseconds: " másodperc",
                    halfaminute: "fél perc",
                    xminutes: " perc",
                    xhours: " óra",
                    xdays: " nap",
                    xweeks: " hét",
                    xmonths: " hónap",
                    xyears: " év"
                },
                r = {
                    xseconds: {
                        "-1": " másodperccel ezelőtt",
                        1: " másodperc múlva",
                        0: " másodperce"
                    },
                    halfaminute: {
                        "-1": "fél perccel ezelőtt",
                        1: "fél perc múlva",
                        0: "fél perce"
                    },
                    xminutes: {
                        "-1": " perccel ezelőtt",
                        1: " perc múlva",
                        0: " perce"
                    },
                    xhours: {
                        "-1": " órával ezelőtt",
                        1: " óra múlva",
                        0: " órája"
                    },
                    xdays: {
                        "-1": " nappal ezelőtt",
                        1: " nap múlva",
                        0: " napja"
                    },
                    xweeks: {
                        "-1": " héttel ezelőtt",
                        1: " hét múlva",
                        0: " hete"
                    },
                    xmonths: {
                        "-1": " hónappal ezelőtt",
                        1: " hónap múlva",
                        0: " hónapja"
                    },
                    xyears: {
                        "-1": " évvel ezelőtt",
                        1: " év múlva",
                        0: " éve"
                    }
                };
            const s = function(e, t, a) {
                var s = e.match(/about|over|almost|lessthan/i),
                    d = s ? e.replace(s[0], "") : e,
                    o = !0 === (null == a ? void 0 : a.addSuffix),
                    l = d.toLowerCase(),
                    u = (null == a ? void 0 : a.comparison) || 0,
                    m = o ? r[l][u] : n[l],
                    v = "halfaminute" === l ? m : t + m;
                if (s) {
                    var c = s[0].toLowerCase();
                    v = i[c] + " " + v
                }
                return v
            };
            var d = a(849526);
            const o = {
                date: (0, d.Z)({
                    formats: {
                        full: "y. MMMM d., EEEE",
                        long: "y. MMMM d.",
                        medium: "y. MMM d.",
                        short: "y. MM. dd."
                    },
                    defaultWidth: "full"
                }),
                time: (0, d.Z)({
                    formats: {
                        full: "H:mm:ss zzzz",
                        long: "H:mm:ss z",
                        medium: "H:mm:ss",
                        short: "H:mm"
                    },
                    defaultWidth: "full"
                }),
                dateTime: (0, d.Z)({
                    formats: {
                        full: "{{date}} {{time}}",
                        long: "{{date}} {{time}}",
                        medium: "{{date}} {{time}}",
                        short: "{{date}} {{time}}"
                    },
                    defaultWidth: "full"
                })
            };
            var l = ["vasárnap", "hétfőn", "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"];

            function u(e) {
                return function(t) {
                    var a = l[t.getUTCDay()];
                    return "".concat(e ? "" : "'múlt' ", "'").concat(a, "' p'-kor'")
                }
            }
            var m = {
                lastWeek: u(!1),
                yesterday: "'tegnap' p'-kor'",
                today: "'ma' p'-kor'",
                tomorrow: "'holnap' p'-kor'",
                nextWeek: u(!0),
                other: "P"
            };
            const v = function(e, t) {
                var a = m[e];
                return "function" == typeof a ? a(t) : a
            };
            var c = a(688486);
            const h = {
                ordinalNumber: function(e, t) {
                    return Number(e) + "."
                },
                era: (0, c.Z)({
                    values: {
                        narrow: ["ie.", "isz."],
                        abbreviated: ["i. e.", "i. sz."],
                        wide: ["Krisztus előtt", "időszámításunk szerint"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: (0, c.Z)({
                    values: {
                        narrow: ["1.", "2.", "3.", "4."],
                        abbreviated: ["1. n.év", "2. n.év", "3. n.év", "4. n.év"],
                        wide: ["1. negyedév", "2. negyedév", "3. negyedév", "4. negyedév"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    },
                    formattingValues: {
                        narrow: ["I.", "II.", "III.", "IV."],
                        abbreviated: ["I. n.év", "II. n.év", "III. n.év", "IV. n.év"],
                        wide: ["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"]
                    },
                    defaultFormattingWidth: "wide"
                }),
                month: (0, c.Z)({
                    values: {
                        narrow: ["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"],
                        abbreviated: ["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."],
                        wide: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]
                    },
                    defaultWidth: "wide"
                }),
                day: (0, c.Z)({
                    values: {
                        narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
                        short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
                        abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
                        wide: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: (0, c.Z)({
                    values: {
                        narrow: {
                            am: "de.",
                            pm: "du.",
                            midnight: "éjfél",
                            noon: "dél",
                            morning: "reggel",
                            afternoon: "du.",
                            evening: "este",
                            night: "éjjel"
                        },
                        abbreviated: {
                            am: "de.",
                            pm: "du.",
                            midnight: "éjfél",
                            noon: "dél",
                            morning: "reggel",
                            afternoon: "du.",
                            evening: "este",
                            night: "éjjel"
                        },
                        wide: {
                            am: "de.",
                            pm: "du.",
                            midnight: "éjfél",
                            noon: "dél",
                            morning: "reggel",
                            afternoon: "délután",
                            evening: "este",
                            night: "éjjel"
                        }
                    },
                    defaultWidth: "wide"
                })
            };
            var f = a(276723);
            const p = {
                code: "hu",
                formatDistance: s,
                formatLong: o,
                formatRelative: v,
                localize: h,
                match: {
                    ordinalNumber: (0, a(360974).Z)({
                        matchPattern: /^(\d+)\.?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }),
                    era: (0, f.Z)({
                        matchPatterns: {
                            narrow: /^(ie\.|isz\.)/i,
                            abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
                            wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/ie/i, /isz/i],
                            abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
                            any: [/előtt/i, /(szerint|i. sz.)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, f.Z)({
                        matchPatterns: {
                            narrow: /^[1234]\.?/i,
                            abbreviated: /^[1234]?\.?\s?n\.év/i,
                            wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(e) {
                            return e + 1
                        }
                    }),
                    month: (0, f.Z)({
                        matchPatterns: {
                            narrow: /^[jfmaásond]|sz/i,
                            abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
                            wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i],
                            any: [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, f.Z)({
                        matchPatterns: {
                            narrow: /^([vhkpc]|sz|cs|sz)/i,
                            short: /^([vhkp]|sze|cs|szo)/i,
                            abbreviated: /^([vhkp]|sze|cs|szo)/i,
                            wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
                            any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, f.Z)({
                        matchPatterns: {
                            any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^de\.?/i,
                                pm: /^du\.?/i,
                                midnight: /^éjf/i,
                                noon: /^dé/i,
                                morning: /reg/i,
                                afternoon: /^délu\.?/i,
                                evening: /es/i,
                                night: /éjj/i
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
//# sourceMappingURL=3cc405d55291fa7dd91e.js.map
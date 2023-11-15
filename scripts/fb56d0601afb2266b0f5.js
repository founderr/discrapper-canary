(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33691"], {
        862554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var a = n("869806"),
                i = {
                    lessThanXSeconds: {
                        one: "१ सेकंड से कम",
                        other: "{{count}} सेकंड से कम"
                    },
                    xSeconds: {
                        one: "१ सेकंड",
                        other: "{{count}} सेकंड"
                    },
                    halfAMinute: "आधा मिनट",
                    lessThanXMinutes: {
                        one: "१ मिनट से कम",
                        other: "{{count}} मिनट से कम"
                    },
                    xMinutes: {
                        one: "१ मिनट",
                        other: "{{count}} मिनट"
                    },
                    aboutXHours: {
                        one: "लगभग १ घंटा",
                        other: "लगभग {{count}} घंटे"
                    },
                    xHours: {
                        one: "१ घंटा",
                        other: "{{count}} घंटे"
                    },
                    xDays: {
                        one: "१ दिन",
                        other: "{{count}} दिन"
                    },
                    aboutXWeeks: {
                        one: "लगभग १ सप्ताह",
                        other: "लगभग {{count}} सप्ताह"
                    },
                    xWeeks: {
                        one: "१ सप्ताह",
                        other: "{{count}} सप्ताह"
                    },
                    aboutXMonths: {
                        one: "लगभग १ महीना",
                        other: "लगभग {{count}} महीने"
                    },
                    xMonths: {
                        one: "१ महीना",
                        other: "{{count}} महीने"
                    },
                    aboutXYears: {
                        one: "लगभग १ वर्ष",
                        other: "लगभग {{count}} वर्ष"
                    },
                    xYears: {
                        one: "१ वर्ष",
                        other: "{{count}} वर्ष"
                    },
                    overXYears: {
                        one: "१ वर्ष से अधिक",
                        other: "{{count}} वर्ष से अधिक"
                    },
                    almostXYears: {
                        one: "लगभग १ वर्ष",
                        other: "लगभग {{count}} वर्ष"
                    }
                },
                r = function(e, t, n) {
                    var r, o = i[e];
                    if (r = "string" == typeof o ? o : 1 === t ? o.one : o.other.replace("{{count}}", (0, a.numberToLocale)(t)), null != n && n.addSuffix) return n.comparison && n.comparison > 0 ? r + "मे " : r + " पहले";
                    return r
                }
        },
        642745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("818985"),
                i = {
                    date: (0, a.default)({
                        formats: {
                            full: "EEEE, do MMMM, y",
                            long: "do MMMM, y",
                            medium: "d MMM, y",
                            short: "dd/MM/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, a.default)({
                        formats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, a.default)({
                        formats: {
                            full: "{{date}} 'को' {{time}}",
                            long: "{{date}} 'को' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }
        },
        413460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = {
                    lastWeek: "'पिछले' eeee p",
                    yesterday: "'कल' p",
                    today: "'आज' p",
                    tomorrow: "'कल' p",
                    nextWeek: "eeee 'को' p",
                    other: "P"
                },
                i = function(e, t, n, i) {
                    return a[e]
                }
        },
        869806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                localeToNumber: function() {
                    return r
                },
                numberToLocale: function() {
                    return o
                },
                default: function() {
                    return u
                }
            }), n("781738");
            var a = n("64273"),
                i = {
                    locale: {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    number: {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    }
                };

            function r(e) {
                return Number(e.toString().replace(/[१२३४५६७८९०]/g, function(e) {
                    return i.number[e]
                }))
            }

            function o(e) {
                return e.toString().replace(/\d/g, function(e) {
                    return i.locale[e]
                })
            }
            var u = {
                ordinalNumber: function(e, t) {
                    return o(Number(e))
                },
                era: (0, a.default)({
                    values: {
                        narrow: ["ईसा-पूर्व", "ईस्वी"],
                        abbreviated: ["ईसा-पूर्व", "ईस्वी"],
                        wide: ["ईसा-पूर्व", "ईसवी सन"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: (0, a.default)({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["ति1", "ति2", "ति3", "ति4"],
                        wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: (0, a.default)({
                    values: {
                        narrow: ["ज", "फ़", "मा", "अ", "मई", "जू", "जु", "अग", "सि", "अक्टू", "न", "दि"],
                        abbreviated: ["जन", "फ़र", "मार्च", "अप्रैल", "मई", "जून", "जुल", "अग", "सित", "अक्टू", "नव", "दिस"],
                        wide: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"]
                    },
                    defaultWidth: "wide"
                }),
                day: (0, a.default)({
                    values: {
                        narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
                        short: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
                        abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
                        wide: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: (0, a.default)({
                    values: {
                        narrow: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        abbreviated: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        wide: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        abbreviated: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        wide: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            }
        },
        865377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("713289"),
                i = n("504435"),
                r = n("869806"),
                o = {
                    ordinalNumber: (0, i.default)({
                        matchPattern: /^[०१२३४५६७८९]+/i,
                        parsePattern: /^[०१२३४५६७८९]+/i,
                        valueCallback: r.localeToNumber
                    }),
                    era: (0, a.default)({
                        matchPatterns: {
                            narrow: /^(ईसा-पूर्व|ईस्वी)/i,
                            abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
                            wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^b/i, /^(a|c)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, a.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^ति[1234]/i,
                            wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i
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
                    month: (0, a.default)({
                        matchPatterns: {
                            narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
                            abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
                            wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i],
                            any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, a.default)({
                        matchPatterns: {
                            narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
                            short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
                            abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
                            wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
                            any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, a.default)({
                        matchPatterns: {
                            narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
                            any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^पूर्वाह्न/i,
                                pm: /^अपराह्न/i,
                                midnight: /^मध्य/i,
                                noon: /^दो/i,
                                morning: /सु/i,
                                afternoon: /दो/i,
                                evening: /शा/i,
                                night: /रा/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }
        },
        356054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("862554"),
                i = n("642745"),
                r = n("413460"),
                o = n("869806"),
                u = n("865377"),
                d = {
                    code: "hi",
                    formatDistance: a.default,
                    formatLong: i.default,
                    formatRelative: r.default,
                    localize: o.default,
                    match: u.default,
                    options: {
                        weekStartsOn: 0,
                        firstWeekContainsDate: 4
                    }
                }
        }
    }
]);
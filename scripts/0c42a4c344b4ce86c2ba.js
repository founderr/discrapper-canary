"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [68994], {
        968994: (e, a, t) => {
            t.r(a);
            t.d(a, {
                default: () => c
            });
            var i = {
                lessThanXSeconds: {
                    one: "menos de um segundo",
                    other: "menos de {{count}} segundos"
                },
                xSeconds: {
                    one: "1 segundo",
                    other: "{{count}} segundos"
                },
                halfAMinute: "meio minuto",
                lessThanXMinutes: {
                    one: "menos de um minuto",
                    other: "menos de {{count}} minutos"
                },
                xMinutes: {
                    one: "1 minuto",
                    other: "{{count}} minutos"
                },
                aboutXHours: {
                    one: "cerca de 1 hora",
                    other: "cerca de {{count}} horas"
                },
                xHours: {
                    one: "1 hora",
                    other: "{{count}} horas"
                },
                xDays: {
                    one: "1 dia",
                    other: "{{count}} dias"
                },
                aboutXWeeks: {
                    one: "cerca de 1 semana",
                    other: "cerca de {{count}} semanas"
                },
                xWeeks: {
                    one: "1 semana",
                    other: "{{count}} semanas"
                },
                aboutXMonths: {
                    one: "cerca de 1 mês",
                    other: "cerca de {{count}} meses"
                },
                xMonths: {
                    one: "1 mês",
                    other: "{{count}} meses"
                },
                aboutXYears: {
                    one: "cerca de 1 ano",
                    other: "cerca de {{count}} anos"
                },
                xYears: {
                    one: "1 ano",
                    other: "{{count}} anos"
                },
                overXYears: {
                    one: "mais de 1 ano",
                    other: "mais de {{count}} anos"
                },
                almostXYears: {
                    one: "quase 1 ano",
                    other: "quase {{count}} anos"
                }
            };
            const n = function(e, a, t) {
                var n, o = i[e];
                n = "string" == typeof o ? o : 1 === a ? o.one : o.other.replace("{{count}}", String(a));
                return null != t && t.addSuffix ? t.comparison && t.comparison > 0 ? "em " + n : "há " + n : n
            };
            var o = t(849526);
            const r = {
                date: (0, o.Z)({
                    formats: {
                        full: "EEEE, d 'de' MMMM 'de' y",
                        long: "d 'de' MMMM 'de' y",
                        medium: "d MMM y",
                        short: "dd/MM/yyyy"
                    },
                    defaultWidth: "full"
                }),
                time: (0, o.Z)({
                    formats: {
                        full: "HH:mm:ss zzzz",
                        long: "HH:mm:ss z",
                        medium: "HH:mm:ss",
                        short: "HH:mm"
                    },
                    defaultWidth: "full"
                }),
                dateTime: (0, o.Z)({
                    formats: {
                        full: "{{date}} 'às' {{time}}",
                        long: "{{date}} 'às' {{time}}",
                        medium: "{{date}}, {{time}}",
                        short: "{{date}}, {{time}}"
                    },
                    defaultWidth: "full"
                })
            };
            var d = {
                lastWeek: function(e) {
                    var a = e.getUTCDay();
                    return "'" + (0 === a || 6 === a ? "último" : "última") + "' eeee 'às' p"
                },
                yesterday: "'ontem às' p",
                today: "'hoje às' p",
                tomorrow: "'amanhã às' p",
                nextWeek: "eeee 'às' p",
                other: "P"
            };
            const s = function(e, a, t, i) {
                var n = d[e];
                return "function" == typeof n ? n(a) : n
            };
            var m = t(688486);
            const u = {
                ordinalNumber: function(e, a) {
                    var t = Number(e);
                    return "week" === (null == a ? void 0 : a.unit) ? t + "ª" : t + "º"
                },
                era: (0, m.Z)({
                    values: {
                        narrow: ["AC", "DC"],
                        abbreviated: ["AC", "DC"],
                        wide: ["antes de cristo", "depois de cristo"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: (0, m.Z)({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["T1", "T2", "T3", "T4"],
                        wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: (0, m.Z)({
                    values: {
                        narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                        abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                        wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                    },
                    defaultWidth: "wide"
                }),
                day: (0, m.Z)({
                    values: {
                        narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                        short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
                        abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
                        wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: (0, m.Z)({
                    values: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mn",
                            noon: "md",
                            morning: "manhã",
                            afternoon: "tarde",
                            evening: "tarde",
                            night: "noite"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "meia-noite",
                            noon: "meio-dia",
                            morning: "manhã",
                            afternoon: "tarde",
                            evening: "tarde",
                            night: "noite"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "meia-noite",
                            noon: "meio-dia",
                            morning: "manhã",
                            afternoon: "tarde",
                            evening: "tarde",
                            night: "noite"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mn",
                            noon: "md",
                            morning: "da manhã",
                            afternoon: "da tarde",
                            evening: "da tarde",
                            night: "da noite"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "meia-noite",
                            noon: "meio-dia",
                            morning: "da manhã",
                            afternoon: "da tarde",
                            evening: "da tarde",
                            night: "da noite"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "meia-noite",
                            noon: "meio-dia",
                            morning: "da manhã",
                            afternoon: "da tarde",
                            evening: "da tarde",
                            night: "da noite"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            };
            var h = t(276723);
            const c = {
                code: "pt-BR",
                formatDistance: n,
                formatLong: r,
                formatRelative: s,
                localize: u,
                match: {
                    ordinalNumber: (0, t(360974).Z)({
                        matchPattern: /^(\d+)[ºªo]?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }),
                    era: (0, h.Z)({
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
                    quarter: (0, h.Z)({
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
                    month: (0, h.Z)({
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
                    day: (0, h.Z)({
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
                    dayPeriod: (0, h.Z)({
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
                },
                options: {
                    weekStartsOn: 0,
                    firstWeekContainsDate: 1
                }
            }
        }
    }
]);
//# sourceMappingURL=0c42a4c344b4ce86c2ba.js.map
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44235], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        371188: (e, n, t) => {
            "use strict";
            t.d(n, {
                G3: () => s,
                Ho: () => b,
                Ib: () => u,
                ib: () => d,
                ub: () => y,
                v1: () => m
            });
            var r = t(730381),
                a = t.n(r),
                l = t(146464);
            t(3155);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = 365,
                u = s + 1,
                d = function() {
                    var e = a()().add(1, "hour"),
                        n = e.hour();
                    e.minutes() >= 30 && (n += 1);
                    return e.hour(n).minutes(0).seconds(0)
                };
            var c = function(e, n) {
                    return e.format(e.get("years") === n.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                f = function(e, n) {
                    return e.diff(n, "days") > 1 ? c(e, n) : e.calendar(n)
                };

            function y(e, n, t) {
                null == t && (t = a()());
                var r = a()(e),
                    l = null != n && "" !== n ? a()(n) : void 0,
                    o = null != n && r.isSame(l, "day");
                return {
                    startDateTimeString: f(r, t),
                    endDateTimeString: null != l ? o ? l.format("LT") : c(l, t) : void 0,
                    currentOrPastEvent: r <= t,
                    upcomingEvent: r <= a()().add(1, "hour"),
                    withinStartWindow: r <= a()().add(15, "minute"),
                    diffMinutes: r.diff(t, "minutes")
                }
            }

            function h(e, n) {
                var t;
                if (null != e) {
                    t = {
                        startDate: a()(e),
                        endDate: void 0
                    };
                    null != n && (t.endDate = a()(n))
                }
                return t
            }

            function m(e) {
                return h(e.scheduledStartTime, e.scheduledEndTime)
            }

            function b(e) {
                return new l.Ci({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? i(e.byWeekday) : null,
                    bymonth: null != e.byMonth ? i(e.byMonth) : null,
                    bymonthday: null != e.byMonthDay ? i(e.byMonthDay) : null,
                    byyearday: null != e.byYearDay ? i(e.byYearDay) : null,
                    count: e.count
                })
            }
        },
        99271: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => h
            });
            var r = t(785893),
                a = (t(667294), t(70418)),
                l = t(116404),
                o = t(832642),
                i = t(443812),
                s = t(890251),
                u = t(242735),
                d = t(201441),
                c = t(473708),
                f = t(347542),
                y = t.n(f);

            function h(e) {
                var n = e.channel,
                    t = e.transitionState,
                    f = e.onClose,
                    h = (0, i.Dt)(),
                    m = (0, d.qY)(n.id);
                if (null == m) return null;
                var b = function() {
                    l.default.selectVoiceChannel(null);
                    f()
                };
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": h,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsxs)(a.ModalContent, {
                        className: y().content,
                        children: [(0, r.jsx)(o.Z, {
                            children: (0, r.jsx)("div", {
                                className: y().iconBackground,
                                children: (0, r.jsx)(s.Z, {
                                    height: 40,
                                    width: 40,
                                    className: y().icon
                                })
                            })
                        }), (0, r.jsx)(a.Heading, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: y().title,
                            children: c.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: y().subtitle,
                            children: c.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            color: a.Button.Colors.RED,
                            onClick: function() {
                                u.Z.endEvent(m.id, m.guild_id);
                                b()
                            },
                            children: c.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, r.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            className: y().cancelButton,
                            onClick: b,
                            children: c.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                l = t.n(a),
                o = t(473708),
                i = t(300443),
                s = t.n(i),
                u = t(483683),
                d = t.n(u),
                c = t(63685),
                f = t.n(c);

            function y(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: l()(s().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: l()(s().sparkleIcon, s().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: l()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        }
    }
]);
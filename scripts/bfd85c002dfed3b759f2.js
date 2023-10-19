"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14688], {
        99539: (e, t, n) => {
            n.d(t, {
                q: () => l
            });
            var r = n(202351),
                s = n(227202),
                a = n(5544),
                i = n(682776);

            function l(e) {
                var t, n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, r.Wu)([a.ZP, i.Z], (function() {
                    return a.ZP.getChannels(n)[a.Zb].reduce((function(e, t) {
                        var n = t.channel;
                        if (!n.isGuildStageVoice()) return e;
                        (function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                            return !!e.isGuildStageVoice() && t.can(s.yP, e)
                        })(t.channel, i.Z) && e.push(n);
                        return e
                    }), [])
                }), [n])
            }
        },
        32111: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                s = n(667294),
                a = n(730381),
                i = n.n(a),
                l = n(70418),
                o = n(153686),
                c = n(19585),
                u = n(559968),
                d = n(123017),
                E = n(907975),
                m = n(610030),
                f = n(8846),
                h = n(473708);

            function g(e) {
                var t = e.startDate,
                    n = e.recurrenceRule,
                    a = e.onRecurrenceChange,
                    i = s.useMemo((function() {
                        return (0, m.zi)(n)
                    }), [n]),
                    o = function(e) {
                        var t = e.toDate(),
                            n = Math.ceil(t.getDate() / 7),
                            r = t.toLocaleString(h.Z.getLocale(), {
                                weekday: "long"
                            });
                        return [{
                            value: f.z.NONE,
                            label: h.Z.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: f.z.WEEKLY,
                            label: h.Z.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: r
                            })
                        }, {
                            value: f.z.MONTHLY,
                            label: h.Z.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                                nth: n,
                                weekday: r
                            })
                        }, {
                            value: f.z.YEARLY,
                            label: h.Z.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(h.Z.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }, {
                            value: f.z.WEEKDAY_ONLY,
                            label: h.Z.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                        }]
                    }(t),
                    c = function(e) {
                        return e.toString()
                    };
                return (0, r.jsx)(l.FormItem, {
                    title: h.Z.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, r.jsx)(l.Select, {
                        placeholder: "gaming",
                        options: o,
                        select: a,
                        serialize: c,
                        isSelected: function(e) {
                            return null != i && c(e) === c(i)
                        }
                    })
                })
            }
            var j = n(908453),
                b = n.n(j);

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function O(e) {
                var t = e.className,
                    n = e.guildId,
                    s = e.onScheduleChange,
                    a = e.onRecurrenceChange,
                    f = e.onTimeChange,
                    j = e.timeSelected,
                    _ = void 0 === j || j,
                    O = e.schedule,
                    x = e.recurrenceRule,
                    T = e.showEndDate,
                    D = void 0 !== T && T,
                    N = e.requireEndDate,
                    Z = void 0 !== N && N,
                    S = e.disableStartDateTime,
                    y = void 0 !== S && S,
                    R = (0,
                        c.Z)(o.Z.EVENT_SETTINGS).analyticsLocations,
                    A = E.Z.useExperiment({
                        guildId: null != n ? n : "",
                        location: R[0]
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                if (null == O) return null;
                var I = null,
                    C = O.startDate,
                    L = i()(),
                    P = i()().add(m.G3, "days"),
                    M = i()().add(m.Ib, "days"),
                    w = A && null != C,
                    k = function(e) {
                        s(v(p({}, O), {
                            endDate: e
                        }))
                    };
                null != C && E.Z.trackExposure({
                    guildId: null != n ? n : "",
                    location: R[0]
                });
                D && (I = null != O.endDate || Z ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: b().doubleInput,
                        children: [(0, r.jsx)(l.FormItem, {
                            title: h.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: Z,
                            children: (0, r.jsx)(l.DateInput, {
                                value: O.endDate,
                                onSelect: k,
                                minDate: O.startDate,
                                maxDate: M
                            })
                        }), (0, r.jsx)(l.FormItem, {
                            title: h.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: Z,
                            children: (0, r.jsx)(l.TimeInput, {
                                value: O.endDate,
                                onChange: k
                            })
                        })]
                    }), Z ? null : (0, r.jsx)(l.Button, {
                        onClick: function() {
                            k(void 0)
                        },
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        children: (0, r.jsxs)("div", {
                            className: b().link,
                            children: [(0, r.jsx)(u.Z, {
                                width: 17,
                                height: 17,
                                className: b().removeIcon
                            }), (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: h.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, r.jsx)(l.Button, {
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.MIN,
                    onClick: function() {
                        k(i()(O.startDate).add(1, "hour"))
                    },
                    children: (0, r.jsxs)("div", {
                        className: b().link,
                        children: [(0, r.jsx)(d.Z, {
                            width: 20,
                            height: 20,
                            className: b().addIcon
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: h.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: t,
                    children: [(0, r.jsxs)("div", {
                        className: b().doubleInput,
                        children: [(0, r.jsx)(l.FormItem, {
                            title: h.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, r.jsx)(l.DateInput, {
                                value: O.startDate,
                                onSelect: function(e) {
                                    s(v(p({}, O), {
                                        startDate: e
                                    }))
                                },
                                minDate: L,
                                maxDate: P,
                                disabled: y
                            })
                        }), (0, r.jsx)(l.FormItem, {
                            title: h.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, r.jsx)(l.TimeInput, {
                                value: O.startDate,
                                onChange: function(e) {
                                    if (e.isValid()) {
                                        null == f || f(!0);
                                        s(v(p({}, O), {
                                            startDate: e
                                        }))
                                    }
                                },
                                hideValue: !_,
                                disabled: y
                            })
                        })]
                    }), I, w && (0, r.jsx)(g, {
                        onRecurrenceChange: a,
                        startDate: C,
                        recurrenceRule: x
                    })]
                })
            }
        },
        800455: (e, t, n) => {
            n.d(t, {
                Xd: () => v,
                mv: () => p
            });
            var r = n(785893),
                s = (n(667294), n(202351)),
                a = n(795308),
                i = n(70418),
                l = n(971402),
                o = n(742257),
                c = n(961241),
                u = n(98265),
                d = n(661782),
                E = n(749565),
                m = n(933022),
                f = n(426404),
                h = n(473708),
                g = n(858003),
                j = n.n(g);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var p = function(e) {
                    var t = e.channelId,
                        n = (0, f._d)(t);
                    if (0 === n) return null;
                    return (0, r.jsxs)("div", {
                        className: j().blockedNotice,
                        children: [(0, r.jsx)(o.Z, {
                            className: j().blockedIcon,
                            color: a.Z.unsafe_rawColors.RED_400.css
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: h.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, r.jsx)(i.Clickable, {
                            className: j().blockedButton,
                            onClick: function(e) {
                                (0, l.vq)(e, (function(e) {
                                    return (0, r.jsx)(O, _(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                b(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        channelId: t
                                    }))
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: h.Z.Messages.VIEW_ALL
                        })]
                    })
                },
                v = function(e) {
                    var t = e.user,
                        n = e.showStatus,
                        a = e.speaker,
                        l = e.channelId,
                        o = (0, s.e7)([m.ZP], (function() {
                            return m.ZP.isModerator(t.id, l)
                        })),
                        f = null;
                    n && (f = a ? h.Z.Messages.STAGE_SPEAKER : o ? h.Z.Messages.STAGE_MODERATOR_TOOLTIP : h.Z.Messages.STAGE_AUDIENCE);
                    return (0, r.jsxs)("div", {
                        className: j().user,
                        children: [(0, r.jsx)(d.Z, {
                            src: t.getAvatarURL(null, 32),
                            size: i.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: a ? function() {
                                return (0, r.jsx)(c.Z, {
                                    className: j().icon
                                })
                            } : null
                        }, t.id), (0, r.jsxs)("div", {
                            className: j().userInfo,
                            children: [(0, r.jsxs)("div", {
                                className: j().username,
                                children: [(0, r.jsx)(u.Z, {
                                    size: n ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    children: E.ZP.getName(t)
                                }), (0, r.jsx)(u.Z, {
                                    size: n ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    color: u.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: j().username,
                                children: [(0, r.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: h.Z.Messages.BLOCKED
                                }), (0, r.jsxs)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", f]
                                })]
                            })]
                        })]
                    })
                },
                O = function(e) {
                    var t = e.channelId,
                        n = (0, f.z)(t);
                    return (0, r.jsx)(i.Scroller, {
                        className: j().container,
                        children: n.map((function(e) {
                            var n = e.user;
                            return (0, r.jsx)(v, {
                                user: n,
                                channelId: t
                            }, n.id)
                        }))
                    })
                }
        }
    }
]);
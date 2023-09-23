(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3849, 80695], {
        483683: (e, t, r) => {
            e.exports = r.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, r) => {
            e.exports = r.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        753074: e => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                r = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                n = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, o, i) {
                if ("string" != typeof o) {
                    var l = Object.getOwnPropertyNames(o);
                    n && (l = l.concat(Object.getOwnPropertySymbols(o)));
                    for (var c = 0; c < l.length; ++c)
                        if (!(t[l[c]] || r[l[c]] || i && i[l[c]])) try {
                            e[l[c]] = o[l[c]]
                        } catch (e) {}
                }
                return e
            }
        },
        735885: (e, t, r) => {
            "use strict";
            r.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => l
            });
            var n = r(744564);

            function o(e) {
                n.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                n.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                n.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        734691: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(281110),
                o = r(630631),
                i = r(744564),
                l = r(223219),
                c = r(652591),
                a = r(775173),
                s = r(488110),
                u = r(120415),
                f = r(735885),
                d = r(2590),
                p = r(473708);

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        O(e, t, r[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            const h = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, r));
                    (0, f.jN)(d.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, r))
                },
                close: function() {
                    var e = l.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, r))
                },
                clearSubsection: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var r = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var l = e.username,
                        f = e.email,
                        O = e.emailToken,
                        h = e.password,
                        g = e.avatar,
                        v = e.newPassword,
                        m = e.discriminator,
                        j = t.close;
                    return (0, s.Z)((function(e) {
                        var t = y(b({
                                username: l,
                                email: f,
                                email_token: O,
                                password: h,
                                avatar: g,
                                new_password: v
                            }, e), {
                                discriminator: null != m && "" !== m ? m : void 0
                            }),
                            r = o.Z.get(d.JkL),
                            i = (0, u.xJ)();
                        if (null != i && null != r) {
                            t.push_provider = i;
                            t.push_token = r
                        }
                        var c = o.Z.get(d.scU);
                        if (null != d.mvA && null != c) {
                            t.push_voip_provider = d.mvA;
                            t.push_voip_token = c
                        }
                        return n.ZP.patch({
                            url: d.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: p.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            n = t.token;
                        c.default.track(d.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, a.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: n,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != v && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: v
                        });
                        null != h && null != v && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        j ? r.close() : r.submitComplete();
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        238823: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        218790: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        99539: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => c
            });
            var n = r(202351),
                o = r(227202),
                i = r(5544),
                l = r(682776);

            function c(e) {
                var t, r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, n.Wu)([i.ZP, l.Z], (function() {
                    return i.ZP.getChannels(r)[i.Zb].reduce((function(e, t) {
                        var r = t.channel;
                        if (!r.isGuildStageVoice()) return e;
                        (function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
                            return !!e.isGuildStageVoice() && t.can(o.yP, e)
                        })(t.channel, l.Z) && e.push(r);
                        return e
                    }), [])
                }), [r])
            }
        },
        371188: (e, t, r) => {
            "use strict";
            r.d(t, {
                G3: () => i,
                Ib: () => l,
                ib: () => c,
                ub: () => u,
                v1: () => d,
                me: () => p
            });
            var n = r(730381),
                o = r.n(n),
                i = (r(3155), 365),
                l = i + 1,
                c = function() {
                    var e = o()().add(1, "hour"),
                        t = e.hour();
                    e.minutes() >= 30 && (t += 1);
                    return e.hour(t).minutes(0).seconds(0)
                };
            var a = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                s = function(e, t) {
                    return e.diff(t, "days") > 1 ? a(e, t) : e.calendar(t)
                };

            function u(e, t, r) {
                null == r && (r = o()());
                var n = o()(e),
                    i = null != t && "" !== t ? o()(t) : void 0,
                    l = null != t && n.isSame(i, "day");
                return {
                    startDateTimeString: s(n, r),
                    endDateTimeString: null != i ? l ? i.format("LT") : a(i, r) : void 0,
                    currentOrPastEvent: n <= r,
                    upcomingEvent: n <= o()().add(1, "hour"),
                    withinStartWindow: n <= o()().add(15, "minute"),
                    diffMinutes: n.diff(r, "minutes")
                }
            }

            function f(e, t) {
                var r;
                if (null != e) {
                    r = {
                        startDate: o()(e),
                        endDate: void 0
                    };
                    null != t && (r.endDate = o()(t))
                }
                return r
            }

            function d(e) {
                return f(e.scheduledStartTime, e.scheduledEndTime)
            }

            function p(e) {
                return f(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        497028: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => y
            });
            var n = r(785893),
                o = (r(667294),
                    r(730381)),
                i = r.n(o),
                l = r(882723),
                c = r(559968),
                a = r(123017),
                s = r(371188),
                u = r(473708),
                f = r(250088),
                d = r.n(f);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        p(e, t, r[t])
                    }))
                }
                return e
            }

            function b(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function y(e) {
                var t = e.className,
                    r = e.onScheduleChange,
                    o = e.onTimeChange,
                    f = e.timeSelected,
                    p = void 0 === f || f,
                    y = e.schedule,
                    h = e.showEndDate,
                    g = void 0 !== h && h,
                    v = e.requireEndDate,
                    m = void 0 !== v && v,
                    j = e.disableStartDateTime,
                    S = void 0 !== j && j;
                if (null == y) return null;
                var E = null,
                    w = i()(),
                    _ = i()().add(s.G3, "days"),
                    P = i()().add(s.Ib, "days"),
                    T = function(e) {
                        r(b(O({}, y), {
                            endDate: e
                        }))
                    };
                g && (E = null != y.endDate || m ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: d().doubleInput,
                        children: [(0, n.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, n.jsx)(l.DateInput, {
                                value: y.endDate,
                                onSelect: T,
                                minDate: y.startDate,
                                maxDate: P
                            })
                        }), (0, n.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, n.jsx)(l.TimeInput, {
                                value: y.endDate,
                                onChange: T
                            })
                        })]
                    }), m ? null : (0, n.jsx)(l.Button, {
                        onClick: function() {
                            T(void 0)
                        },
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        children: (0, n.jsxs)("div", {
                            className: d().link,
                            children: [(0, n.jsx)(c.Z, {
                                width: 17,
                                height: 17,
                                className: d().removeIcon
                            }), (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: u.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, n.jsx)(l.Button, {
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.MIN,
                    onClick: function() {
                        T(i()(y.startDate).add(1, "hour"))
                    },
                    children: (0, n.jsxs)("div", {
                        className: d().link,
                        children: [(0, n.jsx)(a.Z, {
                            width: 20,
                            height: 20,
                            className: d().addIcon
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: u.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                }));
                return (0, n.jsxs)("div", {
                    className: t,
                    children: [(0, n.jsxs)("div", {
                        className: d().doubleInput,
                        children: [(0, n.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, n.jsx)(l.DateInput, {
                                value: y.startDate,
                                onSelect: function(e) {
                                    r(b(O({}, y), {
                                        startDate: e
                                    }))
                                },
                                minDate: w,
                                maxDate: _,
                                disabled: S
                            })
                        }), (0, n.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, n.jsx)(l.TimeInput, {
                                value: y.startDate,
                                onChange: function(e) {
                                    if (e.isValid()) {
                                        null == o || o(!0);
                                        r(b(O({}, y), {
                                            startDate: e
                                        }))
                                    }
                                },
                                hideValue: !p,
                                disabled: S
                            })
                        })]
                    }), E]
                })
            }
        },
        173764: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(882723),
                c = r(961241),
                a = r(473708),
                s = r(549099),
                u = r.n(s);

            function f(e) {
                var t = e.guild,
                    r = e.speakers,
                    o = e.speakerCount,
                    s = e.className,
                    f = r.slice(0, 5),
                    d = f.map((function(e) {
                        var r, o;
                        return (0, n.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, n.jsx)(l.Avatar, {
                                src: null == e || null === (r = e.user) || void 0 === r ? void 0 : r.getAvatarURL(t.id, 20),
                                size: l.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, n.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, n.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (o = e.user) || void 0 === o ? void 0 : o.id)
                    })),
                    p = o - f.length;
                return (0, n.jsxs)("div", {
                    className: i()(u().grid, s),
                    children: [d, p > 0 && (0, n.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, n.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, n.jsx)(c.Z, {
                                height: 12
                            })
                        }), (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: a.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        },
        115617: (e, t, r) => {
            "use strict";
            r.d(t, {
                Kw: () => l,
                hv: () => c,
                Po: () => a
            });
            var n = r(744564),
                o = r(652591),
                i = r(2590);

            function l(e) {
                o.default.track(i.rMx.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                });
                n.Z.wait((function() {
                    n.Z.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                }))
            }

            function c(e, t) {
                n.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function a(e) {
                n.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => y
            });
            var n = r(202351),
                o = r(744564),
                i = r(113469),
                l = r(199790);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function s(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return s(this, r)
                }
            }
            var p = new Set,
                O = {};
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(r, e);
                var t = d(r);

                function r() {
                    c(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (p = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (O = e.hotspotOverrides)
                    }
                };
                n.hasHotspot = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t && O[e];
                    return !l.a && (!i.s.isDisallowPopupsSet() && (r || !p.has(e)))
                };
                n.hasHiddenHotspot = function(e) {
                    return p.has(e)
                };
                n.getHotspotOverride = function(e) {
                    return O[e]
                };
                n.getState = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: O
                    }
                };
                return r
            }(n.ZP.PersistedStore);
            b.displayName = "HotspotStore";
            b.persistKey = "hotspots";
            b.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            const y = new b(o.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    p = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (p.has(t)) return !1;
                    p.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        r = e.enabled;
                    O[t] = r
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == O[t]) return !1;
                    delete O[t]
                }
            })
        },
        442812: (e, t, r) => {
            "use strict";
            r.d(t, {
                w8: () => s,
                Rk: () => u,
                Fd: () => f,
                Io: () => d
            });
            var n = r(202351),
                o = r(664806),
                i = r(82274),
                l = r(808194);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                return a((0, n.e7)([i.Z], (function() {
                    return [i.Z.getMutableParticipants(e, t), i.Z.getParticipantsVersion(e)]
                }), [e, t], o.Q), 1)[0]
            }

            function u(e, t) {
                return (0, n.e7)([i.Z], (function() {
                    return i.Z.getParticipantCount(e, t)
                }), [e, t])
            }

            function f(e) {
                return a((0, n.e7)([i.Z], (function() {
                    return [i.Z.getMutableRequestToSpeakParticipants(e), i.Z.getRequestToSpeakParticipantsVersion(e)]
                }), [e], o.Q), 1)[0]
            }

            function d(e) {
                return (0, n.e7)([i.Z], (function() {
                    return i.Z.getMutableParticipants(e, l.pV.SPEAKER).filter((function(e) {
                        return e.type === l.Ui.VOICE
                    })).length
                }), [e])
            }
        },
        800455: (e, t, r) => {
            "use strict";
            r.d(t, {
                mv: () => m,
                Xd: () => j
            });
            var n = r(785893),
                o = (r(667294),
                    r(202351)),
                i = r(795308),
                l = r(882723),
                c = r(971402),
                a = r(742257),
                s = r(961241),
                u = r(98265),
                f = r(661782),
                d = r(749565),
                p = r(933022),
                O = r(426404),
                b = r(473708),
                y = r(555563),
                h = r.n(y);

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function v(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var m = function(e) {
                    var t = e.channelId,
                        r = (0, O._d)(t);
                    if (0 === r) return null;
                    return (0, n.jsxs)("div", {
                        className: h().blockedNotice,
                        children: [(0, n.jsx)(a.Z, {
                            className: h().blockedIcon,
                            color: i.Z.unsafe_rawColors.RED_400.css
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: b.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: r
                            })
                        }), (0, n.jsx)(l.Clickable, {
                            className: h().blockedButton,
                            onClick: function(e) {
                                (0, c.vq)(e, (function(e) {
                                    return (0, n.jsx)(S, v(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                g(e, t, r[t])
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
                            children: b.Z.Messages.VIEW_ALL
                        })]
                    })
                },
                j = function(e) {
                    var t = e.user,
                        r = e.showStatus,
                        i = e.speaker,
                        c = e.channelId,
                        a = (0, o.e7)([p.ZP], (function() {
                            return p.ZP.isModerator(t.id, c)
                        })),
                        O = null;
                    r && (O = i ? b.Z.Messages.STAGE_SPEAKER : a ? b.Z.Messages.STAGE_MODERATOR_TOOLTIP : b.Z.Messages.STAGE_AUDIENCE);
                    return (0, n.jsxs)("div", {
                        className: h().user,
                        children: [(0, n.jsx)(f.Z, {
                            src: t.getAvatarURL(null, 32),
                            size: l.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i ? function() {
                                return (0, n.jsx)(s.Z, {
                                    className: h().icon
                                })
                            } : null
                        }, t.id), (0, n.jsxs)("div", {
                            className: h().userInfo,
                            children: [(0, n.jsxs)("div", {
                                className: h().username,
                                children: [(0, n.jsx)(u.Z, {
                                    size: r ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    children: d.ZP.getName(t)
                                }), (0, n.jsx)(u.Z, {
                                    size: r ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    color: u.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: h().username,
                                children: [(0, n.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: b.Z.Messages.BLOCKED
                                }), (0, n.jsxs)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", O]
                                })]
                            })]
                        })]
                    })
                },
                S = function(e) {
                    var t = e.channelId,
                        r = (0, O.z)(t);
                    return (0, n.jsx)(l.Scroller, {
                        className: h().container,
                        children: r.map((function(e) {
                            var r = e.user;
                            return (0, n.jsx)(j, {
                                user: r,
                                channelId: t
                            }, r.id)
                        }))
                    })
                }
        },
        832642: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294),
                    r(294184)),
                i = r.n(o),
                l = r(473708),
                c = r(347234),
                a = r.n(c),
                s = r(483683),
                u = r.n(s),
                f = r(63685),
                d = r.n(f);

            function p(e) {
                var t = e.className,
                    r = e.children;
                return (0, n.jsxs)("div", {
                    className: i()(a().container, t),
                    children: [(0, n.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: i()(a().sparkleIcon, a().sparkleBottom)
                    }), r, (0, n.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u(),
                        className: i()(a().sparkleIcon, a().sparkleTop)
                    })]
                })
            }
        },
        423285: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => Be
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(882723),
                c = r(567403),
                a = r(443812),
                s = r(565571),
                u = r(766496),
                f = r(832642),
                d = r(473903),
                p = r(560560),
                O = r(472034),
                b = r(180695),
                y = r(422557),
                h = r(348592),
                g = r(773148),
                v = r(442812),
                m = r(808194),
                j = r(294184),
                S = r.n(j),
                E = r(796399),
                w = r(173764),
                _ = r(206986),
                P = r(124251),
                T = r(179952),
                C = r(658705),
                I = r.n(C);
            const x = function(e) {
                var t = e.count,
                    r = e.className;
                return (0, n.jsxs)("div", {
                    className: S()(I().container, r),
                    children: [(0, n.jsx)(T.Z, {
                        width: 12,
                        height: 12,
                        className: I().icon
                    }), (0, n.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: null != t ? t : 0
                    })]
                })
            };
            var N, A = r(756221),
                D = r.n(A);

            function L(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED";
                e[e.TRENDING = 1] = "TRENDING";
                e[e.PERSONALIZED = 2] = "PERSONALIZED";
                e[e.USER_GUILDS = 3] = "USER_GUILDS";
                e[e.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS";
                e[e.INTRO_CARD = 5] = "INTRO_CARD";
                e[e.FEATURED = 6] = "FEATURED"
            }(N || (N = {}));

            function R(e) {
                var t = e.guild,
                    r = e.stageInstance,
                    o = e.showGuildPopout,
                    i = e.setShowGuildPopout,
                    c = e.handleGuildNameClick,
                    a = e.source,
                    u = e.speakers,
                    f = e.speakerCount,
                    d = e.audienceCount,
                    p = e.channelName,
                    O = t.id;
                return (0, n.jsx)("div", {
                    className: D().contentContainer,
                    children: (0, n.jsxs)("div", {
                        className: D().headerContainer,
                        children: [(0, n.jsxs)("div", {
                            className: D().guildInfoContainer,
                            children: [(0, n.jsx)(E.Z, {
                                guildId: O,
                                shouldShow: o,
                                onRequestClose: function() {
                                    return i(!1)
                                },
                                children: function() {
                                    return (0,
                                        n.jsxs)(l.Clickable, {
                                        className: D().flexContainerRow,
                                        onClick: c,
                                        children: [(0, n.jsx)(P.Z, {
                                            guild: t,
                                            size: P.Z.Sizes.MINI,
                                            className: D().guildIcon
                                        }), (0, n.jsxs)("div", {
                                            className: D().flexContainerRow,
                                            children: [(0, n.jsx)(l.Text, {
                                                color: "header-secondary",
                                                variant: "text-sm/normal",
                                                className: S()(D().guildName, L({}, D().disabled, null == c)),
                                                children: t.name
                                            }), (0, n.jsx)(_.Z, {
                                                guild: t
                                            })]
                                        })]
                                    })
                                }
                            }), (0, n.jsxs)("div", {
                                className: D().rightJustifiedContent,
                                children: [a === N.FEATURED && (0, n.jsx)("div", {
                                    className: D().featuredTag,
                                    children: (0, n.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        className: D().featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, n.jsx)(x, {
                                    count: d,
                                    className: D().audienceCount
                                })]
                            })]
                        }), (0, n.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: D().topicText,
                            children: r.topic
                        }), (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            className: D().description,
                            variant: "text-sm/normal",
                            children: r.description
                        }), (0, n.jsx)(w.Z, {
                            guild: t,
                            speakers: u,
                            speakerCount: f,
                            className: D().speakers
                        }), null != p && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("hr", {
                                className: D().divider
                            }), (0, n.jsxs)("div", {
                                className: D().footer,
                                children: [(0, n.jsx)(s.Z, {
                                    width: 20,
                                    height: 20,
                                    className: D().icon
                                }), (0, n.jsx)(l.Text, {
                                    color: "header-secondary",
                                    className: D().label,
                                    variant: "text-sm/normal",
                                    children: p
                                })]
                            })]
                        })]
                    })
                })
            }
            var Z = r(2590),
                M = r(3155),
                k = r(473708),
                U = r(721637),
                G = r.n(U);

            function B(e) {
                var t = e.icon;
                return (0, n.jsx)("div", {
                    className: G().iconContainer,
                    children: (0, n.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function V(e) {
                var t = e.icon,
                    r = e.text;
                return (0, n.jsxs)("div", {
                    className: G().listItemContainer,
                    children: [(0, n.jsx)("div", {
                        className: G().listItemIconContainer,
                        children: t
                    }), (0, n.jsx)(l.Text, {
                        className: G().listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: r
                    })]
                })
            }

            function H(e) {
                var t, r = e.guild,
                    o = e.channel,
                    l = e.stageData,
                    c = (0, i.e7)([d.default], (function() {
                        return d.default.getCurrentUser()
                    }), []),
                    a = {
                        id: "1337",
                        guild_id: r.id,
                        channel_id: o.id,
                        topic: l.topic,
                        description: l.description,
                        privacy_level: null !== (t = l.privacyLevel) && void 0 !== t ? t : M.j8.PUBLIC
                    },
                    s = (0, v.w8)(o.id, m.pV.SPEAKER),
                    u = (0, v.Rk)(o.id, m.pV.AUDIENCE),
                    f = s.slice(0, 5);
                null == f.find((function(e) {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == c ? void 0 : c.id)
                })) && f.push({
                    user: c,
                    userNick: g.ZP.getName(r.id, o.id, c)
                });
                return (0, n.jsx)("div", {
                    className: G().previewCardContainer,
                    children: (0, n.jsx)("div", {
                        className: G().previewCard,
                        children: (0, n.jsx)(R, {
                            guild: r,
                            stageInstance: a,
                            showGuildPopout: !1,
                            setShowGuildPopout: function() {},
                            source: N.UNSPECIFIED,
                            speakers: f,
                            speakerCount: s.length,
                            audienceCount: Math.max(1337, u),
                            channelName: o.name
                        })
                    })
                })
            }

            function F(e) {
                var t = e.guild,
                    r = e.channel,
                    o = e.stageData,
                    i = e.headerId,
                    c = e.loading,
                    a = e.onNext,
                    s = e.onCancel,
                    u = e.onBack;
                return null == t || null == r || null == o ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(H, {
                        guild: t,
                        channel: r,
                        stageData: o
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: G().container,
                        children: [(0, n.jsxs)("div", {
                            className: G().header,
                            children: [(0, n.jsx)(l.Heading, {
                                id: i,
                                className: G().title,
                                variant: "heading-xl/semibold",
                                children: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, n.jsx)(l.Text, {
                                className: G().subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, n.jsxs)("div", {
                            className: G().list,
                            children: [(0, n.jsx)(V, {
                                icon: (0, n.jsx)(B, {
                                    icon: p.Z
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, n.jsx)(V, {
                                icon: (0, n.jsx)(B, {
                                    icon: b.Z
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, n.jsx)(V, {
                                icon: (0, n.jsx)(B, {
                                    icon: O.Z
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, n.jsx)(V, {
                                icon: (0, n.jsx)(y.Z, {
                                    className: G().badgeIconBackground,
                                    foreground: G().badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: h.Z.getArticleURL(Z.BhN.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        children: [(0, n.jsx)(l.Button, {
                            color: l.Button.Colors.GREEN,
                            onClick: a,
                            submitting: c,
                            children: k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, n.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: G().cancelButton,
                            onClick: s,
                            children: k.Z.Messages.CANCEL
                        }), (0, n.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.LINK,
                            className: G().backButton,
                            onClick: u,
                            size: l.Button.Sizes.MIN,
                            children: k.Z.Messages.BACK
                        })]
                    })]
                })
            }
            var Y = r(730381),
                W = r.n(Y),
                z = r(773011),
                q = r(99539),
                K = r(371188),
                Q = r(22637),
                $ = r.n(Q);

            function X(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function J(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function ee(e) {
                var t = e.sendStartNotification,
                    r = e.setSendStartNotification,
                    o = t ? k.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : k.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, n.jsx)("div", {
                    className: $().notificationToggle,
                    children: (0, n.jsx)(l.Checkbox, {
                        type: l.Checkbox.Types.INVERTED,
                        size: 14,
                        className: $().checkbox,
                        value: t,
                        onChange: function() {
                            r(!t)
                        },
                        children: (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, n.jsx)(l.Tooltip, {
                                position: "bottom",
                                tooltipClassName: $().tooltip,
                                text: k.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": k.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: function(e) {
                                    return (0, n.jsx)("span", J(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                X(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        children: o
                                    }))
                                }
                            })
                        })
                    })
                })
            }
            var te = r(497028),
                re = r(550254),
                ne = r(840922),
                oe = r(652591),
                ie = r(27851),
                le = r(682776),
                ce = r(520453);

            function ae(e) {
                return (0, i.e7)([le.Z], (function() {
                    return null != e && le.Z.can(ce.Pl.MENTION_EVERYONE, e)
                }), [e])
            }
            var se = r(426404),
                ue = r(800455),
                fe = r(79462),
                de = r(630670),
                pe = r(186315),
                Oe = r.n(pe);

            function be(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ye(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function he(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function ge(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return be(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return be(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ve(e) {
                var t = e.stageChannelsInGuild,
                    r = e.channel,
                    o = e.onSelectChannel;
                if (null == o) return null;
                return (0,
                    n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(l.FormItem, {
                        title: k.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: Oe().channelSelectionFormItem,
                        required: !0,
                        children: (0, n.jsx)(l.SearchableSelect, {
                            value: r.id,
                            options: t.map((function(e) {
                                return {
                                    value: e.id,
                                    label: (0, z.F6)(e, d.default, ne.Z, !0)
                                }
                            })),
                            onChange: function(e) {
                                var r = t.find((function(t) {
                                    return t.id === e
                                }));
                                null != r && o(r)
                            },
                            renderOptionPrefix: function() {
                                return (0, n.jsx)(s.Z, {
                                    height: 24
                                })
                            }
                        })
                    })
                })
            }

            function me(e) {
                var t, r, c, a, s, f, d = e.channel,
                    p = e.guild,
                    O = e.header,
                    b = e.error,
                    y = e.loading,
                    h = e.onSave,
                    g = e.onEventSave,
                    v = e.onClose,
                    m = e.onSelectChannel,
                    j = e.isEvent,
                    S = void 0 !== j && j,
                    E = e.defaultOptions,
                    w = e.isSlideReady,
                    _ = void 0 === w || w,
                    P = o.useMemo((function() {
                        return u.Z.getStageInstanceByChannel(d.id)
                    }), [d.id]),
                    T = ge(o.useState(null !== (r = null !== (t = null == E ? void 0 : E.topic) && void 0 !== t ? t : null == P ? void 0 : P.topic) && void 0 !== r ? r : ""), 2),
                    C = T[0],
                    I = T[1],
                    x = ge(o.useState(null !== (c = null == E ? void 0 : E.description) && void 0 !== c ? c : ""), 2),
                    N = x[0],
                    A = x[1],
                    D = ge(o.useState(S), 1)[0],
                    L = ge(o.useState(null !== (a = null == E ? void 0 : E.schedule) && void 0 !== a ? a : {
                        startDate: (0, K.ib)()
                    }), 2),
                    R = L[0],
                    U = L[1],
                    G = ge(o.useState(D && null != (null == E ? void 0 : E.schedule)), 2),
                    B = G[0],
                    V = G[1],
                    H = ae(d),
                    F = function(e) {
                        var t = null == e ? void 0 : e.guild_id,
                            r = (0, i.e7)([ie.Z], (function() {
                                return ie.Z.getMemberCount(t)
                            }), [t]);
                        return null == e || !(null == r || r > 5e4)
                    }(d),
                    Y = null == P && H && !D,
                    Q = ge(o.useState(Y && F), 2),
                    $ = Q[0],
                    X = Q[1],
                    J = (0, i.e7)([re.Z], (function() {
                        return re.Z.hasHotspot(de.v.LIVE_STAGE_NOTIFICATION_BADGE)
                    })),
                    ne = M.j8.GUILD_ONLY,
                    le = ge(o.useState(null !== (f = null !== (s = null == E ? void 0 : E.privacyLevel) && void 0 !== s ? s : null == P ? void 0 : P.privacy_level) && void 0 !== f ? f : ne), 1)[0],
                    ce = (0, se._d)(d.id),
                    pe = ge(o.useState(!1), 2),
                    be = pe[0],
                    me = pe[1],
                    je = (0, z.ZP)(d),
                    Se = (0,
                        q.q)(p),
                    Ee = null != m,
                    we = Se.length > 1;
                o.useEffect((function() {
                    oe.default.track(Z.rMx.START_STAGE_OPENED, {
                        stage_instance_id: null == P ? void 0 : P.id,
                        can_start_public_stage: !1,
                        guild_id: d.guild_id
                    })
                }), []);
                var _e = function(e) {
                        e.preventDefault();
                        if (le === M.j8.PUBLIC && C.length < 20 && !be) me(!0);
                        else {
                            var t = {
                                topic: C,
                                privacyLevel: le,
                                sendStartNotification: $
                            };
                            if (D) {
                                if (!B) return;
                                null == g || g(he(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            ye(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, t), {
                                    schedule: R,
                                    description: N,
                                    entityType: M.WX.STAGE_INSTANCE
                                }))
                            } else null == h || h(t)
                        }
                    },
                    Pe = function(e, t, r) {
                        return r ? {
                            color: l.Button.Colors.BRAND,
                            text: k.Z.Messages.SCHEDULE_EVENT
                        } : t === M.j8.PUBLIC && (null == e ? void 0 : e.privacy_level) !== M.j8.PUBLIC ? {
                            color: l.Button.Colors.BRAND,
                            text: k.Z.Messages.CONTINUE
                        } : null == e ? {
                            color: l.Button.Colors.GREEN,
                            text: k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        } : {
                            color: l.Button.Colors.BRAND,
                            text: k.Z.Messages.SAVE_CHANGES
                        }
                    }(P, le, D),
                    Te = Pe.color,
                    Ce = Pe.text,
                    Ie = o.useRef(null);
                o.useEffect((function() {
                    var e;
                    _ && (null === (e = Ie.current) || void 0 === e || e.focus())
                }), [_]);
                var xe = B && null != R.startDate && R.startDate >= W()();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.ModalContent, {
                        className: Oe().modalContent,
                        children: [O, (0, n.jsx)("div", {
                            className: Oe().blockedUsersContainer,
                            children: null == P && ce > 0 && (0, n.jsx)(ue.mv, {
                                channelId: d.id
                            })
                        }), (0, n.jsxs)("form", {
                            onSubmit: _e,
                            className: Oe().form,
                            children: [(0, n.jsxs)(l.FormItem, {
                                title: S ? k.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: Oe().topicFormItem,
                                required: !0,
                                children: [(0, n.jsx)(l.TextInput, {
                                    className: Oe().textInput,
                                    onChange: function(e) {
                                        return I(e)
                                    },
                                    placeholder: k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: fe.xA,
                                    value: C,
                                    autoComplete: "off",
                                    inputRef: Ie
                                }), be && (0, n.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: Oe().warning,
                                    children: k.Z.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != b ? (0, n.jsx)(l.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: Oe().warning,
                                    children: b.getAnyErrorMessage()
                                }) : null]
                            }), Ee && we ? (0, n.jsx)(ve, {
                                stageChannelsInGuild: Se,
                                channel: d,
                                onSelectChannel: m
                            }) : null, D && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(te.Z, {
                                    className: Oe().formItem,
                                    onScheduleChange: U,
                                    schedule: R,
                                    timeSelected: B,
                                    onTimeChange: V
                                }), null != R.startDate && R.startDate < W()() ? (0, n.jsx)(l.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: Oe().warning,
                                    children: k.Z.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), S && (0, n.jsx)(l.FormItem, {
                                title: k.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: Oe().formItem,
                                children: (0, n.jsx)(l.TextArea, {
                                    placeholder: k.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: N,
                                    onChange: function(e) {
                                        return A(e)
                                    },
                                    maxLength: M.wm
                                })
                            }), Y ? (0, n.jsx)(ee, {
                                sendStartNotification: $,
                                setSendStartNotification: X,
                                showNotificationNewBadge: J
                            }) : null, Ee && !we ? (0, n.jsx)(l.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: Oe().channelSelection,
                                children: k.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: je,
                                    stageHook: function(e, t) {
                                        return (0, n.jsx)("span", {
                                            className: Oe().channelName,
                                            children: d.name
                                        }, t)
                                    }
                                })
                            }) : null]
                        })]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        children: [(0, n.jsx)(l.Button, {
                            color: Te,
                            onClick: _e,
                            disabled: "" === C || null == le || S && !xe,
                            submitting: y,
                            children: Ce
                        }), (0, n.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: Oe().cancelButton,
                            onClick: v,
                            children: k.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
            var je = r(327499),
                Se = r(116404),
                Ee = r(347365),
                we = r(115617),
                _e = r(771575);

            function Pe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Te(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function Ce(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            Te(i, n, o, l, c, "next", e)
                        }

                        function c(e) {
                            Te(i, n, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Ie(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Pe(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var xe = function(e, t) {
                var r, n, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };
            var Ne = r(441143),
                Ae = r.n(Ne);

            function De(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return De(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Re = r(107636),
                Ze = r.n(Re);

            function Me(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ke(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Ue(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function Ge(e) {
                var t = e.guild,
                    r = e.channel,
                    o = e.stageInstance,
                    i = e.headerId,
                    c = e.onClose,
                    a = e.loading,
                    u = e.error,
                    d = e.onSave,
                    p = e.defaultOptions,
                    O = e.isSlideReady;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: Ze().content,
                        children: [(0, n.jsx)(f.Z, {
                            children: (0, n.jsx)("div", {
                                className: Ze().stageIconBackground,
                                children: (0, n.jsx)(s.Z, {
                                    width: 32,
                                    height: 32,
                                    className: Ze().stageIcon
                                })
                            })
                        }), (0, n.jsx)(l.Heading, {
                            id: i,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: Ze().headerTitle,
                            children: null == o ? k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : k.Z.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Ze().headerSubtitle,
                            children: null == o ? k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : k.Z.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, n.jsx)(me, {
                        guild: t,
                        channel: r,
                        onSave: d,
                        error: u,
                        loading: a,
                        onClose: c,
                        defaultOptions: p,
                        isSlideReady: O
                    })]
                })
            }

            function Be(e) {
                var t = e.channel,
                    r = e.onClose,
                    s = e.transitionState,
                    f = Ue(e, ["channel", "onClose", "transitionState"]),
                    d = (0, a.Dt)(),
                    p = (0, i.e7)([c.Z], (function() {
                        return c.Z.getGuild(t.guild_id)
                    })),
                    O = o.useMemo((function() {
                        return u.Z.getStageInstanceByChannel(t.id)
                    }), [t.id]),
                    b = function(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = Ie(o.useState(!1), 2),
                            l = i[0],
                            c = i[1],
                            a = Ie(o.useState(null), 2),
                            s = a[0],
                            f = a[1],
                            d = o.useMemo((function() {
                                return u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id)
                            }), [null == e ? void 0 : e.id]),
                            p = ae(e),
                            O = (r = Ce((function(r) {
                                var o, i, l, a, s, u;
                                return xe(this, (function(O) {
                                    switch (O.label) {
                                        case 0:
                                            o = r.topic, i = r.privacyLevel, l = r.sendStartNotification;
                                            if (null == e || "" === o || null == i) return [2];
                                            c(!0);
                                            f(null);
                                            if (null != n) {
                                                je.Z.selectGuild(n);
                                                Se.default.selectVoiceChannel(e.id)
                                            }
                                            O.label = 1;
                                        case 1:
                                            O.trys.push([1, 6, , 7]);
                                            return null == d ? [3, 3] : [4, _e.Ef(e, o, i)];
                                        case 2:
                                            a = O.sent();
                                            return [3, 5];
                                        case 3:
                                            return [4, _e.HO(e, o, i, null != l && l)];
                                        case 4:
                                            a = O.sent();
                                            p && we.Kw(de.v.LIVE_STAGE_NOTIFICATION_BADGE);
                                            O.label = 5;
                                        case 5:
                                            t(a);
                                            return [3, 7];
                                        case 6:
                                            s = O.sent();
                                            u = new Ee.Hx(s);
                                            f(u);
                                            c(!1);
                                            return [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                }))
                            })), function(e) {
                                return r.apply(this, arguments)
                            });
                        return {
                            loading: l,
                            error: s,
                            onSave: O
                        }
                    }(t, r),
                    y = b.loading,
                    h = b.error,
                    g = b.onSave,
                    v = function(e) {
                        var t = e.stageInstance,
                            r = e.defaultStep,
                            n = e.error,
                            i = e.onSave,
                            l = Le(o.useState(r), 2),
                            c = l[0],
                            a = l[1],
                            s = Le(o.useState(), 2),
                            u = s[0],
                            f = s[1],
                            d = Le(o.useState(null), 2),
                            p = d[0],
                            O = d[1];
                        o.useEffect((function() {
                            null != n && a(fe.lv.STAGE_CHANNEL_SETTINGS)
                        }), [n]);
                        return {
                            modalStep: c,
                            setModalStep: a,
                            readySlide: p,
                            handleSlideReady: function(e) {
                                return O(e)
                            },
                            savedOptions: u,
                            handleSettingsSave: function(e) {
                                f(e);
                                e.privacyLevel !== M.j8.PUBLIC || (null == t ? void 0 : t.privacy_level) === M.j8.PUBLIC ? i(e) : a(fe.lv.PUBLIC_STAGE_PREVIEW)
                            },
                            handleDelayedSave: function() {
                                Ae()(null != u, "Must have some saved options.");
                                i(u)
                            }
                        }
                    }({
                        stageInstance: O,
                        defaultStep: fe.lv.STAGE_CHANNEL_SETTINGS,
                        error: h,
                        onSave: g
                    }),
                    m = v.modalStep,
                    j = v.setModalStep,
                    S = v.readySlide,
                    E = v.handleSlideReady,
                    w = v.savedOptions,
                    _ = v.handleSettingsSave,
                    P = v.handleDelayedSave;
                o.useEffect((function() {
                    null == p && r()
                }), [p, r]);
                return null == p ? null : (0, n.jsx)(l.ModalRoot, ke(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            Me(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    transitionState: s,
                    "aria-labelledby": d
                }, f), {
                    size: l.ModalSize.SMALL,
                    children: (0, n.jsxs)(l.Slides, {
                        activeSlide: m,
                        width: 440,
                        onSlideReady: E,
                        children: [(0, n.jsx)(l.Slide, {
                            id: fe.lv.STAGE_CHANNEL_SETTINGS,
                            children: (0, n.jsx)("div", {
                                className: Ze().slideContainer,
                                children: (0, n.jsx)(Ge, {
                                    guild: p,
                                    channel: t,
                                    stageInstance: O,
                                    headerId: d,
                                    onClose: r,
                                    loading: y,
                                    error: h,
                                    onSave: _,
                                    defaultOptions: w,
                                    isSlideReady: S === fe.lv.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, n.jsx)(l.Slide, {
                            id: fe.lv.PUBLIC_STAGE_PREVIEW,
                            children: (0, n.jsx)("div", {
                                className: Ze().slideContainer,
                                children: (0, n.jsx)(F, {
                                    headerId: d,
                                    guild: p,
                                    channel: t,
                                    stageData: w,
                                    loading: y,
                                    onNext: P,
                                    onCancel: r,
                                    onBack: function() {
                                        return j(fe.lv.STAGE_CHANNEL_SETTINGS)
                                    }
                                })
                            })
                        })]
                    })
                }))
            }
        },
        223219: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => k
            });
            var n = r(496486),
                o = r.n(n),
                i = r(202351),
                l = r(744564),
                c = r(473903),
                a = r(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        f(e, t, r[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }
            var g = a.QZA.CLOSED,
                v = null,
                m = null,
                j = {},
                S = {},
                E = {},
                w = null,
                _ = null,
                P = !1,
                T = !1,
                C = null,
                I = null,
                x = null,
                N = [],
                A = null,
                D = null;

            function L(e) {
                var t, r, n, o, i, l, s = c.default.getCurrentUser();
                if (null == s) return R();
                m = null !== (t = e.section) && void 0 !== t ? t : m;
                A = null !== (r = e.section) && void 0 !== r ? r : m;
                null != e.subsection && null != m && (j[m] = e.subsection);
                null != e.scrollPosition && null != m && (S[m] = e.scrollPosition);
                T = !!e.openWithoutBackstack;
                g = a.QZA.OPEN;
                E = {};
                w = f({}, a.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                _ = p({}, w);
                I = null !== (n = e.onClose) && void 0 !== n ? n : null;
                x = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                N = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                D = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function R() {
                g = a.QZA.CLOSED;
                P = !1;
                w = null;
                A = null;
                _ = null;
                v = null;
                m = null;
                j = {};
                S = {};
                I = null;
                x = null;
                N = [];
                D = null
            }

            function Z() {
                g = a.QZA.OPEN;
                E = {}
            }
            var M = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(r, e);
                var t = h(r);

                function r() {
                    s(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function() {
                    this.waitFor(c.default)
                };
                n.hasChanges = function() {
                    return null != _ && null != w && (!(!this.isOpen() && C !== a.cII.USER_SETTINGS) && !o().isEqual(_, w))
                };
                n.isOpen = function() {
                    return P
                };
                n.getPreviousSection = function() {
                    return v
                };
                n.getSection = function() {
                    return m
                };
                n.getSubsection = function() {
                    return null != m ? j[m] : null
                };
                n.getScrollPosition = function() {
                    return null != m ? S[m] : null
                };
                n.shouldOpenWithoutBackstack = function() {
                    return T
                };
                n.getProps = function() {
                    return {
                        submitting: g === a.QZA.SUBMITTING,
                        section: m,
                        subsection: null != m ? j[m] : null,
                        scrollPosition: null != m ? S[m] : null,
                        settings: _,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: T,
                        analyticsLocation: x,
                        analyticsLocations: N,
                        initialSection: A,
                        impressionSource: D
                    }
                };
                ! function(e, t, r) {
                    t && u(e.prototype, t);
                    r && u(e, r)
                }(r, [{
                    key: "onClose",
                    get: function() {
                        return I
                    }
                }]);
                return r
            }(i.ZP.Store);
            M.displayName = "UserSettingsModalStore";
            const k = new M(l.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    P = !0;
                    L(e)
                },
                USER_SETTINGS_MODAL_INIT: L,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    g = a.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (g !== a.QZA.SUBMITTING) return !1;
                    g = a.QZA.OPEN;
                    m = a.oAB.ACCOUNT;
                    var t;
                    E = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    v = m;
                    m = e.section;
                    x = null;
                    var t;
                    N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (j[m] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete j[t] : null != m && delete j[m]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete S[t] : null != m && delete S[m]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == _ && (_ = {});
                    var r = _[a.oAB.ACCOUNT];
                    _[a.oAB.ACCOUNT] = p({}, r, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: Z,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = c.default.getCurrentUser();
                    Z();
                    if (null != e) {
                        w = f({}, a.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        _ = p({}, w)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    C = e.tab;
                    return null == m && C === a.cII.USER_SETTINGS && L({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        443812: (e, t, r) => {
            "use strict";
            r.d(t, {
                hQ: () => l,
                Dt: () => c,
                FG: () => a
            });
            var n = r(873955),
                o = r.n(n),
                i = r(989824),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                c = function() {
                    return (0, i.Z)((function() {
                        return l()
                    }))
                },
                a = function(e) {
                    return (0, e.children)(c())
                }
        },
        559968: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    s = e.foreground,
                    p = e.backgroundColor,
                    O = d(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 14 14",
                    children: [null != p ? (0, n.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: p
                    }) : null, (0, n.jsx)("path", {
                        fill: a,
                        className: s,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0,
                    l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        179952: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    s = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                            className: s,
                            fill: a
                        })
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 3a9 9 0 0 0-8.945 10h1.862a5 5 0 0 1 4.097 2.133L10.39 17.1a3.104 3.104 0 0 1-.17 3.782c-.821.973-2.279 1.448-3.551.742A10.997 10.997 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862A9 9 0 0 0 12 3Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        961241: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(238823),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: d,
                        fill: f
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: d,
                        fill: f
                    })]
                }))
            }), i.S)
        },
        472034: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(218790),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        className: d,
                        fill: f
                    })
                }))
            }), i.v)
        },
        180695: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    s = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            fillRule: "nonzero",
                            d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                            transform: "translate(2 4)"
                        }), (0, n.jsx)("path", {
                            d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 5v-.75C3 3.56 3.56 3 4.25 3s1.242.562 1.326 1.248C6.117 8.649 9.462 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.199-.147c-.289-.885-.841-1.723-1.317-2.31-.15-.184-.423-.056-.394.18l.25 1.996a.25.25 0 0 1-.248.281H9a2 2 0 0 1-2-2v-2.22c0-1.574-.671-3.054-1.53-4.374C3.888 10.969 3 7.888 3 5Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        123017: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    a = e.className,
                    s = e.foreground;
                return (0, n.jsx)("svg", {
                    className: a,
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: s,
                        fill: c,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        565571: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    s = d(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(s)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: a
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        422557: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 32 : t,
                    a = e.height,
                    s = void 0 === a ? 32 : a,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 32 32",
                    children: [(0, n.jsx)("rect", {
                        width: "32",
                        height: "32",
                        rx: "16",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                        className: d
                    })]
                }))
            }
        },
        709992: (e, t, r) => {
            "use strict";
            r.d(t, {
                P1: () => g,
                sq: () => m,
                Ub: () => j,
                Lq: () => E,
                PP: () => _,
                Zt: () => P,
                Az: () => T,
                IZ: () => I,
                tI: () => x,
                j$: () => N,
                c6: () => A,
                mT: () => D,
                Eg: () => L
            });
            var n = r(817673),
                o = r(281110),
                i = r(327499),
                l = r(944522),
                c = r(784426),
                a = r(934870),
                s = r(27851),
                u = r(567403),
                f = r(652591),
                d = r(2590);

            function p(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function O(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            p(i, n, o, l, c, "next", e)
                        }

                        function c(e) {
                            p(i, n, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        b(e, t, r[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var g, v = function(e, t) {
                var r, n, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };
            ! function(e) {
                e.SEARCH = "Search";
                e.RECOMMENDED = "Recommended";
                e.POPULAR = "Popular";
                e.RECOMMENDED_E3 = "Recommended - E3";
                e.HEADER = "Header"
            }(g || (g = {}));
            var m = ">200";

            function j(e, t) {
                return S.apply(this, arguments)
            }

            function S() {
                S = O((function(e, t) {
                    var r, n, o, s, f, d, p, O, b, g, m = arguments;
                    return v(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                r = m.length > 2 && void 0 !== m[2] ? m[2] : {};
                                n = r.channelId, o = r.onSuccess, s = r.joinSource, f = r.loadId,
                                    d = r.setsHistorySnapshot, p = void 0 === d || d;
                                O = (0, c.s1)();
                                p && l.Z.setHistorySnapshot(y({}, O));
                                b = u.Z.getGuild(e);
                                g = {
                                    state: {
                                        analyticsSource: t
                                    }
                                };
                                if (null == b || null == b.joinedAt) return [3, 1];
                                (0, a.X)(e, g);
                                return [3, 4];
                            case 1:
                                return [4, i.Z.joinGuild(e, {
                                    lurker: !0,
                                    source: s,
                                    loadId: f,
                                    lurkLocation: null == t ? void 0 : t.page
                                })];
                            case 2:
                                v.sent();
                                return [4, i.Z.transitionToGuildSync(e, h(y({}, g), {
                                    welcomeModalChannelId: n,
                                    search: O.location.search
                                }), n)];
                            case 3:
                                v.sent();
                                v.label = 4;
                            case 4:
                                null == o || o();
                                return [2]
                        }
                    }))
                }));
                return S.apply(this, arguments)
            }

            function E(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = O((function(e) {
                    var t, r, n, o, i, l, c;
                    return v(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = e.loadId, r = e.guildId, n = e.index, o = e.analyticsContext, i = e.categoryId;
                                "string" == typeof o && o in g && (l = o);
                                c = {
                                    page: d.ZY5.GUILD_DISCOVERY,
                                    object: d.qAy.CARD,
                                    section: l
                                };
                                return [4, j(r, c, {
                                    loadId: t
                                })];
                            case 1:
                                a.sent();
                                C({
                                    loadId: t,
                                    guildId: r,
                                    index: n,
                                    analyticsContext: o,
                                    categoryId: i
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function P(e) {
                var t = e.loadId,
                    r = e.gamesYouPlayGuilds,
                    n = e.allGuilds,
                    o = e.categoryId,
                    i = e.recommendationsSource,
                    l = void 0 === i ? null : i,
                    c = r.length,
                    a = n.length;
                f.default.track(d.rMx.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: c + a,
                    num_guilds_recommended: c,
                    num_guilds_popular: a,
                    recommended_guild_ids: r.map((function(e) {
                        return e.id
                    })),
                    category_id: o,
                    recommendations_source: l
                })
            }

            function T(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                f.default.track(d.rMx.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: r
                })
            }

            function C(e) {
                var t = e.loadId,
                    r = e.guildId,
                    n = e.index,
                    o = e.analyticsContext,
                    i = e.categoryId,
                    l = {
                        page: d.ZY5.GUILD_DISCOVERY,
                        section: o
                    };
                "string" != typeof o && null != o.location && (l = o.location);
                f.default.track(d.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
                    location: l,
                    guild_id: r,
                    load_id: t,
                    card_index: n,
                    location_object: d.qAy.CARD,
                    category_id: i
                })
            }

            function I(e) {
                f.default.track(d.rMx.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function x(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                f.default.track(d.rMx.SEARCH_STARTED, {
                    search_type: d.aib.GUILD_DISCOVERY,
                    load_id: e,
                    location: r.location,
                    category_id: t
                })
            }

            function N(e, t, r, n) {
                f.default.track(d.rMx.SEARCH_STARTED, {
                    search_type: d.aib.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: d.ZY5.GUILD_DISCOVERY,
                        section: r
                    },
                    category_id: t,
                    guild_id: n
                })
            }

            function A(e) {
                var t = e.loadId,
                    r = e.searchId,
                    n = e.query,
                    o = e.guildResults,
                    i = e.analyticsContext,
                    l = e.categoryId,
                    c = e.isTagSearch;
                f.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
                    search_type: c ? d.aib.GUILD_DISCOVERY_TAG : d.aib.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: r,
                    total_results: void 0 !== o ? o.length : null,
                    guild_ids: void 0 !== o ? o.map((function(e) {
                        return e.id
                    })) : null,
                    query: n,
                    location: i.location,
                    category_id: l
                })
            }

            function D(e) {
                var t = l.Z.getLoadId(e);
                f.default.track(d.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: s.Z.getMemberCount(e)
                })
            }

            function L(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = O((function(e) {
                    var t, r, i, l;
                    return v(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                c.trys.push([0, 2, , 3]);
                                return [4, o.ZP.get({
                                    url: d.ANM.GUILD_DISCOVERY,
                                    query: n.stringify({
                                        guild_ids: e
                                    }),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                i = c.sent();
                                return null == (l = null === (t = i.body) || void 0 === t || null === (r = t.guilds) || void 0 === r ? void 0 : r[0]) ? [2, l] : [2, _(l)];
                            case 2:
                                c.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        664806: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => i
            });

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                return o(e, 2)[1] === o(t, 2)[1]
            }
        },
        990554: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => o
            });
            var n = r(421281);

            function o(e, t) {
                for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                var l = o.reduce((function(e, t) {
                        return e + (0, n.De)(t)
                    }), ""),
                    c = "".concat(t).concat(l),
                    a = e[c];
                if (null != a) return a;
                0
            }
        },
        989824: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var n = r(667294),
                o = {};

            function i(e) {
                var t = (0, n.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);
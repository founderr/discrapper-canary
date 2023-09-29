(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39354], {
        483683: (e, t, r) => {
            e.exports = r.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, r) => {
            e.exports = r.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        735885: (e, t, r) => {
            "use strict";
            r.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => c
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

            function c() {
                n.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        396179: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => S
            });
            var n = r(281110),
                o = r(630631),
                i = r(744564),
                c = r(735885),
                l = r(2590);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e) {
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
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(s({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, r));
                (0, c.jN)(l.S9g.USER_SETTINGS)
            }
            var f = r(223219),
                p = r(652591),
                O = r(775173),
                b = r(488110),
                d = r(239620),
                y = r(473708);

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        h(e, t, r[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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
            const S = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    a(e, t, r)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(v({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, r))
                },
                close: function() {
                    var e = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(v({
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
                    var c = e.username,
                        u = e.email,
                        s = e.emailToken,
                        a = e.password,
                        f = e.avatar,
                        h = e.newPassword,
                        S = e.discriminator,
                        j = t.close;
                    return (0, b.Z)((function(e) {
                        var t = g(v({
                                username: c,
                                email: u,
                                email_token: s,
                                password: a,
                                avatar: f,
                                new_password: h
                            }, e), {
                                discriminator: null != S && "" !== S ? S : void 0
                            }),
                            r = o.Z.get(l.JkL),
                            i = (0, d.xJ)();
                        if (null != i && null != r) {
                            t.push_provider = i;
                            t.push_token = r
                        }
                        var p = o.Z.get(l.scU);
                        if (null != d.mv && null != p) {
                            t.push_voip_provider = d.mv;
                            t.push_voip_token = p
                        }
                        return n.ZP.patch({
                            url: l.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: y.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        p.default.track(l.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, O.xR)(t.avatar)
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
                        null != h && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: h
                        });
                        null != a && null != h && i.Z.dispatch({
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

            function c(e, t, r) {
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

            function u(e, t) {
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
                    a = void 0 === s ? 24 : s,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    d = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
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
                }({}, (0, i.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        239620: (e, t, r) => {
            "use strict";
            r.d(t, {
                mv: () => i,
                xJ: () => c
            });
            var n, o = r(120415),
                i = null;

            function c() {
                return (0, o.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(n || (n = {}))
        },
        800455: (e, t, r) => {
            "use strict";
            r.d(t, {
                mv: () => S,
                Xd: () => j
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(795308),
                c = r(304548),
                l = r(971402),
                u = r(742257),
                s = r(961241),
                a = r(98265),
                f = r(661782),
                p = r(749565),
                O = r(933022),
                b = r(426404),
                d = r(473708),
                y = r(858003),
                h = r.n(y);

            function v(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
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
            var S = function(e) {
                    var t = e.channelId,
                        r = (0, b._d)(t);
                    if (0 === r) return null;
                    return (0, n.jsxs)("div", {
                        className: h().blockedNotice,
                        children: [(0, n.jsx)(u.Z, {
                            className: h().blockedIcon,
                            color: i.Z.unsafe_rawColors.RED_400.css
                        }), (0, n.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: d.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: r
                            })
                        }), (0, n.jsx)(c.Clickable, {
                            className: h().blockedButton,
                            onClick: function(e) {
                                (0, l.vq)(e, (function(e) {
                                    return (0, n.jsx)(m, g(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                v(e, t, r[t])
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
                            children: d.Z.Messages.VIEW_ALL
                        })]
                    })
                },
                j = function(e) {
                    var t = e.user,
                        r = e.showStatus,
                        i = e.speaker,
                        l = e.channelId,
                        u = (0, o.e7)([O.ZP], (function() {
                            return O.ZP.isModerator(t.id, l)
                        })),
                        b = null;
                    r && (b = i ? d.Z.Messages.STAGE_SPEAKER : u ? d.Z.Messages.STAGE_MODERATOR_TOOLTIP : d.Z.Messages.STAGE_AUDIENCE);
                    return (0, n.jsxs)("div", {
                        className: h().user,
                        children: [(0, n.jsx)(f.Z, {
                            src: t.getAvatarURL(null, 32),
                            size: c.AvatarSizes.SIZE_32,
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
                                children: [(0, n.jsx)(a.Z, {
                                    size: r ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                    children: p.ZP.getName(t)
                                }), (0, n.jsx)(a.Z, {
                                    size: r ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                    color: a.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: h().username,
                                children: [(0, n.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: d.Z.Messages.BLOCKED
                                }), (0, n.jsxs)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", b]
                                })]
                            })]
                        })]
                    })
                },
                m = function(e) {
                    var t = e.channelId,
                        r = (0, b.z)(t);
                    return (0, n.jsx)(c.Scroller, {
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
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(473708),
                l = r(300443),
                u = r.n(l),
                s = r(483683),
                a = r.n(s),
                f = r(63685),
                p = r.n(f);

            function O(e) {
                var t = e.className,
                    r = e.children;
                return (0, n.jsxs)("div", {
                    className: i()(u().container, t),
                    children: [(0, n.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: p(),
                        className: i()(u().sparkleIcon, u().sparkleBottom)
                    }), r, (0, n.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a(),
                        className: i()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        692728: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => m
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                i = r(443812),
                c = r(961241),
                l = r(816132),
                u = r(565571),
                s = r(771575),
                a = r(426404),
                f = r(800455),
                p = r(832642),
                O = r(473708),
                b = r(450140),
                d = r.n(b);

            function y(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            y(i, n, o, c, l, "next", e)
                        }

                        function l(e) {
                            y(i, n, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function v(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
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

            function S(e, t) {
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
            var j = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, l])
                    }
                }
            };

            function m(e) {
                var t, r = e.channel,
                    b = e.transitionState,
                    y = e.onClose,
                    m = S(e, ["channel", "transitionState", "onClose"]),
                    E = (0, i.Dt)(),
                    w = (0, a._d)(r.id),
                    P = (t = h((function() {
                        return j(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, (0, s.yi)(r)];
                                case 1:
                                    e.sent();
                                    y();
                                    return [2]
                            }
                        }))
                    })), function() {
                        return t.apply(this, arguments)
                    }),
                    _ = function() {
                        var e = h((function() {
                            return j(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, (0, s.RK)(r, !1)];
                                    case 1:
                                        e.sent();
                                        y();
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, n.jsx)(o.ModalRoot, g(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            v(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    transitionState: b,
                    "aria-labelledby": E
                }, m), {
                    size: o.ModalSize.SMALL,
                    children: (0, n.jsxs)(o.ModalContent, {
                        className: d().content,
                        children: [(0, n.jsx)(p.Z, {
                            children: (0, n.jsx)("div", {
                                className: d().stageIconBackground,
                                children: (0, n.jsx)(u.Z, {
                                    width: 40,
                                    height: 40,
                                    className: d().stageIcon
                                })
                            })
                        }), (0, n.jsx)(o.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: d().headerTitle,
                            children: O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: d().headerSubtitle,
                            children: O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), w > 0 && (0, n.jsx)(f.mv, {
                            channelId: r.id
                        }), (0, n.jsxs)("div", {
                            className: d().buttonsContainer,
                            children: [(0, n.jsxs)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                className: d().button,
                                innerClassName: d().innerButton,
                                onClick: _,
                                children: [(0, n.jsx)("div", {
                                    className: d().icon,
                                    children: (0, n.jsx)(c.Z, {
                                        width: 20,
                                        height: 20
                                    })
                                }), O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, n.jsxs)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                className: d().button,
                                innerClassName: d().innerButton,
                                onClick: P,
                                children: [(0, n.jsx)("div", {
                                    className: d().icon,
                                    children: (0, n.jsx)(l.Z, {
                                        width: 20,
                                        height: 20
                                    })
                                }), O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
                            })]
                        })]
                    })
                }))
            }
        },
        223219: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => U
            });
            var n = r(496486),
                o = r.n(n),
                i = r(202351),
                c = r(744564),
                l = r(473903),
                u = r(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function O(e) {
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

            function b(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
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
                    var r, n = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }
            var v = u.QZA.CLOSED,
                g = null,
                S = null,
                j = {},
                m = {},
                E = {},
                w = null,
                P = null,
                _ = !1,
                C = !1,
                T = null,
                I = null,
                N = null,
                A = [],
                R = null,
                Z = null;

            function D(e) {
                var t, r, n, o, i, c, s = l.default.getCurrentUser();
                if (null == s) return x();
                S = null !== (t = e.section) && void 0 !== t ? t : S;
                R = null !== (r = e.section) && void 0 !== r ? r : S;
                null != e.subsection && null != S && (j[S] = e.subsection);
                null != e.scrollPosition && null != S && (m[S] = e.scrollPosition);
                C = !!e.openWithoutBackstack;
                v = u.QZA.OPEN;
                E = {};
                w = f({}, u.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                P = O({}, w);
                I = null !== (n = e.onClose) && void 0 !== n ? n : null;
                N = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                A = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                Z = null !== (c = e.impressionSource) && void 0 !== c ? c : null
            }

            function x() {
                v = u.QZA.CLOSED;
                _ = !1;
                w = null;
                R = null;
                P = null;
                g = null;
                S = null;
                j = {};
                m = {};
                I = null;
                N = null;
                A = [];
                Z = null
            }

            function M() {
                v = u.QZA.OPEN;
                E = {}
            }
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(r, e);
                var t = h(r);

                function r() {
                    s(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function() {
                    this.waitFor(l.default)
                };
                n.hasChanges = function() {
                    return null != P && null != w && (!(!this.isOpen() && T !== u.cII.USER_SETTINGS) && !o().isEqual(P, w))
                };
                n.isOpen = function() {
                    return _
                };
                n.getPreviousSection = function() {
                    return g
                };
                n.getSection = function() {
                    return S
                };
                n.getSubsection = function() {
                    return null != S ? j[S] : null
                };
                n.getScrollPosition = function() {
                    return null != S ? m[S] : null
                };
                n.shouldOpenWithoutBackstack = function() {
                    return C
                };
                n.getProps = function() {
                    return {
                        submitting: v === u.QZA.SUBMITTING,
                        section: S,
                        subsection: null != S ? j[S] : null,
                        scrollPosition: null != S ? m[S] : null,
                        settings: P,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: C,
                        analyticsLocation: N,
                        analyticsLocations: A,
                        initialSection: R,
                        impressionSource: Z
                    }
                };
                ! function(e, t, r) {
                    t && a(e.prototype, t);
                    r && a(e, r)
                }(r, [{
                    key: "onClose",
                    get: function() {
                        return I
                    }
                }]);
                return r
            }(i.ZP.Store);
            L.displayName = "UserSettingsModalStore";
            const U = new L(c.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    _ = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: x,
                LOGOUT: x,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    v = u.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (v !== u.QZA.SUBMITTING) return !1;
                    v = u.QZA.OPEN;
                    S = u.oAB.ACCOUNT;
                    var t;
                    E = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    g = S;
                    S = e.section;
                    N = null;
                    var t;
                    A = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (j[S] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete j[t] : null != S && delete j[S]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete m[t] : null != S && delete m[S]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == P && (P = {});
                    var r = P[u.oAB.ACCOUNT];
                    P[u.oAB.ACCOUNT] = O({}, r, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = l.default.getCurrentUser();
                    M();
                    if (null != e) {
                        w = f({}, u.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        P = O({}, w)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    T = e.tab;
                    return null == S && T === u.cII.USER_SETTINGS && D({
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
                hQ: () => c,
                Dt: () => l,
                FG: () => u
            });
            var n = r(873955),
                o = r.n(n),
                i = r(989824),
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                l = function() {
                    return (0, i.Z)((function() {
                        return c()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(l())
                }
        },
        961241: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(238823),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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
            const a = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = e.foreground,
                    O = s(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", u(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: p,
                        fill: f
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: p,
                        fill: f
                    })]
                }))
            }), i.S)
        },
        816132: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function a(e, t, r) {
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

            function p(e, t) {
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
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    s = e.foreground,
                    O = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        className: s,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, n.jsx)("path", {
                        className: s,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, n.jsx)("path", {
                        className: s,
                        fill: u,
                        d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                    }), (0, n.jsx)("path", {
                        className: s,
                        fill: u,
                        d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1Zm3.937 9.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        565571: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function a(e, t, r) {
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

            function p(e, t) {
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
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    s = p(e, ["width", "height", "color"]);
                return (0,
                    n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(s)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
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
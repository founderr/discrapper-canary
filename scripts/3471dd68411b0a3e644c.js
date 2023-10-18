(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [92728], {
        483683: (e, r, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, r, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        238823: (e, r, t) => {
            "use strict";
            t.d(r, {
                S: () => a
            });
            var n = t(785893),
                o = (t(667294), t(795308)),
                c = t(633878);

            function s(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function i(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function l(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var a = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    f = e.color,
                    b = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    p = void 0 === O ? "" : O,
                    d = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", i(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            s(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof b ? b : b.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
        800455: (e, r, t) => {
            "use strict";
            t.d(r, {
                Xd: () => m,
                mv: () => v
            });
            var n = t(785893),
                o = (t(667294), t(202351)),
                c = t(795308),
                s = t(70418),
                i = t(971402),
                l = t(742257),
                a = t(961241),
                u = t(98265),
                f = t(661782),
                b = t(749565),
                O = t(933022),
                p = t(426404),
                d = t(473708),
                h = t(858003),
                y = t.n(h);

            function j(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function g(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var v = function(e) {
                    var r = e.channelId,
                        t = (0, p._d)(r);
                    if (0 === t) return null;
                    return (0, n.jsxs)("div", {
                        className: y().blockedNotice,
                        children: [(0, n.jsx)(l.Z, {
                            className: y().blockedIcon,
                            color: c.Z.unsafe_rawColors.RED_400.css
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: d.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: t
                            })
                        }), (0, n.jsx)(s.Clickable, {
                            className: y().blockedButton,
                            onClick: function(e) {
                                (0, i.vq)(e, (function(e) {
                                    return (0, n.jsx)(w, g(function(e) {
                                        for (var r = 1; r < arguments.length; r++) {
                                            var t = null != arguments[r] ? arguments[r] : {},
                                                n = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            n.forEach((function(r) {
                                                j(e, r, t[r])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        channelId: r
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
                m = function(e) {
                    var r = e.user,
                        t = e.showStatus,
                        c = e.speaker,
                        i = e.channelId,
                        l = (0, o.e7)([O.ZP], (function() {
                            return O.ZP.isModerator(r.id, i)
                        })),
                        p = null;
                    t && (p = c ? d.Z.Messages.STAGE_SPEAKER : l ? d.Z.Messages.STAGE_MODERATOR_TOOLTIP : d.Z.Messages.STAGE_AUDIENCE);
                    return (0, n.jsxs)("div", {
                        className: y().user,
                        children: [(0, n.jsx)(f.Z, {
                            src: r.getAvatarURL(null, 32),
                            size: s.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: c ? function() {
                                return (0, n.jsx)(a.Z, {
                                    className: y().icon
                                })
                            } : null
                        }, r.id), (0, n.jsxs)("div", {
                            className: y().userInfo,
                            children: [(0, n.jsxs)("div", {
                                className: y().username,
                                children: [(0, n.jsx)(u.Z, {
                                    size: t ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    children: b.ZP.getName(r)
                                }), (0, n.jsx)(u.Z, {
                                    size: t ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    color: u.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(r.discriminator)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: y().username,
                                children: [(0, n.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: d.Z.Messages.BLOCKED
                                }), (0,
                                    n.jsxs)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", p]
                                })]
                            })]
                        })]
                    })
                },
                w = function(e) {
                    var r = e.channelId,
                        t = (0, p.z)(r);
                    return (0, n.jsx)(s.Scroller, {
                        className: y().container,
                        children: t.map((function(e) {
                            var t = e.user;
                            return (0, n.jsx)(m, {
                                user: t,
                                channelId: r
                            }, t.id)
                        }))
                    })
                }
        },
        832642: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => O
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                c = t.n(o),
                s = t(473708),
                i = t(300443),
                l = t.n(i),
                a = t(483683),
                u = t.n(a),
                f = t(63685),
                b = t.n(f);

            function O(e) {
                var r = e.className,
                    t = e.children;
                return (0, n.jsxs)("div", {
                    className: c()(l().container, r),
                    children: [(0, n.jsx)("img", {
                        alt: s.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: b(),
                        className: c()(l().sparkleIcon, l().sparkleBottom)
                    }), t, (0, n.jsx)("img", {
                        alt: s.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u(),
                        className: c()(l().sparkleIcon, l().sparkleTop)
                    })]
                })
            }
        },
        692728: (e, r, t) => {
            "use strict";
            t.r(r);
            t.d(r, {
                default: () => w
            });
            var n = t(785893),
                o = (t(667294),
                    t(70418)),
                c = t(443812),
                s = t(961241),
                i = t(816132),
                l = t(565571),
                a = t(771575),
                u = t(426404),
                f = t(800455),
                b = t(832642),
                O = t(473708),
                p = t(450140),
                d = t.n(p);

            function h(e, r, t, n, o, c, s) {
                try {
                    var i = e[c](s),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? r(l) : Promise.resolve(l).then(n, o)
            }

            function y(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(r, t);

                        function s(e) {
                            h(c, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            h(c, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function j(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function g(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function v(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var m = function(e, r) {
                var t, n, o, c, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function i(c) {
                    return function(i) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            s.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(c);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                c = r.call(e, s)
                            } catch (e) {
                                c = [6, e];
                                n = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, i])
                    }
                }
            };

            function w(e) {
                var r, t = e.channel,
                    p = e.transitionState,
                    h = e.onClose,
                    w = v(e, ["channel", "transitionState", "onClose"]),
                    x = (0, c.Dt)(),
                    P = (0, u._d)(t.id),
                    E = (r = y((function() {
                        return m(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, (0, a.yi)(t)];
                                case 1:
                                    e.sent();
                                    h();
                                    return [2]
                            }
                        }))
                    })), function() {
                        return r.apply(this, arguments)
                    }),
                    S = function() {
                        var e = y((function() {
                            return m(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, (0, a.RK)(t, !1)];
                                    case 1:
                                        e.sent();
                                        h();
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, n.jsx)(o.ModalRoot, g(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            j(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    transitionState: p,
                    "aria-labelledby": x
                }, w), {
                    size: o.ModalSize.SMALL,
                    children: (0, n.jsxs)(o.ModalContent, {
                        className: d().content,
                        children: [(0, n.jsx)(b.Z, {
                            children: (0, n.jsx)("div", {
                                className: d().stageIconBackground,
                                children: (0, n.jsx)(l.Z, {
                                    width: 40,
                                    height: 40,
                                    className: d().stageIcon
                                })
                            })
                        }), (0, n.jsx)(o.Heading, {
                            id: x,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: d().headerTitle,
                            children: O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: d().headerSubtitle,
                            children: O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), P > 0 && (0, n.jsx)(f.mv, {
                            channelId: t.id
                        }), (0, n.jsxs)("div", {
                            className: d().buttonsContainer,
                            children: [(0, n.jsxs)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                className: d().button,
                                innerClassName: d().innerButton,
                                onClick: S,
                                children: [(0, n.jsx)("div", {
                                    className: d().icon,
                                    children: (0, n.jsx)(s.Z, {
                                        width: 20,
                                        height: 20
                                    })
                                }), O.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, n.jsxs)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                className: d().button,
                                innerClassName: d().innerButton,
                                onClick: E,
                                children: [(0, n.jsx)("div", {
                                    className: d().icon,
                                    children: (0, n.jsx)(i.Z, {
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
        961241: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
                c = t(238823),
                s = t(633878);

            function i(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function l(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    b = e.foreground,
                    O = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", l(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            i(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, s.Z)(O)), {
                    width: t,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: b,
                        fill: f
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: b,
                        fill: f
                    })]
                }))
            }), c.S)
        }
    }
]);
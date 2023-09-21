(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86212, 74562], {
        79759: (e, t, r) => {
            e.exports = r.p + "f1d6d550591d720095aeddb40ca4a085.png"
        },
        226612: (e, t, r) => {
            e.exports = r.p + "da5e9a9193130f85644e57792fce26fb.png"
        },
        374629: (e, t, r) => {
            e.exports = r.p + "7d29180bcd99b01fba0ab7a602578e00.png"
        },
        712922: (e, t, r) => {
            e.exports = r.p + "e14404dd17388b158af2b717faa99375.png"
        },
        55994: (e, t, r) => {
            e.exports = r.p + "3efb4066681a3fbe176c4c16ea036f62.png"
        },
        743101: (e, t, r) => {
            e.exports = r.p + "94b2af59f34b608b6b4133f8627edd4a.png"
        },
        315457: (e, t, r) => {
            e.exports = r.p + "1cc50c3a7fffcc6c7e2e9c4d181fc199.png"
        },
        156921: (e, t, r) => {
            e.exports = r.p + "3d502461e6a499f23efe78c69a39d026.png"
        },
        776420: (e, t, r) => {
            e.exports = r.p + "458195c665a8bd317b823473705625a8.png"
        },
        699391: (e, t, r) => {
            e.exports = r.p + "989127b412419bd0a02f44f320f4ab2b.png"
        },
        274562: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => ae
            });
            var n = r(785893),
                a = r(667294),
                s = r(202351),
                o = r(882723),
                i = r(567403),
                c = r(682776),
                l = r(443812),
                u = r(854602),
                O = r(312682),
                _ = r(921122),
                d = r(143901),
                f = r(473708),
                g = r(79759),
                m = r.n(g),
                p = r(226612),
                E = r.n(p),
                M = r(374629),
                b = r.n(M),
                h = r(712922),
                S = r.n(h),
                T = r(55994),
                y = r.n(T),
                P = r(743101),
                v = r.n(P),
                j = r(315457),
                x = r.n(j),
                L = r(156921),
                N = r.n(L),
                A = r(776420),
                R = r.n(A),
                U = r(699391),
                I = r.n(U);
            var w = r(822513),
                D = r.n(w);

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Z(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Z(e, t, r[t])
                    }))
                }
                return e
            }

            function F(e, t) {
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

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, s = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                s.push(n.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                var t = e.user,
                    r = e.tagId,
                    a = e.title,
                    s = e.messageCount,
                    i = e.reactionCount,
                    c = e.activeAgo,
                    l = e.tags,
                    u = e.attachment,
                    O = t.name,
                    d = t.avatarSrc;
                return (0, n.jsxs)("div", {
                    className: D().post,
                    children: [(0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: D().inline,
                            children: [(0, n.jsxs)(o.Text, {
                                color: "header-primary",
                                variant: "text-xs/medium",
                                className: D().inline,
                                children: [(0, n.jsx)("img", {
                                    src: d,
                                    alt: f.Z.Messages.USER_SETTINGS_AVATAR,
                                    width: 16,
                                    height: 16
                                }), O]
                            }), null != r && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    className: D().bullet,
                                    children: "•"
                                }), (0, n.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-xxs/medium",
                                    className: D().inlineTag,
                                    children: l[r]
                                })]
                            })]
                        }), (0,
                            n.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: D().title,
                            children: a
                        }), (0, n.jsxs)("div", {
                            className: D().inline,
                            children: [(0, n.jsxs)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/medium",
                                className: D().alignCenter,
                                children: [(0, n.jsx)(_.Z, {
                                    width: 16,
                                    height: 16,
                                    className: D().icon
                                }), s]
                            }), i > 0 && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    className: D().bullet,
                                    children: "•"
                                }), (0, n.jsxs)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/medium",
                                    className: D().alignCenter,
                                    children: [(0, n.jsx)("span", {
                                        role: "img",
                                        "aria-label": f.Z.Messages.REACTIONS,
                                        className: D().icon,
                                        children: "❤️"
                                    }), i]
                                })]
                            }), (0, n.jsx)("span", {
                                className: D().bullet,
                                children: "•"
                            }), (0, n.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/medium",
                                children: c
                            })]
                        })]
                    }), null != u && (0, n.jsx)("img", {
                        src: u,
                        alt: f.Z.Messages.MESSAGE_ATTACHMENT_A11Y_LABEL.format({
                            name: a
                        }),
                        className: D().attachment
                    })]
                })
            }

            function B(e) {
                var t = e.author,
                    r = e.content,
                    a = t.name,
                    s = t.isOP,
                    i = t.avatarSrc;
                return (0, n.jsxs)("div", {
                    className: D().message,
                    children: [(0, n.jsx)("img", {
                        src: i,
                        alt: f.Z.Messages.USER_SETTINGS_AVATAR,
                        width: 40,
                        height: 40
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: D().inline,
                            children: [(0, n.jsx)(o.Text, {
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: a
                            }), s && (0, n.jsx)("span", {
                                className: D().opTag,
                                children: f.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER
                            })]
                        }), (0, n.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            children: r
                        })]
                    })]
                })
            }

            function W(e) {
                var t = e.title,
                    r = e.messages,
                    a = e.maxHeight;
                return (0, n.jsx)("div", {
                    className: D().previewContainer,
                    style: {
                        maxHeight: a
                    },
                    "aria-hidden": !0,
                    children: (0, n.jsxs)("div", {
                        className: D().preview,
                        children: [(0, n.jsx)(d.Z, {
                            className: D().forumPostIcon
                        }), (0, n.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: D().header,
                            children: t
                        }), (0, n.jsx)("div", {
                            className: D().messageContainer,
                            children: r.map((function(e, t) {
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(B, k({}, e), t), 0 === t && (0, n.jsxs)("div", {
                                        children: [(0,
                                            n.jsx)("hr", {
                                            className: D().topSeparator
                                        }), (0, n.jsxs)("div", {
                                            className: D().actionBar,
                                            children: [(0, n.jsxs)(o.Text, {
                                                color: "text-brand",
                                                variant: "text-xs/medium",
                                                className: D().fakeReactions,
                                                children: [(0, n.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": f.Z.Messages.REACTIONS,
                                                    className: D().icon,
                                                    children: "❤️"
                                                }), "17"]
                                            }), (0, n.jsxs)(o.Text, {
                                                color: "text-muted",
                                                variant: "text-xs/medium",
                                                className: D().following,
                                                children: [(0, n.jsx)(O.Z, {
                                                    width: 16,
                                                    height: 16
                                                }), f.Z.Messages.FOLLOW]
                                            })]
                                        }), (0, n.jsx)("hr", {
                                            className: D().bottomSeparator
                                        })]
                                    })]
                                })
                            }))
                        }), (0, n.jsx)("div", {
                            className: D().chatInput,
                            children: (0, n.jsx)(o.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: f.Z.Messages.SEND_A_MESSAGE
                            })
                        })]
                    })
                })
            }

            function V(e) {
                var t = e.id,
                    r = G(a.useState(0), 2),
                    s = r[0],
                    i = r[1],
                    c = a.useRef(null),
                    l = function(e) {
                        return [{
                            tags: [f.Z.Messages.FORUM_UPSELL_DEMO_1_TAG_NAME_1, f.Z.Messages.FORUM_UPSELL_DEMO_1_TAG_NAME_2, f.Z.Messages.FORUM_UPSELL_DEMO_1_TAG_NAME_3],
                            posts: [{
                                user: {
                                    name: "pocketman",
                                    avatarSrc: N()
                                },
                                tagId: 2,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_1,
                                messageCount: 8,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 10
                                }),
                                attachment: m()
                            }, {
                                user: {
                                    name: "skaterdood12",
                                    avatarSrc: x()
                                },
                                tagId: 1,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_2,
                                messageCount: 17,
                                reactionCount: 11,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 24
                                })
                            }, {
                                user: {
                                    name: "ladydaisy",
                                    avatarSrc: R()
                                },
                                tagId: 2,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_3,
                                messageCount: 18,
                                reactionCount: 15,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 40
                                })
                            }, {
                                user: {
                                    name: "kittyx",
                                    avatarSrc: I()
                                },
                                tagId: 0,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_4,
                                messageCount: 2,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS.format({
                                    count: 1
                                }),
                                attachment: E()
                            }],
                            postPreview: {
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_2,
                                messages: [{
                                    author: {
                                        name: "skaterdood12",
                                        avatarSrc: x(),
                                        isOP: !0
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_1_MESSAGE_CONTENT_1
                                }, {
                                    author: {
                                        name: "pocketman",
                                        avatarSrc: N(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_1_MESSAGE_CONTENT_2
                                }, {
                                    author: {
                                        name: "ladydaisy",
                                        avatarSrc: R(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_1_MESSAGE_CONTENT_3
                                }]
                            },
                            ariaLabel: f.Z.Messages.FORUM_UPSELL_DEMO_1_ALT_TEXT
                        }, {
                            tags: [f.Z.Messages.FORUM_UPSELL_DEMO_2_TAG_NAME_1, f.Z.Messages.FORUM_UPSELL_DEMO_2_TAG_NAME_2, f.Z.Messages.FORUM_UPSELL_DEMO_2_TAG_NAME_3],
                            posts: [{
                                user: {
                                    name: "ladydaisy",
                                    avatarSrc: R()
                                },
                                tagId: 0,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_1,
                                messageCount: 8,
                                reactionCount: 11,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 10
                                }),
                                attachment: b()
                            }, {
                                user: {
                                    name: "pocketman",
                                    avatarSrc: N()
                                },
                                tagId: 1,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_2,
                                messageCount: 24,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 24
                                })
                            }, {
                                user: {
                                    name: "skaterdood12",
                                    avatarSrc: x()
                                },
                                tagId: 1,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_3,
                                messageCount: 15,
                                reactionCount: 17,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 40
                                })
                            }, {
                                user: {
                                    name: "kittyx",
                                    avatarSrc: I()
                                },
                                tagId: 2,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_4,
                                messageCount: 2,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS.format({
                                    count: 1
                                }),
                                attachment: S()
                            }],
                            postPreview: {
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_3,
                                messages: [{
                                    author: {
                                        name: "skaterdood12",
                                        avatarSrc: x(),
                                        isOP: !0
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_2_MESSAGE_CONTENT_1
                                }, {
                                    author: {
                                        name: "pocketman",
                                        avatarSrc: N(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_2_MESSAGE_CONTENT_2
                                }, {
                                    author: {
                                        name: "ladydaisy",
                                        avatarSrc: R(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_2_MESSAGE_CONTENT_3
                                }]
                            },
                            ariaLabel: f.Z.Messages.FORUM_UPSELL_DEMO_2_ALT_TEXT
                        }, {
                            tags: [f.Z.Messages.FORUM_UPSELL_DEMO_3_TAG_NAME_1, f.Z.Messages.FORUM_UPSELL_DEMO_3_TAG_NAME_2, f.Z.Messages.FORUM_UPSELL_DEMO_3_TAG_NAME_3],
                            posts: [{
                                user: {
                                    name: "skaterdood12",
                                    avatarSrc: x()
                                },
                                tagId: null,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_1,
                                messageCount: 11,
                                reactionCount: 17,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 10
                                }),
                                attachment: y()
                            }, {
                                user: {
                                    name: "pocketman",
                                    avatarSrc: N()
                                },
                                tagId: 1,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_2,
                                messageCount: 24,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 24
                                })
                            }, {
                                user: {
                                    name: "ladydaisy",
                                    avatarSrc: R()
                                },
                                tagId: 0,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_3,
                                messageCount: 18,
                                reactionCount: 15,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 40
                                })
                            }, {
                                user: {
                                    name: "kittyx",
                                    avatarSrc: I()
                                },
                                tagId: null,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_4,
                                messageCount: 2,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS.format({
                                    count: 1
                                }),
                                attachment: v()
                            }],
                            postPreview: {
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_1,
                                messages: [{
                                    author: {
                                        name: "skaterdood12",
                                        avatarSrc: x(),
                                        isOP: !0
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_3_MESSAGE_CONTENT_1
                                }, {
                                    author: {
                                        name: "pocketman",
                                        avatarSrc: N(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_3_MESSAGE_CONTENT_2
                                }, {
                                    author: {
                                        name: "ladydaisy",
                                        avatarSrc: R(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_3_MESSAGE_CONTENT_3
                                }]
                            },
                            ariaLabel: f.Z.Messages.FORUM_UPSELL_DEMO_3_ALT_TEXT
                        }][e]
                    }(t),
                    u = l.tags,
                    O = l.posts,
                    _ = l.postPreview,
                    d = l.ariaLabel;
                a.useEffect((function() {
                    i(0)
                }), [t]);
                a.useEffect((function() {
                    var e;
                    0 === s && null != (null == c || null === (e = c.current) || void 0 === e ? void 0 : e.clientHeight) && i(c.current.clientHeight - 40)
                }), [s]);
                return (0, n.jsxs)("div", {
                    className: D().container,
                    role: "image",
                    "aria-label": d,
                    children: [(0, n.jsxs)("div", {
                        ref: c,
                        className: D().browser,
                        "aria-hidden": !0,
                        children: [(0, n.jsx)("div", {
                            className: D().tags,
                            children: u.map((function(e, t) {
                                return (0, n.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-xs/medium",
                                    className: D().tag,
                                    children: e
                                }, t)
                            }))
                        }), (0, n.jsx)("div", {
                            className: D().posts,
                            children: O.map((function(e, t) {
                                return (0, n.jsx)(H, F(k({}, e), {
                                    tags: u
                                }), t)
                            }))
                        })]
                    }), (0, n.jsx)(W, F(k({}, _), {
                        maxHeight: s
                    }))]
                })
            }
            var Y = r(508778),
                K = r(2590),
                z = r(458947),
                X = r(56135),
                $ = r.n(X);

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function J(e, t, r, n, a, s, o) {
                try {
                    var i = e[s](o),
                        c = i.value
                } catch (e) {
                    r(e);
                    return
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Q(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var s = e.apply(t, r);

                        function o(e) {
                            J(s, n, a, o, i, "next", e)
                        }

                        function i(e) {
                            J(s, n, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function ee(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function te(e, t) {
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

            function re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, s = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                s.push(n.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ne = function(e, t) {
                var r, n, a, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function i(s) {
                    return function(i) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                                (n = 0, a) && (s = [2 & s[0], a.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        n = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = s;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(s);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e];
                                n = 0
                            } finally {
                                r = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, i])
                    }
                }
            };

            function ae(e) {
                var t = e.guildId,
                    O = e.shouldUpsellCreation,
                    _ = e.transitionState,
                    d = e.onClose,
                    g = (0, s.e7)([i.Z], (function() {
                        return i.Z.getGuild(t)
                    }), [t]),
                    m = (0, s.e7)([c.Z], (function() {
                        return c.Z.can(K.Plq.MANAGE_CHANNELS, g)
                    })),
                    p = [{
                        id: 0,
                        name: f.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_1
                    }, {
                        id: 1,
                        name: f.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_2
                    }, {
                        id: 2,
                        name: f.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_3
                    }],
                    E = re(a.useState(0), 2),
                    M = E[0],
                    b = E[1],
                    h = (0, l.Dt)();
                return (0, n.jsxs)(o.ModalRoot, {
                    transitionState: _,
                    "aria-labelledby": h,
                    size: o.ModalSize.LARGE,
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: $().header,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: f.Z.Messages.FORUM_UPSELL_MODAL_HEADER
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            onClick: function() {
                                return d()
                            }
                        })]
                    }), (0, n.jsx)(o.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: $().content,
                            children: [(0, n.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: f.Z.Messages.FORUM_UPSELL_MODAL_BODY
                            }), (0, n.jsx)("div", {
                                className: $().tabBar,
                                children: (0, n.jsx)(o.TabBar, {
                                    selectedItem: M,
                                    type: "top",
                                    onItemSelect: function(e) {
                                        b(e);
                                        (0, u.ws)({
                                            forumDemoId: e
                                        })
                                    },
                                    className: $().tags,
                                    children: p.map((function(e, t) {
                                        return (0, n.jsx)(o.TabBar.Item, {
                                            id: t,
                                            children: e.name
                                        }, t)
                                    }))
                                })
                            }), (0, n.jsx)(V, {
                                id: M
                            })]
                        })
                    }), m && (0, n.jsxs)(o.ModalFooter, {
                        className: $().footer,
                        children: [(0, n.jsxs)("div", {
                            className: $().buttons,
                            children: [(0, n.jsx)(o.Button, {
                                look: o.Button.Looks.BLANK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: function() {
                                    return d(z.L.SECONDARY)
                                },
                                className: $().button,
                                children: O ? f.Z.Messages.MAYBE_LATER : f.Z.Messages.GOT_IT
                            }), O && (0, n.jsx)(o.Button, {
                                onClick: function() {
                                    (0, o.openModalLazy)(Q((function() {
                                        var e, a;
                                        return ne(this, (function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(47405), r.e(29392), r.e(79249), r.e(69876), r.e(17586), r.e(43586), r.e(27499), r.e(27764), r.e(92465), r.e(73679), r.e(87440), r.e(57645), r.e(2536)]).then(r.bind(r, 957645))];
                                                case 1:
                                                    e = s.sent(),
                                                        a = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(a, te(function(e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var r = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(r);
                                                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                                }))));
                                                                n.forEach((function(t) {
                                                                    ee(e, t, r[t])
                                                                }))
                                                            }
                                                            return e
                                                        }({}, e), {
                                                            channelType: K.d4z.GUILD_FORUM,
                                                            guildId: t,
                                                            prefillChannelName: O ? f.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER : void 0
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    d(z.L.PRIMARY)
                                },
                                children: f.Z.Messages.CREATE_FORUM_CHANNEL
                            })]
                        }), (0, n.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.LINK,
                            onClick: function() {
                                open(Y.V8)
                            },
                            children: f.Z.Messages.LEARN_MORE
                        })]
                    })]
                })
            }
        },
        232806: (e, t, r) => {
            "use strict";
            r.d(t, {
                xV: () => s,
                dp: () => o,
                X7: () => i,
                E1: () => c,
                f7: () => l,
                HE: () => u,
                SJ: () => O
            });

            function n(e, t, r) {
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
            var s, o;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(s || (s = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(o || (o = {}));
            var i = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10],
                c = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10, o.OPTION_1, o.OPTION_2, o.OPTION_3, o.OPTION_4].reduce((function(e, t, r) {
                    return a(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            a.forEach((function(t) {
                                n(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, e), n({}, t, r))
                }), {}),
                l = "blur",
                u = {
                    width: 1280,
                    height: 720
                },
                O = 10485760
        },
        921122: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                a = (r(667294), r(633878));

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function o(e, t) {
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

            function i(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) {
                        r = s[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) {
                        r = s[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function c(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    u = e.color,
                    O = void 0 === u ? "currentColor" : u,
                    _ = e.foreground,
                    d = i(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", o(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(d)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0,
                        n.jsx)("path", {
                        className: _,
                        fill: O,
                        d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                    })
                }))
            }
        },
        143901: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                a = (r(667294), r(633878));

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function o(e, t) {
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

            function i(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) {
                        r = s[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) {
                        r = s[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function c(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    u = e.color,
                    O = void 0 === u ? "currentColor" : u,
                    _ = e.strokeWidth,
                    d = void 0 === _ ? "2.5" : _,
                    f = e.foreground,
                    g = i(e, ["width", "height", "color", "strokeWidth", "foreground"]);
                return (0, n.jsx)("svg", o(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(g)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        className: f,
                        stroke: O,
                        strokeWidth: d,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.25892 16.5936C3.14073 14.7086 2.74913 12.4802 3.15765 10.3269C3.56618 8.17362 4.74672 6.24353 6.47761 4.89906C8.2085 3.55459 10.3707 2.88823 12.5581 3.02511C14.7455 3.16199 16.8077 4.0927 18.3575 5.64247C19.9073 7.19223 20.838 9.25445 20.9749 11.4419C21.1118 13.6293 20.4454 15.7915 19.101 17.5224C17.7565 19.2532 15.8264 20.4338 13.6731 20.8423C11.5198 21.2509 9.29146 20.8593 7.40646 19.7411L7.40648 19.741L4.29805 20.6291C4.16944 20.6659 4.03335 20.6676 3.90387 20.634C3.7744 20.6005 3.65625 20.5329 3.56167 20.4383C3.4671 20.3437 3.39953 20.2256 3.36598 20.0961C3.33243 19.9666 3.33412 19.8306 3.37086 19.7019L4.25898 16.5935L4.25892 16.5936Z"
                    })
                }))
            }
        },
        180735: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => n
            });
            var n;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(n || (n = {}))
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82903, 74562], {
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
                _ = r(312682),
                d = r(921122),
                O = r(143901),
                f = r(473708),
                g = r(79759),
                E = r.n(g),
                m = r(226612),
                M = r.n(m),
                p = r(374629),
                h = r.n(p),
                S = r(712922),
                b = r.n(S),
                T = r(55994),
                y = r.n(T),
                v = r(743101),
                L = r.n(v),
                j = r(315457),
                P = r.n(j),
                x = r(156921),
                A = r.n(x),
                R = r(776420),
                N = r.n(R),
                U = r(699391),
                C = r.n(U);
            var w = r(822513),
                I = r.n(w);

            function D(e, t) {
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

            function F(e) {
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

            function k(e, t) {
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
                    if ("string" == typeof e) return D(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D(e, t)
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
                    _ = t.name,
                    O = t.avatarSrc;
                return (0, n.jsxs)("div", {
                    className: I().post,
                    children: [(0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: I().inline,
                            children: [(0, n.jsxs)(o.Text, {
                                color: "header-primary",
                                variant: "text-xs/medium",
                                className: I().inline,
                                children: [(0, n.jsx)("img", {
                                    src: O,
                                    alt: f.Z.Messages.USER_SETTINGS_AVATAR,
                                    width: 16,
                                    height: 16
                                }), _]
                            }), null != r && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    className: I().bullet,
                                    children: "•"
                                }), (0, n.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-xxs/medium",
                                    className: I().inlineTag,
                                    children: l[r]
                                })]
                            })]
                        }), (0,
                            n.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: I().title,
                            children: a
                        }), (0, n.jsxs)("div", {
                            className: I().inline,
                            children: [(0, n.jsxs)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/medium",
                                className: I().alignCenter,
                                children: [(0, n.jsx)(d.Z, {
                                    width: 16,
                                    height: 16,
                                    className: I().icon
                                }), s]
                            }), i > 0 && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    className: I().bullet,
                                    children: "•"
                                }), (0, n.jsxs)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/medium",
                                    className: I().alignCenter,
                                    children: [(0, n.jsx)("span", {
                                        role: "img",
                                        "aria-label": f.Z.Messages.REACTIONS,
                                        className: I().icon,
                                        children: "❤️"
                                    }), i]
                                })]
                            }), (0, n.jsx)("span", {
                                className: I().bullet,
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
                        className: I().attachment
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
                    className: I().message,
                    children: [(0, n.jsx)("img", {
                        src: i,
                        alt: f.Z.Messages.USER_SETTINGS_AVATAR,
                        width: 40,
                        height: 40
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: I().inline,
                            children: [(0, n.jsx)(o.Text, {
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: a
                            }), s && (0, n.jsx)("span", {
                                className: I().opTag,
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
                    className: I().previewContainer,
                    style: {
                        maxHeight: a
                    },
                    "aria-hidden": !0,
                    children: (0, n.jsxs)("div", {
                        className: I().preview,
                        children: [(0, n.jsx)(O.Z, {
                            className: I().forumPostIcon
                        }), (0, n.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: I().header,
                            children: t
                        }), (0, n.jsx)("div", {
                            className: I().messageContainer,
                            children: r.map((function(e, t) {
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(B, F({}, e), t), 0 === t && (0, n.jsxs)("div", {
                                        children: [(0,
                                            n.jsx)("hr", {
                                            className: I().topSeparator
                                        }), (0, n.jsxs)("div", {
                                            className: I().actionBar,
                                            children: [(0, n.jsxs)(o.Text, {
                                                color: "text-brand",
                                                variant: "text-xs/medium",
                                                className: I().fakeReactions,
                                                children: [(0, n.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": f.Z.Messages.REACTIONS,
                                                    className: I().icon,
                                                    children: "❤️"
                                                }), "17"]
                                            }), (0, n.jsxs)(o.Text, {
                                                color: "text-muted",
                                                variant: "text-xs/medium",
                                                className: I().following,
                                                children: [(0, n.jsx)(_.Z, {
                                                    width: 16,
                                                    height: 16
                                                }), f.Z.Messages.FOLLOW]
                                            })]
                                        }), (0, n.jsx)("hr", {
                                            className: I().bottomSeparator
                                        })]
                                    })]
                                })
                            }))
                        }), (0, n.jsx)("div", {
                            className: I().chatInput,
                            children: (0, n.jsx)(o.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: f.Z.Messages.SEND_A_MESSAGE
                            })
                        })]
                    })
                })
            }

            function z(e) {
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
                                    avatarSrc: A()
                                },
                                tagId: 2,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_1,
                                messageCount: 8,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 10
                                }),
                                attachment: E()
                            }, {
                                user: {
                                    name: "skaterdood12",
                                    avatarSrc: P()
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
                                    avatarSrc: N()
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
                                    avatarSrc: C()
                                },
                                tagId: 0,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_4,
                                messageCount: 2,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS.format({
                                    count: 1
                                }),
                                attachment: M()
                            }],
                            postPreview: {
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_1_POST_TITLE_2,
                                messages: [{
                                    author: {
                                        name: "skaterdood12",
                                        avatarSrc: P(),
                                        isOP: !0
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_1_MESSAGE_CONTENT_1
                                }, {
                                    author: {
                                        name: "pocketman",
                                        avatarSrc: A(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_1_MESSAGE_CONTENT_2
                                }, {
                                    author: {
                                        name: "ladydaisy",
                                        avatarSrc: N(),
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
                                    avatarSrc: N()
                                },
                                tagId: 0,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_1,
                                messageCount: 8,
                                reactionCount: 11,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES.format({
                                    count: 10
                                }),
                                attachment: h()
                            }, {
                                user: {
                                    name: "pocketman",
                                    avatarSrc: A()
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
                                    avatarSrc: P()
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
                                    avatarSrc: C()
                                },
                                tagId: 2,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_4,
                                messageCount: 2,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS.format({
                                    count: 1
                                }),
                                attachment: b()
                            }],
                            postPreview: {
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_2_POST_TITLE_3,
                                messages: [{
                                    author: {
                                        name: "skaterdood12",
                                        avatarSrc: P(),
                                        isOP: !0
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_2_MESSAGE_CONTENT_1
                                }, {
                                    author: {
                                        name: "pocketman",
                                        avatarSrc: A(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_2_MESSAGE_CONTENT_2
                                }, {
                                    author: {
                                        name: "ladydaisy",
                                        avatarSrc: N(),
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
                                    avatarSrc: P()
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
                                    avatarSrc: A()
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
                                    avatarSrc: N()
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
                                    avatarSrc: C()
                                },
                                tagId: null,
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_4,
                                messageCount: 2,
                                reactionCount: 0,
                                activeAgo: f.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS.format({
                                    count: 1
                                }),
                                attachment: L()
                            }],
                            postPreview: {
                                title: f.Z.Messages.FORUM_UPSELL_DEMO_3_POST_TITLE_1,
                                messages: [{
                                    author: {
                                        name: "skaterdood12",
                                        avatarSrc: P(),
                                        isOP: !0
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_3_MESSAGE_CONTENT_1
                                }, {
                                    author: {
                                        name: "pocketman",
                                        avatarSrc: A(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_3_MESSAGE_CONTENT_2
                                }, {
                                    author: {
                                        name: "ladydaisy",
                                        avatarSrc: N(),
                                        isOP: !1
                                    },
                                    content: f.Z.Messages.FORUM_UPSELL_DEMO_3_MESSAGE_CONTENT_3
                                }]
                            },
                            ariaLabel: f.Z.Messages.FORUM_UPSELL_DEMO_3_ALT_TEXT
                        }][e]
                    }(t),
                    u = l.tags,
                    _ = l.posts,
                    d = l.postPreview,
                    O = l.ariaLabel;
                a.useEffect((function() {
                    i(0)
                }), [t]);
                a.useEffect((function() {
                    var e;
                    0 === s && null != (null == c || null === (e = c.current) || void 0 === e ? void 0 : e.clientHeight) && i(c.current.clientHeight - 40)
                }), [s]);
                return (0, n.jsxs)("div", {
                    className: I().container,
                    role: "image",
                    "aria-label": O,
                    children: [(0, n.jsxs)("div", {
                        ref: c,
                        className: I().browser,
                        "aria-hidden": !0,
                        children: [(0, n.jsx)("div", {
                            className: I().tags,
                            children: u.map((function(e, t) {
                                return (0, n.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-xs/medium",
                                    className: I().tag,
                                    children: e
                                }, t)
                            }))
                        }), (0, n.jsx)("div", {
                            className: I().posts,
                            children: _.map((function(e, t) {
                                return (0, n.jsx)(H, k(F({}, e), {
                                    tags: u
                                }), t)
                            }))
                        })]
                    }), (0, n.jsx)(W, k(F({}, d), {
                        maxHeight: s
                    }))]
                })
            }
            var V = r(508778),
                X = r(2590),
                Y = r(458947),
                $ = r(56135),
                K = r.n($);

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
                    _ = e.shouldUpsellCreation,
                    d = e.transitionState,
                    O = e.onClose,
                    g = (0, s.e7)([i.Z], (function() {
                        return i.Z.getGuild(t)
                    }), [t]),
                    E = (0, s.e7)([c.Z], (function() {
                        return c.Z.can(X.Plq.MANAGE_CHANNELS, g)
                    })),
                    m = [{
                        id: 0,
                        name: f.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_1
                    }, {
                        id: 1,
                        name: f.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_2
                    }, {
                        id: 2,
                        name: f.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_3
                    }],
                    M = re(a.useState(0), 2),
                    p = M[0],
                    h = M[1],
                    S = (0, l.Dt)();
                return (0, n.jsxs)(o.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": S,
                    size: o.ModalSize.LARGE,
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: K().header,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: f.Z.Messages.FORUM_UPSELL_MODAL_HEADER
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            onClick: function() {
                                return O()
                            }
                        })]
                    }), (0, n.jsx)(o.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: K().content,
                            children: [(0, n.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: f.Z.Messages.FORUM_UPSELL_MODAL_BODY
                            }), (0, n.jsx)("div", {
                                className: K().tabBar,
                                children: (0, n.jsx)(o.TabBar, {
                                    selectedItem: p,
                                    type: "top",
                                    onItemSelect: function(e) {
                                        h(e);
                                        (0, u.ws)({
                                            forumDemoId: e
                                        })
                                    },
                                    className: K().tags,
                                    children: m.map((function(e, t) {
                                        return (0, n.jsx)(o.TabBar.Item, {
                                            id: t,
                                            children: e.name
                                        }, t)
                                    }))
                                })
                            }), (0, n.jsx)(z, {
                                id: p
                            })]
                        })
                    }), E && (0, n.jsxs)(o.ModalFooter, {
                        className: K().footer,
                        children: [(0, n.jsxs)("div", {
                            className: K().buttons,
                            children: [(0, n.jsx)(o.Button, {
                                look: o.Button.Looks.BLANK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: function() {
                                    return O(Y.L.SECONDARY)
                                },
                                className: K().button,
                                children: _ ? f.Z.Messages.MAYBE_LATER : f.Z.Messages.GOT_IT
                            }), _ && (0, n.jsx)(o.Button, {
                                onClick: function() {
                                    (0, o.openModalLazy)(Q((function() {
                                        var e, a;
                                        return ne(this, (function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(47405), r.e(29392), r.e(79249), r.e(40970), r.e(17586), r.e(43586), r.e(27499), r.e(16105), r.e(73679), r.e(78310), r.e(35855), r.e(92465), r.e(57645), r.e(57399)]).then(r.bind(r, 957645))];
                                                case 1:
                                                    e = s.sent(), a = e.default;
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
                                                            channelType: X.d4z.GUILD_FORUM,
                                                            guildId: t,
                                                            prefillChannelName: _ ? f.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER : void 0
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    O(Y.L.PRIMARY)
                                },
                                children: f.Z.Messages.CREATE_FORUM_CHANNEL
                            })]
                        }), (0, n.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.LINK,
                            onClick: function() {
                                open(V.V8)
                            },
                            children: f.Z.Messages.LEARN_MORE
                        })]
                    })]
                })
            }
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
                    _ = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    O = i(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", o(function(e) {
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
                }({}, (0, a.Z)(O)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        className: d,
                        fill: _,
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
                    _ = void 0 === u ? "currentColor" : u,
                    d = e.strokeWidth,
                    O = void 0 === d ? "2.5" : d,
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
                        stroke: _,
                        strokeWidth: O,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.25892 16.5936C3.14073 14.7086 2.74913 12.4802 3.15765 10.3269C3.56618 8.17362 4.74672 6.24353 6.47761 4.89906C8.2085 3.55459 10.3707 2.88823 12.5581 3.02511C14.7455 3.16199 16.8077 4.0927 18.3575 5.64247C19.9073 7.19223 20.838 9.25445 20.9749 11.4419C21.1118 13.6293 20.4454 15.7915 19.101 17.5224C17.7565 19.2532 15.8264 20.4338 13.6731 20.8423C11.5198 21.2509 9.29146 20.8593 7.40646 19.7411L7.40648 19.741L4.29805 20.6291C4.16944 20.6659 4.03335 20.6676 3.90387 20.634C3.7744 20.6005 3.65625 20.5329 3.56167 20.4383C3.4671 20.3437 3.39953 20.2256 3.36598 20.0961C3.33243 19.9666 3.33412 19.8306 3.37086 19.7019L4.25898 16.5935L4.25892 16.5936Z"
                    })
                }))
            }
        },
        322500: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                a = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                s = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                o = /^(.*)#[0-9]{1,5}$/,
                i = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                c = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const l = {
                isEmail: function(e) {
                    return n.test(e)
                },
                isInvite: function(e) {
                    return a.test(e)
                },
                isPhoneNumber: function(e) {
                    return s.test(e)
                },
                isUserTagLike: function(e) {
                    var t = o.exec(e);
                    if (null != t && t.length > 1) {
                        var r = t[1],
                            n = i.some((function(e) {
                                return r.includes(e)
                            })),
                            a = c.includes(r);
                        return !n && !a
                    }
                    return !1
                }
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
        },
        284157: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => n
            });
            var n;
            ! function(e) {
                e.CONNECT_VOICE = "connect_voice"
            }(n || (n = {}));
            new Set(["connect_voice"])
        },
        349139: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => n
            });
            var n;
            ! function(e) {
                e.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                e.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(n || (n = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        }
    }
]);
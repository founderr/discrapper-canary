"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21588, 97408], {
        469023: (e, n, t) => {
            t.d(n, {
                Z: () => w
            });
            var r = t(29891),
                a = t(208541),
                o = t(665118),
                s = t(120491),
                i = t(436622),
                l = t(823975),
                u = t(132457),
                c = t(803257),
                d = t(513430),
                f = t(107134),
                h = t(879983),
                m = t(143901),
                v = t(296047),
                g = t(172295),
                Z = t(725060),
                b = t(777203),
                p = t(544031),
                E = t(747890),
                y = t(730393),
                T = t(816132),
                x = t(183790),
                j = t(755914),
                S = t(407558),
                _ = t(565571),
                N = t(890592),
                A = t(296916),
                R = t(2590);

            function w(e, n) {
                switch (e.type) {
                    case R.d4z.DM:
                        return a.Z;
                    case R.d4z.GROUP_DM:
                        return (0, r.V1)(e.id) ? c.Z : T.Z;
                    case R.d4z.GUILD_ANNOUNCEMENT:
                        return e.isNSFW() ? E.Z : (0, A.Z)(e) ? p.Z : b.Z;
                    case R.d4z.GUILD_TEXT:
                        return e.id === (null == n ? void 0 : n.rulesChannelId) ? s.Z : e.isNSFW() ? u.Z : (0, A.Z)(e) ? l.Z : i.Z;
                    case R.d4z.GUILD_FORUM:
                        var t = e.isMediaChannel();
                        return e.isNSFW() ? t ? Z.Z : h.Z : (0, A.Z)(e) ? t ? g.Z : f.Z : t ? v.Z : d.Z;
                    case R.d4z.GUILD_MEDIA:
                        return e.isNSFW() ? Z.Z : (0, A.Z)(e) ? g.Z : v.Z;
                    case R.d4z.GUILD_STAGE_VOICE:
                        return _.Z;
                    case R.d4z.GUILD_VOICE:
                        return (0, A.Z)(e) ? S.Z : j.Z;
                    case R.d4z.ANNOUNCEMENT_THREAD:
                    case R.d4z.PUBLIC_THREAD:
                        return e.isNSFW() ? y.Z : e.isForumPost() ? m.Z : N.Z;
                    case R.d4z.PRIVATE_THREAD:
                        return e.isNSFW() ? y.Z : x.Z;
                    case R.d4z.GUILD_DIRECTORY:
                        return o.Z;
                    default:
                        return null
                }
            }
        },
        431611: (e, n, t) => {
            t.d(n, {
                FO: () => T,
                nA: () => x,
                qQ: () => j,
                r7: () => y
            });
            var r = t(667294),
                a = t(496486),
                o = t.n(a),
                s = t(202351),
                i = t(372518),
                l = t(61209),
                u = t(682776),
                c = t(179913),
                d = t(72580),
                f = t(102921),
                h = t(536945),
                m = t(359067),
                v = t(487685),
                g = t(457581),
                Z = t(217973),
                b = t(520453);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            s = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y() {
                r.useEffect((function() {
                    (0, Z.A_)()
                }), [])
            }

            function T(e) {
                var n = function(e) {
                        var n = (0, s.Wu)([u.Z, h.Z, l.Z], (function() {
                            return o()(h.Z.getThreadsForParent(e.guild_id, e.id)).values().map((function(e) {
                                var n = e.id;
                                return l.Z.getChannel(n)
                            })).filter(d.lm).filter((function(e) {
                                return u.Z.can(b.Pl.VIEW_CHANNEL, e)
                            })).map((function(e) {
                                return e.id
                            })).value()
                        }), [e.guild_id, e.id]);
                        return r.useMemo((function() {
                            return o()(n).sort((function(e, n) {
                                return f.Z.compare(c.ZP.lastMessageId(e), c.ZP.lastMessageId(n))
                            })).reverse().value()
                        }), [n])
                    }(e),
                    t = E((0,
                        s.e7)([v.Z], (function() {
                        return o().partition(n, (function(e) {
                            return v.Z.hasJoined(e)
                        }))
                    }), [n], s.pF), 2);
                return {
                    joinedThreadIds: t[0],
                    unjoinedThreadIds: t[1]
                }
            }

            function x(e) {
                var n = (0, s.Wu)([u.Z, h.Z, l.Z], (function() {
                    return o()(h.Z.getThreadsForGuild(e)).values().map((function(e) {
                        return o().values(e)
                    })).flatten().map((function(e) {
                        var n = e.id;
                        return l.Z.getChannel(n)
                    })).filter(d.lm).filter((function(e) {
                        return u.Z.can(b.Pl.VIEW_CHANNEL, e)
                    })).map((function(e) {
                        return e.id
                    })).value()
                }), [e]);
                return r.useMemo((function() {
                    return o()(n).sort((function(e, n) {
                        return f.Z.compare(c.ZP.lastMessageId(e), c.ZP.lastMessageId(n))
                    })).reverse().value()
                }), [n])
            }

            function j(e, n, t) {
                var a = (0, s.cj)([m.Z], (function() {
                        return {
                            loading: m.Z.isLoading(e.id, n, t),
                            isInitialLoad: m.Z.isInitialLoad,
                            canLoadMore: m.Z.canLoadMore,
                            nextOffset: m.Z.nextOffset
                        }
                    })),
                    c = a.canLoadMore,
                    d = a.loading,
                    f = a.nextOffset,
                    h = a.isInitialLoad,
                    v = r.useCallback((function() {
                        u.Z.can(b.Pl.READ_MESSAGE_HISTORY, e) && g.Z.loadArchivedThreads(e.guild_id, e.id, n, t, f)
                    }), [e, n, t, f]);
                r.useEffect((function() {
                    h && v()
                }), [e.id, n, t, h]);
                r.useEffect((function() {
                    i.Z.resort(e.id)
                }), [e.id]);
                return {
                    threadIds: (0, s.Wu)([m.Z, l.Z, u.Z], (function() {
                        return o()(m.Z.getThreads(e.id, n, t)).filter((function(e) {
                            var n = l.Z.getChannel(e);
                            return null != n && u.Z.can(b.Pl.VIEW_CHANNEL, n)
                        })).value()
                    })),
                    canLoadMore: c,
                    loading: d || h,
                    loadMore: v
                }
            }
        },
        270983: (e, n, t) => {
            t.d(n, {
                Z: () => z
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                s = t.n(o),
                i = t(202351),
                l = t(70418),
                u = t(682776),
                c = t(190186),
                d = t(189865),
                f = t(890592),
                h = t(457581),
                m = t(225386),
                v = t(217973),
                g = t(465637),
                Z = t(473708),
                b = t(170471),
                p = t.n(b);

            function E(e) {
                var n = e.channel,
                    t = e.header,
                    a = e.startThread,
                    o = (0, m.NE)(n),
                    s = (0, m.Xu)(n);
                return (0, r.jsxs)("div", {
                    className: p().container,
                    children: [(0, r.jsxs)("div", {
                        className: p().iconContainer,
                        children: [(0, r.jsx)("div", {
                            className: p().icon,
                            children: (0, r.jsx)(f.Z, {
                                width: 36,
                                height: 36
                            })
                        }), (0, r.jsx)(g.Z, {
                            className: p().stars
                        })]
                    }), (0, r.jsx)(l.Heading, {
                        className: p().header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), (0,
                        r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: Z.Z.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT
                    }), o || s ? (0, r.jsx)(l.Button, {
                        className: p().cta,
                        onClick: a,
                        children: Z.Z.Messages.CREATE_THREAD
                    }) : null]
                })
            }
            var y = t(661847),
                T = t(610687),
                x = t.n(T);

            function j(e) {
                var n = e.channel,
                    t = e.threadIds,
                    o = e.startThread,
                    i = e.goToThread,
                    u = a.useCallback((function(e) {
                        return (0, r.jsx)(y.Z, {
                            threadId: t[e.row],
                            goToThread: i
                        }, "".concat(e.section, "-").concat(e.row))
                    }), [t, i]);
                return 0 === t.length ? (0, r.jsx)(E, {
                    channel: n,
                    header: Z.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                    startThread: o
                }) : (0, r.jsx)(l.List, {
                    className: s()(x().list, x().activeThreadsList),
                    fade: !0,
                    sections: [t.length],
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: u,
                    renderSection: function() {
                        return null
                    },
                    chunkSize: 20
                })
            }
            var S = t(920883),
                _ = t(431611),
                N = new Set;

            function A(e) {
                var n = e.channel,
                    t = e.startThread,
                    o = e.goToThread,
                    s = (0, _.FO)(n),
                    i = s.joinedThreadIds,
                    u = s.unjoinedThreadIds,
                    c = (0,
                        _.qQ)(n, S.z.LATEST_ACTIVITY, N),
                    d = c.threadIds,
                    f = c.canLoadMore,
                    h = c.loading,
                    m = c.loadMore,
                    v = a.useRef(null);
                (0, _.r7)();
                var g = a.useCallback((function(e) {
                        var n = 0 === e.section ? i : 1 === e.section ? u : d;
                        return (0, r.jsx)(y.Z, {
                            threadId: n[e.row],
                            goToThread: o
                        }, "".concat(e.section, "-").concat(e.row))
                    }), [d, i, u, o]),
                    b = a.useCallback((function(e) {
                        return 0 === e.section ? (0, r.jsx)(R, {
                            text: Z.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({
                                count: i.length
                            })
                        }, e.section) : 1 === e.section ? (0, r.jsx)(R, {
                            text: Z.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({
                                count: u.length
                            })
                        }, e.section) : (0, r.jsx)(R, {
                            text: Z.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER
                        }, e.section)
                    }), [i.length, u.length]),
                    p = a.useCallback((function(e) {
                        return 1 === e && i.length > 0 || 2 === e && (i.length > 0 || u.length > 0) ? 64 : 32
                    }), [i.length, u.length]),
                    T = a.useCallback((function() {
                        var e, n = null === (e = v.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null != n) {
                            var t = n.scrollTop + n.offsetHeight;
                            n.scrollHeight - t < 200 && m()
                        }
                    }), [m]);
                return 0 === i.length && 0 === u.length && 0 === d.length ? h ? (0,
                    r.jsx)("div", {
                    className: x().list,
                    children: (0, r.jsx)(l.Spinner, {
                        className: x().spinner
                    })
                }) : (0, r.jsx)("div", {
                    className: x().list,
                    children: (0, r.jsx)(E, {
                        channel: n,
                        header: Z.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                        startThread: t
                    })
                }) : (0, r.jsx)(l.List, {
                    ref: v,
                    className: x().list,
                    fade: !0,
                    sections: [i.length, u.length, d.length],
                    sectionHeight: p,
                    rowHeight: 80,
                    renderRow: g,
                    renderSection: b,
                    chunkSize: 20,
                    onScroll: f ? T : void 0
                })
            }

            function R(e) {
                var n = e.text;
                return (0, r.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-xs/bold",
                    className: x().sectionHeader,
                    children: n
                })
            }
            var w = t(367406),
                O = t(379364),
                I = t(2590),
                M = t(386545),
                C = t.n(M);

            function D(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function P(e, n, t, r, a, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function H(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        H(e, n, t[n])
                    }))
                }
                return e
            }

            function L(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            s = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return D(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var W = function(e, n) {
                var t, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function z(e) {
                var n, t, o, c, g, b, p, E, y, T, x, S, _, N, R, M, D, H, z = e.channel,
                    U = e.className,
                    F = e.onClose,
                    G = (0, i.e7)([u.Z], (function() {
                        return u.Z.can(I.Plq.READ_MESSAGE_HISTORY, z)
                    })),
                    Y = (0, m.cD)(z),
                    V = function() {
                        F();
                        (0, w.R6)(z, void 0, "Thread Browser Empty State")
                    },
                    q = a.useCallback((function(e, n) {
                        F();
                        (0, w.ok)(e, !n, O.on.BROWSER)
                    }), [F]),
                    Q = (n = z.guild_id, t = z.id, o = L(a.useState(""), 2), c = o[0], g = o[1], b = L(a.useState(!1), 2), p = b[0], E = b[1], y = L(a.useState(!1), 2), T = y[0], x = y[1], S = L(a.useState([]), 2), _ = S[0], N = S[1], R = (H = (D = function() {
                        var e;
                        return W(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null == c || "" === c) return [2];
                                    if (p) return [2];
                                    E(!0);
                                    r.label = 1;
                                case 1:
                                    r.trys.push([1, , 3, 4]);
                                    return [4, h.Z.searchThreads(n, t, c)];
                                case 2:
                                    e = r.sent();
                                    x(!0);
                                    N(e);
                                    return [3, 4];
                                case 3:
                                    E(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, r) {
                            var a = D.apply(e, n);

                            function o(e) {
                                P(a, t, r, o, s, "next", e)
                            }

                            function s(e) {
                                P(a, t, r, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function() {
                        return H.apply(this, arguments)
                    }), M = function(e) {
                        g(e);
                        0 === e.length && x(!1)
                    }, {
                        query: c,
                        setQuery: M,
                        isLoading: p,
                        hasResults: T,
                        submit: R,
                        results: _
                    });
                a.useEffect((function() {
                    (0, v.A_)()
                }), []);
                return (0, r.jsx)("div", {
                    className: s()(U, C().container),
                    children: (0, r.jsx)(l.HeadingLevel, {
                        component: (0, r.jsxs)("div", {
                            className: C().header,
                            children: [(0, r.jsx)(f.Z, {
                                className: C().threadIcon
                            }), (0, r.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                className: C().title,
                                children: Z.Z.Messages.THREAD_BROWSER_TITLE
                            }), G ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: C().divider
                                }), (0, r.jsx)(B, k({}, Q))]
                            }) : null, (0, r.jsx)("div", {
                                className: C().spacer
                            }), Y ? (0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.MIN,
                                className: C().createButton,
                                onClick: function() {
                                    F();
                                    (0, w.R6)(z, void 0, "Thread Browser Toolbar")
                                },
                                children: Z.Z.Messages.CREATE
                            }) : null, (0, r.jsx)(l.Clickable, {
                                className: C().closeIcon,
                                onClick: F,
                                "aria-label": Z.Z.Messages.CLOSE,
                                children: (0, r.jsx)(d.Z, {})
                            })]
                        }),
                        children: Q.hasResults ? (0, r.jsx)(j, {
                            channel: z,
                            startThread: V,
                            goToThread: q,
                            threadIds: Q.results
                        }) : (0, r.jsx)(A, {
                            channel: z,
                            startThread: V,
                            goToThread: q
                        })
                    })
                })
            }

            function B(e) {
                var n = e.query,
                    t = e.setQuery,
                    a = e.submit,
                    o = e.isLoading;
                return (0, r.jsx)(c.Z, {
                    autoFocus: !0,
                    className: C().searchBox,
                    query: n,
                    isLoading: o,
                    onChange: function(e) {
                        return t(e)
                    },
                    onClear: function() {
                        return t("")
                    },
                    onKeyDown: function(e) {
                        return "Enter" === e.key && a()
                    },
                    placeholder: Z.Z.Messages.SEARCH_THREAD_NAMES,
                    "aria-label": Z.Z.Messages.SEARCH_THREAD_NAMES
                })
            }
        },
        321588: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => d
            });
            var r = t(785893),
                a = t(667294),
                o = t(70418),
                s = t(217973),
                i = t(270983),
                l = t(473708),
                u = t(902041),
                c = t.n(u);

            function d(e) {
                var n = e.channel,
                    t = e.onClose,
                    u = e.transitionState;
                a.useEffect((function() {
                    (0, s.U4)()
                }), []);
                return (0, r.jsx)(o.ModalRoot, {
                    className: c().modal,
                    transitionState: u,
                    "aria-label": l.Z.Messages.THREADS,
                    size: o.ModalSize.DYNAMIC,
                    children: (0, r.jsx)(i.Z, {
                        className: c().browser,
                        channel: n,
                        onClose: t
                    })
                })
            }
        },
        661847: (e, n, t) => {
            t.d(n, {
                Z: () => U
            });
            var r = t(785893),
                a = t(667294),
                o = t(202351),
                s = t(70418),
                i = t(971402),
                l = t(61209),
                u = t(984216),
                c = t(473903),
                d = t(96606),
                f = t(666613),
                h = t(385028),
                m = t(357088),
                v = t(469023),
                g = t(804808),
                Z = t(550131),
                b = t(21372),
                p = t(179913),
                E = t(840922),
                y = t(890592),
                T = t(763536),
                x = t(102921),
                j = t(749565),
                S = t(591684),
                _ = t(217973),
                N = t(939198),
                A = t(473708),
                R = t(259869),
                w = t.n(R);

            function O(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                return e.isActiveThread() ? (0, r.jsx)(M, {
                    channel: e
                }) : (0, r.jsx)(P, {
                    channel: e
                })
            }

            function M(e) {
                var n = e.channel,
                    t = (0, o.e7)([S.Z], (function() {
                        return S.Z.getMostRecentMessage(n.id)
                    }));
                return null == t ? (0, r.jsx)(C, {
                    channel: n
                }) : (0, r.jsx)(D, {
                    channel: n,
                    message: t
                })
            }

            function C(e) {
                var n = e.channel,
                    t = (0, _.Ok)(n);
                return (0, r.jsxs)(s.Text, {
                    className: w().subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [A.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "  •  ", (0, _.Ye)(t)]
                })
            }

            function D(e) {
                var n, t = e.channel,
                    i = e.message;
                (0, m.$)(O({}, t.guild_id, [i.author.id]));
                var l = (0, o.e7)([c.default], (function() {
                        return null !== (n = c.default.getUser(i.author.id)) && void 0 !== n ? n : i.author
                    })),
                    u = (0, Z.ZP)(i),
                    d = u.nick,
                    f = u.colorString,
                    v = (0, o.e7)([E.Z], (function() {
                        return E.Z.isBlocked(i.author.id)
                    })),
                    b = a.useMemo((function() {
                        var e = null != i.content && "" !== i.content ? (0, g.ZP)(i, {
                                formatInline: !0
                            }).content : null,
                            n = (0, T.f)(i, e, v, w().messageContent, {
                                iconClass: w().messageContentIcon,
                                iconSize: N.WW
                            }),
                            t = n.contentPlaceholder,
                            a = n.renderedContent,
                            o = n.icon;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [null != a ? a : (0, r.jsx)("span", {
                                children: t
                            }), o]
                        })
                    }), [i, v]);
                return (0, r.jsxs)(s.Text, {
                    className: w().subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, r.jsx)(h.Z, {
                        className: w().avatar,
                        user: l,
                        size: s.AvatarSizes.SIZE_16
                    }), (0, r.jsx)(s.NameWithRole, {
                        name: d,
                        color: f,
                        className: w().authorName
                    }), ": ", b, "  •  ", (0, _.Ye)(x.Z.extractTimestamp(i.id))]
                })
            }

            function P(e) {
                var n, t, a = e.channel,
                    i = (0, o.e7)([p.ZP], (function() {
                        return p.ZP.lastMessageId(a.id)
                    })),
                    l = null == i ? new Date(null !== (t = null === (n = a.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== t ? t : Date.now()).getTime() : x.Z.extractTimestamp(i);
                (0, m.$)(O({}, a.guild_id, [a.ownerId]));
                var u, d = (0, o.e7)([c.default], (function() {
                        return c.default.getUser(a.ownerId)
                    })),
                    f = (0, o.e7)([b.ZP], (function() {
                        return b.ZP.getMember(a.guild_id, a.ownerId)
                    })),
                    g = null !== (u = (0, v.Z)(a)) && void 0 !== u ? u : y.Z;
                return (0, r.jsx)(s.Text, {
                    className: w().subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == d ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: w().noAvatarIcon,
                            children: (0, r.jsx)(g, {
                                width: 10,
                                height: 10
                            })
                        }), A.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.Ye)(l)
                        })]
                    }) : (0,
                        r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.Z, {
                            className: w().avatar,
                            user: d,
                            size: s.AvatarSizes.SIZE_16
                        }), A.Z.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook: function(e, n) {
                                var t, a;
                                return (0, r.jsx)(s.NameWithRole, {
                                    className: w().startedByName,
                                    color: null !== (t = null == f ? void 0 : f.colorString) && void 0 !== t ? t : void 0,
                                    name: null !== (a = null == f ? void 0 : f.nick) && void 0 !== a ? a : j.ZP.getName(d)
                                }, n)
                            }
                        }), (0, r.jsx)("span", {
                            className: w().bullet,
                            children: "•"
                        }), A.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.Ye)(l)
                        })]
                    })
                })
            }
            var H = t(379364);

            function k(e, n, t, r, a, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function L(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function s(e) {
                            k(o, r, a, s, i, "next", e)
                        }

                        function i(e) {
                            k(o, r, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function W(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function z(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var B = function(e, n) {
                var t, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };
            const U = a.memo((function(e) {
                var n = e.threadId,
                    a = e.goToThread,
                    u = e.showChannelName,
                    c = (0, o.e7)([l.Z], (function() {
                        return l.Z.getChannel(n)
                    })),
                    d = (0, o.e7)([l.Z], (function() {
                        return l.Z.getChannel(c.parent_id)
                    }));
                return (0, r.jsxs)(s.Clickable, {
                    className: w().container,
                    onClick: function(e) {
                        return a(c, e.shiftKey)
                    },
                    onContextMenu: function(e) {
                        return (0, i.jW)(e, L((function() {
                            var e, n;
                            return B(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(58969), t.e(51493), t.e(31114)]).then(t.bind(t, 881580))];
                                    case 1:
                                        e = a.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, z(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        W(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                channel: c
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    children: [(0, r.jsxs)("div", {
                        className: w().left,
                        children: [(0, r.jsxs)(s.Heading, {
                            className: w().threadNameLine,
                            variant: "heading-md/semibold",
                            children: [(0, r.jsx)("span", {
                                className: w().threadName,
                                children: c.name
                            }), u && null != d ? (0, r.jsx)("span", {
                                className: w().parentName,
                                children: "#".concat(d.name)
                            }) : null]
                        }), I(c)]
                    }), (0, r.jsx)(F, {
                        channel: c
                    })]
                })
            }));

            function F(e) {
                var n, t, s = e.channel,
                    i = (0, o.e7)([f.Z], (function() {
                        return null !== (n = f.Z.getMemberIdsPreview(s.id)) && void 0 !== n ? n : []
                    })),
                    l = (0,
                        o.e7)([f.Z], (function() {
                        return null !== (t = f.Z.getMemberCount(s.id)) && void 0 !== t ? t : 0
                    })),
                    h = (0, o.Wu)([c.default], (function() {
                        return i.map((function(e) {
                            return c.default.getUser(e)
                        }))
                    }));
                a.useEffect((function() {
                    i.filter((function(e, n) {
                        return null == h[n]
                    })).forEach((function(e) {
                        u.Z.requestMember(s.guild_id, e)
                    }))
                }), []);
                return 0 === i.length ? null : (0, r.jsx)(d.Z, {
                    className: w().facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: s.guild_id,
                    users: h,
                    count: l,
                    max: H.yX
                })
            }
        }
    }
]);
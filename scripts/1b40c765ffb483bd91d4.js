(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21297], {
        50976: (e, t, n) => {
            e.exports = n.p + "5f99768c1724574c1b6206022c65a7c2.gif"
        },
        522873: (e, t, n) => {
            e.exports = n.p + "7e65615eb830f1e822f5d72690e44c9e.svg"
        },
        794235: (e, t, n) => {
            e.exports = n.p + "c84343df1a52f1b30cb768cc7b6bdfb9.png"
        },
        517102: (e, t, n) => {
            e.exports = n.p + "ac47b6c5d71e1def3b8a9c7c5197a698.svg"
        },
        275865: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => ve
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(441143),
                l = n.n(u),
                c = n(496486),
                s = n.n(c),
                f = n(547308),
                d = n(202351),
                p = n(575945),
                h = n(304548),
                m = n(77413),
                y = n(334835),
                b = n(657539),
                v = n(516217),
                O = n(316878),
                g = n(135855),
                E = n(572615),
                T = n(908741),
                j = n(123398),
                R = n(841150),
                S = n(743313),
                I = n(436160),
                _ = n(690934),
                C = n(163082),
                A = n(330768),
                P = n(225386),
                w = n(64234),
                N = n(61209),
                x = n(21372),
                M = n(558095),
                Z = n(352980),
                L = n(682776),
                U = n(840922),
                k = n(473903),
                D = n(107364),
                B = n(155349),
                V = n(775173),
                G = n(38004),
                F = n(773148),
                W = n(841278),
                H = n(2590),
                z = n(473708),
                K = n(223416),
                Y = n.n(K),
                J = n(380203),
                $ = n.n(J);

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function X(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Q(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function te(e) {
                te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return te(e)
            }

            function ne(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && ae(e, t)
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ee(e, t, n[t])
                    }))
                }
                return e
            }

            function oe(e, t) {
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

            function ie(e, t) {
                return !t || "object" !== le(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ae(e, t) {
                ae = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ae(e, t)
            }

            function ue(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var le = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ce(e) {
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
                    var n, r = te(e);
                    if (t) {
                        var o = te(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ie(this, n)
                }
            }
            var se = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                fe = 44;

            function de(e) {
                return null == e.id ? g.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }
            var pe = function(e) {
                    var t = e.emoji,
                        n = e.channelId,
                        i = e.messageId,
                        u = ue(o.useState(!0), 2),
                        l = u[0],
                        c = u[1],
                        s = ue(o.useState([]), 2),
                        f = s[0],
                        d = s[1],
                        p = o.useMemo((function() {
                            if (!(null == f || f.length < 1)) {
                                var e = (0, _.Zn)(t, f[0], n, {
                                    emojiSize: I.M.LARGE,
                                    messageId: i
                                });
                                return (0, r.jsx)(I.Z, {
                                    className: Y().effect,
                                    effect: e,
                                    emojiSize: I.M.LARGE,
                                    onComplete: function() {
                                        return c(!1)
                                    }
                                })
                            }
                        }), [f, t, n, i]);
                    o.useEffect((function() {
                        var e, n, r = !1;
                        c(!0);
                        (n = (e = function() {
                            var e;
                            return se(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, (0, G.B6)(t)];
                                    case 1:
                                        e = n.sent();
                                        Array.isArray(e) && e.length > 0 && (r || d(e));
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = e.apply(t, n);

                                function a(e) {
                                    X(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    X(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        }), function() {
                            return n.apply(this, arguments)
                        })();
                        return function() {
                            r = !0
                        }
                    }), [t]);
                    return (0, r.jsxs)("div", {
                        className: Y().burstEmojiSection,
                        children: [p, (0, r.jsx)(m.Z, {
                            className: a()(Y().burstEmoji, ee({}, Y().hideEmoji, l)),
                            emojiId: t.id,
                            emojiName: t.name,
                            animated: t.animated,
                            size: "reaction"
                        }), (0, r.jsx)(h.Text, {
                            variant: "text-md/medium",
                            children: de(t)
                        })]
                    })
                },
                he = function(e) {
                    ne(n, e);
                    var t = ce(n);

                    function n() {
                        Q(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.emoji,
                            n = e.count,
                            o = e.isSelected,
                            i = e.setSelected,
                            u = e.reactionType,
                            l = e.colors,
                            c = de(t),
                            s = function(e, t, n, o) {
                                var i = null == e.id ? G.ZP.getURL(e.name) : V.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: e.animated,
                                    size: t
                                });
                                return null != i && "" !== i ? (0, r.jsx)("img", {
                                    className: n,
                                    src: i,
                                    alt: e.name
                                }) : (0, r.jsx)("span", {
                                    className: o,
                                    children: e.name
                                })
                            }(t, 24, Y().emoji, a()(Y().emoji, Y().emojiText)),
                            d = u === R.O.BURST,
                            p = (d ? z.Z.Messages.BURST_REACTION_REACTORS_A11Y : z.Z.Messages.REACTION_REACTORS_A11Y).format({
                                name: c,
                                n
                            }),
                            m = {},
                            y = {};
                        if (d) {
                            var b = null != l ? l : {},
                                v = b.backgroundColor,
                                O = void 0 === v ? "" : v,
                                g = b.opacity,
                                E = void 0 === g ? 1 : g,
                                T = b.accentColor,
                                j = void 0 === T ? "" : T;
                            y.color = j;
                            if (o) {
                                var S;
                                m.background = null !== (S = (0, f.wK)(O, E)) && void 0 !== S ? S : ""
                            }
                        }
                        return (0, r.jsx)(h.Tooltip, {
                            position: "left",
                            text: c,
                            children: function(e) {
                                var l, c = e.onMouseEnter,
                                    f = e.onMouseLeave;
                                return (0, r.jsxs)(h.Clickable, {
                                    className: a()((l = {}, ee(l, Y().reactionDefault, !o), ee(l, Y().reactionSelected, o), l)),
                                    "aria-label": p,
                                    onClick: function() {
                                        return i({
                                            emoji: t,
                                            reactionType: u
                                        })
                                    },
                                    onMouseEnter: c,
                                    onMouseLeave: f,
                                    style: m,
                                    children: [s, (0, r.jsx)(h.Text, {
                                        variant: "text-sm/bold",
                                        style: y,
                                        children: n
                                    })]
                                })
                            }
                        })
                    };
                    return n
                }(o.PureComponent);

            function me(e) {
                var t = e.emoji,
                    n = e.user,
                    o = e.message,
                    i = e.channel,
                    a = e.guildId,
                    u = e.reactionType,
                    c = e.onRemoveReactor,
                    s = k.default.getCurrentUser(),
                    f = (0, d.e7)([k.default], (function() {
                        return k.default.getUser(n.id)
                    }), [n]);
                l()(null != s, "Reactor: currentUser cannot be undefined");
                var p = (0, P.$R)(i),
                    m = (0, d.e7)([L.Z], (function() {
                        return L.Z.can(H.Plq.MANAGE_MESSAGES, i) && p
                    })) || s.id === n.id,
                    v = (0, d.e7)([x.ZP, N.Z, U.Z], (function() {
                        return F.ZP.getName(a, i.id, n)
                    }));
                return (0, r.jsxs)(D.Z, {
                    className: Y().reactorDefault,
                    onContextMenu: function(e) {
                        return (0, W.Pv)(e, n, i)
                    },
                    align: D.Z.Align.CENTER,
                    children: [(0, r.jsx)(D.Z.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: $().marginReset,
                        children: (0, r.jsx)(b.Z, {
                            user: null != f ? f : n,
                            size: h.AvatarSizes.SIZE_24
                        })
                    }), (0, r.jsx)(D.Z.Child, {
                        children: (0, r.jsxs)(h.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: Y().name,
                            children: [null != v && "" !== v && (0, r.jsx)("span", {
                                className: n.isPomelo() ? "" : Y().nickname,
                                children: v
                            }), (0, r.jsx)(y.Z, {
                                user: n,
                                className: null != v && "" !== v ? Y().tagFaded : null,
                                usernameClass: Y().username,
                                discriminatorClass: Y().discriminator,
                                forceUsername: !0
                            })]
                        })
                    }), m && (0, r.jsx)(h.Clickable, {
                        onClick: function() {
                            C.Vn({
                                emoji: t,
                                userId: n.id,
                                channelId: i.id,
                                messageId: o.id,
                                reactionType: u,
                                isMe: (null == s ? void 0 : s.id) === n.id
                            });
                            null == c || c()
                        },
                        children: (0, r.jsx)(B.Z, {
                            width: 16,
                            height: 16,
                            className: Y().remove
                        })
                    })]
                })
            }
            var ye = function(e) {
                    ne(n, e);
                    var t = ce(n);

                    function n() {
                        Q(this, n);
                        var e;
                        (e = t.apply(this, arguments)).scrollerRef = o.createRef();
                        e.state = {
                            lastId: null,
                            loadingMore: !1
                        };
                        e.handleScroll = function() {
                            var t = e.scrollerRef.current;
                            if (null != t) {
                                var n = t.getScrollerState();
                                n.scrollTop + n.offsetHeight >= n.scrollHeight - fe && e.props.hasMore && !e.state.loadingMore && e.loadMore()
                            }
                        };
                        e.getRowHeight = function(t, n) {
                            var r = e.props.reactors;
                            if (1 === t) return 0 === n ? fe : 0;
                            if (0 === t) {
                                if (0 === n && 0 === r.length) return 440;
                                if (null != e.props.reactors[n]) return fe
                            }
                            return 0
                        };
                        e.renderRow = function(t) {
                            var n = t.section,
                                o = t.row,
                                i = e.props,
                                a = i.message,
                                u = i.guildId,
                                l = i.channel,
                                c = i.reaction,
                                s = i.reactors,
                                f = i.reactionType,
                                d = s[o];
                            return 1 === n ? 0 === o ? (0, r.jsx)(h.Spinner, {
                                className: Y().spinnerMore
                            }, "hasMore") : null : 0 === s.length && e.state.loadingMore ? (0, r.jsx)(h.Spinner, {
                                className: Y().spinner
                            }, "loadingMore") : null != d && (0, r.jsx)(me, {
                                message: a,
                                emoji: c.emoji,
                                guildId: u,
                                channel: l,
                                user: d,
                                reaction: c,
                                reactionType: f
                            }, d.id)
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        this.loadMore()
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this;
                        s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType || this.setState({
                            lastId: null,
                            loadingMore: !1
                        }, (function() {
                            return t.loadMore()
                        }))
                    };
                    i.loadMore = function() {
                        var e = this,
                            t = this.props,
                            n = t.message,
                            r = t.reaction,
                            o = t.reactionType,
                            i = this.state.lastId;
                        this.setState({
                            loadingMore: !0
                        });
                        C.U0({
                            channelId: n.getChannelId(),
                            messageId: n.id,
                            emoji: r.emoji,
                            limit: H.pTL,
                            after: i,
                            type: o
                        }).then((function(t) {
                            var n;
                            return e.setState({
                                loadingMore: !1,
                                lastId: null === (n = t[t.length - 1]) || void 0 === n ? void 0 : n.id
                            })
                        }))
                    };
                    i.renderSection = function() {
                        return null
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.hasMore,
                            n = e.reactors,
                            o = e.reaction,
                            i = e.message,
                            a = e.reactionType,
                            u = [];
                        if (0 === n.length && this.state.loadingMore) u.push(length);
                        else {
                            u.push(n.length);
                            t && u.push(1)
                        }
                        return (0, r.jsxs)("div", {
                            className: Y().reactorsContainer,
                            children: [a === R.O.BURST && (0, r.jsx)(pe, {
                                emoji: o.emoji,
                                channelId: i.getChannelId(),
                                messageId: i.id
                            }), (0, r.jsx)(h.List, {
                                className: Y().reactors,
                                fade: !0,
                                ref: this.scrollerRef,
                                sections: u,
                                sectionHeight: 0,
                                rowHeight: this.getRowHeight,
                                renderRow: this.renderRow,
                                renderSection: this.renderSection,
                                onScroll: t ? this.handleScroll : void 0
                            })]
                        })
                    };
                    return n
                }(o.PureComponent),
                be = d.ZP.connectStores([M.Z], (function(e) {
                    var t = e.message,
                        n = e.reaction,
                        r = e.reactionType,
                        o = M.Z.getReactions(t.getChannelId(), t.id, n.emoji, H.pTL, r);
                    if (null == o) return {
                        reactors: [],
                        hasMore: !1
                    };
                    var i = Object.values(o);
                    return {
                        reactors: i,
                        hasMore: (r === R.O.BURST ? n.burst_count : n.count) > i.length
                    }
                }))(ye);

            function ve(e) {
                var t = e.message,
                    n = e.selectedReaction,
                    i = e.onClose,
                    a = e.transitionState,
                    u = (0, d.e7)([N.Z], (function() {
                        return N.Z.getChannel(t.getChannelId())
                    })),
                    l = null == u ? void 0 : u.getGuildId(),
                    c = (0, d.e7)([Z.Z, E.Z, j.ZP], (function() {
                        var e, n, r, o = null !== (r = null !== (n = Z.Z.getMessage(t.getChannelId(), t.id)) && void 0 !== n ? n : null === (e = E.Z.getMessage(t.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== r ? r : null != l ? j.ZP.getCachedMessage(l, t.getChannelId(), t.id) : void 0;
                        return null != o ? o.reactions : []
                    }), [t, l]),
                    s = (0, v.Qd)(l).enabled,
                    f = function(e, t) {
                        return o.useMemo((function() {
                            var n = [];
                            e.forEach((function(e) {
                                t && e.burst_count > 0 && n.push(oe(re({}, e), {
                                    count: 0
                                }));
                                e.count > 0 && n.push(oe(re({}, e), {
                                    burst_count: 0
                                }))
                            }));
                            n.sort((function(e, t) {
                                var n = e.burst_count > 0 ? e.burst_count : e.count;
                                return (t.burst_count > 0 ? t.burst_count : t.count) - n
                            }));
                            return n
                        }), [e, t])
                    }(c, s),
                    m = f[0],
                    y = ue(function(e, t, n) {
                        var r = ue(o.useState(null != e ? e : t), 2),
                            i = r[0],
                            a = r[1];
                        o.useEffect((function() {
                            null != i && null == n.find((function(e) {
                                var t = e.burst_count > 0 ? R.O.BURST : R.O.NORMAL;
                                return e.emoji === i.emoji && t === i.reactionType
                            })) && a(t)
                        }), [i, a, n, t]);
                        return [i, a]
                    }(n, null != m ? {
                        emoji: m.emoji,
                        reactionType: m.burst_count > 0 ? R.O.BURST : R.O.NORMAL
                    } : null, c), 2),
                    b = y[0],
                    g = y[1],
                    I = o.useMemo((function() {
                        return null == b ? null : null !== (e = c.find((function(e) {
                            return (0, A.ir)(e.emoji, b.emoji)
                        }))) && void 0 !== e ? e : null;
                        var e
                    }), [c, b]),
                    _ = (0, d.e7)([O.Z], (function() {
                        return O.Z.saturation
                    })),
                    C = (0, d.e7)([w.Z], (function() {
                        return (0, p.wj)(w.Z.theme)
                    }));
                o.useEffect((function() {
                    (0 === c.length || null == b && null == I) && setImmediate(i)
                }), [i, c.length, I, b]);
                if (null == b || null == I) return (0, r.jsx)(h.Spinner, {});
                if (null == u) throw new Error("MessageReactions.render: Message does not have a channelId");
                return (0, r.jsx)(T.Z.Provider, {
                    value: null != l ? l : void 0,
                    children: (0, r.jsxs)(h.ModalRoot, {
                        "aria-label": z.Z.Messages.REACTIONS,
                        transitionState: a,
                        size: h.ModalSize.DYNAMIC,
                        className: Y().container,
                        children: [(0, r.jsx)(h.Scroller, {
                            className: Y().scroller,
                            fade: !0,
                            children: f.map((function(e) {
                                var t, n = e.burst_count > 0;
                                return (0, r.jsx)(he, {
                                    isSelected: Oe(b, e, n ? R.O.BURST : R.O.NORMAL),
                                    setSelected: g,
                                    reactionType: n ? R.O.BURST : R.O.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, S.t)(e.burst_colors, _, C) : void 0
                                }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
                            }))
                        }), (0, r.jsx)(be, {
                            message: t,
                            reaction: I,
                            guildId: l,
                            channel: u,
                            reactionType: b.reactionType
                        })]
                    })
                })
            }
            var Oe = function(e, t, n) {
                return s().isEqual(e.emoji, t.emoji) && e.reactionType === n
            }
        },
        178483: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => v,
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(304548),
                u = n(327499),
                l = n(443812),
                c = n(72580),
                s = n(944522),
                f = n(2590),
                d = n(473708),
                p = n(954611),
                h = n.n(p);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v, O = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.REACTIONS = 1] = "REACTIONS"
            }(v || (v = {}));
            const g = function(e) {
                var t = e.type,
                    p = e.guild,
                    m = e.closePopout,
                    g = e.ctaRef,
                    E = (0, l.Dt)(),
                    T = b(o.useState(!1), 2),
                    j = T[0],
                    R = T[1],
                    S = (0,
                        i.e7)([s.Z], (function() {
                        return s.Z.isLurking(p.id)
                    }), [p.id]);
                o.useEffect((function() {
                    j && !S && m()
                }), [j, S, m]);
                var I = null,
                    _ = d.Z.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case v.CHAT:
                        I = d.Z.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case v.REACTIONS:
                        I = d.Z.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, c.vE)(t)
                }
                if (null == I) return null;
                var C, A, P = (A = (C = function() {
                    return O(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                R(!0);
                                e.label = 1;
                            case 1:
                                e.trys.push([1, 3, , 4]);
                                return [4, u.Z.joinGuild(p.id, {
                                    source: f.vtS.CHAT_INPUT_BLOCKER
                                })];
                            case 2:
                                e.sent();
                                m();
                                return [3, 4];
                            case 3:
                                e.sent();
                                R(!1);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = C.apply(e, t);

                        function i(e) {
                            y(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            y(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function() {
                    return A.apply(this, arguments)
                });
                return (0, r.jsxs)(a.Dialog, {
                    className: h().container,
                    "aria-labelledby": E,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: h().image,
                        src: n(522873)
                    }), (0,
                        r.jsxs)("div", {
                        className: h().content,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            id: E,
                            children: I
                        }), (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: _
                        }), (0, r.jsxs)("div", {
                            className: h().buttonContainer,
                            children: [(0, r.jsx)(a.Button, {
                                buttonRef: g,
                                onClick: P,
                                submitting: j,
                                children: d.Z.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, r.jsx)(a.Button, {
                                onClick: m,
                                look: a.Button.Looks.BLANK,
                                className: h().cancel,
                                children: d.Z.Messages.LURKER_MODE_POPOUT_CANCEL
                            })]
                        })]
                    })]
                })
            }
        },
        596310: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => f,
                Z: () => O
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f, d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }! function(e) {
                e.HOVER = "HOVER";
                e.EXTERNAL = "EXTERNAL";
                e.RANDOM = "RANDOM"
            }(f || (f = {}));
            var h = {},
                m = {},
                y = {},
                b = function(e, t) {
                    var n = null != t.id ? t.id : t.name;
                    return "".concat(e, ":").concat(n)
                },
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && c(e, t)
                    }(n, e);
                    var t = p(n);

                    function n() {
                        a(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.getReactionPickerAnimation = function(e, t, n) {
                        return h["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
                    };
                    r.getEffectForEmojiId = function(e, t, n) {
                        var r, o = b(t, n);
                        return null === (r = m[e]) || void 0 === r ? void 0 : r[o]
                    };
                    return n
                }(r.ZP.Store);
            v.displayName = "BurstReactionEffectsStore";
            const O = new v(o.Z, {
                BURST_REACTION_EFFECT_CLEAR: function(e) {
                    var t, n = e.channelId,
                        r = e.messageId,
                        o = e.emoji,
                        i = b(r, o);
                    null === (t = m[n]) || void 0 === t || delete t[i]
                },
                BURST_REACTION_EFFECT_PLAY: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.emoji,
                        o = e.key,
                        i = b(n, r);
                    if (!(function(e, t) {
                            var n, r;
                            switch (e) {
                                case f.HOVER:
                                    n = f.HOVER;
                                    break;
                                case f.RANDOM:
                                    n = f.RANDOM;
                                    break;
                                default:
                                    n = f.EXTERNAL
                            }
                            var o = Object.entries(null !== (r = m[t]) && void 0 !== r ? r : {}).filter((function(e) {
                                    return s(e, 2)[1] === n
                                })),
                                i = Object.fromEntries(o);
                            if (Object.keys(i).length >= 5 && e === f.EXTERNAL)
                                for (var a in i)
                                    if (null == y[t] || null == y[t][a]) {
                                        delete m[t][a];
                                        delete i[a];
                                        break
                                    } return Object.keys(i).length
                        }(o, t) >= 5)) {
                        var a, u, l = null !== (a = m[t]) && void 0 !== a ? a : {},
                            c = (null !== (u = y[t]) && void 0 !== u ? u : {})[i],
                            d = l[i];
                        if (o !== f.HOVER || null == d) {
                            if (d === f.HOVER && o === f.EXTERNAL && null != c) {
                                var p;
                                "function" == typeof c.destroy && c.destroy();
                                null === (p = y[t]) || void 0 === p || delete p[i];
                                d = void 0
                            }
                            null == d && (null != m[t] ? m[t][i] = o : m[t] = function(e, t, n) {
                                t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n;
                                return e
                            }({}, i, o))
                        }
                    }
                },
                BURST_REACTION_ANIMATION_ADD: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.emoji,
                        o = e.animation,
                        i = b(n, r);
                    null == y[t] && (y[t] = {});
                    y[t][i] = o
                },
                BURST_REACTION_PICKER_ANIMATION_ADD: function(e) {
                    var t = e.messageId,
                        n = e.emojiName,
                        r = e.emojiId,
                        o = e.startPosition;
                    h["".concat(t, ":").concat(n, ":").concat(null != r ? r : "")] = o
                },
                BURST_REACTION_PICKER_ANIMATION_CLEAR: function(e) {
                    var t = e.messageId,
                        n = e.emojiName,
                        r = e.emojiId;
                    delete h["".concat(t, ":").concat(n, ":").concat(null != r ? r : "")]
                }
            })
        },
        841150: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => r
            });
            var r;
            ! function(e) {
                e[e.NORMAL = 0] = "NORMAL";
                e[e.BURST = 1] = "BURST"
            }(r || (r = {}))
        },
        728521: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = function(e) {
                var t = e.channel,
                    n = e.canChat,
                    r = e.renderReactions,
                    o = e.canAddNewReactions,
                    i = e.isLurking,
                    a = e.isGuest,
                    u = e.communicationDisabled,
                    l = e.isActiveChannelOrUnarchivableThread,
                    c = t.isPrivate(),
                    s = t.isSystemDM(),
                    f = (n || c) && l;
                return {
                    disableReactionReads: !r,
                    disableReactionCreates: i || a || !f || !((!0 === o || c) && !s && l),
                    disableReactionUpdates: i || a || !f || !0 === u
                }
            }
        },
        743313: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l,
                t: () => c
            });
            var r = n(202351),
                o = n(575945),
                i = n(316878),
                a = n(64234),
                u = n(918041);

            function l(e) {
                return c(e, (0, r.e7)([i.Z], (function() {
                    return i.Z.saturation
                })), (0, r.e7)([a.Z], (function() {
                    return (0, o.wj)(a.Z.theme)
                })))
            }

            function c(e, t, n) {
                if (null == e || e.length < 1) return null;
                var r, o = u.Z.buildEmojiReactionColorsPlatformed({
                        colors: e,
                        saturationFactor: t
                    }),
                    i = n ? null == o ? void 0 : o.DARK : null == o ? void 0 : o.LIGHT;
                return {
                    backgroundColor: null == i ? void 0 : i.backgroundColor,
                    accentColor: null == i ? void 0 : i.accentColor,
                    highlightColor: null == i ? void 0 : i.highlightColor,
                    opacity: null !== (r = null == i ? void 0 : i.opacity) && void 0 !== r ? r : .15
                }
            }
        },
        254807: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => v,
                openOutOfBurstsModal: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(304548),
                a = n(330768),
                u = n(652591),
                l = n(403063),
                c = n(2590),
                s = n(473708),
                f = n(910484),
                d = n.n(f);

            function p(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            p(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var y = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                b = n(794235);

            function v(e) {
                var t = e.onClose,
                    n = e.transitionState;
                o.useEffect((function() {
                    u.default.track(c.rMx.OPEN_MODAL, {
                        type: l.RB.OUT_OF_BURSTS
                    })
                }), []);
                var f = (0, a.OO)();
                return (0, r.jsxs)(i.ModalRoot, {
                    className: d().root,
                    "aria-label": s.Z.Messages.SUPER_REACTION_OUT_OF_BURSTS,
                    transitionState: n,
                    children: [(0, r.jsx)("img", {
                        className: d().art,
                        alt: "",
                        src: b
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: d().content,
                        children: [(0, r.jsx)(i.Heading, {
                            className: d().header,
                            variant: "heading-xl/semibold",
                            children: s.Z.Messages.SUPER_REACTION_OUT_OF_BURSTS
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: f
                        }), (0, r.jsx)(i.Button, {
                            className: d().button,
                            onClick: t,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.BRAND,
                            children: s.Z.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function O() {
                (0, i.openModalLazy)(h((function() {
                    var e, t;
                    return y(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 254807))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                m(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e))
                                }]
                        }
                    }))
                })))
            }
        },
        203244: (e, t, n) => {
            "use strict";
            n.d(t, {
                aO: () => Tt,
                le: () => It,
                y4: () => Rt,
                op: () => jt
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(468811),
                l = n.n(u),
                c = n(853158),
                s = n(547308),
                f = n(202351),
                d = n(418705),
                p = n(513328),
                h = n(685771),
                m = n(304548),
                y = n(77413),
                b = n(275865),
                v = n(516217),
                O = n(316878),
                g = n(396043),
                E = n(896490),
                T = n(652411),
                j = n(248088),
                R = n(255875),
                S = n(97011),
                I = n(329543),
                _ = n(775173),
                C = n(38004),
                A = n(4958),
                P = n(258628),
                w = n.n(P);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function x(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        x(e, t, n[t])
                    }))
                }
                return e
            }

            function Z(e, t) {
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

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = [];

            function k(e) {
                var t = e.messageId,
                    n = e.emoji,
                    i = e.startPosition,
                    a = e.targetPosition,
                    u = L(o.useState(0), 2),
                    l = u[0],
                    s = u[1],
                    f = L(o.useState(0), 2),
                    d = f[0],
                    p = f[1],
                    h = L(o.useState(null), 2),
                    m = h[0],
                    b = h[1],
                    v = o.useContext(R.E).confettiCanvas,
                    O = (0, T.uR)(v, m),
                    g = o.useMemo((function() {
                        return [{
                            src: null == n.id ? C.ZP.getURL(n.name) : _.ZP.getEmojiURL({
                                id: n.id,
                                animated: !1,
                                size: 22
                            }),
                            colorize: !1
                        }]
                    }), [n.name, n.id]),
                    E = a.x - a.width / 2 * .5,
                    P = a.y - a.height / 2 * .5,
                    N = (0, j.useSpring)({
                        from: {
                            y: i.y
                        },
                        to: {
                            y: P
                        },
                        config: {
                            duration: 450,
                            easing: c.Z.Easing.in(c.Z.Easing.exp)
                        },
                        onChange: function(e) {
                            var t = e.y;
                            p(t)
                        }
                    }),
                    x = (0, j.useSpring)({
                        from: {
                            x: i.x,
                            scale: 1,
                            opacity: 1
                        },
                        to: {
                            x: E,
                            scale: .5,
                            opacity: .4
                        },
                        config: {
                            duration: 450,
                            easing: c.Z.Easing.in(c.Z.Easing.ease)
                        },
                        onRest: function() {
                            (0, S.Gd)(t, n.name, n.id)
                        },
                        onChange: function(e) {
                            var t = e.x;
                            s(t)
                        }
                    });
                o.useEffect((function() {
                    l > 0 && d > 0 && O.createConfetti(Z(M({}, A.We), {
                        position: {
                            type: "static",
                            value: {
                                x: l,
                                y: d
                            }
                        }
                    }))
                }), [O, l, d]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(T.Ji, {
                        ref: b,
                        sprites: g,
                        colors: U,
                        spriteWidth: A.Ko,
                        spriteHeight: A.Ko
                    }), (0, r.jsx)(I.ZP, {
                        children: (0, r.jsx)(j.animated.div, {
                            style: M({}, N),
                            className: w().emojiContainer,
                            children: (0, r.jsx)(j.animated.div, {
                                style: Z(M({}, x), {
                                    opacity: x.opacity
                                }),
                                children: (0, r.jsx)(y.Z, {
                                    className: w().emoji,
                                    emojiId: n.id,
                                    emojiName: n.name,
                                    animated: n.animated,
                                    size: "jumbo"
                                })
                            })
                        })
                    })]
                })
            }
            var D = n(245353),
                B = n(420881),
                V = n(440600),
                G = n(276985),
                F = n(179156),
                W = n(504366),
                H = n(178483),
                z = n(496486),
                K = n.n(z),
                Y = n(318715),
                J = n(785085),
                $ = n(367299),
                q = n(757730),
                X = n(919031),
                Q = n(69540);

            function ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ee(e, t, n[t])
                    }))
                }
                return e
            }

            function ne(e) {
                var t = e.reactionRef,
                    n = e.count,
                    r = o.useRef(n),
                    i = (0,
                        Y.ZP)([J.Z], (function() {
                        return J.Z.getState()
                    })),
                    a = (0, X.Z)(),
                    u = (0, q.Z)(t);
                o.useEffect((function() {
                    if (n > r.current && null != u) {
                        var e = (0, z.clamp)(n, i.confettiCount / 2, 2 * i.confettiCount);
                        a.fire(u.x, u.y, {
                            count: e
                        })
                    }
                    r.current = n
                }), [n, u, a, i.confettiCount]);
                return null
            }

            function re(e) {
                return (0, r.jsx)($.Z, {
                    confettiLocation: Q.Hn.REACTION,
                    children: (0, r.jsx)(ne, te({}, e))
                })
            }
            var oe = n(19585),
                ie = n(276611),
                ae = n(593166),
                ue = n(203600),
                le = n(2590),
                ce = n(473708),
                se = n(290869),
                fe = n.n(se),
                de = n(517102),
                pe = n.n(de);
            const he = function() {
                var e = (0, oe.Z)().analyticsLocations;
                return (0, r.jsx)(m.Dialog, {
                    children: (0, r.jsxs)("div", {
                        className: fe().burstReactionTooltipCoachmark,
                        children: [(0, r.jsx)("img", {
                            src: pe(),
                            alt: ""
                        }), (0, r.jsx)(m.Text, {
                            variant: "text-md/bold",
                            children: ce.Z.Messages.SUPER_REACTIONS_CONGRATS_HEADER
                        }), (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            children: ce.Z.Messages.SUPER_REACTIONS_CONGRATS_DESCRIPTION.format({
                                onClick: function() {
                                    (0, ae.z)();
                                    (0, S.E_)(null);
                                    (0, E.EW)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                }
                            })
                        }), (0,
                            r.jsxs)("span", {
                            className: fe().burstReactionTooltipCoachmarkButtons,
                            children: [(0, r.jsx)(m.Button, {
                                className: a()(fe().burstReactionTooltipCoachmarkButton, fe().burstReactionTooltipCoachmarkDismiss),
                                color: m.Button.Colors.CUSTOM,
                                look: m.Button.Looks.BLANK,
                                onClick: function() {
                                    (0, S.E_)(null);
                                    (0, E.EW)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                },
                                children: ce.Z.Messages.DISMISS
                            }), (0, r.jsx)(m.Button, {
                                autoFocus: !0,
                                className: a()(fe().burstReactionTooltipCoachmarkButton, fe().burstReactionTooltipCoachmarkCTA),
                                color: m.Button.Colors.CUSTOM,
                                look: m.Button.Looks.FILLED,
                                onClick: function() {
                                    var t = {
                                        page: le.ZY5.PREMIUM_UPSELL_BURST_REACTIONS
                                    };
                                    (0, ie.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: ue.Si.TIER_2,
                                        analyticsObject: t,
                                        analyticsLocations: e
                                    });
                                    (0, S.E_)(null);
                                    (0, E.EW)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                },
                                children: ce.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                            })]
                        })]
                    })
                })
            };
            var me = n(455706),
                ye = n(38602),
                be = n(163082),
                ve = n(330768),
                Oe = n(968449),
                ge = n(61209),
                Ee = n(567403),
                Te = n(558095),
                je = n(464187),
                Re = n(473903),
                Se = n(901654),
                Ie = n(579722),
                _e = n(366007),
                Ce = n(613665),
                Ae = n(406493),
                Pe = n(652591),
                we = n(694329),
                Ne = n(596310),
                xe = n(833589),
                Me = n(841150),
                Ze = n(918124),
                Le = n(743313),
                Ue = n(254807),
                ke = n(974595),
                De = n(386364),
                Be = n(840922),
                Ve = n(773148);

            function Ge(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Me.O.NORMAL,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = Te.Z.getReactions(e.getChannelId(), e.id, t, 3, n),
                    i = ge.Z.getChannel(e.getChannelId()),
                    a = null == i || i.isPrivate() ? null : i.getGuildId(),
                    u = e.getReaction(t),
                    l = n === Me.O.BURST,
                    c = K()(o).reject((function(e) {
                        return Be.Z.isBlocked(e.id)
                    })).take(3).map((function(e) {
                        return Ve.ZP.getName(a, null == i ? void 0 : i.id, e)
                    })).value();
                if (0 === c.length) return "";
                var s, f = {
                        standard: {
                            reactionTooltip1NInteractive: ce.Z.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: ce.Z.Messages.REACTION_TOOLTIP_1_N,
                            reactionTooltip1: ce.Z.Messages.REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: ce.Z.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: ce.Z.Messages.REACTION_TOOLTIP_2_N,
                            reactionTooltip2: ce.Z.Messages.REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: ce.Z.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: ce.Z.Messages.REACTION_TOOLTIP_3_N,
                            reactionTooltip3: ce.Z.Messages.REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: ce.Z.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: ce.Z.Messages.REACTION_TOOLTIP_N
                        },
                        burst: {
                            reactionTooltip1NInteractive: ce.Z.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: ce.Z.Messages.BURST_REACTION_TOOLTIP_1_N,
                            reactionTooltip1: ce.Z.Messages.BURST_REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: ce.Z.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: ce.Z.Messages.BURST_REACTION_TOOLTIP_2_N,
                            reactionTooltip2: ce.Z.Messages.BURST_REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: ce.Z.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: ce.Z.Messages.BURST_REACTION_TOOLTIP_3_N,
                            reactionTooltip3: ce.Z.Messages.BURST_REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: ce.Z.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: ce.Z.Messages.BURST_REACTION_TOOLTIP_N
                        }
                    },
                    d = l ? f.burst : f.standard,
                    p = null !== (s = l ? null == u ? void 0 : u.burst_count : null == u ? void 0 : u.count) && void 0 !== s ? s : 0,
                    h = Math.max(0, p - c.length),
                    m = (0, ve.Lh)(t);
                return 1 === c.length ? h > 0 ? null != r ? d.reactionTooltip1NInteractive.format({
                    a: c[0],
                    n: h,
                    emojiName: m,
                    onClick: r
                }) : d.reactionTooltip1N.format({
                    a: c[0],
                    n: h,
                    emojiName: m
                }) : d.reactionTooltip1.format({
                    a: c[0],
                    emojiName: m
                }) : 2 === c.length ? h > 0 ? null != r ? d.reactionTooltip2NInteractive.format({
                    a: c[0],
                    b: c[1],
                    n: h,
                    emojiName: m,
                    onClick: r
                }) : d.reactionTooltip2N.format({
                    a: c[0],
                    b: c[1],
                    n: h,
                    emojiName: m
                }) : d.reactionTooltip2.format({
                    a: c[0],
                    b: c[1],
                    emojiName: m
                }) : 3 === c.length ? h > 0 ? null != r ? d.reactionTooltip3NInteractive.format({
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: h,
                    emojiName: m,
                    onClick: r
                }) : d.reactionTooltip3N.format({
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    n: h,
                    emojiName: m
                }) : d.reactionTooltip3.format({
                    a: c[0],
                    b: c[1],
                    c: c[2],
                    emojiName: m
                }) : null != r ? d.reactionTooltipNInteractive.format({
                    n: h,
                    emojiName: m,
                    onClick: r
                }) : d.reactionTooltipN.format({
                    n: h,
                    emojiName: m
                })
            }
            var Fe = n(744564),
                We = n(403063),
                He = n(436160),
                ze = n(690934),
                Ke = n(304224),
                Ye = n.n(Ke),
                Je = n(160936),
                $e = n.n(Je);

            function qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return qe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Qe(e) {
                var t = e.channelId,
                    n = e.messageId,
                    i = e.emoji,
                    a = e.useChatFontScaling,
                    u = e.color,
                    l = e.count,
                    c = (0, v.Qd)(null, !1).hasPlayRandomAnimations,
                    s = (0, f.e7)([Ne.Z], (function() {
                        return Ne.Z.getEffectForEmojiId(t, n, i)
                    })),
                    d = a ? $e() : Ye(),
                    p = o.useMemo((function() {
                        return (0, ze.Zn)(i, u, t, {
                            key: s,
                            messageId: n
                        })
                    }), [u, s, i, t, n]),
                    h = Xe(o.useState(!1), 2),
                    m = h[0],
                    y = h[1],
                    b = (0, f.e7)([O.Z], (function() {
                        return O.Z.useReducedMotion
                    })),
                    g = Oe.Yk.useSetting(),
                    E = o.useCallback((function() {
                        Fe.Z.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: n,
                            emoji: i
                        })
                    }), [i, t, n]);
                o.useEffect((function() {
                    var e = function() {
                        if (!m) {
                            var e = (0,
                                We.vJ)("".concat(Date.now()).concat(t).concat(n).concat(i.name)) % 10;
                            if ((e += l > 4 ? 4 : l - 1) > 7) {
                                y(!0);
                                (0, be.T6)({
                                    channelId: t,
                                    messageId: n,
                                    emoji: i,
                                    key: Ne.I.RANDOM
                                })
                            }
                        }
                    };
                    if (!m && c && (!b || g) && g) {
                        e();
                        var r = setInterval(e, 5e3);
                        return function() {
                            clearInterval(r)
                        }
                    }
                }), [g, t, l, i, i.name, c, m, n, b]);
                return null == s ? null : (0, r.jsx)(He.Z, {
                    className: d.effect,
                    effect: p,
                    onComplete: E
                })
            }
            const et = o.memo(Qe);
            var tt = n(618931),
                nt = n.n(tt),
                rt = n(986982),
                ot = n.n(rt),
                it = n(27345),
                at = n.n(it),
                ut = n(955640),
                lt = n.n(ut);

            function ct(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function st(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function ft(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function dt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function pt(e) {
                pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return pt(e)
            }

            function ht(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        dt(e, t, n[t])
                    }))
                }
                return e
            }

            function mt(e, t) {
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

            function yt(e, t) {
                return !t || "object" !== Ot(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function bt(e, t) {
                bt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return bt(e, t)
            }

            function vt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ct(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ct(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ot = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function gt(e) {
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
                    var n, r = pt(e);
                    if (t) {
                        var o = pt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return yt(this, n)
                }
            }
            var Et = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                Tt = 9;

            function jt(e, t, n) {
                (0, m.openModal)((function(e) {
                    return (0, r.jsx)(b.default, mt(ht({}, e), {
                        message: t,
                        selectedReaction: n
                    }))
                }))
            }

            function Rt(e, t, n) {
                return n === Me.O.BURST && t || n === Me.O.NORMAL && e
            }
            var St = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && bt(e, t)
                }(n, e);
                var t = gt(n);

                function n() {
                    ft(this, n);
                    var e;
                    (e = t.apply(this, arguments)).isReactionEventActive = !1;
                    e.isKeyboardNavigation = !1;
                    e.scale = new c.Z.Value(1);
                    e.opacity = new c.Z.Value(1);
                    e.timeout = new p.V7;
                    e.hideTimeout = new p.V7;
                    e.ctaRef = o.createRef();
                    e.type = Me.O.NORMAL;
                    e.colors = {
                        backgroundColor: void 0,
                        borderColor: void 0,
                        textColor: void 0
                    };
                    e.hasDismissedRemoveModal = !1;
                    e.shouldShowFreeUserSentCoachmark = !1;
                    e.state = {
                        shouldShowTooltip: !1,
                        tooltipText: null,
                        tooltipTextAria: null,
                        reactionRef: null,
                        tooltipPositionKey: void 0
                    };
                    e.hasShownTooltip = !1;
                    e.nonce = l()();
                    e.userCanBurstReact = function() {
                        var t = e.props.remainingBurstCurrency;
                        return void 0 !== t && t > 0
                    };
                    e.handleClick = function(t) {
                        t.stopPropagation();
                        var n = e.props,
                            r = n.message,
                            o = n.emoji,
                            i = n.readOnly,
                            a = n.isBurstReaction,
                            u = n.isPendingMember,
                            l = n.isLurking,
                            c = n.isGuest,
                            s = n.isForumToolbar,
                            f = n.userHasPremium,
                            p = n.hasDismissedRemoveModal,
                            h = n.shouldShowFreeUserSentCoachmark,
                            m = ge.Z.getChannel(r.getChannelId());
                        if (l || c) {
                            var y, b;
                            null === (y = e.ctaRef) || void 0 === y || null === (b = y.current) || void 0 === b || b.focus()
                        } else {
                            var v = r.getChannelId(),
                                O = s ? be.TW.FORUM_TOOLBAR : be.TW.MESSAGE;
                            if (a && !i && e.isMe()) p ? (0, be.WO)(v, r.id, o, void 0, O, {
                                burst: a
                            }) : (0, be.Vn)({
                                emoji: o,
                                channelId: v,
                                messageId: r.id,
                                reactionType: a ? Me.O.BURST : Me.O.NORMAL,
                                location: O,
                                isMe: e.isMe()
                            });
                            else {
                                if (a && !e.userCanBurstReact() && !f) {
                                    (0, ye.openBurstReactionsUpsellModal)({
                                        analytics: {
                                            type: ue.cd.BURST_REACTION_UPSELL,
                                            page: null != (null == m ? void 0 : m.getGuildId()) ? le.ZY5.GUILD_CHANNEL : le.ZY5.DM_CHANNEL,
                                            section: null != m ? (0, ve.s4)(m) : void 0,
                                            object: le.qAy.EMOJI_REACTION_UPSELL
                                        }
                                    });
                                    return
                                }
                                if (a && !e.userCanBurstReact()) {
                                    (0, Ue.openOutOfBurstsModal)();
                                    return
                                }
                                u ? e.handleShowVerificationGate() : i || (e.isMe() ? (0,
                                    be.WO)(v, r.id, o, void 0, O) : (0, be.rU)(v, r.id, o, O, {
                                    burst: a
                                }))
                            }
                            if (a && e.isMe() && h) {
                                (0, S.E_)(null);
                                (0, E.EW)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                            }
                        }
                    };
                    e.handleEnter = function(t) {
                        var n = e.props,
                            r = n.emoji,
                            o = n.message,
                            i = n.type,
                            a = n.reduceMotion,
                            u = n.animateEmoji,
                            l = i === Me.O.BURST;
                        l && !e.isReactionEventActive && !a && u && (0, be.T6)({
                            channelId: o.getChannelId(),
                            messageId: o.id,
                            emoji: r,
                            key: Ne.I.HOVER
                        });
                        e.isReactionEventActive = !0;
                        e.isKeyboardNavigation = "focus" === t.type;
                        e.timeout.start(l ? 750 : 500, e.showTooltip, !1)
                    };
                    e.handleEnterTooltip = function() {
                        e.isReactionEventActive = !0;
                        e.handleShowTooltip()
                    };
                    e.handleShowTooltip = function() {
                        e.hideTimeout.stop();
                        if (e.isReactionEventActive) {
                            e.updateTooltipText();
                            Te.Z.addChangeListener(e.updateTooltipText)
                        }
                    };
                    e.showTooltip = function() {
                        e.handleShowTooltip();
                        e.isReactionEventActive && e.trackReactionTooltipViewed();
                        e.hasShownTooltip = !0
                    };
                    e.handleLeave = function() {
                        e.isReactionEventActive = !1;
                        e.isKeyboardNavigation = !1;
                        e.timeout.stop();
                        Te.Z.removeChangeListener(e.updateTooltipText);
                        e.hideTimeout.start(200, e.hideTooltip, !1)
                    };
                    e.hideTooltip = function() {
                        e.setState({
                            shouldShowTooltip: !1
                        });
                        e.hasShownTooltip && Pe.default.track(le.rMx.CLOSE_POPOUT, {
                            nonce: e.nonce
                        })
                    };
                    e.isMe = function() {
                        var t = e.props;
                        return Rt(t.me, t.me_burst, t.type)
                    };
                    e.updateTooltipText = function() {
                        var t = e.props,
                            n = t.message,
                            r = t.emoji,
                            o = t.type,
                            i = Ge(n, r, o),
                            a = e.isKeyboardNavigation ? i : Ge(n, r, o, le.dG4);
                        e.setState({
                            tooltipText: a,
                            tooltipTextAria: i,
                            shouldShowTooltip: null != a && "" !== a
                        })
                    };
                    e.renderLurkerModeUpsellPopout = function(t) {
                        var n = t.closePopout,
                            o = e.props,
                            i = o.message,
                            a = o.isLurking,
                            u = ge.Z.getChannel(i.getChannelId()),
                            l = Ee.Z.getGuild(null == u ? void 0 : u.getGuildId());
                        return a && null != l ? (0, r.jsx)(H.Z, {
                            ctaRef: e.ctaRef,
                            type: H.s.REACTIONS,
                            guild: l,
                            closePopout: n
                        }) : (0, r.jsx)(r.Fragment, {})
                    };
                    e.renderEmojiDetails = function() {
                        var t = e.props.emoji;
                        return null != t.id && (0, r.jsx)(Ct, {
                            emojiId: t.id,
                            refreshPositionKey: e.refreshTooltipPositionKey,
                            onClose: e.handleLeave,
                            nonce: e.nonce
                        })
                    };
                    e.renderTooltip = function() {
                        var t = e.props,
                            n = t.emoji,
                            o = t.message,
                            i = t.type,
                            u = t.remainingBurstCurrency,
                            l = t.me_burst,
                            c = t.colors,
                            s = t.isBurstReaction,
                            f = void 0 !== s && s,
                            d = t.burstReactionsEnabled,
                            p = void 0 !== d && d,
                            b = e.state.tooltipText,
                            v = function(t) {
                                var r = ge.Z.getChannel(o.getChannelId());
                                if (null != r) {
                                    e.handleLeave();
                                    var i = f ? Me.O.BURST : Me.O.NORMAL;
                                    jt(0, o, {
                                        emoji: n,
                                        reactionType: i
                                    })
                                }
                            },
                            O = "string" == typeof b ? "" === b.trim() : null == b,
                            g = function() {
                                return O || null == b ? null : (0, r.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    className: lt().reactionTooltipText,
                                    "aria-label": b,
                                    children: b
                                })
                            };
                        if (i === Me.O.BURST) {
                            var E = Re.default.getCurrentUser(),
                                T = (0, ve.Zh)();
                            return (0, r.jsxs)(h.V, {
                                className: lt().reactionTooltip,
                                onMouseEnter: e.handleEnterTooltip,
                                onMouseLeave: e.handleLeave,
                                children: [(0, r.jsxs)(m.Clickable, {
                                    className: lt().burstReactionTooltipInner,
                                    onClick: v,
                                    children: [(0, r.jsxs)("div", {
                                        className: a()(lt().burstReactionTooltipMessage, dt({}, lt().burstReactionTooltipSpacer, p)),
                                        children: [(0, r.jsx)(y.Z, {
                                            className: lt().reactionTooltipEmoji,
                                            emojiId: n.id,
                                            emojiName: n.name,
                                            animated: n.animated,
                                            size: e.props.emojiSize
                                        }), g()]
                                    }), p && (0, r.jsxs)("div", {
                                        className: lt().burstReactionTooltipPrompt,
                                        children: [(0, we.I5)(E) && (0, r.jsx)(Ae.Z, {
                                            className: lt().burstReactionTooltipNitroIcon,
                                            color: _e.JX.PREMIUM_TIER_2
                                        }), null != u && u > 0 ? (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                className: lt().reactionTooltipText,
                                                "aria-label": "super reaction tooltip cta",
                                                children: l ? ce.Z.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED : ce.Z.Messages.SUPER_REACTION_TOOLTIP_CTA
                                            }), (0, r.jsx)(Ie.Z, {
                                                className: lt().burstAnimatedCounter,
                                                value: null != u ? u : 0,
                                                animationSpeed: 600,
                                                animationColor: null == c ? void 0 : c.accentColor,
                                                formatString: function(e) {
                                                    return ce.Z.Messages.BURST_REACTION_TOOLTIP_CTA_LEFT.format({
                                                        n: e.toString()
                                                    })
                                                }
                                            })]
                                        }) : (0, r.jsx)(r.Fragment, {
                                            children: (0, we.I5)(E) ? (0, r.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                "aria-label": "super reaction tooltip replenishment message",
                                                children: T
                                            }) : (0, r.jsx)(r.Fragment, {
                                                children: !e.isKeyboardNavigation && (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)(m.Text, {
                                                        variant: "text-sm/normal",
                                                        "aria-label": "super reaction tooltip upsell",
                                                        children: ce.Z.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                    }), (0, r.jsx)(me.Z, {
                                                        subscriptionTier: ue.Si.TIER_2,
                                                        buttonText: ce.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                        className: lt().burstReactionTooltipUpsellCta,
                                                        onClick: function(e) {
                                                            return e.stopPropagation()
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), e.renderEmojiDetails()]
                            })
                        }
                        return (0, r.jsxs)(h.V, {
                            className: lt().reactionTooltip,
                            onMouseEnter: e.handleEnterTooltip,
                            onMouseLeave: e.handleLeave,
                            children: [(0, r.jsx)(m.Clickable, {
                                onClick: v,
                                children: (0, r.jsxs)("div", {
                                    className: lt().reactionTooltipInner,
                                    children: [(0, r.jsx)(y.Z, {
                                        className: lt().reactionTooltipEmoji,
                                        emojiId: n.id,
                                        emojiName: n.name,
                                        animated: n.animated,
                                        size: e.props.emojiSize
                                    }), g()]
                                })
                            }), e.renderEmojiDetails()]
                        })
                    };
                    e.refreshTooltipPositionKey = function() {
                        e.setState({
                            tooltipPositionKey: String(Date.now())
                        })
                    };
                    e.handleShowVerificationGate = function() {
                        var t = e.props,
                            n = t.message;
                        if (!t.isPendingMember) return null;
                        var r = ge.Z.getChannel(n.getChannelId()),
                            o = Ee.Z.getGuild(null == r ? void 0 : r.getGuildId());
                        null != o && (0, G.hk)(o.id)
                    };
                    e.handleSetReactionRef = function(t) {
                        e.setState({
                            reactionRef: t
                        })
                    };
                    e.handleDismissCoachmark = function() {
                        (0, S.E_)(null);
                        (0, E.EW)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    };
                    e.trackReactionTooltipViewed = function() {
                        var t = e.props,
                            n = t.emoji,
                            r = t.message,
                            o = t.type,
                            i = Re.default.getCurrentUser(),
                            a = ge.Z.getChannel(r.getChannelId()),
                            u = o === Me.O.BURST,
                            l = (0, we.I5)(i),
                            c = u ? ue.cd.EMOJI_IN_BURST_REACTION_HOVER : ue.cd.EMOJI_IN_REACTION_HOVER;
                        !u || e.userCanBurstReact() || l || (c = ue.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL);
                        g.ZP.trackWithMetadata(le.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                            type: c,
                            expression_id: n.id,
                            expression_name: n.name,
                            is_animated: n.animated,
                            is_custom: null != n.id,
                            nonce: e.nonce
                        });
                        !u || null == a || l || e.userCanBurstReact() || Pe.default.track(le.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: ue.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: null != (null == a ? void 0 : a.getGuildId()) ? le.ZY5.GUILD_CHANNEL : le.ZY5.DM_CHANNEL,
                                section: (0,
                                    ve.s4)(a),
                                object: le.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    };
                    return e
                }
                var i = n.prototype;
                i.componentWillAppear = function(e) {
                    this.animateIn(e)
                };
                i.componentWillEnter = function(e) {
                    this.animateIn(e)
                };
                i.componentWillUnmount = function() {
                    this.hideTooltip()
                };
                i.animateIn = function(e) {
                    if (Se.Z.isFocused()) {
                        this.scale.setValue(0);
                        this.opacity.setValue(0);
                        c.Z.parallel([c.Z.timing(this.scale, {
                            toValue: 1,
                            duration: 300,
                            easing: c.Z.Easing.inOut(c.Z.Easing.back())
                        }), c.Z.timing(this.opacity, {
                            toValue: 1,
                            duration: 300
                        })]).start(e)
                    } else {
                        this.scale.setValue(1);
                        this.opacity.setValue(1);
                        e()
                    }
                };
                i.render = function() {
                    var e, t, n = this,
                        o = this.props,
                        i = o.count,
                        u = o.burst_count,
                        l = o.colors,
                        f = o.isBurstReaction,
                        d = o.hideCount,
                        p = o.emoji,
                        h = o.readOnly,
                        b = o.isLurking,
                        v = o.isGuest,
                        O = o.isPendingMember,
                        g = o.className,
                        E = o.useChatFontScaling,
                        T = o.message,
                        j = o.hideEmoji,
                        R = o.shouldShowFreeUserSentCoachmark,
                        S = o.onRenderFreeUserSentPopout,
                        I = o.hasBurstShake,
                        _ = o.hasBurstGlow,
                        C = o.animationStartPosition,
                        A = o.hasBurstSendAnimation,
                        P = this.state,
                        w = P.shouldShowTooltip,
                        N = P.tooltipTextAria,
                        x = P.reactionRef,
                        M = P.tooltipPositionKey,
                        Z = E ? at() : ot(),
                        L = {
                            transform: [{
                                scale: this.scale
                            }],
                            opacity: this.opacity
                        },
                        U = f ? u : i;
                    if (f && null != l) {
                        var D, B = l.accentColor,
                            V = l.backgroundColor,
                            G = l.opacity,
                            F = null !== (D = (0, s.wK)(null != V ? V : "", G)) && void 0 !== D ? D : "";
                        this.isMe() && (L.borderColor = V);
                        L.background = F;
                        e = B;
                        t = B
                    }
                    var W = null == x ? void 0 : x.getBoundingClientRect(),
                        H = null != C && null != W && A,
                        z = null == C || !A;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(m.Popout, {
                            shouldShow: w,
                            "aria-label": null != N && N,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: M,
                            children: function() {
                                var o;
                                return (0, r.jsx)("div", {
                                    onMouseEnter: n.handleEnter,
                                    onMouseLeave: n.handleLeave,
                                    ref: n.handleSetReactionRef,
                                    children: (0, r.jsx)(c.Z.div, {
                                        className: a()(Z.reaction, g, (o = {}, dt(o, Z.reactionMe, n.isMe()), dt(o, Z.reactionReadOnly, h && !b && !O && !v), dt(o, Z.shakeReaction, j && I && null == C), o)),
                                        style: L,
                                        children: (0, r.jsx)(m.Popout, {
                                            renderPopout: n.renderLurkerModeUpsellPopout,
                                            position: "top",
                                            children: function(o) {
                                                return (0, r.jsxs)(m.Clickable, mt(ht({}, o), {
                                                    className: Z.reactionInner,
                                                    onClick: n.handleClick,
                                                    "aria-disabled": h,
                                                    "aria-label": (0, ve.iD)(n.isMe(), U, p, f),
                                                    "aria-pressed": n.isMe(),
                                                    children: [(0, r.jsx)("div", {
                                                        className: a()(dt({}, Z.burstGlow, _ && f)),
                                                        style: {
                                                            boxShadow: "0 0 16px ".concat(t)
                                                        }
                                                    }), (0, r.jsxs)("div", {
                                                        children: [f ? (0, r.jsxs)(r.Fragment, {
                                                            children: [H && (0, r.jsx)(k, {
                                                                messageId: T.id,
                                                                emoji: p,
                                                                startPosition: C,
                                                                targetPosition: W
                                                            }), z && (0, r.jsx)(et, {
                                                                count: u,
                                                                emoji: p,
                                                                channelId: T.getChannelId(),
                                                                messageId: T.id,
                                                                useChatFontScaling: E,
                                                                color: t
                                                            })]
                                                        }) : null, (0, r.jsx)(y.Z, {
                                                            className: a()(dt({}, Z.hideEmoji, j)),
                                                            emojiId: p.id,
                                                            emojiName: p.name,
                                                            size: "reaction",
                                                            animated: p.animated
                                                        })]
                                                    }), d ? null : (0, r.jsx)(Ie.Z, {
                                                        className: Z.reactionCount,
                                                        value: U,
                                                        color: e,
                                                        digitWidth: Tt
                                                    }), (0, r.jsx)(re, {
                                                        count: U,
                                                        reactionRef: x
                                                    })]
                                                }))
                                            }
                                        })
                                    })
                                })
                            }
                        }), f && R && null != S && (0, r.jsx)(m.Popout, {
                            renderPopout: S,
                            shouldShow: !0,
                            closeOnScroll: !0,
                            onRequestClose: this.handleDismissCoachmark,
                            children: function(e) {
                                return (0, r.jsx)("div", ht({
                                    className: Z.hidden
                                }, e))
                            }
                        })]
                    })
                };
                return n
            }(o.PureComponent);
            St.defaultProps = {
                emojiSize: "jumbo"
            };
            var It = o.memo((function(e) {
                    var t = e.type,
                        n = e.burst_colors,
                        o = e.message,
                        i = e.emoji,
                        a = t === Me.O.BURST,
                        u = (0, v.Qd)(),
                        l = u.enabled,
                        c = u.hasBurstShake,
                        s = u.hasBurstGlow,
                        p = u.hasSendAnimation,
                        h = (0, Le.Z)(a && null != n ? n : []),
                        m = (0, f.e7)([Ne.Z], (function() {
                            return void 0 !== Ne.Z.getEffectForEmojiId(o.getChannelId(), o.id, i)
                        })),
                        y = (0, f.e7)([O.Z], (function() {
                            return O.Z.useReducedMotion
                        })),
                        b = Oe.Yk.useSetting(),
                        g = (0, E.un)(d.z$.BURST_REACTIONS_REMOVE_MODAL),
                        T = vt((0, f.Wu)([xe.Z], (function() {
                            return [xe.Z.remainingBurstCurrency, xe.Z.emojiReactionToTargetForCoachmark]
                        })), 2),
                        j = T[0],
                        R = T[1],
                        I = Re.default.getCurrentUser(),
                        _ = (0, we.I5)(I),
                        C = (0, E.un)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT),
                        A = l && !(0, we.EO)(I) && j > 0 && !C && null != R && i.id === R.id && i.name === R.name;
                    if (A && _) {
                        (0, S.E_)(null);
                        (0, E.EW)(d.z$.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    }
                    var P = (0, f.e7)([Ne.Z], (function() {
                            return Ne.Z.getReactionPickerAnimation(o.id, i.name, i.id)
                        })),
                        w = a && (m || null != P && p);
                    return (0, r.jsx)(St, mt(ht({}, e), {
                        colors: h,
                        isBurstReaction: a,
                        hideEmoji: w,
                        remainingBurstCurrency: j,
                        userHasPremium: _,
                        burstReactionsEnabled: l,
                        reduceMotion: y,
                        animateEmoji: b,
                        hasDismissedRemoveModal: g,
                        shouldShowFreeUserSentCoachmark: A,
                        onRenderFreeUserSentPopout: function() {
                            return (0, r.jsx)(he, {})
                        },
                        hasBurstShake: c,
                        hasBurstGlow: s,
                        animationStartPosition: P,
                        hasBurstSendAnimation: p
                    }))
                })),
                _t = function(e) {
                    var t, n = e.emojiId,
                        o = e.expressionSourceGuild,
                        i = e.hasJoinedExpressionSourceGuild,
                        a = e.onClose,
                        u = e.packCollectionData,
                        l = e.popoutData,
                        c = e.currentGuildId,
                        s = e.nonce;
                    (0, V.u)({
                        emojiId: n,
                        currentGuildId: c,
                        popoutData: l,
                        emojiSourceGuildId: null == o ? void 0 : o.id,
                        nonce: s
                    });
                    var f = null !== (t = null == o ? void 0 : o.isDiscoverable()) && void 0 !== t && t,
                        d = u.collectEnabled,
                        p = null !== o && (f || d);
                    return (0, r.jsx)(r.Fragment, {
                        children: p ? null == o ? null : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: nt().reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, r.jsx)(ke.Oe, {
                                    expressionSourceGuild: o,
                                    hasJoinedExpressionSourceGuild: i,
                                    isDisplayingJoinGuildButtonInPopout: l.type === Ze.$.JOIN_GUILD
                                })
                            }), (0, r.jsx)(ke.n_, {
                                emojiId: n,
                                expressionSourceGuild: o,
                                hasJoinedEmojiSourceGuild: i,
                                onClose: a,
                                popoutData: l,
                                packCollectionData: u,
                                isDisplayingButtonInTopSection: !1,
                                nonce: s
                            })]
                        }) : (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            "aria-label": l.type,
                            children: l.emojiDescription
                        })
                    })
                },
                Ct = function(e) {
                    var t, n = e.emojiId,
                        i = e.refreshPositionKey,
                        u = e.onClose,
                        l = e.nonce,
                        c = (0, f.cj)([D.Z, Ee.Z], (function() {
                            var e = D.Z.getCustomEmojiById(n);
                            return {
                                joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === B.B.GUILD ? Ee.Z.getGuild(null == e ? void 0 : e.guildId) : void 0
                            }
                        })).joinedEmojiSourceGuild,
                        s = vt(o.useState(void 0), 2),
                        d = s[0],
                        p = s[1],
                        h = vt(o.useState(!1), 2),
                        y = h[0],
                        b = h[1],
                        v = vt(o.useState(!1), 2),
                        O = v[0],
                        g = v[1],
                        E = null != c,
                        T = (0, F.Hb)({
                            expressionSourceGuild: d
                        }),
                        j = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t,
                        R = je.Z.getGuildId(),
                        S = null != R && (R === (null == d ? void 0 : d.id) || R === (null == c ? void 0 : c.id)),
                        I = (0, Ze.a)({
                            isPremium: T.isPremium,
                            hasJoinedEmojiSourceGuild: E,
                            isDiscoverable: j,
                            packCollectionData: T,
                            emojiComesFromCurrentGuild: S,
                            isUnusableRoleSubscriptionEmoji: !1,
                            userIsRoleSubscriber: !1,
                            isRoleSubscriptionEmoji: !1,
                            shouldHideRoleSubscriptionCTA: !1
                        });
                    o.useEffect((function() {
                        if (y) {
                            var e, t, r = (t = (e = function() {
                                return Et(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            i();
                                            g(!0);
                                            return [4, W.Z.getGuildFromEmojiId(n)];
                                        case 1:
                                            p.apply(void 0, [e.sent()]);
                                            g(!1);
                                            i();
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var i = e.apply(t, n);

                                    function a(e) {
                                        st(i, r, o, a, u, "next", e)
                                    }

                                    function u(e) {
                                        st(i, r, o, a, u, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            }), function() {
                                return t.apply(this, arguments)
                            });
                            r()
                        }
                    }), [n, y]);
                    if (!T.viewAndUseEnabled || E) return null;
                    var _, C = function() {
                            b(!y)
                        },
                        A = y && void 0 !== d;
                    return (0, r.jsxs)("div", {
                        children: [A ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: nt().reactionEmojiDetailsDivider
                            }), null != I.emojiDescription && I.type !== Ze.$.UNAVAILABLE && (0, r.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                "aria-label": I.type,
                                children: I.emojiDescription
                            })]
                        }) : (_ = ce.Z.Messages.INVENTORY_EMOJI_DETAILS_V2, (0, r.jsxs)(m.Clickable, {
                            onClick: C,
                            className: nt().reactionEmojiDetailsClickable,
                            children: [(0, r.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                "aria-label": _,
                                children: _
                            }), (0, r.jsx)(Ce.Z, {
                                width: 16,
                                height: 16,
                                className: a()(nt().reactionEmojiDetailsArrow, dt({}, nt().reactionEmojiDetailsArrowCollapsed, !y))
                            })]
                        })), O ? (0, r.jsx)(De.SE, {
                            className: nt().emojiDetailsLoader
                        }) : A && (0, r.jsx)(_t, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: E,
                            onClose: u,
                            popoutData: I,
                            packCollectionData: T,
                            currentGuildId: R,
                            nonce: l
                        })]
                    })
                }
        },
        436160: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => b,
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(211248),
                l = n.n(u),
                c = n(744564),
                s = n(596310),
                f = n(403063),
                d = n(690934),
                p = n(940132),
                h = n.n(p);

            function m(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            m(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            m(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var b, v = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            ! function(e) {
                e[e.NORMAL = 16] = "NORMAL";
                e[e.LARGE = 32] = "LARGE"
            }(b || (b = {}));
            var O, g = (O = y((function(e) {
                var t, n, r, o;
                return v(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            t = e.effect;
                            r = (0, f.Td)(t.channelId, null !== (n = t.messageId) && void 0 !== n ? n : "", t.emoji.name);
                            return [4, (0,
                                d.aB)("".concat(t.channelId, ":").concat(t.messageId, ":").concat(t.emoji.name), t.url, r, t.color)];
                        case 1:
                            (o = i.sent()).assets[0].p = t.url;
                            return [2, o]
                    }
                }))
            })), function(e) {
                return O.apply(this, arguments)
            });

            function E(e) {
                var t = e.className,
                    n = e.effect,
                    i = e.onComplete,
                    u = e.emojiSize,
                    f = void 0 === u ? b.NORMAL : u,
                    p = o.useRef(null),
                    m = f * d.Vz,
                    O = "translateY(".concat((m + f) / 2, "px)");
                o.useEffect((function() {
                    var e;
                    if (null != n) {
                        (t = y((function() {
                            var t;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return null == p.current ? [3, 2] : [4, g({
                                            effect: n
                                        })];
                                    case 1:
                                        t = r.sent();
                                        (e = l().loadAnimation({
                                            container: p.current,
                                            renderer: "svg",
                                            loop: !1,
                                            autoplay: !0,
                                            animationData: t
                                        })).addEventListener("complete", (function() {
                                            null == i || i();
                                            e.destroy()
                                        }));
                                        null != n.channelId && null != n.messageId && null != n.emoji && n.key === s.I.HOVER && c.Z.dispatch({
                                            type: "BURST_REACTION_ANIMATION_ADD",
                                            channelId: n.channelId,
                                            messageId: n.messageId,
                                            emoji: n.emoji,
                                            animation: e
                                        });
                                        r.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        })), function() {
                            return t.apply(this, arguments)
                        })();
                        var t;
                        return function() {
                            null != e && e.destroy()
                        }
                    }
                }), [i, n, f]);
                return (0, r.jsx)("div", {
                    className: h().effectsWrapper,
                    children: (0, r.jsx)("div", {
                        className: a()(h().effect, t),
                        style: {
                            transform: O,
                            height: m,
                            width: m
                        },
                        ref: p
                    })
                })
            }
        },
        690934: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vz: () => s,
                aB: () => f,
                Zn: () => d
            });
            var r = n(496486),
                o = n(468811),
                i = n.n(o),
                a = n(874049),
                u = n(285629),
                l = n(362660),
                c = n(403063),
                s = 7.5,
                f = (0, r.memoize)((function(e, t, n, r) {
                    return new Promise((function(e) {
                        var o = new Image;
                        o.src = t;
                        o.crossOrigin = "Anonymous";
                        o.onload = function() {
                            var t = 32 * (0, a.x_)(),
                                i = JSON.stringify(n);
                            null != r && (i = (0, c.s4)(i, (0, l.oo)(r)));
                            if (o.width === t && o.height === t || 0 === o.width && 0 === o.height) e(JSON.parse(i));
                            else {
                                var u = 128 / o.width * o.height;
                                i = (i = i.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(u))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(u / 2));
                                e(JSON.parse(i))
                            }
                        }
                    }))
                }));

            function d(e, t, n, r) {
                var o = null != r ? r : {},
                    a = o.emojiSize,
                    l = o.key,
                    c = o.messageId,
                    s = null != a ? 2 * a : void 0,
                    f = (0, u._r)(e, s);
                return {
                    channelId: n,
                    messageId: c,
                    emoji: e,
                    animationId: i()(),
                    url: f,
                    key: l,
                    color: t
                }
            }
        },
        952273: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => m
            });
            var r = n(785893),
                o = n(667294),
                i = n(304548),
                a = n(736626),
                u = n(668929),
                l = n(61209),
                c = n(841278);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function h(e, t) {
                return o.useCallback((function(n) {
                    var r = l.Z.getChannel(t);
                    null != r && null != e && (0, c.Pv)(n, e, r)
                }), [e, t])
            }

            function m(e, t, n) {
                var l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    c = arguments.length > 4 ? arguments[4] : void 0,
                    s = h(e, t);
                return o.useCallback((function(h) {
                    return function(m, y) {
                        var b = function(e, t) {
                                return (0, o.createElement)(i.NameWithRoleAnchor, d(f({}, null != e ? e : {}), {
                                    key: t,
                                    onContextMenu: s,
                                    name: m,
                                    color: null == h ? void 0 : h.colorString,
                                    roleName: null == h ? void 0 : h.colorRoleName,
                                    "aria-label": c
                                }))
                            },
                            v = function(e) {
                                return function(t) {
                                    l && t.stopPropagation();
                                    e(t)
                                }
                            };
                        return null != e ? (0, r.jsx)(i.Popout, {
                            position: "right",
                            preload: function() {
                                return (0, a.Z)(e.id, e.getAvatarURL(n, 80), {
                                    guildId: n,
                                    channelId: t
                                })
                            },
                            renderPopout: function(o) {
                                return (0, r.jsx)(u.Z, d(f({}, o), {
                                    userId: e.id,
                                    guildId: n,
                                    channelId: t
                                }))
                            },
                            children: function(e) {
                                var t = e.onClick,
                                    n = p(e, ["onClick"]);
                                return b(f({
                                    onClick: v(t)
                                }, n))
                            }
                        }, y) : b(void 0, y)
                    }
                }), [e, t, n, s, l, c])
            }
        },
        38602: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => E,
                openBurstReactionsUpsellModal: () => T
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(396179),
                a = n(717035),
                u = n(442212),
                l = n(203600),
                c = n(2590),
                s = n(473708),
                f = n(422895),
                d = n.n(f),
                p = n(50976),
                h = n.n(p);

            function m(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            m(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            m(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
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
            }

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var g = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function E(e) {
                var t, n, o = e.onClose,
                    f = e.analyticsSource,
                    p = O(e, ["onClose", "analyticsSource"]),
                    m = s.Z.Messages.SUPER_REACTIONS_UPSELL_BODY_LAUNCH.format({
                        onClick: function() {
                            i.Z.open(c.oAB.PREMIUM);
                            o()
                        }
                    }),
                    y = (0, a.N)();
                return (0, r.jsx)(u.Z, v({
                    artURL: h(),
                    artContainerClassName: d().artContainer,
                    modalClassName: d().modalContainer,
                    bodyClassName: d().bodyContainer,
                    type: l.cd.BURST_REACTION_UPSELL,
                    title: s.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: m,
                    glowUp: m,
                    analyticsSource: f,
                    analyticsLocation: {
                        page: c.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: c.qAy.BUTTON_CTA
                    },
                    onClose: o,
                    subscribeButtonText: null != y ? void 0 : s.Z.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (n = null == y || null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : l.Si.TIER_2,
                    backButtonText: s.Z.Messages.NO_THANKS
                }, p))
            }

            function T(e) {
                var t = e.analytics;
                (0, o.openModalLazy)(y((function() {
                    var e, o;
                    return g(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 38602))];
                            case 1:
                                e = i.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, v({
                                        analyticsSource: t
                                    }, e))
                                }]
                        }
                    }))
                })))
            }
        },
        163082: (e, t, n) => {
            "use strict";
            n.d(t, {
                TW: () => x,
                rU: () => B,
                DF: () => ee,
                U0: () => k,
                T6: () => G,
                wX: () => F,
                $E: () => H,
                WO: () => K,
                Vn: () => X,
                q5: () => Q
            });
            var r = n(281110),
                o = n(418705),
                i = n(575945),
                a = n(744564),
                u = n(105783),
                l = n(896490),
                c = n(97011),
                s = n(833589),
                f = n(841150),
                d = n(671293),
                p = n(664625),
                h = n(352980),
                m = n(930948),
                y = n(38004),
                b = n(918041),
                v = n(785893),
                O = (n(667294), n(304548));

            function g(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            g(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            g(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e, t) {
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
            var R = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function S(e) {
                (0, O.openModalLazy)(E((function() {
                    var t, r;
                    return R(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(17864)]).then(n.bind(n, 717864))];
                            case 1:
                                t = o.sent(), r = t.default;
                                return [2, function(t) {
                                    return (0, v.jsx)(r, j(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                T(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        onConfirm: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
            var I = n(2590),
                _ = n(473708);

            function C(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            C(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            C(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
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
            var x, M = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            ! function(e) {
                e.MESSAGE = "Message";
                e.FORUM_TOOLBAR = "Forum Toolbar";
                e.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer"
            }(x || (x = {}));

            function Z(e, t, n) {
                var r = e.status,
                    o = e.body;
                if (429 === r) {
                    setTimeout(t, 1e3 * e.body.retry_after);
                    return !1
                }
                if (403 === r) switch (o && o.code) {
                    case I.evJ.TOO_MANY_REACTIONS:
                        u.Z.show({
                            title: _.Z.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                            body: _.Z.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                            confirmText: _.Z.Messages.OKAY
                        });
                        break;
                    case I.evJ.REACTION_BLOCKED:
                        m.S.dispatch(I.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        })
                } else if (!n.isRetry) {
                    t();
                    return !1
                } return !0
            }

            function L(e, t, n, r, o) {
                var i, u, l;
                a.Z.dispatch({
                    type: e,
                    channelId: t,
                    messageId: n,
                    userId: null !== (i = null == o ? void 0 : o.userId) && void 0 !== i ? i : p.default.getId(),
                    emoji: r,
                    optimistic: !0,
                    burst: null !== (u = null == o ? void 0 : o.burst) && void 0 !== u && u,
                    colors: null !== (l = null == o ? void 0 : o.colors) && void 0 !== l ? l : []
                })
            }

            function U(e) {
                var t = e.channelId,
                    n = e.messageId,
                    r = e.emoji,
                    o = e.userId,
                    i = e.useTypeEndpoint,
                    a = void 0 !== i && i,
                    u = e.type,
                    l = void 0 === u ? f.O.NORMAL : u,
                    c = null != r.id ? "".concat(r.name, ":").concat(r.id) : r.name;
                return null == o ? I.ANM.REACTIONS(t, n, c) : a ? I.ANM.REACTION_WITH_TYPE(t, n, c, o, l) : I.ANM.REACTION(t, n, c, o)
            }

            function k(e) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = A((function(e) {
                    var t, n, o, i, u, l, c;
                    return M(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                t = e.channelId, n = e.messageId, o = e.emoji, i = e.limit, u = e.after, l = e.type;
                                return [4, r.ZP.get({
                                    url: U({
                                        channelId: t,
                                        messageId: n,
                                        emoji: o
                                    }),
                                    query: {
                                        limit: i,
                                        after: u,
                                        type: l
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                c = s.sent();
                                a.Z.dispatch({
                                    type: "MESSAGE_REACTION_ADD_USERS",
                                    channelId: t,
                                    messageId: n,
                                    users: c.body,
                                    emoji: o,
                                    reactionType: l
                                });
                                return [2, c.body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function B(e, t, n) {
                return V.apply(this, arguments)
            }

            function V() {
                V = A((function(e, t, n) {
                    var o, a, l, p, h, m = arguments;
                    return M(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                o = m.length > 3 && void 0 !== m[3] ? m[3] : x.MESSAGE, a = m.length > 4 ? m[4] : void 0;
                                l = null != a && !!a.burst;
                                p = null != a && !!a.isRetry;
                                if (l && !s.Z.hasAvailableBurstCurrency) return [2];
                                if (!p && q(e, t, n, l)) {
                                    u.Z.show({
                                        title: _.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                                        body: _.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                                        confirmText: _.Z.Messages.GOT_IT
                                    });
                                    return [2]
                                }
                                return [4, J(n, l)];
                            case 1:
                                h = y.sent();
                                L("MESSAGE_REACTION_ADD", e, t, n, {
                                    burst: l,
                                    colors: h
                                });
                                return [4, d.Z.unarchiveThreadIfNecessary(e)];
                            case 2:
                                y.sent();
                                r.ZP.put({
                                    url: U({
                                        channelId: e,
                                        messageId: t,
                                        emoji: n,
                                        userId: "@me"
                                    }),
                                    query: {
                                        location: o,
                                        type: l ? f.O.BURST : f.O.NORMAL
                                    },
                                    oldFormErrors: !0
                                }).then((function() {
                                    var r = s.Z.remainingBurstCurrency;
                                    if (l) {
                                        i.uv.announce(_.Z.Messages.BURST_REACTION_ADD_SUCCESS_A11Y.format({
                                            name: n.name,
                                            n: r
                                        }));
                                        b.Z.triggerFullscreenAnimation({
                                            channelId: e,
                                            messageId: t,
                                            emoji: N(w({}, n), {
                                                animated: !1
                                            })
                                        });
                                        r > 0 && (0, c.E_)(w({
                                            animated: !1
                                        }, n))
                                    } else i.uv.announce(_.Z.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                                        name: n.name
                                    }))
                                })).catch((function(r) {
                                    if (Z(r, (function() {
                                            return B(e, t, n, o, {
                                                burst: l,
                                                isRetry: !0
                                            })
                                        }), {
                                            isRetry: p
                                        })) {
                                        L("MESSAGE_REACTION_REMOVE", e, t, n, {
                                            burst: l
                                        });
                                        l ? i.uv.announce(_.Z.Messages.BURST_REACTION_ADD_ERROR_A11Y.format({
                                            name: n.name,
                                            n: s.Z.remainingBurstCurrency
                                        })) : i.uv.announce(_.Z.Messages.REACTION_ADD_ERROR_A11Y.format({
                                            name: n.name
                                        }))
                                    }
                                }));
                                return [2]
                        }
                    }))
                }));
                return V.apply(this, arguments)
            }

            function G(e) {
                var t = e.channelId,
                    n = e.messageId,
                    r = e.emoji,
                    o = e.key;
                a.Z.dispatch({
                    type: "BURST_REACTION_EFFECT_PLAY",
                    channelId: t,
                    messageId: n,
                    emoji: r,
                    key: o
                })
            }

            function F(e, t, n) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = A((function(e, t, n) {
                    var o;
                    return M(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                o = null != n && !!n.isRetry;
                                return [4, d.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                i.sent();
                                r.ZP.delete({
                                    url: I.ANM.REMOVE_REACTIONS(e, t),
                                    oldFormErrors: !0
                                }).catch((function(n) {
                                    Z(n, (function() {
                                        return F(e, t, {
                                            isRetry: !0
                                        })
                                    }), {
                                        isRetry: o
                                    })
                                }));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function H(e, t, n, r) {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = A((function(e, t, n, o) {
                    var i, a;
                    return M(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                i = null != o && !!o.isRetry;
                                return [4, d.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                u.sent();
                                a = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                                r.ZP.delete({
                                    url: I.ANM.REMOVE_EMOJI_REACTIONS(e, t, a),
                                    oldFormErrors: !0
                                }).catch((function(r) {
                                    Z(r, (function() {
                                        return H(e, t, n, {
                                            isRetry: !0
                                        })
                                    }), {
                                        isRetry: i
                                    })
                                }));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function K(e, t, n, r) {
                return Y.apply(this, arguments)
            }

            function Y() {
                Y = A((function(e, t, n, o) {
                    var a, u, l, c, s = arguments;
                    return M(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                a = s.length > 4 && void 0 !== s[4] ? s[4] : x.MESSAGE, u = s.length > 5 ? s[5] : void 0;
                                l = null != u && !!u.burst;
                                c = null != u && !!u.isRetry;
                                L("MESSAGE_REACTION_REMOVE", e, t, n, {
                                    userId: o,
                                    burst: l
                                });
                                return [4, d.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                p.sent();
                                r.ZP.delete({
                                    url: U({
                                        channelId: e,
                                        messageId: t,
                                        emoji: n,
                                        userId: null != o ? o : "@me",
                                        type: l ? f.O.BURST : f.O.NORMAL,
                                        useTypeEndpoint: !0
                                    }),
                                    query: {
                                        location: a,
                                        burst: l
                                    },
                                    oldFormErrors: !0
                                }).then((function() {
                                    (null == u ? void 0 : u.burst) ? i.uv.announce(_.Z.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                                        name: n.name
                                    })): i.uv.announce(_.Z.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                                        name: n.name
                                    }))
                                })).catch((h = A((function(r) {
                                    var s;
                                    return M(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return Z(r, (function() {
                                                    return K(e, t, n, o, a, {
                                                        burst: l,
                                                        isRetry: !0
                                                    })
                                                }), {
                                                    isRetry: c
                                                }) ? [4, J(n, l)] : [3, 2];
                                            case 1:
                                                s = f.sent();
                                                L("MESSAGE_REACTION_ADD", e, t, n, {
                                                    userId: o,
                                                    burst: l,
                                                    colors: s
                                                });
                                                (null == u ? void 0 : u.burst) ? i.uv.announce(_.Z.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                                                    name: n.name
                                                })): i.uv.announce(_.Z.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                                                    name: n.name
                                                }));
                                                f.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                })), function(e) {
                                    return h.apply(this, arguments)
                                }));
                                return [2]
                        }
                        var h
                    }))
                }));
                return Y.apply(this, arguments)
            }

            function J(e, t) {
                return $.apply(this, arguments)
            }

            function $() {
                return ($ = A((function(e, t) {
                    var n;
                    return M(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                n = [];
                                if (!t) return [3, 4];
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, (0, y.B6)(e)];
                            case 2:
                                n = r.sent();
                                return [3, 4];
                            case 3:
                                r.sent();
                                return [3, 4];
                            case 4:
                                return [2, n]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function q(e, t, n, r) {
                var o = h.Z.getMessage(e, t);
                return null != o && o.userHasReactedWithEmoji(n, r)
            }

            function X(e) {
                var t = e.channelId,
                    n = e.messageId,
                    r = e.emoji,
                    i = e.reactionType,
                    a = e.userId,
                    u = e.location,
                    c = e.isMe,
                    s = void 0 === c || c,
                    d = i === f.O.BURST,
                    p = function() {
                        K(t, n, r, a, u, {
                            burst: d
                        })
                    },
                    h = (0, l.un)(o.z$.BURST_REACTIONS_REMOVE_MODAL);
                d && s && !h ? S(p) : p()
            }

            function Q(e, t, n, r) {
                a.Z.dispatch({
                    type: "BURST_GUILD_PREVIEW_SET",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    emoji: N(w({}, r), {
                        animated: !1
                    })
                })
            }

            function ee(e) {
                a.Z.dispatch({
                    type: "BURST_GUILD_PREVIEW_CLEAR",
                    guildId: e
                })
            }
        },
        879116: (e, t, n) => {
            "use strict";
            n.d(t, {
                lE: () => a,
                WE: () => l
            });
            var r = n(102921),
                o = n(379364),
                i = n(473708),
                a = function(e, t) {
                    if (null == e || e < 0) return "0";
                    var n = function(e) {
                        return r.Z.compare("992549565104128000", e) > -1
                    }(t);
                    return (null == t || n) && e >= o.vw ? "50+" : e >= o.M3 ? "100k+" : "".concat(e)
                },
                u = function(e, t, n) {
                    var r = a(e, n);
                    return "0" === r ? i.Z.Messages.SEE_THREAD : t.format({
                        count: r
                    })
                },
                l = function(e, t) {
                    return u(e, i.Z.Messages.THREAD_MESSAGE_COUNT, t)
                }
        },
        558095: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                o = n(744564),
                i = n(944522),
                a = n(841150),
                u = n(163082),
                l = n(722406),
                c = n(61209),
                s = n(473903);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var b = {},
                v = function() {
                    function e() {
                        f(this, e);
                        this.fetched = !1;
                        this.users = {}
                    }
                    e.ensure = function(t, n, r) {
                        var o, i, a = "".concat(t, ":").concat(n.name, ":").concat(null !== (o = n.id) && void 0 !== o ? o : "", ":").concat(r);
                        return b[a] = null !== (i = b[a]) && void 0 !== i ? i : new e
                    };
                    return e
                }();

            function O(e) {
                var t = e.type,
                    n = e.messageId,
                    r = e.userId,
                    o = e.emoji,
                    i = e.burst ? a.O.BURST : a.O.NORMAL,
                    u = v.ensure(n, o, i);
                if ("MESSAGE_REACTION_ADD" === t) {
                    var l = s.default.getUser(r);
                    null != l && (u.users[r] = l)
                } else delete u.users[r]
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getReactions = function(e, t, n, r, o) {
                    var a = v.ensure(t, n, o);
                    if (!a.fetched) {
                        var l = c.Z.getChannel(e),
                            s = null != l ? l.getGuildId() : null;
                        if (null != s && i.Z.isLurking(s)) return;
                        u.U0({
                            channelId: e,
                            messageId: t,
                            emoji: n,
                            limit: r,
                            type: o
                        });
                        a.fetched = !0
                    }
                    return a.users
                };
                return n
            }(r.ZP.Store);
            g.displayName = "MessageReactionsStore";
            const E = new g(o.Z, {
                CONNECTION_OPEN: function() {
                    b = {}
                },
                MESSAGE_REACTION_ADD: O,
                MESSAGE_REACTION_REMOVE: O,
                MESSAGE_REACTION_ADD_USERS: function(e) {
                    var t = e.messageId,
                        n = e.users,
                        r = e.emoji,
                        o = e.reactionType,
                        i = v.ensure(t, r, o);
                    n.forEach((function(e) {
                        return i.users[e.id] = new l.Z(e)
                    }))
                }
            })
        },
        579722: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => O,
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(496486),
                a = n.n(i),
                u = n(853158),
                l = n(901654);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
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

            function p(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var m, y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }! function(e) {
                e[e.ABOVE = 0] = "ABOVE";
                e[e.VISIBLE = 1] = "VISIBLE";
                e[e.BELOW = 2] = "BELOW"
            }(m || (m = {}));

            function v(e, t) {
                return {
                    toValue: e,
                    duration: null != t ? t : 300,
                    easing: u.Z.Easing.inOut(u.Z.Easing.back())
                }
            }

            function O(e, t, n) {
                if (null != t) {
                    var r = Math.ceil(Math.log10(e + 1));
                    return null != n && n > 0 ? Math.min(r, n) * t : r * t
                }
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = b(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).animateNext = function() {
                        var e = r.state,
                            t = e.currValue,
                            n = e.nextValue;
                        null != n ? r.setState({
                            prevValue: l.Z.isFocused() ? t : null,
                            currValue: n,
                            nextValue: null
                        }) : r.setState({
                            prevValue: null
                        })
                    };
                    r.state = {
                        prevValue: null,
                        currValue: e.value,
                        nextValue: null
                    };
                    r.prevAnimate = new u.Z.Value(m.ABOVE);
                    r.currAnimate = new u.Z.Value(m.VISIBLE);
                    return r
                }
                var o = n.prototype;
                o.componentDidUpdate = function(e, t) {
                    var n = this.state,
                        r = n.prevValue,
                        o = n.currValue;
                    r !== t.prevValue && null != r && this.animateBetween(r, o)
                };
                o.animateBetween = function(e, t) {
                    var n, r = this.props,
                        o = r.forcePosition,
                        i = r.animationSpeed;
                    this.prevAnimate.setValue(m.VISIBLE);
                    if (null != o) {
                        if (o === m.ABOVE) {
                            this.currAnimate.setValue(m.ABOVE);
                            n = m.BELOW
                        } else if (o === m.BELOW) {
                            this.currAnimate.setValue(m.BELOW);
                            n = m.ABOVE
                        }
                    } else if (e > t) {
                        this.currAnimate.setValue(m.ABOVE);
                        n = m.BELOW
                    } else {
                        this.currAnimate.setValue(m.BELOW);
                        n = m.ABOVE
                    }
                    u.Z.parallel([u.Z.timing(this.prevAnimate, v(n, i)), u.Z.timing(this.currAnimate, v(m.VISIBLE, i))]).start(this.animateNext)
                };
                o.getAnimatedStyle = function(e) {
                    var t = this.props.animationColor;
                    return f({
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: ["-100%", "0%", "100%"]
                            })
                        }],
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }, null != t && {
                        color: t
                    })
                };
                o.getMinWidth = function(e) {
                    var t = this.props;
                    return O(e, t.digitWidth, t.padStartLength)
                };
                o.padValue = function(e) {
                    var t = this.props.padStartLength;
                    return null != t ? String(e).padStart(t, "0") : e
                };
                o.render = function() {
                    var e = this.state,
                        t = e.prevValue,
                        n = e.currValue,
                        o = this.props,
                        i = o.color,
                        l = o.formatString,
                        c = a().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
                    if (null == t) return (0, r.jsx)("div", d(f({}, c), {
                        style: {
                            color: i,
                            minWidth: this.getMinWidth(n)
                        },
                        children: null != l ? l(this.padValue(n)) : this.padValue(n)
                    }));
                    var s = Math.max(t, n);
                    return (0, r.jsxs)("div", d(f({}, c), {
                        style: {
                            color: i,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [(0, r.jsx)("div", {
                            style: {
                                visibility: "hidden",
                                minWidth: this.getMinWidth(s)
                            },
                            children: this.padValue(s)
                        }), (0, r.jsx)(u.Z.div, {
                            style: f({
                                color: i
                            }, this.getAnimatedStyle(this.prevAnimate)),
                            children: null != l ? l(this.padValue(t)) : this.padValue(t)
                        }), (0, r.jsx)(u.Z.div, {
                            style: f({
                                color: i
                            }, this.getAnimatedStyle(this.currAnimate)),
                            children: null != l ? l(this.padValue(n)) : this.padValue(n)
                        })]
                    }))
                };
                n.getDerivedStateFromProps = function(e, t) {
                    var n = t.prevValue,
                        r = t.currValue,
                        o = t.nextValue;
                    return null == n && r !== e.value ? {
                        prevValue: l.Z.isFocused() ? r : null,
                        currValue: e.value
                    } : null != o && o !== e.value ? {
                        nextValue: e.value
                    } : null
                };
                return n
            }(o.PureComponent);
            g.Positions = m
        },
        841278: (e, t, n) => {
            "use strict";
            n.d(t, {
                Pv: () => f,
                _j: () => d,
                n8: () => p,
                xS: () => h
            });
            var r = n(785893),
                o = (n(667294), n(971402));

            function i(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e, t) {
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
            var s = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function f(e, t, i) {
                i.isGroupDM() ? (0, o.jW)(e, a((function() {
                    var e, o;
                    return s(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(89975), n.e(27499), n.e(79913), n.e(19493), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(54602), n.e(61953), n.e(6565), n.e(20419), n.e(84441), n.e(71575), n.e(30027), n.e(67367), n.e(75700), n.e(49244), n.e(24417), n.e(95839), n.e(55581)]).then(n.bind(n, 597539))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, c(l({}, e), {
                                        user: t,
                                        channel: i
                                    }))
                                }]
                        }
                    }))
                }))) : i.isDM() ? (0, o.jW)(e, a((function() {
                    var e, o;
                    return s(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(89975), n.e(27499), n.e(79913), n.e(19493), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(54602), n.e(61953), n.e(6565), n.e(20419), n.e(84441), n.e(71575), n.e(30027), n.e(67367), n.e(98847), n.e(75700), n.e(49244), n.e(52171), n.e(77579), n.e(24417), n.e(95839), n.e(58969), n.e(8440)]).then(n.bind(n, 550865))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, c(l({}, e), {
                                        user: t,
                                        channel: i,
                                        showMute: !1,
                                        targetIsUser: !0
                                    }))
                                }]
                        }
                    }))
                }))) : null != i.guild_id ? (0, o.jW)(e, a((function() {
                    var e, o;
                    return s(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(89975), n.e(27499), n.e(79913), n.e(19493), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(54602), n.e(61953), n.e(6565), n.e(20419), n.e(3790), n.e(84441), n.e(71575), n.e(30027), n.e(67367), n.e(98847), n.e(75700), n.e(49244), n.e(52171), n.e(77579), n.e(24417), n.e(95839), n.e(7427), n.e(83966)]).then(n.bind(n, 914136))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, c(l({}, e), {
                                        user: t,
                                        channel: i,
                                        guildId: i.guild_id
                                    }))
                                }]
                        }
                    }))
                }))) : (0, o.jW)(e, a((function() {
                    var e, o;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(89975), n.e(27499), n.e(79913), n.e(19493), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(54602), n.e(61953), n.e(6565), n.e(20419), n.e(84441), n.e(71575), n.e(30027), n.e(67367), n.e(75700), n.e(49244), n.e(24417), n.e(95839), n.e(38212)]).then(n.bind(n, 810848))];
                            case 1:
                                e = i.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, c(l({}, e), {
                                        user: t
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function d(e, t) {
                var i = t.user,
                    u = t.channel,
                    f = t.moderationAlertId,
                    d = t.guildId,
                    p = t.analyticsLocations,
                    h = t.onCloseContextMenu;
                if ((null == u ? void 0 : u.isGroupDM()) || (null == u ? void 0 : u.isDM())) throw new Error("Cannot moderate user in DM or group DM");
                var m = null != d ? d : null == u ? void 0 : u.getGuildId();
                null != m && (0, o.jW)(e, a((function() {
                    var e, t;
                    return s(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(37897), n.e(89975), n.e(27499), n.e(79913), n.e(19493), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(87440), n.e(61953), n.e(3790), n.e(84441), n.e(30027), n.e(24417), n.e(92822), n.e(16561)]).then(n.bind(n, 190022))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, c(l({}, e), {
                                        user: i,
                                        channelId: null == u ? void 0 : u.id,
                                        guildId: m,
                                        moderationAlertId: f,
                                        analyticsLocations: p,
                                        onCloseContextMenu: h
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function p(e, t) {
                var i = t.user,
                    u = t.guildId,
                    f = t.analyticsLocations,
                    d = t.onCloseContextMenu;
                (0, o.jW)(e, a((function() {
                    var e, t;
                    return s(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(3790), n.e(88110), n.e(96043), n.e(53686), n.e(72722)]).then(n.bind(n, 632499))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, c(l({}, e), {
                                        user: i,
                                        guildId: u,
                                        analyticsLocations: f,
                                        onCloseContextMenu: d
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function h(e, t, i) {
                null != i && (0, o.jW)(e, a((function() {
                    var e, t;
                    return s(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(3790), n.e(88110), n.e(96043), n.e(53686), n.e(37375)]).then(n.bind(n, 7194))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, c(l({}, e), {
                                        guildId: i
                                    }))
                                }]
                        }
                    }))
                })))
            }
        }
    }
]);
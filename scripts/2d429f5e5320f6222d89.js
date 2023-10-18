(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35650], {
        96972: (e, n, t) => {
            e.exports = t.p + "b36c705f790dad253981f1893085015a.svg"
        },
        540579: (e, n, t) => {
            e.exports = t.p + "36c9a2fb7d0593a581a92373121c2848.svg"
        },
        335650: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => F
            });
            var r = t(785893),
                a = t(667294),
                i = t(294184),
                o = t.n(i),
                s = t(202351),
                l = t(264817),
                u = t(70418),
                c = t(657539),
                d = t(153686),
                f = t(19585),
                h = t(773011),
                m = t(344832),
                g = t(978868),
                p = t(64234),
                v = t(382060),
                x = t(840922),
                y = t(464187),
                S = t(473903),
                b = t(327860),
                C = t(190186),
                I = t(748322),
                j = t(568605),
                w = t(72580),
                L = t(118794),
                N = t(473708),
                Z = t(401539),
                E = t.n(Z),
                M = t(96972),
                A = t.n(M),
                _ = t(540579),
                R = t.n(_);

            function k(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function T(e, n, t, r, a, i, o) {
                try {
                    var s = e[i](o),
                        l = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function P(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function o(e) {
                            T(i, r, a, o, s, "next", e)
                        }

                        function s(e) {
                            T(i, r, a, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function B(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return k(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };

            function H(e) {
                var n = e.channel,
                    t = e.ChannelIcon,
                    a = e.selected,
                    i = e.onClick,
                    o = (0, h.ZP)(n);
                return (0, r.jsxs)(u.Clickable, {
                    className: E().channelRow,
                    onClick: function() {
                        return i(n.id)
                    },
                    children: [a ? (0, r.jsx)(j.Z, {
                        className: E().radioIcon
                    }) : (0, r.jsx)(I.Z, {
                        className: E().radioIcon
                    }), (0, r.jsx)(t, {
                        className: E().icon,
                        width: 16,
                        height: 16
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: o
                    })]
                })
            }

            function O(e) {
                var n = e.guildId,
                    t = e.selectedChannelId,
                    i = e.onSelectChannelId,
                    l = (0, s.cj)([g.Z], (function() {
                        return g.Z.getGuildWithoutChangingCommunityRows(n)
                    })).guildChannels,
                    c = a.useMemo((function() {
                        var e = [];
                        l.forEachChannel((function(n) {
                            ((0, v.r8)(n.type) || (0, v.bw)(n.type)) && e.push(n)
                        }));
                        return e
                    }), [l]);
                if (0 === c.length) return null;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: o()(E().divider, E().bottomDivider)
                    }), (0, r.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: E().contentPadding,
                        children: N.Z.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, r.jsx)(u.List, {
                        sections: [c.length],
                        sectionHeight: 0,
                        renderRow: function(e) {
                            var n = e.section,
                                a = e.row;
                            if (n > 0) return null;
                            var o = c[a],
                                s = (0, m.KS)(o);
                            return null == s ? null : (0, r.jsx)(H, {
                                channel: o,
                                ChannelIcon: s,
                                selected: t === o.id,
                                onClick: i
                            }, o.id)
                        },
                        rowHeight: function(e, n) {
                            return e > 0 ? 0 : null != c[n] ? 56 : 0
                        },
                        renderSection: function() {
                            return null
                        },
                        className: o()(E().channelList, E().contentPadding),
                        fade: !0
                    })]
                })
            }

            function U(e) {
                var n = e.friends,
                    t = e.searchQuery,
                    i = a.useMemo((function() {
                        return 0 === t.length ? n : n.filter((function(e) {
                            return e.username.toLowerCase().includes(t.toLowerCase())
                        }))
                    }), [n, t]),
                    l = (0, s.e7)([p.Z], (function() {
                        return p.Z.theme
                    }));
                if (0 === i.length) return (0, r.jsxs)(b.ZP, {
                    theme: l,
                    className: E().emptyStateContainer,
                    children: [(0, r.jsx)(b.ZP.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: R(),
                        darkSrc: A()
                    }), (0, r.jsx)(b.ZP.Text, {
                        note: N.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                });
                return (0, r.jsx)(u.List, {
                    sections: [i.length],
                    sectionHeight: 0,
                    renderRow: function(e) {
                        var n = e.section,
                            t = e.row;
                        if (n > 0) return null;
                        var a = i[t],
                            o = i[t].username;
                        return (0, r.jsxs)("div", {
                            className: E().userRow,
                            children: [(0, r.jsx)(c.Z, {
                                user: a
                            }), (0, r.jsx)(u.Text, {
                                className: E().username,
                                variant: "text-md/normal",
                                children: o
                            }), (0, r.jsx)(u.Button, {
                                className: E().friendShareButton,
                                look: u.ButtonLooks.OUTLINED,
                                size: u.ButtonSizes.SMALL,
                                color: u.ButtonColors.BRAND,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    children: N.Z.Messages.SHARE
                                })
                            })]
                        }, a.id)
                    },
                    rowHeight: function(e, n) {
                        return e > 0 ? 0 : null != i[n] ? 52 : 0
                    },
                    renderSection: function() {
                        return null
                    },
                    className: o()(E().friendsList, E().contentPadding),
                    fade: !0
                })
            }

            function F(e) {
                var n = e.clip,
                    t = e.editMetadata,
                    i = e.transitionState,
                    c = e.onClose,
                    h = B(a.useState(""), 2),
                    m = h[0],
                    g = h[1],
                    p = B(a.useState(!1), 2),
                    v = p[0],
                    b = p[1],
                    I = B(a.useState(null), 2),
                    j = I[0],
                    Z = I[1],
                    M = (0, s.Wu)([x.Z], (function() {
                        return x.Z.getFriendIDs()
                    })),
                    A = (0, s.Wu)([S.default], (function() {
                        return M.map((function(e) {
                            return S.default.getUser(e)
                        })).filter(w.lm)
                    }), [M]),
                    _ = (0, s.e7)([y.Z], (function() {
                        return y.Z.getLastSelectedGuildId()
                    })),
                    R = (0, f.Z)(d.Z.CLIPS_SHARE_MODAL).analyticsLocations;

                function k() {
                    return (k = P((function() {
                        return D(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    if (null == j) return [2];
                                    b(!0);
                                    e.label = 1;
                                case 1:
                                    e.trys.push([1, 3, 4, 5]);
                                    return [4, (0, L.e)(n, {
                                        channelId: j,
                                        editMetadata: t,
                                        analyticsLocations: R
                                    })];
                                case 2:
                                    e.sent();
                                    l.pT();
                                    return [3, 5];
                                case 3:
                                    e.sent();
                                    return [3, 5];
                                case 4:
                                    b(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, r.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.SMALL,
                    transitionState: i,
                    children: [(0, r.jsx)(u.Heading, {
                        className: o()(E().title, E().contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: N.Z.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: o()(E().subtitle, E().contentPadding),
                        children: N.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, r.jsx)(C.Z, {
                        className: E().searchBar,
                        query: m,
                        onChange: g,
                        size: C.Z.Sizes.MEDIUM,
                        onClear: function() {
                            g("")
                        },
                        placeholder: N.Z.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, r.jsx)("div", {
                        className: o()(E().divider, E().topDivider)
                    }), (0, r.jsx)(U, {
                        searchQuery: m,
                        friends: A
                    }), null != _ && (0, r.jsx)(O, {
                        guildId: _,
                        selectedChannelId: j,
                        onSelectChannelId: Z
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            disabled: null == j,
                            submitting: v,
                            color: u.Button.Colors.BRAND,
                            onClick: function() {
                                return k.apply(this, arguments)
                            },
                            children: N.Z.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, r.jsx)(u.Button, {
                            submitting: v,
                            look: u.ButtonLooks.LINK,
                            onClick: c,
                            color: u.ButtonColors.PRIMARY,
                            children: N.Z.Messages.BACK
                        })]
                    })]
                })
            }
        }
    }
]);
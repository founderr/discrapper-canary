"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [48448], {
        96938: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => l
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(971402),
                u = n(734777),
                c = n(997309),
                a = n(473708);

            function l(e) {
                var t = e.target,
                    n = e.onSelect,
                    l = (0, u.Z)({
                        type: t.getAttribute("data-type"),
                        id: t.getAttribute("data-id"),
                        name: t.getAttribute("data-name"),
                        isInExpressionPicker: !0
                    }),
                    s = (0, c.Z)({
                        type: t.getAttribute("data-type"),
                        packId: t.getAttribute("data-pack-id")
                    });
                return (0, r.jsx)(i.Menu, {
                    navId: "expression-picker",
                    onClose: o.Zy,
                    "aria-label": a.Z.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, r.jsxs)(i.MenuGroup, {
                        children: [l, s]
                    })
                })
            }
        },
        997309: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                u = n(897436),
                c = n(768834),
                a = n(690296),
                l = n(879913),
                s = n(473708);

            function d(e) {
                var t = e.type,
                    n = e.packId,
                    d = (0, i.e7)([a.Z], (function() {
                        return null !== n && null != a.Z.getPackByPackId(n)
                    }));
                return (0, u.Xx)({
                    autoTrackExposure: !1
                }).viewAndUseEnabled && d ? t !== l.S.EMOJI && t !== l.S.PACK_ICON || null === n ? null : (0, r.jsx)(o.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, c.Y5)({
                            packId: n
                        })
                    },
                    label: s.Z.Messages.INVENTORY_REMOVE_PACK
                }) : null
            }
        },
        734777: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                u = n(304548),
                c = n(91500),
                a = n(579581),
                l = n(589503),
                s = n(245353),
                d = n(135855),
                p = n(879913),
                b = n(840598),
                f = n(798826),
                O = n(217544),
                E = n(78551),
                I = n(513586),
                y = n(2590),
                g = n(473708);

            function j(e, t, n) {
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
                        j(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e, t) {
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

            function m(e) {
                return d.ZP.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function v(e) {
                var t = e.type,
                    n = e.id,
                    j = e.name,
                    v = e.isInExpressionPicker,
                    S = void 0 !== v && v,
                    Z = (0, a.O)().location,
                    k = i.useMemo((function() {
                        return P(M({}, Z), {
                            section: S ? y.jXE.EXPRESSION_PICKER : y.jXE.CONTEXT_MENU
                        })
                    }), [Z, S]),
                    A = (0, O.Go)(),
                    T = (0, o.e7)([E.Z], (function() {
                        return t === p.S.STICKER && null != n ? E.Z.getStickerById(n) : null
                    })),
                    C = null != T && A.includes(T.id),
                    _ = (0, o.e7)([s.Z], (function() {
                        if (t === p.S.EMOJI) {
                            if (null != n) return s.Z.getDisambiguatedEmojiContext().getById(n);
                            if (null != j) {
                                var e;
                                return null !== (e = m(j)) && void 0 !== e ? e : m(d.ZP.convertSurrogateToName(j))
                            }
                        }
                    })),
                    x = (0, l.C1)(null, _);
                return null != T && t === p.S.STICKER ? (0, I.J8)(T) && !(0, I.V9)(T) ? null : C ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, b.hW)(T.id)
                    },
                    label: g.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, f.cQ)({
                            sticker: T,
                            location: P(M({}, k), {
                                object: y.qAy.STICKER
                            })
                        });
                        (0, b.SA)(null == T ? void 0 : T.id)
                    },
                    label: g.Z.Messages.FAVORITE_ITEM
                }) : null != _ && t === p.S.EMOJI ? x ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, c.Xe)(_)
                    },
                    label: g.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, l.J1)({
                            emoji: _,
                            location: P(M({}, k), {
                                object: y.qAy.EMOJI
                            })
                        });
                        (0, c.$K)(_)
                    },
                    label: g.Z.Messages.FAVORITE_ITEM
                }) : void 0
            }
        }
    }
]);
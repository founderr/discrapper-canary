"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96938, 48448], {
        96938: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => c
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                a = n(971402),
                o = n(734777),
                s = n(997309),
                u = n(473708);

            function c(e) {
                var t = e.target,
                    n = e.onSelect,
                    c = (0, o.Z)({
                        type: t.getAttribute("data-type"),
                        id: t.getAttribute("data-id"),
                        name: t.getAttribute("data-name"),
                        isInExpressionPicker: !0
                    }),
                    l = (0, s.Z)({
                        type: t.getAttribute("data-type"),
                        packId: t.getAttribute("data-pack-id")
                    });
                return (0, r.jsx)(i.Menu, {
                    navId: "expression-picker",
                    onClose: a.Zy,
                    "aria-label": u.Z.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, r.jsxs)(i.MenuGroup, {
                        children: [c, l]
                    })
                })
            }
        },
        997309: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                a = n(882723),
                o = n(897436),
                s = n(768834),
                u = n(690296),
                c = n(879913),
                l = n(473708);

            function _(e) {
                var t = e.type,
                    n = e.packId,
                    _ = (0, i.e7)([u.Z], (function() {
                        return null !== n && null != u.Z.getPackByPackId(n)
                    }));
                return (0, o.Xx)({
                    autoTrackExposure: !1
                }).viewAndUseEnabled && _ ? t !== c.S.EMOJI && t !== c.S.PACK_ICON || null === n ? null : (0, r.jsx)(a.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, s.Y5)({
                            packId: n
                        })
                    },
                    label: l.Z.Messages.INVENTORY_REMOVE_PACK
                }) : null
            }
        },
        734777: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var r = n(785893),
                i = n(667294),
                a = n(202351),
                o = n(882723),
                s = n(91500),
                u = n(579581),
                c = n(589503),
                l = n(245353),
                _ = n(135855),
                d = n(879913),
                p = n(840598),
                E = n(798826),
                f = n(217544),
                I = n(78551),
                y = n(513586),
                S = n(2590),
                g = n(473708);

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
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
            }

            function O(e, t) {
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

            function P(e) {
                return _.ZP.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function x(e) {
                var t = e.type,
                    n = e.id,
                    m = e.name,
                    x = e.isInExpressionPicker,
                    M = void 0 !== x && x,
                    k = (0, u.O)().location,
                    R = i.useMemo((function() {
                        return O(b({}, k), {
                            section: M ? S.jXE.EXPRESSION_PICKER : S.jXE.CONTEXT_MENU
                        })
                    }), [k, M]),
                    v = (0, f.Go)(),
                    T = (0, a.e7)([I.Z], (function() {
                        return t === d.S.STICKER && null != n ? I.Z.getStickerById(n) : null
                    })),
                    h = null != T && v.includes(T.id),
                    C = (0, a.e7)([l.Z], (function() {
                        if (t === d.S.EMOJI) {
                            if (null != n) return l.Z.getDisambiguatedEmojiContext().getById(n);
                            if (null != m) {
                                var e;
                                return null !== (e = P(m)) && void 0 !== e ? e : P(_.ZP.convertSurrogateToName(m))
                            }
                        }
                    })),
                    j = (0, c.C1)(null, C);
                return null != T && t === d.S.STICKER ? (0, y.J8)(T) && !(0, y.V9)(T) ? null : h ? (0, r.jsx)(o.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, p.hW)(T.id)
                    },
                    label: g.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, E.cQ)({
                            sticker: T,
                            location: O(b({}, R), {
                                object: S.qAy.STICKER
                            })
                        });
                        (0, p.SA)(null == T ? void 0 : T.id)
                    },
                    label: g.Z.Messages.FAVORITE_ITEM
                }) : null != C && t === d.S.EMOJI ? j ? (0, r.jsx)(o.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, s.Xe)(C)
                    },
                    label: g.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, c.J1)({
                            emoji: C,
                            location: O(b({}, R), {
                                object: S.qAy.EMOJI
                            })
                        });
                        (0, s.$K)(C)
                    },
                    label: g.Z.Messages.FAVORITE_ITEM
                }) : void 0
            }
        },
        798826: (e, t, n) => {
            n.d(t, {
                ev: () => c,
                cQ: () => l,
                n8: () => _,
                m1: () => d,
                Yk: () => p,
                On: () => E,
                Iw: () => f
            });
            var r = n(396043),
                i = n(652591),
                a = n(514351),
                o = n(2590),
                s = n(940581),
                u = n(203600),
                c = function(e) {
                    var t = e.containerWidth,
                        n = e.favoriteStickers,
                        i = e.frequentlyUsedStickers,
                        u = e.guildStickers,
                        c = e.stickersTotal;
                    r.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: s.X1.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter((function(e) {
                            return (0, a.aQ)(e.format_type)
                        })).length,
                        num_custom_expressions_favorites: n.filter((function(e) {
                            return (0, a.z)(e.type)
                        })).length,
                        num_standard_expressions_favorites: n.filter((function(e) {
                            return !(0, a.z)(e.type)
                        })).length,
                        num_expressions_frecent: i.length,
                        num_custom_expressions_frecent: i.filter((function(e) {
                            return (0, a.z)(e.type)
                        })).length,
                        num_animated_expressions_frecent: i.filter((function(e) {
                            return (0, a.aQ)(e.format_type)
                        })).length,
                        num_standard_expressions_frecent: i.filter((function(e) {
                            return !(0, a.z)(e.type)
                        })).length,
                        num_current_guild_expressions: u.length,
                        num_custom_expressions_total: c
                    })
                },
                l = function(e) {
                    var t, n = e.sticker,
                        i = e.location;
                    n.type === a.n0.GUILD && (t = n.guild_id);
                    r.ZP.trackWithMetadata(o.rMx.EXPRESSION_FAVORITED, {
                        location: i,
                        expression_type: s.X1.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, a.aQ)(n.format_type),
                        is_custom: (0, a.z)(n.type)
                    })
                },
                _ = function() {
                    i.default.track(o.rMx.SEARCH_STARTED, {
                        search_type: o.aib.STICKER
                    })
                },
                d = function(e, t, n) {
                    r.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_VIEWED, {
                        search_type: o.aib.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                p = function(e, t, n) {
                    var i, s = e.sticker;
                    s.type === a.n0.GUILD && (i = s.guild_id);
                    r.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_SELECTED, {
                        load_id: s.id,
                        search_type: o.aib.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: i,
                        sticker_id: s.id,
                        query: t
                    })
                },
                E = function(e) {
                    var t, n = e.sticker,
                        i = e.category;
                    n.type === a.n0.GUILD && (t = n.guild_id);
                    r.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: u.cd.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: i,
                        expression_guild_id: t,
                        is_animated: (0,
                            a.aQ)(n.format_type),
                        is_custom: (0, a.z)(n.type)
                    })
                },
                f = function(e) {
                    null != e && "" !== e && r.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: o.aib.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        }
    }
]);
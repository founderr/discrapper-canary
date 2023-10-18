"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75997], {
        975997: (e, t, a) => {
            a.r(t);
            a.d(t, {
                default: () => q,
                isEligibleForTryPacksModal: () => J
            });
            var r = a(785893),
                n = a(667294),
                s = a(318715),
                o = a(418705),
                i = a(304548),
                l = a(579581),
                c = a(153686),
                d = a(19585),
                u = a(515169),
                m = a(245353),
                f = a(270946),
                _ = a(179156),
                N = a(690296),
                h = a(213793),
                j = a(276611),
                E = a(567403),
                I = a(473903),
                P = a(709189),
                x = a(443812),
                g = a(406493),
                O = a(616276),
                T = a(652591),
                p = a(116094),
                b = a(294184),
                C = a.n(b),
                R = a(77413),
                y = a(768834),
                S = a(918124),
                k = a(206986),
                M = a(124251),
                v = a(211482),
                A = a(2590),
                Z = a(473708),
                w = a(621324),
                D = a.n(w);

            function L(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a;
                return e
            }

            function Y(e) {
                var t = e.featuredPack,
                    a = e.alreadyAddedPackIds,
                    n = e.headerId,
                    o = e.autoFocused,
                    l = (0, _.UU)({
                        emojiId: t.featuredEmojiIds[0]
                    }),
                    c = (0, s.ZP)([I.default], (function() {
                        return (0, p.I5)(I.default.getCurrentUser())
                    })),
                    d = (0, s.ZP)([N.Z], (function() {
                        return N.Z.getSortedPackIds().length >= (0, h.MP)(c)
                    })),
                    u = function(e) {
                        return new Set(a).has(e)
                    },
                    m = function(e, t, a) {
                        T.default.track(A.rMx.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: e,
                            inventory_pack_id: t,
                            nonce: a
                        })
                    };
                if (l.isFetching || null == l.expressionSourceGuild || null == l.expressionSourceGuild.emojis || l.hasJoinedEmojiSourceGuild) return null;
                var f = new Set(t.featuredEmojiIds),
                    j = l.expressionSourceGuild.emojis.filter((function(e) {
                        return f.has(e.id)
                    })),
                    E = l.expressionSourceGuild;
                return (0, r.jsxs)("div", {
                    className: C()(D().featuredPack, L({}, D().dimmed, d && !u(E.id))),
                    children: [(0, r.jsx)("div", {
                        className: D().featuredPackGuildIcon,
                        children: (0, r.jsx)(v.ZP, {
                            mask: v.ZP.Masks.SQUIRCLE,
                            width: 62,
                            height: 62,
                            className: D().guildIconContainer,
                            children: (0, r.jsx)(M.Z, {
                                className: D().featuredPackGuildIconImage,
                                size: M.Z.Sizes.LARGER,
                                guild: E
                            })
                        })
                    }), (0, r.jsxs)(i.Text, {
                        className: D().featuredPackTitle,
                        variant: "text-sm/semibold",
                        children: [(0, r.jsx)(k.Z, {
                            guild: E,
                            className: D().featuredPackGuildBadge
                        }), E.name]
                    }), (0, r.jsx)("div", {
                        className: D().featuredPackEmojiGrid,
                        children: j.map((function(e) {
                            return (0, r.jsx)("div", {
                                className: D().featuredPackEmojiWrapper,
                                children: (0, r.jsx)(R.Z, {
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    size: "jumbo"
                                })
                            }, e.id)
                        }))
                    }), (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: Z.Z.Messages.INVENTORY_TRY_PACKS_MORE_EMOJI.format({
                            numberOfEmoji: l.expressionSourceGuild.emojis.length - j.length
                        })
                    }), (0, r.jsx)("div", {
                        className: D().featuredPackFooter,
                        children: u(E.id) ? (0, r.jsx)(i.Button, {
                            autoFocus: o,
                            color: i.ButtonColors.PRIMARY,
                            className: D().featuredPackFooterButton,
                            onClick: function() {
                                (0, y.Y5)({
                                    packId: E.id
                                });
                                m(S.$.REMOVE_PACK, E.id, n)
                            },
                            children: (0, r.jsx)(i.Text, {
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: Z.Z.Messages.INVENTORY_REMOVE_PACK
                            })
                        }) : (0, r.jsx)(i.Button, {
                            autoFocus: o,
                            className: D().featuredPackFooterButton,
                            disabled: d && !u(E.id),
                            onClick: function() {
                                (0, y.dz)({
                                    packId: E.id
                                });
                                m(S.$.ADD_PACK, E.id, n)
                            },
                            children: (0, r.jsx)(i.Text, {
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: Z.Z.Messages.INVENTORY_ADD_PACK
                            })
                        })
                    })]
                }, E.id)
            }
            var G = a(203600),
                K = a(458947),
                V = a(753327),
                B = a(270085),
                U = a.n(B);

            function F(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a;
                return e
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        F(e, t, a[t])
                    }))
                }
                return e
            }

            function H(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        a.push.apply(a, r)
                    }
                    return a
                }(Object(t)).forEach((function(a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                }));
                return e
            }
            var $ = "2023_fall_try_packs_modal",
                W = [{
                    humanReadableName: "ooblets",
                    guildId: "255509377614610433",
                    featuredEmojiIds: ["893216643759620178", "431916066835529728", "431888257849098240", "431887978084696074", "481491021570637825", "893216644376191006"]
                }, {
                    humanReadableName: "haikyuu",
                    guildId: "424012709219008522",
                    featuredEmojiIds: ["758052547733749889", "758052547746463885", "758052547771760752", "758052548023287918", "1154091599148634172", "1154091595143053423"]
                }, {
                    humanReadableName: "lofiGirl",
                    guildId: "707230275175841915",
                    featuredEmojiIds: ["859801993303949343", "859802018197143622", "867335504928309288", "859801993806479401", "1096430408914190408", "859801993262006322"]
                }, {
                    humanReadableName: "townhall",
                    guildId: "169256939211980800",
                    featuredEmojiIds: ["1143953689409769562", "1143284729790070875", "1143273217457410141", "1143956675766796360", "1143957933122662441", "1143287122862809118"]
                }];

            function J(e) {
                if (N.Z.getIsFetching() || null == N.Z.getPackEmojisTTL()) return !1;
                if ((0, u.un)(o.z$.INVENTORY_TRY_PACKS_MODAL)) return !1;
                var t = 0,
                    a = 0,
                    r = new Set(N.Z.getSortedPackIds()),
                    n = !0,
                    s = !1,
                    i = void 0;
                try {
                    for (var l, c = W[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                        var d = l.value,
                            f = d.featuredEmojiIds[0];
                        null != (0, _.vm)(m.Z, E.Z, f).joinedEmojiSourceGuildRecord ? t++ : r.has(d.guildId) && a++
                    }
                } catch (e) {
                    s = !0;
                    i = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (s) throw i
                    }
                }
                if (t < W.length / 2 && a + t < W.length && r.size < (0, h.MP)(e)) return !0;
                if (!(0, u.un)(o.z$.INVENTORY_TRY_PACKS_MODAL)) {
                    T.default.track(A.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: $,
                        seconds_open: 0
                    });
                    (0, u.EW)(o.z$.INVENTORY_TRY_PACKS_MODAL, {
                        dismissAction: K.L.DISMISS
                    })
                }
                return !1
            }

            function q(e) {
                var t, a = e.renderModalProps,
                    m = a.onClose,
                    _ = a.transitionState,
                    h = (0, x.Dt)(),
                    E = (0, l.O)().location,
                    b = (0, d.Z)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL).analyticsLocations,
                    C = (0, s.ZP)([I.default], (function() {
                        return (0, p.I5)(I.default.getCurrentUser())
                    })),
                    R = (0, s.Wu)([N.Z], (function() {
                        var e = [];
                        W.map((function(e) {
                            return e.guildId
                        })).map((function(e) {
                            return N.Z.getPackByPackId({
                                packId: e
                            })
                        })).forEach((function(t) {
                            null != (null == t ? void 0 : t.id) && e.push(t.id)
                        }));
                        return e
                    }));
                n.useEffect((function() {
                    (0, u.kk)(o.z$.INVENTORY_TRY_PACKS_MODAL);
                    var e = Date.now();
                    T.default.track(A.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: $
                    });
                    return function() {
                        T.default.track(A.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: $,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, u.EW)(o.z$.INVENTORY_TRY_PACKS_MODAL, {
                            dismissAction: K.L.DISMISS
                        })
                    }
                }), []);
                return (0, r.jsxs)(i.ModalRoot, {
                    className: U().root,
                    transitionState: _,
                    "aria-labelledby": h,
                    children: [(0, r.jsx)(i.ModalCloseButton, {
                        className: U().closeButton,
                        onClick: m
                    }), (0, r.jsxs)("span", {
                        children: [(0, r.jsx)(O.Z, {
                            foreground: U().star1
                        }), (0, r.jsx)(O.Z, {
                            foreground: U().star2
                        }), (0, r.jsx)(O.Z, {
                            foreground: U().star3
                        }), (0, r.jsx)(f.Z, {
                            className: U().betaTag,
                            color: "white"
                        }), (0, r.jsx)(O.Z, {
                            foreground: U().star4
                        }), (0, r.jsx)(O.Z, {
                            foreground: U().star5
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: U().content,
                        scrollbarType: "none",
                        children: [(0, r.jsxs)(i.Heading, {
                            color: "always-white",
                            variant: "heading-xl/extrabold",
                            className: U().headerText,
                            children: [(0, r.jsx)(g.Z, {
                                className: U().nitroWheelHeader
                            }), Z.Z.Messages.INVENTORY_TRY_PACKS_TITLE]
                        }), (0, r.jsx)(i.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: U().subHeaderText,
                            children: C ? Z.Z.Messages.INVENTORY_TRY_PACKS_DESCRIPTION.format({
                                maxPacks: V.CJ
                            }) : Z.Z.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_FREEMIUM.format({
                                maxFreePacks: V.Lv
                            })
                        }), (0, r.jsx)(i.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: U().subHeaderText,
                            children: C ? Z.Z.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_2 : Z.Z.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_FREEMIUM_2
                        }), (0, r.jsx)("div", {
                            className: U().featuredPacks,
                            children: W.map((function(e, t) {
                                return (0, r.jsx)(Y, {
                                    autoFocused: 0 === t,
                                    featuredPack: e,
                                    alreadyAddedPackIds: R,
                                    headerId: h
                                }, e.guildId)
                            }))
                        }), !C && (t = Date.now(), (0, r.jsxs)("div", {
                            className: U().footerUpsell,
                            children: [(0, r.jsx)(i.Text, {
                                className: U().upsellText,
                                variant: "text-sm/normal",
                                children: Z.Z.Messages.INVENTORY_TRY_PACKS_UPSELL.format({
                                    maxPacks: V.CJ
                                })
                            }), (0, r.jsx)(P.C, {
                                onlyShineOnHover: !0,
                                className: U().getNitroButton,
                                color: i.Button.Colors.GREEN,
                                size: i.Button.Sizes.SMALL,
                                onClick: function() {
                                    T.default.track(A.rMx.CHANGE_LOG_CTA_CLICKED, {
                                        change_log_id: $,
                                        cta_type: "get_nitro_button",
                                        seconds_open: Math.round((Date.now() - t) / 1e3),
                                        target: "inventory_try_packs_payment_modal"
                                    });
                                    (0, j.Z)({
                                        subscriptionTier: G.Si.TIER_2,
                                        analyticsLocations: b,
                                        analyticsObject: H(z({}, E), {
                                            object: A.qAy.BUTTON_CTA,
                                            objectType: A.Qqv.TIER_2
                                        }),
                                        onClose: function(e) {
                                            e && m()
                                        }
                                    })
                                },
                                children: (0, r.jsxs)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/semibold",
                                    className: U().getNitroButtonContents,
                                    children: [(0, r.jsx)(g.Z, {
                                        className: U().nitroWheelButton
                                    }), Z.Z.Messages.PREMIUM_UPSELL_GET_NITRO]
                                })
                            })]
                        }))]
                    })]
                })
            }
        }
    }
]);
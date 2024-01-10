(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52762"], {
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return f
                },
                removeFavoriteChannel: function() {
                    return v
                },
                setFavoriteChannelNickname: function() {
                    return h
                },
                addFavoriteCategory: function() {
                    return C
                },
                removeFavoriteCategory: function() {
                    return m
                },
                updateFavoriteChannels: function() {
                    return S
                },
                updateFavoriteChannelParent: function() {
                    return p
                },
                toggleFavoriteServerMuted: function() {
                    return g
                }
            }), n("222007");
            var r = n("249654"),
                a = n("151426"),
                i = n("872173"),
                l = n("42203"),
                o = n("957255"),
                s = n("379881"),
                u = n("843455");

            function d() {
                let e = s.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function c(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let r = l.default.getChannel(t);
                    if (null == r || !r.isPrivate() && !o.default.can(u.Permissions.VIEW_CHANNEL, r)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = s.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = a.FavoriteChannel.create({
                        nickname: "",
                        type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function v(e) {
                let t = s.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function h(e, t) {
                let n = s.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function C(e) {
                let t = r.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = a.FavoriteChannel.create({
                        nickname: e,
                        type: a.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function m(e) {
                v(e)
            }

            function S(e) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let r of e)
                        if (null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id) {
                            var n;
                            t.favoriteChannels[r.id].parentId = null !== (n = r.parent_id) && void 0 !== n ? n : "0"
                        }
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p(e, t) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return v
                },
                useFavorite: function() {
                    return h
                },
                useFavoritesCategories: function() {
                    return C
                },
                useFavoritesGuildSelected: function() {
                    return m
                },
                useFavoriteAdded: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var r = n("884691"),
                a = n("298386"),
                i = n("446674");
            n("42203");
            var l = n("923959"),
                o = n("162771"),
                s = n("697218"),
                u = n("379881"),
                d = n("498139"),
                c = n("136569"),
                f = n("49111");

            function v(e) {
                let {
                    favoritesEnabled: t,
                    hasStaffPrivileges: n
                } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), r = (0, i.useStateFromStores)([u.default], () => u.default.isFavorite(e.id)), a = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()), l = e.isDM() || e.isThread(), o = !l || n && (null == a ? void 0 : a.isStaff()) === !0;
                return t && !__OVERLAY__ && !r && o
            }

            function h(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getFavorite(e));
                return t
            }

            function C() {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getChannels(f.FAVORITES))[a.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function m() {
                let e = (0, i.useStateFromStores)([o.default], () => o.default.getGuildId());
                return e === f.FAVORITES
            }

            function S() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, c.useFavoritesTooltipStore)(), n = r.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), a = r.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: a
                }
            }
        },
        136569: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoritesTooltipStore: function() {
                    return a
                }
            });
            var r = n("308503");
            let a = (0, r.default)(e => ({
                favoriteAdded: !1,
                notifyFavoriteAdded: () => e({
                    favoriteAdded: !0
                }),
                clearFavoriteAdded: () => e({
                    favoriteAdded: !1
                })
            }))
        },
        514525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("424973"), n("222007");
            var r = n("233069");

            function a(e) {
                let t = [];
                for (let n = 0; n < e._categories.length; n++) {
                    let a = e._categories[n].channel,
                        i = e[a.id].map(e => e.channel).filter(e => r.GUILD_FAVORITES_CHANNEL_TYPES.has(e.type)),
                        l = null == i || 0 === i.length;
                    if (l) continue;
                    let o = "null" === a.id;
                    for (let e of (!o && t.push(a), i)) t.push(e)
                }
                return t
            }
        },
        746039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                i = n("298386"),
                l = n("446674"),
                o = n("77078"),
                s = n("419830"),
                u = n("185153"),
                d = n("245997"),
                c = n("677099"),
                f = n("282109"),
                v = n("200008"),
                h = n("986373"),
                C = n("514525"),
                m = n("782340"),
                S = n("968982");

            function p(e) {
                let {
                    transitionState: t,
                    onClose: n
                } = e, i = (0, l.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()[0]), [s, d] = a.useState(i), [f, v] = a.useState(!1);
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: t,
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        className: S.modalHeader,
                        children: [(0, r.jsxs)("div", {
                            className: S.modalHeaderTitle,
                            children: [(0, r.jsx)(o.Heading, {
                                variant: "text-lg/semibold",
                                children: m.default.Messages.FAVORITE_CHANNEL
                            }), (0, r.jsx)(o.ModalCloseButton, {
                                onClick: n
                            })]
                        }), (0, r.jsx)("div", {
                            className: S.guildSelector,
                            children: (0, r.jsx)(u.GuildSelector, {
                                guildId: s,
                                onChange: function(e) {
                                    null != e && d(e.id)
                                }
                            })
                        })]
                    }), (0, r.jsx)(o.ModalContent, {
                        className: S.modalContent,
                        children: (0, r.jsx)(g, {
                            guildId: s,
                            hideMutedChannels: f
                        })
                    }), (0, r.jsxs)(o.ModalFooter, {
                        className: S.modalFooter,
                        children: [(0, r.jsx)(o.Button, {
                            className: S.goBackButton,
                            look: o.ButtonLooks.BLANK,
                            color: o.ButtonColors.PRIMARY,
                            size: o.ButtonSizes.SMALL,
                            onClick: n,
                            children: m.default.Messages.GO_BACK
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(o.Checkbox, {
                                value: f,
                                onChange: (e, t) => v(t),
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-normal",
                                    children: m.default.Messages.HIDE_MUTED_CHANNELS
                                })
                            })
                        })]
                    })]
                })
            }

            function g(e) {
                let {
                    guildId: t,
                    hideMutedChannels: n
                } = e, o = (0, l.useStateFromStores)([d.default], () => d.default.getCategories(t)), s = (0, C.default)(o), u = a.useRef(null);
                return a.useEffect(() => {
                    var e;
                    null == u || null === (e = u.current) || void 0 === e || e.scroll({
                        top: 0
                    })
                }, [t]), (0, r.jsx)("div", {
                    ref: u,
                    children: s.map(e => e.type === i.ChannelTypes.GUILD_CATEGORY ? (0, r.jsx)(F, {
                        name: e.name
                    }, e.id) : (0, r.jsx)(x, {
                        channel: e,
                        hideMutedChannels: n
                    }, e.id))
                })
            }

            function F(e) {
                let {
                    name: t
                } = e;
                return (0, r.jsx)(o.Text, {
                    className: S.categoryRow,
                    variant: "eyebrow",
                    color: "interactive-normal",
                    children: t
                })
            }

            function x(e) {
                let {
                    channel: t,
                    hideMutedChannels: n
                } = e, a = (0, h.useFavorite)(t.id), i = (0, l.useStateFromStores)([f.default], () => f.default.isChannelMuted(t.guild_id, t.id));
                if (i && n) return null;
                let u = (0, s.getChannelIconComponent)(t);
                return (0, r.jsxs)("div", {
                    className: S.channelRow,
                    children: [(0, r.jsxs)("div", {
                        className: S.channelName,
                        children: [null != u && (0, r.jsx)("div", {
                            className: S.channelIconContainer,
                            children: (0, r.jsx)(u, {
                                className: S.channelIcon,
                                height: 20,
                                width: 20
                            })
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "interactive-normal",
                            children: t.name
                        })]
                    }), null != a ? (0, r.jsx)(I, {
                        channelId: t.id
                    }) : (0, r.jsx)(N, {
                        channelId: t.id
                    })]
                }, t.id)
            }

            function N(e) {
                let {
                    channelId: t
                } = e;
                return (0, r.jsx)(o.Button, {
                    look: o.ButtonLooks.OUTLINED,
                    size: o.ButtonSizes.SMALL,
                    color: o.ButtonColors.BRAND,
                    onClick: function() {
                        (0, v.addFavoriteChannel)(t)
                    },
                    children: m.default.Messages.ADD
                })
            }

            function I(e) {
                let {
                    channelId: t
                } = e;
                return (0, r.jsx)(o.Button, {
                    look: o.ButtonLooks.FILLED,
                    size: o.ButtonSizes.SMALL,
                    color: o.ButtonColors.PRIMARY,
                    onClick: function() {
                        (0, v.removeFavoriteChannel)(t)
                    },
                    children: m.default.Messages.REMOVE
                })
            }
        },
        185153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                GuildSelector: function() {
                    return p
                }
            }), n("843762");
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                o = n("446674"),
                s = n("77078"),
                u = n("570697"),
                d = n("305961"),
                c = n("677099"),
                f = n("476263"),
                v = n("449008"),
                h = n("424562"),
                C = n("782340"),
                m = n("764347");

            function S(e) {
                let {
                    guildId: t,
                    className: n,
                    globalOption: a,
                    hideDivider: i = !1,
                    onChange: o,
                    renderOptionSuffix: s
                } = e;
                return (0, r.jsx)(u.default, {
                    className: l(m.section, n),
                    title: C.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
                    hideDivider: i,
                    forcedDivider: !0,
                    children: (0, r.jsx)(p, {
                        guildId: t,
                        onChange: o,
                        renderOptionSuffix: s,
                        globalOption: a
                    })
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    globalOption: n,
                    onChange: i,
                    renderOptionSuffix: l
                } = e, u = (0, o.useStateFromStores)([h.default], () => h.default.showNotice()), S = (0, o.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), p = (0, o.useStateFromStores)([d.default], () => d.default.getGuilds()), g = a.useMemo(() => {
                    let e = S.map(e => {
                        let t = p[e];
                        return null == t ? null : {
                            label: t.name,
                            value: t.id
                        }
                    }).filter(v.isNotNullish);
                    return null != n && e.unshift(n), e
                }, [S, p, n]), F = a.useCallback(e => {
                    let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                    return null == e || "" === e.value || t ? null : (0, r.jsx)(f.default, {
                        className: m.guildSelectOptionIcon,
                        guild: p[e.value],
                        size: f.default.Sizes.SMOL,
                        active: !0
                    })
                }, [p, n]);
                return (0, r.jsx)(s.SearchableSelect, {
                    isDisabled: u,
                    onChange: e => {
                        if ("" === e || e === (null == n ? void 0 : n.value)) {
                            i(null);
                            return
                        }
                        let t = p[e];
                        null != t && i(t)
                    },
                    value: t,
                    options: g,
                    renderOptionPrefix: F,
                    renderOptionSuffix: l,
                    placeholder: C.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                l = n("77078"),
                o = n("216422"),
                s = n("782340"),
                u = n("881609");

            function d(e) {
                let {
                    text: t = s.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, r.jsx)(l.Tooltip, {
                    text: t,
                    children: e => (0, r.jsx)(l.Clickable, {
                        ...e,
                        children: (0, r.jsx)(o.default, {
                            className: i(u.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("781738");
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                l = n("77078"),
                o = n("254490"),
                s = n("891653"),
                u = n("632892"),
                d = n("326908");

            function c(e) {
                let {
                    errors: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((e, t) => (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: d.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, o.sizeString)(t)
                        })
                    }, t))
                })
            }

            function f(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: a,
                    description: o,
                    children: f,
                    className: v,
                    errors: h,
                    disabled: C = !1,
                    hideDivider: m = !1,
                    showBorder: S = !1,
                    borderType: p,
                    hasBackground: g = !1,
                    forcedDivider: F = !1,
                    showPremiumIcon: x = !1
                } = e;
                return (0, r.jsx)("div", {
                    className: i(d.customizationSection, v, {
                        [d.disabled]: C,
                        [d.hideDivider]: m,
                        [d.showBorder]: S,
                        [d.withDivider]: F
                    }),
                    children: (0, r.jsxs)(u.default, {
                        className: d.customizationSectionBorder,
                        backgroundClassName: d.customizationSectionBackground,
                        isShown: S,
                        type: p,
                        hasBackground: g,
                        children: [(0, r.jsxs)(l.FormTitle, {
                            className: d.title,
                            id: a,
                            children: [t, x && (0, r.jsx)(s.default, {}), n]
                        }), null != o ? (0, r.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: d.sectionDescription,
                            children: o
                        }) : null, f, null != h && (0, r.jsx)(c, {
                            errors: h
                        })]
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return a
                },
                default: function() {
                    return c
                }
            });
            var r, a, i = n("37983"),
                l = n("884691"),
                o = n("414456"),
                s = n.n(o),
                u = n("623682");
            (r = a || (a = {})).PREMIUM = "premium", r.LIMITED = "limited";
            let d = {
                premium: {
                    border: u.premiumFeatureBorder,
                    background: u.premiumBackground
                },
                limited: {
                    border: u.limitedFeatureBorder,
                    background: u.limitedBackground
                }
            };
            var c = l.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = "premium",
                    isShown: a,
                    hasBackground: l = !1,
                    className: o,
                    backgroundClassName: c
                } = e;
                if (!a) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: v
                } = d[r];
                return (0, i.jsx)("div", {
                    ref: t,
                    className: s(f, o),
                    children: (0, i.jsx)("div", {
                        className: s(l ? v : u.background, c),
                        children: n
                    })
                })
            })
        },
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("125094"),
                l = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: i,
                            fill: a
                        }), (0, r.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: i,
                            fill: a
                        })]
                    })
                }, i.ScreenArrowIcon, void 0, {
                    size: 24
                })
        }
    }
]);
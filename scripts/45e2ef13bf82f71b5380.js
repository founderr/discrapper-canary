(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46574"], {
        42211: function(e, t, s) {
            "use strict";
            e.exports = s.p + "dd4a336fd444ced6dd81.jpg"
        },
        513002: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f328a6f8209d4f1f5022.png"
        },
        235898: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useMaybeFetchCollectiblesCategories: function() {
                    return n
                },
                default: function() {
                    return u
                }
            }), s("222007");
            var i = s("884691"),
                a = s("65597"),
                r = s("875212"),
                l = s("21526"),
                o = s("853987"),
                c = s("775416");

            function n() {
                let e = "useMaybeFetchCollectiblesCategories";
                (0, r.useTriggerDebuggingAA)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                let [t, s, c, n] = (0, a.useStateFromStoresArray)([o.default], () => {
                    var e;
                    return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
                });
                return (0, i.useEffect)(() => {
                    !(t || s || Date.now() - c < 6e5) && (0, l.fetchCollectiblesCategories)()
                }, [t, c, s]), {
                    isFetching: t,
                    categories: n,
                    error: s
                }
            }

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, r.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: s,
                    categories: o,
                    error: u
                } = n(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: m,
                    isFetching: g,
                    purchases: h
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, s, o, n, u] = (0, a.useStateFromStoresArray)([c.default], () => [c.default.isFetching, c.default.isClaiming, c.default.fetchError, c.default.claimError, c.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, l.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: s,
                        fetchError: o,
                        claimError: n,
                        isFetching: t,
                        purchases: u
                    }
                }(), S = null !== (e = null != u ? u : f) && void 0 !== e ? e : m;
                return {
                    isFetching: s || g,
                    isFetchingCategories: s,
                    isFetchingPurchases: g,
                    isClaiming: d,
                    categories: o,
                    purchases: h,
                    error: S
                }
            }
        },
        806224: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CollectiblesItemsList: function() {
                    return v
                }
            });
            var i = s("37983"),
                a = s("884691"),
                r = s("414456"),
                l = s.n(r),
                o = s("265586"),
                c = s("446674"),
                n = s("77078"),
                u = s("252744"),
                d = s("606292"),
                f = s("688318"),
                m = s("845962"),
                g = s("697218"),
                h = s("573135"),
                S = s("312595"),
                C = s("513002");
            let I = e => {
                    let {
                        item: t,
                        isSelected: s,
                        setSelectedItem: r,
                        isAccountSwitcher: o,
                        avatarDecorationSize: d
                    } = e, m = (0, c.useStateFromStores)([g.default], () => g.default.getCurrentUser()), C = a.useRef(null), I = (0, u.default)(C), {
                        avatarDecorationSrc: A,
                        eventHandlers: E,
                        avatarPlaceholderSrc: v
                    } = (0, f.default)({
                        user: m,
                        avatarDecorationOverride: t,
                        size: d,
                        animateOnHover: !I
                    });
                    return (0, i.jsx)(n.FocusRing, {
                        children: (0, i.jsxs)(n.Clickable, {
                            ...E,
                            className: l({
                                [S.selectedAvatarDecorationItem]: s
                            }, o ? S.accountSwitcherItem : S.interactiveModalItem),
                            innerRef: C,
                            onClick: () => r(t),
                            children: [(0, i.jsx)("img", {
                                className: S.avatarDecorationPlaceholder,
                                style: {
                                    width: d / h.DECORATION_TO_AVATAR_RATIO,
                                    height: d / h.DECORATION_TO_AVATAR_RATIO
                                },
                                src: v,
                                alt: ""
                            }), (0, i.jsx)("img", {
                                className: S.avatarDecorationItem,
                                src: A,
                                alt: t.label
                            })]
                        })
                    })
                },
                A = e => {
                    var t;
                    let {
                        item: s,
                        isSelected: a,
                        setSelectedItem: r,
                        isAccountSwitcher: o
                    } = e, u = (0, c.useStateFromStores)([m.default], () => m.default.getProfileEffectById(s.id)), {
                        accessibilityLabel: d,
                        thumbnailPreviewSrc: f,
                        title: g
                    } = null !== (t = null == u ? void 0 : u.config) && void 0 !== t ? t : {};
                    return (0, i.jsx)(n.FocusRing, {
                        children: (0, i.jsxs)(n.Clickable, {
                            className: l(S.item, {
                                [S.selectedProfileEffectItem]: a
                            }, o ? S.accountSwitcherItem : S.interactiveModalItem),
                            onClick: () => r(s),
                            children: [(0, i.jsx)("img", {
                                src: C,
                                alt: d,
                                className: l(o ? S.accountSwitcherPresetEffectBackground : S.interactiveModalPresetEffectBackground)
                            }), (0, i.jsx)("img", {
                                className: l(o ? S.accountSwitcherPresetEffectImg : S.interactiveModaPresetEffectImg),
                                src: f,
                                alt: g
                            })]
                        })
                    })
                },
                E = e => {
                    let {
                        listRef: t,
                        items: s,
                        selectedItem: a,
                        setSelectedItem: r,
                        isAccountSwitcher: c,
                        avatarSize: n
                    } = e, u = (0, d.getDecorationSizeForAvatarSize)(n);
                    return (0, i.jsx)("div", {
                        ref: t,
                        className: l(c ? S.accountSwitcherCollectiblesList : S.interactiveModalCollectiblesList),
                        children: s.map(e => e.type === o.CollectiblesItemType.AVATAR_DECORATION ? (0, i.jsx)(I, {
                            item: e,
                            isSelected: e.skuId === (null == a ? void 0 : a.skuId),
                            setSelectedItem: r,
                            isAccountSwitcher: c,
                            avatarDecorationSize: u
                        }, e.id) : (0, i.jsx)(A, {
                            item: e,
                            isSelected: e.skuId === (null == a ? void 0 : a.skuId),
                            setSelectedItem: r,
                            isAccountSwitcher: c
                        }, e.id))
                    })
                },
                v = e => {
                    let {
                        items: t,
                        isFetching: s,
                        selectedItem: r,
                        setSelectedItem: o,
                        containerClassName: c,
                        isAccountSwitcher: u
                    } = e, d = a.useRef(null);
                    return s ? (0, i.jsx)(n.Spinner, {
                        className: S.loading
                    }) : (0, i.jsx)(n.FocusRingScope, {
                        containerRef: d,
                        children: u ? (0, i.jsx)(n.AdvancedScroller, {
                            className: l(c),
                            children: (0, i.jsx)(E, {
                                listRef: d,
                                items: t,
                                selectedItem: r,
                                setSelectedItem: o,
                                isAccountSwitcher: u,
                                avatarSize: n.AvatarSizes.SIZE_56
                            })
                        }) : (0, i.jsx)("div", {
                            className: l(c),
                            children: (0, i.jsx)(E, {
                                listRef: d,
                                items: t,
                                selectedItem: r,
                                setSelectedItem: o,
                                isAccountSwitcher: u,
                                avatarSize: n.AvatarSizes.SIZE_48
                            })
                        })
                    })
                }
        },
        542430: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return j
                }
            }), s("222007");
            var i = s("37983"),
                a = s("884691"),
                r = s("446674"),
                l = s("77078"),
                o = s("812204"),
                c = s("685665"),
                n = s("184900"),
                u = s("697218"),
                d = s("476765"),
                f = s("719923"),
                m = s("21526"),
                g = s("491232"),
                h = s("235898"),
                S = s("730297"),
                C = s("806410"),
                I = s("806224"),
                A = s("994428"),
                E = s("782340"),
                v = s("95194");

            function x(e) {
                let {
                    onClose: t,
                    markAsDismissed: s
                } = e, a = (0, d.useUID)();
                return (0, i.jsxs)(l.ModalHeader, {
                    separator: !1,
                    className: v.header,
                    children: [(0, i.jsx)(l.Heading, {
                        id: a,
                        variant: "heading-xl/extrabold",
                        className: v.headerTitle,
                        children: E.default.Messages.COLLECTIBLES_INTERACTIVE_MODAL_HEADER
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        className: v.headerSubtitle,
                        children: E.default.Messages.COLLECTIBLES_INTERACTIVE_MODAL_SUBHEADER
                    }), (0, i.jsx)(l.ModalCloseButton, {
                        className: v.closeButton,
                        onClick: () => {
                            var e, i;
                            return e = s, i = t, void(e(A.ContentDismissActionType.USER_DISMISS), null == i || i())
                        }
                    })]
                })
            }

            function T(e) {
                let {
                    selectedItem: t,
                    setSelectedItem: s
                } = e, o = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
                    categories: c,
                    isFetching: d
                } = (0, h.useMaybeFetchCollectiblesCategories)(), m = f.default.canUsePremiumProfileCustomization(o), A = a.useMemo(() => (0, g.sortAvatarDecorationsByPopularity)((0, g.getAvatarDecorationsFromCategories)(c)).slice(0, 12), [c]), x = a.useMemo(() => (0, g.sortProfileEffectsByPopularity)((0, g.getProfileEffectsFromCategories)(c)).slice(0, 12), [c]);
                return null == o ? null : (0, i.jsxs)(l.ModalContent, {
                    className: v.modalContent,
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)(l.FormTitle, {
                            className: v.title,
                            children: E.default.Messages.USER_SETTINGS_AVATAR_DECORATION
                        }), (0, i.jsx)(I.CollectiblesItemsList, {
                            items: A,
                            isFetching: d,
                            selectedItem: t,
                            setSelectedItem: s,
                            containerClassName: v.listContainer,
                            isAccountSwitcher: !1
                        })]
                    }), (0, i.jsx)(n.default, {
                        user: o,
                        disabledInputs: !0,
                        forProfileEffectModal: !0,
                        canUsePremiumCustomization: m,
                        pendingAvatarDecoration: (0, S.isAvatarDecorationRecord)(t) ? t : null,
                        pendingProfileEffectID: (0, C.isProfileEffectRecord)(t) ? t.id : null,
                        hideFakeActivity: !0,
                        hideExampleButton: !0,
                        hideMemberStatusSection: !1,
                        bodyClassName: v.previewBody,
                        onAvatarChange: () => {},
                        onBannerChange: () => {},
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        pendingAvatar: void 0,
                        pendingBanner: void 0
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(l.FormTitle, {
                            className: v.title,
                            children: E.default.Messages.USER_SETTINGS_PROFILE_EFFECT
                        }), (0, i.jsx)(I.CollectiblesItemsList, {
                            items: x,
                            isFetching: d,
                            selectedItem: t,
                            setSelectedItem: s,
                            containerClassName: v.listContainer,
                            isAccountSwitcher: !1
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    onClose: t,
                    selectedItem: s
                } = e, {
                    analyticsLocations: a
                } = (0, c.default)(o.default.COLLECTIBLES_INTERACTIVE_MODAL_POPUP_UPSELL);
                return (0, i.jsx)(l.ModalFooter, {
                    children: (0, i.jsx)(l.Button, {
                        size: l.Button.Sizes.MEDIUM,
                        className: v.checkItOutButton,
                        type: "button",
                        color: l.Button.Colors.BRAND,
                        onClick: () => {
                            (0, m.openCollectiblesShop)({
                                analyticsLocations: a,
                                analyticsSource: o.default.COLLECTIBLES_INTERACTIVE_MODAL_POPUP_UPSELL,
                                initialProductSkuId: null != s ? s.skuId : void 0
                            }), null == t || t()
                        },
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            className: v.checkItOutButtonText,
                            children: E.default.Messages.CHECK_IT_OUT
                        })
                    })
                })
            }

            function j(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    markAsDismissed: r
                } = e, [o, c] = a.useState();
                return (0, i.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.DYNAMIC,
                    className: v.modal,
                    children: [(0, i.jsx)(x, {
                        onClose: s,
                        markAsDismissed: r
                    }), (0, i.jsx)(T, {
                        selectedItem: o,
                        setSelectedItem: c
                    }), (0, i.jsx)(p, {
                        onClose: s,
                        selectedItem: o
                    })]
                })
            }
        }
    }
]);
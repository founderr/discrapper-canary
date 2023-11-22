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
                    return c
                },
                default: function() {
                    return u
                }
            }), s("222007");
            var l = s("884691"),
                a = s("65597"),
                i = s("875212"),
                r = s("21526"),
                o = s("853987"),
                n = s("775416");

            function c() {
                let e = "useMaybeFetchCollectiblesCategories";
                (0, i.useTriggerDebuggingAA)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                }), (0, i.useTriggerDebuggingAA)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                let [t, s, n, c] = (0, a.useStateFromStoresArray)([o.default], () => {
                    var e;
                    return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
                });
                return (0, l.useEffect)(() => {
                    !(t || s || Date.now() - n < 6e5) && (0, r.fetchCollectiblesCategories)()
                }, [t, n, s]), {
                    isFetching: t,
                    categories: c,
                    error: s
                }
            }

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, i.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, i.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: s,
                    categories: o,
                    error: u
                } = c(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: m,
                    isFetching: g,
                    purchases: C
                } = function() {
                    let e = "useFetchPurchases";
                    (0, i.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, i.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, s, o, c, u] = (0, a.useStateFromStoresArray)([n.default], () => [n.default.isFetching, n.default.isClaiming, n.default.fetchError, n.default.claimError, n.default.purchases]);
                    return (0, l.useEffect)(() => {
                        (0, r.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: s,
                        fetchError: o,
                        claimError: c,
                        isFetching: t,
                        purchases: u
                    }
                }(), h = null !== (e = null != u ? u : f) && void 0 !== e ? e : m;
                return {
                    isFetching: s || g,
                    isFetchingCategories: s,
                    isFetchingPurchases: g,
                    isClaiming: d,
                    categories: o,
                    purchases: C,
                    error: h
                }
            }
        },
        806224: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CollectiblesItemsList: function() {
                    return p
                }
            });
            var l = s("37983"),
                a = s("884691"),
                i = s("414456"),
                r = s.n(i),
                o = s("265586"),
                n = s("446674"),
                c = s("77078"),
                u = s("252744"),
                d = s("606292"),
                f = s("688318"),
                m = s("845962"),
                g = s("697218"),
                C = s("312595"),
                h = s("513002");
            let E = c.AvatarSizes.SIZE_40,
                I = (0, d.getDecorationSizeForAvatarSize)(E),
                S = e => {
                    let {
                        item: t,
                        isSelected: s,
                        setSelectedItem: i
                    } = e, o = (0, n.useStateFromStores)([g.default], () => g.default.getCurrentUser()), d = a.useRef(null), m = (0, u.default)(d), {
                        avatarDecorationSrc: h,
                        eventHandlers: E
                    } = (0, f.default)({
                        user: o,
                        avatarDecorationOverride: t,
                        size: I,
                        animateOnHover: !m
                    });
                    return (0, l.jsx)(c.FocusRing, {
                        children: (0, l.jsx)(c.Clickable, {
                            ...E,
                            className: r(C.item, {
                                [C.selectedAvatarDecorationItem]: s
                            }),
                            innerRef: d,
                            onClick: () => i(t),
                            children: (0, l.jsx)("img", {
                                className: C.avatarDecorationItem,
                                src: h,
                                alt: t.label
                            })
                        })
                    })
                },
                x = e => {
                    var t;
                    let {
                        item: s,
                        isSelected: a,
                        setSelectedItem: i
                    } = e, o = (0, n.useStateFromStores)([m.default], () => m.default.getProfileEffectById(s.id)), {
                        accessibilityLabel: u,
                        thumbnailPreviewSrc: d,
                        title: f
                    } = null !== (t = null == o ? void 0 : o.config) && void 0 !== t ? t : {};
                    return (0, l.jsx)(c.FocusRing, {
                        children: (0, l.jsxs)(c.Clickable, {
                            className: r(C.item, {
                                [C.selectedProfileEffectItem]: a
                            }),
                            onClick: () => i(s),
                            children: [(0, l.jsx)("img", {
                                src: h,
                                alt: u,
                                className: C.presetEffectBackground
                            }), (0, l.jsx)("img", {
                                className: C.presetEffectImg,
                                src: d,
                                alt: f
                            })]
                        })
                    })
                },
                A = e => {
                    let {
                        listRef: t,
                        items: s,
                        selectedItem: a,
                        setSelectedItem: i
                    } = e;
                    return (0, l.jsx)("div", {
                        ref: t,
                        className: C.collectiblesList,
                        children: s.map(e => e.type === o.CollectiblesItemType.AVATAR_DECORATION ? (0, l.jsx)(S, {
                            item: e,
                            isSelected: e.skuId === (null == a ? void 0 : a.skuId),
                            setSelectedItem: i
                        }, e.id) : (0, l.jsx)(x, {
                            item: e,
                            isSelected: e.skuId === (null == a ? void 0 : a.skuId),
                            setSelectedItem: i
                        }, e.id))
                    })
                },
                p = e => {
                    let {
                        items: t,
                        isFetching: s,
                        selectedItem: i,
                        setSelectedItem: o,
                        containerClassName: n,
                        isScrollable: u
                    } = e, d = a.useRef(null);
                    return s ? (0, l.jsx)(c.Spinner, {
                        className: C.loading
                    }) : (0, l.jsx)(c.FocusRingScope, {
                        containerRef: d,
                        children: u ? (0, l.jsx)(c.AdvancedScroller, {
                            className: r(n),
                            children: (0, l.jsx)(A, {
                                listRef: d,
                                items: t,
                                selectedItem: i,
                                setSelectedItem: o
                            })
                        }) : (0, l.jsx)("div", {
                            className: r(n),
                            children: (0, l.jsx)(A, {
                                listRef: d,
                                items: t,
                                selectedItem: i,
                                setSelectedItem: o
                            })
                        })
                    })
                }
        },
        542430: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            }), s("222007");
            var l = s("37983"),
                a = s("884691"),
                i = s("446674"),
                r = s("77078"),
                o = s("812204"),
                n = s("685665"),
                c = s("184900"),
                u = s("697218"),
                d = s("476765"),
                f = s("719923"),
                m = s("21526"),
                g = s("491232"),
                C = s("235898"),
                h = s("730297"),
                E = s("806410"),
                I = s("806224"),
                S = s("994428"),
                x = s("782340"),
                A = s("95194");

            function p(e) {
                let {
                    onClose: t,
                    markAsDismissed: s
                } = e, a = (0, d.useUID)();
                return (0, l.jsxs)(r.ModalHeader, {
                    separator: !1,
                    className: A.header,
                    children: [(0, l.jsx)(r.Heading, {
                        id: a,
                        variant: "heading-xl/extrabold",
                        className: A.headerTitle,
                        children: x.default.Messages.COLLECTIBLES_INTERACTIVE_MODAL_HEADER
                    }), (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        className: A.headerSubtitle,
                        children: x.default.Messages.COLLECTIBLES_INTERACTIVE_MODAL_SUBHEADER
                    }), (0, l.jsx)(r.ModalCloseButton, {
                        className: A.closeButton,
                        onClick: () => {
                            var e, l;
                            return e = s, l = t, void(e(S.ContentDismissActionType.USER_DISMISS), null == l || l())
                        }
                    })]
                })
            }

            function T(e) {
                let {
                    selectedItem: t,
                    setSelectedItem: s
                } = e, o = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
                    categories: n,
                    isFetching: d
                } = (0, C.useMaybeFetchCollectiblesCategories)(), m = f.default.canUsePremiumProfileCustomization(o), S = a.useMemo(() => (0, g.sortAvatarDecorationsByPopularity)((0, g.getAvatarDecorationsFromCategories)(n).slice(0, 12)), [n]), p = a.useMemo(() => (0, g.sortProfileEffectsByPopularity)((0, g.getProfileEffectsFromCategories)(n).slice(0, 12)), [n]);
                return null == o ? null : (0, l.jsxs)(r.ModalContent, {
                    className: A.modalContent,
                    children: [(0, l.jsxs)("div", {
                        children: [(0, l.jsx)(r.FormTitle, {
                            className: A.title,
                            children: x.default.Messages.USER_SETTINGS_AVATAR_DECORATION
                        }), (0, l.jsx)(I.CollectiblesItemsList, {
                            items: S,
                            isFetching: d,
                            selectedItem: t,
                            setSelectedItem: s,
                            containerClassName: A.listContainer,
                            isScrollable: !1
                        })]
                    }), (0, l.jsx)(c.default, {
                        user: o,
                        disabledInputs: !0,
                        forProfileEffectModal: !0,
                        canUsePremiumCustomization: m,
                        pendingAvatarDecoration: (0, h.isAvatarDecorationRecord)(t) ? t : null,
                        pendingProfileEffectID: (0, E.isProfileEffectRecord)(t) ? t.id : null,
                        hideFakeActivity: !0,
                        hideExampleButton: !0,
                        hideMemberStatusSection: !1,
                        bodyClassName: A.previewBody,
                        onAvatarChange: () => {},
                        onBannerChange: () => {},
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        pendingAvatar: void 0,
                        pendingBanner: void 0
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(r.FormTitle, {
                            className: A.title,
                            children: x.default.Messages.USER_SETTINGS_PROFILE_EFFECT
                        }), (0, l.jsx)(I.CollectiblesItemsList, {
                            items: p,
                            isFetching: d,
                            selectedItem: t,
                            setSelectedItem: s,
                            containerClassName: A.listContainer,
                            isScrollable: !1
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    onClose: t,
                    selectedItem: s
                } = e, {
                    analyticsLocations: a
                } = (0, n.default)(o.default.COLLECTIBLES_INTERACTIVE_MODAL_POPUP_UPSELL);
                return (0, l.jsx)(r.ModalFooter, {
                    children: (0, l.jsx)(r.Button, {
                        size: r.Button.Sizes.MEDIUM,
                        className: A.checkItOutButton,
                        type: "button",
                        color: r.Button.Colors.BRAND,
                        onClick: () => {
                            (0, m.openCollectiblesShop)({
                                analyticsLocations: a,
                                analyticsSource: o.default.COLLECTIBLES_INTERACTIVE_MODAL_POPUP_UPSELL,
                                initialItem: null != s ? s : void 0
                            }), null == t || t()
                        },
                        children: (0, l.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: A.checkItOutButtonText,
                            children: x.default.Messages.CHECK_IT_OUT
                        })
                    })
                })
            }

            function b(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    markAsDismissed: i
                } = e, [o, n] = a.useState();
                return (0, l.jsxs)(r.ModalRoot, {
                    transitionState: t,
                    size: r.ModalSize.DYNAMIC,
                    className: A.modal,
                    children: [(0, l.jsx)(p, {
                        onClose: s,
                        markAsDismissed: i
                    }), (0, l.jsx)(T, {
                        selectedItem: o,
                        setSelectedItem: n
                    }), (0, l.jsx)(v, {
                        onClose: s,
                        selectedItem: o
                    })]
                })
            }
        }
    }
]);
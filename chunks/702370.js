i.r(t), i(47120), i(627341);
var n = i(735250), s = i(470079), a = i(120356), l = i.n(a), r = i(278074), o = i(873546), c = i(979554), d = i(399606), u = i(780384), C = i(481060), m = i(37234), E = i(809206), _ = i(727637), I = i(410030), f = i(100527), L = i(906732), v = i(1585), x = i(786761), T = i(3148), h = i(739566), p = i(753206), P = i(333867), g = i(197115), N = i(300284), S = i(921813), A = i(876917), O = i(642619), b = i(25990), j = i(594174), Z = i(626135), w = i(74538), B = i(335131), M = i(1870), R = i(884697), D = i(188584), k = i(724994), U = i(328456), y = i(390698), F = i(141011), H = i(426171), V = i(224068), W = i(813083), G = i(823941), z = i(680942), Y = i(558060), K = i(237031), q = i(372654), Q = i(616066), X = i(832149), J = i(215023), $ = i(981631), ee = i(474936), et = i(231338), ei = i(689938), en = i(332803);
let es = e => {
        let {
                item: t,
                user: i,
                isBundleItem: a = !1
            } = e, l = s.useRef(null), o = (0, _.Z)(l);
        return (0, r.EQ)(t.type).with(c.Z.AVATAR_DECORATION, () => (0, n.jsx)('div', {
            className: a ? en.bundleAvatarPreviewContainer : en.avatarPreviewContainer,
            children: (0, n.jsx)(Q.R, {
                user: i,
                item: t
            })
        })).with(c.Z.PROFILE_EFFECT, () => (0, n.jsx)('div', {
            className: a ? en.bundlePfxPreviewContainer : en.pfxPreviewContainer,
            ref: l,
            children: (0, n.jsx)(A.Z, {
                profileEffectId: t.id,
                isHovering: o,
                removeSetHeight: !0
            })
        })).otherwise(() => null);
    }, ea = e => {
        let {
                product: t,
                user: i
            } = e, [a, l] = s.useState(0);
        s.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && l(e => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [
            t.skuId,
            t.items.length,
            i.id
        ]);
        let r = t.items.length;
        return (0, n.jsx)('div', {
            className: en.bundlePreviewContainer,
            children: (0, n.jsx)(C.Slides, {
                activeSlide: String(a),
                children: t.items.map((e, s) => {
                    let a = String(s), l = null != t.bundledProducts ? t.bundledProducts[s] : void 0, o = '('.concat(s + 1, '/').concat(r, ')');
                    return (0, n.jsx)(C.Slide, {
                        id: a,
                        children: (0, n.jsxs)('div', {
                            className: en.bundlePreviewSlide,
                            children: [
                                (0, n.jsx)(es, {
                                    item: e,
                                    user: i,
                                    isBundleItem: !0
                                }),
                                (0, n.jsxs)(C.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    className: en.bundleSlideTitle,
                                    children: [
                                        null == l ? void 0 : l.name,
                                        ' ',
                                        o
                                    ]
                                })
                            ]
                        })
                    }, a);
                })
            })
        });
    }, el = e => {
        let {
            product: t,
            user: i
        } = e;
        return (0, R.x6)(t) ? (0, n.jsx)(ea, {
            product: t,
            user: i
        }) : t.items.length > 0 ? (0, n.jsx)(es, {
            item: t.items[0],
            user: i
        }) : null;
    }, er = e => {
        var t, i;
        let {
                product: a,
                user: r,
                category: _,
                onClose: f,
                returnRef: x
            } = e, {analyticsLocations: T} = (0, L.ZP)(), h = w.ZP.canUseCollectibles(r), {
                isPurchased: p,
                isPartiallyPurchased: S
            } = (0, k.L)(a), A = (0, d.e7)([M.Z], () => M.Z.isClaiming === a.skuId), b = (0, N.Z)({ analyticsLocations: T }), j = (0, I.ZP)(), Z = (0, u.wj)(j), F = (0, R.G1)(a), H = (0, R.ql)(a, $.tuJ.DEFAULT), G = (null == H ? void 0 : H.amount) === 0, {
                firstAvatarDecoration: q,
                firstProfileEffect: Q
            } = (0, U.R)(a), J = s.useMemo(() => (0, R.BH)(a, h), [
                a,
                h
            ]), es = s.useCallback(() => {
                if (f(), (0, m.xf)(), b(), null != q) {
                    (0, v.ps)({
                        initialSelectedDecoration: q,
                        analyticsLocations: T
                    });
                    return;
                }
                null != Q && (0, O.H)({
                    initialSelectedEffectId: Q.id,
                    analyticsLocations: T
                });
            }, [
                T,
                q,
                Q,
                f,
                b
            ]);
        s.useEffect(() => {
            if (null != q)
                return (0, E.cV)(q), () => (0, E.cV)(void 0);
        }, [q]);
        let ea = e => (0, n.jsx)(g.Z, {
                subscriptionTier: ee.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: K.v,
                onSubscribeModalClose: () => {
                    (0, K.T)({
                        product: a,
                        category: _,
                        returnRef: x,
                        analyticsLocations: T
                    });
                }
            }), {
                firstAvatarDecoration: er,
                firstProfileEffect: eo
            } = (0, D.k)(a), ec = a.type === c.Z.BUNDLE ? ei.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
                avatarDecorationName: null !== (t = null == er ? void 0 : er.name) && void 0 !== t ? t : '',
                profileEffectName: null !== (i = null == eo ? void 0 : eo.name) && void 0 !== i ? i : ''
            }) : a.summary;
        return (0, n.jsxs)('div', {
            className: en.collectibleInfoContainer,
            children: [
                (0, n.jsx)('div', {
                    className: en.titleContainer,
                    children: (0, n.jsx)(W.Z, {
                        category: _,
                        display: 'modal'
                    })
                }),
                (0, n.jsx)(el, {
                    product: a,
                    user: r
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsxs)('div', {
                            className: en.description,
                            children: [
                                (0, n.jsx)(V.Z, {
                                    product: a,
                                    isDarkText: !Z
                                }),
                                (0, n.jsx)(C.Heading, {
                                    variant: 'heading-xl/extrabold',
                                    className: en.headingWithItemTypePill,
                                    children: a.name
                                }),
                                (0, n.jsx)(C.Text, {
                                    variant: 'text-sm/normal',
                                    children: ec
                                }),
                                p || S ? (0, n.jsx)(y.U, {
                                    className: en.priceTag,
                                    isPartiallyPurchased: S
                                }) : F ? (0, n.jsx)(C.Text, {
                                    variant: 'text-md/semibold',
                                    className: en.priceTag,
                                    children: ei.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                }) : (0, n.jsx)(Y.Z, {
                                    product: a,
                                    discount: J,
                                    isPremiumUser: h,
                                    className: h ? en.priceTag : en.priceTagContainer,
                                    nitroUpsell: !h
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: en.buttonsContainer,
                            children: (0, n.jsxs)('div', {
                                className: en.primaryButtons,
                                children: [
                                    !F || h || G ? p ? (0, n.jsx)(C.Button, {
                                        className: en.button,
                                        look: C.Button.Looks.FILLED,
                                        onClick: es,
                                        children: ei.Z.Messages.COLLECTIBLES_USE_NOW
                                    }) : S ? null : F ? (0, n.jsx)(C.Button, {
                                        className: en.button,
                                        look: C.Button.Looks.FILLED,
                                        submitting: A,
                                        submittingStartedLabel: ei.Z.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: ei.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, B.fK)(a.skuId), f(), (0, X.Z)({
                                                product: a,
                                                analyticsLocations: T
                                            });
                                        },
                                        children: ei.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, n.jsx)(C.Button, {
                                        className: en.button,
                                        look: C.Button.Looks.FILLED,
                                        onClick: () => (0, P.Z)({
                                            skuId: a.skuId,
                                            analyticsLocations: T,
                                            onClose: e => e ? f() : (0, et.dG)()
                                        }),
                                        children: (0, R.x6)(a) ? ei.Z.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : a.type === c.Z.PROFILE_EFFECT ? ei.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : ei.Z.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : ea(ei.Z.Messages.UNLOCK_WITH_NITRO),
                                    !F && !G && !o.tq && (0, n.jsx)(z.Z, {
                                        product: a,
                                        onSuccess: f,
                                        disableCustomColor: !0
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(C.Text, {
                            className: l()(en.disclaimer, !Z && en.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: p ? null : F ? ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, R.x6)(a) ? ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER : a.type === c.Z.PROFILE_EFFECT ? ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
                        })
                    ]
                })
            ]
        });
    }, eo = e => {
        let {
                product: t,
                user: i
            } = e, s = w.ZP.canUsePremiumProfileCustomization(i), a = (0, d.cj)([b.Z], () => b.Z.getAllPending()), l = t.type === c.Z.AVATAR_DECORATION, [r] = t.items, {
                firstAvatarDecoration: o,
                firstProfileEffect: u
            } = (0, U.R)(t), C = null != u;
        return (0, n.jsxs)('div', {
            className: (null == r ? void 0 : r.type) === c.Z.AVATAR_DECORATION ? en.previewsContainerInner : en.profileEffectPreviewsContainerInner,
            children: [
                (0, n.jsx)(S.Z, {
                    ...a,
                    user: i,
                    canUsePremiumCustomization: s,
                    pendingAvatarDecoration: o,
                    pendingProfileEffectId: null == u ? void 0 : u.id,
                    disabledInputs: !0,
                    hideMessageInput: !C,
                    hideExampleButton: !0,
                    hideCustomStatus: !0,
                    hideBioSection: l
                }),
                l && (0, n.jsx)(ed, { user: i })
            ]
        });
    }, ec = e => {
        let {author: t} = e;
        return (0, x.e5)({
            ...(0, T.ZP)({
                author: t,
                channelId: '1337',
                content: ei.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
            }),
            state: $.yb.SENT,
            id: '0'
        });
    }, ed = e => {
        let {user: t} = e, i = ec({ author: t });
        return (0, n.jsx)(C.FocusBlock, {
            children: (0, n.jsxs)(C.Card, {
                className: en.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, n.jsx)(p.Z, {
                        className: en.mockMessage,
                        author: (0, h.ZH)(i),
                        message: i
                    }, i.id),
                    (0, n.jsxs)('div', {
                        className: en.mockInput,
                        children: [
                            (0, n.jsx)(C.CirclePlusIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: en.mockInputButton
                            }),
                            (0, n.jsx)(C.ReactionIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: en.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    };
t.default = e => {
    var t, i;
    let {
            transitionState: a,
            onClose: l,
            product: r,
            category: o,
            returnRef: u,
            analyticsSource: m,
            analyticsLocations: E
        } = e, _ = (0, d.e7)([j.default], () => j.default.getCurrentUser()), {analyticsLocations: I} = (0, L.ZP)([
            ...E,
            f.Z.COLLECTIBLES_SHOP_DETAILS_MODAL
        ]);
    (0, H.u9)(r);
    let [v] = r.items;
    return (s.useEffect(() => {
        let e = (null == v ? void 0 : v.type) === c.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
        Z.default.track($.rMx.OPEN_MODAL, {
            type: $.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: m,
            location_stack: I,
            sku_id: r.skuId,
            product_type: e
        }), r.items.map(B.oK);
    }, [
        m,
        I,
        r.skuId,
        r.items,
        null == v ? void 0 : v.type
    ]), null == _) ? null : (0, n.jsx)(L.Gt, {
        value: I,
        children: (0, n.jsx)(C.ModalRoot, {
            hideShadow: !0,
            className: en.modalRoot,
            returnRef: u,
            transitionState: a,
            size: C.ModalSize.DYNAMIC,
            children: (0, n.jsxs)(C.ModalContent, {
                className: en.modalContent,
                children: [
                    (0, n.jsx)(er, {
                        user: _,
                        product: r,
                        category: o,
                        onClose: l
                    }),
                    (0, n.jsxs)('div', {
                        className: r.type === c.Z.AVATAR_DECORATION ? en.collectiblePreviewsContainerWithChat : en.collectiblePreviewsContainerNoChat,
                        children: [
                            (0, n.jsx)(F.Z, {
                                asset: null !== (i = o.pdpBg) && void 0 !== i ? i : r.banner,
                                addGradient: null === (t = J.Ve[o.skuId]) || void 0 === t ? void 0 : t.addGradient,
                                size: (0, q.ML)(540),
                                className: en.categoryBanner,
                                blur: !0
                            }),
                            (0, n.jsx)(eo, {
                                user: _,
                                product: r
                            }),
                            (0, n.jsxs)('div', {
                                className: en.profilePreviewHeader,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: en.titleImageContainer,
                                        children: (0, n.jsx)('img', {
                                            className: en.titleImage,
                                            src: (0, R.uV)(o.logo, { size: G.n }),
                                            alt: o.name
                                        })
                                    }),
                                    (0, n.jsx)(C.ModalCloseButton, {
                                        onClick: l,
                                        className: en.modalCloseButton,
                                        withCircleBackground: !0
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

n.d(t, {
    S: function () {
        return E;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    C = n(204418),
    d = n(628952),
    u = n(314404),
    c = n(594174),
    p = n(626135),
    x = n(987209),
    _ = n(563132),
    f = n(409813),
    h = n(614277),
    j = n(981631),
    m = n(388032),
    L = n(732721);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: E, step: S } = (0, _.usePaymentContext)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: I, claimableRewards: M } = (0, x.wD)(),
        v = (0, a.e7)([c.default], () => c.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != M && M.length > 0;
        null == I && e && g(M[0]);
    }, [M, I, g]);
    let y = (e) => {
        let t = e.skuId;
        return (0, i.jsx)(
            d.Z,
            {
                skuId: t,
                price: m.intl.string(m.t.QQsaCQ),
                isSelected: t === (null == I ? void 0 : I.skuId),
                onSelect: () => g(e),
                className: L.giftSelectItem
            },
            t
        );
    };
    return (
        r()(null != s, 'Expected plan to selected'),
        r()(null != E, 'Expected selectedSkuId'),
        r()(null != S, 'Step should be set'),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: L.stepBodySkuSelect,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.bodyColumnLeft,
                            children: [
                                (0, i.jsx)('div', {
                                    className: L.header,
                                    children: (0, i.jsx)(o.Heading, {
                                        variant: 'heading-lg/bold',
                                        color: 'header-primary',
                                        children: m.intl.string(m.t['Rp0+ZG'])
                                    })
                                }),
                                null == M ? void 0 : M.map((e) => y(e))
                            ]
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: n,
                            className: L.closeButton
                        }),
                        (0, i.jsx)('div', {
                            className: L.bodyColumnRight,
                            children:
                                null != I &&
                                null != v &&
                                (0, i.jsx)(C.Z, {
                                    avatarDecorationOverride: { asset: I.assetId },
                                    user: v,
                                    guildId: null,
                                    avatarSize: o.AvatarSizes.SIZE_152
                                })
                        })
                    ]
                }),
                (0, i.jsx)(h.O3, {
                    children: (0, i.jsx)(o.ModalFooter, {
                        className: L.modalFooter,
                        children: (0, i.jsx)(u.y, {
                            onStepChange: (e) => {
                                null != v &&
                                    null != I &&
                                    p.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                        user_id: v.id,
                                        reward_sku_id: I.skuId
                                    }),
                                    t(e);
                            },
                            onBackClick: () => t(f.h8.PLAN_SELECT),
                            shouldRenderUpdatedPaymentModal: !0,
                            showBackButton: !0,
                            planOptions: [s.id],
                            selectedPlanId: s.id
                        })
                    })
                })
            ]
        })
    );
}

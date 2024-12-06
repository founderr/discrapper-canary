n.d(t, {
    S: function () {
        return g;
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
    h = n(563132),
    f = n(409813),
    _ = n(614277),
    j = n(981631),
    L = n(388032),
    m = n(732721);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: g, step: E } = (0, h.usePaymentContext)(),
        { setSelectedGiftingPromotionReward: S, selectedGiftingPromotionReward: y, claimableRewards: M } = (0, x.wD)(),
        I = (0, a.e7)([c.default], () => c.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != M && M.length > 0;
        null == y && e && S(M[0]);
    }, [M, y, S]);
    let Z = (e) => {
        let t = e.skuId;
        return (0, i.jsx)(
            d.Z,
            {
                skuId: t,
                price: L.intl.string(L.t.QQsaCQ),
                isSelected: t === (null == y ? void 0 : y.skuId),
                onSelect: () => S(e),
                className: m.giftSelectItem
            },
            t
        );
    };
    return (
        r()(null != s, 'Expected plan to selected'),
        r()(null != g, 'Expected selectedSkuId'),
        r()(null != E, 'Step should be set'),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: m.stepBodySkuSelect,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.bodyColumnLeft,
                            children: [
                                (0, i.jsx)('div', {
                                    className: m.header,
                                    children: (0, i.jsx)(o.Heading, {
                                        variant: 'heading-lg/bold',
                                        color: 'header-primary',
                                        children: L.intl.string(L.t['Rp0+ZG'])
                                    })
                                }),
                                null == M ? void 0 : M.map((e) => Z(e))
                            ]
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: n,
                            className: m.closeButton
                        }),
                        (0, i.jsx)('div', {
                            className: m.bodyColumnRight,
                            children:
                                null != y &&
                                null != I &&
                                (0, i.jsx)(C.Z, {
                                    avatarDecorationOverride: { asset: y.assetId },
                                    user: I,
                                    guildId: null,
                                    avatarSize: o.AvatarSizes.SIZE_152
                                })
                        })
                    ]
                }),
                (0, i.jsx)(_.O3, {
                    children: (0, i.jsx)(o.ModalFooter, {
                        className: m.modalFooter,
                        children: (0, i.jsx)(u.y, {
                            onStepChange: (e) => {
                                null != I &&
                                    null != y &&
                                    p.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                        user_id: I.id,
                                        reward_sku_id: y.skuId
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

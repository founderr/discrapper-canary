n.d(t, {
    S: function () {
        return L;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    C = n(481060),
    o = n(204418),
    d = n(628952),
    u = n(314404),
    c = n(594174),
    p = n(987209),
    x = n(563132),
    h = n(409813),
    f = n(614277),
    _ = n(388032),
    j = n(732721);
function L(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: L, step: m } = (0, x.usePaymentContext)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: E, claimableRewards: S } = (0, p.wD)(),
        y = (0, a.e7)([c.default], () => c.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != S && S.length > 0;
        null == E && e && g(S[0]);
    }, [S, E, g]);
    let M = (e) => {
        let t = e.skuId;
        return (0, i.jsx)(
            'div',
            {
                className: j.giftSelectItem,
                children: (0, i.jsx)(d.Z, {
                    skuId: t,
                    price: _.intl.string(_.t.QQsaCQ),
                    isSelected: t === (null == E ? void 0 : E.skuId),
                    onSelect: () => g(e)
                })
            },
            t
        );
    };
    return (
        r()(null != s, 'Expected plan to selected'),
        r()(null != L, 'Expected selectedSkuId'),
        r()(null != m, 'Step should be set'),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: j.stepBodySkuSelect,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.bodyColumnLeft,
                            children: [
                                (0, i.jsx)('div', {
                                    className: j.header,
                                    children: (0, i.jsx)(C.Heading, {
                                        variant: 'heading-lg/bold',
                                        color: 'header-primary',
                                        children: _.intl.string(_.t['Rp0+ZG'])
                                    })
                                }),
                                null == S ? void 0 : S.map((e) => M(e))
                            ]
                        }),
                        (0, i.jsx)(C.ModalCloseButton, {
                            onClick: n,
                            className: j.closeButton
                        }),
                        (0, i.jsx)('div', {
                            className: j.bodyColumnRight,
                            children:
                                null != E &&
                                null != y &&
                                (0, i.jsx)(o.Z, {
                                    avatarDecorationOverride: { asset: E.assetId },
                                    user: y,
                                    guildId: null
                                })
                        })
                    ]
                }),
                (0, i.jsx)(f.O3, {
                    children: (0, i.jsx)(C.ModalFooter, {
                        className: j.modalFooter,
                        children: (0, i.jsx)(u.y, {
                            onStepChange: t,
                            onBackClick: () => t(h.h8.PLAN_SELECT),
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

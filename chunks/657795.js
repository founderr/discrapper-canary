n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(104494),
    _ = n(639119),
    E = n(165583),
    f = n(626135),
    h = n(453070),
    p = n(926491),
    I = n(419922),
    m = n(27733),
    T = n(611480),
    S = n(981631),
    g = n(474936),
    A = n(689938),
    N = n(380086);
function R(e) {
    var t, n, a;
    let { className: R, onClose: O } = e;
    (0, h.fP)();
    let { analyticsLocations: v } = (0, c.ZP)(u.Z.EMPTY_STATE),
        C = (0, o.Wu)([p.Z], () => T.Wt.map((e) => p.Z.getStickerById(e)));
    i.useEffect(() => {
        f.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
            type: g.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: S.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: v
        });
    }, [v]);
    let L = (0, _.N)(),
        y = (0, d.Ng)(),
        D = null != L || null != y,
        b = (null == L ? void 0 : null === (t = L.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === g.Si.TIER_0;
    return (0, r.jsxs)('div', {
        className: s()(N.emptyState, R, { [N.unifyTrialUpsell]: D }),
        children: [
            D
                ? (0, r.jsx)(E.ZP, {
                      discountOffer: y,
                      trialOffer: L,
                      onClose: O,
                      type: g.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (a = null == L ? void 0 : null === (n = L.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : g.Si.TIER_2,
                      children: A.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: N.header,
                              variant: 'heading-xl/semibold',
                              children: A.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                          }),
                          (0, r.jsx)(l.Text, {
                              className: N.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: A.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                          }),
                          (0, r.jsx)('div', {
                              className: N.stickersRow,
                              children: C.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      I.ZP,
                                      {
                                          sticker: e,
                                          className: N.sticker,
                                          size: 80
                                      },
                                      null == e ? void 0 : e.id
                                  )
                              )
                          })
                      ]
                  }),
            !D &&
                (0, r.jsx)(m.Z, {
                    analyticsSection: S.jXE.EXPRESSION_PICKER,
                    buttonText: D ? (b ? A.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : A.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT) : void 0
                })
        ]
    });
}

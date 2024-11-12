n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(104494),
    f = n(639119),
    _ = n(165583),
    p = n(626135),
    h = n(453070),
    m = n(926491),
    g = n(419922),
    E = n(27733),
    v = n(611480),
    I = n(981631),
    b = n(474936),
    S = n(388032),
    T = n(380086);
function y(e) {
    var t, n, a;
    let { className: y, onClose: A } = e;
    (0, h.fP)();
    let { analyticsLocations: N } = (0, c.ZP)(u.Z.EMPTY_STATE),
        C = (0, o.Wu)([m.Z], () => v.Wt.map((e) => m.Z.getStickerById(e)));
    i.useEffect(() => {
        p.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
            type: b.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: I.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: N
        });
    }, [N]);
    let R = (0, f.N)(),
        O = (0, d.Ng)(),
        D = null != R || null != O,
        L = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === b.Si.TIER_0;
    return (0, r.jsxs)('div', {
        className: s()(T.emptyState, y, { [T.unifyTrialUpsell]: D }),
        children: [
            D
                ? (0, r.jsx)(_.ZP, {
                      discountOffer: O,
                      trialOffer: R,
                      onClose: A,
                      type: b.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (a = null == R ? void 0 : null === (n = R.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : b.Si.TIER_2,
                      children: S.intl.string(S.t.FnNud3)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: T.header,
                              variant: 'heading-xl/semibold',
                              children: S.intl.string(S.t.HEm04O)
                          }),
                          (0, r.jsx)(l.Text, {
                              className: T.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: S.intl.string(S.t.FnNud3)
                          }),
                          (0, r.jsx)('div', {
                              className: T.stickersRow,
                              children: C.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      g.ZP,
                                      {
                                          sticker: e,
                                          className: T.sticker,
                                          size: 80
                                      },
                                      null == e ? void 0 : e.id
                                  )
                              )
                          })
                      ]
                  }),
            !D &&
                (0, r.jsx)(E.Z, {
                    analyticsSection: I.jXE.EXPRESSION_PICKER,
                    buttonText: D ? (L ? S.intl.string(S.t.hz78hI) : S.intl.string(S.t['Gd/XHB'])) : void 0
                })
        ]
    });
}

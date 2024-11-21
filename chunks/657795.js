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
    b = n(981631),
    I = n(474936),
    T = n(388032),
    S = n(380086);
function y(e) {
    var t, n, a;
    let { className: y, onClose: A } = e;
    (0, h.fP)();
    let { analyticsLocations: N } = (0, c.ZP)(u.Z.EMPTY_STATE),
        C = (0, o.Wu)([m.Z], () => v.Wt.map((e) => m.Z.getStickerById(e)));
    i.useEffect(() => {
        p.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
            type: I.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: b.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: N
        });
    }, [N]);
    let R = (0, f.N)(),
        O = (0, d.Ng)(),
        D = null != R || null != O,
        L = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === I.Si.TIER_0;
    return (0, r.jsxs)('div', {
        className: s()(S.emptyState, y, { [S.unifyTrialUpsell]: D }),
        children: [
            D
                ? (0, r.jsx)(_.ZP, {
                      discountOffer: O,
                      trialOffer: R,
                      onClose: A,
                      type: I.cd.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: null !== (a = null == R ? void 0 : null === (n = R.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : I.Si.TIER_2,
                      children: T.intl.string(T.t.FnNud3)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: S.header,
                              variant: 'heading-xl/semibold',
                              children: T.intl.string(T.t.HEm04O)
                          }),
                          (0, r.jsx)(l.Text, {
                              className: S.subtitle,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: T.intl.string(T.t.FnNud3)
                          }),
                          (0, r.jsx)('div', {
                              className: S.stickersRow,
                              children: C.filter((e) => null != e).map((e) =>
                                  (0, r.jsx)(
                                      g.ZP,
                                      {
                                          sticker: e,
                                          className: S.sticker,
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
                    analyticsSection: b.jXE.EXPRESSION_PICKER,
                    buttonText: D ? (L ? T.intl.string(T.t.hz78hI) : T.intl.string(T.t['Gd/XHB'])) : void 0
                })
        ]
    });
}

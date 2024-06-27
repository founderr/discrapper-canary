"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(100527),
  _ = n(906732),
  c = n(104494),
  d = n(639119),
  E = n(165583),
  I = n(626135),
  T = n(453070),
  h = n(926491),
  f = n(419922),
  S = n(27733),
  A = n(611480),
  N = n(981631),
  m = n(474936),
  O = n(689938),
  R = n(317510);

function p(e) {
  var t, n, s;
  let {
    className: p,
    onClose: g
  } = e;
  (0, T.fP)();
  let {
    analyticsLocations: C
  } = (0, _.ZP)(u.Z.EMPTY_STATE), v = (0, a.Wu)([h.Z], () => A.Wt.map(e => h.Z.getStickerById(e)));
  r.useEffect(() => {
    I.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
      type: m.cd.EMPTY_STICKER_PICKER_UPSELL,
      source: {
        section: N.jXE.EMPTY_STICKER_PICKER_UPSELL
      },
      location_stack: C
    })
  }, [C]);
  let L = (0, d.N)(),
    D = (0, c.Ng)(),
    M = null != L || null != D,
    P = (null == L ? void 0 : null === (t = L.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_0;
  return (0, i.jsxs)("div", {
    className: o()(R.emptyState, p, {
      [R.unifyTrialUpsell]: M
    }),
    children: [M ? (0, i.jsx)(E.ZP, {
      discountOffer: D,
      trialOffer: L,
      onClose: g,
      type: m.cd.EMPTY_STICKER_PICKER_UPSELL,
      subscriptionTier: null !== (s = null == L ? void 0 : null === (n = L.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : m.Si.TIER_2,
      children: O.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.Heading, {
        className: R.header,
        variant: "heading-xl/semibold",
        children: O.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
      }), (0, i.jsx)(l.Text, {
        className: R.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: O.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
      }), (0, i.jsx)("div", {
        className: R.stickersRow,
        children: v.filter(e => null != e).map(e => (0, i.jsx)(f.ZP, {
          sticker: e,
          className: R.sticker,
          size: 80
        }, null == e ? void 0 : e.id))
      })]
    }), !M && (0, i.jsx)(S.Z, {
      analyticsSection: N.jXE.EXPRESSION_PICKER,
      buttonText: M ? P ? O.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : O.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
    })]
  })
}
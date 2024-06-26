"use strict";
n.d(t, {
  C: function() {
    return p
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(100527),
  u = n(906732),
  _ = n(104494),
  c = n(639119),
  d = n(165583),
  E = n(626135),
  I = n(74538),
  T = n(191177),
  h = n(27733),
  f = n(981631),
  S = n(474936),
  N = n(689938),
  A = n(30785),
  m = n(867250);
let O = () => (0, T.f)(!1),
  p = e => {
    var t, n, s;
    let {
      onLearnMore: T
    } = e, {
      analyticsLocations: p
    } = (0, u.ZP)(l.Z.PREMIUM_UPSELL);
    r.useEffect(() => {
      E.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
        location_section: f.jXE.STICKER_PICKER_UPSELL,
        type: S.cd.STICKER_PICKER_UPSELL,
        location_stack: p
      })
    }, [p]);
    let R = (0, c.N)(),
      g = (0, _.Ng)(),
      C = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.Si.TIER_0,
      v = null != R || null != g;
    return (0, i.jsxs)("div", {
      className: o()(A.upsellWrapper, {
        [A.unifyTrialUpsell]: v
      }),
      children: [v ? (0, i.jsx)(d.ZP, {
        trialOffer: R,
        discountOffer: g,
        onClose: O,
        type: S.cd.STICKER_PICKER_UPSELL,
        subscriptionTier: null !== (s = null == R ? void 0 : null === (n = R.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : S.Si.TIER_2,
        children: C ? N.Z.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
          planName: (0, I.aq)(S.Xh.PREMIUM_MONTH_TIER_0),
          onClick: T
        }) : N.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
          onClick: T
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          className: A.upsellImage,
          src: m,
          alt: N.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
        }), (0, i.jsx)(a.Text, {
          className: A.upsellTitle,
          color: "header-primary",
          variant: "text-lg/semibold",
          children: N.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
        }), (0, i.jsx)(a.Text, {
          className: A.upsellDescription,
          variant: "text-md/normal",
          children: N.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
            onClick: T
          })
        })]
      }), !v && (0, i.jsx)(h.Z, {
        analyticsSection: f.jXE.EXPRESSION_PICKER,
        buttonText: v ? C ? N.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : N.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
      }), (0, i.jsx)(a.Clickable, {
        className: A.upsellClose,
        onClick: O,
        children: (0, i.jsx)(a.CloseSmallIcon, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  }
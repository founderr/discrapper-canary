"use strict";
n.r(t), n.d(t, {
  openGiftCodeAcceptModal: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("594174"),
  i = n("78839"),
  r = n("585483"),
  o = n("74538"),
  u = n("138464"),
  d = n("474936"),
  c = n("981631");

function E(e) {
  let {
    processedCode: t,
    channelContext: E,
    customGiftMessage: f,
    giftInfo: _
  } = e, T = !1, I = null, m = a.default.getCurrentUser(), N = (0, o.isPremiumAtLeast)(null == m ? void 0 : m.premiumType, d.PremiumTypes.TIER_0);
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("92446"), n.e("72760")]).then(n.bind(n, "409858"));
    return n => {
      var l, a;
      return (0, s.jsx)(e, {
        code: t,
        channelContext: E,
        customGiftMessage: f,
        emojiName: null == _ ? void 0 : null === (l = _.emoji) || void 0 === l ? void 0 : l.name,
        soundId: null == _ ? void 0 : null === (a = _.sound) || void 0 === a ? void 0 : a.id,
        onComplete: (e, t) => {
          I = e, t && (T = t, e.isSubscription && null == i.default.getPremiumSubscription(!1) && (0, u.setCanPlayWowMoment)(!0))
        },
        ...n
      })
    }
  }, {
    onCloseCallback: () => {
      var e;
      T && null != I && !N && I.isSubscription && (null == I ? void 0 : null === (e = I.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.PremiumTypes.TIER_2 && r.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}
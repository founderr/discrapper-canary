n.d(t, {
  V: function() {
    return E
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(594174),
  a = n(78839),
  r = n(585483),
  o = n(74538),
  c = n(138464),
  u = n(474936),
  d = n(981631);

function E(e) {
  let {
    processedCode: t,
    channelContext: E,
    customGiftMessage: _,
    giftInfo: I
  } = e, T = !1, m = null, N = l.default.getCurrentUser(), h = (0, o.yd)(null == N ? void 0 : N.premiumType, u.p9.TIER_0);
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("92446"), n.e("72760")]).then(n.bind(n, 409858));
    return n => {
      var i, l;
      return (0, s.jsx)(e, {
        code: t,
        channelContext: E,
        customGiftMessage: _,
        emojiName: null == I ? void 0 : null === (i = I.emoji) || void 0 === i ? void 0 : i.name,
        soundId: null == I ? void 0 : null === (l = I.sound) || void 0 === l ? void 0 : l.id,
        onComplete: (e, t) => {
          m = e, t && (T = t, e.isSubscription && null == a.ZP.getPremiumSubscription(!1) && (0, c.H)(!0))
        },
        ...n
      })
    }
  }, {
    onCloseCallback: () => {
      var e;
      T && null != m && !h && m.isSubscription && (null == m ? void 0 : null === (e = m.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === u.p9.TIER_2 && r.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}
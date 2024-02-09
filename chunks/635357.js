"use strict";
n.r(t), n.d(t, {
  GiftContextProvider: function() {
    return _
  },
  useGiftContext: function() {
    return S
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  a = n("210721"),
  r = n("53253"),
  s = n("105097"),
  u = n("659632"),
  o = n("642906"),
  c = n("646718"),
  d = n("782340");
let f = c.PremiumGiftStyles.STANDARD_BOX,
  p = void 0,
  [I, S, h] = (0, s.default)();

function _(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: s,
    children: S
  } = e, {
    selectedSkuId: h
  } = (0, o.usePaymentContext)(), [_, T] = l.useState(n), [C, E] = l.useState(), [A, m] = l.useState(!1), g = (0, u.shouldShowCustomGiftExperience)(_), N = (0, r.useIsSeasonalGiftingActive)(), {
    enabled: O
  } = r.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: g && N
  }), [R, L] = l.useState(g ? O && N ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [P, b] = l.useState(t && u.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, u.getGiftExperience)(_)) ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : s), [v, y] = l.useState(void 0), [F, D] = l.useState(void 0), x = (0, u.useGetGiftCode)(h, t), [G, M] = l.useState(!1), [w, H] = l.useState(!1), [U, k] = l.useState(), j = l.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return H(!0), (0, a.sendGiftMessage)(_, x).then(() => {
      H(!1), null == t || t(), M(!0)
    }).catch(e => {
      H(!1), k(e), M(!0)
    })
  }, [_, x, H, M, k]);
  return (0, i.jsx)(I.Provider, {
    value: {
      isGift: t,
      giftCode: x,
      giftMessage: s,
      giftRecipient: _,
      setGiftRecipient: T,
      giftRecipientError: C,
      setGiftRecipientError: E,
      validatingGiftRecipient: A,
      setValidatingGiftRecipient: m,
      soundEffect: v,
      setSoundEffect: y,
      emojiConfetti: F,
      setEmojiConfetti: D,
      customGiftMessage: P,
      setCustomGiftMessage: b,
      selectedGiftStyle: R,
      setSelectedGiftStyle: L,
      sendGiftMessage: j,
      hasSentMessage: G,
      isSendingMessage: w,
      giftMessageError: U
    },
    children: S
  })
}
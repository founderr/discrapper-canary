"use strict";
n.r(e), n.d(e, {
  GiftContextProvider: function() {
    return h
  },
  useGiftContext: function() {
    return S
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  a = n("210721"),
  r = n("53253"),
  u = n("105097"),
  s = n("659632"),
  o = n("642906"),
  c = n("646718"),
  d = n("782340");
let f = c.PremiumGiftStyles.STANDARD_BOX,
  p = void 0,
  [I, S, T] = (0, u.default)();

function h(t) {
  let {
    isGift: e = !1,
    giftRecipient: n,
    giftMessage: u,
    children: S
  } = t, {
    selectedSkuId: T
  } = (0, o.usePaymentContext)(), [h, _] = l.useState(n), [E, C] = l.useState(), [A, m] = l.useState(!1), N = (0, s.shouldShowCustomGiftExperience)(h), g = (0, r.useIsSeasonalGiftingActive)(), {
    enabled: L
  } = r.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: N && g
  }), [O, R] = l.useState(N ? L && g ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [F, P] = l.useState(e && s.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, s.getGiftExperience)(h)) ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : u), [v, b] = l.useState(void 0), [y, D] = l.useState(void 0), H = (0, s.useGetGiftCode)(T, e), [G, x] = l.useState(!1), [M, w] = l.useState(!1), [U, k] = l.useState(), j = l.useCallback(t => {
    let {
      onSubscriptionConfirmation: e
    } = t;
    return w(!0), (0, a.sendGiftMessage)(h, H).then(() => {
      w(!1), null == e || e(), x(!0)
    }).catch(t => {
      w(!1), k(t), x(!0)
    })
  }, [h, H, w, x, k]);
  return (0, i.jsx)(I.Provider, {
    value: {
      isGift: e,
      giftCode: H,
      giftMessage: u,
      giftRecipient: h,
      setGiftRecipient: _,
      giftRecipientError: E,
      setGiftRecipientError: C,
      validatingGiftRecipient: A,
      setValidatingGiftRecipient: m,
      soundEffect: v,
      setSoundEffect: b,
      emojiConfetti: y,
      setEmojiConfetti: D,
      customGiftMessage: F,
      setCustomGiftMessage: P,
      selectedGiftStyle: O,
      setSelectedGiftStyle: R,
      sendGiftMessage: j,
      hasSentMessage: G,
      isSendingMessage: M,
      giftMessageError: U
    },
    children: S
  })
}
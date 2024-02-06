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
  r = n("884691"),
  l = n("210721"),
  a = n("53253"),
  s = n("105097"),
  u = n("659632"),
  o = n("642906"),
  c = n("646718"),
  d = n("782340");
let f = c.PremiumGiftStyles.STANDARD_BOX,
  p = void 0,
  [h, S, m] = (0, s.default)();

function _(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: s,
    children: S
  } = e, {
    selectedSkuId: m
  } = (0, o.usePaymentContext)(), [_, I] = r.useState(n), [E, T] = r.useState(), [C, g] = r.useState(!1), A = (0, u.shouldShowCustomGiftExperience)(_), N = (0, a.useIsSeasonalGiftingActive)(), {
    enabled: v
  } = a.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: A && N
  }), [b, L] = r.useState(A ? v && N ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [O, P] = r.useState(t && u.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, u.getGiftExperience)(_)) ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : s), [x, F] = r.useState(void 0), [R, y] = r.useState(void 0), k = (0, u.useGetGiftCode)(m, t), [G, H] = r.useState(!1), [M, w] = r.useState(!1), [D, j] = r.useState(), U = r.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return w(!0), (0, l.sendGiftMessage)(_, k).then(() => {
      w(!1), null == t || t(), H(!0)
    }).catch(e => {
      w(!1), j(e), H(!0)
    })
  }, [_, k, w, H, j]);
  return (0, i.jsx)(h.Provider, {
    value: {
      isGift: t,
      giftCode: k,
      giftMessage: s,
      giftRecipient: _,
      setGiftRecipient: I,
      giftRecipientError: E,
      setGiftRecipientError: T,
      validatingGiftRecipient: C,
      setValidatingGiftRecipient: g,
      soundEffect: x,
      setSoundEffect: F,
      emojiConfetti: R,
      setEmojiConfetti: y,
      customGiftMessage: O,
      setCustomGiftMessage: P,
      selectedGiftStyle: b,
      setSelectedGiftStyle: L,
      sendGiftMessage: U,
      hasSentMessage: G,
      isSendingMessage: M,
      giftMessageError: D
    },
    children: S
  })
}
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
  a = n("78345"),
  s = n("53253"),
  u = n("105097"),
  o = n("659632"),
  c = n("642906"),
  d = n("782340");
let f = a.PremiumGiftStyles.STANDARD_BOX,
  p = void 0,
  [h, S, m] = (0, u.default)();

function _(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: u,
    children: S
  } = e, {
    selectedSkuId: m
  } = (0, c.usePaymentContext)(), [_, I] = r.useState(n), [E, T] = r.useState(), [C, g] = r.useState(!1), A = (0, o.shouldShowCustomGiftExperience)(_), N = (0, s.useIsSeasonalGiftingActive)(), {
    enabled: v
  } = s.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: A && N
  }), [b, L] = r.useState(A ? v && N ? a.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [O, P] = r.useState(t && o.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, o.getGiftExperience)(_)) ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : u), [x, F] = r.useState(void 0), [R, y] = r.useState(void 0), k = (0, o.useGetGiftCode)(m, t), [G, H] = r.useState(!1), [M, j] = r.useState(!1), [w, D] = r.useState(), U = r.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return j(!0), (0, l.sendGiftMessage)(_, k).then(() => {
      j(!1), null == t || t(), H(!0)
    }).catch(e => {
      j(!1), D(e), H(!0)
    })
  }, [_, k, j, H, D]);
  return (0, i.jsx)(h.Provider, {
    value: {
      isGift: t,
      giftCode: k,
      giftMessage: u,
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
      giftMessageError: w
    },
    children: S
  })
}
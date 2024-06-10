"use strict";
n.r(t), n.d(t, {
  GiftContextProvider: function() {
    return P
  },
  useGiftContext: function() {
    return C
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  a = n("479446"),
  i = n("646476"),
  l = n("975104"),
  u = n("669079"),
  o = n("598"),
  c = n("474936"),
  d = n("689938");
let f = c.PremiumGiftStyles.STANDARD_BOX,
  p = void 0,
  [m, C, E] = (0, l.default)();

function P(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: l,
    children: C
  } = e, {
    selectedSkuId: E
  } = (0, o.usePaymentContext)(), [P, S] = r.useState(n), [A, h] = r.useState(), [N, _] = r.useState(!1), y = (0, u.shouldShowCustomGiftExperience)(P), I = (0, i.useIsSeasonalGiftingActive)(), {
    enabled: R
  } = i.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: y && I
  }), [O, M] = r.useState(y ? R && I ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [g, T] = r.useState(t && (0, u.getGiftExperience)(P) === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : l), [L, v] = r.useState(void 0), [x, D] = r.useState(void 0), U = (0, u.useGetGiftCode)(E, t), [G, b] = r.useState(!1), [B, k] = r.useState(!1), [j, Y] = r.useState(), H = r.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return k(!0), (0, a.sendGiftMessage)(P, U).then(() => {
      k(!1), null == t || t(), b(!0)
    }).catch(e => {
      k(!1), Y(e), b(!0)
    })
  }, [P, U, k, b, Y]);
  return (0, s.jsx)(m.Provider, {
    value: {
      isGift: t,
      giftCode: U,
      giftMessage: l,
      giftRecipient: P,
      setGiftRecipient: S,
      giftRecipientError: A,
      setGiftRecipientError: h,
      validatingGiftRecipient: N,
      setValidatingGiftRecipient: _,
      soundEffect: L,
      setSoundEffect: v,
      emojiConfetti: x,
      setEmojiConfetti: D,
      customGiftMessage: g,
      setCustomGiftMessage: T,
      selectedGiftStyle: O,
      setSelectedGiftStyle: M,
      sendGiftMessage: H,
      hasSentMessage: G,
      isSendingMessage: B,
      giftMessageError: j
    },
    children: C
  })
}
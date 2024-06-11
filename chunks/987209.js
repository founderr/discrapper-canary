"use strict";
n.r(t), n.d(t, {
  GiftContextProvider: function() {
    return S
  },
  useGiftContext: function() {
    return P
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  a = n("479446"),
  l = n("646476"),
  u = n("975104"),
  i = n("669079"),
  o = n("598"),
  c = n("474936"),
  d = n("689938");
let f = c.PremiumGiftStyles.STANDARD_BOX,
  C = void 0,
  [E, P, A] = (0, u.default)();

function S(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: u,
    children: P
  } = e, {
    selectedSkuId: A
  } = (0, o.usePaymentContext)(), [S, m] = r.useState(n), [N, p] = r.useState(), [_, I] = r.useState(!1), O = (0, i.shouldShowCustomGiftExperience)(S), y = (0, l.useIsSeasonalGiftingActive)(), {
    enabled: R
  } = l.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: O && y
  }), [M, T] = r.useState(O ? R && y ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : C), [g, L] = r.useState(t && (0, i.getGiftExperience)(S) === i.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : u), [h, x] = r.useState(void 0), [v, D] = r.useState(void 0), U = (0, i.useGetGiftCode)(A, t), [G, k] = r.useState(!1), [B, Y] = r.useState(!1), [j, b] = r.useState(), H = r.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return Y(!0), (0, a.sendGiftMessage)(S, U).then(() => {
      Y(!1), null == t || t(), k(!0)
    }).catch(e => {
      Y(!1), b(e), k(!0)
    })
  }, [S, U, Y, k, b]);
  return (0, s.jsx)(E.Provider, {
    value: {
      isGift: t,
      giftCode: U,
      giftMessage: u,
      giftRecipient: S,
      setGiftRecipient: m,
      giftRecipientError: N,
      setGiftRecipientError: p,
      validatingGiftRecipient: _,
      setValidatingGiftRecipient: I,
      soundEffect: h,
      setSoundEffect: x,
      emojiConfetti: v,
      setEmojiConfetti: D,
      customGiftMessage: g,
      setCustomGiftMessage: L,
      selectedGiftStyle: M,
      setSelectedGiftStyle: T,
      sendGiftMessage: H,
      hasSentMessage: G,
      isSendingMessage: B,
      giftMessageError: j
    },
    children: P
  })
}
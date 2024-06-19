t.d(n, {
  KB: function() {
    return O
  },
  wD: function() {
    return _
  }
}), t(47120);
var r = t(735250),
  s = t(470079),
  l = t(479446),
  o = t(646476),
  a = t(975104),
  i = t(669079),
  u = t(598),
  c = t(474936),
  d = t(689938);
let E = c.Cj.STANDARD_BOX,
  C = void 0,
  [N, _, A] = (0, a.Z)();

function O(e) {
  let {
    isGift: n = !1,
    giftRecipient: t,
    giftMessage: a,
    children: _
  } = e, {
    selectedSkuId: A
  } = (0, u.usePaymentContext)(), [O, f] = s.useState(t), [I, R] = s.useState(), [P, M] = s.useState(!1), p = (0, i.pO)(O), S = (0, o.rK)(), {
    enabled: L
  } = o.ZP.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: p && S
  }), [h, g] = s.useState(p ? L && S ? c.Cj.SEASONAL_STANDARD_BOX : E : C), [Z, m] = s.useState(n && (0, i.MY)(O) === i.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : a), [T, x] = s.useState(void 0), [v, D] = s.useState(void 0), U = (0, i.E5)(A, n), [B, y] = s.useState(!1), [Y, G] = s.useState(!1), [j, H] = s.useState(), k = s.useCallback(e => {
    let {
      onSubscriptionConfirmation: n
    } = e;
    return G(!0), (0, l.Y)(O, U).then(() => {
      G(!1), null == n || n(), y(!0)
    }).catch(e => {
      G(!1), H(e), y(!0)
    })
  }, [O, U, G, y, H]);
  return (0, r.jsx)(N.Provider, {
    value: {
      isGift: n,
      giftCode: U,
      giftMessage: a,
      giftRecipient: O,
      setGiftRecipient: f,
      giftRecipientError: I,
      setGiftRecipientError: R,
      validatingGiftRecipient: P,
      setValidatingGiftRecipient: M,
      soundEffect: T,
      setSoundEffect: x,
      emojiConfetti: v,
      setEmojiConfetti: D,
      customGiftMessage: Z,
      setCustomGiftMessage: m,
      selectedGiftStyle: h,
      setSelectedGiftStyle: g,
      sendGiftMessage: k,
      hasSentMessage: B,
      isSendingMessage: Y,
      giftMessageError: j
    },
    children: _
  })
}
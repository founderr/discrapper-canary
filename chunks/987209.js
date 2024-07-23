t.d(n, {
  KB: function() {
return S;
  },
  wD: function() {
return m;
  }
}), t(47120);
var o = t(735250),
  r = t(470079),
  a = t(479446),
  i = t(646476),
  c = t(975104),
  l = t(669079),
  s = t(598),
  u = t(474936),
  d = t(689938);
let p = u.Cj.STANDARD_BOX,
  _ = void 0,
  [f, m, h] = (0, c.Z)();

function S(e) {
  let {
isGift: n = !1,
giftRecipient: t,
giftMessage: c,
giftStyle: m,
children: h
  } = e, {
selectedSkuId: S
  } = (0, s.usePaymentContext)(), [I, E] = r.useState(t), [g, b] = r.useState(), [P, x] = r.useState(!1), y = (0, l.pO)(I), M = (0, i.rK)(), {
enabled: v
  } = i.ZP.useExperiment({
location: 'PaymentContextProvider'
  }, {
autoTrackExposure: y && M
  }), C = _;
  y && (C = v && M ? u.Cj.SEASONAL_STANDARD_BOX : null != m ? m : p);
  let [N, T] = r.useState(C), [A, R] = r.useState(n && (0, l.MY)(I) === l.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : c), [L, k] = r.useState(void 0), [O, B] = r.useState(void 0), U = (0, l.E5)(S, n), [w, j] = r.useState(!1), [D, Z] = r.useState(!1), [F, W] = r.useState(), G = r.useCallback(e => {
let {
  onSubscriptionConfirmation: n
} = e;
return Z(!0), (0, a.Y)(I, U).then(() => {
  Z(!1), null == n || n(), j(!0);
}).catch(e => {
  Z(!1), W(e), j(!0);
});
  }, [
I,
U,
Z,
j,
W
  ]);
  return (0, o.jsx)(f.Provider, {
value: {
  isGift: n,
  giftCode: U,
  giftMessage: c,
  giftRecipient: I,
  setGiftRecipient: E,
  giftRecipientError: g,
  setGiftRecipientError: b,
  validatingGiftRecipient: P,
  setValidatingGiftRecipient: x,
  soundEffect: L,
  setSoundEffect: k,
  emojiConfetti: O,
  setEmojiConfetti: B,
  customGiftMessage: A,
  setCustomGiftMessage: R,
  selectedGiftStyle: N,
  setSelectedGiftStyle: T,
  sendGiftMessage: G,
  hasSentMessage: w,
  isSendingMessage: D,
  giftMessageError: F
},
children: h
  });
}
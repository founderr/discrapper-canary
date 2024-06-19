s.d(n, {
  q: function() {
    return N
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(481060),
  r = s(987209),
  a = s(321051),
  c = s(669079),
  o = s(479446),
  u = s(646476),
  d = s(981632),
  _ = s(96848),
  m = s(703926),
  I = s(474936),
  E = s(689938),
  p = s(421383);
let N = e => {
  let {
    isShopGift: n
  } = e, {
    giftRecipient: s,
    selectedGiftStyle: N,
    setSelectedGiftStyle: T,
    emojiConfetti: S,
    soundEffect: x,
    setEmojiConfetti: h,
    setSoundEffect: P
  } = (0, r.wD)(), [v, A] = t.useState(!1), f = t.useRef(null), M = (0, i.useRadioGroup)({
    orientation: "horizontal"
  }), g = (0, c.MY)(s, n), C = g === c.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, L = g !== c.xr.DEFAULT, R = (0, u.rK)(), {
    enabled: O
  } = u.ZP.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: R
  }), j = null;
  return L && (j = R && O ? I.V4 : I.QI), (0, l.jsxs)("div", {
    children: [L && (0, l.jsxs)("div", {
      className: p.giftMainAnimation,
      children: [null != N ? (0, l.jsx)(d.Z, {
        giftStyle: N,
        defaultAnimationState: o.S.ACTION,
        idleAnimationState: o.S.LOOP,
        shouldAnimate: !0,
        className: p.animation
      }) : (0, l.jsx)(i.Spinner, {
        className: p.spinner
      }), C && (0, l.jsxs)("div", {
        className: p.soundEmojiContainer,
        children: [(0, l.jsx)("div", {
          className: p.sound,
          children: (0, l.jsx)(a.Z, {
            sound: x,
            onSelect: e => {
              null != P && P(null == e ? void 0 : e)
            }
          })
        }), (0, l.jsx)("div", {
          className: p.emoji,
          children: (0, l.jsx)(_.Z, {
            setEmojiConfetti: h,
            emojiConfetti: null == S ? void 0 : S
          })
        })]
      })]
    }), (0, l.jsx)("div", {
      tabIndex: null != N || v ? void 0 : 0,
      onFocus: e => {
        var n;
        e.target === e.currentTarget && (null === (n = f.current) || void 0 === n || n.focus())
      },
      className: p.giftBoxOptionContainer,
      "aria-label": E.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...M,
      children: null != j && j.map((e, n) => (0, l.jsx)(m.m, {
        isSelected: N === e,
        giftStyle: e,
        setSelectedGiftStyle: T,
        ref: 0 === n ? f : null,
        onFocus: () => A(!0),
        onBlur: () => A(!1)
      }, e))
    }), (0, l.jsx)("div", {
      className: p.__invalid_selectPlanDivider
    })]
  })
}
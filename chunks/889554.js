"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return p
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  l = n("635357"),
  i = n("742926"),
  u = n("659632"),
  c = n("210721"),
  o = n("53253"),
  d = n("65324"),
  f = n("563613"),
  m = n("64798"),
  _ = n("646718"),
  E = n("782340"),
  I = n("421404");
let p = e => {
  let {
    isShopGift: t
  } = e, {
    giftRecipient: n,
    selectedGiftStyle: p,
    setSelectedGiftStyle: N,
    emojiConfetti: S,
    soundEffect: P,
    setEmojiConfetti: T,
    setSoundEffect: A
  } = (0, l.useGiftContext)(), [C, O] = r.useState(!1), h = r.useRef(null), M = (0, a.useRadioGroup)({
    orientation: "horizontal"
  }), R = (0, u.getGiftExperience)(n, t), g = R === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, x = R !== u.GiftExperience.DEFAULT, v = (0, o.useIsSeasonalGiftingActive)(), {
    enabled: y
  } = o.default.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: v
  }), L = null;
  return x && (L = v && y ? _.SeasonalGiftStyles2023 : _.STANDARD_GIFT_OPTIONS), (0, s.jsxs)("div", {
    children: [x && (0, s.jsxs)("div", {
      className: I.giftMainAnimation,
      children: [null != p ? (0, s.jsx)(d.default, {
        giftStyle: p,
        defaultAnimationState: c.AnimationState.ACTION,
        idleAnimationState: c.AnimationState.LOOP,
        shouldAnimate: !0,
        className: I.animation
      }) : (0, s.jsx)(a.Spinner, {
        className: I.spinner
      }), g && (0, s.jsxs)("div", {
        className: I.soundEmojiContainer,
        children: [(0, s.jsx)("div", {
          className: I.sound,
          children: (0, s.jsx)(i.default, {
            sound: P,
            onSelect: e => {
              null != A && A(null == e ? void 0 : e)
            }
          })
        }), (0, s.jsx)("div", {
          className: I.emoji,
          children: (0, s.jsx)(f.default, {
            setEmojiConfetti: T,
            emojiConfetti: null == S ? void 0 : S
          })
        })]
      })]
    }), (0, s.jsx)("div", {
      tabIndex: null != p || C ? void 0 : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null === (t = h.current) || void 0 === t || t.focus())
      },
      className: I.giftBoxOptionContainer,
      "aria-label": E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...M,
      children: null != L && L.map((e, t) => (0, s.jsx)(m.GiftStaticOption, {
        isSelected: p === e,
        giftStyle: e,
        setSelectedGiftStyle: N,
        ref: 0 === t ? h : null,
        onFocus: () => O(!0),
        onBlur: () => O(!1)
      }, e))
    }), (0, s.jsx)("div", {
      className: I.selectPlanDivider
    })]
  })
}
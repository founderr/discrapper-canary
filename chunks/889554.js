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
let p = () => {
  let {
    giftRecipient: e,
    selectedGiftStyle: t,
    setSelectedGiftStyle: n,
    emojiConfetti: p,
    soundEffect: N,
    setEmojiConfetti: S,
    setSoundEffect: P
  } = (0, l.useGiftContext)(), [T, A] = r.useState(!1), C = r.useRef(null), O = (0, a.useRadioGroup)({
    orientation: "horizontal"
  }), h = (0, u.getGiftExperience)(e), R = h === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, M = h !== u.GiftExperience.DEFAULT, g = (0, o.useIsSeasonalGiftingActive)(), {
    enabled: x
  } = o.default.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: g
  }), v = null;
  return M && (v = g && x ? _.SeasonalGiftStyles2023 : _.STANDARD_GIFT_OPTIONS), (0, s.jsxs)("div", {
    children: [M && (0, s.jsxs)("div", {
      className: I.giftMainAnimation,
      children: [null != t ? (0, s.jsx)(d.default, {
        giftStyle: t,
        defaultAnimationState: c.AnimationState.ACTION,
        idleAnimationState: c.AnimationState.LOOP,
        shouldAnimate: !0,
        className: I.animation
      }) : (0, s.jsx)(a.Spinner, {
        className: I.spinner
      }), R && (0, s.jsxs)("div", {
        className: I.soundEmojiContainer,
        children: [(0, s.jsx)("div", {
          className: I.sound,
          children: (0, s.jsx)(i.default, {
            sound: N,
            onSelect: e => {
              null != P && P(null == e ? void 0 : e)
            }
          })
        }), (0, s.jsx)("div", {
          className: I.emoji,
          children: (0, s.jsx)(f.default, {
            setEmojiConfetti: S,
            emojiConfetti: null == p ? void 0 : p
          })
        })]
      })]
    }), (0, s.jsx)("div", {
      tabIndex: null != t || T ? void 0 : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null === (t = C.current) || void 0 === t || t.focus())
      },
      className: I.giftBoxOptionContainer,
      "aria-label": E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...O,
      children: null != v && v.map((e, r) => (0, s.jsx)(m.GiftStaticOption, {
        isSelected: t === e,
        giftStyle: e,
        setSelectedGiftStyle: n,
        ref: 0 === r ? C : null,
        onFocus: () => A(!0),
        onBlur: () => A(!1)
      }, e))
    }), (0, s.jsx)("div", {
      className: I.selectPlanDivider
    })]
  })
}
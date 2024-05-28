"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return _
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  s = n("481060"),
  a = n("987209"),
  r = n("321051"),
  u = n("669079"),
  o = n("479446"),
  c = n("646476"),
  d = n("981632"),
  m = n("96848"),
  p = n("703926"),
  f = n("474936"),
  S = n("689938"),
  I = n("732965");
let _ = e => {
  let {
    isShopGift: t
  } = e, {
    giftRecipient: n,
    selectedGiftStyle: _,
    setSelectedGiftStyle: P,
    emojiConfetti: E,
    soundEffect: T,
    setEmojiConfetti: v,
    setSoundEffect: h
  } = (0, a.useGiftContext)(), [N, x] = l.useState(!1), A = l.useRef(null), y = (0, s.useRadioGroup)({
    orientation: "horizontal"
  }), C = (0, u.getGiftExperience)(n, t), R = C === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, b = C !== u.GiftExperience.DEFAULT, g = (0, c.useIsSeasonalGiftingActive)(), {
    enabled: O
  } = c.default.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: g
  }), M = null;
  return b && (M = g && O ? f.SeasonalGiftStyles2023 : f.STANDARD_GIFT_OPTIONS), (0, i.jsxs)("div", {
    children: [b && (0, i.jsxs)("div", {
      className: I.giftMainAnimation,
      children: [null != _ ? (0, i.jsx)(d.default, {
        giftStyle: _,
        defaultAnimationState: o.AnimationState.ACTION,
        idleAnimationState: o.AnimationState.LOOP,
        shouldAnimate: !0,
        className: I.animation
      }) : (0, i.jsx)(s.Spinner, {
        className: I.spinner
      }), R && (0, i.jsxs)("div", {
        className: I.soundEmojiContainer,
        children: [(0, i.jsx)("div", {
          className: I.sound,
          children: (0, i.jsx)(r.default, {
            sound: T,
            onSelect: e => {
              null != h && h(null == e ? void 0 : e)
            }
          })
        }), (0, i.jsx)("div", {
          className: I.emoji,
          children: (0, i.jsx)(m.default, {
            setEmojiConfetti: v,
            emojiConfetti: null == E ? void 0 : E
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      tabIndex: null != _ || N ? void 0 : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null === (t = A.current) || void 0 === t || t.focus())
      },
      className: I.giftBoxOptionContainer,
      "aria-label": S.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...y,
      children: null != M && M.map((e, t) => (0, i.jsx)(p.GiftStaticOption, {
        isSelected: _ === e,
        giftStyle: e,
        setSelectedGiftStyle: P,
        ref: 0 === t ? A : null,
        onFocus: () => x(!0),
        onBlur: () => x(!1)
      }, e))
    }), (0, i.jsx)("div", {
      className: I.__invalid_selectPlanDivider
    })]
  })
}
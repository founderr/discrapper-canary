"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return S
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("481060"),
  r = n("987209"),
  a = n("321051"),
  u = n("669079"),
  o = n("479446"),
  c = n("646476"),
  d = n("981632"),
  m = n("96848"),
  f = n("703926"),
  p = n("474936"),
  I = n("689938"),
  _ = n("782874");
let S = e => {
  let {
    isShopGift: t
  } = e, {
    giftRecipient: n,
    selectedGiftStyle: S,
    setSelectedGiftStyle: P,
    emojiConfetti: E,
    soundEffect: T,
    setEmojiConfetti: v,
    setSoundEffect: N
  } = (0, r.useGiftContext)(), [h, x] = s.useState(!1), A = s.useRef(null), y = (0, l.useRadioGroup)({
    orientation: "horizontal"
  }), g = (0, u.getGiftExperience)(n, t), C = g === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, M = g !== u.GiftExperience.DEFAULT, R = (0, c.useIsSeasonalGiftingActive)(), {
    enabled: b
  } = c.default.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: R
  }), L = null;
  return M && (L = R && b ? p.SeasonalGiftStyles2023 : p.STANDARD_GIFT_OPTIONS), (0, i.jsxs)("div", {
    children: [M && (0, i.jsxs)("div", {
      className: _.giftMainAnimation,
      children: [null != S ? (0, i.jsx)(d.default, {
        giftStyle: S,
        defaultAnimationState: o.AnimationState.ACTION,
        idleAnimationState: o.AnimationState.LOOP,
        shouldAnimate: !0,
        className: _.animation
      }) : (0, i.jsx)(l.Spinner, {
        className: _.spinner
      }), C && (0, i.jsxs)("div", {
        className: _.soundEmojiContainer,
        children: [(0, i.jsx)("div", {
          className: _.sound,
          children: (0, i.jsx)(a.default, {
            sound: T,
            onSelect: e => {
              null != N && N(null == e ? void 0 : e)
            }
          })
        }), (0, i.jsx)("div", {
          className: _.emoji,
          children: (0, i.jsx)(m.default, {
            setEmojiConfetti: v,
            emojiConfetti: null == E ? void 0 : E
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      tabIndex: null != S || h ? void 0 : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null === (t = A.current) || void 0 === t || t.focus())
      },
      className: _.giftBoxOptionContainer,
      "aria-label": I.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...y,
      children: null != L && L.map((e, t) => (0, i.jsx)(f.GiftStaticOption, {
        isSelected: S === e,
        giftStyle: e,
        setSelectedGiftStyle: P,
        ref: 0 === t ? A : null,
        onFocus: () => x(!0),
        onBlur: () => x(!1)
      }, e))
    }), (0, i.jsx)("div", {
      className: _.__invalid_selectPlanDivider
    })]
  })
}
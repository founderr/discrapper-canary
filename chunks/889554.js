"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return N
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
  I = n("734203");
let p = [_.PremiumGiftStyles.STANDARD_BOX, _.PremiumGiftStyles.CAKE, _.PremiumGiftStyles.COFFEE, _.PremiumGiftStyles.CHEST],
  N = () => {
    let {
      giftRecipient: e,
      selectedGiftStyle: t,
      setSelectedGiftStyle: n,
      emojiConfetti: N,
      soundEffect: S,
      setEmojiConfetti: P,
      setSoundEffect: T
    } = (0, l.useGiftContext)(), [C, A] = r.useState(!1), O = r.useRef(null), h = (0, a.useRadioGroup)({
      orientation: "horizontal"
    }), R = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(R), M = R !== u.GiftExperience.DEFAULT, v = (0, o.useIsSeasonalGiftingActive)(), {
      enabled: x
    } = o.default.useExperiment({
      location: "premiumGiftSelect_GiftAnimationOptions"
    }, {
      autoTrackExposure: v
    }), L = null;
    return M && (L = v && x ? _.SeasonalGiftStyles2023 : p), (0, s.jsxs)("div", {
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
        }), g && (0, s.jsxs)("div", {
          className: I.soundEmojiContainer,
          children: [(0, s.jsx)("div", {
            className: I.sound,
            children: (0, s.jsx)(i.default, {
              sound: S,
              onSelect: e => {
                null != T && T(null == e ? void 0 : e)
              }
            })
          }), (0, s.jsx)("div", {
            className: I.emoji,
            children: (0, s.jsx)(f.default, {
              setEmojiConfetti: P,
              emojiConfetti: null == N ? void 0 : N
            })
          })]
        })]
      }), (0, s.jsx)("div", {
        tabIndex: null != t || C ? void 0 : 0,
        onFocus: e => {
          var t;
          e.target === e.currentTarget && (null === (t = O.current) || void 0 === t || t.focus())
        },
        className: I.giftBoxOptionContainer,
        "aria-label": E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
        ...h,
        children: null != L && L.map((e, r) => (0, s.jsx)(m.GiftStaticOption, {
          isSelected: t === e,
          giftStyle: e,
          setSelectedGiftStyle: n,
          ref: 0 === r ? O : null,
          onFocus: () => A(!0),
          onBlur: () => A(!1)
        }, e))
      }), (0, s.jsx)("div", {
        className: I.selectPlanDivider
      })]
    })
  }
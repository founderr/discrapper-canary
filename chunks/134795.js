"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  l = s("481060"),
  r = s("654904"),
  o = s("993413"),
  d = s("486324"),
  u = s("689938"),
  c = s("851028");

function S(e) {
  let {
    showRemoveBannerButton: t,
    errors: s,
    onBannerChange: n,
    guildId: S,
    className: E,
    disabled: T = !1,
    showPremiumIcon: _ = !0,
    isTryItOutFlow: I = !1,
    forcedDivider: N,
    withHighlight: g = !1
  } = e, f = g ? l.ShinyButton : l.Button;
  return (0, a.jsx)(o.default, {
    className: E,
    title: u.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: _,
    errors: s,
    disabled: T,
    forcedDivider: N,
    children: (0, a.jsxs)("div", {
      className: c.buttonsContainer,
      children: [(0, a.jsx)(f, {
        className: i()({
          [c.buttonHighlighted]: g
        }),
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, r.handleOpenSelectImageModal)(d.UploadTypes.BANNER, S, I, void 0),
        children: u.default.Messages.CHANGE_BANNER
      }), t && (0, a.jsx)(l.Button, {
        className: c.removeButton,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        size: l.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != S ? u.default.Messages.USER_SETTINGS_RESET_BANNER : u.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}
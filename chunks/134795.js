"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("976644"),
  o = s("654904"),
  d = s("993413"),
  u = s("486324"),
  c = s("689938"),
  S = s("851028");

function E(e) {
  let {
    showRemoveBannerButton: t,
    errors: s,
    onBannerChange: n,
    guildId: E,
    className: T,
    disabled: _ = !1,
    showPremiumIcon: I = !0,
    isTryItOutFlow: f = !1,
    forcedDivider: m,
    withHighlight: N = !1
  } = e, g = N ? r.default : i.Button;
  return (0, a.jsx)(d.default, {
    className: T,
    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: I,
    errors: s,
    disabled: _,
    forcedDivider: m,
    children: (0, a.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, a.jsx)(g, {
        className: l()({
          [S.buttonHighlighted]: N
        }),
        size: i.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(u.UploadTypes.BANNER, E, f, void 0),
        children: c.default.Messages.CHANGE_BANNER
      }), t && (0, a.jsx)(i.Button, {
        className: S.removeButton,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != E ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}
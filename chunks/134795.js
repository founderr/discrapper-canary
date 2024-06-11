"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  l = s("481060"),
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
    isTryItOutFlow: N = !1,
    forcedDivider: g,
    withHighlight: f = !1
  } = e, m = f ? r.default : l.Button;
  return (0, a.jsx)(d.default, {
    className: T,
    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: I,
    errors: s,
    disabled: _,
    forcedDivider: g,
    children: (0, a.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, a.jsx)(m, {
        className: i()({
          [S.buttonHighlighted]: f
        }),
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(u.UploadTypes.BANNER, E, N, void 0),
        children: c.default.Messages.CHANGE_BANNER
      }), t && (0, a.jsx)(l.Button, {
        className: S.removeButton,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        size: l.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != E ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("77078"),
  a = n("181114"),
  o = n("771325"),
  u = n("570697"),
  d = n("75015"),
  c = n("782340"),
  f = n("650130");

function E(e) {
  let {
    showRemoveBannerButton: t,
    errors: n,
    onBannerChange: l,
    guildId: E,
    className: h,
    disabled: _ = !1,
    showPremiumIcon: C = !0,
    isTryItOutFlow: p = !1,
    forcedDivider: S,
    withHighlight: I = !1
  } = e, R = I ? a.default : s.Button;
  return (0, i.jsx)(u.default, {
    className: h,
    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: C,
    errors: n,
    disabled: _,
    forcedDivider: S,
    children: (0, i.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, i.jsx)(R, {
        className: r({
          [f.buttonHighlighted]: I
        }),
        size: s.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.BANNER, E, p, void 0),
        children: c.default.Messages.CHANGE_BANNER
      }), t && (0, i.jsx)(s.Button, {
        className: f.removeButton,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.SMALL,
        onClick: () => l(null),
        children: null != E ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}
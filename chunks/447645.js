"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
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
  f = n("359223");
let E = [{
  name: "gif",
  extensions: ["gif"]
}];

function h(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: l,
    sectionTitle: h,
    changeAvatarButtonText: _,
    guildId: C,
    className: p,
    disabled: S = !1,
    isTryItOutFlow: I = !1,
    forcedDivider: R,
    withHighlight: m = !1
  } = e, g = m ? a.default : s.Button;
  return (0, i.jsx)(u.default, {
    className: p,
    title: h,
    errors: n,
    disabled: S,
    forcedDivider: R,
    children: (0, i.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, i.jsx)(g, {
        className: r({
          [f.buttonHighlighted]: m
        }),
        size: s.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.AVATAR, C, I, I ? E : void 0),
        children: null != _ ? _ : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
      }), t && (0, i.jsx)(s.Button, {
        className: f.removeButton,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.SMALL,
        onClick: () => l(null),
        children: null != C ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
      })]
    })
  })
}
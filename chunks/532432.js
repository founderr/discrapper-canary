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
  r = s("654904"),
  o = s("993413"),
  d = s("486324"),
  u = s("689938"),
  c = s("378594");
let S = [{
  name: "gif",
  extensions: ["gif"]
}];

function E(e) {
  let {
    showRemoveAvatarButton: t,
    errors: s,
    onAvatarChange: n,
    sectionTitle: E,
    changeAvatarButtonText: T,
    guildId: _,
    className: I,
    disabled: N = !1,
    isTryItOutFlow: g = !1,
    forcedDivider: f,
    withHighlight: m = !1
  } = e, A = m ? l.ShinyButton : l.Button;
  return (0, a.jsx)(o.default, {
    className: I,
    title: E,
    errors: s,
    disabled: N,
    forcedDivider: f,
    children: (0, a.jsxs)("div", {
      className: c.buttonsContainer,
      children: [(0, a.jsx)(A, {
        className: i()({
          [c.buttonHighlighted]: m
        }),
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, r.handleOpenSelectImageModal)(d.UploadTypes.AVATAR, _, g, g ? S : void 0),
        children: null != T ? T : u.default.Messages.USER_SETTINGS_CHANGE_AVATAR
      }), t && (0, a.jsx)(l.Button, {
        className: c.removeButton,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        size: l.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != _ ? u.default.Messages.USER_SETTINGS_RESET_AVATAR : u.default.Messages.USER_SETTINGS_REMOVE_AVATAR
      })]
    })
  })
}
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(481060),
  r = t(654904),
  o = t(993413),
  c = t(486324),
  E = t(689938),
  d = t(851401);
let _ = [{
  name: "gif",
  extensions: ["gif"]
}];

function T(e) {
  let {
    showRemoveAvatarButton: s,
    errors: t,
    onAvatarChange: i,
    sectionTitle: T,
    changeAvatarButtonText: S,
    guildId: u,
    className: I,
    disabled: N = !1,
    isTryItOutFlow: A = !1,
    forcedDivider: C,
    withHighlight: O = !1
  } = e, m = O ? l.ShinyButton : l.Button;
  return (0, n.jsx)(o.Z, {
    className: I,
    title: T,
    errors: t,
    disabled: N,
    forcedDivider: C,
    children: (0, n.jsxs)("div", {
      className: d.buttonsContainer,
      children: [(0, n.jsx)(m, {
        className: a()({
          [d.buttonHighlighted]: O
        }),
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, r.$r)(c.pC.AVATAR, u, A, A ? _ : void 0),
        children: null != S ? S : E.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
      }), s && (0, n.jsx)(l.Button, {
        className: d.removeButton,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        size: l.Button.Sizes.SMALL,
        onClick: () => i(null),
        children: null != u ? E.Z.Messages.USER_SETTINGS_RESET_AVATAR : E.Z.Messages.USER_SETTINGS_REMOVE_AVATAR
      })]
    })
  })
}
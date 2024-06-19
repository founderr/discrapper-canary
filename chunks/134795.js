t.d(s, {
  Z: function() {
    return _
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
  d = t(15040);

function _(e) {
  let {
    showRemoveBannerButton: s,
    errors: t,
    onBannerChange: i,
    guildId: _,
    className: T,
    disabled: S = !1,
    showPremiumIcon: u = !0,
    isTryItOutFlow: I = !1,
    forcedDivider: N,
    withHighlight: A = !1
  } = e, C = A ? l.ShinyButton : l.Button;
  return (0, n.jsx)(o.Z, {
    className: T,
    title: E.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: u,
    errors: t,
    disabled: S,
    forcedDivider: N,
    children: (0, n.jsxs)("div", {
      className: d.buttonsContainer,
      children: [(0, n.jsx)(C, {
        className: a()({
          [d.buttonHighlighted]: A
        }),
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, r.$r)(c.pC.BANNER, _, I, void 0),
        children: E.Z.Messages.CHANGE_BANNER
      }), s && (0, n.jsx)(l.Button, {
        className: d.removeButton,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        size: l.Button.Sizes.SMALL,
        onClick: () => i(null),
        children: null != _ ? E.Z.Messages.USER_SETTINGS_RESET_BANNER : E.Z.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}
t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(37234),
  l = t(703656),
  r = t(981631),
  o = t(689938),
  c = t(673778),
  E = t(286359);

function d() {
  return (0, n.jsxs)("div", {
    className: c.wrapper,
    children: [(0, n.jsx)("img", {
      className: c.icon,
      alt: "",
      src: E
    }), (0, n.jsxs)("div", {
      className: c.info,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-lg/bold",
        children: o.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_TITLE
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_SUBTITLE
      })]
    }), (0, n.jsx)(i.Button, {
      color: i.Button.Colors.PRIMARY,
      onClick: () => {
        (0, l.uL)(r.Z5c.GUILD_DISCOVERY), (0, a.xf)()
      },
      size: i.Button.Sizes.LARGE,
      children: o.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_CTA
    })]
  })
}
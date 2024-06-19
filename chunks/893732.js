n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(689938),
  a = n(695584);

function r(e) {
  let {
    onClose: t,
    guildName: n
  } = e;
  return (0, l.jsxs)("div", {
    className: a.container,
    children: [(0, l.jsx)("div", {
      className: a.iconContainer,
      children: (0, l.jsx)(i.ClockWarningIcon, {
        size: "custom",
        color: "currentColor",
        className: a.icon,
        width: 20,
        height: 20
      })
    }), (0, l.jsxs)("div", {
      className: a.header,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        className: a.headerText,
        children: s.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: s.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
          guildName: n
        })
      }), (0, l.jsx)(i.Button, {
        onClick: t,
        className: a.button,
        children: s.Z.Messages.OKAY
      })]
    })]
  })
}
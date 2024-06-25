n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(745752),
  r = n(17181),
  o = n(689938),
  c = n(956163);

function u(e) {
  let {
    guildId: t,
    channelId: n
  } = e, u = i.useCallback(() => {
    if (null != t && null != n)(0, a.I1)(t), (0, r.default)({
      guildId: t,
      returnChannelId: n
    })
  }, [t, n]);
  return (0, s.jsx)("div", {
    className: c.container,
    children: (0, s.jsxs)("div", {
      className: c.explainerContainer,
      children: [(0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        children: o.Z.Messages.ONBOARDING_ERROR_PAGE_TEXT
      }), (0, s.jsx)(l.Button, {
        onClick: u,
        children: (0, s.jsx)(l.Text, {
          variant: "text-md/medium",
          children: o.Z.Messages.START_ONBOARDING
        })
      })]
    })
  })
}
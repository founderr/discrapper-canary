n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(703656),
  r = n(434479),
  a = n(981631),
  o = n(176505),
  u = n(689938);

function c(e) {
  let {
    guild: t,
    selected: n
  } = e;
  return (0, l.jsx)(r.m, {
    id: "home-tab-".concat(t.id),
    renderIcon: e => (0, l.jsx)(i.SignPostIcon, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: u.Z.Messages.SERVER_GUIDE,
    selected: n,
    onClick: function() {
      (0, s.uL)(a.Z5c.CHANNEL(t.id, o.oC.GUILD_HOME))
    }
  })
}
t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(689938),
  l = t(351155);

function r(e) {
  let {
    count: s
  } = e;
  return (0, n.jsxs)("div", {
    className: l.countContainer,
    children: [(0, n.jsx)("div", {
      className: l.dot
    }), (0, n.jsx)(i.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      children: a.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
        count: s
      })
    })]
  })
}
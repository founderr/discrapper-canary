"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("446674"),
  r = n("77078"),
  o = n("697218"),
  u = n("987772"),
  d = n("158998"),
  c = n("473591"),
  f = n("782340"),
  p = n("189590");

function m(e) {
  let {
    userId: t,
    guildId: n,
    className: i
  } = e, m = (0, s.useStateFromStores)([c.default], () => c.default.getSettings(n)), h = (0, s.useStateFromStores)([o.default], () => o.default.getUser(null != t ? t : null == m ? void 0 : m.last_edited_by));
  return null == h ? null : (0, l.jsxs)("div", {
    className: a(i, p.container),
    children: [(0, l.jsx)(u.default, {
      color: "var(--interactive-active)",
      width: 12,
      height: 12
    }), (0, l.jsx)(r.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: f.default.Messages.CLYDE_LAST_EDITED_BY_TAG.format({
        username: d.default.getUserTag(h, {
          decoration: "auto"
        })
      })
    })]
  })
}
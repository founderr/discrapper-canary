"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var a = n("249654"),
  l = n("77078"),
  r = n("813006"),
  s = n("476263"),
  o = n("888400"),
  u = n("908539"),
  c = n("782340"),
  d = n("177195");

function f(e) {
  let {
    guildMetadata: t,
    actions: n
  } = e, f = new r.default({
    name: t.name
  }), E = n.filter(e => e.action_type === u.ActionType.GUILD_DELETE), _ = E.length > 0 ? (0, o.dateFormat)(new Date(a.default.extractTimestamp(E[0].id)), "LL") : null;
  return (0, i.jsxs)("div", {
    className: d.guildContainer,
    children: [(0, i.jsx)(s.default, {
      guild: f,
      size: s.default.Sizes.MEDIUM
    }), (0, i.jsxs)("div", {
      className: d.titleContainer,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        className: d.guildName,
        children: t.name
      }), null != _ && (0, i.jsx)(l.Text, {
        variant: "text-xxs/medium",
        className: d.removalDate,
        children: c.default.Messages.SAFETY_HUB_GUILD_REMOVED_DATE.format({
          removalDate: _
        })
      })]
    })]
  })
}
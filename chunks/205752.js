"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var i = a("735250");
a("470079");
var n = a("481060"),
  l = a("601964"),
  s = a("346656"),
  o = a("55935"),
  r = a("709054"),
  c = a("531441"),
  d = a("689938"),
  u = a("625096");

function m(e) {
  let {
    guildMetadata: t,
    actions: a
  } = e, m = new l.default({
    name: t.name
  }), _ = a.filter(e => e.action_type === c.ActionType.GUILD_DELETE), A = _.length > 0 ? (0, o.dateFormat)(new Date(r.default.extractTimestamp(_[0].id)), "LL") : null;
  return (0, i.jsxs)("div", {
    className: u.guildContainer,
    children: [(0, i.jsx)(s.default, {
      guild: m,
      size: s.default.Sizes.MEDIUM
    }), (0, i.jsxs)("div", {
      className: u.titleContainer,
      children: [(0, i.jsx)(n.Heading, {
        variant: "heading-sm/semibold",
        className: u.guildName,
        children: t.name
      }), null != A && (0, i.jsx)(n.Text, {
        variant: "text-xxs/medium",
        className: u.removalDate,
        children: d.default.Messages.SAFETY_HUB_GUILD_REMOVED_DATE.format({
          removalDate: A
        })
      })]
    })]
  })
}
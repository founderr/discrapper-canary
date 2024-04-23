"use strict";
i.r(t), i.d(t, {
  default: function() {
    return m
  }
});
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("601964"),
  s = i("346656"),
  o = i("55935"),
  r = i("709054"),
  c = i("531441"),
  d = i("689938"),
  u = i("503831");

function m(e) {
  let {
    guildMetadata: t,
    actions: i
  } = e, m = new l.default({
    name: t.name
  }), _ = i.filter(e => e.action_type === c.ActionType.GUILD_DELETE), A = _.length > 0 ? (0, o.dateFormat)(new Date(r.default.extractTimestamp(_[0].id)), "LL") : null;
  return (0, a.jsxs)("div", {
    className: u.guildContainer,
    children: [(0, a.jsx)(s.default, {
      guild: m,
      size: s.default.Sizes.MEDIUM
    }), (0, a.jsxs)("div", {
      className: u.titleContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-sm/semibold",
        className: u.guildName,
        children: t.name
      }), null != A && (0, a.jsx)(n.Text, {
        variant: "text-xxs/medium",
        className: u.removalDate,
        children: d.default.Messages.SAFETY_HUB_GUILD_REMOVED_DATE.format({
          removalDate: A
        })
      })]
    })]
  })
}
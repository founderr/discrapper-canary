"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("703656"),
  r = a("134726"),
  o = a("308083"),
  u = a("981631"),
  d = a("689938"),
  c = a("422906");

function f(e) {
  let {
    guildId: t
  } = e, {
    enableClanCreation: a,
    defaultGameId: f
  } = r.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanUpsellNotice"
  }), E = s.useCallback(() => {
    (0, i.transitionTo)(u.Routes.GUILD_DISCOVERY)
  }, []);
  return a ? (0, n.jsxs)(l.Clickable, {
    onClick: E,
    className: c.upsellContainer,
    children: [(0, n.jsx)(l.Text, {
      variant: "text-xs/bold",
      color: "text-warning",
      className: c.exclusive,
      children: d.default.Messages.CLAN_UPSELL_INVITE
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: f === o.VALORANT_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_VALORANT : f === o.GENSHIN_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_GENSHIN : d.default.Messages.CLAN_UPSELL_CONTENT
    })]
  }) : null
}
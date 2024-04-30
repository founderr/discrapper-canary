"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("703656"),
  r = n("134726"),
  o = n("308083"),
  u = n("981631"),
  d = n("689938"),
  c = n("422906");

function f(e) {
  let {
    guildId: t
  } = e, {
    enableClanCreation: n,
    defaultGameId: f
  } = r.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanUpsellNotice"
  }), E = s.useCallback(() => {
    (0, i.transitionTo)(u.Routes.GUILD_DISCOVERY)
  }, []);
  return n ? (0, a.jsxs)(l.Clickable, {
    onClick: E,
    className: c.upsellContainer,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/bold",
      color: "text-warning",
      className: c.exclusive,
      children: d.default.Messages.CLAN_UPSELL_INVITE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: f === o.VALORANT_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_VALORANT : f === o.GENSHIN_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_GENSHIN : d.default.Messages.CLAN_UPSELL_CONTENT
    })]
  }) : null
}
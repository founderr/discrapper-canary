"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("725568"),
  r = a("134726"),
  o = a("603839"),
  u = a("308083"),
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
    (0, i.openFullScreenLayer)(e => {
      let {
        closeLayer: a
      } = e;
      return (0, n.jsx)(o.default, {
        onClose: a,
        guildId: t,
        gameId: f
      })
    }, {
      layerKey: u.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [f, t]);
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
      children: f === u.VALORANT_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_VALORANT : f === u.GENSHIN_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_GENSHIN : d.default.Messages.CLAN_UPSELL_CONTENT
    })]
  }) : null
}
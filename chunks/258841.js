"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("725568"),
  r = n("134726"),
  o = n("603839"),
  u = n("308083"),
  d = n("689938"),
  c = n("290305");

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
    (0, i.openFullScreenLayer)(e => {
      let {
        closeLayer: n
      } = e;
      return (0, a.jsx)(o.default, {
        onClose: n,
        guildId: t,
        gameId: f
      })
    }, {
      layerKey: u.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [f, t]);
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
      children: f === u.VALORANT_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_VALORANT : f === u.GENSHIN_ID ? d.default.Messages.CLAN_UPSELL_CONTENT_GENSHIN : d.default.Messages.CLAN_UPSELL_CONTENT
    })]
  }) : null
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("725568"),
  r = a("603839"),
  o = a("308083"),
  u = a("689938"),
  d = a("290305");

function c(e) {
  let {
    guildId: t
  } = e, a = s.useCallback(() => {
    (0, i.openFullScreenLayer)(e => {
      let {
        closeLayer: a
      } = e;
      return (0, n.jsx)(r.default, {
        onClose: a,
        guildId: t,
        gameId: o.VALORANT_ID
      })
    }, {
      layerKey: o.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [t]);
  return (0, n.jsxs)(l.Clickable, {
    onClick: a,
    className: d.upsellContainer,
    children: [(0, n.jsx)(l.Text, {
      variant: "text-xs/bold",
      color: "text-warning",
      className: d.exclusive,
      children: u.default.Messages.CLAN_UPSELL_INVITE
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: u.default.Messages.CLAN_UPSELL_CONTENT
    })]
  })
}
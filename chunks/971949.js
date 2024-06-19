_.r(s), _.d(s, {
  default: function() {
    return U
  }
});
var n = _(735250);
_(470079);
var L = _(692547),
  a = _(481060),
  t = _(906732),
  o = _(98278),
  r = _(790527),
  c = _(474936),
  A = _(981631),
  M = _(689938),
  i = _(348394),
  D = _(935777),
  l = _(483569);

function u(e, s) {
  return (0, n.jsx)(a.TextBadge, {
    text: e,
    className: D.newBadge,
    color: L.Z.unsafe_rawColors.BRAND_500.css
  }, s)
}

function U(e) {
  var s;
  let {
    guildCount: _,
    onClose: L,
    analyticsLocations: D,
    ...U
  } = e;
  let d = (s = L, function(e, _) {
      return (0, n.jsx)(a.Clickable, {
        className: i.learnMoreLink,
        tag: "span",
        onClick: () => {
          s(), (0, o.z)()
        },
        children: e
      }, _)
    }),
    {
      analyticsLocations: f
    } = (0, t.ZP)(D);
  return (0, n.jsx)(t.Gt, {
    value: f,
    children: (0, n.jsx)(r.Z, {
      artURL: l,
      onClose: L,
      type: c.cd.GUILD_CAP_MODAL_UPSELL,
      title: M.Z.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
      body: _ < A.DZw ? M.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
        guildCount: _,
        onAndMore: d,
        newBadgeHook: u
      }) : M.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
        onAndMore: d,
        newBadgeHook: u
      }),
      context: _ < A.DZw ? M.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format({
        guildCount: _
      }) : M.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
      glowUp: M.Z.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
        onAndMore: d
      }),
      ...U
    })
  })
}
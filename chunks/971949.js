"use strict";
t.r(a), t.d(a, {
  default: function() {
    return f
  }
});
var s = t("735250");
t("470079");
var _ = t("692547"),
  n = t("481060"),
  L = t("906732"),
  r = t("98278"),
  o = t("790527"),
  l = t("474936"),
  u = t("981631"),
  i = t("689938"),
  c = t("65212"),
  d = t("991566"),
  A = t("483569");

function M(e, a) {
  return (0, s.jsx)(n.TextBadge, {
    text: e,
    className: d.newBadge,
    color: _.default.unsafe_rawColors.BRAND_500.css
  }, a)
}

function f(e) {
  var a;
  let {
    guildCount: t,
    onClose: _,
    analyticsLocations: d,
    ...f
  } = e;
  let U = (a = _, function(e, t) {
      return (0, s.jsx)(n.Clickable, {
        className: c.learnMoreLink,
        tag: "span",
        onClick: () => {
          a(), (0, r.navigateToPremiumMarketingPage)()
        },
        children: e
      }, t)
    }),
    {
      analyticsLocations: D
    } = (0, L.default)(d);
  return (0, s.jsx)(L.AnalyticsLocationProvider, {
    value: D,
    children: (0, s.jsx)(o.default, {
      artURL: A,
      onClose: _,
      type: l.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL,
      title: i.default.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
      body: t < u.MAX_USER_GUILDS ? i.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
        guildCount: t,
        onAndMore: U,
        newBadgeHook: M
      }) : i.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
        onAndMore: U,
        newBadgeHook: M
      }),
      context: t < u.MAX_USER_GUILDS ? i.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format({
        guildCount: t
      }) : i.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
      glowUp: i.default.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
        onAndMore: U
      }),
      ...f
    })
  })
}
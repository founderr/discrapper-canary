n.d(t, {
  Z: function() {
    return g
  }
});
var o = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(906732),
  l = n(48217),
  r = n(26323),
  c = n(430824),
  u = n(914010),
  d = n(709586),
  E = n(981631),
  _ = n(30513),
  N = n(689938),
  I = n(349663);

function g(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: g,
    banner: R
  } = e, f = (0, i.e7)([u.Z], () => u.Z.getGuildId()), p = (0, i.e7)([c.Z], () => c.Z.getGuild(f)), {
    analyticsLocations: m
  } = (0, a.ZP)();
  return null == p || p.hasFeature(E.oNc.ANIMATED_BANNER) || !g && p.hasFeature(E.oNc.BANNER) ? null : (0, o.jsxs)("div", {
    className: I.container,
    children: [(0, o.jsx)(d.Z, {
      className: I.guildBoostingIcon
    }), (0, o.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: N.Z.Messages.PREMIUM_GUILD_PREVIEW
    }), (0, o.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      color: s.Button.Colors.LINK,
      className: I.subscribeButton,
      onClick: () => {
        if (null == p) return;
        let e = {
          section: t,
          page: n,
          object: E.qAy.UPSELL_HEADER
        };
        null != R ? (0, l.c)({
          analyticsLocations: m,
          analyticsLocation: e,
          guild: p,
          isGIF: g,
          banner: R
        }) : (0, r.Z)({
          analyticsLocations: m,
          analyticsSourceLocation: e,
          guild: p,
          perks: g ? (0, _.zC)() : (0, _.XO)()
        })
      },
      children: N.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
    })]
  })
}
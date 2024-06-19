n.d(t, {
  Z: function() {
    return m
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(906732),
  l = n(48217),
  o = n(26323),
  c = n(430824),
  u = n(914010),
  d = n(709586),
  h = n(981631),
  A = n(30513),
  E = n(689938),
  g = n(349663);

function m(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: m,
    banner: R
  } = e, f = (0, i.e7)([u.Z], () => u.Z.getGuildId()), _ = (0, i.e7)([c.Z], () => c.Z.getGuild(f)), {
    analyticsLocations: N
  } = (0, a.ZP)();
  return null == _ || _.hasFeature(h.oNc.ANIMATED_BANNER) || !m && _.hasFeature(h.oNc.BANNER) ? null : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(d.Z, {
      className: g.guildBoostingIcon
    }), (0, r.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: E.Z.Messages.PREMIUM_GUILD_PREVIEW
    }), (0, r.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      color: s.Button.Colors.LINK,
      className: g.subscribeButton,
      onClick: () => {
        if (null == _) return;
        let e = {
          section: t,
          page: n,
          object: h.qAy.UPSELL_HEADER
        };
        null != R ? (0, l.c)({
          analyticsLocations: N,
          analyticsLocation: e,
          guild: _,
          isGIF: m,
          banner: R
        }) : (0, o.Z)({
          analyticsLocations: N,
          analyticsSourceLocation: e,
          guild: _,
          perks: m ? (0, A.zC)() : (0, A.XO)()
        })
      },
      children: E.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
    })]
  })
}
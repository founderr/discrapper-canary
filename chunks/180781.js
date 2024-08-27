n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var o = n(442837),
    a = n(481060),
    r = n(906732),
    s = n(48217),
    l = n(26323),
    c = n(430824),
    u = n(914010),
    d = n(709586),
    _ = n(981631),
    b = n(30513),
    f = n(689938),
    E = n(715183);
function g(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: g, banner: R } = e,
        m = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        p = (0, o.e7)([c.Z], () => c.Z.getGuild(m)),
        { analyticsLocations: P } = (0, r.ZP)();
    return null == p || p.hasFeature(_.oNc.ANIMATED_BANNER) || (!g && p.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: E.container,
              children: [
                  (0, i.jsx)(d.Z, { className: E.guildBoostingIcon }),
                  (0, i.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.Z.Messages.PREMIUM_GUILD_PREVIEW
                  }),
                  (0, i.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.LINK,
                      className: E.subscribeButton,
                      onClick: () => {
                          if (null == p) return;
                          let e = {
                              section: t,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != R
                              ? (0, s.c)({
                                    analyticsLocations: P,
                                    analyticsLocation: e,
                                    guild: p,
                                    isGIF: g,
                                    banner: R
                                })
                              : (0, l.Z)({
                                    analyticsLocations: P,
                                    analyticsSourceLocation: e,
                                    guild: p,
                                    perks: g ? (0, b.zC)() : (0, b.XO)()
                                });
                      },
                      children: f.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                  })
              ]
          });
}

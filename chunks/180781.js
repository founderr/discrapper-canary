n.d(t, {
    Z: function () {
        return E;
    }
});
var a = n(735250);
n(470079);
var o = n(442837),
    i = n(481060),
    r = n(906732),
    c = n(48217),
    s = n(26323),
    l = n(430824),
    u = n(914010),
    d = n(709586),
    _ = n(981631),
    b = n(30513),
    f = n(689938),
    g = n(364042);
function E(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: E, banner: m } = e,
        R = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        p = (0, o.e7)([l.Z], () => l.Z.getGuild(R)),
        { analyticsLocations: I } = (0, r.ZP)();
    return null == p || p.hasFeature(_.oNc.ANIMATED_BANNER) || (!E && p.hasFeature(_.oNc.BANNER))
        ? null
        : (0, a.jsxs)('div', {
              className: g.container,
              children: [
                  (0, a.jsx)(d.Z, { className: g.guildBoostingIcon }),
                  (0, a.jsx)(i.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.Z.Messages.PREMIUM_GUILD_PREVIEW
                  }),
                  (0, a.jsx)(i.Button, {
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.LINK,
                      className: g.subscribeButton,
                      onClick: () => {
                          if (null == p) return;
                          let e = {
                              section: t,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != m
                              ? (0, c.c)({
                                    analyticsLocations: I,
                                    analyticsLocation: e,
                                    guild: p,
                                    isGIF: E,
                                    banner: m
                                })
                              : (0, s.Z)({
                                    analyticsLocations: I,
                                    analyticsSourceLocation: e,
                                    guild: p,
                                    perks: E ? (0, b.zC)() : (0, b.XO)()
                                });
                      },
                      children: f.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                  })
              ]
          });
}

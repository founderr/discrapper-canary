n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    o = n(481060),
    r = n(906732),
    s = n(48217),
    l = n(26323),
    c = n(430824),
    d = n(914010),
    u = n(709586),
    _ = n(981631),
    h = n(30513),
    g = n(689938),
    f = n(364042);
function b(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: b, banner: p } = e,
        E = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        m = (0, a.e7)([c.Z], () => c.Z.getGuild(E)),
        { analyticsLocations: N } = (0, r.ZP)();
    return null == m || m.hasFeature(_.oNc.ANIMATED_BANNER) || (!b && m.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)(u.Z, { className: f.guildBoostingIcon }),
                  (0, i.jsx)(o.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.Z.Messages.PREMIUM_GUILD_PREVIEW
                  }),
                  (0, i.jsx)(o.Button, {
                      look: o.Button.Looks.LINK,
                      color: o.Button.Colors.LINK,
                      className: f.subscribeButton,
                      onClick: () => {
                          if (null == m) return;
                          let e = {
                              section: t,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, s.c)({
                                    analyticsLocations: N,
                                    analyticsLocation: e,
                                    guild: m,
                                    isGIF: b,
                                    banner: p
                                })
                              : (0, l.Z)({
                                    analyticsLocations: N,
                                    analyticsSourceLocation: e,
                                    guild: m,
                                    perks: b ? (0, h.zC)() : (0, h.XO)()
                                });
                      },
                      children: g.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                  })
              ]
          });
}

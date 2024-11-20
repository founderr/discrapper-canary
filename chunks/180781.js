n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    r = n(906732),
    c = n(48217),
    l = n(26323),
    s = n(430824),
    u = n(914010),
    d = n(709586),
    b = n(981631),
    _ = n(30513),
    f = n(388032),
    g = n(364042);
function m(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: m, banner: p } = e,
        h = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        v = (0, o.e7)([s.Z], () => s.Z.getGuild(h)),
        { analyticsLocations: x } = (0, r.ZP)();
    return null == v || v.hasFeature(b.oNc.ANIMATED_BANNER) || (!m && v.hasFeature(b.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(d.Z, { className: g.guildBoostingIcon }),
                  (0, i.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.intl.string(f.t['56M7xc'])
                  }),
                  (0, i.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.LINK,
                      className: g.subscribeButton,
                      onClick: () => {
                          if (null == v) return;
                          let e = {
                              section: t,
                              page: n,
                              object: b.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, c.c)({
                                    analyticsLocations: x,
                                    analyticsLocation: e,
                                    guild: v,
                                    isGIF: m,
                                    banner: p
                                })
                              : (0, l.Z)({
                                    analyticsLocations: x,
                                    analyticsSourceLocation: e,
                                    guild: v,
                                    perks: m ? (0, _.zC)() : (0, _.XO)()
                                });
                      },
                      children: f.intl.string(f.t.WUHdZW)
                  })
              ]
          });
}

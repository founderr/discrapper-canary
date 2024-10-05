i.d(n, {
    Z: function () {
        return f;
    }
});
var t = i(735250);
i(470079);
var o = i(442837),
    a = i(481060),
    r = i(906732),
    l = i(48217),
    s = i(26323),
    c = i(430824),
    d = i(914010),
    u = i(709586),
    _ = i(981631),
    g = i(30513),
    b = i(689938),
    h = i(364042);
function f(e) {
    let { analyticsSection: n, analyticsPage: i, isGIF: f, banner: E } = e,
        T = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        I = (0, o.e7)([c.Z], () => c.Z.getGuild(T)),
        { analyticsLocations: N } = (0, r.ZP)();
    return null == I || I.hasFeature(_.oNc.ANIMATED_BANNER) || (!f && I.hasFeature(_.oNc.BANNER))
        ? null
        : (0, t.jsxs)('div', {
              className: h.container,
              children: [
                  (0, t.jsx)(u.Z, { className: h.guildBoostingIcon }),
                  (0, t.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: b.Z.Messages.PREMIUM_GUILD_PREVIEW
                  }),
                  (0, t.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.LINK,
                      className: h.subscribeButton,
                      onClick: () => {
                          if (null == I) return;
                          let e = {
                              section: n,
                              page: i,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != E
                              ? (0, l.c)({
                                    analyticsLocations: N,
                                    analyticsLocation: e,
                                    guild: I,
                                    isGIF: f,
                                    banner: E
                                })
                              : (0, s.Z)({
                                    analyticsLocations: N,
                                    analyticsSourceLocation: e,
                                    guild: I,
                                    perks: f ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: b.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                  })
              ]
          });
}

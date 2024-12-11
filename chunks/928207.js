var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(512969),
    o = n(674746),
    s = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(410575),
    h = n(730749),
    m = n(666743),
    p = n(410030),
    g = n(100527),
    f = n(906732),
    _ = n(600164),
    E = n(984370),
    I = n(278605),
    C = n(299657),
    v = n(594174),
    S = n(981631),
    N = n(474936),
    T = n(388032),
    b = n(707858);
let A = s.ZP.connectStores([v.default], () => ({ user: v.default.getCurrentUser() }))(
    (0, m.Z)(
        (0, h.Z)((e) => {
            let { analyticsLocations: t } = (0, f.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                n = (0, I.xP)('ApplicationStoreHome'),
                r = (0, p.ZP)(),
                { isAuthenticated: s, user: h } = e;
            return s
                ? (0, i.jsxs)('div', {
                      className: b.homeWrapperNormal,
                      children: [
                          (0, i.jsx)(u.Z, {
                              section: S.jXE.NAVIGATION,
                              children: (0, i.jsxs)(E.Z, {
                                  isAuthenticated: s,
                                  className: l()(b.headerBar, {
                                      [b.headerBarV2LightBackground]: n && !(0, c.wj)(r),
                                      [b.headerBarV2DarkBackground]: n && (0, c.wj)(r)
                                  }),
                                  children: [
                                      (0, i.jsx)(E.Z.Icon, {
                                          icon: d.NitroWheelIcon,
                                          'aria-hidden': !0,
                                          color: n ? o.Z.PREMIUM_TIER_2_PINK : void 0
                                      }),
                                      (0, i.jsx)(E.Z.Title, { children: T.intl.string(T.t.Ipxkoq) })
                                  ]
                              })
                          }),
                          (0, i.jsx)(f.Gt, {
                              value: t,
                              children:
                                  null == h
                                      ? (0, i.jsx)(_.Z, {
                                            align: _.Z.Align.CENTER,
                                            justify: _.Z.Justify.CENTER,
                                            children: (0, i.jsx)(d.Spinner, { className: b.spinner })
                                        })
                                      : (0, i.jsx)(C.Z, { entrypoint: N.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, i.jsx)(a.l_, { to: S.Z5c.LOGIN });
        })
    )
);
t.Z = A;

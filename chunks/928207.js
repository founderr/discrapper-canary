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
    S = n(74538),
    N = n(981631),
    T = n(474936),
    b = n(388032),
    x = n(707858);
let A = s.ZP.connectStores([v.default], () => ({ user: v.default.getCurrentUser() }))(
    (0, m.Z)(
        (0, h.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: r } = (0, f.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                s = (0, I.xP)('ApplicationStoreHome'),
                h = (0, S.I5)(n),
                m = s && !h,
                v = (0, p.ZP)();
            return t
                ? (0, i.jsxs)('div', {
                      className: x.homeWrapperNormal,
                      children: [
                          (0, i.jsx)(u.Z, {
                              section: N.jXE.NAVIGATION,
                              children: (0, i.jsxs)(E.Z, {
                                  isAuthenticated: t,
                                  className: l()(x.headerBar, {
                                      [x.headerBarV2LightBackground]: m && !(0, c.wj)(v),
                                      [x.headerBarV2DarkBackground]: m && (0, c.wj)(v)
                                  }),
                                  children: [
                                      (0, i.jsx)(E.Z.Icon, {
                                          icon: d.NitroWheelIcon,
                                          'aria-hidden': !0,
                                          color: m ? o.Z.PREMIUM_TIER_2_PINK : void 0
                                      }),
                                      (0, i.jsx)(E.Z.Title, { children: b.intl.string(b.t.Ipxkoq) })
                                  ]
                              })
                          }),
                          (0, i.jsx)(f.Gt, {
                              value: r,
                              children:
                                  null == n
                                      ? (0, i.jsx)(_.Z, {
                                            align: _.Z.Align.CENTER,
                                            justify: _.Z.Justify.CENTER,
                                            children: (0, i.jsx)(d.Spinner, { className: x.spinner })
                                        })
                                      : (0, i.jsx)(C.Z, { entrypoint: T.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, i.jsx)(a.l_, { to: N.Z5c.LOGIN });
        })
    )
);
t.Z = A;

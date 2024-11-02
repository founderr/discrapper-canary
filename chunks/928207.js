var i = n(200651);
n(192379);
var r = n(512969),
    l = n(442837),
    a = n(481060),
    s = n(410575),
    o = n(730749),
    c = n(666743),
    d = n(100527),
    u = n(906732),
    h = n(600164),
    m = n(984370),
    p = n(299657),
    g = n(594174),
    f = n(981631),
    _ = n(474936),
    E = n(388032),
    I = n(537553);
let C = l.ZP.connectStores([g.default], () => ({ user: g.default.getCurrentUser() }))(
    (0, c.Z)(
        (0, o.Z)((e) => {
            let { analyticsLocations: t } = (0, u.ZP)(d.Z.HOME_PAGE_PREMIUM_TAB),
                { isAuthenticated: n, user: l } = e;
            return n
                ? (0, i.jsxs)('div', {
                      className: I.homeWrapperNormal,
                      children: [
                          (0, i.jsx)(s.Z, {
                              section: f.jXE.NAVIGATION,
                              children: (0, i.jsxs)(m.Z, {
                                  isAuthenticated: n,
                                  className: I.headerBar,
                                  children: [
                                      (0, i.jsx)(m.Z.Icon, {
                                          icon: a.NitroWheelIcon,
                                          'aria-hidden': !0
                                      }),
                                      (0, i.jsx)(m.Z.Title, { children: E.intl.string(E.t.Ipxkoq) })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.Gt, {
                              value: t,
                              children:
                                  null == l
                                      ? (0, i.jsx)(h.Z, {
                                            align: h.Z.Align.CENTER,
                                            justify: h.Z.Justify.CENTER,
                                            children: (0, i.jsx)(a.Spinner, { className: I.spinner })
                                        })
                                      : (0, i.jsx)(p.Z, { entrypoint: _.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, i.jsx)(r.l_, { to: f.Z5c.LOGIN });
        })
    )
);
t.Z = C;

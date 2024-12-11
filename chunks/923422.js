t.r(n), t(47120), t(757143);
var r = t(200651),
    o = t(192379),
    i = t(481060),
    a = t(239091),
    l = t(230711),
    c = t(493544),
    u = t(108843),
    s = t(100527),
    d = t(906732),
    g = t(386506),
    m = t(366953),
    b = t(991346),
    f = t(606669),
    p = t(53432),
    h = t(74869),
    _ = t(45570),
    S = t(308512),
    x = t(594791),
    C = t(393431),
    M = t(69021),
    Z = t(981631),
    k = t(388032);
n.default = (0, u.Z)(
    function (e) {
        let { webBuildOverride: n, onSelect: t } = e,
            [u, s] = o.useState(!1),
            v = (0, _.Z)(),
            I = (0, S.Z)(),
            j = (0, p.Z)(),
            B = (0, f.Z)(),
            E = (0, C.Z)(),
            R = (0, x.Z)(),
            T = (0, h.Z)(),
            D = (0, M.Z)(),
            { analyticsLocations: G } = (0, d.ZP)(),
            O = o.useMemo(() => (0, m.j)(), []);
        async function w() {
            try {
                s(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let U = (e) => {
                switch (e) {
                    case Z.oAB.GAMES:
                        return v;
                    case Z.oAB.STREAMER_MODE:
                        return I;
                    case Z.oAB.APPEARANCE:
                        return j;
                    case Z.oAB.ACCESSIBILITY:
                        return B;
                    case Z.oAB.VOICE:
                        return E;
                    case Z.oAB.TEXT:
                        return R;
                    case Z.oAB.EXPERIMENTS:
                        return T;
                    case Z.oAB.DEVELOPER_OPTIONS:
                        return D;
                    default:
                        return null;
                }
            },
            y = (0, b.VO)()
                .filter((e) => {
                    let { section: n } = e;
                    return n !== c.ID.HEADER && n !== c.ID.CUSTOM && n !== c.ID.DIVIDER && 'logout' !== n;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, r.jsx)(d.Gt, {
            value: G,
            children: (0, r.jsxs)(i.Menu, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': k.intl.string(k.t.opYYHh),
                onSelect: t,
                children: [
                    y.map((e) => {
                        let { section: n, label: t, onClick: o } = e,
                            a = n.replace(/\W/gi, '_');
                        return (0, r.jsx)(
                            i.MenuItem,
                            {
                                id: a,
                                label: t,
                                action: () =>
                                    null != o
                                        ? o()
                                        : (function (e, n) {
                                              let t = Object.values(Z.oAB).filter((n) => n === e)[0];
                                              null != t && l.Z.open(t, void 0, { analyticsLocations: n });
                                          })(n, G),
                                children: U(n)
                            },
                            a
                        );
                    }),
                    e.user.isStaff() && O.length > 0
                        ? (0, r.jsx)(i.MenuItem, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, r.jsx)(i.MenuGroup, {
                                  children: O.map((e) =>
                                      (0, r.jsx)(
                                          i.MenuRadioItem,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == n ? void 0 : n.id) === e.id,
                                              action: async () => {
                                                  if ((null == n ? void 0 : n.id) !== e.id) 200 === (await (0, g.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != n
                        ? (0, r.jsx)(i.MenuGroup, {
                              children: (0, r.jsx)(i.MenuItem, {
                                  id: 'clear-build-override',
                                  disabled: u,
                                  label: k.intl.string(k.t['/Nz9ra']),
                                  action: w,
                                  color: 'danger'
                              })
                          })
                        : null
                ]
            })
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.USER_SETTINGS_MENU]
);

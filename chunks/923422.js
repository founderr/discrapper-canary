t.r(n), t(47120), t(757143);
var r = t(200651),
    o = t(192379),
    i = t(481060),
    l = t(239091),
    a = t(230711),
    c = t(493544),
    u = t(108843),
    d = t(100527),
    s = t(906732),
    g = t(386506),
    m = t(366953),
    b = t(394644),
    f = t(606669),
    p = t(53432),
    _ = t(74869),
    h = t(828064),
    S = t(308512),
    x = t(594791),
    C = t(393431),
    M = t(69021),
    Z = t(981631),
    v = t(388032);
n.default = (0, u.Z)(
    function (e) {
        let { webBuildOverride: n, onSelect: t } = e,
            [u, d] = o.useState(!1),
            I = (0, h.Z)(),
            k = (0, S.Z)(),
            B = (0, p.Z)(),
            j = (0, f.Z)(),
            E = (0, C.Z)(),
            R = (0, x.Z)(),
            T = (0, _.Z)(),
            D = (0, M.Z)(),
            { analyticsLocations: G } = (0, s.ZP)(),
            O = o.useMemo(() => (0, m.j)(), []);
        async function U() {
            try {
                d(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                d(!1);
            }
        }
        let y = (e) => {
                switch (e) {
                    case Z.oAB.GAMES:
                        return I;
                    case Z.oAB.STREAMER_MODE:
                        return k;
                    case Z.oAB.APPEARANCE:
                        return B;
                    case Z.oAB.ACCESSIBILITY:
                        return j;
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
            w = (0, b.VO)()
                .filter((e) => {
                    let { section: n } = e;
                    return n !== c.ID.HEADER && n !== c.ID.CUSTOM && n !== c.ID.DIVIDER && 'logout' !== n;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, r.jsx)(s.Gt, {
            value: G,
            children: (0, r.jsxs)(i.Menu, {
                navId: 'user-settings-cog',
                onClose: l.Zy,
                'aria-label': v.intl.string(v.t.opYYHh),
                onSelect: t,
                children: [
                    w.map((e) => {
                        let { section: n, label: t, onClick: o } = e,
                            l = n.replace(/\W/gi, '_');
                        return (0, r.jsx)(
                            i.MenuItem,
                            {
                                id: l,
                                label: t,
                                action: () =>
                                    null != o
                                        ? o()
                                        : (function (e, n) {
                                              let t = Object.values(Z.oAB).filter((n) => n === e)[0];
                                              null != t && a.Z.open(t, void 0, { analyticsLocations: n });
                                          })(n, G),
                                children: y(n)
                            },
                            l
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
                                  label: v.intl.string(v.t['/Nz9ra']),
                                  action: U,
                                  color: 'danger'
                              })
                          })
                        : null
                ]
            })
        });
    },
    [d.Z.CONTEXT_MENU, d.Z.USER_SETTINGS_MENU]
);

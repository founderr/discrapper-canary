n.r(t), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    o = n(481060),
    l = n(239091),
    a = n(230711),
    c = n(493544),
    u = n(108843),
    s = n(100527),
    d = n(906732),
    g = n(386506),
    m = n(366953),
    b = n(991346),
    p = n(606669),
    f = n(53432),
    h = n(74869),
    _ = n(45570),
    S = n(308512),
    x = n(594791),
    C = n(393431),
    M = n(69021),
    Z = n(981631),
    k = n(388032);
t.default = (0, u.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [u, s] = r.useState(!1),
            I = (0, _.Z)(),
            v = (0, S.Z)(),
            j = (0, f.Z)(),
            B = (0, p.Z)(),
            E = (0, C.Z)(),
            R = (0, x.Z)(),
            y = (0, h.Z)(),
            T = (0, M.Z)(),
            { analyticsLocations: D } = (0, d.ZP)(),
            G = r.useMemo(() => (0, m.j)(), []);
        async function U() {
            try {
                s(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let O = (e) => {
                switch (e) {
                    case Z.oAB.GAMES:
                        return I;
                    case Z.oAB.STREAMER_MODE:
                        return v;
                    case Z.oAB.APPEARANCE:
                        return j;
                    case Z.oAB.ACCESSIBILITY:
                        return B;
                    case Z.oAB.VOICE:
                        return E;
                    case Z.oAB.TEXT:
                        return R;
                    case Z.oAB.EXPERIMENTS:
                        return y;
                    case Z.oAB.DEVELOPER_OPTIONS:
                        return T;
                    default:
                        return null;
                }
            },
            w = (0, b.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== c.ID.HEADER && t !== c.ID.CUSTOM && t !== c.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, i.jsx)(d.Gt, {
            value: D,
            children: (0, i.jsxs)(o.Menu, {
                navId: 'user-settings-cog',
                onClose: l.Zy,
                'aria-label': k.intl.string(k.t.opYYHh),
                onSelect: n,
                children: [
                    w.map((e) => {
                        let { section: t, label: n, onClick: r } = e,
                            l = t.replace(/\W/gi, '_');
                        return (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: l,
                                label: n,
                                action: () =>
                                    null != r
                                        ? r()
                                        : (function (e, t) {
                                              let n = Object.values(Z.oAB).filter((t) => t === e)[0];
                                              null != n && a.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, D),
                                children: O(t)
                            },
                            l
                        );
                    }),
                    e.user.isStaff() && G.length > 0
                        ? (0, i.jsx)(o.MenuItem, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, i.jsx)(o.MenuGroup, {
                                  children: G.map((e) =>
                                      (0, i.jsx)(
                                          o.MenuRadioItem,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  if ((null == t ? void 0 : t.id) !== e.id) 200 === (await (0, g.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(o.MenuGroup, {
                              children: (0, i.jsx)(o.MenuItem, {
                                  id: 'clear-build-override',
                                  disabled: u,
                                  label: k.intl.string(k.t['/Nz9ra']),
                                  action: U,
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

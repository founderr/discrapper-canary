l.d(t, {
    Z: function () {
        return g;
    }
});
var n = l(200651),
    i = l(192379),
    d = l(913527),
    u = l.n(d),
    r = l(442837),
    a = l(481060),
    o = l(87051),
    s = l(776568),
    c = l(818083),
    f = l(9156),
    m = l(621600),
    p = l(388032);
let b = (0, c.B)({
    kind: 'user',
    id: '2022-02_guild_folder_mute',
    label: 'Guild Folder Mute',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function g(e, t) {
    let { enabled: l } = b.useExperiment({ location: '74d87e_1' }, { autoTrackExposure: !1 }),
        d = (0, r.cj)([f.ZP], () => Object.fromEntries(e.map((e) => [e, f.ZP.isMuted(e)])), [e]),
        c = i.useCallback(
            (l) => {
                let n = Object.fromEntries(
                    e
                        .filter((e) => !d[e])
                        .map((e) => [
                            e,
                            {
                                muted: !0,
                                mute_config:
                                    null != l
                                        ? {
                                              selected_time_window: l,
                                              end_time: l > 0 ? u()().add(l, 'second').toISOString() : null
                                          }
                                        : void 0
                            }
                        ])
                );
                o.Z.updateGuildNotificationSettingsBulk(n, m.ZB.Muted, t);
            },
            [e, t, d]
        ),
        g = i.useCallback(() => {
            o.Z.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter((e) => d[e]).map((e) => [e, { muted: !1 }])), m.ZB.Unmuted, t);
        }, [e, t, d]);
    return l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(a.MenuItem, {
                      id: 'mute-folder',
                      label: p.intl.string(p.t.vBTk2N),
                      action: () => c(),
                      children: (0, s.k)().map((e) => {
                          let { value: t, label: l } = e;
                          return (0, n.jsx)(
                              a.MenuItem,
                              {
                                  id: ''.concat(t),
                                  label: l,
                                  action: () => c(t)
                              },
                              t
                          );
                      })
                  }),
                  (0, n.jsx)(a.MenuItem, {
                      id: 'unmute-folder',
                      label: p.intl.string(p.t.VFDdkZ),
                      action: g
                  })
              ]
          })
        : null;
}

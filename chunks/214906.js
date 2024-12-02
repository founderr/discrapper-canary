e.d(t, {
    Z: function () {
        return Z;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(913527),
    l = e.n(r),
    u = e(442837),
    a = e(481060),
    d = e(777861),
    o = e(569471),
    s = e(346479),
    c = e(776568),
    f = e(388032);
function Z(n) {
    let [t, e, r] = (0, u.Wu)([o.Z], () => [o.Z.isMuted(n.id), o.Z.getMuteConfig(n.id), o.Z.hasJoined(n.id)]),
        Z = (0, d.U)(e);
    function h(t) {
        s.Z.setNotificationSettings(n, { muted: t });
    }
    return r
        ? t
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'unmute-channel',
                  label: n.isForumPost() ? f.intl.string(f.t['0JQfsL']) : f.intl.string(f.t['Cq/TzM']),
                  subtext: Z,
                  action: () => h(!1)
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'mute-channel',
                  label: n.isForumPost() ? f.intl.string(f.t['nP+YkZ']) : f.intl.string(f.t.bUUd8v),
                  action: () => h(!0),
                  children: (0, c.k)().map((t) => {
                      let { value: e, label: r } = t;
                      return (0, i.jsx)(
                          a.MenuItem,
                          {
                              id: ''.concat(e),
                              label: r,
                              action: () =>
                                  (function (t) {
                                      let e = t > 0 ? l()().add(t, 'second').toISOString() : null;
                                      s.Z.setNotificationSettings(n, {
                                          muted: !0,
                                          mute_config: {
                                              selected_time_window: t,
                                              end_time: e
                                          }
                                      });
                                  })(e)
                          },
                          e
                      );
                  })
              })
        : (0, i.jsx)(a.MenuItem, {
              id: 'mute-disabled',
              label: n.isForumPost() ? f.intl.string(f.t['nP+YkZ']) : f.intl.string(f.t.bUUd8v),
              disabled: !0
          });
}

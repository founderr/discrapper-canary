n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(92114),
    u = n(776568),
    c = n(777861),
    d = n(9156),
    _ = n(621600),
    E = n(689938);
function f(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: i, muteConfig: f } = (0, o.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        h = (0, c.U)(f);
    if (null == n) return null;
    function p(e) {
        if (null == n) return;
        let r = e > 0 ? a()().add(e, 'second').toISOString() : null;
        l.Z.updateGuildNotificationSettings(
            n,
            {
                muted: !0,
                mute_config: {
                    selected_time_window: e,
                    end_time: r
                }
            },
            _.ZB.Muted,
            t
        );
    }
    return i
        ? (0, r.jsx)(s.MenuItem, {
              id: 'unmute-guild',
              label: E.Z.Messages.UNMUTE_SERVER,
              subtext: h,
              action: () => l.Z.updateGuildNotificationSettings(n, { muted: !1 }, _.ZB.Unmuted)
          })
        : (0, r.jsx)(s.MenuItem, {
              id: 'mute-guild',
              label: E.Z.Messages.MUTE_SERVER,
              action: () => l.Z.updateGuildNotificationSettings(n, { muted: !0 }, _.ZB.Muted),
              children: (0, u.k)().map((e) => {
                  let { value: t, label: n } = e;
                  return (0, r.jsx)(
                      s.MenuItem,
                      {
                          id: ''.concat(t),
                          label: n,
                          action: () => p(t)
                      },
                      t
                  );
              })
          });
}

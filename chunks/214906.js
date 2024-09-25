n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(777861),
    c = n(569471),
    d = n(346479),
    _ = n(776568),
    E = n(689938);
function f(e) {
    let [t, n, r] = (0, s.Wu)([c.Z], () => [c.Z.isMuted(e.id), c.Z.getMuteConfig(e.id), c.Z.hasJoined(e.id)]),
        a = (0, u.U)(n);
    function f(t) {
        let n = t > 0 ? o()().add(t, 'second').toISOString() : null,
            r = {
                muted: !0,
                mute_config: {
                    selected_time_window: t,
                    end_time: n
                }
            };
        d.Z.setNotificationSettings(e, r);
    }
    function h(t) {
        d.Z.setNotificationSettings(e, { muted: t });
    }
    return r
        ? t
            ? (0, i.jsx)(l.MenuItem, {
                  id: 'unmute-channel',
                  label: e.isForumPost() ? E.Z.Messages.UNMUTE_FORUM_POST : E.Z.Messages.UNMUTE_THREAD,
                  subtext: a,
                  action: () => h(!1)
              })
            : (0, i.jsx)(l.MenuItem, {
                  id: 'mute-channel',
                  label: e.isForumPost() ? E.Z.Messages.MUTE_FORUM_POST : E.Z.Messages.MUTE_THREAD,
                  action: () => h(!0),
                  children: (0, _.k)().map((e) => {
                      let { value: t, label: n } = e;
                      return (0, i.jsx)(
                          l.MenuItem,
                          {
                              id: ''.concat(t),
                              label: n,
                              action: () => f(t)
                          },
                          t
                      );
                  })
              })
        : (0, i.jsx)(l.MenuItem, {
              id: 'mute-disabled',
              label: e.isForumPost() ? E.Z.Messages.MUTE_FORUM_POST : E.Z.Messages.MUTE_THREAD,
              disabled: !0
          });
}

n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(913527),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(777861),
  c = n(569471),
  u = n(346479),
  d = n(776568),
  E = n(689938);

function _(e) {
  let [t, n, i] = (0, a.Wu)([c.Z], () => [c.Z.isMuted(e.id), c.Z.getMuteConfig(e.id), c.Z.hasJoined(e.id)]), _ = (0, o.U)(n);

  function I(t) {
    u.Z.setNotificationSettings(e, {
      muted: t
    })
  }
  return i ? t ? (0, s.jsx)(r.MenuItem, {
    id: "unmute-channel",
    label: e.isForumPost() ? E.Z.Messages.UNMUTE_FORUM_POST : E.Z.Messages.UNMUTE_THREAD,
    subtext: _,
    action: () => I(!1)
  }) : (0, s.jsx)(r.MenuItem, {
    id: "mute-channel",
    label: e.isForumPost() ? E.Z.Messages.MUTE_FORUM_POST : E.Z.Messages.MUTE_THREAD,
    action: () => I(!0),
    children: (0, d.k)().map(t => {
      let {
        value: n,
        label: i
      } = t;
      return (0, s.jsx)(r.MenuItem, {
        id: "".concat(n),
        label: i,
        action: () => (function(t) {
          let n = t > 0 ? l()().add(t, "second").toISOString() : null;
          u.Z.setNotificationSettings(e, {
            muted: !0,
            mute_config: {
              selected_time_window: t,
              end_time: n
            }
          })
        })(n)
      }, n)
    })
  }) : (0, s.jsx)(r.MenuItem, {
    id: "mute-disabled",
    label: e.isForumPost() ? E.Z.Messages.MUTE_FORUM_POST : E.Z.Messages.MUTE_THREAD,
    disabled: !0
  })
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("47120");
var n = a("735250");
a("470079");
var u = a("913527"),
  l = a.n(u),
  s = a("442837"),
  d = a("481060"),
  i = a("777861"),
  r = a("569471"),
  o = a("346479"),
  f = a("776568"),
  c = a("689938");

function M(e) {
  let [t, a, u] = (0, s.useStateFromStoresArray)([r.default], () => [r.default.isMuted(e.id), r.default.getMuteConfig(e.id), r.default.hasJoined(e.id)]), M = (0, i.useMutedUntilText)(a);

  function _(t) {
    o.default.setNotificationSettings(e, {
      muted: t
    })
  }
  return u ? t ? (0, n.jsx)(d.MenuItem, {
    id: "unmute-channel",
    label: e.isForumPost() ? c.default.Messages.UNMUTE_FORUM_POST : c.default.Messages.UNMUTE_THREAD,
    subtext: M,
    action: () => _(!1)
  }) : (0, n.jsx)(d.MenuItem, {
    id: "mute-channel",
    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
    action: () => _(!0),
    children: (0, f.getMuteTimes)().map(t => {
      let {
        value: a,
        label: u
      } = t;
      return (0, n.jsx)(d.MenuItem, {
        id: "".concat(a),
        label: u,
        action: () => (function(t) {
          let a = t > 0 ? l()().add(t, "second").toISOString() : null;
          o.default.setNotificationSettings(e, {
            muted: !0,
            mute_config: {
              selected_time_window: t,
              end_time: a
            }
          })
        })(a)
      }, a)
    })
  }) : (0, n.jsx)(d.MenuItem, {
    id: "mute-disabled",
    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
    disabled: !0
  })
}
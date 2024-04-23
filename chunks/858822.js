"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var l = n("913527"),
  a = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("92114"),
  u = n("776568"),
  d = n("777861"),
  c = n("9156"),
  f = n("621600"),
  E = n("689938");

function _(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: l,
      muteConfig: _
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      muted: null != n ? c.default.isMuted(n) : void 0,
      muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
    }), [n]),
    m = (0, d.useMutedUntilText)(_);
  return null == n ? null : l ? (0, s.jsx)(r.MenuItem, {
    id: "unmute-guild",
    label: E.default.Messages.UNMUTE_SERVER,
    subtext: m,
    action: () => o.default.updateGuildNotificationSettings(n, {
      muted: !1
    }, f.NotificationLabels.Unmuted)
  }) : (0, s.jsx)(r.MenuItem, {
    id: "mute-guild",
    label: E.default.Messages.MUTE_SERVER,
    action: () => o.default.updateGuildNotificationSettings(n, {
      muted: !0
    }, f.NotificationLabels.Muted),
    children: (0, u.getMuteTimes)().map(e => {
      let {
        value: l,
        label: i
      } = e;
      return (0, s.jsx)(r.MenuItem, {
        id: "".concat(l),
        label: i,
        action: () => (function(e) {
          if (null == n) return;
          let s = e > 0 ? a()().add(e, "second").toISOString() : null;
          o.default.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: s
            }
          }, f.NotificationLabels.Muted, t)
        })(l)
      }, l)
    })
  })
}
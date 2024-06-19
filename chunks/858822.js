n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(913527),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(92114),
  c = n(776568),
  u = n(777861),
  d = n(9156),
  E = n(621600),
  _ = n(689938);

function I(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: i,
      muteConfig: I
    } = (0, a.cj)([d.ZP], () => ({
      muted: null != n ? d.ZP.isMuted(n) : void 0,
      muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
    }), [n]),
    T = (0, u.U)(I);
  return null == n ? null : i ? (0, s.jsx)(r.MenuItem, {
    id: "unmute-guild",
    label: _.Z.Messages.UNMUTE_SERVER,
    subtext: T,
    action: () => o.Z.updateGuildNotificationSettings(n, {
      muted: !1
    }, E.ZB.Unmuted)
  }) : (0, s.jsx)(r.MenuItem, {
    id: "mute-guild",
    label: _.Z.Messages.MUTE_SERVER,
    action: () => o.Z.updateGuildNotificationSettings(n, {
      muted: !0
    }, E.ZB.Muted),
    children: (0, c.k)().map(e => {
      let {
        value: i,
        label: a
      } = e;
      return (0, s.jsx)(r.MenuItem, {
        id: "".concat(i),
        label: a,
        action: () => (function(e) {
          if (null == n) return;
          let s = e > 0 ? l()().add(e, "second").toISOString() : null;
          o.Z.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: s
            }
          }, E.ZB.Muted, t)
        })(i)
      }, i)
    })
  })
}
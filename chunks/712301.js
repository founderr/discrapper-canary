"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var a = l("735250");
l("470079");
var u = l("442837"),
  n = l("481060"),
  d = l("749210"),
  s = l("287734"),
  r = l("933557"),
  i = l("314897"),
  o = l("592125"),
  f = l("984933"),
  c = l("271383"),
  E = l("430824"),
  m = l("496675"),
  M = l("699516"),
  S = l("594174"),
  _ = l("979651"),
  g = l("934415"),
  I = l("700785"),
  R = l("981631"),
  C = l("689938");

function A(e, t) {
  let l = (0, u.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
    A = (0, u.useStateFromStores)([_.default, o.default], () => {
      let l = _.default.getUserVoiceChannelId(t, e.id);
      return o.default.getChannel(l)
    }, [t, e.id]);
  if ((0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]) || null == A) return null;
  let T = e.id === i.default.getId();
  if (!T && !m.default.can(R.Permissions.MOVE_MEMBERS, A)) return null;
  let N = l.filter(t => {
    let {
      channel: l
    } = t;
    return l.id !== A.id && (T ? m.default.can(R.Permissions.CONNECT, l) && !(0, g.isChannelFull)(l, _.default, E.default) : m.default.can(R.Permissions.MOVE_MEMBERS, l) && (m.default.can(R.Permissions.CONNECT, l) || I.can({
      permission: R.Permissions.CONNECT,
      user: e,
      context: l
    })) && !(0, g.isChannelFull)(l, _.default, E.default))
  });
  return 0 === N.length ? null : (0, a.jsx)(n.MenuItem, {
    id: "voice-move",
    label: C.default.Messages.MOVE_TO,
    children: N.map(l => {
      let {
        channel: u
      } = l;
      return (0, a.jsx)(n.MenuItem, {
        id: u.id,
        action: () => {
          var l;
          return l = u, void(e.id === i.default.getId() ? s.default.selectVoiceChannel(l.id) : d.default.setChannel(t, e.id, l.id))
        },
        label: (0, r.computeChannelName)(u, S.default, M.default)
      }, u.id)
    })
  })
}
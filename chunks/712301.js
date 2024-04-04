"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  s = a("749210"),
  d = a("287734"),
  r = a("933557"),
  i = a("314897"),
  o = a("592125"),
  f = a("984933"),
  c = a("271383"),
  m = a("430824"),
  M = a("496675"),
  E = a("699516"),
  S = a("594174"),
  _ = a("979651"),
  g = a("934415"),
  I = a("700785"),
  C = a("981631"),
  R = a("689938");

function N(e, t) {
  let a = (0, n.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
    N = (0, n.useStateFromStores)([_.default, o.default], () => {
      let a = _.default.getUserVoiceChannelId(t, e.id);
      return o.default.getChannel(a)
    }, [t, e.id]);
  if ((0, n.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]) || null == N) return null;
  let A = e.id === i.default.getId();
  if (!A && !M.default.can(C.Permissions.MOVE_MEMBERS, N)) return null;
  let T = a.filter(t => {
    let {
      channel: a
    } = t;
    return a.id !== N.id && (A ? M.default.can(C.Permissions.CONNECT, a) && !(0, g.isChannelFull)(a, _.default, m.default) : M.default.can(C.Permissions.MOVE_MEMBERS, a) && (M.default.can(C.Permissions.CONNECT, a) || I.can({
      permission: C.Permissions.CONNECT,
      user: e,
      context: a
    })) && !(0, g.isChannelFull)(a, _.default, m.default))
  });
  return 0 === T.length ? null : (0, l.jsx)(u.MenuItem, {
    id: "voice-move",
    label: R.default.Messages.MOVE_TO,
    children: T.map(a => {
      let {
        channel: n
      } = a;
      return (0, l.jsx)(u.MenuItem, {
        id: n.id,
        action: () => {
          var a;
          return a = n, void(e.id === i.default.getId() ? d.default.selectVoiceChannel(a.id) : s.default.setChannel(t, e.id, a.id))
        },
        label: (0, r.computeChannelName)(n, S.default, E.default)
      }, n.id)
    })
  })
}
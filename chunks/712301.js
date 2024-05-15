"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
});
var a = l("735250");
l("470079");
var u = l("442837"),
  n = l("481060"),
  s = l("749210"),
  d = l("287734"),
  r = l("933557"),
  i = l("314897"),
  o = l("592125"),
  f = l("984933"),
  c = l("271383"),
  E = l("430824"),
  M = l("496675"),
  S = l("699516"),
  m = l("594174"),
  _ = l("979651"),
  g = l("934415"),
  R = l("700785"),
  A = l("981631"),
  C = l("689938");

function N(e, t) {
  let l = (0, u.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
    N = (0, u.useStateFromStores)([_.default, o.default], () => {
      let l = _.default.getUserVoiceChannelId(t, e.id);
      return o.default.getChannel(l)
    }, [t, e.id]);
  if ((0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]) || null == N) return null;
  let I = e.id === i.default.getId();
  if (!I && !M.default.can(A.Permissions.MOVE_MEMBERS, N)) return null;
  let O = l.filter(t => {
    let {
      channel: l
    } = t;
    return l.id !== N.id && (I ? M.default.can(A.Permissions.CONNECT, l) && !(0, g.isChannelFull)(l, _.default, E.default) : M.default.can(A.Permissions.MOVE_MEMBERS, l) && (M.default.can(A.Permissions.CONNECT, l) || R.can({
      permission: A.Permissions.CONNECT,
      user: e,
      context: l
    })) && !(0, g.isChannelFull)(l, _.default, E.default))
  });
  return 0 === O.length ? null : (0, a.jsx)(n.MenuItem, {
    id: "voice-move",
    label: C.default.Messages.MOVE_TO,
    children: O.map(l => {
      let {
        channel: u
      } = l;
      return (0, a.jsx)(n.MenuItem, {
        id: u.id,
        action: () => {
          var l;
          return l = u, void(e.id === i.default.getId() ? d.default.selectVoiceChannel(l.id) : s.default.setChannel(t, e.id, l.id))
        },
        label: (0, r.computeChannelName)(u, m.default, S.default)
      }, u.id)
    })
  })
}
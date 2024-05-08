"use strict";
u.r(t), u.d(t, {
  default: function() {
    return E
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("828214"),
  d = u("287734"),
  s = u("208049"),
  i = u("893663"),
  o = u("496675"),
  r = u("944486"),
  f = u("981631"),
  c = u("689938");

function E(e, t) {
  let u = (0, a.useStateFromStores)([o.default], () => o.default.can(f.Permissions.CONNECT, e), [e]),
    E = (0, a.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
    M = (0, i.useCustomJoinSound)(t),
    _ = E === e.id;
  return e.isGuildVocal() && u && null != M && !_ ? (0, n.jsx)(l.MenuItem, {
    id: "join-muted-custom-join-sound",
    label: c.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
    action: () => {
      (0, s.muteCustomJoinSound)(e.id), d.default.selectVoiceChannel(e.id)
    }
  }) : null
}
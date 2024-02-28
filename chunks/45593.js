"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  u = n("18054"),
  s = n("843624"),
  d = n("259141"),
  r = n("957255"),
  o = n("207273"),
  c = n("49111"),
  f = n("782340");

function _(e, t) {
  let _ = (0, l.useStateFromStores)([r.default], () => r.default.can(c.Permissions.MANAGE_CHANNELS, t)),
    E = (0, l.useStateFromStores)([r.default], () => r.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)),
    S = (0, d.useIsConnectedToVoiceChannel)(e),
    N = (0, l.useStateFromStores)([o.default], () => o.default.getChannelStatus(e)),
    T = null != N && N.length > 0;
  return e.isGuildVoice() && (_ || E) ? !S && _ && T ? (0, a.jsx)(i.MenuItem, {
    id: "clear-status",
    label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
    action: () => {
      u.default.updateVoiceChannelStatus(e.id, "")
    }
  }) : S && E ? (0, a.jsx)(i.MenuItem, {
    id: "set-status",
    label: f.default.Messages.VOICE_CHANNEL_SET_STATUS,
    action: () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("843624").then(n.bind(n, "843624"));
        return n => (0, a.jsx)(t, {
          channel: e,
          ...n
        })
      }, {
        modalKey: s.VOICE_CHANNEL_STATUS_MODAL_KEY
      })
    }
  }) : null : null
}
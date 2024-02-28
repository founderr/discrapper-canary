"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var n = l("37983");
l("884691");
var a = l("65597"),
  s = l("77078"),
  u = l("926994"),
  r = l("495194"),
  o = l("945956"),
  i = l("800762"),
  d = l("889486"),
  c = l("261552"),
  f = l("742898"),
  C = l("424024"),
  h = l("49111"),
  S = l("782340");

function T(e) {
  let t = (0, a.default)([o.default], () => o.default.getChannelId() === e.id),
    T = (0, c.default)(),
    N = (null == T ? void 0 : T.channelId) === e.id,
    m = (0, r.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
    _ = (0, r.default)(e),
    A = (0, a.default)([i.default], () => i.default.isInChannel(e.id)),
    L = !A && _ || m,
    g = (0, f.default)();
  if (!N && 0 === g.length) return null;
  let I = t => {
    if (!t.twoWayLink || t.revoked) {
      (0, u.default)(t.type, "Console Transfer Item");
      return
    }
    t.type === h.PlatformTypes.XBOX ? (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("613895").then(l.bind(l, "613895"));
      return l => (0, n.jsx)(t, {
        ...l,
        channel: e
      })
    }) : (t.type === h.PlatformTypes.PLAYSTATION || t.type === h.PlatformTypes.PLAYSTATION_STAGING) && (0, s.openModalLazy)(async () => {
      let {
        default: a
      } = await l.el("962512").then(l.bind(l, "962512"));
      return l => (0, n.jsx)(a, {
        ...l,
        platform: t.type,
        channel: e
      })
    })
  };
  return (0, n.jsx)(n.Fragment, {
    children: N ? (0, n.jsx)(s.MenuItem, {
      label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
      id: "handoff",
      action: () => {
        (0, d.handoffRemote)(T)
      },
      icon: (0, C.default)(void 0),
      disabled: L
    }) : g.map(e => (0, n.jsx)(s.MenuItem, {
      id: "transfer-".concat(e.type, "-").concat(e.id),
      label: function(e, t) {
        if (e === h.PlatformTypes.XBOX) return t ? S.default.Messages.TRANSFER_VOICE_TO_XBOX : S.default.Messages.JOIN_ON_XBOX;
        if (e === h.PlatformTypes.PLAYSTATION) return t ? S.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
        if (e === h.PlatformTypes.PLAYSTATION_STAGING) return t ? S.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
      }(e.type, t),
      action: () => I(e),
      icon: (0, C.default)(e.type),
      disabled: L
    }, e.id))
  })
}
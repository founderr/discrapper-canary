"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("735250");
n("470079");
var u = n("399606"),
  a = n("481060"),
  i = n("231757"),
  r = n("397639"),
  d = n("19780"),
  s = n("979651"),
  o = n("951206"),
  c = n("446226"),
  f = n("937393"),
  E = n("721351"),
  S = n("981631"),
  C = n("689938");

function N(e) {
  let t = (0, u.useStateFromStores)([d.default], () => d.default.getChannelId() === e.id),
    N = (0, c.default)(),
    h = (null == N ? void 0 : N.channelId) === e.id,
    _ = (0, r.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
    m = (0, r.default)(e),
    T = !(0, u.useStateFromStores)([s.default], () => s.default.isInChannel(e.id)) && m || _,
    v = (0, f.default)();
  if (!h && 0 === v.length) return null;
  let I = t => {
    if (!t.twoWayLink || t.revoked) {
      (0, i.default)({
        platformType: t.type,
        location: "Console Transfer Item"
      });
      return
    }
    t.type === S.PlatformTypes.XBOX ? (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("73422"), n.e("522")]).then(n.bind(n, "200623"));
      return n => (0, l.jsx)(t, {
        ...n,
        channel: e
      })
    }) : (t.type === S.PlatformTypes.PLAYSTATION || t.type === S.PlatformTypes.PLAYSTATION_STAGING) && (0, a.openModalLazy)(async () => {
      let {
        default: u
      } = await Promise.all([n.e("99387"), n.e("638")]).then(n.bind(n, "543974"));
      return n => (0, l.jsx)(u, {
        ...n,
        platform: t.type,
        channel: e
      })
    })
  };
  return (0, l.jsx)(l.Fragment, {
    children: h ? (0, l.jsx)(a.MenuItem, {
      label: C.default.Messages.TRANSFER_VOICE_TO_DEVICE,
      id: "handoff",
      action: () => {
        (0, o.handoffRemote)(N)
      },
      icon: (0, E.default)(void 0),
      disabled: T
    }) : v.map(e => (0, l.jsx)(a.MenuItem, {
      id: "transfer-".concat(e.type, "-").concat(e.id),
      label: function(e, t) {
        if (e === S.PlatformTypes.XBOX) return t ? C.default.Messages.TRANSFER_VOICE_TO_XBOX : C.default.Messages.JOIN_ON_XBOX;
        if (e === S.PlatformTypes.PLAYSTATION) return t ? C.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : C.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
        if (e === S.PlatformTypes.PLAYSTATION_STAGING) return t ? C.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : C.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
      }(e.type, t),
      action: () => I(e),
      icon: (0, E.default)(e.type),
      disabled: T
    }, e.id))
  })
}
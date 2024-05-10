"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("735250");
n("470079");
var a = n("399606"),
  i = n("481060"),
  u = n("231757"),
  s = n("397639"),
  r = n("19780"),
  d = n("979651"),
  o = n("951206"),
  c = n("446226"),
  f = n("937393"),
  E = n("721351"),
  S = n("981631"),
  N = n("689938");

function _(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId() === e.id),
    _ = (0, c.default)(),
    C = (null == _ ? void 0 : _.channelId) === e.id,
    g = (0, s.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
    L = (0, s.default)(e),
    h = !(0, a.useStateFromStores)([d.default], () => d.default.isInChannel(e.id)) && L || g,
    T = (0, f.default)();
  if (!C && 0 === T.length) return null;
  let I = t => {
    if (!t.twoWayLink || t.revoked) {
      (0, u.default)({
        platformType: t.type,
        location: "Console Transfer Item"
      });
      return
    }
    t.type === S.PlatformTypes.XBOX ? (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("14734"), n.e("522")]).then(n.bind(n, "200623"));
      return n => (0, l.jsx)(t, {
        ...n,
        channel: e
      })
    }) : (t.type === S.PlatformTypes.PLAYSTATION || t.type === S.PlatformTypes.PLAYSTATION_STAGING) && (0, i.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("99387"), n.e("638")]).then(n.bind(n, "543974"));
      return n => (0, l.jsx)(a, {
        ...n,
        platform: t.type,
        channel: e
      })
    })
  };
  return (0, l.jsx)(l.Fragment, {
    children: C ? (0, l.jsx)(i.MenuItem, {
      label: N.default.Messages.TRANSFER_VOICE_TO_DEVICE,
      id: "handoff",
      action: () => {
        (0, o.handoffRemote)(_)
      },
      icon: (0, E.default)(void 0),
      disabled: h
    }) : T.map(e => (0, l.jsx)(i.MenuItem, {
      id: "transfer-".concat(e.type, "-").concat(e.id),
      label: function(e, t) {
        if (e === S.PlatformTypes.XBOX) return t ? N.default.Messages.TRANSFER_VOICE_TO_XBOX : N.default.Messages.JOIN_ON_XBOX;
        if (e === S.PlatformTypes.PLAYSTATION) return t ? N.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : N.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
        if (e === S.PlatformTypes.PLAYSTATION_STAGING) return t ? N.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : N.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
      }(e.type, t),
      action: () => I(e),
      icon: (0, E.default)(e.type),
      disabled: h
    }, e.id))
  })
}
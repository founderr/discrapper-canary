"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("442837"),
  r = a("481060"),
  o = a("797258"),
  u = a("374129"),
  d = a("639351"),
  c = a("565473"),
  f = a("927923"),
  E = a("689938"),
  h = a("106161");

function _(e) {
  let {
    platform: t
  } = e;
  return t === f.GameConsoleTypes.XBOX ? (0, n.jsx)(d.default, {
    className: h.icon
  }) : t === f.GameConsoleTypes.PLAYSTATION ? (0, n.jsx)(u.default, {
    className: h.icon
  }) : null
}

function C(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: a
  } = e, s = null != a ? (0, c.coercePlatformTypeToConsoleType)(a.type) : null, u = (0, i.useStateFromStores)([o.default], () => {
    var e, a;
    return null === (e = o.default.getSessionById(null !== (a = null == t ? void 0 : t.sessionId) && void 0 !== a ? a : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), d = null != s ? s : u;
  if (null == d || !f.GAME_CONSOLE_SESSIONS.has(d)) return null;
  let C = null != a,
    m = C ? d === f.GameConsoleTypes.XBOX ? E.default.Messages.XBOX_TRANSFERRING_ELLIPSIS : E.default.Messages.PLAYSTATION_TRANSFERRING_ELLIPSIS : d === f.GameConsoleTypes.XBOX ? E.default.Messages.XBOX_REMOTE_CONNECTED.format() : E.default.Messages.PLAYSTATION_REMOTE_CONNECTED.format();
  return (0, n.jsxs)("div", {
    className: l()(h.root, C ? h.connecting : h.connected),
    children: [(0, n.jsx)(_, {
      platform: d
    }), (0, n.jsx)(r.Text, {
      color: C ? "header-primary" : "always-white",
      variant: "text-xs/medium",
      children: m
    })]
  })
}
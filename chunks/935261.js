n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(797258),
  c = n(374129),
  u = n(639351),
  d = n(565473),
  E = n(927923),
  h = n(689938),
  _ = n(803042);

function I(e) {
  let {
    platform: t
  } = e;
  return t === E.YE.XBOX ? (0, s.jsx)(u.Z, {
    className: _.icon
  }) : t === E.YE.PLAYSTATION ? (0, s.jsx)(c.Z, {
    className: _.icon
  }) : null
}

function m(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, i = null != n ? (0, d.y)(n.type) : null, c = (0, a.e7)([o.Z], () => {
    var e, n;
    return null === (e = o.Z.getSessionById(null !== (n = null == t ? void 0 : t.sessionId) && void 0 !== n ? n : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), u = null != i ? i : c;
  if (null == u || !E.al.has(u)) return null;
  let m = null != n,
    T = m ? u === E.YE.XBOX ? h.Z.Messages.XBOX_TRANSFERRING_ELLIPSIS : h.Z.Messages.PLAYSTATION_TRANSFERRING_ELLIPSIS : u === E.YE.XBOX ? h.Z.Messages.XBOX_REMOTE_CONNECTED.format() : h.Z.Messages.PLAYSTATION_REMOTE_CONNECTED.format();
  return (0, s.jsxs)("div", {
    className: l()(_.root, m ? _.connecting : _.connected),
    children: [(0, s.jsx)(I, {
      platform: u
    }), (0, s.jsx)(r.Text, {
      color: m ? "header-primary" : "always-white",
      variant: "text-xs/medium",
      children: T
    })]
  })
}
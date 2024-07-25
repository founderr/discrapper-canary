t.d(n, {
  m$: function() {
return h;
  },
  wV: function() {
return g;
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817);
var r = t(470079),
  u = t(442837),
  l = t(470956),
  i = t(314897),
  c = t(592125),
  a = t(19780),
  o = t(979651),
  s = t(729303),
  d = t(651941),
  f = t(441894);

function C(e) {
  let n = (0, u.e7)([o.Z], () => o.Z.getVoiceStatesForChannel(e)),
t = r.useMemo(() => Object.keys(n), [n]);
  return (0, l.Yp)(e, t);
}

function E(e) {
  let {
channelId: n,
location: t
  } = e, r = (0, f.J)({
channelId: n,
location: t
  }), l = (0, u.e7)([c.Z], () => {
var e;
return (null === (e = c.Z.getChannel(n)) || void 0 === e ? void 0 : e.isGuildStageVoice()) === !0;
  });
  return r && !l;
}

function Z(e) {
  let [n, t, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
a.Z,
d.Z,
s.Z
  ];
  if (null == e)
return !1;
  let u = n.getSecureFramesRosterMapEntry(e);
  if (null == u)
return !1;
  let l = new Uint8Array(u);
  return t.isKeyVerified(e, l) || r.isKeyVerified(e, l);
}

function g(e) {
  let {
userId: n,
channelId: t,
location: r
  } = e, l = C(t), c = E({
channelId: t,
location: r
  }), o = (0, u.e7)([i.default], () => i.default.getId()), f = (0, u.e7)([
a.Z,
d.Z,
s.Z
  ], () => Z(n, [
a.Z,
d.Z,
s.Z
  ]));
  return o !== n && c && f && l.has(o) && null != n && l.has(n);
}

function h(e) {
  let {
channelId: n,
location: t
  } = e, l = C(n), c = E({
channelId: n,
location: t
  }), a = (0, u.e7)([i.default], () => i.default.getId());
  return r.useMemo(() => !!(c && l.has(a)) && Array.from(l).every(e => Z(e) || e === a), [
a,
c,
l
  ]);
}
t.d(n, {
  Z: function() {
return o;
  }
}), t(47120);
var a = t(470079),
  l = t(442837),
  r = t(592125),
  i = t(9156);

function o(e) {
  let n = (0, l.e7)([r.Z], () => r.Z.getPrivateChannelsVersion()),
t = (0, l.e7)([r.Z], () => r.Z.getMutableDMsByUserIds(), [n]),
o = (0, l.e7)([i.ZP], () => i.ZP.getMutedChannels(null)),
u = a.useMemo(() => {
  let e = new Set();
  for (let n in t) {
    let a = t[n];
    null != a && o.has(a) && e.add(n);
  }
  return e;
}, [
  t,
  o
]);
  return a.useMemo(() => null == e ? void 0 : e.filter(e => {
for (let n of e.participants)
  if (u.has(n))
    return !1;
return !0;
  }), [
e,
u
  ]);
}
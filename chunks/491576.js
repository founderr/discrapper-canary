t.d(n, {
  Z: function() {
    return o
  }
}), t(653041), t(47120);
var l = t(470079),
  i = t(442837),
  r = t(430824),
  s = t(973001);

function o(e) {
  let {
    application: n,
    showMutualGuilds: t = !0
  } = e, o = (0, i.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == n ? void 0 : n.id), [n]), a = (0, i.e7)([r.Z], () => r.Z.isLoaded());
  return l.useMemo(() => {
    let e = [];
    if (!a || !t || null == o || null == n) return e;
    for (let n of o) {
      let t = r.Z.getGuild(n);
      null != t && e.push(t)
    }
    return e
  }, [a, o, n, t])
}
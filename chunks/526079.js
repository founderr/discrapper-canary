t.d(i, {
  Z: function() {
    return o
  }
});
var s = t(470079),
  n = t(512722),
  l = t.n(n),
  a = t(442837),
  u = t(430824),
  d = t(771845),
  r = t(594174);

function o(e) {
  let {
    isGuildIncluded: i,
    selectedGuildId: t
  } = e, n = (0, a.e7)([d.ZP], () => d.ZP.getFlattenedGuildIds()), o = (0, a.e7)([u.Z], () => u.Z.getGuilds()), c = (0, a.e7)([r.default], () => r.default.getCurrentUser());
  return {
    options: s.useMemo(() => null == c ? [] : (null == i ? n : n.filter(e => {
      let t = o[e];
      return l()(null != t, "guild should not be null"), i(t, c)
    })).map(e => {
      let i = o[e];
      return l()(null != i, "guild should not be null"), {
        label: i.name,
        value: i.id
      }
    }), [n, o, c, i]),
    selectedGuild: null == t ? void 0 : o[t]
  }
}
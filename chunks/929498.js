n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(719247),
  s = n(26033),
  o = n(561308),
  l = n(199902),
  u = n(158776),
  c = n(981631);

function d(e) {
  let t = (0, i.e7)([u.Z], () => u.Z.getActivities(e)),
n = (0, i.e7)([a.ZP], () => a.ZP.getUserOutbox(e)),
d = (0, i.e7)([l.Z], () => l.Z.getAnyStreamForUser(e)),
{
  live: _,
  recent: E
} = (0, r.useMemo)(() => {
  let e = t.filter(e => {
      let {
        type: t
      } = e;
      return t !== c.IIU.CUSTOM_STATUS;
    }),
    r = null == n ? void 0 : n.entries.filter(t => (0, s.r5)(t) ? !e.some(e => null != e && (0, a.RL)(t, e)) : !(0, o.kr)(t));
  return {
    live: e,
    recent: null != r ? r : []
  };
}, [
  t,
  n
]);
  return {
live: _,
recent: E,
stream: d
  };
}
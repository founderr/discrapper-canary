n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r = n(470079),
  i = n(392711),
  a = n(442837),
  s = n(719247),
  o = n(26033),
  l = n(561308),
  u = n(199902),
  c = n(158776),
  d = n(981631);

function _(e) {
  let t = (0, a.e7)([c.Z], () => c.Z.getActivities(e)),
n = (0, a.e7)([s.ZP], () => s.ZP.getUserOutbox(e)),
_ = (0, a.e7)([u.Z], () => u.Z.getAnyStreamForUser(e)),
{
  live: E,
  recent: f
} = (0, r.useMemo)(() => {
  let e = (0, i.uniqWith)(t.filter(e => {
      let {
        type: t
      } = e;
      return t !== d.IIU.CUSTOM_STATUS;
    }), (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id),
    r = null == n ? void 0 : n.entries.filter(t => (0, o.r5)(t) ? !e.some(e => null != e && (0, s.RL)(t, e)) : !(0, l.kr)(t));
  return {
    live: e,
    recent: null != r ? r : []
  };
}, [
  t,
  n
]);
  return {
live: E,
recent: f,
stream: _
  };
}
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
  var t;
  let n = (0, i.e7)([u.Z], () => u.Z.getActivities(e)),
d = (0, i.e7)([l.Z], () => null != l.Z.getAnyStreamForUser(e)),
_ = (0, r.useMemo)(() => {
  var e;
  let t = n.filter(e => {
    let {
      type: t
    } = e;
    return t !== c.IIU.CUSTOM_STATUS;
  });
  if (!d)
    return t;
  let r = null !== (e = t.find(e => {
    let {
      type: t
    } = e;
    return t === c.IIU.PLAYING;
  })) && void 0 !== e ? e : null;
  return null === r ? [
    null,
    ...t
  ] : [
    r,
    ...t.filter(e => e !== r)
  ];
}, [
  n,
  d
]),
E = (0, i.e7)([a.ZP], () => a.ZP.getUserOutbox(e)),
f = (0, r.useMemo)(() => null == E || 0 === E.entries.length ? [] : E.entries.filter(e => (0, s.r5)(e) ? !_.some(t => null != t && (0, a.RL)(e, t)) : !(0, o.kr)(e)), [
  E,
  _
]);
  return {
live: _,
recent: f,
featured: null !== (t = _[0]) && void 0 !== t ? t : null,
isApplicationStreaming: d
  };
}
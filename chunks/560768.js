n.d(t, {
  Z: function() {
    return l
  }
}), n(789020);
var i = n(630388),
  s = n(620662),
  a = n(981631);

function l(e, t, n, l) {
  let o = null == t ? void 0 : t.application_id;
  if (null == e || null == t || !(0, s.Z)(t, a.xjy.JOIN) || null == o) return !1;
  let r = l.getApplication(o);
  return !(null == r || (0, i.yE)(r.flags, a.udG.EMBEDDED)) && n.shouldShowEducation(o)
}
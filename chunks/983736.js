n.d(t, {
  OA: function() {
    return s
  },
  _C: function() {
    return l
  },
  kT: function() {
    return i
  }
});
var r = n(823379),
  o = n(246364),
  a = n(592286);
let s = e => {
  let {
    required: t,
    response: n,
    field_type: a
  } = e;
  if (!t) return !0;
  if (null == n) return !1;
  switch (a) {
    case o.QJ.TERMS:
    case o.QJ.VERIFICATION:
      return !!n;
    case o.QJ.TEXT_INPUT:
    case o.QJ.PARAGRAPH:
      return "string" == typeof n && "" !== n.trim();
    case o.QJ.MULTIPLE_CHOICE:
      return "number" == typeof n;
    default:
      return (0, r.vE)(a)
  }
};

function i(e) {
  return a.lI.has(null == e ? void 0 : e.field_type)
}

function l(e) {
  return a.hZ.has(null == e ? void 0 : e.field_type)
}
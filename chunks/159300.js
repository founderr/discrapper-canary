l.d(n, {
  b: function() {
    return i
  }
});
var t = l(981631);

function i(e, n, l, i) {
  let r = null != l ? l : n;
  return null != r && e.can(t.Plq.CREATE_INSTANT_INVITE, r) || null != n && null != n.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
}
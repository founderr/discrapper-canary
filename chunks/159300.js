t.d(e, {
  b: function() {
    return u
  }
});
var i = t(981631);

function u(n, e, t, u) {
  let l = null != t ? t : e;
  return null != l && n.can(i.Plq.CREATE_INSTANT_INVITE, l) || null != e && null != e.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
}
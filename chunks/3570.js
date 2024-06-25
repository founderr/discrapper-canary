n.d(t, {
  T: function() {
    return o
  },
  s: function() {
    return u
  }
});
var s = n(536285),
  r = n(703656),
  i = n(314897),
  l = n(358085),
  a = n(981631);
let o = l.isPlatformEmbedded ? a.dG4 : (e, t) => {
    if (!(0, r.DB)()) return s.default.request(a.Etm.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  u = l.isPlatformEmbedded ? a.dG4 : (e, t) => {
    if (!i.default.isAuthenticated()) return o(e, {
      ...t || {},
      fingerprint: i.default.getFingerprint()
    })
  }
n.d(t, {
  T: function() {
    return o
  },
  s: function() {
    return c
  }
});
var s = n(536285),
  i = n(703656),
  r = n(314897),
  a = n(358085),
  l = n(981631);
let o = a.isPlatformEmbedded ? l.dG4 : (e, t) => {
    if (!(0, i.DB)()) return s.default.request(l.Etm.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  c = a.isPlatformEmbedded ? l.dG4 : (e, t) => {
    if (!r.default.isAuthenticated()) return o(e, {
      ...t || {},
      fingerprint: r.default.getFingerprint()
    })
  }
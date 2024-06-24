t.d(s, {
  T: function() {
    return o
  },
  s: function() {
    return c
  }
});
var n = t(536285),
  r = t(703656),
  i = t(314897),
  a = t(358085),
  l = t(981631);
let o = a.isPlatformEmbedded ? l.dG4 : (e, s) => {
    if (!(0, r.DB)()) return n.default.request(l.Etm.DEEP_LINK, {
      type: e,
      params: s
    })
  },
  c = a.isPlatformEmbedded ? l.dG4 : (e, s) => {
    if (!i.default.isAuthenticated()) return o(e, {
      ...s || {},
      fingerprint: i.default.getFingerprint()
    })
  }
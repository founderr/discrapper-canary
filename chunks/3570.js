n.d(e, {
    T: function () {
        return o;
    },
    s: function () {
        return s;
    }
});
var l = n(536285),
    i = n(703656),
    r = n(314897),
    a = n(358085),
    u = n(981631);
let o = a.isPlatformEmbedded
        ? u.dG4
        : (t, e) => {
              if (!(0, i.DB)())
                  return l.default.request(u.Etm.DEEP_LINK, {
                      type: t,
                      params: e
                  });
          },
    s = a.isPlatformEmbedded
        ? u.dG4
        : (t, e) => {
              if (!r.default.isAuthenticated())
                  return o(t, {
                      ...(e || {}),
                      fingerprint: r.default.getFingerprint()
                  });
          };

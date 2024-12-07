e.d(t, {
    Z: function () {
        return a;
    }
});
var i = e(200651);
e(192379);
var l = e(794295),
    r = e(388032),
    u = e(83909);
function a(n) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: e } = n;
    return null == t && null == e
        ? null
        : (0, i.jsxs)('span', {
              className: u.text,
              children: [
                  null != t &&
                      (0, i.jsx)(l.Z, {
                          href: t,
                          children: r.intl.string(r.t['8S0kcH'])
                      }),
                  null != t &&
                      null != e &&
                      (0, i.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != e &&
                      (0, i.jsx)(l.Z, {
                          href: e,
                          children: r.intl.string(r.t.ZpyeCg)
                      })
              ]
          });
}

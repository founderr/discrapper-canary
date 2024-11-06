e.d(t, {
    Z: function () {
        return a;
    }
});
var l = e(200651);
e(192379);
var i = e(794295),
    r = e(388032),
    u = e(130685);
function a(n) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: e } = n;
    return null == t && null == e
        ? null
        : (0, l.jsxs)('span', {
              className: u.text,
              children: [
                  null != t &&
                      (0, l.jsx)(i.Z, {
                          href: t,
                          children: r.intl.string(r.t['8S0kcH'])
                      }),
                  null != t &&
                      null != e &&
                      (0, l.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != e &&
                      (0, l.jsx)(i.Z, {
                          href: e,
                          children: r.intl.string(r.t.ZpyeCg)
                      })
              ]
          });
}

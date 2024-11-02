n.d(e, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    a = n(906732),
    u = n(313201),
    c = n(594174),
    s = n(74538),
    l = n(242291),
    d = n(710111),
    f = n(388032);
function p(t, e) {
    let { analyticsLocations: n } = (0, a.ZP)(),
        p = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        w = (0, u.Dt)(),
        b = (0, u.Dt)();
    return null != e && s.ZP.canUseCustomCallSounds(p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.MenuItem, {
                      id: w,
                      label: f.intl.string(f.t.p2hUt7),
                      action: () => (0, l.SZ)(e, t, n)
                  }),
                  (0, r.jsx)(i.MenuItem, {
                      id: b,
                      label: f.intl.string(f.t['/yA6QU']),
                      action: () => (0, l.SZ)(d.hY, t, n)
                  })
              ]
          })
        : null;
}

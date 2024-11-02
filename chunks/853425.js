n(411104);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(386506),
    o = n(304761),
    l = n(865427),
    u = n(478543),
    c = n(366953);
async function d(e) {
    if (200 !== (await (0, s.f0)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f(e) {
    if (200 !== (await (0, s.aD)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function _() {
    await (0, s.bF)(), window.location.reload(!0);
}
t.Z = i.memo(function (e) {
    let { url: t } = e,
        n = (0, a.cj)([o.C], () => o.C.getCurrentBuildOverride()),
        s = (0, a.e7)([o.C], () => o.C.getBuildOverride(t)),
        { payload: h, validatedURL: p } = s,
        m = n.state === o.Z.Resolving || s.state === o.Z.Resolving,
        g = i.useCallback(() => {
            if ((0, l.mG)(s.url) && null != s.override) {
                var e;
                return f(null === (e = s.override) || void 0 === e ? void 0 : e.targetBuildOverride);
            }
            if (null == h) return Promise.reject(Error('Invalid override payload'));
            return (0, c.Z)(s.override, h), d(h);
        }, [h, s]);
    return null != p
        ? (0, r.jsx)(u.Z, {
              loading: m,
              linkMeta: s.override,
              currentOverrides: n.overrides,
              applyBuildOverride: g,
              clearBuildOverride: _,
              url: p
          })
        : null;
});

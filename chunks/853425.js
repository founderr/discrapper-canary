var i = r(411104);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(386506),
    u = r(304761),
    c = r(865427),
    d = r(478543),
    f = r(366953);
async function _(e) {
    if (200 !== (await (0, l.f0)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function h(e) {
    if (200 !== (await (0, l.aD)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function p() {
    await (0, l.bF)(), window.location.reload(!0);
}
n.Z = s.memo(function (e) {
    let { url: n } = e,
        r = (0, o.cj)([u.C], () => u.C.getCurrentBuildOverride()),
        i = (0, o.e7)([u.C], () => u.C.getBuildOverride(n)),
        { payload: l, validatedURL: m } = i,
        g = r.state === u.Z.Resolving || i.state === u.Z.Resolving,
        E = s.useCallback(() => {
            if ((0, c.mG)(i.url) && null != i.override) {
                var e;
                return h(null === (e = i.override) || void 0 === e ? void 0 : e.targetBuildOverride);
            }
            if (null == l) return Promise.reject(Error('Invalid override payload'));
            return (0, f.Z)(i.override, l), _(l);
        }, [l, i]);
    return null != m
        ? (0, a.jsx)(d.Z, {
              loading: g,
              linkMeta: i.override,
              currentOverrides: r.overrides,
              applyBuildOverride: E,
              clearBuildOverride: p,
              url: m
          })
        : null;
});

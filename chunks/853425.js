var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(386506),
    l = n(304761),
    u = n(865427),
    c = n(478543),
    d = n(366953);
async function _(e) {
    if (200 !== (await (0, s.f0)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function E(e) {
    if (200 !== (await (0, s.aD)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f() {
    await (0, s.bF)(), window.location.reload(!0);
}
t.Z = a.memo(function (e) {
    let { url: t } = e,
        n = (0, o.cj)([l.C], () => l.C.getCurrentBuildOverride()),
        r = (0, o.e7)([l.C], () => l.C.getBuildOverride(t)),
        { payload: s, validatedURL: h } = r,
        p = n.state === l.Z.Resolving || r.state === l.Z.Resolving,
        m = a.useCallback(() => {
            if ((0, u.mG)(r.url) && null != r.override) {
                var e;
                return E(null === (e = r.override) || void 0 === e ? void 0 : e.targetBuildOverride);
            }
            if (null == s) return Promise.reject(Error('Invalid override payload'));
            return (0, d.Z)(r.override, s), _(s);
        }, [s, r]);
    return null != h
        ? (0, i.jsx)(c.Z, {
              loading: p,
              linkMeta: r.override,
              currentOverrides: n.overrides,
              applyBuildOverride: m,
              clearBuildOverride: f,
              url: h
          })
        : null;
});

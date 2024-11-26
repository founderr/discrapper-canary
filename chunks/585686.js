n.d(e, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(192379);
function E(t) {
    var e;
    let { stepConfigs: n, breadcrumbs: E } = t,
        [i, u] = r.useState(null === (e = n[0]) || void 0 === e ? void 0 : e.key),
        S = r.useRef(null);
    r.useEffect(() => {
        S.current = i;
    }, [S, i]);
    let o = n.map((t) => t.key).filter((t) => null != t);
    return {
        steps: o,
        step: i,
        setStep: u,
        breadcrumbsData: n
            .filter((t) => {
                var e;
                return null != t.key && (null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.useBreadcrumbLabel) != null;
            })
            .map((t) => ({
                id: t.key,
                useBreadcrumbLabel: t.options.useBreadcrumbLabel
            }))
            .sort((t, e) => (null != E ? E.indexOf(t.id) - E.indexOf(e.id) : 0)),
        previousStepRef: S
    };
}

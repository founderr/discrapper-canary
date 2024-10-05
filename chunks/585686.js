n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var E = n(470079);
function r(e) {
    var t;
    let { stepConfigs: n, breadcrumbs: r } = e,
        [u, i] = E.useState(null === (t = n[0]) || void 0 === t ? void 0 : t.key),
        S = E.useRef(null);
    E.useEffect(() => {
        S.current = u;
    }, [S, u]);
    let _ = n.map((e) => e.key).filter((e) => null != e);
    return {
        steps: _,
        step: u,
        setStep: i,
        breadcrumbsData: n
            .filter((e) => {
                var t;
                return null != e.key && (null == e ? void 0 : null === (t = e.options) || void 0 === t ? void 0 : t.useBreadcrumbLabel) != null;
            })
            .map((e) => ({
                id: e.key,
                useBreadcrumbLabel: e.options.useBreadcrumbLabel
            }))
            .sort((e, t) => (null != r ? r.indexOf(e.id) - r.indexOf(t.id) : 0)),
        previousStepRef: S
    };
}

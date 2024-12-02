n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379);
function i(e) {
    var t;
    let { stepConfigs: n, breadcrumbs: i } = e,
        [a, s] = r.useState(null === (t = n[0]) || void 0 === t ? void 0 : t.key),
        o = r.useRef(null);
    r.useEffect(() => {
        o.current = a;
    }, [o, a]);
    let l = n.map((e) => e.key).filter((e) => null != e);
    return {
        steps: l,
        step: a,
        setStep: s,
        breadcrumbsData: n
            .filter((e) => {
                var t;
                return null != e.key && (null == e ? void 0 : null === (t = e.options) || void 0 === t ? void 0 : t.useBreadcrumbLabel) != null;
            })
            .map((e) => ({
                id: e.key,
                useBreadcrumbLabel: e.options.useBreadcrumbLabel
            }))
            .sort((e, t) => (null != i ? i.indexOf(e.id) - i.indexOf(t.id) : 0)),
        previousStepRef: o
    };
}

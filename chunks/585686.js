r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379);
function s(e) {
    var n;
    let { stepConfigs: r, breadcrumbs: i } = e,
        [s, o] = a.useState(null === (n = r[0]) || void 0 === n ? void 0 : n.key),
        l = a.useRef(null);
    a.useEffect(() => {
        l.current = s;
    }, [l, s]);
    let u = r.map((e) => e.key).filter((e) => null != e);
    return {
        steps: u,
        step: s,
        setStep: o,
        breadcrumbsData: r
            .filter((e) => {
                var n;
                return null != e.key && (null == e ? void 0 : null === (n = e.options) || void 0 === n ? void 0 : n.useBreadcrumbLabel) != null;
            })
            .map((e) => ({
                id: e.key,
                useBreadcrumbLabel: e.options.useBreadcrumbLabel
            }))
            .sort((e, n) => (null != i ? i.indexOf(e.id) - i.indexOf(n.id) : 0)),
        previousStepRef: l
    };
}

n.d(e, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(192379);
function E() {
    let [t, e] = r.useState(null),
        n = r.useRef(null);
    return (
        r.useEffect(() => {
            null != t && null != n.current && n.current.scrollIntoView({ behavior: 'smooth' });
        }, [t]),
        {
            purchaseError: t,
            setPurchaseError: e,
            purchaseErrorBlockRef: n
        }
    );
}

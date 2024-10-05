n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var E = n(470079);
function r() {
    let [e, t] = E.useState(null),
        n = E.useRef(null);
    return (
        E.useEffect(() => {
            null != e && null != n.current && n.current.scrollIntoView({ behavior: 'smooth' });
        }, [e]),
        {
            purchaseError: e,
            setPurchaseError: t,
            purchaseErrorBlockRef: n
        }
    );
}

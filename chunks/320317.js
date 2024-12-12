r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379);
function s() {
    let [e, n] = a.useState(null),
        r = a.useRef(null);
    return (
        a.useEffect(() => {
            null != e && null != r.current && r.current.scrollIntoView({ behavior: 'smooth' });
        }, [e]),
        {
            purchaseError: e,
            setPurchaseError: n,
            purchaseErrorBlockRef: r
        }
    );
}

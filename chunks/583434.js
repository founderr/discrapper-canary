n.d(t, {
    T: function () {
        return c;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(399606),
    o = n(55563),
    s = n(335131),
    l = n(597688),
    u = n(981631);
function c(e) {
    let t = (0, a.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
        n = null != t && t.productLine !== u.POd.COLLECTIBLES,
        [r, c] = (0, a.Wu)([l.Z], () => [l.Z.isFetchingProduct(e), l.Z.getProduct(e)]);
    return (
        (0, i.useEffect)(() => {
            if (null != e && null == c && !n && !r) (0, s.jr)(e);
        }, [e, c, n, r]),
        {
            product: c,
            isFetching: r
        }
    );
}

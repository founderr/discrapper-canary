r.d(n, {
    T: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(399606),
    o = r(55563),
    l = r(335131),
    u = r(597688),
    c = r(981631);
let d = 3600000;
function f(e) {
    let n = (0, s.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
        r = null != n && n.productLine !== c.POd.COLLECTIBLES,
        [i, f, _, h] = (0, s.Wu)([u.Z], () => [u.Z.isFetchingProduct(e), u.Z.getProduct(e), u.Z.getProductFetchError(e), u.Z.getProductFetchErrorTimestamp(e)]),
        p = null != _ && null != h && Date.now() - h < d;
    return (
        (0, a.useEffect)(() => {
            if (null != e && null == f && !r && !i && !p) (0, l.jr)(e);
        }, [e, f, r, i, p]),
        {
            product: f,
            isFetching: i
        }
    );
}

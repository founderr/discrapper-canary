r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(310680),
    a = r(660027),
    s = r(49691),
    o = r(538018);
function l(e, n) {
    void 0 === n && (n = []);
    var r,
        u = (0, i.Z)(e),
        c = u === (null == (r = e.ownerDocument) ? void 0 : r.body),
        d = (0, s.Z)(u),
        f = c ? [d].concat(d.visualViewport || [], (0, o.Z)(u) ? u : []) : u,
        _ = n.concat(f);
    return c ? _ : _.concat(l((0, a.Z)(f)));
}

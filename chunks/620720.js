n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(310680),
    i = n(660027),
    a = n(49691),
    o = n(538018);
function s(e, t) {
    void 0 === t && (t = []);
    var n,
        l = (0, r.Z)(e),
        u = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
        c = (0, a.Z)(l),
        d = u ? [c].concat(c.visualViewport || [], (0, o.Z)(l) ? l : []) : l,
        _ = t.concat(d);
    return u ? _ : _.concat(s((0, i.Z)(d)));
}

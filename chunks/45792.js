n.d(t, {
    S: function () {
        return r;
    }
});
var i = n(137006);
function r(e, t) {
    var n;
    let { scope: r, handler: a } = t,
        l = {
            scope: r,
            handler: a
        },
        s = null === (n = i.m[e]) || void 0 === n ? void 0 : n.request,
        o = null;
    return (
        null != s &&
            (l.validation = function (e) {
                return null == o && (o = s(e)), o;
            }),
        l
    );
}

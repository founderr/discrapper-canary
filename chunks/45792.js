n.d(t, {
    S: function () {
        return r;
    }
});
var i = n(137006);
function r(e, t) {
    var n;
    let { scope: r, handler: l } = t,
        a = {
            scope: r,
            handler: l
        },
        o = null === (n = i.m[e]) || void 0 === n ? void 0 : n.request,
        s = null;
    return (
        null != o &&
            (a.validation = function (e) {
                return null == s && (s = o(e)), s;
            }),
        a
    );
}

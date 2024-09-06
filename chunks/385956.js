n.d(t, {
    T: function () {
        return r;
    },
    v: function () {
        return l;
    }
});
var i = n(442837),
    s = n(355298),
    a = n(333984);
function l(e) {
    return (0, i.e7)([s.Z], () => s.Z.isMessageRequest(e), [e]);
}
function r(e) {
    return (0, i.e7)([s.Z, a.Z], () => null != e && (s.Z.isMessageRequest(e) || a.Z.isSpam(e)));
}

r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(701488),
    a = r(981631);
function s(e) {
    return e.type === a.IIU.STREAMING && null != e.url && i.d.test(e.url);
}
function o(e) {
    return null != e && (Array.isArray(e) ? e.some(s) : s(e));
}

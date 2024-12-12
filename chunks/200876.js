r.d(n, {
    Z: function () {
        return l;
    },
    l: function () {
        return o;
    }
});
var i = r(442837),
    a = r(430824),
    s = r(981631);
function o(e) {
    return !e.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(s.oNc.CREATOR_MONETIZABLE) || e.hasFeature(s.oNc.CREATOR_MONETIZABLE_PROVISIONAL));
}
function l(e) {
    return (0, i.e7)([a.Z], () => {
        let n = a.Z.getGuild(e);
        return null != n && o(n);
    });
}

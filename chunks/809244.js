n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(687516),
    l = n(5192),
    r = n(388032);
function a(e, t, n) {
    let a = (0, i.Cf)(n),
        s = l.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? s
        : (null == a ? void 0 : a.name) != null
          ? r.intl.formatToPlainString(r.t['9jpVOT'], {
                applicationName: null == a ? void 0 : a.name,
                username: s
            })
          : r.intl.formatToPlainString(r.t['+h0Z5+'], { username: s });
}

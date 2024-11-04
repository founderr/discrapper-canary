n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(687516),
    l = n(5192),
    r = n(388032);
function s(e, t, n) {
    let s = (0, i.Cf)(n),
        a = l.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? a
        : (null == s ? void 0 : s.name) != null
          ? r.intl.formatToPlainString(r.t['9jpVOT'], {
                applicationName: null == s ? void 0 : s.name,
                username: a
            })
          : r.intl.formatToPlainString(r.t['+h0Z5+'], { username: a });
}

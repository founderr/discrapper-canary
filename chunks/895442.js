t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(592125),
    s = t(430824),
    a = t(594174),
    r = t(981631);
function i(e) {
    if (!e.isPrivate()) {
        let n = s.Z.getGuild(e.guild_id);
        return null != n && n.hasFeature(r.oNc.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = a.default.getUser(e);
        return null != n && n.isStaff();
    });
}
function o(e, n) {
    var t;
    if (!(null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff())) return !1;
    let s = l.Z.getChannel(e.channel_id);
    return (
        !!(null != s && i(s)) &&
        n.some((e) => {
            let n = l.Z.getChannel(e);
            return !(null == n || n.isPrivate()) && !i(n);
        })
    );
}

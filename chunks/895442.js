n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(592125),
    s = n(430824),
    a = n(594174),
    r = n(981631);
function i(e) {
    if (!e.isPrivate()) {
        let t = s.Z.getGuild(e.guild_id);
        return null != t && t.hasFeature(r.oNc.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = a.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function o(e, t) {
    var n;
    if (!(null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff())) return !1;
    let s = l.Z.getChannel(e.channel_id);
    return (
        !!(null != s && i(s)) &&
        t.some((e) => {
            let t = l.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !i(t);
        })
    );
}

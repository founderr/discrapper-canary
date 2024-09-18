t.d(n, {
    a4: function () {
        return o;
    },
    vc: function () {
        return u;
    }
});
var i = t(592125),
    a = t(650774),
    s = t(496675),
    l = t(594174),
    r = t(981631);
function o(e) {
    return (
        null != e &&
        (function (e) {
            if (null == e) return !1;
            let n = e.id,
                t = l.default.getCurrentUser();
            return null != t && t.id !== n && !0 !== e.system && !0;
        })(e.author)
    );
}
function u(e) {
    return (
        null != e &&
        o(e) &&
        (function (e) {
            let n = i.Z.getChannel(e);
            if (null == n) return !1;
            if (n.type === r.d4z.DM || n.type === r.d4z.GROUP_DM) return !0;
            if (s.Z.canWithPartialContext(r.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = a.Z.getMemberCount(n.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}

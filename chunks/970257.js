t.d(n, {
    a4: function () {
        return s;
    },
    vc: function () {
        return u;
    }
});
var i = t(592125),
    l = t(650774),
    r = t(496675),
    a = t(594174),
    o = t(981631);
function s(e) {
    return (
        null != e &&
        (function (e) {
            if (null == e) return !1;
            let n = e.id,
                t = a.default.getCurrentUser();
            return null != t && t.id !== n && !0 !== e.system && !0;
        })(e.author)
    );
}
function u(e) {
    return (
        null != e &&
        s(e) &&
        (function (e) {
            let n = i.Z.getChannel(e);
            if (null == n) return !1;
            if (n.type === o.d4z.DM || n.type === o.d4z.GROUP_DM) return !0;
            if (r.Z.canWithPartialContext(o.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = l.Z.getMemberCount(n.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}

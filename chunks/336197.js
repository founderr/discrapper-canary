n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(727429),
    i = n(703656),
    a = n(769654),
    o = n(592125),
    s = n(754688),
    l = n(849027),
    u = n(927723),
    c = n(981631);
function d(e) {
    if (null == e.channelId) return e;
    let t = o.Z.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, r.e)(t);
    return {
        ...e,
        guildId: null != n ? n : c.ME
    };
}
async function _(e, t) {
    let n = (0, s.Qj)(e);
    if (null != n && !(await (0, l.Z)(n))) {
        (0, u.k)({ kind: 'channel' });
        return;
    }
    if (null == n) {
        (0, i.uL)(e, t);
        return;
    }
    let r = d(n);
    if (null == r.channelId) {
        (0, a.X)(r.guildId);
        return;
    }
    null != r.threadId ? (0, i.uL)(c.Z5c.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t) : (0, i.uL)(c.Z5c.CHANNEL(r.guildId, r.channelId, r.messageId), t);
}

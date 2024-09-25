n.d(t, {
    J: function () {
        return c;
    },
    Z: function () {
        return d;
    }
});
var r = n(55935),
    i = n(70956),
    a = n(709054),
    o = n(463396),
    s = n(901461),
    l = n(981631);
let u = 7 * i.Z.Millis.MINUTE;
function c(e, t, n) {
    return null == t || (t.type === l.ys_.MESSAGE && t.content.id === t.content.channel_id) || (t.type !== l.ys_.MESSAGE && t.type !== l.ys_.THREAD_STARTER_MESSAGE) || d(e, t.content, n);
}
function d(e, t, n) {
    if (n.hasFlag(l.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > l.uaV.DEFAULT) return !(0, s.Z)(t) || n.type === l.uaV.REPLY || !1;
    return !!((0, s.Z)(t) || t.author.id !== n.author.id || t.hasFlag(l.iLy.EPHEMERAL) !== n.hasFlag(l.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username) || ((null == e ? void 0 : e.isForumPost()) && t.id === a.default.castChannelIdAsMessageId(e.id)) || !(0, r._w)(t.timestamp, n.timestamp, u) || (n.hasFlag(l.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(l.iLy.SUPPRESS_NOTIFICATIONS)) || (t.hasFlag(l.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(l.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || (0, o.f)(n)) || n.applicationId !== t.applicationId || !1;
}

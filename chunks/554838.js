n.d(t, {
    J: function () {
        return d;
    },
    Z: function () {
        return u;
    }
});
var i = n(55935),
    r = n(70956),
    l = n(709054),
    a = n(463396),
    o = n(901461),
    s = n(981631);
let c = 7 * r.Z.Millis.MINUTE;
function d(e, t, n) {
    return null == t || (t.type === s.ys_.MESSAGE && t.content.id === t.content.channel_id) || (t.type !== s.ys_.MESSAGE && t.type !== s.ys_.THREAD_STARTER_MESSAGE) || u(e, t.content, n);
}
function u(e, t, n) {
    if (n.hasFlag(s.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > s.uaV.DEFAULT) return !(0, o.Z)(t) || n.type === s.uaV.REPLY || !1;
    return !!((0, o.Z)(t) || t.author.id !== n.author.id || t.hasFlag(s.iLy.EPHEMERAL) !== n.hasFlag(s.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username) || ((null == e ? void 0 : e.isForumPost()) && t.id === l.default.castChannelIdAsMessageId(e.id)) || !(0, i._w)(t.timestamp, n.timestamp, c) || (n.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS)) || (t.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || (0, a.f)(n)) || n.applicationId !== t.applicationId || !1;
}

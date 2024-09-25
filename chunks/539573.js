n.d(t, {
    $q: function () {
        return _;
    },
    U8: function () {
        return d;
    },
    V6: function () {
        return u;
    },
    uF: function () {
        return f;
    },
    uS: function () {
        return c;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(673750),
    o = n(592125),
    s = n(981631),
    l = n(689938);
class u extends Error {}
class c extends Error {}
let d = new Set([s.evJ.AUTOMOD_MESSAGE_BLOCKED, s.evJ.AUTOMOD_TITLE_BLOCKED, s.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);
function _(e, t) {
    if (null == e) return null;
    let { code: n, message: r } = e;
    if (!d.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let i = o.Z.getChannel(t);
    return (null == i ? void 0 : i.isThread()) ? l.Z.Messages.THREAD_AUTOMOD_ERROR : ((null == i ? void 0 : i.isForumPost()) || (null == i ? void 0 : i.isForumLikeChannel())) && (n === s.evJ.AUTOMOD_TITLE_BLOCKED || n === s.evJ.AUTOMOD_MESSAGE_BLOCKED) ? l.Z.Messages.FORUM_POST_AUTOMOD_ERROR : null;
}
function E(e) {
    let t = o.Z.getChannel(e.message.channelId);
    return (0, a.Bz)(e) ? l.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? l.Z.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? l.Z.Messages.FORUM_POST_AUTOMOD_ERROR : l.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE;
}
function f(e, t) {
    let n = _(t);
    return null != n ? n : null == e ? l.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : E(e);
}

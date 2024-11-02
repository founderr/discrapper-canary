n.d(t, {
    $q: function () {
        return c;
    },
    U8: function () {
        return u;
    },
    V6: function () {
        return o;
    },
    uF: function () {
        return d;
    },
    uS: function () {
        return l;
    }
}),
    n(411104),
    n(47120);
var r = n(673750),
    i = n(592125),
    a = n(981631),
    s = n(388032);
class o extends Error {}
class l extends Error {}
let u = new Set([a.evJ.AUTOMOD_MESSAGE_BLOCKED, a.evJ.AUTOMOD_TITLE_BLOCKED, a.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);
function c(e, t) {
    if (null == e) return null;
    let { code: n, message: r } = e;
    if (!u.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let o = i.Z.getChannel(t);
    return (null == o ? void 0 : o.isThread()) ? s.intl.string(s.t.DVdG9P) : ((null == o ? void 0 : o.isForumPost()) || (null == o ? void 0 : o.isForumLikeChannel())) && (n === a.evJ.AUTOMOD_TITLE_BLOCKED || n === a.evJ.AUTOMOD_MESSAGE_BLOCKED) ? s.intl.string(s.t.ipgKDg) : null;
}
function d(e, t) {
    let n = c(t);
    return null != n
        ? n
        : null == e
          ? s.intl.string(s.t.zQ69pq)
          : (function (e) {
                let t = i.Z.getChannel(e.message.channelId);
                return (0, r.Bz)(e) ? s.intl.string(s.t.bU6o09) : (null == t ? void 0 : t.isThread()) ? s.intl.string(s.t.DVdG9P) : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? s.intl.string(s.t.ipgKDg) : s.intl.string(s.t.zQ69pq);
            })(e);
}

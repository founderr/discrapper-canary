n.d(t, {
    FS: function () {
        return d;
    },
    Uw: function () {
        return f;
    },
    nC: function () {
        return _;
    },
    nU: function () {
        return h;
    },
    yv: function () {
        return p;
    }
});
var r = n(47120);
var i = n(683860),
    a = n(592125),
    o = n(430824),
    s = n(306680),
    l = n(710352),
    u = n(176505),
    c = n(689938);
function d(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.ZP];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
    };
}
function _(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.Z, s.ZP],
        i = t.getChannel(e);
    if (null == i) return null;
    let l = n.getGuild(i.guild_id);
    return null == l ? null : d(i, l, [r]);
}
let E = () => ({
    minutes: c.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
    hours: c.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
    days: c.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
    month: c.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
});
function f(e, t) {
    if (t === l.R6.POSTED_DURATION_AGO && e === i.z.CREATION_DATE) return E;
}
function h(e, t) {
    let [n] = t,
        r = n.hasTrackedUnread(e),
        i = n.hasOpenedThread(e),
        a = null != n.getTrackedAckMessageId(e);
    return r && i && a;
}
function p(e) {
    var t;
    return (null === (t = a.Z.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(u.zZ.PINNED)) === !0;
}

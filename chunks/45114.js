n.d(t, {
    CZ: function () {
        return I;
    },
    FT: function () {
        return S;
    },
    In: function () {
        return E;
    },
    Ju: function () {
        return g;
    },
    U6: function () {
        return h;
    },
    iV: function () {
        return m;
    },
    jT: function () {
        return T;
    },
    y5: function () {
        return p;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(570140),
    o = n(601070),
    s = n(131704),
    l = n(592125),
    u = n(324067),
    c = n(594174),
    d = n(709054),
    _ = n(981631);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0;
    a.Z.dispatch({
        type: 'CHANNEL_ACK',
        channelId: e,
        messageId: r,
        immediate: t,
        force: n,
        context: _.e3s,
        location: i
    });
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = l.Z.getChannel(e);
    if (null == r || null == r.guild_id) return;
    let i = u.Z.getCategories(r.guild_id);
    if (null == i[e]) return;
    let a = i[e]
            .filter((e) => {
                let { channel: t } = e;
                return (0, s.Em)(t.type);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            }),
        c = [...a];
    for (let e of (a.forEach((e) => {
        let t = o.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
        for (let e in t) c.push(e);
    }),
    c))
        E(e, t, n);
}
function h(e) {
    e.isCategory() ? f(e.id, !0, !0) : e.isForumLikeChannel() ? E(e.id, !0, !0, d.default.fromTimestamp(Date.now())) : E(e.id, !0, !0);
}
function p(e, t) {
    a.Z.dispatch({
        type: 'BULK_ACK',
        channels: e,
        context: _.e3s,
        onFinished: t
    });
}
function m(e) {
    a.Z.dispatch({
        type: 'CHANNEL_LOCAL_ACK',
        channelId: e
    });
}
function I(e, t) {
    a.Z.dispatch({
        type: 'ENABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: t
    });
}
function T(e, t) {
    a.Z.dispatch({
        type: 'DISABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: t
    });
}
function g(e, t, n) {
    a.Z.dispatch({
        type: 'GUILD_FEATURE_ACK',
        id: e,
        ackType: t,
        ackedId: n,
        local: !1
    });
}
function S(e, t) {
    var n;
    if (null != (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id))
        a.Z.dispatch({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e,
            ackedId: t,
            local: !1
        });
}

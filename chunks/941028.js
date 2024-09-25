n.d(t, {
    TV: function () {
        return d;
    },
    b8: function () {
        return c;
    },
    k$: function () {
        return l;
    },
    kr: function () {
        return u;
    },
    w5: function () {
        return s;
    },
    ym: function () {
        return o;
    }
});
var r = n(653041);
var i = n(570140),
    a = n(509848);
function o(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD',
        guildId: e,
        userIds: t
    });
}
function s(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE',
        guildId: e,
        userIds: t
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES',
        guildId: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES',
        guildId: e
    });
}
function c(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_CHANNEL',
        guildId: e,
        channelId: t,
        ranges: n
    });
}
function d(e) {
    let { guildId: t, channelId: n, y: r, height: i, rowHeight: o } = e;
    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / o)) + t);
    }
    let l = [];
    function u(e) {
        let t = e + (a.dj - 1);
        return l.push([e, t]), t + 1;
    }
    let d = s(0.5 * i),
        _ = s(r, -d),
        E = s(r + i, d);
    for (_ > 0 && (_ = Math.max(u(0), _)), _ = Math.floor(_ / a.dj) * a.dj; _ <= E; ) _ = u(_);
    c(t, n, l);
}

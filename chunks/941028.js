r.d(n, {
    TV: function () {
        return f;
    },
    b8: function () {
        return d;
    },
    k$: function () {
        return u;
    },
    kr: function () {
        return c;
    },
    w5: function () {
        return l;
    },
    ym: function () {
        return o;
    }
});
var i = r(653041);
var a = r(570140),
    s = r(509848);
function o(e, n) {
    a.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD',
        guildId: e,
        userIds: n
    });
}
function l(e, n) {
    a.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE',
        guildId: e,
        userIds: n
    });
}
function u(e) {
    a.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES',
        guildId: e
    });
}
function c(e) {
    a.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES',
        guildId: e
    });
}
function d(e, n, r) {
    a.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_CHANNEL',
        guildId: e,
        channelId: n,
        ranges: r
    });
}
function f(e) {
    let { guildId: n, channelId: r, y: i, height: a, rowHeight: o } = e;
    function l(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / o)) + n);
    }
    let u = [];
    function c(e) {
        let n = e + (s.dj - 1);
        return u.push([e, n]), n + 1;
    }
    let f = l(0.5 * a),
        _ = l(i, -f),
        h = l(i + a, f);
    for (_ > 0 && (_ = Math.max(c(0), _)), _ = Math.floor(_ / s.dj) * s.dj; _ <= h; ) _ = c(_);
    d(n, r, u);
}

r.d(n, {
    DB: function () {
        return o;
    },
    V9: function () {
        return u;
    },
    my: function () {
        return l;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(70722);
function o(e) {
    return null != e && (e.startsWith(s.lo.GUILD) || e.startsWith(s.lo.CALL));
}
function l(e) {
    let n = e.split(':'),
        r = n[0];
    switch (r) {
        case s.lo.GUILD: {
            let [e, r, i, a] = n;
            return {
                streamType: e,
                guildId: r,
                channelId: i,
                ownerId: a
            };
        }
        case s.lo.CALL: {
            let [e, r, i] = n;
            return {
                streamType: e,
                channelId: r,
                ownerId: i
            };
        }
        default:
            throw Error('Unknown stream type '.concat(r));
    }
}
function u(e) {
    let { streamType: n, guildId: r, channelId: i, ownerId: a } = e;
    switch (n) {
        case s.lo.GUILD:
            return [n, r, i, a].join(':');
        case s.lo.CALL:
            return [n, i, a].join(':');
        default:
            throw Error('Unknown stream type '.concat(n));
    }
}

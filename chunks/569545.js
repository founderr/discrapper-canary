n.d(t, {
    DB: function () {
        return o;
    },
    V9: function () {
        return l;
    },
    my: function () {
        return s;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(70722);
function o(e) {
    return null != e && (e.startsWith(a.lo.GUILD) || e.startsWith(a.lo.CALL));
}
function s(e) {
    let t = e.split(':'),
        n = t[0];
    switch (n) {
        case a.lo.GUILD: {
            let [e, n, r, i] = t;
            return {
                streamType: e,
                guildId: n,
                channelId: r,
                ownerId: i
            };
        }
        case a.lo.CALL: {
            let [e, n, r] = t;
            return {
                streamType: e,
                channelId: n,
                ownerId: r
            };
        }
        default:
            throw Error('Unknown stream type '.concat(n));
    }
}
function l(e) {
    let { streamType: t, guildId: n, channelId: r, ownerId: i } = e;
    switch (t) {
        case a.lo.GUILD:
            return [t, n, r, i].join(':');
        case a.lo.CALL:
            return [t, r, i].join(':');
        default:
            throw Error('Unknown stream type '.concat(t));
    }
}

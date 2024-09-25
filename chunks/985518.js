n.d(t, {
    Ct: function () {
        return _;
    },
    UP: function () {
        return c;
    },
    ZP: function () {
        return f;
    },
    rj: function () {
        return d;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(929991),
    o = n(480739),
    s = n(228392),
    l = n(6496);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    return ''.concat(o.AT.FORUM_CHANNEL, '_').concat(e);
}
function d(e, t, n) {
    (0, a.a8)(c(e), t, n);
}
function _(e, t, n) {
    (0, a.FL)(c(e), t, n);
}
function E(e) {
    let { guildId: t, channelId: n, sessionId: r, trackedFeedItems: i, isForcedFlush: a } = e,
        o = [],
        l = [];
    for (let e of Object.keys(i)) {
        let t = i[e].computeSeenTimeDestructive(a);
        t > 0 && (o.push(e), l.push(t));
    }
    0 !== o.length &&
        (0, s.qs)({
            guildId: t,
            channelId: n,
            sessionId: r,
            postIds: o,
            additionalTimes: l
        });
}
class f extends o.zQ {
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: r }) {
        super({
            windowId: n,
            isPaused: r,
            id: c(t)
        }),
            u(this, 'guildId', void 0),
            u(this, 'channelId', void 0),
            u(this, 'sessionId', void 0),
            u(this, 'createFlushSeenItemsFunction', (e) => {
                let t = this.trackedFeedItems,
                    n = this.channelId,
                    r = this.guildId,
                    i = {
                        guildId: r,
                        channelId: n,
                        sessionId: this.sessionId,
                        trackedFeedItems: t,
                        isForcedFlush: null != e
                    };
                return () => E(i);
            }),
            (this.guildId = e),
            (this.channelId = t),
            (this.sessionId = (0, l.WW)(t));
    }
}

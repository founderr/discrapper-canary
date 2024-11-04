n(733860);
var i,
    l = n(31775),
    a = n.n(l),
    r = n(442837),
    s = n(570140);
function o(e, t, n) {
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
let c = {
    channelVisits: new (a())({ max: 1000 }),
    bannerRenders: []
};
function d(e, t) {
    return e + t;
}
class u extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) Array.isArray(e.bannerRenders) && (c.bannerRenders = e.bannerRenders), null != e.channelVisitsDump && c.channelVisits.load(e.channelVisitsDump);
    }
    getState() {
        return {
            bannerRenders: c.bannerRenders,
            channelVisitsDump: c.channelVisits.dump()
        };
    }
    getNumberOfRenders() {
        var e, t;
        return null !== (t = null === (e = c.bannerRenders) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
    }
    getNumberOfRendersSince(e) {
        var t;
        return (null !== (t = c.bannerRenders) && void 0 !== t ? t : []).filter((t) => t >= Date.now() - 1000 * e).length;
    }
    getNumberOfChannelVisitsSince(e, t, n) {
        var i;
        return (null !== (i = c.channelVisits.get(e + t)) && void 0 !== i ? i : []).filter((e) => e >= Date.now() - 1000 * n).length;
    }
}
o(u, 'displayName', 'UnreadSettingNoticeStore'),
    o(u, 'persistKey', 'UnreadSettingNoticeStore'),
    (t.Z = new u(s.Z, {
        UNREAD_SETTING_NOTICE_RENDERED: function () {
            c.bannerRenders.length > 100 && c.bannerRenders.pop(), c.bannerRenders.unshift(Date.now());
        },
        UNREAD_SETTING_NOTICE_CHANNEL_VISIT: function (e) {
            var t;
            let { guildId: n, channelId: i } = e,
                l = n + i,
                a = null !== (t = c.channelVisits.get(l)) && void 0 !== t ? t : [];
            a.length > 100 && a.pop(), a.unshift(Date.now()), c.channelVisits.set(l, a);
        }
    }));

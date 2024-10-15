let l;
var i,
    a = t(442837),
    r = t(570140);
function o(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let s = { lastGuildDismissedTime: {} };
class u extends (i = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        l = e;
    }
    getUserAgnosticState() {
        return l;
    }
    getLastGuildDismissedTime(e) {
        return l.lastGuildDismissedTime[e];
    }
}
o(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    o(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (n.Z = new u(r.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
        }
    }));

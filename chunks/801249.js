let l;
var i,
    r = t(442837),
    o = t(570140);
function a(n, e, t) {
    return (
        e in n
            ? Object.defineProperty(n, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[e] = t),
        n
    );
}
let s = { lastGuildDismissedTime: {} };
class u extends (i = r.ZP.DeviceSettingsStore) {
    initialize() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        l = n;
    }
    getUserAgnosticState() {
        return l;
    }
    getLastGuildDismissedTime(n) {
        return l.lastGuildDismissedTime[n];
    }
}
a(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    a(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (e.Z = new u(o.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: e } = n;
            l.lastGuildDismissedTime[e] = Date.now();
        }
    }));

let i;
var l,
    r = t(442837),
    s = t(570140);
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
let a = { lastGuildDismissedTime: {} };
class u extends (l = r.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
        i = e;
    }
    getUserAgnosticState() {
        return i;
    }
    getLastGuildDismissedTime(e) {
        return i.lastGuildDismissedTime[e];
    }
}
o(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    o(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (n.Z = new u(s.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            i.lastGuildDismissedTime[n] = Date.now();
        }
    }));

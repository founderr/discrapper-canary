let l;
var i,
    s = t(442837),
    a = t(570140);
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
let r = { lastGuildDismissedTime: {} };
class u extends (i = s.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
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
    (n.Z = new u(a.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
        }
    }));

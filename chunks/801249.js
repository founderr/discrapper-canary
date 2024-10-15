let l;
var i,
    a = t(442837),
    s = t(570140);
function r(e, n, t) {
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
let o = { lastGuildDismissedTime: {} };
class u extends (i = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        l = e;
    }
    getUserAgnosticState() {
        return l;
    }
    getLastGuildDismissedTime(e) {
        return l.lastGuildDismissedTime[e];
    }
}
r(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    r(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (n.Z = new u(s.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
        }
    }));

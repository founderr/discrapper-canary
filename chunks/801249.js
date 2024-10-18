let l;
var i,
    r = t(442837),
    o = t(570140);
function a(e, n, t) {
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
class u extends (i = r.ZP.DeviceSettingsStore) {
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
a(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    a(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (n.Z = new u(o.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
        }
    }));

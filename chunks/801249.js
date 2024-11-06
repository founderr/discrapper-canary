let l;
var i,
    r = e(442837),
    u = e(570140);
function a(n, t, e) {
    return (
        t in n
            ? Object.defineProperty(n, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[t] = e),
        n
    );
}
let o = { lastGuildDismissedTime: {} };
class s extends (i = r.ZP.DeviceSettingsStore) {
    initialize() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        l = n;
    }
    getUserAgnosticState() {
        return l;
    }
    getLastGuildDismissedTime(n) {
        return l.lastGuildDismissedTime[n];
    }
}
a(s, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    a(s, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (t.Z = new s(u.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: t } = n;
            l.lastGuildDismissedTime[t] = Date.now();
        }
    }));

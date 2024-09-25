n.d(t, {
    S: function () {
        return s;
    },
    Z: function () {
        return l;
    }
});
var r = n(433517),
    i = n(314897),
    a = n(981631);
let o = null;
function s(e, t) {
    if (0 === e.length) return 'No logs';
    let n = r.K.get(a.JkL),
        i = r.K.get(a.scU),
        o = null != n ? 'Device Token: '.concat(n) : '',
        s = null != i ? 'Device Voip Token: '.concat(i) : '',
        l = e
            .map((e) => {
                let n = e.silent ? 'Silent' : 'Displayed',
                    r = t ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(n, ' - ').concat(r);
            })
            .join('\n');
    return ''.concat(o, '\n').concat(s, '\n\n').concat(l);
}
async function l() {
    let e = i.default.getId();
    return (null == o ? void 0 : o.getPushNotificationLogs) != null
        ? await o.getPushNotificationLogs(e).then((e) => {
              var t;
              return null !== (t = JSON.parse(e).pushNotifications) && void 0 !== t ? t : [];
          })
        : [];
}

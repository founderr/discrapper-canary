n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(433517),
    i = n(981631);
function a(e, t) {
    if (0 === e.length) return 'No logs';
    let n = r.K.get(i.JkL),
        a = r.K.get(i.scU),
        s = e
            .map((e) => {
                let n = e.silent ? 'Silent' : 'Displayed',
                    r = t ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(n, ' - ').concat(r);
            })
            .join('\n');
    return ''
        .concat(null != n ? 'Device Token: '.concat(n) : '', '\n')
        .concat(null != a ? 'Device Voip Token: '.concat(a) : '', '\n\n')
        .concat(s);
}

r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(433517),
    a = r(981631);
function s(e, n) {
    if (0 === e.length) return 'No logs';
    let r = i.K.get(a.JkL),
        s = i.K.get(a.scU),
        o = null != r ? 'Device Token: '.concat(r) : '',
        l = null != s ? 'Device Voip Token: '.concat(s) : '',
        u = e
            .map((e) => {
                let r = e.silent ? 'Silent' : 'Displayed',
                    i = n ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(r, ' - ').concat(i);
            })
            .join('\n');
    return ''.concat(o, '\n').concat(l, '\n\n').concat(u);
}

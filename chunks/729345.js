n.d(t, {
    E: function () {
        return I;
    }
});
var r = n(544891),
    i = n(552871),
    a = n(283080),
    o = n(592125),
    s = n(569611),
    l = n(710845),
    u = n(705646),
    c = n(104639),
    d = n(691895),
    _ = n(981631);
let E = 9437184,
    f = 14680064,
    h = new l.Z('DebugUploadManager'),
    p = null,
    m = null;
async function I(e, t) {
    await T(e), await (0, i.u)(f, t);
}
async function T(e) {
    try {
        let t = s.Pz(),
            n = (null == p ? void 0 : p.getSystemLog) != null ? await new Promise((e) => p.getSystemLog(e)) : '',
            i = await (0, u.Z)().then((e) => (0, u.S)(e, !0)),
            l = t.length + n.length + i.length;
        if (l > E) {
            let e = 1 - E / l;
            (t = t.slice(t.length - Math.floor(t.length * e))), (n = n.slice(n.length - Math.floor(n.length * e))), (i = i.slice(i.length - Math.floor(i.length * e)));
        }
        let f = (null == m ? void 0 : m.AppOpenedTimestamp) != null ? m.AppOpenedTimestamp : null,
            h = '\n    '
                .concat((0, d.Z)(f), '\n\n    ')
                .concat((0, a.EA)(), '\n\n    Metadata:\n    ')
                .concat(JSON.stringify((0, c.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ')
                .concat(JSON.stringify(o.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ')
                .concat(t, '\n\n    System logs:\n    ')
                .concat(n, '\n\n    Push Notifications:\n    ')
                .concat(i, '\n    ');
        s.ZH();
        let I = _.ANM.DEBUG_LOG(e, 'discord_app_logs');
        await r.tn.post({
            url: I,
            body: h,
            retries: 3,
            headers: { 'Content-Type': 'text/plain' },
            oldFormErrors: !0
        });
    } catch (e) {
        h.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
    }
}

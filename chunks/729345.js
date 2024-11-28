n.d(t, {
    E: function () {
        return h;
    }
});
var r = n(544891),
    i = n(552871),
    a = n(283080),
    s = n(592125),
    o = n(569611),
    l = n(710845),
    u = n(104639),
    c = n(202680),
    d = n(691895),
    f = n(889911),
    _ = n(981631);
let p = new l.Z('DebugUploadManager');
async function h(e, t) {
    await m(e), await (0, i.u)(14680064, t);
}
async function m(e) {
    try {
        let t = o.Pz(),
            n = '',
            i = await (0, c.Z)().then((e) => (0, f.Z)(e, !0)),
            l = t.length + n.length + i.length;
        if (l > 9437184) {
            let e = 1 - 9437184 / l;
            (t = t.slice(t.length - Math.floor(t.length * e))), (n = n.slice(n.length - Math.floor(n.length * e))), (i = i.slice(i.length - Math.floor(i.length * e)));
        }
        let p = null,
            h = '\n    '
                .concat((0, d.Z)(p), '\n\n    ')
                .concat((0, a.EA)(), '\n\n    Metadata:\n    ')
                .concat(JSON.stringify((0, u.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ')
                .concat(JSON.stringify(s.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ')
                .concat(t, '\n\n    System logs:\n    ')
                .concat(n, '\n\n    Push Notifications:\n    ')
                .concat(i, '\n    ');
        o.ZH();
        let m = _.ANM.DEBUG_LOG(e, 'discord_app_logs');
        await r.tn.post({
            url: m,
            body: h,
            retries: 3,
            headers: { 'Content-Type': 'text/plain' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    } catch (e) {
        p.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
    }
}

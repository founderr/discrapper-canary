r.d(n, {
    u: function () {
        return h;
    }
});
var i = r(47120);
var a = r(259443),
    s = r(544891),
    o = r(881052),
    l = r(131951),
    u = r(403182),
    c = r(579806),
    d = r(981631);
let f = new a.Yd('uploadRtcLogFiles');
function _(e, n) {
    let r = n.split('.'),
        i = r.length > 1 ? r.pop() : '',
        a = r.join('.'),
        s = ''.concat(a, '.').concat(i),
        o = 1;
    for (; e.has(s); ) (s = ''.concat(a, '_').concat(o, '.').concat(i)), (o += 1);
    return e.add(s), s;
}
async function h(e, n) {
    let r;
    if (null == c.Z.fileManager.readLogFiles) throw new o.n0(o.cz.GENERAL);
    let i = [];
    try {
        i = (i = await c.Z.fileManager.readLogFiles(e)).map((e) => (0, u.qF)(e, 'application/octet-stream'));
    } catch (e) {
        throw (f.error("uploadDebugFiles: read error '".concat(e, "'")), new o.n0(o.cz.READ));
    }
    if (0 === i.length) throw new o.n0(o.cz.NO_FILE);
    let a = {
            extraInfo: n,
            mediaEngineState: l.Z.getState()
        },
        h = [
            ...i.map((e) => ({
                name: e.name,
                file: e,
                filename: e.name
            })),
            {
                name: 'media_engine_state.json',
                filename: 'media_engine_state.json',
                file: new Blob([JSON.stringify(a, void 0, 2)])
            }
        ],
        p = new Set();
    try {
        r = await s.tn.post({
            url: d.ANM.DEBUG_LOGS(d.GU0.RTC),
            attachments: [
                ...h.map((e) => {
                    let n = _(p, e.name);
                    return {
                        name: n,
                        file: e.file,
                        filename: n
                    };
                })
            ],
            rejectWithError: !1
        });
    } catch (e) {
        if (429 === e.status) throw new o.n0(o.cz.PROGRESS);
        throw (f.error('Debug log upload error: status: '.concat(e.status, ', message: ').concat(e.message)), new o.n0(o.cz.UPLOAD));
    }
    if ('success_count' in r.body && r.body.success_count !== h.length) throw (f.error('Debug log upload: stored files '.concat(r.body.success_count, ' !== ').concat(h.length)), new o.n0(o.cz.GENERAL));
    if (('store_success' in r.body && !r.body.store_success) || ('id_match' in r.body && !r.body.id_match) || ('all_success' in r.body && !r.body.all_success)) throw (f.error('Debug log upload: store_success: '.concat(r.body.store_success, ' / ') + 'id_match: '.concat(r.body.id_match, ' / ') + 'all_success: '.concat(r.body.all_success)), new o.n0(o.cz.GENERAL));
}

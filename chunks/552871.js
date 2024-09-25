n.d(t, {
    u: function () {
        return _;
    }
});
var r = n(47120);
var i = n(259443),
    a = n(544891),
    o = n(881052),
    s = n(131951),
    l = n(403182),
    u = n(579806),
    c = n(981631);
let d = new i.Y('uploadRtcLogFiles');
async function _(e, t) {
    let n;
    if (null == u.Z.fileManager.readLogFiles) throw new o.n0(o.cz.GENERAL);
    let r = [];
    try {
        r = (r = await u.Z.fileManager.readLogFiles(e)).map((e) => (0, l.qF)(e, 'application/octet-stream'));
    } catch (e) {
        throw (d.error("uploadDebugFiles: read error '".concat(e, "'")), new o.n0(o.cz.READ));
    }
    if (0 === r.length) throw new o.n0(o.cz.NO_FILE);
    try {
        let e = {
            extraInfo: t,
            mediaEngineState: s.Z.getState()
        };
        n = await a.tn.post({
            url: c.ANM.DEBUG_LOGS(c.GU0.RTC),
            attachments: [
                ...r.map((e) => ({
                    name: e.name,
                    file: e,
                    filename: e.name
                })),
                {
                    name: 'media_engine_state.json',
                    filename: 'media_engine_state.json',
                    file: new Blob([JSON.stringify(e, void 0, 2)])
                }
            ]
        });
    } catch (e) {
        if (429 === e.status) throw new o.n0(o.cz.PROGRESS);
        throw (d.error('Debug log upload error: status: '.concat(e.status, ', message: ').concat(e.message)), new o.n0(o.cz.UPLOAD));
    }
    let i = r.length + 1;
    if ('success_count' in n.body && n.body.success_count !== i) throw (d.error('Debug log upload: stored files '.concat(n.body.success_count, ' !== ').concat(i)), new o.n0(o.cz.GENERAL));
    if (('store_success' in n.body && !n.body.store_success) || ('id_match' in n.body && !n.body.id_match) || ('all_success' in n.body && !n.body.all_success)) throw (d.error('Debug log upload: store_success: '.concat(n.body.store_success, ' / ') + 'id_match: '.concat(n.body.id_match, ' / ') + 'all_success: '.concat(n.body.all_success)), new o.n0(o.cz.GENERAL));
}

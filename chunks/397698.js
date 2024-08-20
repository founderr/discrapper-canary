t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(735250);
t(470079);
var i = t(481060),
    r = t(776862),
    a = t(306680),
    o = t(626135),
    s = t(499254),
    c = t(827498),
    u = t(314734),
    d = t(981631);
function m(e) {
    let { channel: n, openInPopout: m, analyticsLocation: f } = e;
    m && (0, r.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let _ = m ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    (0, s.y)(c.ti.DISMISSED), (0, s._)(c._b.VOICE);
    let p = n.id,
        h = a.ZP.hasUnread(p) || a.ZP.getMentionCount(p) > 0;
    return (
        o.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: f,
            source: c._b.VOICE,
            is_chat_badged: h
        }),
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([t.e('64714'), t.e('21351'), t.e('38536')]).then(t.bind(t, 743161));
                return (t) =>
                    (0, l.jsx)(e, {
                        channel: n,
                        ...t
                    });
            },
            {
                modalKey: u.e9,
                contextKey: _
            }
        )
    );
}

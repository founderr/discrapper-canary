l.d(n, {
    Z: function () {
        return m;
    }
});
var t = l(735250);
l(470079);
var r = l(481060),
    i = l(776862),
    a = l(306680),
    s = l(626135),
    u = l(499254),
    o = l(827498),
    c = l(314734),
    d = l(981631);
function m(e) {
    let { channel: n, openInPopout: m, analyticsLocation: f } = e;
    m && (0, i.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let E = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    (0, u.y)(o.ti.DISMISSED), (0, u._)(o._b.VOICE);
    let p = n.id,
        C = a.ZP.hasUnread(p) || a.ZP.getMentionCount(p) > 0;
    return (
        s.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: f,
            source: o._b.VOICE,
            is_chat_badged: C
        }),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([l.e('64714'), l.e('21351'), l.e('38536')]).then(l.bind(l, 743161));
                return (l) =>
                    (0, t.jsx)(e, {
                        channel: n,
                        ...l
                    });
            },
            {
                modalKey: c.e9,
                contextKey: E
            }
        )
    );
}

t.d(e, {
    Z: function () {
        return C;
    }
});
var i = t(735250);
t(470079);
var l = t(481060),
    r = t(776862),
    o = t(306680),
    a = t(626135),
    u = t(499254),
    c = t(827498),
    d = t(314734),
    s = t(981631);
function C(n) {
    let { channel: e, openInPopout: C, analyticsLocation: h } = n;
    C && (0, r.Z)(s.KJ3.CHANNEL_CALL_POPOUT);
    let f = C ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
    (0, u.y)(c.ti.DISMISSED), (0, u._)(c._b.VOICE);
    let p = e.id,
        v = o.ZP.hasUnread(p) || o.ZP.getMentionCount(p) > 0;
    return (
        a.default.track(s.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: h,
            source: c._b.VOICE,
            is_chat_badged: v
        }),
        (0, l.openModalLazy)(
            async () => {
                let { default: n } = await Promise.all([t.e('36036'), t.e('21351'), t.e('73806')]).then(t.bind(t, 743161));
                return (t) =>
                    (0, i.jsx)(n, {
                        channel: e,
                        ...t
                    });
            },
            {
                modalKey: d.e9,
                contextKey: f
            }
        )
    );
}

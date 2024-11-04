n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(776862),
    s = n(306680),
    o = n(626135),
    l = n(499254),
    u = n(827498),
    c = n(314734),
    d = n(981631);
function f(e) {
    let { channel: t, openInPopout: f, analyticsLocation: _ } = e;
    f && (0, a.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let h = f ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    (0, l.yT)(u.ti.DISMISSED), (0, l.__)(u._b.VOICE);
    let p = t.id,
        m = s.ZP.hasUnread(p) || s.ZP.getMentionCount(p) > 0;
    return (
        o.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: _,
            source: u._b.VOICE,
            is_chat_badged: m
        }),
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('67588'), n.e('47321'), n.e('72106')]).then(n.bind(n, 743161));
                return (n) =>
                    (0, r.jsx)(e, {
                        channel: t,
                        ...n
                    });
            },
            {
                modalKey: c.e9,
                contextKey: h
            }
        )
    );
}

n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(776862),
    o = n(306680),
    s = n(626135),
    l = n(499254),
    u = n(827498),
    c = n(314734),
    d = n(981631);
function _(e) {
    let { channel: t, openInPopout: _, analyticsLocation: E } = e;
    _ && (0, a.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let f = _ ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    (0, l.y)(u.ti.DISMISSED), (0, l._)(u._b.VOICE);
    let h = t.id,
        p = o.ZP.hasUnread(h) || o.ZP.getMentionCount(h) > 0;
    return (
        s.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: E,
            source: u._b.VOICE,
            is_chat_badged: p
        }),
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('67588'), n.e('47321'), n.e('59257')]).then(n.bind(n, 743161));
                return (n) =>
                    (0, r.jsx)(e, {
                        channel: t,
                        ...n
                    });
            },
            {
                modalKey: c.e9,
                contextKey: f
            }
        )
    );
}

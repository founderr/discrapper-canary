n.d(a, {
    Z: function () {
        return E;
    }
});
var t = n(735250);
n(470079);
var r = n(481060),
    s = n(776862),
    o = n(306680),
    i = n(626135),
    l = n(499254),
    c = n(827498),
    u = n(314734),
    _ = n(981631);
function E(e) {
    let { channel: a, openInPopout: E, analyticsLocation: d } = e;
    E && (0, s.Z)(_.KJ3.CHANNEL_CALL_POPOUT);
    let I = E ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    (0, l.y)(c.ti.DISMISSED), (0, l._)(c._b.VOICE);
    let A = a.id,
        T = o.ZP.hasUnread(A) || o.ZP.getMentionCount(A) > 0;
    return (
        i.default.track(_.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: d,
            source: c._b.VOICE,
            is_chat_badged: T
        }),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('36036'), n.e('21351'), n.e('73806')]).then(n.bind(n, 743161));
                return (n) =>
                    (0, t.jsx)(e, {
                        channel: a,
                        ...n
                    });
            },
            {
                modalKey: u.e9,
                contextKey: I
            }
        )
    );
}

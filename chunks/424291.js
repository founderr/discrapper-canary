n.d(t, {
    V: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(531826);
function s(e) {
    let { application: t, channelId: s, onAgree: o, onDisagree: l } = e,
        u =
            null !=
            (0, a.ZP)({
                application: t,
                channelId: s
            })
                ? i.POPOUT_MODAL_CONTEXT
                : i.DEFAULT_MODAL_CONTEXT;
    return (
        (0, i.openModalLazy)(
            async () => {
                let { ActivityAgeGateModal: e } = await n.e('57951').then(n.bind(n, 252528));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        application: t,
                        onAgree: o,
                        onDisagree: l
                    });
            },
            {
                modalKey: 'activity-age-gate',
                contextKey: u
            }
        ),
        Promise.resolve()
    );
}

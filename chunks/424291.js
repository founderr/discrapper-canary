n.d(t, {
    V: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(522474),
    o = n(981631);
let s = 'activity-age-gate';
function l(e) {
    let { application: t, onAgree: l, onDisagree: u } = e,
        c = a.Z.getWindowOpen(o.KJ3.CHANNEL_CALL_POPOUT) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return (
        (0, i.openModalLazy)(
            async () => {
                let { ActivityAgeGateModal: e } = await n.e('57951').then(n.bind(n, 224604));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        application: t,
                        onAgree: l,
                        onDisagree: u
                    });
            },
            {
                modalKey: s,
                contextKey: c
            }
        ),
        Promise.resolve()
    );
}

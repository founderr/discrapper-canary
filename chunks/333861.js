n.d(t, {
    M: function () {
        return s;
    },
    s: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(522474),
    a = n(981631);
let o = 'command-share-modal';
function s(e) {
    let { applicationId: t, channel: s, command: c, previewMessage: d } = e,
        u = l.Z.getWindowOpen(a.KJ3.ACTIVITY_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    (0, r.openModalLazy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await n.e('53682').then(n.bind(n, 683958));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channel: s,
                    command: c,
                    previewMessage: d,
                    ...n
                });
        },
        {
            modalKey: o,
            contextKey: u
        }
    );
}

n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(522474),
    l = n(981631);
function s(e) {
    let { applicationId: t, channelId: s, mediaUrl: o } = e,
        c = a.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await n.e('4530').then(n.bind(n, 899201));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channelId: s,
                    mediaUrl: o,
                    ...n
                });
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: c
        }
    );
}

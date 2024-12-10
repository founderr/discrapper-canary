n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(812206),
    a = n(531826);
function o(e) {
    let { applicationId: t, channelId: o, mediaUrl: s } = e,
        c = l.Z.getApplication(t),
        d =
            null !=
            (0, a.ZP)({
                application: c,
                channelId: o
            })
                ? r.POPOUT_MODAL_CONTEXT
                : r.DEFAULT_MODAL_CONTEXT;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await n.e('4530').then(n.bind(n, 899201));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channelId: o,
                    mediaUrl: s,
                    ...n
                });
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: d
        }
    );
}

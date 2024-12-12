r.d(n, {
    a: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(378298),
    o = r(473092),
    l = r(237292);
function u(e) {
    let { channelId: n, warningId: u, senderId: c, warningType: d } = e;
    if (!(0, l.mG)({ location: 'takeover-modal' })) return;
    let f = () => {
        (0, s.T)(n, [u]),
            (0, o.qc)({
                channelId: n,
                senderId: c,
                warningId: u,
                warningType: d,
                cta: o.NM.USER_TAKEOVER_MODAL_DISMISS,
                isNudgeWarning: !1
            });
    };
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('37229'), r.e('59650')]).then(r.bind(r, 955708));
            return (r) =>
                (0, i.jsx)(e, {
                    channelId: n,
                    warningId: u,
                    senderId: c,
                    warningType: d,
                    modalProps: r
                });
        },
        {
            backdropStyle: a.BackdropStyles.BLUR,
            onCloseCallback: f
        }
    );
}

n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(695346),
    o = n(981631);
function s(e, t) {
    let s = () =>
        (0, i.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e('5528'), n.e('62010')]).then(n.bind(n, 601572));
                return (n) =>
                    (0, r.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    });
            },
            {
                modalKey: 'camera-preview',
                contextKey: t === o.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
            }
        );
    a.qF.getSetting() ? s() : null == e || e();
}

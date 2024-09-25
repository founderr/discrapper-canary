n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(976255),
    u = n(230711),
    c = n(409813),
    d = n(594174),
    _ = n(74538),
    E = n(212895),
    f = n(559725),
    h = n(439041),
    p = n(981631),
    m = n(689938);
let I = 1000;
function T(e) {
    let { onClose: t } = e,
        a = d.default.getCurrentUser();
    o()(void 0 !== a, 'User must not be null');
    let T = (0, _.I5)(a),
        g = T ? p.oAB.SUBSCRIPTIONS : p.oAB.BILLING;
    return (
        i.useEffect(() => {
            null == h.Z.cashAppPayComponent && (0, f.eI)();
        }, []),
        (0, r.jsxs)(s.Notice, {
            color: s.NoticeColors.DEFAULT,
            children: [
                (0, r.jsx)(s.NoticeCloseButton, {
                    onClick: t,
                    noticeType: p.kVF.CASH_APP_PAY_AWARENESS_NAGBAR
                }),
                T ? m.Z.Messages.CASH_APP_PAY_AWARENESS_SUBSCRIBER_CONTENT : m.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_CONTENT,
                (0, r.jsx)(s.PrimaryCTANoticeButton, {
                    onClick: () => {
                        u.Z.open(g),
                            setTimeout(() => {
                                (0, s.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e('96427'), n.e('54803'), n.e('52619'), n.e('61275')]).then(n.bind(n, 623573));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                ...t,
                                                initialStep: c.h8.CASH_APP_INFORMATION,
                                                analyticsLocation: p.Sbl.CASH_APP_PAY_AWARENESS_NAGBAR,
                                                onAddPaymentSource: (e) => (0, E.i1)(e.id),
                                                toastContent: T ? m.Z.Messages.CASH_APP_PAY_AWARENESS_UPDATE_NITRO_PAYMENT_METHOD_TOAST : m.Z.Messages.CASH_APP_PAY_AWARENESS_UPDATE_NON_NITRO_PAYMENT_METHOD_TOAST,
                                                overwriteSubscriptionPaymentSource: T
                                            });
                                    },
                                    {
                                        onCloseCallback: () => (0, l.fw)(),
                                        onCloseRequest: p.dG4
                                    }
                                );
                            }, I),
                            t();
                    },
                    noticeType: p.kVF.CASH_APP_PAY_AWARENESS_NAGBAR,
                    children: T ? m.Z.Messages.CASH_APP_PAY_AWARENESS_SUBSCRIBER_CTA : m.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_CTA
                })
            ]
        })
    );
}

n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(512722),
    l = n.n(s),
    r = n(481060),
    o = n(976255),
    c = n(230711),
    d = n(409813),
    u = n(594174),
    _ = n(74538),
    E = n(212895),
    I = n(559725),
    m = n(439041),
    T = n(981631),
    N = n(689938);
function h(e) {
    let { onClose: t } = e,
        s = u.default.getCurrentUser();
    l()(void 0 !== s, 'User must not be null');
    let h = (0, _.I5)(s),
        C = h ? T.oAB.SUBSCRIPTIONS : T.oAB.BILLING;
    return (
        a.useEffect(() => {
            null == m.Z.cashAppPayComponent && (0, I.eI)();
        }, []),
        (0, i.jsxs)(r.Notice, {
            color: r.NoticeColors.DEFAULT,
            children: [
                (0, i.jsx)(r.NoticeCloseButton, {
                    onClick: t,
                    noticeType: T.kVF.CASH_APP_PAY_AWARENESS_NAGBAR
                }),
                h ? N.Z.Messages.CASH_APP_PAY_AWARENESS_SUBSCRIBER_CONTENT : N.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_CONTENT,
                (0, i.jsx)(r.PrimaryCTANoticeButton, {
                    onClick: () => {
                        c.Z.open(C),
                            setTimeout(() => {
                                (0, r.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e('96427'), n.e('54803'), n.e('52619'), n.e('61275')]).then(n.bind(n, 623573));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                initialStep: d.h8.CASH_APP_INFORMATION,
                                                analyticsLocation: T.Sbl.CASH_APP_PAY_AWARENESS_NAGBAR,
                                                onAddPaymentSource: (e) => (0, E.i1)(e.id),
                                                toastContent: h ? N.Z.Messages.CASH_APP_PAY_AWARENESS_UPDATE_NITRO_PAYMENT_METHOD_TOAST : N.Z.Messages.CASH_APP_PAY_AWARENESS_UPDATE_NON_NITRO_PAYMENT_METHOD_TOAST,
                                                overwriteSubscriptionPaymentSource: h
                                            });
                                    },
                                    {
                                        onCloseCallback: () => (0, o.fw)(),
                                        onCloseRequest: T.dG4
                                    }
                                );
                            }, 1000),
                            t();
                    },
                    noticeType: T.kVF.CASH_APP_PAY_AWARENESS_NAGBAR,
                    children: h ? N.Z.Messages.CASH_APP_PAY_AWARENESS_SUBSCRIBER_CTA : N.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_CTA
                })
            ]
        })
    );
}

i.d(t, {
    Yn: function () {
        return E;
    }
}),
    i(411104),
    i(47120);
var n = i(735250),
    o = i(470079),
    a = i(283693),
    l = i(481060),
    r = i(816814),
    s = i(200483),
    c = i(981631),
    d = i(689938);
function u(e) {
    let { onError: t, onSuccess: i, PasswordConfirm: l, ...s } = e,
        [u, _] = o.useState('');
    return (0, n.jsx)(l, {
        ...s,
        handleSubmit: (e) => r.Z.enableMFAStart(e),
        onError: (e) => {
            var n;
            if (('object' == typeof (n = e) && null != n && (0, a.nr)(n, 'code') && 'number' == typeof n.code ? n.code : 0) === c.evJ.MFA_INVALID_SECRET) i(u), s.onClose();
            else t(e);
        },
        onPasswordChange: _,
        title: d.Z.Messages.TWO_FA_ENABLE,
        actionText: d.Z.Messages.CONTINUE,
        skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
    });
}
function _(e, t) {
    return new Promise((o) => {
        (0, l.openModalLazy)(async () => {
            let { default: a } = await Promise.all([i.e('78776'), i.e('23746')]).then(i.bind(i, 837651));
            return (i) =>
                (0, n.jsx)(a, {
                    ...i,
                    password: e,
                    emailToken: t,
                    handleEnableMFASuccess: o
                });
        });
    });
}
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([i.e('76540'), i.e('27580')]).then(i.bind(i, 628908));
                return (i) =>
                    (0, n.jsx)(t, {
                        ...i,
                        isTotp: e
                    });
            },
            {
                onCloseCallback: t,
                onCloseRequest: c.VqG
            }
        );
    });
}
async function M() {
    let e = await new Promise((e, t) => {
        (0, l.openModalLazy)(async () => {
            let { default: o } = await i.e('24642').then(i.bind(i, 279837));
            return (i) =>
                (0, n.jsx)(u, {
                    ...i,
                    onSuccess: e,
                    onError: t,
                    PasswordConfirm: o
                });
        });
    });
    if ((0, s.j)()) {
        var t;
        let o = await ((t = e),
        new Promise((e) => {
            (0, l.openModalLazy)(async () => {
                let { default: o } = await i.e('94566').then(i.bind(i, 965072));
                return (i) =>
                    (0, n.jsx)(o, {
                        ...i,
                        onFormSubmit: async (e) => await r.Z.verifyEmailCode(e),
                        onResend: async () => {
                            await r.Z.resendEmailCode(t);
                        },
                        onSuccess: e,
                        headerText: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                        confirmButtonText: d.Z.Messages.NEXT
                    });
            });
        }));
        await _(e, null == o ? void 0 : o.token);
    } else await _(e);
    await E();
}
t.ZP = { enableMFA: M };

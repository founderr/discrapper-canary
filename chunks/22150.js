n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(479531),
    r = n(393869),
    d = n(594174),
    c = n(388032),
    u = n(374808);
function E(e) {
    let { onNext: t, onClose: n } = e,
        [E, _] = s.useState(!1),
        m = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        N = async (e) => {
            e.preventDefault(), _(!0);
            try {
                await (0, r.i)(), t();
            } catch (t) {
                let e = new i.Z(t).getAnyErrorMessage();
                null != e && (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
            } finally {
                _(!1);
            }
        };
    return (0, o.jsxs)('form', {
        onSubmit: N,
        children: [
            (0, o.jsxs)(a.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, o.jsx)(a.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: c.intl.string(c.t.uFxYq6)
                    }),
                    (0, o.jsx)(a.ModalCloseButton, {
                        onClick: n,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, o.jsx)(a.ModalContent, {
                className: u.content,
                children: (0, o.jsx)(a.Text, {
                    className: u.description,
                    variant: 'text-md/normal',
                    children: c.intl.format(c.t.oMFSgo, { oldEmail: null == m ? void 0 : m.email })
                })
            }),
            (0, o.jsxs)(a.ModalFooter, {
                className: u.modalFooter,
                children: [
                    (0, o.jsx)(a.Button, {
                        type: 'submit',
                        color: a.Button.Colors.BRAND,
                        size: a.Button.Sizes.MEDIUM,
                        submitting: E,
                        className: u.__invalid_submit,
                        children: c.intl.string(c.t.rXV81N)
                    }),
                    (0, o.jsx)(a.Button, {
                        className: u.__invalid_cancel,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: n,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

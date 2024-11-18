n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    i = n(479531),
    a = n(393869),
    c = n(594174),
    d = n(388032),
    u = n(374808);
function E(e) {
    let { onNext: t, onClose: n } = e,
        [E, _] = s.useState(!1),
        m = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        N = async (e) => {
            e.preventDefault(), _(!0);
            try {
                await (0, a.i)(), t();
            } catch (t) {
                let e = new i.Z(t).getAnyErrorMessage();
                null != e && (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
            } finally {
                _(!1);
            }
        };
    return (0, o.jsxs)('form', {
        onSubmit: N,
        children: [
            (0, o.jsxs)(r.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, o.jsx)(r.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t.uFxYq6)
                    }),
                    (0, o.jsx)(r.ModalCloseButton, {
                        onClick: n,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, o.jsx)(r.ModalContent, {
                className: u.content,
                children: (0, o.jsx)(r.Text, {
                    className: u.description,
                    variant: 'text-md/normal',
                    children: d.intl.format(d.t.oMFSgo, { oldEmail: null == m ? void 0 : m.email })
                })
            }),
            (0, o.jsxs)(r.ModalFooter, {
                className: u.modalFooter,
                children: [
                    (0, o.jsx)(r.Button, {
                        type: 'submit',
                        color: r.Button.Colors.BRAND,
                        size: r.Button.Sizes.MEDIUM,
                        submitting: E,
                        className: u.__invalid_submit,
                        children: d.intl.string(d.t.rXV81N)
                    }),
                    (0, o.jsx)(r.Button, {
                        className: u.__invalid_cancel,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: n,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

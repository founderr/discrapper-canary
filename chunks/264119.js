t.d(s, {
    Z: function () {
        return r;
    }
});
var n = t(200651);
t(192379);
var o = t(481060),
    a = t(689938),
    l = t(859565);
function r(e) {
    let { email: s, onClose: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.ModalHeader, {
                separator: !1,
                className: l.header,
                children: [
                    (0, n.jsx)(o.Heading, {
                        className: l.title,
                        variant: 'heading-xl/semibold',
                        children: a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE
                    }),
                    (0, n.jsx)(o.ModalCloseButton, {
                        onClick: t,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(o.ModalContent, {
                className: l.content,
                children: (0, n.jsx)(o.Text, {
                    className: l.description,
                    variant: 'text-md/normal',
                    children: a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format({ email: s })
                })
            }),
            (0, n.jsx)(o.ModalContent, {
                className: l.content,
                children: (0, n.jsx)(o.Text, {
                    className: l.tooltip,
                    variant: 'text-sm/normal',
                    children: a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
                })
            }),
            (0, n.jsx)(o.ModalFooter, {
                className: l.modalFooter,
                children: (0, n.jsx)(o.Button, {
                    className: l.__invalid_submit,
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MEDIUM,
                    onClick: t,
                    children: a.Z.Messages.OKAY
                })
            })
        ]
    });
}

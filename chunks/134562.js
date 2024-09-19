t.d(s, {
    Z: function () {
        return i;
    }
});
var n = t(735250);
t(470079);
var o = t(481060),
    a = t(259076),
    l = t(689938),
    r = t(859565);
function i(e) {
    let { onNext: s, onClose: t } = e;
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(o.ModalHeader, {
                separator: !1,
                className: r.header,
                children: [
                    (0, n.jsx)(o.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: l.Z.Messages.EMAIL_CHANGE_REASONING_WARNING_HEADER
                    }),
                    (0, n.jsx)(o.ModalCloseButton, {
                        onClick: t,
                        className: r.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(o.ModalContent, {
                className: r.content,
                children: [
                    (0, n.jsx)(o.Text, {
                        className: r.description,
                        variant: 'text-md/normal',
                        children: l.Z.Messages.EMAIL_CHANGE_REASONING_IMPERSONATION_EDUCATION.format({ hcArticle: a.j1 })
                    }),
                    (0, n.jsx)(o.Text, {
                        className: r.description,
                        variant: 'text-md/normal',
                        children: l.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_NEVER_ASKS_FOR_EMAIL_CHANGE
                    })
                ]
            }),
            (0, n.jsxs)(o.ModalFooter, {
                className: r.modalFooter,
                children: [
                    (0, n.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        onClick: t,
                        children: l.Z.Messages.CANCEL
                    }),
                    (0, n.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        onClick: s,
                        children: l.Z.Messages.EMAIL_CHANGE_REASONING_CONTINUE
                    })
                ]
            })
        ]
    });
}

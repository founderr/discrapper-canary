t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var o = t(481060),
    a = t(488889),
    l = t(626135),
    r = t(981631),
    i = t(259076),
    E = t(689938),
    _ = t(810452),
    N = t(859565);
function d(e) {
    let { onNext: s, onClose: t, reason: d, onReasonChange: c } = e,
        A = i.zf.map((e) => ({
            value: e,
            name: (0, a.S)(e)
        }));
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(o.ModalHeader, {
                separator: !1,
                className: N.header,
                children: [
                    (0, n.jsx)(o.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: E.Z.Messages.EMAIL_CHANGE_REASONING_HEADER
                    }),
                    (0, n.jsx)(o.ModalCloseButton, {
                        onClick: t,
                        className: N.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(o.ModalContent, {
                className: _.content,
                children: (0, n.jsx)(o.RadioGroup, {
                    radioPosition: 'right',
                    radioItemClassName: _.radioItem,
                    size: o.RadioGroup.Sizes.NOT_SET,
                    value: d,
                    options: A,
                    onChange: (e) => {
                        let { value: s } = e;
                        l.default.track(r.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: s }), c(s);
                    }
                })
            }),
            (0, n.jsxs)(o.ModalFooter, {
                className: N.modalFooter,
                children: [
                    (0, n.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        disabled: null == d,
                        size: o.Button.Sizes.MEDIUM,
                        onClick: s,
                        children: E.Z.Messages.CONTINUE
                    }),
                    (0, n.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: t,
                        children: E.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}

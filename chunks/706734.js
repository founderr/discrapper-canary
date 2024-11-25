n.d(t, {
    Z: function () {
        return _;
    }
});
var o = n(200651);
n(192379);
var s = n(481060),
    l = n(488889),
    r = n(226186),
    i = n(626135),
    a = n(981631),
    c = n(259076),
    d = n(388032),
    u = n(511023),
    E = n(981818);
function _(e) {
    let { onNext: t, onClose: n, reason: _, onReasonChange: m, freeTextResponse: N, setFreeTextResponse: x } = e,
        A = c.zf.map((e) => ({
            value: e,
            name: (0, l.S)(e)
        })),
        C = (0, r.u)('change_email_collect_reasons_slide');
    return (0, o.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, o.jsxs)(s.ModalHeader, {
                separator: !1,
                className: E.header,
                children: [
                    (0, o.jsx)(s.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t['41NIIi'])
                    }),
                    (0, o.jsx)(s.ModalCloseButton, {
                        onClick: n,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, o.jsxs)(s.ModalContent, {
                className: u.content,
                children: [
                    (0, o.jsx)(s.RadioGroup, {
                        radioPosition: 'right',
                        radioItemClassName: u.radioItem,
                        size: s.RadioGroup.Sizes.NOT_SET,
                        value: _,
                        options: A,
                        onChange: (e) => {
                            let { value: t } = e;
                            i.default.track(a.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), m(t), x(''), t === c.pw.SOMETHING_ELSE && r.Z.trackExposure({ location: 'change_email_collect_reasons_slide' });
                        }
                    }),
                    C &&
                        _ === c.pw.SOMETHING_ELSE &&
                        (0, o.jsx)(s.FormItem, {
                            children: (0, o.jsx)(s.TextArea, {
                                value: N,
                                maxLength: c.mF,
                                onChange: x,
                                className: u.textArea,
                                placeholder: d.intl.string(d.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, o.jsxs)(s.ModalFooter, {
                className: E.modalFooter,
                children: [
                    (0, o.jsx)(s.Button, {
                        color: s.Button.Colors.BRAND,
                        disabled: null == _,
                        size: s.Button.Sizes.MEDIUM,
                        onClick: t,
                        children: d.intl.string(d.t['3PatS0'])
                    }),
                    (0, o.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        onClick: n,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

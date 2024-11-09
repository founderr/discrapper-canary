n.d(t, {
    Z: function () {
        return r;
    }
});
var o = n(200651);
n(192379);
var s = n(481060),
    l = n(259076),
    a = n(388032),
    i = n(859565);
function r(e) {
    let { onNext: t, onClose: n } = e;
    return (0, o.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, o.jsxs)(s.ModalHeader, {
                separator: !1,
                className: i.header,
                children: [
                    (0, o.jsx)(s.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: a.intl.string(a.t.hhR7gY)
                    }),
                    (0, o.jsx)(s.ModalCloseButton, {
                        onClick: n,
                        className: i.modalCloseButton
                    })
                ]
            }),
            (0, o.jsxs)(s.ModalContent, {
                className: i.content,
                children: [
                    (0, o.jsx)(s.Text, {
                        className: i.description,
                        variant: 'text-md/normal',
                        children: a.intl.format(a.t.rqWXUV, { hcArticle: l.j1 })
                    }),
                    (0, o.jsx)(s.Text, {
                        className: i.description,
                        variant: 'text-md/normal',
                        children: a.intl.string(a.t['3LW10N'])
                    })
                ]
            }),
            (0, o.jsxs)(s.ModalFooter, {
                className: i.modalFooter,
                children: [
                    (0, o.jsx)(s.Button, {
                        color: s.Button.Colors.BRAND,
                        onClick: n,
                        children: a.intl.string(a.t['ETE/oK'])
                    }),
                    (0, o.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: t,
                        children: a.intl.string(a.t.rwTBFh)
                    })
                ]
            })
        ]
    });
}

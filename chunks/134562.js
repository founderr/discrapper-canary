n.d(t, {
    Z: function () {
        return a;
    }
});
var o = n(200651);
n(192379);
var s = n(481060),
    l = n(259076),
    r = n(388032),
    i = n(374808);
function a(e) {
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
                        children: r.intl.string(r.t.hhR7gY)
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
                        children: r.intl.format(r.t.rqWXUV, { hcArticle: l.j1 })
                    }),
                    (0, o.jsx)(s.Text, {
                        className: i.description,
                        variant: 'text-md/normal',
                        children: r.intl.string(r.t['3LW10N'])
                    })
                ]
            }),
            (0, o.jsxs)(s.ModalFooter, {
                className: i.modalFooter,
                children: [
                    (0, o.jsx)(s.Button, {
                        color: s.Button.Colors.BRAND,
                        onClick: n,
                        children: r.intl.string(r.t['ETE/oK'])
                    }),
                    (0, o.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: t,
                        children: r.intl.string(r.t.rwTBFh)
                    })
                ]
            })
        ]
    });
}

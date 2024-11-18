n.d(t, {
    Z: function () {
        return i;
    }
});
var o = n(200651);
n(192379);
var s = n(481060),
    l = n(388032),
    r = n(374808);
function i(e) {
    let { email: t, onClose: n } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(s.ModalHeader, {
                separator: !1,
                className: r.header,
                children: [
                    (0, o.jsx)(s.Heading, {
                        className: r.title,
                        variant: 'heading-xl/semibold',
                        children: l.intl.string(l.t['8O+nFx'])
                    }),
                    (0, o.jsx)(s.ModalCloseButton, {
                        onClick: n,
                        className: r.modalCloseButton
                    })
                ]
            }),
            (0, o.jsx)(s.ModalContent, {
                className: r.content,
                children: (0, o.jsx)(s.Text, {
                    className: r.description,
                    variant: 'text-md/normal',
                    children: l.intl.format(l.t.Zvx0Oz, { email: t })
                })
            }),
            (0, o.jsx)(s.ModalContent, {
                className: r.content,
                children: (0, o.jsx)(s.Text, {
                    className: r.tooltip,
                    variant: 'text-sm/normal',
                    children: l.intl.string(l.t.yb7itb)
                })
            }),
            (0, o.jsx)(s.ModalFooter, {
                className: r.modalFooter,
                children: (0, o.jsx)(s.Button, {
                    className: r.__invalid_submit,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.MEDIUM,
                    onClick: n,
                    children: l.intl.string(l.t.BddRzc)
                })
            })
        ]
    });
}

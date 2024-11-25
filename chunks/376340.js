n.d(t, {
    L: function () {
        return c;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    l = n(600164),
    o = n(424071),
    s = n(388032),
    i = n(38920);
function c(e) {
    let { onClose: t, img: n, title: c, body: d, content: u } = e;
    return (0, a.jsxs)(o.Z, {
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                direction: l.Z.Direction.VERTICAL,
                className: i.header,
                separator: !1,
                children: [
                    (0, a.jsx)('div', {
                        className: i.illustration,
                        children: n
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: i.title,
                        variant: 'heading-xl/extrabold',
                        children: c
                    }),
                    (0, a.jsx)(r.ModalCloseButton, {
                        className: i.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: i.body,
                paddingFix: !1,
                children: [
                    (0, a.jsx)(r.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    u
                ]
            }),
            (0, a.jsx)(r.ModalFooter, {
                className: i.footer,
                children: (0, a.jsx)(r.Button, {
                    className: i.footerButton,
                    color: r.Button.Colors.BRAND,
                    onClick: t,
                    children: s.intl.string(s.t.i4jeWV)
                })
            })
        ]
    });
}

n.d(t, {
    C: function () {
        return d;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    l = n(600164),
    o = n(424071),
    s = n(388032),
    i = n(879137),
    c = n(387852);
function d(e) {
    let { onContinue: t, onClose: n, title: d, body: u } = e;
    return (0, a.jsxs)(o.Z, {
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                direction: l.Z.Direction.VERTICAL,
                className: i.header,
                separator: !1,
                children: [
                    (0, a.jsx)('img', {
                        src: c,
                        className: i.illustration,
                        width: '254',
                        height: '127',
                        alt: ''
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: i.title,
                        variant: 'heading-xl/extrabold',
                        children: d
                    }),
                    null != n &&
                        (0, a.jsx)(r.ModalCloseButton, {
                            className: i.closeButton,
                            onClick: n
                        })
                ]
            }),
            (0, a.jsx)(r.ModalContent, {
                className: i.body,
                paddingFix: !1,
                children: (0, a.jsx)(r.Text, {
                    tag: 'p',
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: u
                })
            }),
            (0, a.jsx)(r.ModalFooter, {
                className: i.footer,
                children: (0, a.jsxs)(r.Button, {
                    className: i.footerButton,
                    color: r.Button.Colors.BRAND,
                    onClick: t,
                    children: [
                        s.intl.string(s.t['7NqTJi']),
                        (0, a.jsx)(r.WindowLaunchIcon, {
                            color: 'currentColor',
                            className: i.launchIcon,
                            size: 'xs'
                        })
                    ]
                })
            })
        ]
    });
}

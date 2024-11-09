n.d(t, {
    m: function () {
        return u;
    }
});
var a = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(600164),
    s = n(553795),
    i = n(424071),
    c = n(388032),
    d = n(879137);
function u(e) {
    let { platformType: t, onContinue: n, onClose: u, img: x, headerConnect: h, headerReconnect: m, body: N, learnMoreLink: C, valueProps: j } = e,
        f = (0, r.e7)([s.Z], () => {
            let e = s.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, a.jsxs)(i.Z, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        className: d.illustration,
                        children: [x, ' ']
                    }),
                    (0, a.jsx)(l.Heading, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: f && null != m ? m : h
                    }),
                    (0, a.jsx)(l.ModalCloseButton, {
                        className: d.closeButton,
                        onClick: u
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: d.body,
                paddingFix: !1,
                children: [
                    (0, a.jsx)(l.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: N
                    }),
                    (0, a.jsx)('div', {
                        className: d.valueProps,
                        children: j
                    }),
                    null != C
                        ? (0, a.jsx)(l.Text, {
                              tag: 'p',
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: c.intl.format(c.t['/l3n+/'], { helpCenterLink: C })
                          })
                        : null
                ]
            }),
            (0, a.jsx)(l.ModalFooter, {
                className: d.footer,
                children: (0, a.jsx)(l.Button, {
                    className: d.footerButton,
                    color: l.Button.Colors.BRAND,
                    onClick: n,
                    children: c.intl.string(c.t['3PatS0'])
                })
            })
        ]
    });
}

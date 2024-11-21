a.r(t), a(47120);
var r = a(200651),
    o = a(192379),
    n = a(481060),
    i = a(277021),
    s = a(180511);
t.default = function (e) {
    let { onClose: t, transitionState: a } = e,
        [c, d] = o.useState(''),
        [l, u] = o.useState(''),
        f = async () => {
            u('');
            try {
                let e = await (0, i.Q)();
                d(e.verification_webview_url);
            } catch (e) {
                d(''), u(e.message);
            }
        };
    return (0, r.jsxs)(n.ModalRoot, {
        transitionState: a,
        className: s.root,
        children: [
            (0, r.jsxs)(n.ModalHeader, {
                className: s.header,
                children: [
                    (0, r.jsx)(n.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, r.jsx)(n.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsx)(n.ModalContent, {
                className: s.content,
                children:
                    '' !== c &&
                    (0, r.jsx)('iframe', {
                        id: 'frame',
                        src: c,
                        className: s.iframe,
                        allow: 'camera; microphone'
                    })
            }),
            (0, r.jsxs)(n.ModalFooter, {
                className: s.footer,
                children: [
                    (0, r.jsx)(n.Button, {
                        onClick: f,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, r.jsx)(n.InputError, { error: l })
                ]
            })
        ]
    });
};

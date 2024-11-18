a.r(t), a(47120);
var r = a(200651),
    o = a(192379),
    n = a(481060),
    s = a(277021),
    i = a(3327);
t.default = function (e) {
    let { onClose: t, transitionState: a } = e,
        [c, d] = o.useState(''),
        [l, u] = o.useState(''),
        h = async () => {
            u('');
            try {
                let e = await (0, s.Q)();
                d(e.url);
            } catch (e) {
                d(''), u(e.message);
            }
        };
    return (0, r.jsxs)(n.ModalRoot, {
        transitionState: a,
        className: i.root,
        children: [
            (0, r.jsxs)(n.ModalHeader, {
                className: i.header,
                children: [
                    (0, r.jsx)(n.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, r.jsx)(n.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsx)(n.ModalContent, {
                className: i.content,
                children:
                    '' !== c &&
                    (0, r.jsx)('iframe', {
                        id: 'frame',
                        src: c,
                        className: i.iframe,
                        allow: 'camera; microphone'
                    })
            }),
            (0, r.jsxs)(n.ModalFooter, {
                className: i.footer,
                children: [
                    (0, r.jsx)(n.Button, {
                        onClick: h,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, r.jsx)(n.InputError, { error: l })
                ]
            })
        ]
    });
};

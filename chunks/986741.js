t.r(a), t(47120);
var o = t(200651),
    r = t(192379),
    n = t(481060),
    s = t(277021),
    i = t(3327);
a.default = function (e) {
    let { onClose: a, transitionState: t } = e,
        [c, d] = r.useState(''),
        [l, u] = r.useState(''),
        f = async () => {
            u('');
            try {
                let e = await (0, s.Q)();
                d(e.url);
            } catch (e) {
                d(''), u(e.message);
            }
        };
    return (0, o.jsxs)(n.ModalRoot, {
        transitionState: t,
        className: i.root,
        children: [
            (0, o.jsxs)(n.ModalHeader, {
                className: i.header,
                children: [
                    (0, o.jsx)(n.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, o.jsx)(n.ModalCloseButton, { onClick: a })
                ]
            }),
            (0, o.jsx)(n.ModalContent, {
                className: i.content,
                children:
                    '' !== c &&
                    (0, o.jsx)('iframe', {
                        id: 'frame',
                        src: c,
                        className: i.iframe,
                        allow: 'camera; microphone'
                    })
            }),
            (0, o.jsxs)(n.ModalFooter, {
                className: i.footer,
                children: [
                    (0, o.jsx)(n.Button, {
                        onClick: f,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, o.jsx)(n.InputError, { error: l })
                ]
            })
        ]
    });
};

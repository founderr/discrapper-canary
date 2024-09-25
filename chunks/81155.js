o.r(t),
    o.d(t, {
        default: function () {
            return p;
        }
    });
var l = o(735250),
    n = o(470079),
    a = o(481060),
    s = o(782568),
    r = o(690221),
    i = o(557177),
    u = o(689938),
    c = o(661243);
let d = [
    {
        preBold: "That's pretty...",
        bold: 'fly!'
    },
    {
        preBold: 'On Point will make sure to',
        bold: ' tick ',
        postBold: 'a look at it!'
    },
    {
        preBold: "You're...un",
        bold: 'bee ',
        postBold: 'lievable!'
    }
];
function b(e) {
    let { punConfig: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [t.preBold, (0, l.jsx)('b', { children: (0, l.jsx)('i', { children: t.bold }) }), t.postBold]
    });
}
function p(e) {
    let { transitionState: t, onClose: o, asanaTask: p } = e;
    n.useEffect(() => {
        (0, i.GN)('success', 0.1);
    }, []);
    let f = n.useRef(d[Math.floor(Math.random() * d.length)]).current;
    return (0, l.jsx)(a.ModalRoot, {
        className: c.bugReporterSubmitModalRoot,
        transitionState: t,
        'aria-label': u.Z.Messages.SUBMIT_BUG,
        children: (0, l.jsxs)(a.ModalContent, {
            style: {
                overflow: 'hidden',
                paddingRight: '0px'
            },
            className: c.modalContent,
            paddingFix: !1,
            children: [
                (0, l.jsx)(a.ModalCloseButton, {
                    onClick: () => {
                        null == o || o();
                    },
                    className: c.closeButton
                }),
                (0, l.jsxs)(a.Text, {
                    className: c.submitText,
                    variant: 'text-sm/normal',
                    children: [
                        'Thanks for submitting a ',
                        (0, l.jsx)(r.Z, {
                            onClick: () => (0, s.Z)(p.permalink_url),
                            children: 'bug'
                        }),
                        '!',
                        (0, l.jsx)('br', {}),
                        (0, l.jsx)(b, { punConfig: f })
                    ]
                })
            ]
        })
    });
}

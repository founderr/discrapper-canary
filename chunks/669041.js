n.r(t),
    n.d(t, {
        QuestsRewardModalUnverified: function () {
            return _;
        },
        openRewardModalUnverified: function () {
            return p;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(893776),
    l = n(594174),
    u = n(918701),
    c = n(388032),
    d = n(879858),
    f = n(800010);
function _(e) {
    let { transitionState: t, onClose: n } = e,
        _ = (0, a.e7)([l.default], () => {
            var e;
            return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
        }),
        [p, h] = i.useState({ status: 'unknown' });
    i.useEffect(() => {
        h({ status: 'loading' }),
            o.Z.verifyResend().then(
                () => h({ status: 'success' }),
                (e) => {
                    h({ status: 'error' }), (0, u.ys)(e, { tags: { location: 'QuestsRewardModalUnverified' } });
                }
            );
    }, []);
    let m = () =>
        (0, r.jsx)(s.ModalFooter, {
            className: d.modalFooter,
            children: (0, r.jsx)(s.Button, {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.MEDIUM,
                onClick: n,
                children: c.intl.string(c.t.cpT0Cg)
            })
        });
    return (0, r.jsxs)(s.ModalRoot, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: d.headerImage,
                src: f
            }),
            (0, r.jsxs)(s.ModalHeader, {
                separator: !1,
                className: d.header,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: d.title,
                        variant: 'heading-xl/bold',
                        children: c.intl.string(c.t.c8eASE)
                    }),
                    (0, r.jsx)(s.ModalCloseButton, {
                        onClick: n,
                        className: d.modalCloseButton
                    })
                ]
            }),
            'loading' === p.status &&
                (0, r.jsx)(s.ModalContent, {
                    className: d.content,
                    children: (0, r.jsx)(s.Spinner, {})
                }),
            'error' === p.status &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.ModalContent, {
                            className: d.content,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: c.intl.string(c.t.vjyinp)
                            })
                        }),
                        m()
                    ]
                }),
            'success' === p.status &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.ModalContent, {
                            className: d.content,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: c.intl.format(c.t.qP5xYW, {
                                    emailAddress: _,
                                    emailAddressLink: 'mailto:'.concat(_)
                                })
                            })
                        }),
                        (0, r.jsx)(s.ModalContent, {
                            className: d.content,
                            children: (0, r.jsxs)('div', {
                                className: d.tooltip,
                                children: [
                                    (0, r.jsx)(s.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: d.infoFilledIcon
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        className: d.tooltipText,
                                        variant: 'text-sm/normal',
                                        children: c.intl.string(c.t.yb7itb)
                                    })
                                ]
                            })
                        }),
                        m()
                    ]
                })
        ]
    });
}
function p() {
    (0, s.openModalLazy)(async () => {
        let { QuestsRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 669041));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}

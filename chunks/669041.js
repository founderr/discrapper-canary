n.r(t),
    n.d(t, {
        QuestsRewardModalUnverified: function () {
            return f;
        },
        openRewardModalUnverified: function () {
            return h;
        }
    });
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(893776),
    u = n(594174),
    c = n(918701),
    d = n(689938),
    _ = n(300992),
    E = n(800010);
function f(e) {
    let { transitionState: t, onClose: n } = e,
        r = (0, o.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
        }),
        [f, h] = a.useState({ status: 'unknown' });
    a.useEffect(() => {
        h({ status: 'loading' }),
            l.Z.verifyResend().then(
                () => h({ status: 'success' }),
                (e) => {
                    h({ status: 'error' }), (0, c.ys)(e, { tags: { location: 'QuestsRewardModalUnverified' } });
                }
            );
    }, []);
    let p = () =>
        (0, i.jsx)(s.ModalFooter, {
            className: _.modalFooter,
            children: (0, i.jsx)(s.Button, {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.MEDIUM,
                onClick: n,
                children: d.Z.Messages.CLOSE
            })
        });
    return (0, i.jsxs)(s.ModalRoot, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: _.headerImage,
                src: E
            }),
            (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: _.header,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: _.title,
                        variant: 'heading-xl/bold',
                        children: d.Z.Messages.QUESTS_REWARD_VERIFICATION_TITLE
                    }),
                    (0, i.jsx)(s.ModalCloseButton, {
                        onClick: n,
                        className: _.modalCloseButton
                    })
                ]
            }),
            'loading' === f.status &&
                (0, i.jsx)(s.ModalContent, {
                    className: _.content,
                    children: (0, i.jsx)(s.Spinner, {})
                }),
            'error' === f.status &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.ModalContent, {
                            className: _.content,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: d.Z.Messages.QUESTS_REWARD_VERIFICATION_ERROR
                            })
                        }),
                        p()
                    ]
                }),
            'success' === f.status &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.ModalContent, {
                            className: _.content,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: d.Z.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
                                    emailAddress: r,
                                    emailAddressLink: 'mailto:'.concat(r)
                                })
                            })
                        }),
                        (0, i.jsx)(s.ModalContent, {
                            className: _.content,
                            children: (0, i.jsxs)('div', {
                                className: _.tooltip,
                                children: [
                                    (0, i.jsx)(s.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: _.infoFilledIcon
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        className: _.tooltipText,
                                        variant: 'text-sm/normal',
                                        children: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
                                    })
                                ]
                            })
                        }),
                        p()
                    ]
                })
        ]
    });
}
function h() {
    (0, s.openModalLazy)(async () => {
        let { QuestsRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 669041));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}

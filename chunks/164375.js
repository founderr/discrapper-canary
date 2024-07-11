a.r(s), a.d(s, {
    default: function () {
        return l;
    }
});
var n = a(735250);
a(470079);
var t = a(481060), r = a(493683), o = a(594174), i = a(799352), c = a(689938), _ = a(251846), d = a(444812);
function l(e) {
    var s;
    let {
            channelId: a,
            blockedUserIds: l,
            transitionState: E,
            onClose: u
        } = e, N = l.map(e => o.default.getUser(e)), h = () => {
            u(), (0, i.O)(a);
        }, m = N.length > 1;
    return (0, n.jsxs)(t.ModalRoot, {
        transitionState: E,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: _.headerImage,
                src: d
            }),
            (0, n.jsx)(t.ModalHeader, {
                separator: !1,
                className: _.header,
                children: (0, n.jsxs)(t.Heading, {
                    variant: 'heading-lg/bold',
                    className: _.title,
                    children: [
                        m ? c.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : c.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
                        (0, n.jsx)('br', {}),
                        c.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL
                    ]
                })
            }),
            (0, n.jsxs)(t.ModalContent, {
                className: _.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: _.infoGroup,
                        children: [
                            (0, n.jsx)('div', {
                                className: _.infoRow,
                                children: m ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(t.GroupIcon, {}),
                                        (0, n.jsx)(t.Text, {
                                            variant: 'text-md/medium',
                                            children: c.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: N.length })
                                        })
                                    ]
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(t.UserIcon, {}),
                                        (0, n.jsx)(t.Text, {
                                            variant: 'text-md/medium',
                                            children: c.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null === (s = N[0]) || void 0 === s ? void 0 : s.username })
                                        })
                                    ]
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: _.infoRow,
                                children: [
                                    (0, n.jsx)(t.BellSlashIcon, {}),
                                    (0, n.jsx)(t.Text, {
                                        variant: 'text-md/medium',
                                        children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: _.infoRow,
                                children: [
                                    (0, n.jsx)(t.EnvelopeIcon, {}),
                                    (0, n.jsx)(t.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: _.buttonGroup,
                        children: [
                            (0, n.jsx)(t.Button, {
                                type: 'submit',
                                color: t.Button.Colors.BRAND,
                                size: t.Button.Sizes.MEDIUM,
                                onClick: () => {
                                    h(), r.Z.closePrivateChannel(a, !0, !0);
                                },
                                children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE
                            }),
                            (0, n.jsx)(t.Button, {
                                color: t.Button.Colors.PRIMARY,
                                onClick: h,
                                children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

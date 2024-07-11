a.r(s), a.d(s, {
    default: function () {
        return _;
    }
});
var n = a(735250);
a(470079);
var t = a(481060), r = a(493683), o = a(594174), i = a(799352), c = a(689938), d = a(251846), l = a(444812);
function _(e) {
    var s;
    let {
            channelId: a,
            blockedUserIds: _,
            transitionState: E,
            onClose: u
        } = e, N = _.map(e => o.default.getUser(e)), h = () => {
            u(), (0, i.O)(a);
        }, m = N.length > 1;
    return (0, n.jsxs)(t.ModalRoot, {
        transitionState: E,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: d.headerImage,
                src: l
            }),
            (0, n.jsx)(t.ModalHeader, {
                separator: !1,
                className: d.header,
                children: (0, n.jsxs)(t.Heading, {
                    variant: 'heading-lg/bold',
                    className: d.title,
                    children: [
                        m ? c.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER : c.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER,
                        (0, n.jsx)('br', {}),
                        c.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP
                    ]
                })
            }),
            (0, n.jsxs)(t.ModalContent, {
                className: d.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: d.infoGroup,
                        children: [
                            (0, n.jsx)('div', {
                                className: d.infoRow,
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
                                className: d.infoRow,
                                children: [
                                    (0, n.jsx)(t.BellSlashIcon, {}),
                                    (0, n.jsx)(t.Text, {
                                        variant: 'text-md/medium',
                                        children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: d.infoRow,
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
                        className: d.buttonGroup,
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

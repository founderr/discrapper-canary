n.d(t, {
    m: function () {
        return Z;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(442837), o = n(481060), c = n(239091), d = n(749210), u = n(134432), h = n(769654), p = n(601964), m = n(430824), _ = n(940627), f = n(346656), E = n(806519), C = n(404975), g = n(768581), I = n(683818), x = n(16853), T = n(981631), v = n(689938), N = n(979768), S = n(883760);
let Z = e => {
    let {onClick: t} = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: N.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: S
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: N.addServerText,
                children: v.Z.Messages.HUB_ADD_SERVER_CTA
            })
        ]
    });
};
function A(e) {
    let {entry: t} = e, [s, r] = a.useState(!1), {canEdit: c} = (0, I.Z)(t);
    return (0, i.jsx)('div', {
        className: l()(N.actionButtonsContainer, { [N.forceButtonsShow]: s }),
        children: (0, i.jsxs)(C.ZP, {
            children: [
                c ? (0, i.jsx)(o.Tooltip, {
                    text: v.Z.Messages.HUB_ENTRY_UPDATE,
                    hideOnClick: !0,
                    children: e => {
                        let {
                            onClick: a,
                            ...s
                        } = e;
                        return (0, i.jsx)(C.zx, {
                            ...s,
                            onClick: () => {
                                null == a || a(), (0, o.openModalLazy)(async () => {
                                    let {default: e} = await n.e('34191').then(n.bind(n, 303647));
                                    return n => (0, i.jsx)(e, {
                                        ...n,
                                        entry: t
                                    });
                                });
                            },
                            'aria-label': v.Z.Messages.HUB_ENTRY_UPDATE,
                            children: (0, i.jsx)(o.PencilIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: N.overflowIcon
                            })
                        });
                    }
                }) : null,
                (0, i.jsx)(x.Z, {
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsx)(o.Tooltip, {
                            text: v.Z.Messages.MORE,
                            hideOnClick: !0,
                            children: e => {
                                let {
                                    onClick: a,
                                    ...s
                                } = e;
                                return (0, i.jsx)(C.zx, {
                                    ...n,
                                    ...s,
                                    onClick: e => {
                                        null == a || a(), t(e);
                                    },
                                    'aria-label': v.Z.Messages.MORE,
                                    children: (0, i.jsx)(o.MoreHorizontalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: N.overflowIcon
                                    })
                                });
                            }
                        });
                    }
                })
            ]
        })
    });
}
t.Z = e => {
    var t;
    let {entry: s} = e, [l, C] = a.useState(!1), I = null != (0, r.e7)([m.Z], () => m.Z.getGuild(s.guildId)), x = async () => {
            C(!0);
            try {
                I ? (0, h.X)(s.guildId) : await d.Z.joinGuild(s.guildId, { source: T.vtS.DIRECTORY_ENTRY });
            } finally {
                C(!1);
            }
        }, S = g.ZP.getGuildSplashURL({
            id: s.guildId,
            splash: s.splash,
            size: 300 * (0, u.x_)()
        }), Z = null !== (t = g.ZP.getGuildIconURL({
            id: s.guildId,
            icon: s.icon,
            size: 40
        })) && void 0 !== t ? t : void 0, M = v.Z.Messages.JOIN;
    return I && (M = v.Z.Messages.HUB_DIRECTORY_CARD_JOINED_GUILD_BUTTON), (0, i.jsxs)('div', {
        className: N.card,
        onContextMenu: e => {
            (0, c.jW)(e, async () => {
                let {default: e} = await Promise.resolve().then(n.bind(n, 643560));
                return t => (0, i.jsx)(e, {
                    ...t,
                    entry: s
                });
            });
        },
        children: [
            (0, i.jsxs)('div', {
                className: N.cardHeader,
                children: [
                    (0, i.jsx)('div', {
                        className: N.splash,
                        children: null != S && (0, i.jsx)('img', {
                            src: S,
                            alt: '',
                            className: N.splashImage
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: N.guildIcon,
                        children: (0, i.jsx)(E.ZP, {
                            mask: E.ZP.Masks.SQUIRCLE,
                            width: 48,
                            height: 48,
                            children: (0, i.jsx)('div', {
                                className: N.iconMask,
                                children: (0, i.jsx)(f.Z, {
                                    className: N.icon,
                                    iconSrc: Z,
                                    guild: new p.ZP(s),
                                    size: f.Z.Sizes.MEDIUM,
                                    active: !0
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: N.guildInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: N.title,
                        children: [
                            (0, i.jsx)(_.Z, {
                                className: N.guildBadge,
                                guild: s,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(o.Text, {
                                className: N.guildName,
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: s.name
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        className: N.description,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: s.description
                    }),
                    (0, i.jsxs)('div', {
                        className: N.memberInfo,
                        children: [
                            null != s.approximatePresenceCount && (0, i.jsxs)('div', {
                                className: N.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: N.dotOnline }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: v.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: s.approximatePresenceCount })
                                    })
                                ]
                            }),
                            null != s.approximateMemberCount && (0, i.jsxs)('div', {
                                className: N.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: N.dotOffline }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: v.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: s.approximateMemberCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Button, {
                        submitting: l,
                        className: N.joinButton,
                        color: I ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                        onClick: x,
                        children: M
                    })
                ]
            }),
            (0, i.jsx)(A, { entry: s })
        ]
    });
};

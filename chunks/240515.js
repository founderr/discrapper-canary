n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(990547),
    s = n(481060),
    o = n(194359),
    l = n(138201),
    u = n(626135),
    c = n(63063),
    d = n(5192),
    f = n(478923),
    _ = n(858380),
    p = n(981631),
    h = n(388032),
    m = n(294794);
function g() {
    return (0, r.jsxs)('div', {
        className: m.row,
        children: [
            (0, r.jsx)(l.Z, {
                title: h.intl.string(h.t.ruhGkp),
                description: h.intl.string(h.t['/FWKKC']),
                icon: s.CircleCheckIcon
            }),
            (0, r.jsx)(l.Z, {
                title: h.intl.string(h.t.N9v3en),
                description: h.intl.string(h.t.ddpuJi),
                icon: s.CircleCheckIcon
            }),
            (0, r.jsx)(l.Z, {
                title: h.intl.string(h.t['4ycGEx']),
                description: h.intl.string(h.t['5yfN+v']),
                icon: s.CircleInformationIcon
            })
        ]
    });
}
function E(e) {
    let { user: t, guildId: n, channelId: E, onIgnore: v, onBlock: I, location: T = 'ContextMenu', ...b } = e;
    return (
        i.useLayoutEffect(
            () => () => {
                u.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                    action: _.l.DISMISS_IGNORE,
                    location: T
                });
            },
            [T]
        ),
        (0, r.jsx)(s.ConfirmModal, {
            confirmText: h.intl.string(h.t.ytCpKi),
            cancelText: h.intl.string(h.t['ETE/oK']),
            onConfirm: () => {
                null == v || v(), o.Z.ignoreUser(t.id, T, null != E ? E : void 0), u.default.track(p.rMx.IGNORE_USER_CONFIRMED);
            },
            onCancel: () => {
                u.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                    action: _.l.CANCEL_IGNORE,
                    location: T
                });
            },
            impression: { impressionName: a.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: s.Button.Colors.BRAND,
            ...b,
            children: (0, r.jsxs)('div', {
                className: m.container,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.confirmationHeader,
                        children: [
                            (0, r.jsxs)('div', {
                                className: m.iconContainer,
                                children: [
                                    (0, r.jsx)(s.Avatar, {
                                        size: s.AvatarSizes.SIZE_56,
                                        src: t.getAvatarURL(void 0, 64),
                                        'aria-hidden': !0
                                    }),
                                    (0, r.jsx)('div', {
                                        className: m.icon,
                                        children: (0, r.jsx)(s.EyeSlashIcon, {})
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'header-primary',
                                        children: h.intl.format(h.t['WrQD/f'], { username: d.ZP.getName(n, E, t) })
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-secondary',
                                        children: h.intl.string(h.t.JKL1u7)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(g, {}),
                    (0, r.jsxs)('div', {
                        className: m.otherOptions,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-secondary',
                                children: h.intl.string(h.t['1v01go'])
                            }),
                            (0, r.jsx)('div', {
                                className: m.row,
                                children: (0, r.jsx)(l.Z, {
                                    title: h.intl.string(h.t.bwxY39),
                                    description: h.intl.string(h.t.NTnf1d),
                                    titleVariant: 'text-md/medium',
                                    descriptionVariant: 'text-xs/medium',
                                    buttonText: h.intl.string(h.t.QdfUHB),
                                    buttonColor: s.ButtonColors.PRIMARY,
                                    onButtonPress: () => {
                                        u.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                                            action: _.l.GOTO_BLOCK,
                                            location: T
                                        }),
                                            (0, s.closeAllModals)(),
                                            (0, s.openModal)((e) =>
                                                (0, r.jsx)(f.Z, {
                                                    ...e,
                                                    user: t,
                                                    guildId: n,
                                                    channelId: E,
                                                    onBlock: I,
                                                    onIgnore: v,
                                                    location: T
                                                })
                                            );
                                    }
                                })
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                className: m.featureGuide,
                                children: h.intl.format(h.t.Hjvqr6, { articleLink: c.Z.getArticleURL(p.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                            })
                        ]
                    })
                ]
            })
        })
    );
}

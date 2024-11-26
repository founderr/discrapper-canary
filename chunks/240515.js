n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(990547),
    a = n(481060),
    s = n(194359),
    o = n(138201),
    l = n(626135),
    u = n(63063),
    c = n(5192),
    d = n(478923),
    f = n(981631),
    _ = n(388032),
    p = n(294794);
function h() {
    return (0, r.jsxs)('div', {
        className: p.row,
        children: [
            (0, r.jsx)(o.Z, {
                title: _.intl.string(_.t.ruhGkp),
                description: _.intl.string(_.t['/FWKKC']),
                icon: a.CircleCheckIcon
            }),
            (0, r.jsx)(o.Z, {
                title: _.intl.string(_.t.N9v3en),
                description: _.intl.string(_.t.ddpuJi),
                icon: a.CircleCheckIcon
            }),
            (0, r.jsx)(o.Z, {
                title: _.intl.string(_.t['4ycGEx']),
                description: _.intl.string(_.t['5yfN+v']),
                icon: a.CircleInformationIcon
            })
        ]
    });
}
function m(e) {
    let { user: t, guildId: n, channelId: m, onIgnore: g, onBlock: E, location: v = 'ContextMenu', ...I } = e;
    return (0, r.jsx)(a.ConfirmModal, {
        confirmText: _.intl.string(_.t.ytCpKi),
        cancelText: _.intl.string(_.t['ETE/oK']),
        onConfirm: () => {
            null == g || g(), s.Z.ignoreUser(t.id, v, null != m ? m : void 0), l.default.track(f.rMx.IGNORE_USER_CONFIRMED);
        },
        impression: { impressionName: i.ImpressionNames.IGNORE_USER_CONFIRMATION },
        confirmButtonColor: a.Button.Colors.BRAND,
        ...I,
        children: (0, r.jsxs)('div', {
            className: p.container,
            children: [
                (0, r.jsxs)('div', {
                    className: p.confirmationHeader,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.iconContainer,
                            children: [
                                (0, r.jsx)(a.Avatar, {
                                    size: a.AvatarSizes.SIZE_56,
                                    src: t.getAvatarURL(void 0, 64),
                                    'aria-hidden': !0
                                }),
                                (0, r.jsx)('div', {
                                    className: p.icon,
                                    children: (0, r.jsx)(a.EyeSlashIcon, { size: 'sm' })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: _.intl.format(_.t['WrQD/f'], { username: c.ZP.getName(n, m, t) })
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    children: _.intl.string(_.t.JKL1u7)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(h, {}),
                (0, r.jsxs)('div', {
                    className: p.otherOptions,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-secondary',
                            children: _.intl.string(_.t['1v01go'])
                        }),
                        (0, r.jsx)('div', {
                            className: p.row,
                            children: (0, r.jsx)(o.Z, {
                                title: _.intl.string(_.t.bwxY39),
                                description: _.intl.string(_.t.NTnf1d),
                                titleVariant: 'text-md/medium',
                                descriptionVariant: 'text-xs/medium',
                                buttonText: _.intl.string(_.t.QdfUHB),
                                buttonColor: a.ButtonColors.PRIMARY,
                                onButtonPress: () => {
                                    (0, a.closeAllModals)(),
                                        (0, a.openModal)((e) =>
                                            (0, r.jsx)(d.Z, {
                                                ...e,
                                                user: t,
                                                guildId: n,
                                                channelId: m,
                                                onBlock: E,
                                                onIgnore: g,
                                                location: v
                                            })
                                        );
                                }
                            })
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            className: p.featureGuide,
                            children: _.intl.format(_.t.Hjvqr6, { articleLink: u.Z.getArticleURL(f.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                        })
                    ]
                })
            ]
        })
    });
}

n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(990547),
    a = n(481060),
    s = n(194359),
    o = n(138201),
    l = n(626135),
    u = n(5192),
    c = n(478923),
    d = n(981631),
    f = n(388032),
    _ = n(336565);
function p() {
    return (0, r.jsxs)('div', {
        className: _.row,
        children: [
            (0, r.jsx)(o.Z, {
                title: f.intl.string(f.t.ruhGkp),
                description: f.intl.string(f.t['/FWKKC']),
                icon: a.CircleCheckIcon
            }),
            (0, r.jsx)(o.Z, {
                title: f.intl.string(f.t.N9v3en),
                description: f.intl.string(f.t.ddpuJi),
                icon: a.CircleCheckIcon
            }),
            (0, r.jsx)(o.Z, {
                title: f.intl.string(f.t['4ycGEx']),
                description: f.intl.string(f.t['5yfN+v']),
                icon: a.CircleInformationIcon
            })
        ]
    });
}
function h(e) {
    let { user: t, guildId: n, channelId: h, onIgnore: m, onBlock: g, location: E = 'ContextMenu', ...v } = e;
    return (0, r.jsx)(a.ConfirmModal, {
        confirmText: f.intl.string(f.t.ytCpKi),
        cancelText: f.intl.string(f.t['ETE/oK']),
        onConfirm: () => {
            null == m || m(), s.Z.ignoreUser(t.id, E), l.default.track(d.rMx.IGNORE_USER_CONFIRMED);
        },
        impression: { impressionName: i.ImpressionNames.IGNORE_USER_CONFIRMATION },
        confirmButtonColor: a.Button.Colors.BRAND,
        ...v,
        children: (0, r.jsxs)('div', {
            className: _.container,
            children: [
                (0, r.jsxs)('div', {
                    className: _.confirmationHeader,
                    children: [
                        (0, r.jsxs)('div', {
                            className: _.iconContainer,
                            children: [
                                (0, r.jsx)(a.Avatar, {
                                    size: a.AvatarSizes.SIZE_56,
                                    src: t.getAvatarURL(void 0, 64),
                                    'aria-hidden': !0
                                }),
                                (0, r.jsx)('div', {
                                    className: _.icon,
                                    children: (0, r.jsx)(a.EyeSlashIcon, { size: 'sm' })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: f.intl.format(f.t['WrQD/f'], { username: u.ZP.getName(n, h, t) })
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    children: f.intl.string(f.t.JKL1u7)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(p, {}),
                (0, r.jsxs)('div', {
                    className: _.otherOptions,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-secondary',
                            children: f.intl.string(f.t['1v01go'])
                        }),
                        (0, r.jsx)('div', {
                            className: _.row,
                            children: (0, r.jsx)(o.Z, {
                                title: f.intl.string(f.t.bwxY39),
                                description: f.intl.string(f.t.NTnf1d),
                                titleVariant: 'text-md/medium',
                                descriptionVariant: 'text-xs/medium',
                                buttonText: f.intl.string(f.t.QdfUHB),
                                buttonColor: a.ButtonColors.PRIMARY,
                                onButtonPress: () => {
                                    (0, a.closeAllModals)(),
                                        (0, a.openModal)((e) =>
                                            (0, r.jsx)(c.Z, {
                                                ...e,
                                                user: t,
                                                guildId: n,
                                                channelId: h,
                                                onBlock: g,
                                                onIgnore: m,
                                                location: E
                                            })
                                        );
                                }
                            })
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            className: _.featureGuide,
                            children: f.intl.format(f.t.HRppnJ, { articleLink: '' })
                        })
                    ]
                })
            ]
        })
    });
}

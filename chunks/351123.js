n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(493683),
    u = n(787014),
    h = n(741361),
    m = n(911969),
    g = n(385499),
    p = n(134433),
    x = n(600164),
    f = n(156699),
    v = n(693196),
    j = n(434404),
    C = n(200498),
    b = n(146085),
    T = n(192079),
    N = n(277053),
    S = n(271383),
    Z = n(430824),
    E = n(496675),
    y = n(594174),
    I = n(903386),
    R = n(700785),
    w = n(605436),
    L = n(27544),
    _ = n(415236),
    A = n(182905),
    M = n(71080),
    D = n(981631),
    B = n(231338),
    P = n(388032),
    k = n(94255);
function O(e) {
    let { channel: t, roles: n, members: l, disabledReason: s, getRemoveTooltipHint: a } = e;
    return (0, i.jsx)(o.List, {
        className: k.roleMemberList,
        sections: [n.length, l.length],
        renderRow: function (e) {
            let u,
                f,
                v,
                { section: j, row: b } = e,
                T = !1;
            switch (j) {
                case M.m$.ROLES:
                    var N;
                    (v =
                        (f = n[b]).rowType === M.aC.ROLE && (null === (N = f.tags) || void 0 === N ? void 0 : N.guild_connections) === null
                            ? (0, i.jsx)(p.Z, {
                                  className: k.shield,
                                  color: f.colorString,
                                  size: 20
                              })
                            : (0, i.jsx)(o.ShieldUserIcon, {
                                  size: 'custom',
                                  className: k.shield,
                                  color: f.colorString,
                                  height: 20
                              })),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: k.rowHeight,
                                    children: v
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: k.rowLabel,
                                    color: f.disabled ? 'text-muted' : 'text-normal',
                                    children: f.name
                                })
                            ]
                        })),
                        (T = f.disabled);
                    break;
                case M.m$.MEMBERS:
                    (f = l[b]),
                        (u = (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Avatar, {
                                    src: f.avatarURL,
                                    size: o.AvatarSizes.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: k.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: f.name
                                }),
                                f.bot &&
                                    (0, i.jsx)(g.Z, {
                                        verified: f.verifiedBot,
                                        className: k.rowBotTag
                                    }),
                                null != f.nickname &&
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: k.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: f.username
                                    })
                            ]
                        })),
                        (T = f.disabled);
                    break;
                default:
                    f = null;
            }
            if (null == f) return null;
            let S = !T && null == s && null != f.id;
            return (0, i.jsxs)(
                x.Z,
                {
                    justify: x.Z.Justify.BETWEEN,
                    align: x.Z.Align.CENTER,
                    className: k.memberRow,
                    children: [
                        (0, i.jsx)(x.Z, {
                            justify: x.Z.Justify.START,
                            align: x.Z.Align.CENTER,
                            className: k.__invalid_memberRowBody,
                            children: u
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: w.zB(f.rowType)
                        }),
                        f.rowType !== M.aC.EMPTY_STATE &&
                            (0, i.jsx)(o.TooltipContainer, {
                                className: k.removeIconContainer,
                                text: null != s ? s : a(f.rowType, f.disabled),
                                children: (0, i.jsx)(o.Clickable, {
                                    onClick: () => {
                                        var e, n, i;
                                        return (
                                            S &&
                                            null != f &&
                                            ((e = f.id),
                                            (n = f.name),
                                            (i = f.rowType),
                                            void c.Z.show({
                                                title: P.intl.string(P.t.GuPYQE),
                                                body: P.intl.format(P.t.xERCnZ, { name: n }),
                                                cancelText: P.intl.string(P.t['ETE/oK']),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let i = (0, C._L)(e, n === M.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                                                            (0, C.Os)(i) ? d.Z.clearPermissionOverwrite(t.id, i.id) : (0, h.hw)(t.id, [i]);
                                                        } else d.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, i)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !S,
                                    'aria-label': P.intl.string(P.t.N86XcH),
                                    children: (0, i.jsx)(o.CircleXIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: r()(k.removeIcon, { [k.disabledRemoveIcon]: T || s })
                                    })
                                })
                            })
                    ]
                },
                f.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case M.m$.ROLES:
                    return (0, i.jsx)(H, { title: P.intl.string(P.t.LPJmLy) }, 'roles-title');
                case M.m$.MEMBERS:
                    return (0, i.jsx)(H, { title: P.intl.string(P.t['9Oq93t']) }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function F(e) {
    let { guild: t, channel: l, permissionUpdates: s } = e,
        c = (0, a.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
        d = w.RZ(t, c, l, b.yP, s),
        u = (0, a.e7)([S.ZP], () => w.cR(S.ZP.getMemberIds(t.id), l, t, b.yP, s)),
        h = (0, C.nG)(l.id);
    function m() {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e('82961').then(n.bind(n, 388131));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    channelId: l.id
                });
        });
    }
    return (0, i.jsxs)('div', {
        className: r()(k.settingCard, k.active),
        children: [
            (0, i.jsx)(_.Z, {
                label: P.intl.string(P.t.StpcFR),
                description: P.intl.string(P.t.f7VbhI),
                icon: (0, i.jsx)(o.StageIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: k.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, i.jsxs)('div', {
                className: k.cardFolder,
                children: [
                    (0, i.jsxs)(x.Z, {
                        justify: x.Z.Justify.BETWEEN,
                        align: x.Z.Align.CENTER,
                        className: k.folderHeader,
                        children: [
                            (0, i.jsx)(o.FormTitle, {
                                tag: 'h5',
                                className: k.folderTitle,
                                children: P.intl.string(P.t['7BWDRU'])
                            }),
                            (0, i.jsx)(o.Tooltip, {
                                text: P.intl.string(P.t.arRuER),
                                shouldShow: !h,
                                children: (e) =>
                                    (0, i.jsx)(o.Button, {
                                        ...e,
                                        size: o.Button.Sizes.SMALL,
                                        color: o.Button.Colors.BRAND,
                                        onClick: m,
                                        disabled: !h,
                                        children: P.intl.string(P.t.dMJ3Y2)
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(O, {
                        channel: l,
                        roles: d,
                        members: u,
                        disabledReason: h ? null : P.intl.string(P.t.arRuER),
                        getRemoveTooltipHint: T.kk
                    })
                ]
            })
        ]
    });
}
function G(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: s, roles: c, members: d } = e,
        u = (0, a.e7)([E.Z], () => E.Z.can(B.Pl.ADMINISTRATOR, t)),
        h = R.Uu(B.Pl.VIEW_CHANNEL, t),
        m = R.Uu(B.Pl.ADMINISTRATOR, t);
    async function g() {
        let e = l.accessPermissions,
            r = y.default.getCurrentUser();
        if (!s && null != (await (0, v.T)(t.id, l.id))) {
            (0, o.openModalLazy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        confirmButtonColor: o.ButtonColors.BRAND,
                        header: P.intl.string(P.t.ZzdgUl),
                        confirmText: P.intl.string(P.t.BddRzc),
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: P.intl.format(P.t.DwY2vL, {
                                onClick: () => {
                                    j.Z.open(t.id, D.pNK.ONBOARDING), n.onClose();
                                }
                            })
                        })
                    });
            });
            return;
        }
        w.$e(l, e, s), !s && null != r && !u && w.Yh(l, e);
    }
    let p = {
        title: P.intl.string(P.t.aUI70t),
        subtitle: P.intl.string(P.t.hfbjIC),
        formLabel: P.intl.string(P.t.P6eCbG)
    };
    return (
        l.isCategory() ? ((p.title = P.intl.string(P.t.lEPAZ2)), (p.subtitle = P.intl.string(P.t['RQUk6+'])), (p.formLabel = P.intl.string(P.t['8VIxJi']))) : l.type === D.d4z.GUILD_VOICE && (p.subtitle = P.intl.string(P.t.cLjvKi)),
        (0, i.jsxs)('div', {
            className: r()(k.settingCard, { [k.active]: s }),
            children: [
                (0, i.jsx)(_.Z, {
                    description: p.subtitle,
                    icon: (0, i.jsx)(o.LockIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: k.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: p.title,
                    onChange: g,
                    value: s
                }),
                (0, i.jsxs)('div', {
                    className: k.cardFolder,
                    children: [
                        m &&
                            (0, i.jsx)('div', {
                                className: k.adminWarning,
                                children: (0, i.jsx)(o.HelpMessage, {
                                    messageType: o.HelpMessageTypes.WARNING,
                                    children: P.intl.string(P.t['5f3HIC'])
                                })
                            }),
                        !h &&
                            !m &&
                            !s &&
                            (0, i.jsx)('div', {
                                className: k.adminWarning,
                                children: (0, i.jsx)(o.HelpMessage, {
                                    messageType: o.HelpMessageTypes.WARNING,
                                    children: P.intl.string(P.t.ZAk4Q0)
                                })
                            }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(x.Z, {
                                        justify: x.Z.Justify.BETWEEN,
                                        align: x.Z.Align.CENTER,
                                        className: k.folderHeader,
                                        children: [
                                            (0, i.jsx)(o.FormTitle, {
                                                tag: 'h5',
                                                className: k.folderTitle,
                                                children: p.formLabel
                                            }),
                                            (0, i.jsx)(o.Button, {
                                                size: o.Button.Sizes.SMALL,
                                                color: o.Button.Colors.BRAND,
                                                onClick: function () {
                                                    (0, o.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(n.bind(n, 185413));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelId: l.id,
                                                                inSettings: !0
                                                            });
                                                    });
                                                },
                                                children: P.intl.string(P.t.dMJ3Y2)
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(O, {
                                        channel: l,
                                        roles: c,
                                        members: d,
                                        getRemoveTooltipHint: w.yv
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function H(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.FormDivider, { className: k.divider }),
            (0, i.jsx)(o.FormTitle, {
                className: r()(k.folderTitle, k.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
t.Z = a.ZP.connectStores([N.Z, E.Z, S.ZP, Z.Z], () => {
    let e;
    let t = N.Z.channel,
        n = N.Z.category,
        i = [],
        l = [],
        s = {},
        r = !1;
    if (null != t) {
        e = Z.Z.getGuild(t.getGuildId());
        let n = S.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = Z.Z.getRoles(e.id);
            (s = N.Z.editedPermissionIds.reduce((e, t) => {
                let n = N.Z.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (i = w.kA(e, a, t, t.accessPermissions, s)),
                (l = w.cR(n, t, e, t.accessPermissions, s)),
                (r = w.Yk(t, s));
        }
    }
    return {
        canSyncChannel: null != n && E.Z.can(B.Pl.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: l,
        filteredRoles: i,
        guild: e,
        isPrivateGuildChannel: r,
        locked: N.Z.locked,
        permissionUpdates: s
    };
})(function (e) {
    let { canSyncChannel: t, category: s, channel: r, filteredMembers: a, filteredRoles: c, guild: d, isPrivateGuildChannel: h, locked: m, permissionUpdates: g } = e,
        [p, x] = l.useState(!R.Uu(B.Pl.SEND_MESSAGES, r));
    if (null == r || null == d) return null;
    function v() {
        w.$e(r, B.Pl.SEND_MESSAGES, p), x(!p);
    }
    function j() {
        if (null != s)
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 170509));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channel: r,
                        category: s,
                        onConfirm: async () => {
                            let { guild_id: e } = s,
                                t = { ...s.permissionOverwrites };
                            null != e && null == t[e] && (t[e] = R.we(e)), (await (0, f.u)(r, t[e].deny, t[e].allow)) && (0, u.wk)(r.id, { permissionOverwrites: Object.values(t) });
                        }
                    });
            });
    }
    let C = {
        title: P.intl.string(P.t.BAZMBg),
        subtitle: P.intl.string(P.t.XLrZys)
    };
    return (
        r.isCategory() && ((C.title = P.intl.string(P.t['/uELTk'])), (C.subtitle = P.intl.string(P.t['8iAg3d']))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.FormTitle, {
                    tag: 'h1',
                    children: C.title
                }),
                (0, i.jsx)(o.FormText, { children: C.subtitle }),
                null != s && t
                    ? m
                        ? (0, i.jsx)(A.Z, {
                              canSync: !1,
                              icon: o.RefreshIcon,
                              noticeText: P.intl.format(P.t.ETJqLi, { categoryName: s.name })
                          })
                        : (0, i.jsx)(A.Z, {
                              buttonText: P.intl.string(P.t.NVwuHh),
                              canSync: !0,
                              icon: (0, o.makeIconCompat)(I.Z),
                              noticeText: P.intl.format(P.t.OIhm0N, { categoryName: s.name }),
                              onClick: j
                          })
                    : null,
                r.isGuildStageVoice()
                    ? (0, i.jsx)(F, {
                          guild: d,
                          channel: r,
                          permissionUpdates: g
                      })
                    : null,
                (0, i.jsx)(G, {
                    channel: r,
                    guild: d,
                    isPrivateGuildChannel: h,
                    roles: c,
                    members: a
                }),
                !1,
                (0, i.jsx)(L.Z, {})
            ]
        })
    );
});

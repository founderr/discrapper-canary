s(47120), s(724458);
var n = s(200651),
    l = s(192379),
    i = s(120356),
    a = s.n(i),
    r = s(442837),
    o = s(481060),
    c = s(668781),
    d = s(493683),
    u = s(787014),
    h = s(741361),
    m = s(911969),
    g = s(385499),
    E = s(134433),
    T = s(600164),
    p = s(156699),
    N = s(693196),
    _ = s(434404),
    S = s(200498),
    x = s(146085),
    f = s(192079),
    C = s(277053),
    M = s(271383),
    I = s(430824),
    R = s(496675),
    Z = s(594174),
    v = s(903386),
    A = s(700785),
    O = s(605436),
    L = s(27544),
    j = s(415236),
    b = s(182905),
    D = s(71080),
    y = s(981631),
    w = s(231338),
    P = s(689938),
    F = s(94255);
function B(e) {
    let { channel: t, roles: s, members: l, disabledReason: i, getRemoveTooltipHint: r } = e;
    return (0, n.jsx)(o.List, {
        className: F.roleMemberList,
        sections: [s.length, l.length],
        renderRow: function (e) {
            let u,
                p,
                N,
                { section: _, row: x } = e,
                f = !1;
            switch (_) {
                case D.m$.ROLES:
                    var C;
                    (N =
                        (p = s[x]).rowType === D.aC.ROLE && (null === (C = p.tags) || void 0 === C ? void 0 : C.guild_connections) === null
                            ? (0, n.jsx)(E.Z, {
                                  className: F.shield,
                                  color: p.colorString,
                                  size: 20
                              })
                            : (0, n.jsx)(o.ShieldUserIcon, {
                                  size: 'custom',
                                  className: F.shield,
                                  color: p.colorString,
                                  height: 20
                              })),
                        (u = (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)('div', {
                                    className: F.rowHeight,
                                    children: N
                                }),
                                (0, n.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    className: F.rowLabel,
                                    color: p.disabled ? 'text-muted' : 'text-normal',
                                    children: p.name
                                })
                            ]
                        })),
                        (f = p.disabled);
                    break;
                case D.m$.MEMBERS:
                    (p = l[x]),
                        (u = (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(o.Avatar, {
                                    src: p.avatarURL,
                                    size: o.AvatarSizes.SIZE_24,
                                    'aria-hidden': !0
                                }),
                                (0, n.jsx)(o.Text, {
                                    className: F.rowLabel,
                                    variant: 'text-sm/normal',
                                    children: p.name
                                }),
                                p.bot &&
                                    (0, n.jsx)(g.Z, {
                                        verified: p.verifiedBot,
                                        className: F.rowBotTag
                                    }),
                                null != p.nickname &&
                                    (0, n.jsx)(o.Text, {
                                        color: 'text-muted',
                                        className: F.rowLabelSubText,
                                        variant: 'text-sm/normal',
                                        children: p.username
                                    })
                            ]
                        })),
                        (f = p.disabled);
                    break;
                default:
                    p = null;
            }
            if (null == p) return null;
            let M = !f && null == i && null != p.id;
            return (0, n.jsxs)(
                T.Z,
                {
                    justify: T.Z.Justify.BETWEEN,
                    align: T.Z.Align.CENTER,
                    className: F.memberRow,
                    children: [
                        (0, n.jsx)(T.Z, {
                            justify: T.Z.Justify.START,
                            align: T.Z.Align.CENTER,
                            className: F.__invalid_memberRowBody,
                            children: u
                        }),
                        (0, n.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: O.zB(p.rowType)
                        }),
                        p.rowType !== D.aC.EMPTY_STATE &&
                            (0, n.jsx)(o.TooltipContainer, {
                                className: F.removeIconContainer,
                                text: null != i ? i : r(p.rowType, p.disabled),
                                children: (0, n.jsx)(o.Clickable, {
                                    onClick: () => {
                                        var e, s, n;
                                        return (
                                            M &&
                                            null != p &&
                                            ((e = p.id),
                                            (s = p.name),
                                            (n = p.rowType),
                                            void c.Z.show({
                                                title: P.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                                                body: P.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({ name: s }),
                                                cancelText: P.Z.Messages.CANCEL,
                                                onConfirm: () =>
                                                    (function (e, s) {
                                                        if (t.isGuildStageVoice()) {
                                                            let n = (0, S._L)(e, s === D.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                                                            (0, S.Os)(n) ? d.Z.clearPermissionOverwrite(t.id, n.id) : (0, h.hw)(t.id, [n]);
                                                        } else d.Z.clearPermissionOverwrite(t.id, e);
                                                    })(e, n)
                                            }))
                                        );
                                    },
                                    'aria-disabled': !M,
                                    'aria-label': P.Z.Messages.REMOVE,
                                    children: (0, n.jsx)(o.CircleXIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(F.removeIcon, { [F.disabledRemoveIcon]: f || i })
                                    })
                                })
                            })
                    ]
                },
                p.id
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case D.m$.ROLES:
                    return (0, n.jsx)(G, { title: P.Z.Messages.ROLES }, 'roles-title');
                case D.m$.MEMBERS:
                    return (0, n.jsx)(G, { title: P.Z.Messages.MEMBERS }, 'members-title');
            }
        },
        sectionHeight: 49
    });
}
function H(e) {
    let { guild: t, channel: l, permissionUpdates: i } = e,
        c = (0, r.e7)([I.Z], () => I.Z.getRoles(t.id)),
        d = O.RZ(t, c, l, x.yP, i),
        u = (0, r.e7)([M.ZP], () => O.cR(M.ZP.getMemberIds(t.id), l, t, x.yP, i)),
        h = (0, S.nG)(l.id);
    function m() {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await s.e('82961').then(s.bind(s, 388131));
            return (t) =>
                (0, n.jsx)(e, {
                    ...t,
                    channelId: l.id
                });
        });
    }
    return (0, n.jsxs)('div', {
        className: a()(F.settingCard, F.active),
        children: [
            (0, n.jsx)(j.Z, {
                label: P.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
                description: P.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
                icon: (0, n.jsx)(o.StageIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: F.cardIcon,
                    height: 20,
                    width: 20
                }),
                id: 'StageModeratorSettingCard'
            }),
            (0, n.jsxs)('div', {
                className: F.cardFolder,
                children: [
                    (0, n.jsxs)(T.Z, {
                        justify: T.Z.Justify.BETWEEN,
                        align: T.Z.Align.CENTER,
                        className: F.folderHeader,
                        children: [
                            (0, n.jsx)(o.FormTitle, {
                                tag: 'h5',
                                className: F.folderTitle,
                                children: P.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
                            }),
                            (0, n.jsx)(o.Tooltip, {
                                text: P.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                                shouldShow: !h,
                                children: (e) =>
                                    (0, n.jsx)(o.Button, {
                                        ...e,
                                        size: o.Button.Sizes.SMALL,
                                        color: o.Button.Colors.BRAND,
                                        onClick: m,
                                        disabled: !h,
                                        children: P.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                    })
                            })
                        ]
                    }),
                    (0, n.jsx)(B, {
                        channel: l,
                        roles: d,
                        members: u,
                        disabledReason: h ? null : P.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                        getRemoveTooltipHint: f.kk
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { guild: t, channel: l, isPrivateGuildChannel: i, roles: c, members: d } = e,
        u = (0, r.e7)([R.Z], () => R.Z.can(w.Pl.ADMINISTRATOR, t)),
        h = A.Uu(w.Pl.VIEW_CHANNEL, t),
        m = A.Uu(w.Pl.ADMINISTRATOR, t);
    async function g() {
        let e = l.accessPermissions,
            a = Z.default.getCurrentUser();
        if (!i && null != (await (0, N.T)(t.id, l.id))) {
            (0, o.openModalLazy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(s.bind(s, 878678));
                return (s) =>
                    (0, n.jsx)(e, {
                        ...s,
                        confirmButtonColor: o.ButtonColors.BRAND,
                        header: P.Z.Messages.CANNOT_PRIVATIZE_CHANNEL,
                        confirmText: P.Z.Messages.OKAY,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: P.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING_PRIVATE.format({
                                onClick: () => {
                                    _.Z.open(t.id, y.pNK.ONBOARDING), s.onClose();
                                }
                            })
                        })
                    });
            });
            return;
        }
        O.$e(l, e, i), !i && null != a && !u && O.Yh(l, e);
    }
    let E = {
        title: P.Z.Messages.PRIVATE_CHANNEL,
        subtitle: P.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
        formLabel: P.Z.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
    };
    return (
        l.isCategory() ? ((E.title = P.Z.Messages.PRIVATE_CATEGORY), (E.subtitle = P.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION), (E.formLabel = P.Z.Messages.FORM_LABEL_CATEGORY_PERMISSIONS)) : l.type === y.d4z.GUILD_VOICE && (E.subtitle = P.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE),
        (0, n.jsxs)('div', {
            className: a()(F.settingCard, { [F.active]: i }),
            children: [
                (0, n.jsx)(j.Z, {
                    description: E.subtitle,
                    icon: (0, n.jsx)(o.LockIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: F.cardIcon,
                        height: 20,
                        width: 20
                    }),
                    id: 'PrivateChannelSettingCard',
                    label: E.title,
                    onChange: g,
                    value: i
                }),
                (0, n.jsxs)('div', {
                    className: F.cardFolder,
                    children: [
                        m &&
                            (0, n.jsx)('div', {
                                className: F.adminWarning,
                                children: (0, n.jsx)(o.HelpMessage, {
                                    messageType: o.HelpMessageTypes.WARNING,
                                    children: P.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
                                })
                            }),
                        !h &&
                            !m &&
                            !i &&
                            (0, n.jsx)('div', {
                                className: F.adminWarning,
                                children: (0, n.jsx)(o.HelpMessage, {
                                    messageType: o.HelpMessageTypes.WARNING,
                                    children: P.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
                                })
                            }),
                        i &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsxs)(T.Z, {
                                        justify: T.Z.Justify.BETWEEN,
                                        align: T.Z.Align.CENTER,
                                        className: F.folderHeader,
                                        children: [
                                            (0, n.jsx)(o.FormTitle, {
                                                tag: 'h5',
                                                className: F.folderTitle,
                                                children: E.formLabel
                                            }),
                                            (0, n.jsx)(o.Button, {
                                                size: o.Button.Sizes.SMALL,
                                                color: o.Button.Colors.BRAND,
                                                onClick: function () {
                                                    (0, o.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(s.bind(s, 185413));
                                                        return (t) =>
                                                            (0, n.jsx)(e, {
                                                                ...t,
                                                                channelId: l.id,
                                                                inSettings: !0
                                                            });
                                                    });
                                                },
                                                children: P.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(B, {
                                        channel: l,
                                        roles: c,
                                        members: d,
                                        getRemoveTooltipHint: O.yv
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function G(e) {
    let { title: t } = e;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(o.FormDivider, { className: F.divider }),
            (0, n.jsx)(o.FormTitle, {
                className: a()(F.folderTitle, F.sectionTitle),
                tag: 'h5',
                children: t
            })
        ]
    });
}
t.Z = r.ZP.connectStores([C.Z, R.Z, M.ZP, I.Z], () => {
    let e;
    let t = C.Z.channel,
        s = C.Z.category,
        n = [],
        l = [],
        i = {},
        a = !1;
    if (null != t) {
        e = I.Z.getGuild(t.getGuildId());
        let s = M.ZP.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let r = I.Z.getRoles(e.id);
            (i = C.Z.editedPermissionIds.reduce((e, t) => {
                let s = C.Z.getPermissionOverwrite(t);
                return null != s && (e[t] = s), e;
            }, {})),
                (n = O.kA(e, r, t, t.accessPermissions, i)),
                (l = O.cR(s, t, e, t.accessPermissions, i)),
                (a = O.Yk(t, i));
        }
    }
    return {
        canSyncChannel: null != s && R.Z.can(w.Pl.MANAGE_ROLES, s),
        category: s,
        channel: t,
        filteredMembers: l,
        filteredRoles: n,
        guild: e,
        isPrivateGuildChannel: a,
        locked: C.Z.locked,
        permissionUpdates: i
    };
})(function (e) {
    let { canSyncChannel: t, category: i, channel: a, filteredMembers: r, filteredRoles: c, guild: d, isPrivateGuildChannel: h, locked: m, permissionUpdates: g } = e,
        [E, T] = l.useState(!A.Uu(w.Pl.SEND_MESSAGES, a));
    if (null == a || null == d) return null;
    function N() {
        O.$e(a, w.Pl.SEND_MESSAGES, E), T(!E);
    }
    function _() {
        if (null != i)
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(s.bind(s, 170509));
                return (t) =>
                    (0, n.jsx)(e, {
                        ...t,
                        channel: a,
                        category: i,
                        onConfirm: async () => {
                            let { guild_id: e } = i,
                                t = { ...i.permissionOverwrites };
                            null != e && null == t[e] && (t[e] = A.we(e)), (await (0, p.u)(a, t[e].deny, t[e].allow)) && (0, u.wk)(a.id, { permissionOverwrites: Object.values(t) });
                        }
                    });
            });
    }
    let S = {
        title: P.Z.Messages.CHANNEL_PERMISSIONS,
        subtitle: P.Z.Messages.CHANNEL_PERMISSIONS_SUBTITLE
    };
    return (
        a.isCategory() && ((S.title = P.Z.Messages.CATEGORY_SETTINGS), (S.subtitle = P.Z.Messages.CATEGORY_PERMISSIONS_SUBTITLE)),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.FormTitle, {
                    tag: 'h1',
                    children: S.title
                }),
                (0, n.jsx)(o.FormText, { children: S.subtitle }),
                null != i && t
                    ? m
                        ? (0, n.jsx)(b.Z, {
                              canSync: !1,
                              icon: o.RefreshIcon,
                              noticeText: P.Z.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({ categoryName: i.name })
                          })
                        : (0, n.jsx)(b.Z, {
                              buttonText: P.Z.Messages.SYNC_NOW,
                              canSync: !0,
                              icon: (0, o.makeIconCompat)(v.Z),
                              noticeText: P.Z.Messages.PERMISSIONS_UNSYNCED.format({ categoryName: i.name }),
                              onClick: _
                          })
                    : null,
                a.isGuildStageVoice()
                    ? (0, n.jsx)(H, {
                          guild: d,
                          channel: a,
                          permissionUpdates: g
                      })
                    : null,
                (0, n.jsx)(U, {
                    channel: a,
                    guild: d,
                    isPrivateGuildChannel: h,
                    roles: c,
                    members: r
                }),
                !1,
                (0, n.jsx)(L.Z, {})
            ]
        })
    );
});

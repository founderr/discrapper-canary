s.d(t, {
    Z: function () {
        return Q;
    },
    n: function () {
        return G;
    }
}),
    s(724458),
    s(653041),
    s(411104);
var n = s(735250),
    l = s(470079),
    i = s(392711),
    a = s.n(i),
    r = s(149765),
    o = s(442837),
    c = s(780384),
    d = s(481060),
    u = s(668781),
    h = s(493683),
    m = s(741361),
    g = s(668390),
    E = s(144991),
    T = s(852860),
    p = s(911969),
    N = s(410030),
    _ = s(607070),
    S = s(940639),
    x = s(325476),
    f = s(146085),
    C = s(598077),
    M = s(277053),
    I = s(388610),
    R = s(271383),
    Z = s(430824),
    v = s(496675),
    A = s(594174),
    O = s(823379),
    L = s(892880),
    j = s(63063),
    b = s(5192),
    D = s(233608),
    y = s(700785),
    w = s(51144),
    P = s(257017),
    F = s(188857),
    B = s(981631),
    H = s(689938),
    U = s(942648);
let G = o.ZP.connectStores([M.Z, I.Z], () => {
    let e = I.Z.getChannel();
    return {
        submitting: M.Z.formState === B.QZA.SUBMITTING,
        onReset() {
            (0, m.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = M.Z.editedPermissionIds.reduce((e, t) => {
                let s = M.Z.getPermissionOverwrite(t);
                return null != s && e.push(s), e;
            }, []);
            (0, m.hw)(e.id, t);
        }
    };
})(T.Z);
function k(e) {
    let { overwrite: t } = e,
        s = (0, o.e7)([M.Z], () => M.Z.channel),
        l = (0, o.e7)([Z.Z], () => (null != s ? Z.Z.getGuild(s.getGuildId()) : null)),
        i = (0, o.e7)([Z.Z], () => (null != l ? Z.Z.getRoles(l.id) : void 0));
    if (null == s || null == l || null == t) return null;
    let { guild_id: a, id: c } = s,
        { id: g } = t,
        T = () => {
            var e;
            if (null == Z.Z.getGuild(a) || null == i) return '';
            let t = i[g],
                s = A.default.getUser(g),
                n = null !== (e = null == s ? void 0 : s.username) && void 0 !== e ? e : '';
            return null != t ? t.name : n;
        },
        N = (e, n) => {
            if ('boolean' == typeof n) throw Error('Unexpected boolean action');
            let { allow: l, deny: i } = t;
            switch (((i = r.Od(i, e)), (l = r.Od(l, e)), n)) {
                case 'ALLOW':
                    l = r.IH(l, e);
                    break;
                case 'DENY':
                    i = r.IH(i, e);
            }
            if (
                v.Z.can(e, s, {
                    [g]: {
                        ...t,
                        allow: l,
                        deny: i
                    }
                })
            )
                (0, m.kY)(s, g, l, i);
            else {
                let e;
                if (t.type === p.BN.MEMBER) {
                    let s = A.default.getUser(t.id);
                    null != s && (e = w.ZP.getName(s));
                } else if (t.type === p.BN.ROLE) {
                    let n = Z.Z.getGuild(s.getGuildId());
                    if (null != n) {
                        let s = Z.Z.getRole(n.id, t.id);
                        null != s && (e = s.name);
                    }
                }
                P.X(e);
            }
        },
        _ = () => {
            let e = T();
            u.Z.show({
                title: H.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                body: H.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({ name: e }),
                cancelText: H.Z.Messages.CANCEL,
                onConfirm: () => h.Z.clearPermissionOverwrite(c, g)
            });
        },
        S = (e) => {
            let t = v.Z.can(B.Plq.ADMINISTRATOR, l) || v.Z.can(B.Plq.MANAGE_ROLES, s, void 0, void 0, !0);
            return s.isGuildStageVoice() && f.xS.has(e) ? H.Z.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.fS(e, B.Plq.MANAGE_ROLES) || t) && (null == e || v.Z.can(e, l) || t)) && H.Z.Messages.HELP_MISSING_PERMISSION;
        },
        C = g === a,
        I = s.isForumLikeChannel() && r.e$(t.deny, B.Plq.SEND_MESSAGES),
        R = r.e$(t.deny, B.Plq.SEND_MESSAGES),
        O = r.e$(t.deny, B.Plq.READ_MESSAGE_HISTORY),
        L = D.Z.generateChannelPermissionSpec(a, s, C, {
            createPostsDisabled: I,
            sendMessagesDisabled: R,
            readMessageHistoryDisabled: O
        });
    return (0, n.jsxs)(x.ZP.Content, {
        className: U.layoutStyle,
        children: [
            L.map((e, s) =>
                (0, n.jsx)(
                    E.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: N,
                        permissionRender: S,
                        className: U.permissionsForm
                    },
                    s
                )
            ),
            a === g
                ? null
                : (0, n.jsx)(d.Button, {
                      look: d.Button.Looks.OUTLINED,
                      color: d.Button.Colors.RED,
                      onClick: _,
                      children: H.Z.Messages.REMOVE_ROLE_OR_USER.format({ name: T() })
                  })
        ]
    });
}
function V(e) {
    let { guildId: t, channelId: s, user: l } = e,
        i = l.getAvatarURL(t, 32),
        a = b.ZP.getNickname(t, s, l),
        r = w.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != a ? a : l.hasAvatarForGuild(t) ? l.username : r),
        (null != a || l.hasAvatarForGuild(t)) &&
            (c = (0, n.jsxs)('div', {
                className: U.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, n.jsx)(d.Avatar, {
                              className: U.userRowSubAvatar,
                              size: d.AvatarSizes.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              'aria-label': l.username
                          })
                        : null,
                    (0, n.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: r
                    })
                ]
            })),
        (0, n.jsxs)('div', {
            className: U.inline,
            children: [
                (0, n.jsx)(d.Avatar, {
                    size: d.AvatarSizes.SIZE_32,
                    src: i,
                    'aria-label': l.username,
                    className: U.userRowAvatar
                }),
                (0, n.jsxs)('div', {
                    className: U.userRowText,
                    children: [
                        (0, n.jsx)(d.Text, {
                            className: U.userRowText,
                            variant: 'text-md/normal',
                            children: o
                        }),
                        c
                    ]
                })
            ]
        })
    );
}
function W(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function z(e) {
    let { guild: t, channel: s, permissionOverwrites: l, onClose: i, onSelect: r, position: c } = e,
        d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
        u = (0, o.Wu)([R.ZP], () => R.ZP.getMemberIds(t.id));
    return (0, n.jsx)(S.Z, {
        label: H.Z.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
        placeholder: H.Z.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
        'aria-label': H.Z.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
        sections: [H.Z.Messages.ROLES, H.Z.Messages.MEMBERS],
        onRenderResult: (e) => {
            if (W(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, n.jsx)('span', {
                        style: t,
                        children: e.name
                    })
                );
            }
            if (e instanceof C.Z)
                return (0, n.jsx)(V, {
                    guildId: t.id,
                    channelId: s.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? a()(d)
                      .filter((t) => null == l[t.id] && e(t.name))
                      .sortBy((e) => -e.position)
                      .value()
                : a()(u)
                      .map(A.default.getUser)
                      .filter(O.lm)
                      .filter((e) => !e.isClyde())
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            L.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            if (null != e) W(e) ? r(e.id, p.BN.ROLE) : e instanceof C.Z && r(e.id, p.BN.MEMBER);
        },
        onClose: i,
        position: c
    });
}
function Y() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: i } = (0, o.cj)([M.Z], () => M.Z),
        r = null == e ? void 0 : e.getGuildId(),
        { guild: u, guildRoles: E } = (0, o.cj)(
            [Z.Z],
            () => {
                let e = null != r ? Z.Z.getGuild(r) : void 0,
                    t = null != e ? Z.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [r]
        ),
        T = (0, F.Z)(r, t),
        S = (0, N.ZP)(),
        f = (0, o.e7)([_.Z], () => _.Z.roleStyle);
    if (null == u || null == E || null == e || null == t) return null;
    let C = (s) => {
            let { position: l, closePopout: i } = s;
            return (0, n.jsx)(z, {
                guild: u,
                channel: e,
                permissionOverwrites: t,
                position: null != l ? l : 'bottom',
                onSelect: I,
                onClose: i
            });
        },
        I = (t, s) => {
            h.Z.updatePermissionOverwrite(e.id, {
                id: t,
                type: s,
                allow: y.Hn,
                deny: y.Hn
            }).then(() => (0, m.Aj)(t));
        };
    null != t && null == t[u.id] && (t[u.id] = y.we(u.id));
    let R = a()(t)
            .filter((e) => e.type === p.BN.ROLE)
            .map((e) => E[e.id])
            .filter(O.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, n.jsx)(
                    g.Z,
                    {
                        theme: S,
                        roleStyle: f,
                        id: e.id,
                        role: e,
                        guild: u,
                        color: e.colorString,
                        'aria-label': e.name,
                        children: e.name
                    },
                    ''.concat(i, '-').concat(e.id)
                )
            )
            .value(),
        v = a()(T)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, n.jsx)(
                    g.Z,
                    {
                        id: e.id,
                        guild: u,
                        theme: S,
                        roleStyle: f,
                        'aria-label': w.ZP.getUserTag(e, { decoration: 'never' }),
                        children: (0, n.jsxs)('div', {
                            className: U.inline,
                            children: [
                                (0, n.jsx)(d.Avatar, {
                                    size: d.AvatarSizes.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: U.xsmallAvatar
                                }),
                                (0, n.jsx)('span', {
                                    className: U.username,
                                    children: w.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(i, '-').concat(e.id)
                );
            })
            .value();
    return (0, n.jsx)(x.ZP.Sidebar, {
        className: U.layoutStyle,
        scrollable: !0,
        children: (0, n.jsxs)(d.TabBar, {
            onItemSelect: m.Aj,
            selectedItem: i,
            orientation: 'vertical',
            children: [
                (() => {
                    let e = (0, c.wj)(S) ? s(521715) : s(299603);
                    return (0, n.jsx)(d.Popout, {
                        renderPopout: C,
                        position: 'bottom',
                        autoInvert: !1,
                        closeOnScroll: !0,
                        children: (t) =>
                            (0, n.jsx)(d.TabBar.Header, {
                                ...t,
                                children: (0, n.jsxs)('div', {
                                    className: U.sidebarHeaderDefault,
                                    children: [
                                        (0, n.jsxs)('span', {
                                            children: [H.Z.Messages.ROLES, '/', H.Z.Messages.MEMBERS]
                                        }),
                                        (0, n.jsx)('img', {
                                            alt: '',
                                            className: U.sidebarHeader,
                                            src: e
                                        })
                                    ]
                                })
                            })
                    });
                })(),
                R,
                v,
                (0, n.jsxs)(l.Fragment, {
                    children: [
                        (0, n.jsx)(d.TabBar.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14
                            }
                        }),
                        (0, n.jsx)(d.FormText, {
                            type: d.FormTextTypes.DESCRIPTION,
                            children: (0, n.jsx)(d.Anchor, {
                                href: j.Z.getArticleURL(B.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: H.Z.Messages.PERMISSION_HELPDESK
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function Q() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: s } = (0, o.cj)([M.Z], () => M.Z);
    if (null == (0, o.e7)([Z.Z], () => (null != e ? Z.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == s) return null;
    let l = t[s];
    return (0, n.jsxs)(x.ZP, {
        className: U.container,
        children: [(0, n.jsx)(Y, {}), (0, n.jsx)(k, { overwrite: l })]
    });
}

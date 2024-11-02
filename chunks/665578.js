t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(392711),
    a = t.n(r),
    o = t(149765),
    s = t(442837),
    d = t(481060),
    c = t(895924),
    u = t(581364),
    m = t(605436),
    h = t(271383),
    p = t(430824),
    g = t(496675),
    f = t(821864),
    x = t(905753),
    b = t(937427),
    v = t(643886),
    C = t(869157),
    I = t(454092),
    N = t(289465),
    T = t(981631),
    _ = t(689079),
    j = t(388032),
    S = t(457237);
function E(e) {
    let { applicationId: n, commandId: r, guildId: b, inModal: v, editedTargetPermissions: E, originalApplicationPermissions: y, originalCommandPermissions: R, selectedPermissionCount: O } = e,
        L = (0, s.e7)([x.Z], () => (null == r ? null : x.Z.getCommand(r)), [r]),
        k = (null == L ? void 0 : L.defaultMemberPermissions) != null,
        w = (0, s.e7)(
            [p.Z, h.ZP, g.Z],
            () => {
                let e = p.Z.getGuild(b),
                    n = h.ZP.getSelfMember(b);
                return (
                    null != e &&
                    null != n &&
                    (0, u.Ft)({
                        PermissionStore: g.Z,
                        guild: e,
                        selfMember: n,
                        applicationLevelPermissions: y,
                        commandLevelPermissions: R,
                        defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
                    })
                );
            },
            [b, L, y, R]
        ),
        M = null != r ? r : n,
        [B, P] = l.useMemo(() => {
            let e = {},
                n = {};
            for (let [t, i] of Object.entries(E)) i.type === c.Kw.CHANNEL ? (e[t] = i) : (n[t] = i);
            return [e, n];
        }, [E]),
        D = l.useCallback(
            (e) => {
                let n = p.Z.getGuild(b),
                    t = h.ZP.getSelfMember(b);
                return (
                    null != n &&
                    null != t &&
                    (null != r
                        ? (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: n,
                              selfMember: t,
                              applicationLevelPermissions: y,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: g.Z,
                              guild: n,
                              selfMember: t,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [b, L, r, y]
        ),
        U = l.useCallback(
            (e, n) => {
                let t;
                let i = null;
                if (0 !== n.length) {
                    let e = E[n[0]];
                    if (e.type === c.Kw.USER) t = I.s.REMOVE_SELF;
                    else {
                        let n = e.id;
                        if (((t = I.s.REMOVE_ROLE), (0, m.pM)(b, n))) i = '@everyone';
                        else {
                            let e = p.Z.getRole(b, n);
                            i = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let n = Object.values(e)[0].id;
                    if (((t = I.s.DENY_ROLE), (0, m.pM)(b, n))) i = '@everyone';
                    else {
                        let e = p.Z.getRole(b, n);
                        i = null != e ? e.name : 'role';
                    }
                }
                (0, I._)(t, i);
            },
            [b, E]
        ),
        G = l.useCallback(
            (e, t) => {
                let i = {};
                for (let [e, n] of Object.entries(E))
                    i[e] = {
                        id: n.id,
                        permission: n.permission,
                        type: n.type
                    };
                if (((i = Object.assign(i, e)), t.length > 0 && (i = a().omit(i, t)), !D(i))) {
                    U(e, t);
                    return;
                }
                f.W4(n, M, i);
            },
            [n, E, M, D, U]
        ),
        F = l.useCallback(() => {
            let e = Object.keys(B);
            return (0, d.openModalLazy)(async () => {
                let { default: n } = await t.e('64908').then(t.bind(t, 557944));
                return (t) =>
                    (0, i.jsx)(n, {
                        editPermissions: G,
                        guildId: b,
                        headerText: j.intl.string(j.t['i1c+kZ']),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: Z,
                        searchPlaceholderText: j.intl.string(j.t['TLQo/v']),
                        selectedPermissionCount: O,
                        ...t
                    });
            });
        }, [G, B, b, O]),
        H = l.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.openModalLazy)(async () => {
                let { default: n } = await t.e('64908').then(t.bind(t, 557944));
                return (t) =>
                    (0, i.jsx)(n, {
                        editPermissions: G,
                        guildId: b,
                        hasMemberSearch: !0,
                        headerText: j.intl.string(j.t['56jRn5']),
                        overwrittenKeys: e,
                        search: A,
                        searchPlaceholderText: j.intl.string(j.t.wAfO5e),
                        selectedPermissionCount: O,
                        ...t
                    });
            });
        }, [G, b, P, O]),
        W = l.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await t.e('21897').then(t.bind(t, 303313)),
                        n = L.defaultMemberPermissions;
                    return (
                        o.fS(n, u.BO) && (n = T.Plq.ADMINISTRATOR),
                        (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                defaultMemberPermissions: n
                            })
                    );
                }),
            [L]
        ),
        z = O - _._n,
        V = z >= 0,
        K = [
            {
                buttonClick: H,
                buttonText: j.intl.string(j.t['56jRn5']),
                noneSelectedText: j.intl.string(j.t.C0rYfn),
                overwrites: P,
                title: null == r ? j.intl.string(j.t['vPWe+/']) : j.intl.string(j.t['1jLVGB'])
            },
            {
                buttonClick: F,
                buttonText: j.intl.string(j.t['i1c+kZ']),
                noneSelectedText: j.intl.string(j.t.UBJhCw),
                overwrites: B,
                title: null == r ? j.intl.string(j.t.OGiMXF) : j.intl.string(j.t.Ujbaqq)
            }
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            z > 0
                ? (0, i.jsx)(d.HelpMessage, {
                      messageType: d.HelpMessageTypes.WARNING,
                      children: j.intl.format(j.t['B/dFBA'], { removeCount: z })
                  })
                : null,
            k
                ? (0, i.jsxs)('div', {
                      className: S.requiredPermissionsBanner,
                      children: [
                          (0, i.jsx)(d.CircleInformationIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              className: S.icon
                          }),
                          (0, i.jsx)('span', {
                              className: S.message,
                              children: j.intl.format(j.t['2889Gh'], {})
                          }),
                          (0, i.jsx)(d.Button, {
                              color: d.Button.Colors.PRIMARY,
                              onClick: W,
                              size: d.Button.Sizes.SMALL,
                              className: S.addButton,
                              children: j.intl.string(j.t['HO/oXl'])
                          })
                      ]
                  })
                : null,
            K.map((e, n) => {
                let t = (n) =>
                        (0, i.jsx)(d.Button, {
                            ...n,
                            color: d.Button.Colors.PRIMARY,
                            disabled: V || !w,
                            onClick: e.buttonClick,
                            size: d.Button.Sizes.TINY,
                            className: S.addButton,
                            children: e.buttonText
                        }),
                    l = null;
                return (
                    w ? V && (l = j.intl.string(j.t.XTwtW1)) : (l = null != r ? j.intl.string(j.t.tybdam) : j.intl.string(j.t.z2hjk5)),
                    (0, i.jsx)(
                        N.Z,
                        {
                            bar: (0, i.jsx)(d.Tooltip, {
                                tooltipClassName: S.tooltip,
                                text: l,
                                shouldShow: null != l,
                                children: (e) => t(e)
                            }),
                            inModal: v,
                            title: e.title,
                            children: (0, i.jsx)('div', {
                                className: v ? void 0 : S.listContainer,
                                children: (0, i.jsx)(C.Z, {
                                    guildId: b,
                                    commandId: r,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: G,
                                    hasAccessToMutatePermissions: w
                                })
                            })
                        },
                        n
                    )
                );
            })
        ]
    });
}
function Z(e) {
    let n = (0, b.w)(e);
    return {
        ...n,
        results: n.results.map((e) => ({
            ...e,
            type: c.Kw.CHANNEL
        }))
    };
}
function A(e) {
    let n = (0, v.U)(e);
    return {
        ...n,
        results: n.results.roles
            .map((e) => ({
                ...e,
                type: c.Kw.ROLE
            }))
            .concat(
                n.results.members.map((e) => ({
                    ...e,
                    type: c.Kw.USER
                }))
            )
    };
}

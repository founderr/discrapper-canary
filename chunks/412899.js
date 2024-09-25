E.d(_, {
    UB: function () {
        return B;
    },
    ZP: function () {
        return z;
    }
}),
    E(47120),
    E(411104);
var s = E(735250),
    n = E(470079),
    t = E(120356),
    r = E.n(t),
    T = E(512722),
    a = E.n(T),
    I = E(772848),
    l = E(91192),
    A = E(924826),
    o = E(866442),
    i = E(442837),
    N = E(692547),
    D = E(481060),
    L = E(239091),
    S = E(749210),
    u = E(112724),
    O = E(607070),
    U = E(605436),
    c = E(134433),
    G = E(600164),
    d = E(91218),
    R = E(313201),
    M = E(518738),
    g = E(434404),
    C = E(271383),
    f = E(430824),
    p = E(496675),
    h = E(594174),
    m = E(700785),
    P = E(944613),
    Z = E(981631),
    v = E(689938),
    H = E(410679);
let b = () => Promise.resolve();
function F(e) {
    let { userRoles: _, position: E, ...n } = e,
        t = (0, R.Dt)();
    return (0, s.jsxs)(D.Dialog, {
        className: r()(H.overflowRolesPopout, {
            [H.popoutBottom]: 'bottom' === E,
            [H.popoutTop]: 'top' === E
        }),
        'aria-labelledby': t,
        children: [
            (0, s.jsx)('div', {
                className: H.overflowRolesPopoutArrowWrapper,
                children: (0, s.jsx)('div', { className: H.overflowRolesPopoutArrow })
            }),
            (0, s.jsxs)(G.Z, {
                className: H.overflowRolesPopoutHeader,
                align: G.Z.Align.CENTER,
                children: [
                    (0, s.jsx)(D.FlagIcon, {
                        size: 'xs',
                        color: N.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: H.overflowRolesPopoutHeaderIcon
                    }),
                    (0, s.jsx)('div', {
                        className: H.overflowRolesPopoutHeaderText,
                        id: t,
                        children: v.Z.Messages.ROLES_LIST.format({ numRoles: _.length })
                    })
                ]
            }),
            (0, s.jsx)(j, {
                ...n,
                wrap: !0,
                userRoles: _
            })
        ]
    });
}
let B = n.forwardRef(function (e, _) {
    var t, T, a;
    let I;
    let { canRemove: A, className: S, role: u, onRemove: U, guildId: G, disableBorderColor: R, onMouseDown: g } = e,
        { tabIndex: C, ...f } = (0, l.JA)(u.id),
        p = (0, M.p9)({
            roleId: u.id,
            size: 16,
            guildId: G
        }),
        h = (0, i.e7)([O.Z], () => O.Z.roleStyle),
        m = (null === (t = u.tags) || void 0 === t ? void 0 : t.guild_connections) === null,
        P = n.useCallback(
            (e) => {
                (0, L.jW)(e, async () => {
                    let { default: e } = await E.e('5396').then(E.bind(E, 731646));
                    return (_) =>
                        (0, s.jsx)(e, {
                            ..._,
                            id: u.id,
                            label: v.Z.Messages.COPY_ID_ROLE
                        });
                });
            },
            [u.id]
        ),
        Z = (0, D.useToken)(N.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        b = null !== (T = u.colorString) && void 0 !== T ? T : Z,
        F = null !== (a = (0, o.wK)(b, 0.6)) && void 0 !== a ? a : void 0,
        B = N.Z.unsafe_rawColors.WHITE_500.css,
        x = (0, o._i)(b);
    null != x && 0.3 > (0, o.Bd)(x) && (B = N.Z.unsafe_rawColors.PRIMARY_630.css),
        (I = m
            ? (0, s.jsx)(c.Z, {
                  className: H.roleFlowerStar,
                  iconClassName: A ? H.roleVerifiedIcon : void 0,
                  color: b,
                  size: 14
              })
            : 'dot' === h
              ? (0, s.jsx)(D.RoleDot, {
                    className: H.roleDot,
                    color: b,
                    background: !1,
                    tooltip: !1
                })
              : (0, s.jsx)(D.RoleCircle, { color: b }));
    let V = n.useMemo(() => {
        var _;
        return {
            borderColor: R ? void 0 : F,
            ...(null !== (_ = e.style) && void 0 !== _ ? _ : {})
        };
    }, [F, R, e.style]);
    return (0, s.jsx)(D.FocusRing, {
        children: (0, s.jsxs)('div', {
            ref: _,
            className: r()(H.role, S),
            style: V,
            onContextMenu: P,
            onMouseDown: g,
            'aria-label': u.name,
            tabIndex: C,
            ...f,
            children: [
                (0, s.jsxs)(D.Clickable, {
                    className: r()(A && H.roleRemoveButtonCanRemove, H.roleRemoveButton),
                    onClick: A ? U : void 0,
                    tabIndex: A ? C : -1,
                    focusProps: { focusClassName: H.roleRemoveIconFocused },
                    'aria-hidden': !A,
                    'aria-label': v.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({ roleName: u.name }),
                    children: [
                        I,
                        A
                            ? (0, s.jsx)(D.XSmallIcon, {
                                  size: 'md',
                                  color: B,
                                  className: H.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                null != p
                    ? (0, s.jsx)(d.Z, {
                          className: H.roleIcon,
                          ...p,
                          enableTooltip: !1
                      })
                    : null,
                (0, s.jsx)('div', {
                    'aria-hidden': !0,
                    className: H.roleName,
                    children: (0, s.jsx)(D.Text, {
                        variant: 'text-xs/medium',
                        className: H.roleNameOverflow,
                        children: u.name
                    })
                })
            ]
        })
    });
});
function x(e) {
    let { user: _, numRolesHidden: E, roleClassName: n } = e,
        t = (0, l.JA)('overflow-more-roles-'.concat(_.id));
    return (0, s.jsx)(D.Popout, {
        renderPopout: (_) => {
            let { position: E } = _;
            return (0, s.jsx)(F, {
                ...e,
                position: null != E ? E : 'top'
            });
        },
        position: 'top',
        align: 'center',
        children: (e) =>
            (0, s.jsx)(D.FocusRing, {
                children: (0, s.jsx)('button', {
                    ...e,
                    className: r()(H.overflowButton, n),
                    ...t,
                    children: '+'.concat(E)
                })
            })
    });
}
function V(e) {
    let { guild: _, user: E, handleAddRole: n, roleClassName: t, addButtonClassName: T, addButtonIconClassName: a } = e,
        I = (0, l.JA)('overflow-add-roles-'.concat(E.id)),
        A = (0, i.e7)([O.Z], () => O.Z.roleStyle),
        o = p.Z.getHighestRole(_),
        N = C.ZP.getMember(_.id, E.id),
        L = (e) => (0, U.Gy)(_.id, e.id) && !e.managed && p.Z.isRoleHigher(_, o, e) && (null == N || -1 === N.roles.indexOf(e.id));
    return (0, s.jsx)(D.Popout, {
        renderPopout: (e) => {
            let { closePopout: E } = e;
            return (0, s.jsx)(P.Z, {
                guild: _,
                roleStyle: A,
                roleFilter: L,
                onSelect: n,
                onClose: E
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, s.jsx)(D.FocusRing, {
                children: (0, s.jsx)('button', {
                    ...e,
                    className: r()(H.addButton, t, T),
                    'aria-label': v.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: 'button',
                    ...I,
                    children: (0, s.jsx)(D.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: r()(H.addButtonIcon, a),
                        'aria-hidden': !0
                    })
                })
            })
    });
}
function j(e) {
    let _;
    let { user: E, guild: t, userRoles: T, wrap: o = !0, width: N, className: D, readOnly: L, roleClassName: u, disableBorderColor: O } = e,
        U = n.useRef({}),
        c = n.useCallback(
            (e) => {
                var _;
                let s = T.filter((_) => _ !== e.id);
                (null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null ? S.Z.unassignGuildRoleConnection(t.id, e.id) : g.Z.updateMemberRoles(t.id, E.id, s, [], [e.id]);
            },
            [T, t.id, E.id]
        ),
        G = n.useCallback(
            (e) => {
                let _ = T;
                -1 === _.indexOf(e) && (_ = _.concat([e])), g.Z.updateMemberRoles(t.id, E.id, _, [e], []);
            },
            [T, t.id, E.id]
        ),
        [d, R] = n.useState(null),
        M = (0, i.e7)([f.Z], () => f.Z.getRoles(t.id)),
        C = n.useMemo(() => {
            let e = Object.values(M)
                .filter((e) => T.includes(e.id))
                .sort((e, _) => {
                    var E, s;
                    let n = (null === (E = e.tags) || void 0 === E ? void 0 : E.guild_connections) !== null,
                        t = (null === (s = _.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
                    return n && !t ? 1 : !n && t ? -1 : 0;
                });
            return null != d ? e.slice(0, d) : e;
        }, [M, d, T]),
        P = T.length - C.length;
    n.useLayoutEffect(() => {
        if (o) return;
        if ('number' != typeof N) throw Error('Unexpected null width');
        let e = 0,
            _ = 0,
            E = N - 30 - 4;
        for (let s = 0; s < C.length; s++) {
            let n = C[s],
                t = U.current[n.id];
            if (null != t) {
                if ((_ += t.offsetWidth + 4) > E) break;
                e++;
            }
        }
        R((_) => (e < C.length ? e : _));
    }, [o, N, C]);
    let F = h.default.getCurrentUser();
    a()(null != F, 'MemberRolesList: currentUser cannot be undefined');
    let j = !L && p.Z.can(Z.Plq.MANAGE_ROLES, t),
        y = m.e9(t, F.id),
        z = n.useMemo(() => 'roles-'.concat((0, I.Z)()), []),
        k = (0, A.ZP)({
            id: z,
            isEnabled: !0,
            scrollToStart: b,
            scrollToEnd: b,
            wrap: !0
        }),
        K = C.map((e) => {
            var _;
            return (0, s.jsx)(
                B,
                {
                    className: u,
                    role: e,
                    canRemove: (j && m.r6(t, F.id, y, e)) || ((null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null && E.id === F.id),
                    onRemove: () => c(e),
                    ref: (_) => {
                        var E, s;
                        return (E = e.id), void (null != (s = _) ? (U.current[E] = s) : delete U.current[E]);
                    },
                    guildId: t.id,
                    disableBorderColor: O
                },
                e.id
            );
        });
    return (
        null != d && 0 !== P
            ? (_ = (0, s.jsx)(x, {
                  ...e,
                  numRolesHidden: P
              }))
            : j &&
              (_ = (0, s.jsx)(V, {
                  ...e,
                  handleAddRole: G
              })),
        (0, s.jsx)(l.bG, {
            navigator: k,
            children: (0, s.jsx)(l.SJ, {
                children: (e) => {
                    let { ref: E, ...n } = e;
                    return (0, s.jsxs)('div', {
                        className: r()(H.root, D),
                        'aria-label': v.Z.Messages.ROLES_LIST.format({ numRoles: T.length }),
                        ref: E,
                        ...n,
                        children: [K, _]
                    });
                }
            })
        })
    );
}
let y = (0, u.Z)(j);
function z(e) {
    return (
        (0, i.e7)([p.Z], () => {
            var _;
            return p.Z.getGuildVersion(null === (_ = e.guild) || void 0 === _ ? void 0 : _.id);
        }),
        !1 === e.wrap ? (0, s.jsx)(y, { ...e }) : (0, s.jsx)(j, { ...e })
    );
}

E.d(_, {
    UB: function () {
        return B;
    },
    ZP: function () {
        return k;
    }
}),
    E(47120),
    E(411104);
var s = E(735250),
    n = E(470079),
    t = E(120356),
    r = E.n(t),
    a = E(512722),
    T = E.n(a),
    I = E(772848),
    l = E(91192),
    o = E(924826),
    A = E(866442),
    i = E(442837),
    N = E(692547),
    D = E(481060),
    L = E(239091),
    S = E(749210),
    u = E(112724),
    c = E(607070),
    O = E(605436),
    U = E(134433),
    d = E(600164),
    G = E(91218),
    M = E(313201),
    R = E(518738),
    g = E(434404),
    C = E(271383),
    f = E(430824),
    p = E(496675),
    h = E(594174),
    m = E(700785),
    P = E(944613),
    Z = E(981631),
    v = E(689938),
    b = E(410679);
let H = () => Promise.resolve();
function F(e) {
    let { userRoles: _, position: E, ...n } = e,
        t = (0, M.Dt)();
    return (0, s.jsxs)(D.Dialog, {
        className: r()(b.overflowRolesPopout, {
            [b.popoutBottom]: 'bottom' === E,
            [b.popoutTop]: 'top' === E
        }),
        'aria-labelledby': t,
        children: [
            (0, s.jsx)('div', {
                className: b.overflowRolesPopoutArrowWrapper,
                children: (0, s.jsx)('div', { className: b.overflowRolesPopoutArrow })
            }),
            (0, s.jsxs)(d.Z, {
                className: b.overflowRolesPopoutHeader,
                align: d.Z.Align.CENTER,
                children: [
                    (0, s.jsx)(D.FlagIcon, {
                        size: 'xs',
                        color: N.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: b.overflowRolesPopoutHeaderIcon
                    }),
                    (0, s.jsx)('div', {
                        className: b.overflowRolesPopoutHeaderText,
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
    var t, a, T;
    let I;
    let { canRemove: o, className: S, role: u, onRemove: O, guildId: d, disableBorderColor: M, onMouseDown: g } = e,
        { tabIndex: C, ...f } = (0, l.JA)(u.id),
        p = (0, R.p9)({
            roleId: u.id,
            size: 16,
            guildId: d
        }),
        h = (0, i.e7)([c.Z], () => c.Z.roleStyle),
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
        H = null !== (a = u.colorString) && void 0 !== a ? a : Z,
        F = null !== (T = (0, A.wK)(H, 0.6)) && void 0 !== T ? T : void 0,
        B = N.Z.unsafe_rawColors.WHITE_500.css,
        x = (0, A._i)(H);
    null != x && 0.3 > (0, A.Bd)(x) && (B = N.Z.unsafe_rawColors.PRIMARY_630.css),
        (I = m
            ? (0, s.jsx)(U.Z, {
                  className: b.roleFlowerStar,
                  iconClassName: o ? b.roleVerifiedIcon : void 0,
                  color: H,
                  size: 14
              })
            : 'dot' === h
              ? (0, s.jsx)(D.RoleDot, {
                    className: b.roleDot,
                    color: H,
                    background: !1,
                    tooltip: !1
                })
              : (0, s.jsx)(D.RoleCircle, { color: H }));
    let V = n.useMemo(() => {
        var _;
        return {
            borderColor: M ? void 0 : F,
            ...(null !== (_ = e.style) && void 0 !== _ ? _ : {})
        };
    }, [F, M, e.style]);
    return (0, s.jsx)(D.FocusRing, {
        children: (0, s.jsxs)('div', {
            ref: _,
            className: r()(b.role, S),
            style: V,
            onContextMenu: P,
            onMouseDown: g,
            'aria-label': u.name,
            tabIndex: C,
            ...f,
            children: [
                (0, s.jsxs)(D.Clickable, {
                    className: r()(o && b.roleRemoveButtonCanRemove, b.roleRemoveButton),
                    onClick: o ? O : void 0,
                    tabIndex: o ? C : -1,
                    focusProps: { focusClassName: b.roleRemoveIconFocused },
                    'aria-hidden': !o,
                    'aria-label': v.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({ roleName: u.name }),
                    children: [
                        I,
                        o
                            ? (0, s.jsx)(D.XSmallIcon, {
                                  size: 'md',
                                  color: B,
                                  className: b.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                null != p
                    ? (0, s.jsx)(G.Z, {
                          className: b.roleIcon,
                          ...p,
                          enableTooltip: !1
                      })
                    : null,
                (0, s.jsx)('div', {
                    'aria-hidden': !0,
                    className: b.roleName,
                    children: (0, s.jsx)(D.Text, {
                        variant: 'text-xs/medium',
                        className: b.roleNameOverflow,
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
                    className: r()(b.overflowButton, n),
                    ...t,
                    children: '+'.concat(E)
                })
            })
    });
}
function V(e) {
    let { guild: _, user: E, handleAddRole: n, roleClassName: t, addButtonClassName: a, addButtonIconClassName: T } = e,
        I = (0, l.JA)('overflow-add-roles-'.concat(E.id)),
        o = (0, i.e7)([c.Z], () => c.Z.roleStyle),
        A = p.Z.getHighestRole(_),
        N = C.ZP.getMember(_.id, E.id),
        L = (e) => (0, O.Gy)(_.id, e.id) && !e.managed && p.Z.isRoleHigher(_, A, e) && (null == N || -1 === N.roles.indexOf(e.id));
    return (0, s.jsx)(D.Popout, {
        renderPopout: (e) => {
            let { closePopout: E } = e;
            return (0, s.jsx)(P.Z, {
                guild: _,
                roleStyle: o,
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
                    className: r()(b.addButton, t, a),
                    'aria-label': v.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: 'button',
                    ...I,
                    children: (0, s.jsx)(D.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: r()(b.addButtonIcon, T),
                        'aria-hidden': !0
                    })
                })
            })
    });
}
function j(e) {
    let _;
    let { user: E, guild: t, userRoles: a, wrap: A = !0, width: N, className: D, readOnly: L, roleClassName: u, disableBorderColor: c } = e,
        O = n.useRef({}),
        U = n.useCallback(
            (e) => {
                var _;
                let s = a.filter((_) => _ !== e.id);
                (null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null ? S.Z.unassignGuildRoleConnection(t.id, e.id) : g.Z.updateMemberRoles(t.id, E.id, s, [], [e.id]);
            },
            [a, t.id, E.id]
        ),
        d = n.useCallback(
            (e) => {
                let _ = a;
                -1 === _.indexOf(e) && (_ = _.concat([e])), g.Z.updateMemberRoles(t.id, E.id, _, [e], []);
            },
            [a, t.id, E.id]
        ),
        [G, M] = n.useState(null),
        R = (0, i.e7)([f.Z], () => f.Z.getRoles(t.id)),
        C = n.useMemo(() => {
            let e = Object.values(R)
                .filter((e) => a.includes(e.id))
                .sort((e, _) => {
                    var E, s;
                    let n = (null === (E = e.tags) || void 0 === E ? void 0 : E.guild_connections) !== null,
                        t = (null === (s = _.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
                    return n && !t ? 1 : !n && t ? -1 : 0;
                });
            return null != G ? e.slice(0, G) : e;
        }, [R, G, a]),
        P = a.length - C.length;
    n.useLayoutEffect(() => {
        if (A) return;
        if ('number' != typeof N) throw Error('Unexpected null width');
        let e = 0,
            _ = 0,
            E = N - 30 - 4;
        for (let s = 0; s < C.length; s++) {
            let n = C[s],
                t = O.current[n.id];
            if (null != t) {
                if ((_ += t.offsetWidth + 4) > E) break;
                e++;
            }
        }
        M((_) => (e < C.length ? e : _));
    }, [A, N, C]);
    let F = h.default.getCurrentUser();
    T()(null != F, 'MemberRolesList: currentUser cannot be undefined');
    let j = !L && p.Z.can(Z.Plq.MANAGE_ROLES, t),
        y = m.e9(t, F.id),
        k = n.useMemo(() => 'roles-'.concat((0, I.Z)()), []),
        z = (0, o.ZP)({
            id: k,
            isEnabled: !0,
            scrollToStart: H,
            scrollToEnd: H,
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
                    onRemove: () => U(e),
                    ref: (_) => {
                        var E, s;
                        return (E = e.id), void (null != (s = _) ? (O.current[E] = s) : delete O.current[E]);
                    },
                    guildId: t.id,
                    disableBorderColor: c
                },
                e.id
            );
        });
    return (
        null != G && 0 !== P
            ? (_ = (0, s.jsx)(x, {
                  ...e,
                  numRolesHidden: P
              }))
            : j &&
              (_ = (0, s.jsx)(V, {
                  ...e,
                  handleAddRole: d
              })),
        (0, s.jsx)(l.bG, {
            navigator: z,
            children: (0, s.jsx)(l.SJ, {
                children: (e) => {
                    let { ref: E, ...n } = e;
                    return (0, s.jsxs)('div', {
                        className: r()(b.root, D),
                        'aria-label': v.Z.Messages.ROLES_LIST.format({ numRoles: a.length }),
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
function k(e) {
    return (
        (0, i.e7)([p.Z], () => {
            var _;
            return p.Z.getGuildVersion(null === (_ = e.guild) || void 0 === _ ? void 0 : _.id);
        }),
        !1 === e.wrap ? (0, s.jsx)(y, { ...e }) : (0, s.jsx)(j, { ...e })
    );
}

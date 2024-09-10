E.d(_, {
    UB: function () {
        return B;
    },
    ZP: function () {
        return Y;
    }
}),
    E(47120),
    E(411104);
var s = E(735250),
    T = E(470079),
    I = E(120356),
    n = E.n(I),
    t = E(512722),
    A = E.n(t),
    r = E(772848),
    a = E(91192),
    N = E(924826),
    S = E(866442),
    l = E(442837),
    D = E(692547),
    L = E(481060),
    U = E(239091),
    O = E(749210),
    G = E(112724),
    o = E(607070),
    i = E(605436),
    M = E(134433),
    R = E(600164),
    u = E(91218),
    c = E(313201),
    C = E(518738),
    d = E(434404),
    g = E(271383),
    f = E(430824),
    Z = E(496675),
    P = E(594174),
    H = E(700785),
    h = E(944613),
    p = E(981631),
    m = E(689938),
    v = E(410679);
let F = () => Promise.resolve();
function V(e) {
    let { userRoles: _, position: E, ...T } = e,
        I = (0, c.Dt)();
    return (0, s.jsxs)(L.Dialog, {
        className: n()(v.overflowRolesPopout, {
            [v.popoutBottom]: 'bottom' === E,
            [v.popoutTop]: 'top' === E
        }),
        'aria-labelledby': I,
        children: [
            (0, s.jsx)('div', {
                className: v.overflowRolesPopoutArrowWrapper,
                children: (0, s.jsx)('div', { className: v.overflowRolesPopoutArrow })
            }),
            (0, s.jsxs)(R.Z, {
                className: v.overflowRolesPopoutHeader,
                align: R.Z.Align.CENTER,
                children: [
                    (0, s.jsx)(L.FlagIcon, {
                        size: 'xs',
                        color: D.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: v.overflowRolesPopoutHeaderIcon
                    }),
                    (0, s.jsx)('div', {
                        className: v.overflowRolesPopoutHeaderText,
                        id: I,
                        children: m.Z.Messages.ROLES_LIST.format({ numRoles: _.length })
                    })
                ]
            }),
            (0, s.jsx)(z, {
                ...T,
                wrap: !0,
                userRoles: _
            })
        ]
    });
}
let B = T.forwardRef(function (e, _) {
    var I, t, A;
    let r;
    let { canRemove: N, className: O, role: G, onRemove: i, guildId: R, disableBorderColor: c, onMouseDown: d } = e,
        { tabIndex: g, ...f } = (0, a.JA)(G.id),
        Z = (0, C.p9)({
            roleId: G.id,
            size: 16,
            guildId: R
        }),
        P = (0, l.e7)([o.Z], () => o.Z.roleStyle),
        H = (null === (I = G.tags) || void 0 === I ? void 0 : I.guild_connections) === null,
        h = T.useCallback(
            (e) => {
                (0, U.jW)(e, async () => {
                    let { default: e } = await E.e('5396').then(E.bind(E, 731646));
                    return (_) =>
                        (0, s.jsx)(e, {
                            ..._,
                            id: G.id,
                            label: m.Z.Messages.COPY_ID_ROLE
                        });
                });
            },
            [G.id]
        ),
        p = (0, L.useToken)(D.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        F = null !== (t = G.colorString) && void 0 !== t ? t : p,
        V = null !== (A = (0, S.wK)(F, 0.6)) && void 0 !== A ? A : void 0,
        B = D.Z.unsafe_rawColors.WHITE_500.css,
        b = (0, S._i)(F);
    null != b && 0.3 > (0, S.Bd)(b) && (B = D.Z.unsafe_rawColors.PRIMARY_630.css),
        (r = H
            ? (0, s.jsx)(M.Z, {
                  className: v.roleFlowerStar,
                  iconClassName: N ? v.roleVerifiedIcon : void 0,
                  color: F,
                  size: 14
              })
            : 'dot' === P
              ? (0, s.jsx)(L.RoleDot, {
                    className: v.roleDot,
                    color: F,
                    background: !1,
                    tooltip: !1
                })
              : (0, s.jsx)(L.RoleCircle, { color: F }));
    let x = T.useMemo(() => {
        var _;
        return {
            borderColor: c ? void 0 : V,
            ...(null !== (_ = e.style) && void 0 !== _ ? _ : {})
        };
    }, [V, c, e.style]);
    return (0, s.jsx)(L.FocusRing, {
        children: (0, s.jsxs)('div', {
            ref: _,
            className: n()(v.role, O),
            style: x,
            onContextMenu: h,
            onMouseDown: d,
            'aria-label': G.name,
            tabIndex: g,
            ...f,
            children: [
                (0, s.jsxs)(L.Clickable, {
                    className: n()(N && v.roleRemoveButtonCanRemove, v.roleRemoveButton),
                    onClick: N ? i : void 0,
                    tabIndex: N ? g : -1,
                    focusProps: { focusClassName: v.roleRemoveIconFocused },
                    'aria-hidden': !N,
                    'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({ roleName: G.name }),
                    children: [
                        r,
                        N
                            ? (0, s.jsx)(L.XSmallIcon, {
                                  size: 'md',
                                  color: B,
                                  className: v.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                null != Z
                    ? (0, s.jsx)(u.Z, {
                          className: v.roleIcon,
                          ...Z,
                          enableTooltip: !1
                      })
                    : null,
                (0, s.jsx)('div', {
                    'aria-hidden': !0,
                    className: v.roleName,
                    children: (0, s.jsx)(L.Text, {
                        variant: 'text-xs/medium',
                        className: v.roleNameOverflow,
                        children: G.name
                    })
                })
            ]
        })
    });
});
function b(e) {
    let { user: _, numRolesHidden: E, roleClassName: T } = e,
        I = (0, a.JA)('overflow-more-roles-'.concat(_.id));
    return (0, s.jsx)(L.Popout, {
        renderPopout: (_) => {
            let { position: E } = _;
            return (0, s.jsx)(V, {
                ...e,
                position: null != E ? E : 'top'
            });
        },
        position: 'top',
        align: 'center',
        children: (e) =>
            (0, s.jsx)(L.FocusRing, {
                children: (0, s.jsx)('button', {
                    ...e,
                    className: n()(v.overflowButton, T),
                    ...I,
                    children: '+'.concat(E)
                })
            })
    });
}
function x(e) {
    let { guild: _, user: E, handleAddRole: T, roleClassName: I, addButtonClassName: t, addButtonIconClassName: A } = e,
        r = (0, a.JA)('overflow-add-roles-'.concat(E.id)),
        N = (0, l.e7)([o.Z], () => o.Z.roleStyle),
        S = Z.Z.getHighestRole(_),
        D = g.ZP.getMember(_.id, E.id),
        U = (e) => (0, i.Gy)(_.id, e.id) && !e.managed && Z.Z.isRoleHigher(_, S, e) && (null == D || -1 === D.roles.indexOf(e.id));
    return (0, s.jsx)(L.Popout, {
        renderPopout: (e) => {
            let { closePopout: E } = e;
            return (0, s.jsx)(h.Z, {
                guild: _,
                roleStyle: N,
                roleFilter: U,
                onSelect: T,
                onClose: E
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, s.jsx)(L.FocusRing, {
                children: (0, s.jsx)('button', {
                    ...e,
                    className: n()(v.addButton, I, t),
                    'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: 'button',
                    ...r,
                    children: (0, s.jsx)(L.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: n()(v.addButtonIcon, A),
                        'aria-hidden': !0
                    })
                })
            })
    });
}
function z(e) {
    let _;
    let { user: E, guild: I, userRoles: t, wrap: S = !0, width: D, className: L, readOnly: U, roleClassName: G, disableBorderColor: o } = e,
        i = T.useRef({}),
        M = T.useCallback(
            (e) => {
                var _;
                let s = t.filter((_) => _ !== e.id);
                (null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null ? O.Z.unassignGuildRoleConnection(I.id, e.id) : d.Z.updateMemberRoles(I.id, E.id, s, [], [e.id]);
            },
            [t, I.id, E.id]
        ),
        R = T.useCallback(
            (e) => {
                let _ = t;
                -1 === _.indexOf(e) && (_ = _.concat([e])), d.Z.updateMemberRoles(I.id, E.id, _, [e], []);
            },
            [t, I.id, E.id]
        ),
        [u, c] = T.useState(null),
        C = (0, l.e7)([f.Z], () => f.Z.getRoles(I.id)),
        g = T.useMemo(() => {
            let e = Object.values(C)
                .filter((e) => t.includes(e.id))
                .sort((e, _) => {
                    var E, s;
                    let T = (null === (E = e.tags) || void 0 === E ? void 0 : E.guild_connections) !== null,
                        I = (null === (s = _.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
                    return T && !I ? 1 : !T && I ? -1 : 0;
                });
            return null != u ? e.slice(0, u) : e;
        }, [C, u, t]),
        h = t.length - g.length;
    T.useLayoutEffect(() => {
        if (S) return;
        if ('number' != typeof D) throw Error('Unexpected null width');
        let e = 0,
            _ = 0,
            E = D - 30 - 4;
        for (let s = 0; s < g.length; s++) {
            let T = g[s],
                I = i.current[T.id];
            if (null != I) {
                if ((_ += I.offsetWidth + 4) > E) break;
                e++;
            }
        }
        c((_) => (e < g.length ? e : _));
    }, [S, D, g]);
    let V = P.default.getCurrentUser();
    A()(null != V, 'MemberRolesList: currentUser cannot be undefined');
    let z = !U && Z.Z.can(p.Plq.MANAGE_ROLES, I),
        K = H.e9(I, V.id),
        Y = T.useMemo(() => 'roles-'.concat((0, r.Z)()), []),
        y = (0, N.ZP)({
            id: Y,
            isEnabled: !0,
            scrollToStart: F,
            scrollToEnd: F,
            wrap: !0
        }),
        j = g.map((e) => {
            var _;
            return (0, s.jsx)(
                B,
                {
                    className: G,
                    role: e,
                    canRemove: (z && H.r6(I, V.id, K, e)) || ((null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null && E.id === V.id),
                    onRemove: () => M(e),
                    ref: (_) => {
                        var E, s;
                        return (E = e.id), void (null != (s = _) ? (i.current[E] = s) : delete i.current[E]);
                    },
                    guildId: I.id,
                    disableBorderColor: o
                },
                e.id
            );
        });
    return (
        null != u && 0 !== h
            ? (_ = (0, s.jsx)(b, {
                  ...e,
                  numRolesHidden: h
              }))
            : z &&
              (_ = (0, s.jsx)(x, {
                  ...e,
                  handleAddRole: R
              })),
        (0, s.jsx)(a.bG, {
            navigator: y,
            children: (0, s.jsx)(a.SJ, {
                children: (e) => {
                    let { ref: E, ...T } = e;
                    return (0, s.jsxs)('div', {
                        className: n()(v.root, L),
                        'aria-label': m.Z.Messages.ROLES_LIST.format({ numRoles: t.length }),
                        ref: E,
                        ...T,
                        children: [j, _]
                    });
                }
            })
        })
    );
}
let K = (0, G.Z)(z);
function Y(e) {
    return (
        (0, l.e7)([Z.Z], () => {
            var _;
            return Z.Z.getGuildVersion(null === (_ = e.guild) || void 0 === _ ? void 0 : _.id);
        }),
        !1 === e.wrap ? (0, s.jsx)(K, { ...e }) : (0, s.jsx)(z, { ...e })
    );
}

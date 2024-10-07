var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(866442),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    _ = n(239091),
    E = n(607070),
    f = n(134433),
    h = n(111028),
    p = n(91218),
    I = n(518738),
    m = n(689938),
    T = n(962219);
t.Z = i.forwardRef(function (e, t) {
    var a, S, g;
    let A;
    let { canRemove: N, className: O, role: R, onRemove: v, guildId: C, disableBorderColor: L, onMouseDown: y } = e,
        { tabIndex: D, ...b } = (0, o.JA)(R.id),
        M = (0, I.p9)({
            roleId: R.id,
            size: 16,
            guildId: C
        }),
        P = (0, u.e7)([E.Z], () => E.Z.roleStyle),
        U = (null === (a = R.tags) || void 0 === a ? void 0 : a.guild_connections) === null,
        w = i.useCallback(
            (e) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: R.id,
                            label: m.Z.Messages.COPY_ID_ROLE
                        });
                });
            },
            [R.id]
        ),
        x = (0, d.useToken)(c.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        G = null !== (S = R.colorString) && void 0 !== S ? S : x,
        k = null !== (g = (0, l.wK)(G, 0.6)) && void 0 !== g ? g : void 0,
        B = c.Z.unsafe_rawColors.WHITE_500.css,
        F = (0, l._i)(G);
    null != F && 0.3 > (0, l.Bd)(F) && (B = c.Z.unsafe_rawColors.PRIMARY_630.css),
        (A = U
            ? (0, r.jsx)(f.Z, {
                  className: T.roleFlowerStar,
                  iconClassName: N ? T.roleVerifiedIcon : void 0,
                  color: G,
                  size: 14
              })
            : 'dot' === P
              ? (0, r.jsx)(d.RoleDot, {
                    className: T.roleDot,
                    color: G,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(d.RoleCircle, {
                    color: G,
                    className: T.roleCircle
                }));
    let V = i.useMemo(() => {
        var t;
        return {
            borderColor: L ? void 0 : k,
            ...(null !== (t = e.style) && void 0 !== t ? t : {})
        };
    }, [k, L, e.style]);
    return (0, r.jsx)(d.FocusRing, {
        children: (0, r.jsxs)('div', {
            ref: t,
            className: s()(T.role, O),
            style: V,
            onContextMenu: w,
            onMouseDown: y,
            'aria-label': R.name,
            tabIndex: D,
            ...b,
            children: [
                N
                    ? (0, r.jsx)(d.TooltipContainer, {
                          text: m.Z.Messages.USER_PROFILE_REMOVE_ROLE,
                          children: (0, r.jsxs)(d.Clickable, {
                              className: s()(T.roleRemoveButtonCanRemove, T.roleRemoveButton),
                              onClick: v,
                              tabIndex: D,
                              focusProps: { focusClassName: T.roleRemoveIconFocused },
                              'aria-hidden': !1,
                              'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({ roleName: R.name }),
                              children: [
                                  A,
                                  (0, r.jsx)(d.XSmallIcon, {
                                      size: 'md',
                                      color: B,
                                      className: T.roleRemoveIcon,
                                      'aria-hidden': !0
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)(d.Clickable, {
                          className: T.roleRemoveButton,
                          tabIndex: -1,
                          focusProps: { focusClassName: T.roleRemoveIconFocused },
                          'aria-hidden': !0,
                          'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({ roleName: R.name }),
                          children: A
                      }),
                null != M
                    ? (0, r.jsx)(p.Z, {
                          className: T.roleIcon,
                          ...M,
                          enableTooltip: !1
                      })
                    : null,
                (0, r.jsx)('div', {
                    'aria-hidden': !0,
                    className: T.roleName,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        children: (0, r.jsx)(h.Z, { children: R.name })
                    })
                })
            ]
        })
    });
});

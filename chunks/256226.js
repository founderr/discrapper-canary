var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(866442),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    f = n(239091),
    _ = n(607070),
    h = n(134433),
    p = n(111028),
    m = n(91218),
    g = n(518738),
    E = n(388032),
    v = n(257972);
t.Z = i.forwardRef(function (e, t) {
    var a, I, S;
    let b;
    let { canRemove: T, className: y, role: A, onRemove: N, guildId: C, disableBorderColor: R, onMouseDown: O } = e,
        { tabIndex: D, ...L } = (0, o.JA)(A.id),
        x = (0, g.p9)({
            roleId: A.id,
            size: 16,
            guildId: C
        }),
        w = (0, u.e7)([_.Z], () => _.Z.roleStyle),
        M = (null === (a = A.tags) || void 0 === a ? void 0 : a.guild_connections) === null,
        P = i.useCallback(
            (e) => {
                (0, f.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: A.id,
                            label: E.intl.string(E.t.sMsaLi)
                        });
                });
            },
            [A.id]
        ),
        k = (0, d.useToken)(c.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        U = null !== (I = A.colorString) && void 0 !== I ? I : k,
        G = null !== (S = (0, l.wK)(U, 0.6)) && void 0 !== S ? S : void 0,
        B = c.Z.unsafe_rawColors.WHITE_500.css,
        Z = (0, l._i)(U);
    null != Z && 0.3 > (0, l.Bd)(Z) && (B = c.Z.unsafe_rawColors.PRIMARY_630.css),
        (b = M
            ? (0, r.jsx)(h.Z, {
                  className: v.roleFlowerStar,
                  iconClassName: T ? v.roleVerifiedIcon : void 0,
                  color: U,
                  size: 14
              })
            : 'dot' === w
              ? (0, r.jsx)(d.RoleDot, {
                    className: v.roleDot,
                    color: U,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(d.RoleCircle, {
                    color: U,
                    className: v.roleCircle
                }));
    let F = i.useMemo(() => {
        var t;
        return {
            borderColor: R ? void 0 : G,
            ...(null !== (t = e.style) && void 0 !== t ? t : {})
        };
    }, [G, R, e.style]);
    return (0, r.jsx)(d.FocusRing, {
        children: (0, r.jsxs)('div', {
            ref: t,
            className: s()(v.role, y),
            style: F,
            onContextMenu: P,
            onMouseDown: O,
            'aria-label': A.name,
            tabIndex: D,
            ...L,
            children: [
                T
                    ? (0, r.jsx)(d.TooltipContainer, {
                          text: E.intl.string(E.t.u3RVsL),
                          children: (0, r.jsxs)(d.Clickable, {
                              className: s()(v.roleRemoveButtonCanRemove, v.roleRemoveButton),
                              onClick: N,
                              tabIndex: D,
                              focusProps: { focusClassName: v.roleRemoveIconFocused },
                              'aria-hidden': !1,
                              'aria-label': E.intl.formatToPlainString(E.t.QrxwhY, { roleName: A.name }),
                              children: [
                                  b,
                                  (0, r.jsx)(d.XSmallIcon, {
                                      size: 'md',
                                      color: B,
                                      className: v.roleRemoveIcon,
                                      'aria-hidden': !0
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)(d.Clickable, {
                          className: v.roleRemoveButton,
                          tabIndex: -1,
                          focusProps: { focusClassName: v.roleRemoveIconFocused },
                          'aria-hidden': !0,
                          'aria-label': E.intl.formatToPlainString(E.t.QrxwhY, { roleName: A.name }),
                          children: b
                      }),
                null != x
                    ? (0, r.jsx)(m.Z, {
                          className: v.roleIcon,
                          ...x,
                          enableTooltip: !1
                      })
                    : null,
                (0, r.jsx)('div', {
                    'aria-hidden': !0,
                    className: v.roleName,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        children: (0, r.jsx)(p.Z, { children: A.name })
                    })
                })
            ]
        })
    });
});

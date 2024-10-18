n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(954955),
    o = n.n(r),
    c = n(399606),
    u = n(481060),
    d = n(605436),
    h = n(79712),
    p = n(285173),
    m = n(434404),
    _ = n(422559),
    f = n(271383),
    E = n(430824),
    g = n(496675),
    C = n(594174),
    I = n(233608),
    T = n(370595),
    x = n(351127),
    v = n(981631),
    S = n(689938),
    N = n(194898),
    A = n(650464);
function Z(e) {
    var t, n, a, r;
    let { permission: o, roleIds: f, guild: C, specMap: I, categoryTitle: T, userId: N } = e,
        Z = (0, c.e7)([E.Z], () => E.Z.getRoles(C.id)),
        M = v.Plq[o],
        b = null !== (a = null === (t = I[M.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== a ? a : (0, _.wt)(M),
        R = null !== (r = null === (n = I[M.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : '',
        L = x._o.has(M),
        j = x.Qn.includes(o),
        P = f.length,
        O = (0, c.e7)([g.Z], () => g.Z.can(v.Plq.MANAGE_ROLES, C), [C]),
        y = s.useCallback(
            async (e) => {
                if (!!O) await m.Z.open(C.id, v.pNK.ROLES), await m.Z.selectRole(e);
            },
            [O, C.id]
        );
    return (0, i.jsxs)('div', {
        className: l()(A.permissionItemContainer, { [A.elevatedPermission]: L }),
        children: [
            (0, i.jsxs)('div', {
                className: A.permissionItemHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: A.permissionTitle,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: b
                            }),
                            null != T &&
                                (0, i.jsxs)('div', {
                                    className: A.permissionItemSubheader,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: T
                                        }),
                                        L &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: u.tokens.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)(u.Tooltip, {
                                                        text: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
                                                        children: (e) =>
                                                            (0, i.jsxs)(u.Clickable, {
                                                                className: A.elevatedPermissionContainer,
                                                                ...e,
                                                                children: [
                                                                    (0, i.jsx)(u.ShieldLockIcon, {
                                                                        size: 'custom',
                                                                        width: 12,
                                                                        height: 12,
                                                                        color: u.tokens.colors.TEXT_BRAND
                                                                    }),
                                                                    (0, i.jsx)(u.Text, {
                                                                        variant: 'text-xs/normal',
                                                                        color: 'text-brand',
                                                                        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                                                                    })
                                                                ]
                                                            })
                                                    })
                                                ]
                                            }),
                                        !L &&
                                            j &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: u.tokens.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: A.elevatedPermissionContainer,
                                                        children: (0, i.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
                                                        })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({ roleCount: P })
                    })
                ]
            }),
            null != R &&
                (0, i.jsx)('div', {
                    className: A.permissionItemDescription,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: R
                    })
                }),
            (0, i.jsx)('div', {
                className: A.permissionItemRoleContainer,
                children: f.map((e) =>
                    (0, x.Ov)(e, N)
                        ? (0, i.jsx)(
                              'div',
                              {
                                  className: A.roleTooltipItem,
                                  children: (0, i.jsx)('div', {
                                      className: A.roleChiplet,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-normal',
                                          children: S.Z.Messages.GUILD_OWNER
                                      })
                                  })
                              },
                              e
                          )
                        : (0, i.jsx)(
                              u.Clickable,
                              {
                                  className: l()(A.roleTooltipItem, { [A.editable]: O && !(0, d.pM)(C.id, e) }),
                                  onClick: () => y(e),
                                  children: (0, i.jsx)(p.Z, {
                                      role: Z[e],
                                      guildId: C.id,
                                      className: A.roleChiplet
                                  })
                              },
                              e
                          )
                )
            })
        ]
    });
}
function M(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function b(e) {
    let { userId: t, guildId: n, location: a, className: r, onNavigate: d } = e,
        h = (0, c.e7)([C.default], () => C.default.getUser(t), [t]),
        p = (0, c.e7)([E.Z], () => E.Z.getGuild(n), [n]),
        m = (0, c.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]),
        g = (0, x.B2)(t, n, x.pd),
        b = Object.keys(g).length,
        R = s.useMemo(() => (null != p ? I.Z.getGuildPermissionSpecMap(p) : null), [p]),
        L = s.useMemo(() => (null != p ? I.Z.generateGuildPermissionSpec(p) : null), [p]),
        [j, P] = s.useState(''),
        [O, y] = s.useState(''),
        D = s.useCallback(o()(y, 300), []),
        U = s.useCallback(
            (e) => {
                P(e), D(e);
            },
            [D]
        ),
        k = s.useCallback(() => {
            P(''), y('');
        }, []),
        w = s.useMemo(() => {
            if (null == p || null == R || null == m) return null;
            if (0 === b)
                return (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: S.Z.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
                });
            let e = [];
            return (
                null == L ||
                    L.forEach((n) => {
                        n.permissions.forEach((s) => {
                            let a = s.flag,
                                l = x.pd.find((e) => v.Plq[e] === a);
                            if (null == l) return;
                            let r = g[l];
                            if (null != r) {
                                if (O.length > 0) {
                                    var o, c, u, d, h;
                                    let e = null !== (d = null === (o = R[a.toString()]) || void 0 === o ? void 0 : o.title) && void 0 !== d ? d : (0, _.wt)(a),
                                        t = null !== (h = null === (u = R[a.toString()]) || void 0 === u ? void 0 : null === (c = u.description) || void 0 === c ? void 0 : c.toString()) && void 0 !== h ? h : '',
                                        i = n.title,
                                        s = x._o.has(a),
                                        r = x.Qn.includes(l),
                                        p = s ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : r ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
                                        m = M(O, e),
                                        f = M(O, t),
                                        E = M(O, i),
                                        g = null != p && M(O, p);
                                    if (!m && !f && !E && !g) return;
                                }
                                e.push(
                                    (0, i.jsx)(
                                        Z,
                                        {
                                            permission: l,
                                            roleIds: r,
                                            guild: p,
                                            specMap: R,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        l
                                    )
                                );
                            }
                        });
                    }),
                e
            );
        }, [p, R, m, b, L, g, O, t]);
    return null == h || null == m
        ? null
        : (0, i.jsxs)('div', {
              className: l()(N.container, r),
              children: [
                  (0, i.jsx)(T.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: d
                  }),
                  (0, i.jsx)(u.Scroller, {
                      className: A.permissionsGroupContainer,
                      children: (0, i.jsx)(u.FormItem, {
                          title: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
                          children: (0, i.jsxs)('div', {
                              className: A.permissionsItemContainer,
                              children: [
                                  (0, i.jsx)(u.SearchBar, {
                                      className: A.searchBar,
                                      query: j,
                                      placeholder: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
                                      onChange: U,
                                      onClear: k,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  w
                              ]
                          })
                      })
                  })
              ]
          });
}

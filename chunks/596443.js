n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(954955),
    o = n.n(a),
    c = n(399606),
    u = n(481060),
    d = n(605436),
    h = n(79712),
    m = n(285173),
    p = n(434404),
    f = n(422559),
    g = n(271383),
    C = n(430824),
    x = n(496675),
    v = n(594174),
    _ = n(233608),
    I = n(370595),
    E = n(351127),
    b = n(981631),
    S = n(388032),
    Z = n(194898),
    T = n(650464);
function N(e) {
    var t, n, r, a;
    let { permission: o, roleIds: g, guild: v, specMap: _, categoryTitle: I, userId: Z } = e,
        N = (0, c.e7)([C.Z], () => C.Z.getRoles(v.id)),
        j = b.Plq[o],
        A = null !== (r = null === (t = _[j.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== r ? r : (0, f.wt)(j),
        y = null !== (a = null === (n = _[j.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== a ? a : '',
        P = E._o.has(j),
        M = E.Qn.includes(o),
        R = g.length,
        L = (0, c.e7)([x.Z], () => x.Z.can(b.Plq.MANAGE_ROLES, v), [v]),
        k = l.useCallback(
            async (e) => {
                if (!!L) await p.Z.open(v.id, b.pNK.ROLES), await p.Z.selectRole(e);
            },
            [L, v.id]
        );
    return (0, i.jsxs)('div', {
        className: s()(T.permissionItemContainer, { [T.elevatedPermission]: P }),
        children: [
            (0, i.jsxs)('div', {
                className: T.permissionItemHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: T.permissionTitle,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: A
                            }),
                            null != I &&
                                (0, i.jsxs)('div', {
                                    className: T.permissionItemSubheader,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: I
                                        }),
                                        P &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: u.tokens.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)(u.Tooltip, {
                                                        text: S.intl.string(S.t.GZvXuL),
                                                        children: (e) =>
                                                            (0, i.jsxs)(u.Clickable, {
                                                                className: T.elevatedPermissionContainer,
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
                                                                        children: S.intl.string(S.t.k7Kqj4)
                                                                    })
                                                                ]
                                                            })
                                                    })
                                                ]
                                            }),
                                        !P &&
                                            M &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: u.tokens.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: T.elevatedPermissionContainer,
                                                        children: (0, i.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: S.intl.string(S.t.IfqUEB)
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
                        children: S.intl.format(S.t.KmJI4O, { roleCount: R })
                    })
                ]
            }),
            null != y &&
                (0, i.jsx)('div', {
                    className: T.permissionItemDescription,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: y
                    })
                }),
            (0, i.jsx)('div', {
                className: T.permissionItemRoleContainer,
                children: g.map((e) =>
                    (0, E.Ov)(e, Z)
                        ? (0, i.jsx)(
                              'div',
                              {
                                  className: T.roleTooltipItem,
                                  children: (0, i.jsx)('div', {
                                      className: T.roleChiplet,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-normal',
                                          children: S.intl.string(S.t.pclUFB)
                                      })
                                  })
                              },
                              e
                          )
                        : (0, i.jsx)(
                              u.Clickable,
                              {
                                  className: s()(T.roleTooltipItem, { [T.editable]: L && !(0, d.pM)(v.id, e) }),
                                  onClick: () => k(e),
                                  children: (0, i.jsx)(m.Z, {
                                      role: N[e],
                                      guildId: v.id,
                                      className: T.roleChiplet
                                  })
                              },
                              e
                          )
                )
            })
        ]
    });
}
function j(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function A(e) {
    let { userId: t, guildId: n, location: r, className: a, onNavigate: d } = e,
        h = (0, c.e7)([v.default], () => v.default.getUser(t), [t]),
        m = (0, c.e7)([C.Z], () => C.Z.getGuild(n), [n]),
        p = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        x = (0, E.B2)(t, n, E.pd),
        A = Object.keys(x).length,
        y = l.useMemo(() => (null != m ? _.Z.getGuildPermissionSpecMap(m) : null), [m]),
        P = l.useMemo(() => (null != m ? _.Z.generateGuildPermissionSpec(m) : null), [m]),
        [M, R] = l.useState(''),
        [L, k] = l.useState(''),
        O = l.useCallback(o()(k, 300), []),
        w = l.useCallback(
            (e) => {
                R(e), O(e);
            },
            [O]
        ),
        D = l.useCallback(() => {
            R(''), k('');
        }, []),
        U = l.useMemo(() => {
            if (null == m || null == y || null == p) return null;
            if (0 === A)
                return (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: S.intl.string(S.t.DEBGqK)
                });
            let e = [];
            return (
                null == P ||
                    P.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let r = l.flag,
                                s = E.pd.find((e) => b.Plq[e] === r);
                            if (null == s) return;
                            let a = x[s];
                            if (null != a) {
                                if (L.length > 0) {
                                    var o, c, u, d, h;
                                    let e = null !== (d = null === (o = y[r.toString()]) || void 0 === o ? void 0 : o.title) && void 0 !== d ? d : (0, f.wt)(r),
                                        t = null !== (h = null === (u = y[r.toString()]) || void 0 === u ? void 0 : null === (c = u.description) || void 0 === c ? void 0 : c.toString()) && void 0 !== h ? h : '',
                                        i = n.title,
                                        l = E._o.has(r),
                                        a = E.Qn.includes(s),
                                        m = l ? S.intl.string(S.t.k7Kqj4) : a ? S.intl.string(S.t.IfqUEB) : null,
                                        p = j(L, e),
                                        g = j(L, t),
                                        C = j(L, i),
                                        x = null != m && j(L, m);
                                    if (!p && !g && !C && !x) return;
                                }
                                e.push(
                                    (0, i.jsx)(
                                        N,
                                        {
                                            permission: s,
                                            roleIds: a,
                                            guild: m,
                                            specMap: y,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        s
                                    )
                                );
                            }
                        });
                    }),
                e
            );
        }, [m, y, p, A, P, x, L, t]);
    return null == h || null == p
        ? null
        : (0, i.jsxs)('div', {
              className: s()(Z.container, a),
              children: [
                  (0, i.jsx)(I.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: d
                  }),
                  (0, i.jsx)(u.Scroller, {
                      className: T.permissionsGroupContainer,
                      children: (0, i.jsx)(u.FormItem, {
                          title: S.intl.string(S.t.BBWnpq),
                          children: (0, i.jsxs)('div', {
                              className: T.permissionsItemContainer,
                              children: [
                                  (0, i.jsx)(u.SearchBar, {
                                      className: T.searchBar,
                                      query: M,
                                      placeholder: S.intl.string(S.t['yD9+dH']),
                                      onChange: w,
                                      onClear: D,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  U
                              ]
                          })
                      })
                  })
              ]
          });
}

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
    a = n.n(r),
    s = n(954955),
    o = n.n(s),
    c = n(399606),
    d = n(481060),
    u = n(605436),
    h = n(79712),
    p = n(285173),
    m = n(434404),
    f = n(422559),
    g = n(271383),
    C = n(430824),
    x = n(496675),
    _ = n(594174),
    v = n(233608),
    I = n(370595),
    E = n(351127),
    b = n(981631),
    N = n(388032),
    S = n(758570),
    Z = n(227893);
function T(e) {
    var t, n, r, s;
    let { permission: o, roleIds: g, guild: _, specMap: v, categoryTitle: I, userId: S } = e,
        T = (0, c.e7)([C.Z], () => C.Z.getRoles(_.id)),
        j = b.Plq[o],
        A = null !== (r = null === (t = v[j.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== r ? r : (0, f.wt)(j),
        y = null !== (s = null === (n = v[j.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== s ? s : '',
        P = E._o.has(j),
        M = E.Qn.includes(o),
        R = g.length,
        L = (0, c.e7)([x.Z], () => x.Z.can(b.Plq.MANAGE_ROLES, _), [_]),
        k = l.useCallback(
            async (e) => {
                if (!!L) await m.Z.open(_.id, b.pNK.ROLES), await m.Z.selectRole(e);
            },
            [L, _.id]
        );
    return (0, i.jsxs)('div', {
        className: a()(Z.permissionItemContainer, { [Z.elevatedPermission]: P }),
        children: [
            (0, i.jsxs)('div', {
                className: Z.permissionItemHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.permissionTitle,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: A
                            }),
                            null != I &&
                                (0, i.jsxs)('div', {
                                    className: Z.permissionItemSubheader,
                                    children: [
                                        (0, i.jsx)(d.Text, {
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
                                                        color: d.tokens.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)(d.Tooltip, {
                                                        text: N.intl.string(N.t.GZvXuL),
                                                        children: (e) =>
                                                            (0, i.jsxs)(d.Clickable, {
                                                                className: Z.elevatedPermissionContainer,
                                                                ...e,
                                                                children: [
                                                                    (0, i.jsx)(d.ShieldLockIcon, {
                                                                        size: 'custom',
                                                                        width: 12,
                                                                        height: 12,
                                                                        color: d.tokens.colors.TEXT_BRAND
                                                                    }),
                                                                    (0, i.jsx)(d.Text, {
                                                                        variant: 'text-xs/normal',
                                                                        color: 'text-brand',
                                                                        children: N.intl.string(N.t.k7Kqj4)
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
                                                        color: d.tokens.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: Z.elevatedPermissionContainer,
                                                        children: (0, i.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: N.intl.string(N.t.IfqUEB)
                                                        })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: N.intl.format(N.t.KmJI4O, { roleCount: R })
                    })
                ]
            }),
            null != y &&
                (0, i.jsx)('div', {
                    className: Z.permissionItemDescription,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: y
                    })
                }),
            (0, i.jsx)('div', {
                className: Z.permissionItemRoleContainer,
                children: g.map((e) =>
                    (0, E.Ov)(e, S)
                        ? (0, i.jsx)(
                              'div',
                              {
                                  className: Z.roleTooltipItem,
                                  children: (0, i.jsx)('div', {
                                      className: Z.roleChiplet,
                                      children: (0, i.jsx)(d.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-normal',
                                          children: N.intl.string(N.t.pclUFB)
                                      })
                                  })
                              },
                              e
                          )
                        : (0, i.jsx)(
                              d.Clickable,
                              {
                                  className: a()(Z.roleTooltipItem, { [Z.editable]: L && !(0, u.pM)(_.id, e) }),
                                  onClick: () => k(e),
                                  children: (0, i.jsx)(p.Z, {
                                      role: T[e],
                                      guildId: _.id,
                                      className: Z.roleChiplet
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
    let { userId: t, guildId: n, location: r, className: s, onNavigate: u } = e,
        h = (0, c.e7)([_.default], () => _.default.getUser(t), [t]),
        p = (0, c.e7)([C.Z], () => C.Z.getGuild(n), [n]),
        m = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        x = (0, E.B2)(t, n, E.pd),
        A = Object.keys(x).length,
        y = l.useMemo(() => (null != p ? v.Z.getGuildPermissionSpecMap(p) : null), [p]),
        P = l.useMemo(() => (null != p ? v.Z.generateGuildPermissionSpec(p) : null), [p]),
        [M, R] = l.useState(''),
        [L, k] = l.useState(''),
        O = l.useCallback(o()(k, 300), []),
        D = l.useCallback(
            (e) => {
                R(e), O(e);
            },
            [O]
        ),
        w = l.useCallback(() => {
            R(''), k('');
        }, []),
        B = l.useMemo(() => {
            if (null == p || null == y || null == m) return null;
            if (0 === A)
                return (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: N.intl.string(N.t.DEBGqK)
                });
            let e = [];
            return (
                null == P ||
                    P.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let r = l.flag,
                                a = E.pd.find((e) => b.Plq[e] === r);
                            if (null == a) return;
                            let s = x[a];
                            if (null != s) {
                                if (L.length > 0) {
                                    var o, c, d, u, h;
                                    let e = null !== (u = null === (o = y[r.toString()]) || void 0 === o ? void 0 : o.title) && void 0 !== u ? u : (0, f.wt)(r),
                                        t = null !== (h = null === (d = y[r.toString()]) || void 0 === d ? void 0 : null === (c = d.description) || void 0 === c ? void 0 : c.toString()) && void 0 !== h ? h : '',
                                        i = n.title,
                                        l = E._o.has(r),
                                        s = E.Qn.includes(a),
                                        p = l ? N.intl.string(N.t.k7Kqj4) : s ? N.intl.string(N.t.IfqUEB) : null,
                                        m = j(L, e),
                                        g = j(L, t),
                                        C = j(L, i),
                                        x = null != p && j(L, p);
                                    if (!m && !g && !C && !x) return;
                                }
                                e.push(
                                    (0, i.jsx)(
                                        T,
                                        {
                                            permission: a,
                                            roleIds: s,
                                            guild: p,
                                            specMap: y,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        a
                                    )
                                );
                            }
                        });
                    }),
                e
            );
        }, [p, y, m, A, P, x, L, t]);
    return null == h || null == m
        ? null
        : (0, i.jsxs)('div', {
              className: a()(S.container, s),
              children: [
                  (0, i.jsx)(I.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: u
                  }),
                  (0, i.jsx)(d.Scroller, {
                      className: Z.permissionsGroupContainer,
                      children: (0, i.jsx)(d.FormItem, {
                          title: N.intl.string(N.t.BBWnpq),
                          children: (0, i.jsxs)('div', {
                              className: Z.permissionsItemContainer,
                              children: [
                                  (0, i.jsx)(d.SearchBar, {
                                      className: Z.searchBar,
                                      query: M,
                                      placeholder: N.intl.string(N.t['yD9+dH']),
                                      onChange: D,
                                      onClear: w,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  B
                              ]
                          })
                      })
                  })
              ]
          });
}

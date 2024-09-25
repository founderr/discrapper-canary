n(653041);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(399606),
    o = n(481060),
    c = n(285173),
    u = n(422559),
    d = n(430824),
    h = n(233608),
    m = n(776767),
    p = n(351127),
    _ = n(50493),
    f = n(981631),
    E = n(689938),
    g = n(284609);
function C(e) {
    var t, n;
    let { permission: s, roleIds: a, guild: h, specMap: m } = e,
        _ = f.Plq[s],
        C = null !== (n = null === (t = m[_.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, u.wt)(_),
        I = p._o.has(_),
        T = (0, r.e7)([d.Z], () => d.Z.getRoles(h.id));
    return (0, i.jsx)(o.Tooltip, {
        'aria-label': E.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
        tooltipClassName: g.roleTooltipContainer,
        tooltipContentClassName: g.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: I ? E.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : E.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
                }),
                a.map((e) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: g.roleTooltipItem,
                            children: (0, i.jsx)(c.Z, {
                                role: T[e],
                                guildId: h.id
                            })
                        },
                        e
                    )
                )
            ]
        }),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(o.Clickable, {
                className: l()(g.permissionChiplet, { [g.elevatedPermission]: I }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    I &&
                        (0, i.jsx)(o.ShieldLockIcon, {
                            size: 'custom',
                            width: 16,
                            height: 16,
                            color: o.tokens.colors.TEXT_BRAND
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: C
                    })
                ]
            });
        }
    });
}
t.Z = s.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        a = (0, r.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        c = (0, p.B2)(t.userId, t.guildId, p.Qn),
        u = (0, p.B2)(t.userId, t.guildId, p.pd),
        I = Object.keys(c).length,
        T = Object.keys(u).length,
        x = s.useMemo(() => (null != a ? h.Z.getGuildPermissionSpecMap(a) : null), [a]),
        v = s.useMemo(() => (null != a ? h.Z.generateGuildPermissionSpec(a) : null), [a]),
        S = s.useMemo(() => {
            if (null == a || null == x) return null;
            if (0 === I)
                return (0, i.jsx)('div', {
                    className: l()(g.permissionChiplet, g.noModPerms),
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-positive',
                        children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
                    })
                });
            let e = [];
            return (
                null == v ||
                    v.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                s = p.pd.find((e) => f.Plq[e] === n);
                            if (null == s) return;
                            let l = c[s];
                            if (null != l)
                                e.push(
                                    (0, i.jsx)(
                                        C,
                                        {
                                            permission: s,
                                            roleIds: l,
                                            guild: a,
                                            specMap: x
                                        },
                                        s
                                    )
                                );
                        });
                    }),
                e
            );
        }, [a, I, c, v, x]);
    return null == a
        ? null
        : (0, i.jsx)(o.FormItem, {
              title: (0, i.jsxs)('div', {
                  className: g.headerContainer,
                  children: [
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
                      }),
                      (0, i.jsxs)(o.Clickable, {
                          className: g.viewAllPermissions,
                          onClick: () => n(_.k.PERMISSIONS),
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({ count: T })
                              }),
                              (0, i.jsx)(o.ChevronSmallRightIcon, {
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          ]
                      })
                  ]
              }),
              children: (0, i.jsx)(m.WM, {
                  children: (0, i.jsx)(m._2, {
                      description: (0, i.jsx)('div', {
                          className: g.permissionsContainer,
                          children: S
                      })
                  })
              })
          });
});

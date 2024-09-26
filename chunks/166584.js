n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(772848),
    l = n(924826),
    u = n(91192),
    c = n(442837),
    d = n(481060),
    _ = n(749210),
    E = n(434404),
    f = n(271383),
    h = n(430824),
    p = n(496675),
    m = n(259580),
    I = n(700785),
    T = n(785717),
    g = n(256226),
    S = n(314172),
    A = n(981631),
    v = n(689938),
    N = n(561145);
let O = 4,
    R = 268,
    C = 2,
    y = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + O : 0;
    };
function L(e) {
    let { user: t, currentUser: n, guild: r, guildMember: i, roles: c, highestRole: _, canManageRoles: E, onAddRole: f, onRemoveRole: h } = e,
        p = o.useRef({}),
        L = (e, t) => {
            null != t ? (p.current[e] = t) : delete p.current[e];
        },
        [b, D] = o.useState(c),
        [M, P] = o.useState(R),
        [U, w] = o.useState(!1),
        x = o.useRef(null),
        G = o.useRef(null);
    o.useLayoutEffect(() => {
        if (U) return;
        let e = y(x.current),
            t = y(G.current),
            n = [],
            r = R - e - t;
        for (let e = 0; e < C; e++) {
            let t = e === C - 1 ? r : R;
            for (let e = 0, r = n.length; r < c.length; r++) {
                let i = c[r],
                    a = p.current[i.id];
                if (null == a) continue;
                let o = Math.min(a.getBoundingClientRect().width, t);
                if (e + o > t) break;
                (e += o + O), n.push(i);
            }
        }
        D(n.length === b.length ? b : n), P(r);
    }, [c, b, U]);
    let k = o.useMemo(() => 'roles-'.concat((0, s.Z)()), []),
        B = (0, l.ZP)({
            id: k,
            isEnabled: !0,
            scrollToStart: A.Cyb,
            scrollToEnd: A.Cyb,
            wrap: !0
        }),
        F = c.length,
        Z = 0 === F ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({ numRoles: F }),
        V = (U ? c : b).map((e, i) => {
            var o;
            return (0, a.jsx)(
                g.Z,
                {
                    role: e,
                    guildId: r.id,
                    style: { maxWidth: U || i !== b.length - 1 ? R : M },
                    disableBorderColor: !0,
                    ref: (t) => L(e.id, t),
                    onRemove: () => h(e),
                    canRemove: E ? I.r6(r, n.id, _, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: H } = (0, T.KZ)(),
        Y = o.useCallback(() => {
            w(!0), H({ action: 'EXPAND_ROLES' });
        }, [H]),
        j = o.useCallback(() => {
            w(!1), H({ action: 'COLLAPSE_ROLES' });
        }, [H]);
    return (0, a.jsx)(u.bG, {
        navigator: B,
        children: (0, a.jsx)(u.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsxs)('div', {
                    className: N.root,
                    'aria-label': Z,
                    ref: t,
                    ...n,
                    children: [
                        V,
                        !U &&
                            b.length < c.length &&
                            (0, a.jsx)(d.TooltipContainer, {
                                text: v.Z.Messages.VIEW_ALL_ROLES,
                                children: (0, a.jsx)(d.Clickable, {
                                    innerRef: x,
                                    onClick: Y,
                                    className: N.expandButton,
                                    children: (0, a.jsx)(d.Text, {
                                        variant: 'text-xs/medium',
                                        children: '+'.concat(c.length - b.length)
                                    })
                                })
                            }),
                        U &&
                            (0, a.jsx)(d.TooltipContainer, {
                                text: v.Z.Messages.COLLAPSE_ROLES,
                                children: (0, a.jsx)(d.Clickable, {
                                    onClick: j,
                                    className: N.collapseButton,
                                    children: (0, a.jsx)(m.Z, {
                                        direction: m.Z.Directions.LEFT,
                                        width: 12,
                                        height: 12
                                    })
                                })
                            }),
                        E &&
                            null != i &&
                            (0, a.jsx)(S.Z, {
                                buttonRef: G,
                                guild: r,
                                guildMember: i,
                                numRoles: F,
                                highestRole: _,
                                onAddRole: f
                            })
                    ]
                });
            }
        })
    });
}
function b(e) {
    let { user: t, currentUser: n, guild: r } = e,
        { trackUserProfileAction: i } = (0, T.KZ)(),
        s = (0, c.e7)([f.ZP], () => f.ZP.getMember(r.id, t.id)),
        l = (0, c.e7)([h.Z], () => h.Z.getRoles(r.id)),
        u = null == s ? void 0 : s.roles,
        d = o.useMemo(
            () =>
                null == u || 0 === u.length
                    ? []
                    : Object.values(l)
                          .filter((e) => u.includes(e.id))
                          .sort((e, t) => {
                              var n, r;
                              let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                                  a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                              return i && !a ? 1 : !i && a ? -1 : 0;
                          }),
            [l, u]
        ),
        m = I.e9(r, n.id),
        [g] = (0, c.Wu)([p.Z], () => [p.Z.can(A.Plq.MANAGE_ROLES, r), null != r ? p.Z.getGuildVersion(r.id) : null]),
        S = o.useCallback(
            (e) => {
                var n, a;
                i({ action: 'REMOVE_ROLE' });
                let o = null !== (a = null == u ? void 0 : u.filter((t) => t !== e.id)) && void 0 !== a ? a : [];
                (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.Z.unassignGuildRoleConnection(r.id, e.id) : E.Z.updateMemberRoles(r.id, t.id, o, [], [e.id]);
            },
            [u, r.id, t.id, i]
        ),
        v = o.useCallback(
            (e) => {
                i({ action: 'ADD_ROLE' });
                let n = null != u ? u : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), E.Z.updateMemberRoles(r.id, t.id, n, [e], []);
            },
            [u, r.id, t.id, i]
        ),
        N = g && null != s;
    return 0 !== d.length || N
        ? (0, a.jsx)('div', {
              children: (0, a.jsx)(L, {
                  user: t,
                  currentUser: n,
                  guild: r,
                  guildMember: s,
                  roles: d,
                  highestRole: m,
                  canManageRoles: g,
                  onAddRole: v,
                  onRemoveRole: S
              })
          })
        : null;
}

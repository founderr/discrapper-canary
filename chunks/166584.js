n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(772848),
    s = n(924826),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(749210),
    d = n(434404),
    f = n(271383),
    _ = n(430824),
    h = n(496675),
    p = n(259580),
    m = n(700785),
    g = n(785717),
    E = n(256226),
    v = n(314172),
    I = n(981631),
    S = n(388032),
    b = n(649915);
let T = (e) => {
    if (null == e) return 0;
    let { width: t } = e.getBoundingClientRect();
    return t > 0 ? t + 4 : 0;
};
function y(e) {
    let { user: t, currentUser: n, guild: l, guildMember: c, roles: d, highestRole: f, canManageRoles: _, onAddRole: h, onRemoveRole: y } = e,
        A = i.useRef({}),
        N = (e, t) => {
            null != t ? (A.current[e] = t) : delete A.current[e];
        },
        [C, R] = i.useState(d),
        [O, D] = i.useState(268),
        [L, x] = i.useState(!1),
        w = i.useRef(null),
        M = i.useRef(null),
        P = i.useRef(0);
    i.useLayoutEffect(() => {
        P.current = 0;
    }, [d]),
        i.useLayoutEffect(() => {
            if (L) return;
            let e = T(w.current),
                t = T(M.current),
                n = [],
                r = 268 - e - t;
            for (let e = 0; e < 2; e++) {
                let t = 1 === e ? r : 268;
                for (let e = 0, r = n.length; r < d.length; r++) {
                    let i = d[r],
                        a = A.current[i.id];
                    if (null == a) {
                        0 === P.current && n.push(i);
                        continue;
                    }
                    let s = Math.min(a.getBoundingClientRect().width, t);
                    if (e + s > t) break;
                    (e += s + 4), n.push(i);
                }
            }
            R(n.length === C.length ? C : n), D(r), P.current++;
        }, [d, C, L]);
    let k = i.useMemo(() => 'roles-'.concat((0, a.Z)()), []),
        U = (0, s.ZP)({
            id: k,
            isEnabled: !0,
            scrollToStart: I.Cyb,
            scrollToEnd: I.Cyb,
            wrap: !0
        }),
        G = d.length,
        B = 0 === G ? S.intl.string(S.t['vR7M+/']) : S.intl.formatToPlainString(S.t.PCs0oq, { numRoles: G }),
        Z = (L ? d : C).map((e, i) => {
            var a;
            return (0, r.jsx)(
                E.Z,
                {
                    role: e,
                    guildId: l.id,
                    style: { maxWidth: L || i !== C.length - 1 ? 268 : O },
                    disableBorderColor: !0,
                    ref: (t) => N(e.id, t),
                    onRemove: () => y(e),
                    canRemove: _ ? m.r6(l, n.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: F } = (0, g.KZ)(),
        V = i.useCallback(() => {
            x(!0), F({ action: 'EXPAND_ROLES' });
        }, [F]),
        j = i.useCallback(() => {
            x(!1), F({ action: 'COLLAPSE_ROLES' });
        }, [F]);
    return (0, r.jsx)(o.bG, {
        navigator: U,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, r.jsxs)('div', {
                    className: b.root,
                    'aria-label': B,
                    ref: t,
                    ...n,
                    children: [
                        Z,
                        C.length < d.length
                            ? L
                                ? (0, r.jsx)(u.TooltipContainer, {
                                      text: S.intl.string(S.t.XnXtCg),
                                      children: (0, r.jsx)(u.Clickable, {
                                          onClick: j,
                                          className: b.collapseButton,
                                          children: (0, r.jsx)(p.Z, {
                                              direction: p.Z.Directions.LEFT,
                                              width: 12,
                                              height: 12
                                          })
                                      })
                                  })
                                : (0, r.jsx)(u.TooltipContainer, {
                                      text: S.intl.string(S.t.DY6n4u),
                                      children: (0, r.jsx)(u.Clickable, {
                                          innerRef: w,
                                          onClick: V,
                                          className: b.expandButton,
                                          children: (0, r.jsx)(u.Text, {
                                              variant: 'text-xs/medium',
                                              children: '+'.concat(d.length - C.length)
                                          })
                                      })
                                  })
                            : null,
                        _ && null != c
                            ? (0, r.jsx)(v.Z, {
                                  buttonRef: M,
                                  guild: l,
                                  guildMember: c,
                                  numRoles: G,
                                  highestRole: f,
                                  onAddRole: h
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function A(e) {
    let { user: t, currentUser: n, guild: a } = e,
        { trackUserProfileAction: s } = (0, g.KZ)(),
        o = (0, l.e7)([f.ZP], () => f.ZP.getMember(a.id, t.id)),
        u = (0, l.e7)([_.Z], () => _.Z.getRoles(a.id)),
        p = null == o ? void 0 : o.roles,
        E = i.useMemo(
            () =>
                null == p || 0 === p.length
                    ? []
                    : Object.values(u)
                          .filter((e) => p.includes(e.id))
                          .sort((e, t) => {
                              var n, r;
                              let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                                  a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                              return i && !a ? 1 : !i && a ? -1 : 0;
                          }),
            [u, p]
        ),
        v = m.e9(a, n.id),
        [S] = (0, l.Wu)([h.Z], () => [h.Z.can(I.Plq.MANAGE_ROLES, a), null != a ? h.Z.getGuildVersion(a.id) : null]),
        b = i.useCallback(
            (e) => {
                var n, r;
                s({ action: 'REMOVE_ROLE' });
                let i = null !== (r = null == p ? void 0 : p.filter((t) => t !== e.id)) && void 0 !== r ? r : [];
                (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? c.Z.unassignGuildRoleConnection(a.id, e.id) : d.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
            },
            [p, a.id, t.id, s]
        ),
        T = i.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let n = null != p ? p : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), d.Z.updateMemberRoles(a.id, t.id, n, [e], []);
            },
            [p, a.id, t.id, s]
        ),
        A = S && null != o;
    return 0 !== E.length || A
        ? (0, r.jsx)(y, {
              user: t,
              currentUser: n,
              guild: a,
              guildMember: o,
              roles: E,
              highestRole: v,
              canManageRoles: S,
              onAddRole: T,
              onRemoveRole: b
          })
        : null;
}

n.d(t, {
    Z: function () {
        return y;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(512722), o = n.n(a), s = n(772848), l = n(924826), u = n(91192), c = n(442837), d = n(481060), _ = n(749210), E = n(112724), f = n(434404), h = n(271383), p = n(430824), m = n(496675), I = n(259580), T = n(700785), g = n(630249), S = n(785717), A = n(256226), N = n(314172), v = n(981631), O = n(689938), R = n(228892);
let C = (0, E.Z)(function (e) {
    let {
        user: t,
        currentUser: n,
        guild: a,
        guildMember: _,
        userRoles: E,
        highestRole: f,
        canManageRoles: h,
        width: m,
        onAddRole: C,
        onRemoveRole: y,
        onOpenProfile: D
    } = e;
    o()(null != m, 'Unexpected null width');
    let L = i.useRef({}), b = (e, t) => {
            null != t ? L.current[e] = t : delete L.current[e];
        }, M = (0, c.e7)([p.Z], () => p.Z.getRoles(a.id)), [P, U] = i.useState(null), [w, x] = i.useState(!1), G = i.useMemo(() => {
            let e = Object.values(M).filter(e => E.includes(e.id)).sort((e, t) => {
                var n, r;
                let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null, a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                return i && !a ? 1 : !i && a ? -1 : 0;
            });
            return null == P || w ? e : e.slice(0, P);
        }, [
            M,
            P,
            w,
            E
        ]), [k, B] = i.useState(m), F = E.length > G.length, V = h && null != _, H = i.useRef(null), Z = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n, r, i, a, o, s;
        let l = null !== (i = null === (t = H.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.width) && void 0 !== i ? i : 0, u = null !== (a = null === (r = Z.current) || void 0 === r ? void 0 : null === (n = r.getBoundingClientRect()) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0, c = m - (l > 0 ? l + 4 : 0) - (u > 0 ? u + 4 : 0), d = 0;
        for (let e = 0; e < 2; e++) {
            let t = 1 === e, n = 0;
            for (let e = d; e < G.length; e++) {
                let r = G[e], i = L.current[r.id];
                if (null == i)
                    continue;
                let a = null !== (s = null === (o = i.getBoundingClientRect()) || void 0 === o ? void 0 : o.width) && void 0 !== s ? s : 0;
                if (n > 0 && !t && n + a > m || n > 0 && t && n + a > c)
                    break;
                n += a + 4, d++;
            }
        }
        U(d === E.length ? null : d), B(c);
    }, [
        m,
        G,
        E
    ]);
    let Y = i.useMemo(() => 'roles-'.concat((0, s.Z)()), []), j = (0, l.ZP)({
            id: Y,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0
        }), W = 0 === E.length ? O.Z.Messages.ROLE_LIST_EMPTY : O.Z.Messages.ROLES_LIST.format({ numRoles: E.length }), K = G.map((e, i) => {
            var o;
            return (0, r.jsx)(A.Z, {
                role: e,
                guildId: a.id,
                style: { maxWidth: i === G.length - 1 ? k : m },
                disableBorderColor: !0,
                ref: t => b(e.id, t),
                onRemove: () => y(e),
                canRemove: h ? T.r6(a, n.id, f, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && t.id === n.id
            }, e.id);
        }), {expandRolesInlineEnabled: z} = (0, g.L)({ location: 'BiteSizeProfileMemberRolesListSection' }), {trackUserProfileAction: q} = (0, S.KZ)(), Q = i.useCallback(() => {
            x(!0), q({ action: 'EXPAND_ROLES' });
        }, [q]), X = i.useCallback(() => {
            x(!1), q({ action: 'COLLAPSE_ROLES' });
        }, [q]);
    return (0, r.jsx)(u.bG, {
        navigator: j,
        children: (0, r.jsx)(u.SJ, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, r.jsxs)('div', {
                    className: R.root,
                    'aria-label': W,
                    ref: t,
                    ...n,
                    children: [
                        K,
                        F && (0, r.jsx)(d.TooltipContainer, {
                            text: O.Z.Messages.VIEW_ALL_ROLES,
                            children: (0, r.jsx)(d.Clickable, {
                                innerRef: H,
                                onClick: z ? Q : D,
                                className: R.showMoreButton,
                                children: (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    children: '+'.concat(E.length - G.length)
                                })
                            })
                        }),
                        w && (0, r.jsx)(d.TooltipContainer, {
                            text: O.Z.Messages.COLLAPSE_ROLES,
                            children: (0, r.jsx)(d.Clickable, {
                                onClick: X,
                                className: R.collapseButton,
                                children: (0, r.jsx)(I.Z, {
                                    direction: I.Z.Directions.LEFT,
                                    width: 12,
                                    height: 12
                                })
                            })
                        }),
                        V && (0, r.jsx)(N.Z, {
                            variant: E.length > 0 ? 'icon' : 'text',
                            buttonRef: Z,
                            guild: a,
                            guildMember: _,
                            highestRole: f,
                            onAddRole: C
                        })
                    ]
                });
            }
        })
    });
});
function y(e) {
    let {
            user: t,
            currentUser: n,
            guild: a,
            onOpenProfile: o
        } = e, {trackUserProfileAction: s} = (0, S.KZ)(), l = (0, c.e7)([h.ZP], () => h.ZP.getMember(a.id, t.id)), u = null == l ? void 0 : l.roles, d = null == u || 0 === u.length, E = T.e9(a, n.id), [p] = (0, c.Wu)([m.Z], () => [
            m.Z.can(v.Plq.MANAGE_ROLES, a),
            null != a ? m.Z.getGuildVersion(a.id) : null
        ]), I = i.useCallback(e => {
            var n, r;
            s({ action: 'REMOVE_ROLE' });
            let i = null !== (r = null == u ? void 0 : u.filter(t => t !== e.id)) && void 0 !== r ? r : [];
            (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.Z.unassignGuildRoleConnection(a.id, e.id) : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
        }, [
            u,
            a.id,
            t.id,
            s
        ]), g = i.useCallback(e => {
            s({ action: 'ADD_ROLE' });
            let n = null != u ? u : [];
            -1 === n.indexOf(e) && (n = n.concat([e])), f.Z.updateMemberRoles(a.id, t.id, n, [e], []);
        }, [
            u,
            a.id,
            t.id,
            s
        ]);
    return d && !p ? null : (0, r.jsx)('div', {
        children: (0, r.jsx)(C, {
            user: t,
            currentUser: n,
            guild: a,
            guildMember: l,
            userRoles: null != u ? u : [],
            highestRole: E,
            canManageRoles: p,
            onAddRole: g,
            onRemoveRole: I,
            onOpenProfile: o
        })
    });
}

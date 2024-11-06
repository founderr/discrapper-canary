n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(367907),
    d = n(605436),
    u = n(228643),
    m = n(496675),
    h = n(626135),
    g = n(823379),
    x = n(243730),
    p = n(946724),
    f = n(999382),
    C = n(130341),
    I = n(981975),
    _ = n(660962),
    N = n(442182),
    v = n(322816),
    T = n(266665),
    j = n(203377),
    S = n(981631),
    b = n(77473);
function E(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: E, setSelectedSection: R } = e,
        Z = (0, a.e7)([p.Z], () => p.Z.guild, []);
    s()(null != Z, 'guildId cannot be null here');
    let { role: A, permissionSearchQuery: L } = (0, a.cj)(
        [p.Z],
        () => ({
            role: p.Z.getRole(n),
            permissionSearchQuery: p.Z.getPermissionSearchQuery()
        }),
        [n]
    );
    r.useEffect(() => {
        null == A && l(null);
    }, [A, l]);
    let y = (0, a.e7)([m.Z], () => m.Z.getHighestRole(Z), [Z]),
        D = (0, a.e7)([m.Z], () => !m.Z.isRoleHigher(Z, y, A)),
        O = r.useRef(null),
        M = (0, a.e7)([f.Z], () => f.Z.getProps().integrations);
    if (
        (r.useEffect(() => {
            var e, t;
            let i = (0, C.UT)(E),
                r = null !== (t = null === (e = x.Z.getRoleMemberCount(Z.id)) || void 0 === e ? void 0 : e[n]) && void 0 !== t ? t : 0;
            h.default.track(S.rMx.ROLE_PAGE_VIEWED, {
                tab_opened: i,
                is_everyone: (0, d.pM)(Z.id, n),
                role_id: n,
                role_mentionable: null == A ? void 0 : A.mentionable,
                role_hoist: null == A ? void 0 : A.hoist,
                role_permissions: null == A ? void 0 : A.permissions.toString(),
                role_num_members: r,
                ...(0, c.hH)(Z.id)
            });
        }, [E, Z.id, null == A ? void 0 : A.id]),
        r.useEffect(() => {
            if ((null == A ? void 0 : A.id) != null) (0, u.sE)(Z.id, A.id);
        }, [Z.id, null == A ? void 0 : A.id]),
        null == A)
    )
        return null;
    switch (E) {
        case j.ZI.DISPLAY:
            t = (0, i.jsx)(_.ZP, {
                guild: Z,
                role: A,
                locked: D,
                highestRole: y,
                setSelectedSection: R
            });
            break;
        case j.ZI.PERMISSIONS:
            t = (0, i.jsx)(v.ZP, {
                guild: Z,
                role: A,
                locked: D,
                setSelectedSection: R,
                initialSearchQuery: L
            });
            break;
        case j.ZI.VERIFICATIONS:
            t = (0, i.jsx)(I.Z, {
                guild: Z,
                role: A,
                locked: D,
                setSelectedSection: R,
                integrations: null != M ? M : void 0
            });
            break;
        case j.ZI.MEMBERS:
            t = (0, i.jsx)(N.ZP, {
                guild: Z,
                role: A,
                locked: D,
                setSelectedSection: R
            });
            break;
        default:
            (0, g.vE)(E);
    }
    return (0, i.jsxs)(o.FormSection, {
        className: b.page,
        children: [
            (0, i.jsx)(T.Z, {
                guild: Z,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: R
            }),
            (0, i.jsx)('div', {
                className: b.contentContainer,
                ref: O,
                children: (0, i.jsx)(o.FocusRingScope, {
                    containerRef: O,
                    children: t
                })
            })
        ]
    });
}

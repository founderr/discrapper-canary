n.d(t, {
    Z: function () {
        return E;
    },
    _: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(749210),
    c = n(852860),
    d = n(605436),
    u = n(650774),
    m = n(823379),
    h = n(434404),
    g = n(764260),
    x = n(946724),
    p = n(999382),
    f = n(130341),
    C = n(853813),
    I = n(163249),
    _ = n(150689),
    N = n(203377),
    v = n(981631);
function T(e) {
    h.Z.selectRole(e);
}
let j = () => {
    let { guild: e } = (0, a.cj)([p.Z], () => p.Z.getProps()),
        t = (0, a.e7)([x.Z], () => x.Z.formState),
        n = (0, a.e7)([x.Z], () => x.Z.errorMessage);
    return (0, i.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = x.Z.editedRoleIds.map((e) => x.Z.getRole(e)).filter(m.lm),
                i = x.Z.getSortDeltas(),
                r = null,
                l = null;
            x.Z.hasRoleConfigurationChanges && ((l = x.Z.editedRoleIdsForConfigurations), (r = x.Z.getEditedRoleConnectionConfigurationsMap())), (0, g.Gf)(t, n, i, l, r);
        },
        submitting: t === v.QZA.SUBMITTING,
        onReset: g.S1
    });
};
function E(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cj)(
            [x.Z],
            () => ({
                guild: x.Z.guild,
                roles: x.Z.roles
            }),
            []
        );
    s()(null != n, 'Guild cannot be null here');
    let c = r.useMemo(() => l.find((e) => (0, d.pM)(n.id, e.id)), [l, n]);
    s()(null != c, 'Guild must have an everyone role');
    let m = r.useMemo(() => l.filter((e) => !(0, d.pM)(n.id, e.id)), [l, n]),
        h = (0, a.e7)([p.Z], () => p.Z.getSelectedRoleId()),
        [g, v] = r.useState(m.length > 0);
    r.useEffect(() => {
        v(g || m.length > 0);
    }, [g, m.length]),
        r.useEffect(() => {
            let e = u.Z.getMemberCount(n.id);
            null != e && e <= f.cm && o.Z.requestMembers(n.id, '', 0, !1);
        }, []);
    let [j, E] = r.useState(N.ZI.DISPLAY);
    return (r.useEffect(() => {
        null == h && E(N.ZI.DISPLAY);
    }, [h]),
    null != h)
        ? (0, i.jsx)(C.Z, {
              editRoleId: h,
              setEditRoleId: T,
              selectedSection: j,
              setSelectedSection: E
          })
        : g
          ? (0, i.jsx)(_.Z, {
                setEditRoleId: T,
                guild: n,
                everyoneRole: c,
                otherRoles: m,
                setSelectedSection: E,
                refToScroller: t
            })
          : (0, i.jsx)(I.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: T
            });
}

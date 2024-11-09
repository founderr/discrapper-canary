t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120),
    t(724458),
    t(653041);
var i = t(200651),
    r = t(192379),
    l = t(658722),
    o = t.n(l),
    u = t(392711),
    a = t.n(u),
    s = t(149765),
    c = t(442837),
    d = t(481060),
    f = t(271383),
    p = t(430824),
    _ = t(594174),
    m = t(700785),
    g = t(709054),
    E = t(962086),
    h = t(160404),
    I = t(225675),
    S = t(981631),
    v = t(388032),
    C = t(679537);
function T(e) {
    var n;
    return (0, i.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function N(e) {
    let { guildId: n } = e,
        t = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
        l = (0, c.e7)([p.Z], () => p.Z.getGuild(n)),
        u = (0, c.e7)([p.Z], () => p.Z.getRoles(n)),
        { impersonateType: N, viewingRoles: b } = (0, c.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n)
        })),
        A = N === I.z.SERVER_SHOP,
        O = (0, c.e7)([f.ZP], () => (null != t ? f.ZP.getTrueMember(n, t.id) : null)),
        [P, R] = (0, d.useMultiSelect)(null == b ? [] : g.default.keys(b)),
        x = r.useRef(l);
    r.useEffect(() => {
        let e = {},
            n = x.current;
        if (null != n && null != N) {
            for (let n of P) {
                let t = u[n];
                null != t && (e[n] = t);
            }
            (0, E.Zm)(n.id, {
                type: N,
                roles: e
            });
        }
    }, [P, N, u]);
    let L =
            null != l && null != t && null != O
                ? a()(u)
                      .filter((e) => -1 !== O.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        y = r.useMemo(
            () =>
                null != l && null != t
                    ? Object.values(u)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var n;
                              return !A || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == L ? void 0 : L.id) === e.id || m.r6(l, t.id, L, e))
                    : [],
            [l, t, A, L, u]
        );
    if (null == t || null == l || null == O) return null;
    let M = {};
    return (O.roles.forEach((e) => {
        let n = u[e];
        null != n && (M[n.id] = n);
    }),
    s.e$(
        m.I0({
            forceRoles: M,
            context: l
        }),
        s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES)
    ) || l.isOwner(t.id))
        ? (0, i.jsx)('div', {
              className: C.container,
              children: (0, i.jsx)(d.Combobox, {
                  placeholder: v.intl.string(v.t.Sojqsr),
                  value: P,
                  onChange: R,
                  autoFocus: !0,
                  children: (e) => {
                      let n = y.reduce(
                              (n, t) => (
                                  o()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, i.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: t.id,
                                                  children: [(0, i.jsx)(d.ComboboxItem.Label, { children: T(t) }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
                                              },
                                              t.id
                                          )
                                      ),
                                  n
                              ),
                              []
                          ),
                          t = u[l.getEveryoneRoleId()];
                      return (
                          null != t &&
                              n.push(
                                  (0, i.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: t.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(d.ComboboxItem.Label, { children: T(t) }), (0, i.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      t.id
                                  )
                              ),
                          n
                      );
                  }
              })
          })
        : (0, i.jsx)(d.Text, {
              variant: 'text-md/medium',
              children: v.intl.string(v.t.MNSTbW)
          });
}

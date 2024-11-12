n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(658722),
    o = n.n(l),
    u = n(392711),
    a = n.n(u),
    s = n(149765),
    c = n(442837),
    d = n(481060),
    f = n(271383),
    p = n(430824),
    _ = n(594174),
    E = n(700785),
    g = n(709054),
    m = n(962086),
    h = n(160404),
    S = n(225675),
    I = n(981631),
    v = n(388032),
    C = n(679537);
function T(e) {
    var t;
    return (0, i.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function N(e) {
    let { guildId: t } = e,
        n = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
        l = (0, c.e7)([p.Z], () => p.Z.getGuild(t)),
        u = (0, c.e7)([p.Z], () => p.Z.getRoles(t)),
        { impersonateType: N, viewingRoles: b } = (0, c.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(t),
            viewingRoles: h.Z.getViewingRoles(t)
        })),
        A = N === S.z.SERVER_SHOP,
        O = (0, c.e7)([f.ZP], () => (null != n ? f.ZP.getTrueMember(t, n.id) : null)),
        [L, R] = (0, d.useMultiSelect)(null == b ? [] : g.default.keys(b)),
        P = r.useRef(l);
    r.useEffect(() => {
        let e = {},
            t = P.current;
        if (null != t && null != N) {
            for (let t of L) {
                let n = u[t];
                null != n && (e[t] = n);
            }
            (0, m.Zm)(t.id, {
                type: N,
                roles: e
            });
        }
    }, [L, N, u]);
    let y =
            null != l && null != n && null != O
                ? a()(u)
                      .filter((e) => -1 !== O.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        M = r.useMemo(
            () =>
                null != l && null != n
                    ? Object.values(u)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var t;
                              return !A || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == y ? void 0 : y.id) === e.id || E.r6(l, n.id, y, e))
                    : [],
            [l, n, A, y, u]
        );
    if (null == n || null == l || null == O) return null;
    let x = {};
    return (O.roles.forEach((e) => {
        let t = u[e];
        null != t && (x[t.id] = t);
    }),
    s.e$(
        E.I0({
            forceRoles: x,
            context: l
        }),
        s.$e(I.Plq.MANAGE_GUILD, I.Plq.MANAGE_ROLES)
    ) || l.isOwner(n.id))
        ? (0, i.jsx)('div', {
              className: C.container,
              children: (0, i.jsx)(d.Combobox, {
                  placeholder: v.intl.string(v.t.Sojqsr),
                  value: L,
                  onChange: R,
                  autoFocus: !0,
                  children: (e) => {
                      let t = M.reduce(
                              (t, n) => (
                                  o()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, i.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: n.id,
                                                  children: [(0, i.jsx)(d.ComboboxItem.Label, { children: T(n) }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = u[l.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, i.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(d.ComboboxItem.Label, { children: T(n) }), (0, i.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, i.jsx)(d.Text, {
              variant: 'text-md/medium',
              children: v.intl.string(v.t.MNSTbW)
          });
}

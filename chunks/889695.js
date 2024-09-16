t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(47120),
    t(724458),
    t(653041);
var i = t(735250),
    r = t(470079),
    l = t(658722),
    o = t.n(l),
    u = t(392711),
    s = t.n(u),
    a = t(149765),
    c = t(442837),
    d = t(481060),
    _ = t(271383),
    E = t(430824),
    f = t(594174),
    I = t(700785),
    S = t(709054),
    T = t(962086),
    C = t(160404),
    p = t(225675),
    N = t(981631),
    A = t(689938),
    g = t(679537);
function m(e) {
    var n;
    return (0, i.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function L(e) {
    let { guildId: n } = e,
        t = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        l = (0, c.e7)([E.Z], () => E.Z.getGuild(n)),
        u = (0, c.e7)([E.Z], () => E.Z.getRoles(n)),
        { impersonateType: L, viewingRoles: O } = (0, c.cj)([C.Z], () => ({
            impersonateType: C.Z.getImpersonateType(n),
            viewingRoles: C.Z.getViewingRoles(n)
        })),
        R = L === p.z.SERVER_SHOP,
        h = (0, c.e7)([_.ZP], () => (null != t ? _.ZP.getTrueMember(n, t.id) : null)),
        [v, M] = (0, d.useMultiSelect)(null == O ? [] : S.default.keys(O)),
        D = r.useRef(l);
    r.useEffect(() => {
        let e = {},
            n = D.current;
        if (null != n && null != L) {
            for (let n of v) {
                let t = u[n];
                null != t && (e[n] = t);
            }
            (0, T.Zm)(n.id, {
                type: L,
                roles: e
            });
        }
    }, [v, L, u]);
    let U =
            null != l && null != t && null != h
                ? s()(u)
                      .filter((e) => -1 !== h.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        Z = r.useMemo(
            () =>
                null != l && null != t
                    ? Object.values(u)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var n;
                              return !R || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == U ? void 0 : U.id) === e.id || I.r6(l, t.id, U, e))
                    : [],
            [l, t, R, U, u]
        );
    if (null == t || null == l || null == h) return null;
    let P = {};
    return (h.roles.forEach((e) => {
        let n = u[e];
        null != n && (P[n.id] = n);
    }),
    a.e$(
        I.I0({
            forceRoles: P,
            context: l
        }),
        a.$e(N.Plq.MANAGE_GUILD, N.Plq.MANAGE_ROLES)
    ) || l.isOwner(t.id))
        ? (0, i.jsx)('div', {
              className: g.container,
              children: (0, i.jsx)(d.Combobox, {
                  placeholder: A.Z.Messages.SEARCH_ROLES,
                  value: v,
                  onChange: M,
                  autoFocus: !0,
                  children: (e) => {
                      let n = Z.reduce(
                              (n, t) => (
                                  o()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, i.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: t.id,
                                                  children: [(0, i.jsx)(d.ComboboxItem.Label, { children: m(t) }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
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
                                          children: [(0, i.jsx)(d.ComboboxItem.Label, { children: m(t) }), (0, i.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
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
              children: A.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
          });
}

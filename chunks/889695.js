n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var r = n(735250),
    i = n(470079),
    o = n(658722),
    u = n.n(o),
    l = n(392711),
    s = n.n(l),
    a = n(149765),
    c = n(442837),
    d = n(481060),
    _ = n(271383),
    E = n(430824),
    f = n(594174),
    I = n(700785),
    S = n(709054),
    T = n(962086),
    C = n(160404),
    p = n(225675),
    N = n(981631),
    O = n(689938),
    g = n(679537);
function m(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function R(e) {
    let { guildId: t } = e,
        n = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        o = (0, c.e7)([E.Z], () => E.Z.getGuild(t)),
        l = (0, c.e7)([E.Z], () => E.Z.getRoles(t)),
        { impersonateType: R, viewingRoles: h } = (0, c.cj)([C.Z], () => ({
            impersonateType: C.Z.getImpersonateType(t),
            viewingRoles: C.Z.getViewingRoles(t)
        })),
        A = R === p.z.SERVER_SHOP,
        M = (0, c.e7)([_.ZP], () => (null != n ? _.ZP.getTrueMember(t, n.id) : null)),
        [L, P] = (0, d.useMultiSelect)(null == h ? [] : S.default.keys(h)),
        D = i.useRef(o);
    i.useEffect(() => {
        let e = {},
            t = D.current;
        if (null != t && null != R) {
            for (let t of L) {
                let n = l[t];
                null != n && (e[t] = n);
            }
            (0, T.Zm)(t.id, {
                type: R,
                roles: e
            });
        }
    }, [L, R, l]);
    let U =
            null != o && null != n && null != M
                ? s()(l)
                      .filter((e) => -1 !== M.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        v = i.useMemo(
            () =>
                null != o && null != n
                    ? Object.values(l)
                          .filter((e) => e.id !== o.id)
                          .filter((e) => {
                              var t;
                              return !A || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == U ? void 0 : U.id) === e.id || I.r6(o, n.id, U, e))
                    : [],
            [o, n, A, U, l]
        );
    if (null == n || null == o || null == M) return null;
    let b = {};
    return (M.roles.forEach((e) => {
        let t = l[e];
        null != t && (b[t.id] = t);
    }),
    a.e$(
        I.I0({
            forceRoles: b,
            context: o
        }),
        a.$e(N.Plq.MANAGE_GUILD, N.Plq.MANAGE_ROLES)
    ) || o.isOwner(n.id))
        ? (0, r.jsx)('div', {
              className: g.container,
              children: (0, r.jsx)(d.Combobox, {
                  placeholder: O.Z.Messages.SEARCH_ROLES,
                  value: L,
                  onChange: P,
                  autoFocus: !0,
                  children: (e) => {
                      let t = v.reduce(
                              (t, n) => (
                                  u()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(d.ComboboxItem.Label, { children: m(n) }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = l[o.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.ComboboxItem.Label, { children: m(n) }), (0, r.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, r.jsx)(d.Text, {
              variant: 'text-md/medium',
              children: O.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
          });
}

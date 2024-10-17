t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120),
    t(724458),
    t(653041);
var r = t(735250),
    i = t(470079),
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
    p = t(962086),
    T = t(160404),
    C = t(225675),
    g = t(981631),
    N = t(689938),
    m = t(679537);
function A(e) {
    var n;
    return (0, r.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function h(e) {
    let { guildId: n } = e,
        t = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        l = (0, c.e7)([E.Z], () => E.Z.getGuild(n)),
        u = (0, c.e7)([E.Z], () => E.Z.getRoles(n)),
        { impersonateType: h, viewingRoles: v } = (0, c.cj)([T.Z], () => ({
            impersonateType: T.Z.getImpersonateType(n),
            viewingRoles: T.Z.getViewingRoles(n)
        })),
        L = h === C.z.SERVER_SHOP,
        O = (0, c.e7)([_.ZP], () => (null != t ? _.ZP.getTrueMember(n, t.id) : null)),
        [R, M] = (0, d.useMultiSelect)(null == v ? [] : S.default.keys(v)),
        D = i.useRef(l);
    i.useEffect(() => {
        let e = {},
            n = D.current;
        if (null != n && null != h) {
            for (let n of R) {
                let t = u[n];
                null != t && (e[n] = t);
            }
            (0, p.Zm)(n.id, {
                type: h,
                roles: e
            });
        }
    }, [R, h, u]);
    let U =
            null != l && null != t && null != O
                ? s()(u)
                      .filter((e) => -1 !== O.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        Z = i.useMemo(
            () =>
                null != l && null != t
                    ? Object.values(u)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var n;
                              return !L || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == U ? void 0 : U.id) === e.id || I.r6(l, t.id, U, e))
                    : [],
            [l, t, L, U, u]
        );
    if (null == t || null == l || null == O) return null;
    let b = {};
    return (O.roles.forEach((e) => {
        let n = u[e];
        null != n && (b[n.id] = n);
    }),
    a.e$(
        I.I0({
            forceRoles: b,
            context: l
        }),
        a.$e(g.Plq.MANAGE_GUILD, g.Plq.MANAGE_ROLES)
    ) || l.isOwner(t.id))
        ? (0, r.jsx)('div', {
              className: m.container,
              children: (0, r.jsx)(d.Combobox, {
                  placeholder: N.Z.Messages.SEARCH_ROLES,
                  value: R,
                  onChange: M,
                  autoFocus: !0,
                  children: (e) => {
                      let n = Z.reduce(
                              (n, t) => (
                                  o()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, r.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: t.id,
                                                  children: [(0, r.jsx)(d.ComboboxItem.Label, { children: A(t) }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
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
                                  (0, r.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: t.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.ComboboxItem.Label, { children: A(t) }), (0, r.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      t.id
                                  )
                              ),
                          n
                      );
                  }
              })
          })
        : (0, r.jsx)(d.Text, {
              variant: 'text-md/medium',
              children: N.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
          });
}

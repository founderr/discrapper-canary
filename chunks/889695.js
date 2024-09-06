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
    o = t(658722),
    l = t.n(o),
    u = t(392711),
    s = t.n(u),
    a = t(149765),
    c = t(442837),
    d = t(481060),
    _ = t(271383),
    f = t(430824),
    E = t(594174),
    I = t(700785),
    S = t(709054),
    g = t(962086),
    T = t(160404),
    p = t(225675),
    C = t(981631),
    m = t(689938),
    A = t(44033);
function N(e) {
    var n;
    return (0, r.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function h(e) {
    let { guildId: n } = e,
        t = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        o = (0, c.e7)([f.Z], () => f.Z.getGuild(n)),
        u = (0, c.e7)([f.Z], () => f.Z.getRoles(n)),
        { impersonateType: h, viewingRoles: L } = (0, c.cj)([T.Z], () => ({
            impersonateType: T.Z.getImpersonateType(n),
            viewingRoles: T.Z.getViewingRoles(n)
        })),
        O = h === p.z.SERVER_SHOP,
        R = (0, c.e7)([_.ZP], () => (null != t ? _.ZP.getTrueMember(n, t.id) : null)),
        [v, M] = (0, d.useMultiSelect)(null == L ? [] : S.default.keys(L)),
        b = i.useRef(o);
    i.useEffect(() => {
        let e = {},
            n = b.current;
        if (null != n && null != h) {
            for (let n of v) {
                let t = u[n];
                null != t && (e[n] = t);
            }
            (0, g.Zm)(n.id, {
                type: h,
                roles: e
            });
        }
    }, [v, h, u]);
    let D =
            null != o && null != t && null != R
                ? s()(u)
                      .filter((e) => -1 !== R.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        U = i.useMemo(
            () =>
                null != o && null != t
                    ? Object.values(u)
                          .filter((e) => e.id !== o.id)
                          .filter((e) => {
                              var n;
                              return !O || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == D ? void 0 : D.id) === e.id || I.r6(o, t.id, D, e))
                    : [],
            [o, t, O, D, u]
        );
    if (null == t || null == o || null == R) return null;
    let Z = {};
    return (R.roles.forEach((e) => {
        let n = u[e];
        null != n && (Z[n.id] = n);
    }),
    a.e$(
        I.I0({
            forceRoles: Z,
            context: o
        }),
        a.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)
    ) || o.isOwner(t.id))
        ? (0, r.jsx)('div', {
              className: A.container,
              children: (0, r.jsx)(d.Combobox, {
                  placeholder: m.Z.Messages.SEARCH_ROLES,
                  value: v,
                  onChange: M,
                  autoFocus: !0,
                  children: (e) => {
                      let n = U.reduce(
                              (n, t) => (
                                  l()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, r.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: t.id,
                                                  children: [(0, r.jsx)(d.ComboboxItem.Label, { children: N(t) }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
                                              },
                                              t.id
                                          )
                                      ),
                                  n
                              ),
                              []
                          ),
                          t = u[o.getEveryoneRoleId()];
                      return (
                          null != t &&
                              n.push(
                                  (0, r.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: t.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.ComboboxItem.Label, { children: N(t) }), (0, r.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
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
              children: m.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
          });
}

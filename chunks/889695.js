n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(735250),
    s = n(470079),
    l = n(658722),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(149765),
    E = n(442837),
    f = n(481060),
    h = n(271383),
    p = n(430824),
    m = n(594174),
    I = n(700785),
    T = n(709054),
    g = n(962086),
    S = n(160404),
    A = n(225675),
    v = n(981631),
    N = n(689938),
    O = n(679537);
function R(e) {
    var t;
    return (0, o.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, E.e7)([m.default], () => m.default.getCurrentUser()),
        r = (0, E.e7)([p.Z], () => p.Z.getGuild(t)),
        i = (0, E.e7)([p.Z], () => p.Z.getRoles(t)),
        { impersonateType: a, viewingRoles: l } = (0, E.cj)([S.Z], () => ({
            impersonateType: S.Z.getImpersonateType(t),
            viewingRoles: S.Z.getViewingRoles(t)
        })),
        c = a === A.z.SERVER_SHOP,
        C = (0, E.e7)([h.ZP], () => (null != n ? h.ZP.getTrueMember(t, n.id) : null)),
        [y, b] = (0, f.useMultiSelect)(null == l ? [] : T.default.keys(l)),
        L = s.useRef(r);
    s.useEffect(() => {
        let e = {},
            t = L.current;
        if (null != t && null != a) {
            for (let t of y) {
                let n = i[t];
                null != n && (e[t] = n);
            }
            (0, g.Zm)(t.id, {
                type: a,
                roles: e
            });
        }
    }, [y, a, i]);
    let D =
            null != r && null != n && null != C
                ? d()(i)
                      .filter((e) => -1 !== C.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        M = s.useMemo(
            () =>
                null != r && null != n
                    ? Object.values(i)
                          .filter((e) => e.id !== r.id)
                          .filter((e) => {
                              var t;
                              return !c || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == D ? void 0 : D.id) === e.id || I.r6(r, n.id, D, e))
                    : [],
            [r, n, c, D, i]
        );
    if (null == n || null == r || null == C) return null;
    let P = {};
    return (C.roles.forEach((e) => {
        let t = i[e];
        null != t && (P[t.id] = t);
    }),
    _.e$(
        I.I0({
            forceRoles: P,
            context: r
        }),
        _.$e(v.Plq.MANAGE_GUILD, v.Plq.MANAGE_ROLES)
    ) || r.isOwner(n.id))
        ? (0, o.jsx)('div', {
              className: O.container,
              children: (0, o.jsx)(f.Combobox, {
                  placeholder: N.Z.Messages.SEARCH_ROLES,
                  value: y,
                  onChange: b,
                  autoFocus: !0,
                  children: (e) => {
                      let t = M.reduce(
                              (t, n) => (
                                  u()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, o.jsxs)(
                                              f.ComboboxItem,
                                              {
                                                  value: n.id,
                                                  children: [(0, o.jsx)(f.ComboboxItem.Label, { children: R(n) }), (0, o.jsx)(f.ComboboxItem.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = i[r.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, o.jsxs)(
                                      f.ComboboxItem,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, o.jsx)(f.ComboboxItem.Label, { children: R(n) }), (0, o.jsx)(f.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, o.jsx)(f.Text, {
              variant: 'text-md/medium',
              children: N.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
          });
}

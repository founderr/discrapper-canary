e.d(n, {
    Z: function () {
        return N;
    }
}),
    e(47120),
    e(724458),
    e(653041);
var i = e(200651),
    r = e(192379),
    l = e(658722),
    o = e.n(l),
    u = e(392711),
    a = e.n(u),
    s = e(149765),
    c = e(442837),
    d = e(481060),
    f = e(271383),
    _ = e(430824),
    p = e(594174),
    E = e(700785),
    g = e(709054),
    m = e(962086),
    h = e(160404),
    I = e(225675),
    S = e(981631),
    v = e(388032),
    C = e(679537);
function T(t) {
    var n;
    return (0, i.jsx)('span', {
        style: { color: null !== (n = t.colorString) && void 0 !== n ? n : 'currentColor' },
        children: t.name
    });
}
function N(t) {
    let { guildId: n } = t,
        e = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        l = (0, c.e7)([_.Z], () => _.Z.getGuild(n)),
        u = (0, c.e7)([_.Z], () => _.Z.getRoles(n)),
        { impersonateType: N, viewingRoles: b } = (0, c.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n)
        })),
        A = N === I.z.SERVER_SHOP,
        O = (0, c.e7)([f.ZP], () => (null != e ? f.ZP.getTrueMember(n, e.id) : null)),
        [P, L] = (0, d.useMultiSelect)(null == b ? [] : g.default.keys(b)),
        R = r.useRef(l);
    r.useEffect(() => {
        let t = {},
            n = R.current;
        if (null != n && null != N) {
            for (let n of P) {
                let e = u[n];
                null != e && (t[n] = e);
            }
            (0, m.Zm)(n.id, {
                type: N,
                roles: t
            });
        }
    }, [P, N, u]);
    let y =
            null != l && null != e && null != O
                ? a()(u)
                      .filter((t) => -1 !== O.roles.indexOf(t.id))
                      .sortBy((t) => -t.position)
                      .first()
                : void 0,
        M = r.useMemo(
            () =>
                null != l && null != e
                    ? Object.values(u)
                          .filter((t) => t.id !== l.id)
                          .filter((t) => {
                              var n;
                              return !A || (null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((t) => (null == y ? void 0 : y.id) === t.id || E.r6(l, e.id, y, t))
                    : [],
            [l, e, A, y, u]
        );
    if (null == e || null == l || null == O) return null;
    let x = {};
    return (O.roles.forEach((t) => {
        let n = u[t];
        null != n && (x[n.id] = n);
    }),
    s.e$(
        E.I0({
            forceRoles: x,
            context: l
        }),
        s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES)
    ) || l.isOwner(e.id))
        ? (0, i.jsx)('div', {
              className: C.container,
              children: (0, i.jsx)(d.Combobox, {
                  placeholder: v.intl.string(v.t.Sojqsr),
                  value: P,
                  onChange: L,
                  autoFocus: !0,
                  children: (t) => {
                      let n = M.reduce(
                              (n, e) => (
                                  o()(t.toLowerCase(), e.name.toLowerCase()) &&
                                      n.push(
                                          (0, i.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: e.id,
                                                  children: [(0, i.jsx)(d.ComboboxItem.Label, { children: T(e) }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
                                              },
                                              e.id
                                          )
                                      ),
                                  n
                              ),
                              []
                          ),
                          e = u[l.getEveryoneRoleId()];
                      return (
                          null != e &&
                              n.push(
                                  (0, i.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: e.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(d.ComboboxItem.Label, { children: T(e) }), (0, i.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      e.id
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

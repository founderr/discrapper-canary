n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(200651),
    r = n(192379),
    o = n(658722),
    l = n.n(o),
    u = n(392711),
    a = n.n(u),
    s = n(149765),
    c = n(442837),
    d = n(481060),
    f = n(271383),
    _ = n(430824),
    p = n(594174),
    g = n(700785),
    E = n(709054),
    m = n(962086),
    I = n(160404),
    h = n(225675),
    C = n(981631),
    S = n(388032),
    T = n(22314);
function v(e) {
    var t;
    return (0, i.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function b(e) {
    let { guildId: t } = e,
        n = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        o = (0, c.e7)([_.Z], () => _.Z.getGuild(t)),
        u = (0, c.e7)([_.Z], () => _.Z.getRoles(t)),
        { impersonateType: b, viewingRoles: N } = (0, c.cj)([I.Z], () => ({
            impersonateType: I.Z.getImpersonateType(t),
            viewingRoles: I.Z.getViewingRoles(t)
        })),
        A = b === h.z.SERVER_SHOP,
        O = (0, c.e7)([f.ZP], () => (null != n ? f.ZP.getTrueMember(t, n.id) : null)),
        [L, P] = (0, d.useMultiSelect)(null == N ? [] : E.default.keys(N)),
        R = r.useRef(o);
    r.useEffect(() => {
        let e = {},
            t = R.current;
        if (null != t && null != b) {
            for (let t of L) {
                let n = u[t];
                null != n && (e[t] = n);
            }
            (0, m.Zm)(t.id, {
                type: b,
                roles: e
            });
        }
    }, [L, b, u]);
    let M =
            null != o && null != n && null != O
                ? a()(u)
                      .filter((e) => -1 !== O.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        y = r.useMemo(
            () =>
                null != o && null != n
                    ? Object.values(u)
                          .filter((e) => e.id !== o.id)
                          .filter((e) => {
                              var t;
                              return !A || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == M ? void 0 : M.id) === e.id || g.r6(o, n.id, M, e))
                    : [],
            [o, n, A, M, u]
        );
    if (null == n || null == o || null == O) return null;
    let x = {};
    return (O.roles.forEach((e) => {
        let t = u[e];
        null != t && (x[t.id] = t);
    }),
    s.e$(
        g.I0({
            forceRoles: x,
            context: o
        }),
        s.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)
    ) || o.isOwner(n.id))
        ? (0, i.jsx)('div', {
              className: T.container,
              children: (0, i.jsx)(d.Combobox, {
                  placeholder: S.intl.string(S.t.Sojqsr),
                  value: L,
                  onChange: P,
                  autoFocus: !0,
                  children: (e) => {
                      let t = y.reduce(
                              (t, n) => (
                                  l()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, i.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: n.id,
                                                  children: [(0, i.jsx)(d.ComboboxItem.Label, { children: v(n) }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = u[o.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, i.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(d.ComboboxItem.Label, { children: v(n) }), (0, i.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
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
              children: S.intl.string(S.t.MNSTbW)
          });
}

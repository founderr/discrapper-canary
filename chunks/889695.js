"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120"), n("724458"), n("653041");
var r = n("735250"),
  i = n("470079"),
  s = n("658722"),
  l = n.n(s),
  u = n("392711"),
  o = n.n(u),
  a = n("149765"),
  d = n("442837"),
  c = n("481060"),
  f = n("271383"),
  S = n("430824"),
  _ = n("594174"),
  E = n("700785"),
  g = n("709054"),
  h = n("962086"),
  I = n("160404"),
  p = n("225675"),
  T = n("981631"),
  C = n("689938"),
  m = n("717404");

function R(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function N(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([_.default], () => _.default.getCurrentUser()), s = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), u = (0, d.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: N,
    viewingRoles: O
  } = (0, d.useStateFromStoresObject)([I.default], () => ({
    impersonateType: I.default.getImpersonateType(t),
    viewingRoles: I.default.getViewingRoles(t)
  })), v = N === p.ImpersonateType.SERVER_SHOP, M = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [A, L] = (0, c.useMultiSelect)(null == O ? [] : g.default.keys(O)), b = i.useRef(s);
  i.useEffect(() => {
    let e = {},
      t = b.current;
    if (null != t && null != N) {
      for (let t of A) {
        let n = u[t];
        null != n && (e[t] = n)
      }(0, h.updateImpersonating)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [A, N, u]);
  let P = null != s && null != n && null != M ? o()(u).filter(e => -1 !== M.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    x = i.useMemo(() => null != s && null != n ? Object.values(u).filter(e => e.id !== s.id).filter(e => {
      var t;
      return !v || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == P ? void 0 : P.id) === e.id || E.isRoleHigher(s, n.id, P, e)) : [], [s, n, v, P, u]);
  if (null == n || null == s || null == M) return null;
  let D = {};
  return (M.roles.forEach(e => {
    let t = u[e];
    null != t && (D[t.id] = t)
  }), a.has(E.computePermissionsForRoles({
    forceRoles: D,
    context: s
  }), a.combine(T.Permissions.MANAGE_GUILD, T.Permissions.MANAGE_ROLES)) || s.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(c.Combobox, {
      placeholder: C.default.Messages.SEARCH_ROLES,
      value: A,
      onChange: L,
      autoFocus: !0,
      children: e => {
        let t = x.reduce((t, n) => (l()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(c.ComboboxItem, {
            value: n.id,
            children: [(0, r.jsx)(c.ComboboxItem.Label, {
              children: R(n)
            }), (0, r.jsx)(c.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = u[s.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(c.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(c.ComboboxItem.Label, {
            children: R(n)
          }), (0, r.jsx)(c.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-md/medium",
    children: C.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}
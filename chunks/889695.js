"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120"), n("724458"), n("653041");
var i = n("735250"),
  r = n("470079"),
  s = n("658722"),
  l = n.n(s),
  o = n("392711"),
  u = n.n(o),
  a = n("149765"),
  d = n("442837"),
  c = n("481060"),
  f = n("271383"),
  S = n("430824"),
  _ = n("594174"),
  p = n("700785"),
  E = n("709054"),
  g = n("962086"),
  I = n("160404"),
  h = n("225675"),
  C = n("981631"),
  T = n("689938"),
  m = n("717404");

function R(e) {
  var t;
  return (0, i.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function N(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([_.default], () => _.default.getCurrentUser()), s = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), o = (0, d.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: N,
    viewingRoles: v
  } = (0, d.useStateFromStoresObject)([I.default], () => ({
    impersonateType: I.default.getImpersonateType(t),
    viewingRoles: I.default.getViewingRoles(t)
  })), O = N === h.ImpersonateType.SERVER_SHOP, A = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [M, b] = (0, c.useMultiSelect)(null == v ? [] : E.default.keys(v)), L = r.useRef(s);
  r.useEffect(() => {
    let e = {},
      t = L.current;
    if (null != t && null != N) {
      for (let t of M) {
        let n = o[t];
        null != n && (e[t] = n)
      }(0, g.updateImpersonating)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [M, N, o]);
  let P = null != s && null != n && null != A ? u()(o).filter(e => -1 !== A.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    x = r.useMemo(() => null != s && null != n ? Object.values(o).filter(e => e.id !== s.id).filter(e => {
      var t;
      return !O || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == P ? void 0 : P.id) === e.id || p.isRoleHigher(s, n.id, P, e)) : [], [s, n, O, P, o]);
  if (null == n || null == s || null == A) return null;
  let D = {};
  return (A.roles.forEach(e => {
    let t = o[e];
    null != t && (D[t.id] = t)
  }), a.has(p.computePermissionsForRoles({
    forceRoles: D,
    context: s
  }), a.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES)) || s.isOwner(n.id)) ? (0, i.jsx)("div", {
    className: m.container,
    children: (0, i.jsx)(c.Combobox, {
      placeholder: T.default.Messages.SEARCH_ROLES,
      value: M,
      onChange: b,
      autoFocus: !0,
      children: e => {
        let t = x.reduce((t, n) => (l()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
            value: n.id,
            children: [(0, i.jsx)(c.ComboboxItem.Label, {
              children: R(n)
            }), (0, i.jsx)(c.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = o[s.getEveryoneRoleId()];
        return null != n && t.push((0, i.jsxs)(c.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, i.jsx)(c.ComboboxItem.Label, {
            children: R(n)
          }), (0, i.jsx)(c.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, i.jsx)(c.Text, {
    variant: "text-md/medium",
    children: T.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}
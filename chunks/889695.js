"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120"), n("724458"), n("653041");
var r = n("735250"),
  i = n("470079"),
  l = n("658722"),
  s = n.n(l),
  o = n("392711"),
  u = n.n(o),
  a = n("149765"),
  c = n("442837"),
  d = n("481060"),
  f = n("271383"),
  S = n("430824"),
  g = n("594174"),
  p = n("700785"),
  h = n("709054"),
  E = n("962086"),
  _ = n("160404"),
  I = n("225675"),
  C = n("981631"),
  m = n("689938"),
  T = n("717404");

function R(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function v(e) {
  let {
    guildId: t
  } = e, n = (0, c.useStateFromStores)([g.default], () => g.default.getCurrentUser()), l = (0, c.useStateFromStores)([S.default], () => S.default.getGuild(t)), o = (0, c.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: v,
    viewingRoles: M
  } = (0, c.useStateFromStoresObject)([_.default], () => ({
    impersonateType: _.default.getImpersonateType(t),
    viewingRoles: _.default.getViewingRoles(t)
  })), N = v === I.ImpersonateType.SERVER_SHOP, O = (0, c.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [A, b] = (0, d.useMultiSelect)(null == M ? [] : h.default.keys(M)), L = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      t = L.current;
    if (null != t && null != v) {
      for (let t of A) {
        let n = o[t];
        null != n && (e[t] = n)
      }(0, E.updateImpersonating)(t.id, {
        type: v,
        roles: e
      })
    }
  }, [A, v, o]);
  let P = null != l && null != n && null != O ? u()(o).filter(e => -1 !== O.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    x = i.useMemo(() => null != l && null != n ? Object.values(o).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !N || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == P ? void 0 : P.id) === e.id || p.isRoleHigher(l, n.id, P, e)) : [], [l, n, N, P, o]);
  if (null == n || null == l || null == O) return null;
  let w = {};
  return (O.roles.forEach(e => {
    let t = o[e];
    null != t && (w[t.id] = t)
  }), a.has(p.computePermissionsForRoles({
    forceRoles: w,
    context: l
  }), a.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES)) || l.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: T.container,
    children: (0, r.jsx)(d.Combobox, {
      placeholder: m.default.Messages.SEARCH_ROLES,
      value: A,
      onChange: b,
      autoFocus: !0,
      children: e => {
        let t = x.reduce((t, n) => (s()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.ComboboxItem, {
            value: n.id,
            children: [(0, r.jsx)(d.ComboboxItem.Label, {
              children: R(n)
            }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = o[l.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.ComboboxItem.Label, {
            children: R(n)
          }), (0, r.jsx)(d.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: m.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}
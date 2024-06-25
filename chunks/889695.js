t.d(n, {
  Z: function() {
    return v
  }
}), t(47120), t(724458), t(653041);
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
  f = t(430824),
  E = t(594174),
  I = t(700785),
  g = t(709054),
  S = t(962086),
  p = t(160404),
  m = t(225675),
  C = t(981631),
  T = t(689938),
  N = t(209740);

function A(e) {
  var n;
  return (0, i.jsx)("span", {
    style: {
      color: null !== (n = e.colorString) && void 0 !== n ? n : "currentColor"
    },
    children: e.name
  })
}

function v(e) {
  let {
    guildId: n
  } = e, t = (0, c.e7)([E.default], () => E.default.getCurrentUser()), l = (0, c.e7)([f.Z], () => f.Z.getGuild(n)), u = (0, c.e7)([f.Z], () => f.Z.getRoles(n)), {
    impersonateType: v,
    viewingRoles: h
  } = (0, c.cj)([p.Z], () => ({
    impersonateType: p.Z.getImpersonateType(n),
    viewingRoles: p.Z.getViewingRoles(n)
  })), R = v === m.z.SERVER_SHOP, L = (0, c.e7)([_.ZP], () => null != t ? _.ZP.getTrueMember(n, t.id) : null), [M, O] = (0, d.useMultiSelect)(null == h ? [] : g.default.keys(h)), Z = r.useRef(l);
  r.useEffect(() => {
    let e = {},
      n = Z.current;
    if (null != n && null != v) {
      for (let n of M) {
        let t = u[n];
        null != t && (e[n] = t)
      }(0, S.Zm)(n.id, {
        type: v,
        roles: e
      })
    }
  }, [M, v, u]);
  let D = null != l && null != t && null != L ? s()(u).filter(e => -1 !== L.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    b = r.useMemo(() => null != l && null != t ? Object.values(u).filter(e => e.id !== l.id).filter(e => {
      var n;
      return !R || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null
    }).filter(e => (null == D ? void 0 : D.id) === e.id || I.r6(l, t.id, D, e)) : [], [l, t, R, D, u]);
  if (null == t || null == l || null == L) return null;
  let P = {};
  return (L.roles.forEach(e => {
    let n = u[e];
    null != n && (P[n.id] = n)
  }), a.e$(I.I0({
    forceRoles: P,
    context: l
  }), a.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)) || l.isOwner(t.id)) ? (0, i.jsx)("div", {
    className: N.container,
    children: (0, i.jsx)(d.Combobox, {
      placeholder: T.Z.Messages.SEARCH_ROLES,
      value: M,
      onChange: O,
      autoFocus: !0,
      children: e => {
        let n = b.reduce((n, t) => (o()(e.toLowerCase(), t.name.toLowerCase()) && n.push((0, i.jsxs)(d.ComboboxItem, {
            value: t.id,
            children: [(0, i.jsx)(d.ComboboxItem.Label, {
              children: A(t)
            }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
          }, t.id)), n), []),
          t = u[l.getEveryoneRoleId()];
        return null != t && n.push((0, i.jsxs)(d.ComboboxItem, {
          value: t.id,
          disabled: !0,
          children: [(0, i.jsx)(d.ComboboxItem.Label, {
            children: A(t)
          }), (0, i.jsx)(d.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, t.id)), n
      }
    })
  }) : (0, i.jsx)(d.Text, {
    variant: "text-md/medium",
    children: T.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}
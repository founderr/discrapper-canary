t.d(l, {
  Z: function() {
    return I
  }
}), t(47120), t(724458), t(653041);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(658722),
  r = t.n(i),
  C = t(954955),
  c = t.n(C),
  d = t(498607),
  u = t.n(d),
  E = t(399606),
  m = t(481060),
  _ = t(563115),
  M = t(910693),
  h = t(893966),
  x = t(527379),
  T = t(285173),
  L = t(689938),
  H = t(262155),
  g = t(405811);
let A = new Set;

function I(e) {
  let {
    guildId: l,
    onClose: t
  } = e, a = (0, M.BG)(l), i = (0, E.e7)([h.Z], () => h.Z.getSearchStateByGuildId(l), [l], u()), [C, d] = s.useState(i.selectedRoleIds), I = (0, _.h)(l, A, !0), N = (e, t) => {
    let {
      record: s
    } = e;
    return (0, n.jsx)(m.ComboboxItem, {
      value: s.id,
      children: (0, n.jsxs)("div", {
        className: o()(H.roleNameContainer),
        children: [(0, n.jsxs)("div", {
          className: o()(H.roleLabel),
          children: [(0, n.jsx)("div", {
            className: o()(H.labelBackground, t && H.selected)
          }), (0, n.jsx)(m.ComboboxItem.Label, {
            children: (0, n.jsx)(T.Z, {
              className: o()(g.roleTooltipItem),
              role: s,
              guildId: l
            }, s.id)
          })]
        }), (0, n.jsx)("div", {
          className: H.checkboxContainer,
          children: (0, n.jsx)(m.ComboboxItem.Checkbox, {
            checked: t
          })
        })]
      })
    }, s.id)
  }, R = (e, l) => I.reduce((t, n) => {
    let {
      record: s
    } = n, a = e.has(s.id);
    return r()(l.toLowerCase(), s.name.toLowerCase()) ? t.push(N(n, a)) : a && t.push(N(n, a)), t
  }, []), p = s.useCallback(e => {
    (0, x.Dr)(l, {
      selectedRoleIds: e
    }), a(e)
  }, [l, a]), S = s.useCallback(c()(p, 300), [p]), Z = s.useCallback(e => {
    let l;
    d(l = C.has(e) ? new Set([...C].filter(l => l !== e)) : new Set([...C, e])), S(l)
  }, [C, S]);
  return (0, n.jsx)(m.ComboboxPopout, {
    className: o()(H.rolePopout),
    placeholder: L.Z.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
    value: C,
    onChange: Z,
    onClose: () => {
      t()
    },
    multiSelect: !0,
    showScrollbar: !0,
    autoFocus: !0,
    children: e => R(C, e)
  })
}
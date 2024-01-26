"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l("222007"), l("808653"), l("424973");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("448105"),
  d = l.n(o),
  r = l("483366"),
  u = l.n(r),
  C = l("969176"),
  c = l.n(C),
  f = l("65597"),
  m = l("77078"),
  E = l("571067"),
  M = l("130037"),
  h = l("178406"),
  T = l("645266"),
  x = l("412013"),
  _ = l("782340"),
  g = l("554490"),
  H = l("236807");
let p = new Set;

function A(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, M.useTrackMemberFilterRolesUsed)(t), o = (0, f.default)([h.default], () => h.default.getSearchStateByGuildId(t), [t], c), [r, C] = n.useState(o.selectedRoleIds), A = (0, E.useRoleRows)(t, p, !0), S = (e, l) => {
    let {
      record: n
    } = e;
    return (0, a.jsx)(m.ComboboxItem, {
      value: n.id,
      children: (0, a.jsxs)("div", {
        className: i(g.roleNameContainer),
        children: [(0, a.jsxs)("div", {
          className: i(g.roleLabel),
          children: [(0, a.jsx)("div", {
            className: i(g.labelBackground, l && g.selected)
          }), (0, a.jsx)(m.ComboboxItem.Label, {
            children: (0, a.jsx)(x.default, {
              className: i(H.roleTooltipItem),
              role: n,
              guildId: t
            }, n.id)
          })]
        }), (0, a.jsx)("div", {
          className: g.checkboxContainer,
          children: (0, a.jsx)(m.ComboboxItem.Checkbox, {
            checked: l
          })
        })]
      })
    }, n.id)
  }, L = (e, t) => A.reduce((l, a) => {
    let {
      record: n
    } = a, s = e.has(n.id);
    return d(t.toLowerCase(), n.name.toLowerCase()) ? l.push(S(a, s)) : s && l.push(S(a, s)), l
  }, []), N = n.useCallback(e => {
    (0, T.updateSearchState)(t, {
      selectedRoleIds: e
    }), s(e)
  }, [t, s]), I = n.useCallback(u(N, 300), [N]), v = n.useCallback(e => {
    let t;
    C(t = r.has(e) ? new Set([...r].filter(t => t !== e)) : new Set([...r, e])), I(t)
  }, [r, I]);
  return (0, a.jsx)(m.ComboboxPopout, {
    className: i(g.rolePopout),
    placeholder: _.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
    value: r,
    onChange: v,
    onClose: () => {
      l()
    },
    multiSelect: !0,
    showScrollbar: !0,
    autoFocus: !0,
    children: e => L(r, e)
  })
}
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("222007"), l("808653"), l("424973");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("448105"),
  d = l.n(o),
  u = l("483366"),
  r = l.n(u),
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
  H = l("554490"),
  A = l("236807");
let p = new Set;

function S(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, M.useTrackMemberFilterRolesUsed)(t), o = (0, f.default)([h.default], () => h.default.getSearchStateByGuildId(t), [t], c), [u, C] = n.useState(o.selectedRoleIds), S = (0, E.useRoleRows)(t, p, !0), L = (e, l) => {
    let {
      record: n
    } = e;
    return (0, a.jsx)(m.ComboboxItem, {
      value: n.id,
      children: (0, a.jsxs)("div", {
        className: i(H.roleNameContainer),
        children: [(0, a.jsxs)("div", {
          className: i(H.roleLabel),
          children: [(0, a.jsx)("div", {
            className: i(H.labelBackground, l && H.selected)
          }), (0, a.jsx)(m.ComboboxItem.Label, {
            children: (0, a.jsx)(x.default, {
              className: i(A.roleTooltipItem),
              role: n,
              guildId: t
            }, n.id)
          })]
        }), (0, a.jsx)("div", {
          className: H.spacer
        }), (0, a.jsx)("div", {
          className: H.checkboxContainer,
          children: (0, a.jsx)(m.ComboboxItem.Checkbox, {
            checked: l
          })
        })]
      })
    }, n.id)
  }, g = (e, t) => S.reduce((l, a) => {
    let {
      record: n
    } = a, s = e.has(n.id);
    return d(t.toLowerCase(), n.name.toLowerCase()) ? l.push(L(a, s)) : s && l.push(L(a, s)), l
  }, []), N = n.useCallback(e => {
    (0, T.updateSearchState)(t, {
      selectedRoleIds: e
    }), s(e)
  }, [t, s]), v = n.useCallback(r(N, 300), [N]), I = n.useCallback(e => {
    let t;
    C(t = u.has(e) ? new Set([...u].filter(t => t !== e)) : new Set([...u, e])), v(t)
  }, [u, v]);
  return (0, a.jsx)(m.ComboboxPopout, {
    className: i(H.rolePopout),
    placeholder: _.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
    value: u,
    onChange: I,
    onClose: () => {
      l()
    },
    multiSelect: !0,
    showScrollbar: !0,
    autoFocus: !0,
    children: e => g(u, e)
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("749210"),
  h = s("430824"),
  m = s("285952"),
  C = s("695464"),
  I = s("399860"),
  M = s("335049"),
  N = s("689079"),
  b = s("689938"),
  f = s("808250");

function S(e) {
  let {
    editPermissions: t,
    guildId: s,
    hasMemberSearch: i,
    headerText: r,
    onClose: S,
    overwrittenKeys: x,
    search: g,
    searchPlaceholderText: p,
    selectedPermissionCount: k,
    transitionState: A
  } = e, _ = (0, d.useStateFromStores)([h.default], () => h.default.getGuild(s), [s]);
  o()(null != _, "");
  let [j, y] = a.useState(null), {
    query: T,
    results: P,
    setQuery: E
  } = g(s), [O, R] = a.useState({}), D = a.useMemo(() => Object.keys(O).length, [O]), L = D + k >= N.APPLICATION_COMMAND_PERMISSIONS_LIMIT, B = a.useMemo(() => P.filter(e => {
    let t = (0, I.toPermissionKey)(e.id, e.type);
    return !x.includes(t)
  }), [x, P]), v = a.useCallback((e, t) => {
    R(s => {
      let l = (0, I.toPermissionKey)(e, t),
        a = {
          ...s
        };
      return l in s ? delete a[l] : !L && (a[l] = {
        id: e,
        permission: !0,
        type: t
      }), a
    })
  }, [L, R]), w = a.useCallback(() => {
    t(O, []), S()
  }, [t, S, O]);
  a.useEffect(() => () => clearTimeout(j), [j]);
  let H = a.useCallback(e => {
      E(e), i && y(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
        c.default.requestMembers(s, e, 200, !1)
      }, 500))
    }, [s, i, E, y]),
    K = a.useCallback(e => {
      let t = B[e],
        s = (0, I.toPermissionKey)(t.id, t.type),
        a = s in O,
        i = L && !a;
      return (0, l.jsx)("div", {
        className: f.item,
        children: (0, l.jsx)(u.Checkbox, {
          type: u.Checkbox.Types.INVERTED,
          className: n()({
            [f.checkboxItemDisabled]: i
          }),
          disabled: i,
          value: a,
          onChange: () => v(t.id, t.type),
          children: (0, l.jsx)(M.default, {
            guild: _,
            id: t.id,
            type: t.type,
            isLocked: !1
          })
        })
      }, s)
    }, [B, _, L, v, O]);
  return a.useEffect(() => {
    c.default.requestMembers(s, void 0, 200, !1)
  }, [s]), (0, l.jsxs)(u.ModalRoot, {
    "aria-label": b.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
    transitionState: A,
    children: [(0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      direction: m.default.Direction.VERTICAL,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: f.header,
        children: r
      }), L ? (0, l.jsx)(u.Heading, {
        variant: "heading-sm/medium",
        color: "text-danger",
        children: b.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX
      }) : null]
    }), (0, l.jsxs)(u.ModalContent, {
      className: f.modalContent,
      children: [(0, l.jsx)(u.SearchBar, {
        className: f.searchBar,
        query: T,
        placeholder: p,
        "aria-label": p,
        onChange: H,
        onClear: () => E(""),
        size: u.SearchBar.Sizes.MEDIUM
      }), (0, l.jsx)(C.default, {
        role: "listbox",
        renderRow: K,
        rowCount: B.length,
        rowCountBySection: [B.length],
        rowHeight: 36,
        className: f.__invalid_list
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        type: "submit",
        onClick: w,
        disabled: 0 === D,
        children: b.default.Messages.ADD
      }), (0, l.jsx)(u.Button, {
        onClick: S,
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        children: b.default.Messages.CANCEL
      })]
    })]
  })
}
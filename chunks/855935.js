t.d(l, {
  Z: function() {
    return _
  }
});
var n = t(735250),
  s = t(470079),
  a = t(498607),
  o = t.n(a),
  i = t(399606),
  r = t(481060),
  C = t(588215),
  c = t(893966),
  d = t(527379),
  u = t(981631),
  E = t(689938);
let m = [C.d$.ORDER_BY_GUILD_JOINED_AT_DESC, C.d$.ORDER_BY_GUILD_JOINED_AT_ASC, C.d$.ORDER_BY_USER_ID_DESC, C.d$.ORDER_BY_USER_ID_ASC];

function _(e) {
  let {
    guildId: l,
    onClose: t
  } = e, a = (0, i.e7)([c.Z], () => c.Z.getSearchStateByGuildId(l), [l], o()), _ = s.useCallback(e => {
    (0, d.Dr)(l, {
      ...a,
      selectedSort: e
    })
  }, [l, a]);
  return (0, n.jsx)(r.Menu, {
    navId: "members-table-sort-menu",
    onClose: () => {
      null == t || t()
    },
    "aria-label": E.Z.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: u.dG4,
    children: (0, n.jsx)(r.MenuGroup, {
      children: m.map(e => {
        var l, t;
        return (0, n.jsx)(r.MenuRadioItem, {
          id: "members-table-sort-".concat(e),
          label: function(e) {
            switch (e) {
              case C.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
                return E.Z.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_DESC;
              case C.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
                return E.Z.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_ASC;
              case C.d$.ORDER_BY_USER_ID_DESC:
                return E.Z.Messages.MEMBER_SAFETY_USER_JOINED_AT_DESC;
              case C.d$.ORDER_BY_USER_ID_ASC:
                return E.Z.Messages.MEMBER_SAFETY_USER_JOINED_AT_ASC;
              default:
                return null
            }
          }(e),
          checked: (l = e, (t = a.selectedSort) === C.d$.ORDER_BY_UNSPECIFIED || null == t ? l === C.d$.ORDER_BY_GUILD_JOINED_AT_DESC : l === t),
          disabled: !1,
          action: () => _(e),
          group: "members-table-sort"
        }, "members-table-sort-".concat(e))
      })
    })
  })
}
t.d(l, {
  Z: function() {
    return x
  }
});
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(913527),
  r = t.n(i),
  C = t(399606),
  c = t(481060),
  d = t(740900),
  u = t(241559),
  E = t(893966),
  m = t(527379),
  _ = t(689938),
  M = t(405811),
  h = t(817758);

function x(e) {
  let {
    guild: l,
    onSubmit: a
  } = e, i = (0, C.e7)([E.Z], () => E.Z.getMembersCountByGuildId(l.id, d.R_.NEW_GUILD_MEMBER), [l.id]), x = (0, C.e7)([E.Z], () => {
    let e = E.Z.getNewMemberTimestamp(l.id);
    return r()(e).format("h:mm A")
  }, [l.id]), T = (0, C.e7)([E.Z], () => E.Z.hasDefaultSearchStateByGuildId(l.id), [l.id]), L = s.useCallback(() => {
    (0, m.YO)(l.id), null == a || a()
  }, [l.id, a]), H = s.useCallback(() => {
    T ? L() : (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await t.e("24478").then(t.bind(t, 319481));
      return l => (0, n.jsx)(e, {
        ...l,
        onConfirm: L
      })
    })
  }, [L, T]), g = new Intl.NumberFormat(_.Z.getLocale()).format(i), A = (0, u.nX)(l.id), I = (0, u.xC)(l.id), N = s.useMemo(() => 1 + (A ? 1 : 0) + (I ? 1 : 0), [A, I]);
  return 0 === i ? null : (0, n.jsxs)("tr", {
    className: o()(h.newMembersNotice),
    onClick: H,
    children: [(0, n.jsx)("td", {
      colSpan: 3,
      children: (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: _.Z.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
          count: g,
          date: x
        })
      })
    }), (0, n.jsx)("td", {
      colSpan: N
    }), (0, n.jsx)("td", {
      colSpan: 2,
      children: (0, n.jsx)("div", {
        className: o()(M.actionCell),
        children: (0, n.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          color: c.Button.Colors.TRANSPARENT,
          look: c.Button.Looks.LINK,
          className: o()(h.memberNoticeActionButton),
          children: (0, n.jsxs)(c.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: o()(h.memberNoticeAction),
            children: [(0, n.jsx)("div", {
              children: _.Z.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
            }), (0, n.jsx)(c.UserIcon, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20,
              className: o()(h.memberNoticeActionIcon)
            })]
          })
        })
      })
    })]
  })
}
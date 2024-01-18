"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("866227"),
  d = l.n(o),
  u = l("65597"),
  r = l("77078"),
  C = l("812204"),
  c = l("781896"),
  f = l("493910"),
  m = l("466818"),
  E = l("178406"),
  M = l("645266"),
  h = l("782340"),
  T = l("236807"),
  x = l("821118");

function _(e) {
  let {
    guild: t,
    onSubmit: s
  } = e, o = (0, u.default)([E.default], () => E.default.getMembersCountByGuildId(t.id, f.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER), [t.id]), _ = (0, u.default)([E.default], () => {
    let e = E.default.getNewMemberTimestamp(t.id);
    return d(e).format("h:mm A")
  }, [t.id]), H = (0, u.default)([E.default], () => E.default.hasDefaultSearchStateByGuildId(t.id), [t.id]), A = n.useCallback(() => {
    (0, M.refreshMemberSafetyTimestamp)(t.id), null == s || s()
  }, [t.id, s]), p = n.useCallback(() => {
    H ? A() : (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("756912").then(l.bind(l, "756912"));
      return t => (0, a.jsx)(e, {
        ...t,
        onConfirm: A
      })
    })
  }, [A, H]), S = new Intl.NumberFormat(h.default.getLocale()).format(o), L = (0, m.useCanAccessInviteCodeFeature)(t.id), g = (0, m.useCanAccessBulkBanningFeature)(t.id, C.default.MEMBER_SAFETY_PAGE), N = n.useMemo(() => 1 + (L ? 1 : 0) + (g ? 1 : 0), [L, g]);
  return 0 === o ? null : (0, a.jsxs)("tr", {
    className: i(x.newMembersNotice),
    onClick: p,
    children: [(0, a.jsx)("td", {
      colSpan: 3,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: h.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
          count: S,
          date: _
        })
      })
    }), (0, a.jsx)("td", {
      colSpan: N
    }), (0, a.jsx)("td", {
      colSpan: 2,
      children: (0, a.jsx)("div", {
        className: i(T.actionCell),
        children: (0, a.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          color: r.Button.Colors.TRANSPARENT,
          look: r.Button.Looks.LINK,
          className: i(x.memberNoticeActionButton),
          children: (0, a.jsxs)(r.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: i(x.memberNoticeAction),
            children: [(0, a.jsx)("div", {
              children: h.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
            }), (0, a.jsx)(c.default, {
              width: 20,
              height: 20,
              className: i(x.memberNoticeActionIcon)
            })]
          })
        })
      })
    })]
  })
}
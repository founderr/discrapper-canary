"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("866227"),
  d = l.n(o),
  r = l("65597"),
  u = l("77078"),
  C = l("781896"),
  c = l("493910"),
  f = l("466818"),
  E = l("178406"),
  m = l("645266"),
  M = l("782340"),
  h = l("615319"),
  _ = l("420434");

function T(e) {
  let {
    guild: t,
    onSubmit: s
  } = e, o = (0, r.default)([E.default], () => E.default.getMembersCountByGuildId(t.id, c.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER), [t.id]), T = (0, r.default)([E.default], () => {
    let e = E.default.getNewMemberTimestamp(t.id);
    return d(e).format("h:mm A")
  }, [t.id]), x = (0, r.default)([E.default], () => E.default.hasDefaultSearchStateByGuildId(t.id), [t.id]), S = n.useCallback(() => {
    (0, m.refreshMemberSafetyTimestamp)(t.id), null == s || s()
  }, [t.id, s]), A = n.useCallback(() => {
    x ? S() : (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("756912").then(l.bind(l, "756912"));
      return t => (0, a.jsx)(e, {
        ...t,
        onConfirm: S
      })
    })
  }, [S, x]), p = new Intl.NumberFormat(M.default.getLocale()).format(o), L = (0, f.useCanAccessInviteCodeFeature)(t.id), H = (0, f.useCanAccessBulkBanningFeature)(t.id), N = n.useMemo(() => 1 + (L ? 1 : 0) + (H ? 1 : 0), [L, H]);
  return 0 === o ? null : (0, a.jsxs)("tr", {
    className: i(_.newMembersNotice),
    onClick: A,
    children: [(0, a.jsx)("td", {
      colSpan: 3,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: M.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
          count: p,
          date: T
        })
      })
    }), (0, a.jsx)("td", {
      colSpan: N
    }), (0, a.jsx)("td", {
      colSpan: 2,
      children: (0, a.jsx)("div", {
        className: i(h.actionCell),
        children: (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.TRANSPARENT,
          look: u.Button.Looks.LINK,
          className: i(_.memberNoticeActionButton),
          children: (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: i(_.memberNoticeAction),
            children: [(0, a.jsx)("div", {
              children: M.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
            }), (0, a.jsx)(C.default, {
              width: 20,
              height: 20,
              className: i(_.memberNoticeActionIcon)
            })]
          })
        })
      })
    })]
  })
}
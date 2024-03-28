"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("803997"),
  i = s.n(l),
  n = s("924826"),
  r = s("442837"),
  u = s("481060"),
  o = s("209613"),
  d = s("430824"),
  c = s("263704"),
  E = s("855981"),
  I = s("55543"),
  f = s("693546"),
  T = s("826581"),
  R = s("246364"),
  _ = s("328977"),
  S = s("571728"),
  N = s("762660"),
  m = s("689938"),
  A = s("123471");
let M = () => null;

function p(e) {
  let {
    status: t
  } = e, s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (t) {
    case R.GuildJoinRequestApplicationStatuses.REJECTED:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case R.GuildJoinRequestApplicationStatuses.APPROVED:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
  }
  return (0, a.jsxs)("div", {
    className: A.emptyContainer,
    children: [(0, a.jsxs)("div", {
      className: A.emptyIcon,
      children: [(0, a.jsx)(I.default, {
        className: A.star
      }), (0, a.jsx)(c.default, {
        className: A.checkmark
      }), (0, a.jsx)(E.default, {
        className: A.plus
      })]
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      children: s
    }), (0, a.jsx)(u.Text, {
      color: "header-secondary",
      className: A.emptyBody,
      variant: "text-sm/normal",
      children: l
    })]
  })
}
t.default = function(e) {
  let {
    applicationStatus: t,
    guildJoinRequests: s,
    guildId: l,
    onScroll: c,
    listRef: E
  } = e, I = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]), h = (0, r.useStateFromStores)([T.default], () => T.default.isFetching()), x = h ? [s.length + 25] : [s.length], C = (0, _.useSelectedGuildJoinRequest)({
    guildId: l
  }), g = (0, S.useSubmittedGuildJoinRequestTotal)({
    guildId: l
  }), P = (0, o.default)("guild-join-requests"), j = e => {
    let {
      row: n
    } = e, r = s[n];
    return null == r ? (0, a.jsx)(N.MemberApplicationsListRowPlaceholder, {}, n) : (0, a.jsx)(N.MemberApplicationsListRow, {
      className: i()({
        [A.selected]: C === r,
        [A.siblingSelected]: C === s[n - 1]
      }),
      guild: I,
      guildJoinRequest: r,
      onClick: () => f.default.setSelectedGuildJoinRequest(l, r),
      applicationStatus: t
    }, "".concat(r.userId, "-").concat(r.applicationStatus, "-").concat(n))
  };
  return h || 0 !== s.length ? (0, a.jsxs)(a.Fragment, {
    children: [0 !== g && t === R.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(u.Text, {
      className: A.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, t) {
        let s = t.toLocaleString();
        switch (e) {
          case R.GuildJoinRequestApplicationStatuses.SUBMITTED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.REJECTED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.APPROVED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: s
            });
          default:
            return ""
        }
      })(t, g).toUpperCase()
    }), (0, a.jsx)(n.ListNavigatorProvider, {
      navigator: P,
      children: (0, a.jsx)(n.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...l
          } = e;
          return (0, a.jsx)(u.List, {
            innerRole: s,
            innerAriaLabel: m.default.Messages.MEMBERS,
            ref: e => {
              var s;
              E.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            paddingTop: 0,
            paddingBottom: 16,
            sectionHeight: 0,
            rowHeight: 64,
            renderSection: M,
            renderRow: j,
            sections: x,
            onScroll: c,
            fade: !0,
            ...l
          }, "guild-application-review")
        }
      })
    })]
  }) : (0, a.jsx)(p, {
    status: t
  })
}
"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("120356"),
  i = s.n(l),
  n = s("924826"),
  r = s("442837"),
  u = s("481060"),
  o = s("209613"),
  d = s("430824"),
  c = s("263704"),
  I = s("855981"),
  E = s("55543"),
  T = s("693546"),
  f = s("826581"),
  _ = s("246364"),
  R = s("328977"),
  S = s("571728"),
  N = s("762660"),
  m = s("689938"),
  M = s("858347");
let A = () => null;

function C(e) {
  let {
    status: t
  } = e, s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (t) {
    case _.GuildJoinRequestApplicationStatuses.REJECTED:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case _.GuildJoinRequestApplicationStatuses.APPROVED:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
  }
  return (0, a.jsxs)("div", {
    className: M.emptyContainer,
    children: [(0, a.jsxs)("div", {
      className: M.emptyIcon,
      children: [(0, a.jsx)(E.default, {
        className: M.star
      }), (0, a.jsx)(c.default, {
        className: M.checkmark
      }), (0, a.jsx)(I.default, {
        className: M.plus
      })]
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      children: s
    }), (0, a.jsx)(u.Text, {
      color: "header-secondary",
      className: M.emptyBody,
      variant: "text-sm/normal",
      children: l
    })]
  })
}
t.default = function(e) {
  var t;
  let {
    applicationStatus: s,
    guildJoinRequests: l,
    guildId: c,
    onScroll: I,
    listRef: E,
    atMaxMemberCapacity: h
  } = e, x = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(c), [c]), p = (0, r.useStateFromStores)([f.default], () => f.default.isFetching()), g = p ? [l.length + 25] : [l.length], P = (0, R.useSelectedGuildJoinRequest)({
    guildId: c
  }), j = null !== (t = (0, S.useSubmittedGuildJoinRequestTotal)({
    guildId: c
  })) && void 0 !== t ? t : 0, v = (0, o.default)("guild-join-requests"), O = e => {
    let {
      row: t
    } = e, n = l[t];
    return null == n ? (0, a.jsx)(N.MemberApplicationsListRowPlaceholder, {}, t) : (0, a.jsx)(N.MemberApplicationsListRow, {
      className: i()({
        [M.selected]: P === n,
        [M.siblingSelected]: P === l[t - 1]
      }),
      guild: x,
      guildJoinRequest: n,
      onClick: () => T.default.setSelectedGuildJoinRequest(c, n),
      applicationStatus: s,
      atMaxMemberCapacity: h
    }, "".concat(n.userId, "-").concat(n.applicationStatus, "-").concat(t))
  };
  return p || 0 !== l.length ? (0, a.jsxs)(a.Fragment, {
    children: [0 !== j && s === _.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(u.Text, {
      className: M.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, t) {
        let s = t.toLocaleString();
        switch (e) {
          case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: s
            });
          case _.GuildJoinRequestApplicationStatuses.REJECTED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: s
            });
          case _.GuildJoinRequestApplicationStatuses.APPROVED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: s
            });
          default:
            return ""
        }
      })(s, j).toUpperCase()
    }), (0, a.jsx)(n.ListNavigatorProvider, {
      navigator: v,
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
            renderSection: A,
            renderRow: O,
            sections: g,
            onScroll: I,
            fade: !0,
            ...l
          }, "guild-application-review")
        }
      })
    })]
  }) : (0, a.jsx)(C, {
    status: s
  })
}
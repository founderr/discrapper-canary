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
  E = s("855981"),
  I = s("55543"),
  T = s("693546"),
  f = s("826581"),
  R = s("246364"),
  _ = s("328977"),
  S = s("571728"),
  N = s("762660"),
  A = s("689938"),
  m = s("858347");
let M = () => null;

function C(e) {
  let {
    status: t
  } = e, s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (t) {
    case R.GuildJoinRequestApplicationStatuses.REJECTED:
      s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case R.GuildJoinRequestApplicationStatuses.APPROVED:
      s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
  }
  return (0, a.jsxs)("div", {
    className: m.emptyContainer,
    children: [(0, a.jsxs)("div", {
      className: m.emptyIcon,
      children: [(0, a.jsx)(I.default, {
        className: m.star
      }), (0, a.jsx)(c.default, {
        className: m.checkmark
      }), (0, a.jsx)(E.default, {
        className: m.plus
      })]
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      children: s
    }), (0, a.jsx)(u.Text, {
      color: "header-secondary",
      className: m.emptyBody,
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
    onScroll: E,
    listRef: I
  } = e, h = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(c), [c]), p = (0, r.useStateFromStores)([f.default], () => f.default.isFetching()), x = p ? [l.length + 25] : [l.length], g = (0, _.useSelectedGuildJoinRequest)({
    guildId: c
  }), P = null !== (t = (0, S.useSubmittedGuildJoinRequestTotal)({
    guildId: c
  })) && void 0 !== t ? t : 0, j = (0, o.default)("guild-join-requests"), v = e => {
    let {
      row: t
    } = e, n = l[t];
    return null == n ? (0, a.jsx)(N.MemberApplicationsListRowPlaceholder, {}, t) : (0, a.jsx)(N.MemberApplicationsListRow, {
      className: i()({
        [m.selected]: g === n,
        [m.siblingSelected]: g === l[t - 1]
      }),
      guild: h,
      guildJoinRequest: n,
      onClick: () => T.default.setSelectedGuildJoinRequest(c, n),
      applicationStatus: s
    }, "".concat(n.userId, "-").concat(n.applicationStatus, "-").concat(t))
  };
  return p || 0 !== l.length ? (0, a.jsxs)(a.Fragment, {
    children: [0 !== P && s === R.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(u.Text, {
      className: m.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, t) {
        let s = t.toLocaleString();
        switch (e) {
          case R.GuildJoinRequestApplicationStatuses.SUBMITTED:
            return A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.REJECTED:
            return A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.APPROVED:
            return A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: s
            });
          default:
            return ""
        }
      })(s, P).toUpperCase()
    }), (0, a.jsx)(n.ListNavigatorProvider, {
      navigator: j,
      children: (0, a.jsx)(n.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...l
          } = e;
          return (0, a.jsx)(u.List, {
            innerRole: s,
            innerAriaLabel: A.default.Messages.MEMBERS,
            ref: e => {
              var s;
              I.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            paddingTop: 0,
            paddingBottom: 16,
            sectionHeight: 0,
            rowHeight: 64,
            renderSection: M,
            renderRow: v,
            sections: x,
            onScroll: E,
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
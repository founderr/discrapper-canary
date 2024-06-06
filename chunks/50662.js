"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("735250");
s("470079");
var l = s("913527"),
  i = s.n(l),
  n = s("442837"),
  r = s("692547"),
  u = s("481060"),
  o = s("239091"),
  d = s("171368"),
  c = s("650774"),
  I = s("271383"),
  E = s("594174"),
  T = s("441674"),
  f = s("696202"),
  _ = s("497309"),
  R = s("808268"),
  S = s("709054"),
  N = s("246364"),
  m = s("360328"),
  M = s("981631"),
  A = s("689938"),
  C = s("859663");

function h(e) {
  var t;
  let {
    guildJoinRequest: l,
    guild: h,
    guildJoinRequestUser: x
  } = e, {
    createdAt: p,
    actionedAt: g,
    guildId: P,
    userId: j
  } = l, {
    approveRequest: v,
    rejectRequest: O,
    submitting: G
  } = (0, m.useJoinRequestButtonActions)(P, j), L = null === (t = l.actionedByUser) || void 0 === t ? void 0 : t.id, b = (0, n.useStateFromStores)([E.default], () => E.default.getUser(L)), D = (0, n.useStateFromStores)([I.default], () => null != L ? I.default.getMember(P, L) : null, [L, P]), F = (0, n.useStateFromStores)([c.default], () => c.default.getMemberCount(P)), B = (null != F ? F : 0) >= h.maxMembers, V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, U = (0, a.jsx)(_.default, {
    width: 24,
    height: 24,
    className: C.icon
  });
  l.applicationStatus === N.GuildJoinRequestApplicationStatuses.APPROVED ? (V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, U = (0, a.jsx)(T.default, {
    width: 24,
    height: 24,
    className: C.iconApproved,
    backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
  })) : l.applicationStatus === N.GuildJoinRequestApplicationStatuses.REJECTED && (V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, U = (0, a.jsx)(f.default, {
    width: 24,
    height: 24,
    className: C.iconRejected,
    backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
  }));
  let J = null != b && null != g ? A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
    date: i()(S.default.extractTimestamp(g)).format("ll"),
    usernameHook: function() {
      var e;
      return (0, a.jsx)(u.Clickable, {
        className: C.actionedByUser,
        onClick: () => (0, d.openUserProfileModal)({
          userId: b.id,
          guildId: P,
          analyticsLocation: {
            section: M.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: M.AnalyticsObjects.ACTIONED_BY_USER
          }
        }),
        tag: "div",
        role: "link",
        children: (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: null !== (e = null == D ? void 0 : D.nick) && void 0 !== e ? e : b.username
        })
      }, "username-hook")
    }
  }) : i()(p).format("lll");
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsxs)("div", {
      className: C.wrapper,
      children: [(0, a.jsxs)("div", {
        className: C.inline,
        children: [U, (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: V
          }), (0, a.jsx)(u.Text, {
            className: C.headerSubtext,
            variant: "text-xs/normal",
            color: "header-secondary",
            children: J
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: C.inline,
        children: [l.applicationStatus === N.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
          className: C.buttons,
          children: [(0, a.jsx)(u.Tooltip, {
            text: A.default.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
            shouldShow: B,
            children: e => (0, a.jsx)(u.Button, {
              ...e,
              color: u.Button.Colors.GREEN,
              submitting: G,
              disabled: B,
              onClick: v,
              children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
            })
          }), (0, a.jsx)(u.Button, {
            color: u.Button.Colors.RED,
            onClick: O,
            disabled: G,
            children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        }), (0, a.jsx)(u.Clickable, {
          onClick: e => {
            (0, o.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await s.e("84259").then(s.bind(s, "597409"));
              return t => (0, a.jsx)(e, {
                ...t,
                guild: h,
                user: x
              })
            })
          },
          className: C.overflow,
          children: (0, a.jsx)(R.default, {
            width: 20,
            height: 20,
            className: C.iconInteractive
          })
        })]
      })]
    }), l.applicationStatus === N.GuildJoinRequestApplicationStatuses.REJECTED && null != l.rejectionReason && (0, a.jsx)("div", {
      className: C.rejectionReason,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: l.rejectionReason
      })
    })]
  })
}
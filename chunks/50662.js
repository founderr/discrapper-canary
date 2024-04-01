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
  u = s("692547"),
  r = s("481060"),
  o = s("239091"),
  d = s("171368"),
  c = s("271383"),
  E = s("594174"),
  I = s("441674"),
  f = s("696202"),
  T = s("497309"),
  R = s("808268"),
  _ = s("709054"),
  S = s("246364"),
  N = s("360328"),
  A = s("981631"),
  M = s("689938"),
  m = s("943963");

function h(e) {
  var t;
  let {
    guildJoinRequest: l,
    guild: h,
    guildJoinRequestUser: p
  } = e, {
    createdAt: x,
    actionedAt: C,
    guildId: g,
    userId: j
  } = l, {
    approveRequest: P,
    rejectRequest: G,
    submitting: v
  } = (0, N.useJoinRequestButtonActions)(g, j), O = null === (t = l.actionedByUser) || void 0 === t ? void 0 : t.id, L = (0, n.useStateFromStores)([E.default], () => E.default.getUser(O)), D = (0, n.useStateFromStores)([c.default], () => null != O ? c.default.getMember(g, O) : null, [O, g]), b = M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, B = (0, a.jsx)(T.default, {
    width: 24,
    height: 24,
    className: m.icon
  });
  l.applicationStatus === S.GuildJoinRequestApplicationStatuses.APPROVED ? (b = M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, B = (0, a.jsx)(I.default, {
    width: 24,
    height: 24,
    className: m.iconApproved,
    backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
  })) : l.applicationStatus === S.GuildJoinRequestApplicationStatuses.REJECTED && (b = M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, B = (0, a.jsx)(f.default, {
    width: 24,
    height: 24,
    className: m.iconRejected,
    backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
  }));
  let J = null != L && null != C ? M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
    date: i()(_.default.extractTimestamp(C)).format("ll"),
    usernameHook: function() {
      var e;
      return (0, a.jsx)(r.Clickable, {
        className: m.actionedByUser,
        onClick: () => (0, d.openUserProfileModal)({
          userId: L.id,
          guildId: g,
          analyticsLocation: {
            section: A.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: A.AnalyticsObjects.ACTIONED_BY_USER
          }
        }),
        tag: "div",
        role: "link",
        children: (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: null !== (e = null == D ? void 0 : D.nick) && void 0 !== e ? e : L.username
        })
      }, "username-hook")
    }
  }) : i()(x).format("lll");
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: m.wrapper,
      children: [(0, a.jsxs)("div", {
        className: m.inline,
        children: [B, (0, a.jsxs)("div", {
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-sm/semibold",
            children: b
          }), (0, a.jsx)(r.Text, {
            className: m.headerSubtext,
            variant: "text-xs/normal",
            color: "header-secondary",
            children: J
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: m.inline,
        children: [l.applicationStatus === S.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
          className: m.buttons,
          children: [(0, a.jsx)(r.Button, {
            color: r.Button.Colors.GREEN,
            submitting: v,
            onClick: P,
            children: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
          }), (0, a.jsx)(r.Button, {
            color: r.Button.Colors.RED,
            onClick: G,
            disabled: v,
            children: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        }), (0, a.jsx)(r.Clickable, {
          onClick: e => {
            (0, o.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await s.e("84259").then(s.bind(s, "597409"));
              return t => (0, a.jsx)(e, {
                ...t,
                guild: h,
                user: p
              })
            })
          },
          className: m.overflow,
          children: (0, a.jsx)(R.default, {
            width: 20,
            height: 20,
            className: m.iconInteractive
          })
        })]
      })]
    }), l.applicationStatus === S.GuildJoinRequestApplicationStatuses.REJECTED && null != l.rejectionReason && (0, a.jsx)("div", {
      className: m.rejectionReason,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: l.rejectionReason
      })
    })]
  })
}
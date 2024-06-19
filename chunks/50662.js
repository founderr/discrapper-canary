a.d(s, {
  Z: function() {
    return m
  }
});
var n = a(735250);
a(470079);
var t = a(913527),
  l = a.n(t),
  r = a(442837),
  i = a(692547),
  o = a(481060),
  c = a(239091),
  I = a(171368),
  d = a(650774),
  u = a(271383),
  E = a(594174),
  T = a(709054),
  _ = a(246364),
  N = a(360328),
  R = a(981631),
  M = a(689938),
  C = a(568016);

function m(e) {
  var s;
  let {
    guildJoinRequest: t,
    guild: m,
    guildJoinRequestUser: A
  } = e, {
    createdAt: x,
    actionedAt: h,
    guildId: S,
    userId: P
  } = t, {
    approveRequest: g,
    rejectRequest: j,
    submitting: Z
  } = (0, N.s)(S, P), v = null === (s = t.actionedByUser) || void 0 === s ? void 0 : s.id, f = (0, r.e7)([E.default], () => E.default.getUser(v)), O = (0, r.e7)([u.ZP], () => null != v ? u.ZP.getMember(S, v) : null, [v, S]), B = (0, r.e7)([d.Z], () => d.Z.getMemberCount(S)), L = (null != B ? B : 0) >= m.maxMembers, D = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, p = (0, n.jsx)(o.ClockIcon, {
    size: "custom",
    color: "currentColor",
    width: 24,
    height: 24,
    className: C.icon
  });
  t.applicationStatus === _.wB.APPROVED ? (D = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, p = (0, n.jsx)(o.CircleCheckIcon, {
    size: "md",
    className: C.iconApproved,
    color: i.Z.colors.WHITE.css,
    secondaryColor: "currentColor"
  })) : t.applicationStatus === _.wB.REJECTED && (D = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, p = (0, n.jsx)(o.CircleXIcon, {
    size: "md",
    color: i.Z.colors.WHITE.css,
    secondaryColor: i.Z.colors.STATUS_DANGER.css
  }));
  let G = null != f && null != h ? M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
    date: l()(T.default.extractTimestamp(h)).format("ll"),
    usernameHook: function() {
      var e;
      return (0, n.jsx)(o.Clickable, {
        className: C.actionedByUser,
        onClick: () => (0, I.openUserProfileModal)({
          userId: f.id,
          guildId: S,
          analyticsLocation: {
            section: R.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: R.qAy.ACTIONED_BY_USER
          }
        }),
        tag: "div",
        role: "link",
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: null !== (e = null == O ? void 0 : O.nick) && void 0 !== e ? e : f.username
        })
      }, "username-hook")
    }
  }) : l()(x).format("lll");
  return (0, n.jsxs)("div", {
    className: C.container,
    children: [(0, n.jsxs)("div", {
      className: C.wrapper,
      children: [(0, n.jsxs)("div", {
        className: C.inline,
        children: [p, (0, n.jsxs)("div", {
          children: [(0, n.jsx)(o.Heading, {
            variant: "heading-sm/semibold",
            children: D
          }), (0, n.jsx)(o.Text, {
            className: C.headerSubtext,
            variant: "text-xs/normal",
            color: "header-secondary",
            children: G
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: C.inline,
        children: [t.applicationStatus === _.wB.SUBMITTED && (0, n.jsxs)("div", {
          className: C.buttons,
          children: [(0, n.jsx)(o.Tooltip, {
            text: M.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
            shouldShow: L,
            children: e => (0, n.jsx)(o.Button, {
              ...e,
              color: o.Button.Colors.GREEN,
              submitting: Z,
              disabled: L,
              onClick: g,
              children: M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
            })
          }), (0, n.jsx)(o.Button, {
            color: o.Button.Colors.RED,
            onClick: j,
            disabled: Z,
            children: M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        }), (0, n.jsx)(o.Clickable, {
          onClick: e => {
            (0, c.jW)(e, async () => {
              let {
                default: e
              } = await a.e("84259").then(a.bind(a, 597409));
              return s => (0, n.jsx)(e, {
                ...s,
                guild: m,
                user: A
              })
            })
          },
          className: C.overflow,
          children: (0, n.jsx)(o.MoreHorizontalIcon, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: C.iconInteractive
          })
        })]
      })]
    }), t.applicationStatus === _.wB.REJECTED && null != t.rejectionReason && (0, n.jsx)("div", {
      className: C.rejectionReason,
      children: (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: t.rejectionReason
      })
    })]
  })
}
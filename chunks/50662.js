"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("913527"),
  n = s.n(i),
  r = s("442837"),
  u = s("692547"),
  o = s("481060"),
  d = s("239091"),
  c = s("171368"),
  E = s("271383"),
  I = s("594174"),
  f = s("441674"),
  T = s("696202"),
  R = s("497309"),
  _ = s("808268"),
  S = s("709054"),
  N = s("693546"),
  m = s("246364"),
  A = s("981631"),
  M = s("689938"),
  p = s("943963");

function h(e) {
  var t;
  let {
    guildJoinRequest: i,
    guild: h,
    guildJoinRequestUser: x
  } = e, [C, g] = l.useState(!1), {
    createdAt: P,
    actionedAt: j,
    guildId: G,
    userId: v
  } = i, O = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id, D = (0, r.useStateFromStores)([I.default], () => I.default.getUser(O)), L = (0, r.useStateFromStores)([E.default], () => null != O ? E.default.getMember(G, O) : null, [O, G]), b = l.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(M.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE))
  }, []), F = async () => {
    if (!C) {
      g(!0);
      try {
        await N.default.updateGuildJoinRequest(G, v, m.GuildJoinRequestApplicationStatuses.APPROVED)
      } catch {
        b()
      } finally {
        g(!1)
      }
    }
  }, V = M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, B = (0, a.jsx)(R.default, {
    width: 24,
    height: 24,
    className: p.icon
  });
  i.applicationStatus === m.GuildJoinRequestApplicationStatuses.APPROVED ? (V = M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, B = (0, a.jsx)(f.default, {
    width: 24,
    height: 24,
    className: p.iconApproved,
    backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
  })) : i.applicationStatus === m.GuildJoinRequestApplicationStatuses.REJECTED && (V = M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, B = (0, a.jsx)(T.default, {
    width: 24,
    height: 24,
    className: p.iconRejected,
    backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
  }));
  let J = null != D && null != j ? M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
    date: n()(S.default.extractTimestamp(j)).format("ll"),
    usernameHook: function() {
      var e;
      return (0, a.jsx)(o.Clickable, {
        className: p.actionedByUser,
        onClick: () => (0, c.openUserProfileModal)({
          userId: D.id,
          guildId: G,
          analyticsLocation: {
            section: A.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: A.AnalyticsObjects.ACTIONED_BY_USER
          }
        }),
        tag: "div",
        role: "link",
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: null !== (e = null == L ? void 0 : L.nick) && void 0 !== e ? e : D.username
        })
      }, "username-hook")
    }
  }) : n()(P).format("lll");
  return (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsxs)("div", {
      className: p.wrapper,
      children: [(0, a.jsxs)("div", {
        className: p.inline,
        children: [B, (0, a.jsxs)("div", {
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-sm/semibold",
            children: V
          }), (0, a.jsx)(o.Text, {
            className: p.headerSubtext,
            variant: "text-xs/normal",
            color: "header-secondary",
            children: J
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: p.inline,
        children: [i.applicationStatus === m.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
          className: p.buttons,
          children: [(0, a.jsx)(o.Button, {
            color: o.Button.Colors.GREEN,
            submitting: C,
            onClick: () => F(),
            children: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
          }), (0, a.jsx)(o.Button, {
            color: o.Button.Colors.RED,
            onClick: () => {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await s.e("56496").then(s.bind(s, "113886"));
                return t => (0, a.jsx)(e, {
                  modalProps: t,
                  guildId: G,
                  userId: v,
                  onError: b
                })
              })
            },
            disabled: C,
            children: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        }), (0, a.jsx)(o.Clickable, {
          onClick: e => {
            (0, d.openContextMenuLazy)(e, async () => {
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
          className: p.overflow,
          children: (0, a.jsx)(_.default, {
            width: 20,
            height: 20,
            className: p.iconInteractive
          })
        })]
      })]
    }), i.applicationStatus === m.GuildJoinRequestApplicationStatuses.REJECTED && null != i.rejectionReason && (0, a.jsx)("div", {
      className: p.rejectionReason,
      children: (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: i.rejectionReason
      })
    })]
  })
}
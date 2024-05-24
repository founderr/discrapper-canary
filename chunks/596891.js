"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("92114"),
  l = n("194359"),
  u = n("367907"),
  d = n("592125"),
  _ = n("699516"),
  c = n("9156"),
  E = n("594174"),
  I = n("621600"),
  T = n("82554"),
  f = n("981631"),
  S = n("689938"),
  h = n("40834");
t.default = e => {
  let {
    userId: t,
    reportId: n,
    reportName: A,
    showBlock: m,
    showMute: N
  } = e, p = d.default.getDMFromUserId(t), O = (0, s.useStateFromStores)([c.default], () => null == p ? null : c.default.isChannelMuted(null, p)), [C, R] = r.useState(null != O && O), [g, L] = r.useState(!1), v = (0, s.useStateFromStores)([E.default], () => E.default.getUser(t), [t]), D = (0, s.useStateFromStores)([_.default], () => _.default.getRelationshipType(t), [t]) === f.RelationshipTypes.BLOCKED;
  r.useEffect(() => {
    L(D)
  }, [D]);
  let M = r.useCallback(() => {
      L(!0), u.default.trackWithMetadata(f.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, {
        other_user_id: t,
        report_id: n
      }), l.default.addRelationship({
        userId: t,
        context: {
          location: "ReportMenuBlockUser-iOS"
        },
        type: f.RelationshipTypes.BLOCKED
      })
    }, [t, n]),
    y = r.useCallback(() => {
      null != p && (R(!0), u.default.trackWithMetadata(f.AnalyticEvents.IAR_MUTE_USER_BUTTON_CLICKED, {
        other_user_id: t,
        report_id: n
      }), o.default.updateChannelOverrideSettings(null, p, {
        muted: !0
      }, I.NotificationLabels.Muted))
    }, [p, t, n]),
    P = A === T.ReportNames.USER,
    U = P ? S.default.Messages.REPORTS_MUTE_USER_ELEMENT_DESCRIPTION : S.default.Messages.MOBILE_REPORTS_MUTE_ELEMENT_DESCRIPTION,
    b = P ? S.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : S.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION,
    G = P ? S.default.Messages.REPORTS_BLOCK_AND_MUTE_USER_ELEMENT_DESCRIPTION : S.default.Messages.MOBILE_REPORTS_BLOCK_AND_MUTE_ELEMENT_DESCRIPTION,
    w = N || m;
  return null != v && w ? (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsx)(a.Text, {
      className: h.description,
      variant: "text-sm/normal",
      children: m && N ? G : m ? b : U
    }), (0, i.jsxs)("div", {
      className: h.userContainer,
      children: [(0, i.jsxs)("div", {
        className: h.userInfo,
        children: [(0, i.jsx)(a.Avatar, {
          size: a.AvatarSizes.SIZE_32,
          src: v.getAvatarURL(void 0, 32),
          className: h.avatar,
          "aria-label": v.username
        }), (0, i.jsx)(a.Text, {
          className: h.userName,
          variant: "text-sm/semibold",
          children: v.username
        }), !v.isPomelo() && (0, i.jsxs)(a.Text, {
          variant: "text-sm/normal",
          children: ["#", v.discriminator]
        })]
      }), (0, i.jsxs)("div", {
        className: h.actionButtonsContainer,
        children: [N && (0, i.jsx)(a.Button, {
          onClick: y,
          disabled: C,
          size: a.Button.Sizes.SMALL,
          color: a.Button.Colors.PRIMARY,
          children: C ? S.default.Messages.MUTED : S.default.Messages.MUTE
        }), m && (0, i.jsx)(a.Button, {
          onClick: M,
          disabled: g,
          size: a.Button.Sizes.SMALL,
          color: a.Button.Colors.RED,
          children: g ? S.default.Messages.BLOCKED : S.default.Messages.BLOCK
        })]
      })]
    })]
  }) : null
}
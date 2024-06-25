"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(92114),
  l = n(194359),
  u = n(367907),
  _ = n(592125),
  c = n(699516),
  d = n(9156),
  E = n(594174),
  I = n(621600),
  T = n(82554),
  h = n(981631),
  f = n(689938),
  S = n(771102);
t.Z = e => {
  let {
    userId: t,
    reportId: n,
    reportName: A,
    showBlock: N,
    showMute: m
  } = e, O = _.Z.getDMFromUserId(t), p = (0, s.e7)([d.ZP], () => null == O ? null : d.ZP.isChannelMuted(null, O)), [R, g] = r.useState(null != p && p), [C, v] = r.useState(!1), L = (0, s.e7)([E.default], () => E.default.getUser(t), [t]), D = (0, s.e7)([c.Z], () => c.Z.getRelationshipType(t), [t]) === h.OGo.BLOCKED;
  r.useEffect(() => {
    v(D)
  }, [D]);
  let M = r.useCallback(() => {
      v(!0), u.ZP.trackWithMetadata(h.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
        other_user_id: t,
        report_id: n
      }), l.Z.addRelationship({
        userId: t,
        context: {
          location: "ReportMenuBlockUser-iOS"
        },
        type: h.OGo.BLOCKED
      })
    }, [t, n]),
    P = r.useCallback(() => {
      null != O && (g(!0), u.ZP.trackWithMetadata(h.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
        other_user_id: t,
        report_id: n
      }), a.Z.updateChannelOverrideSettings(null, O, {
        muted: !0
      }, I.ZB.Muted))
    }, [O, t, n]),
    y = A === T.b.USER,
    U = y ? f.Z.Messages.REPORTS_MUTE_USER_ELEMENT_DESCRIPTION : f.Z.Messages.MOBILE_REPORTS_MUTE_ELEMENT_DESCRIPTION,
    b = y ? f.Z.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : f.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION,
    G = y ? f.Z.Messages.REPORTS_BLOCK_AND_MUTE_USER_ELEMENT_DESCRIPTION : f.Z.Messages.MOBILE_REPORTS_BLOCK_AND_MUTE_ELEMENT_DESCRIPTION,
    w = m || N;
  return null != L && w ? (0, i.jsxs)("div", {
    className: S.container,
    children: [(0, i.jsx)(o.Text, {
      className: S.description,
      variant: "text-sm/normal",
      children: N && m ? G : N ? b : U
    }), (0, i.jsxs)("div", {
      className: S.userContainer,
      children: [(0, i.jsxs)("div", {
        className: S.userInfo,
        children: [(0, i.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_32,
          src: L.getAvatarURL(void 0, 32),
          className: S.avatar,
          "aria-label": L.username
        }), (0, i.jsx)(o.Text, {
          className: S.userName,
          variant: "text-sm/semibold",
          children: L.username
        }), !L.isPomelo() && (0, i.jsxs)(o.Text, {
          variant: "text-sm/normal",
          children: ["#", L.discriminator]
        })]
      }), (0, i.jsxs)("div", {
        className: S.actionButtonsContainer,
        children: [m && (0, i.jsx)(o.Button, {
          onClick: P,
          disabled: R,
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.PRIMARY,
          children: R ? f.Z.Messages.MUTED : f.Z.Messages.MUTE
        }), N && (0, i.jsx)(o.Button, {
          onClick: M,
          disabled: C,
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.RED,
          children: C ? f.Z.Messages.BLOCKED : f.Z.Messages.BLOCK
        })]
      })]
    })]
  }) : null
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("913527"),
  i = n.n(l),
  r = n("442837"),
  o = n("422045"),
  u = n("481060"),
  d = n("727637"),
  c = n("782568"),
  f = n("317632"),
  E = n("174767"),
  _ = n("594174"),
  m = n("507893"),
  T = n("55935"),
  I = n("689938"),
  p = n("415508");

function h(e) {
  let {
    invite: t,
    expired: n
  } = e, l = (0, r.useStateFromStores)([_.default], () => {
    var e, n;
    return null !== (n = null === (e = _.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
  }), c = (0, T.dateFormat)(i()(t.created_at), "LT"), f = a.useRef(null), m = (0, d.default)(f);
  return a.useEffect(() => {
    !n && (0, E.updateInviteStatus)(t)
  }, [t, n]), (0, s.jsxs)("div", {
    className: p.container,
    ref: f,
    children: [(0, s.jsxs)("div", {
      className: p.primaryRow,
      children: [(0, s.jsx)("img", {
        className: p.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, s.jsx)(u.Text, {
        className: p.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: I.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
          username: l
        })
      }), (0, s.jsxs)("div", {
        className: p.buttonContainer,
        children: [(0, s.jsx)(N, {
          expired: n,
          invite: t,
          isHoveringInvite: m
        }), (0, s.jsx)(u.CircleIconButton, {
          className: p.deleteButton,
          tooltip: I.default.Messages.DELETE,
          color: u.CircleIconButtonColors.SECONDARY,
          icon: (0, s.jsx)(o.TrashIcon, {
            width: 16,
            height: 16
          }),
          onClick: () => {
            (0, E.deleteInvite)(t)
          }
        })]
      })]
    }), (0, s.jsx)("div", {
      className: p.divider
    }), (0, s.jsxs)("div", {
      className: p.secondaryRow,
      children: [(0, s.jsxs)(u.Text, {
        variant: "text-xs/medium",
        className: p.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", c]
      }), n && (0, s.jsx)("div", {
        className: p.metaContainer,
        children: (0, s.jsx)(u.Text, {
          variant: "text-xxs/semibold",
          className: p.__invalid_metaText,
          color: "text-muted",
          children: I.default.Messages.GAME_INVITES_EXPIRED
        })
      })]
    })]
  })
}

function N(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: l
  } = e, i = (0, r.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(n)), o = (0, r.useStateFromStores)([f.default], () => f.default.isInviteJoinable(n)), [d, _] = a.useState(!1), T = a.useCallback(async () => {
    _(!0);
    try {
      await (0, E.launchInviteGame)(n)
    } catch {}
    _(!1)
  }, [n]), h = a.useCallback(async () => {
    _(!0);
    try {
      await (0, E.acceptInvite)(n)
    } catch {}
    _(!1)
  }, [n]);
  if (t) return i && l ? (0, s.jsx)(u.Button, {
    className: p.primaryButton,
    color: u.ButtonColors.TRANSPARENT,
    disabled: d,
    size: u.ButtonSizes.SMALL,
    onClick: T,
    children: I.default.Messages.GAME_INVITES_LAUNCH_GAME
  }) : null;
  return i && o ? (0, s.jsx)(u.Button, {
    className: p.primaryButton,
    color: u.ButtonColors.GREEN,
    disabled: d,
    size: u.ButtonSizes.SMALL,
    onClick: h,
    children: I.default.Messages.GAME_INVITES_JOIN_GAME
  }) : null != n.fallback_url ? (0, s.jsx)(u.Button, {
    className: p.primaryButton,
    disabled: d,
    size: u.ButtonSizes.SMALL,
    color: u.ButtonColors.TRANSPARENT,
    onClick: () => (0, c.default)(n.fallback_url),
    children: I.default.Messages.GAME_INVITES_INSTALL_GAME
  }) : (0, s.jsx)(u.Tooltip, {
    text: I.default.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({
      gameTitle: n.application_name
    }),
    children: e => (0, s.jsx)(u.Button, {
      ...e,
      className: p.primaryButton,
      disabled: !0,
      size: u.ButtonSizes.SMALL,
      color: u.ButtonColors.TRANSPARENT,
      onClick: () => (0, c.default)(n.fallback_url),
      children: (0, s.jsxs)("div", {
        className: p.launchToJoinContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-xxs/medium",
          className: p.launchToJoinText,
          color: "text-muted",
          children: I.default.Messages.GAME_INVITES_LAUNCH_TO_JOIN
        }), (0, s.jsx)(m.default, {
          color: u.tokens.colors.TEXT_MUTED.css,
          width: 12,
          height: 12
        })]
      })
    })
  })
}
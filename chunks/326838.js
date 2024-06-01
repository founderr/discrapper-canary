"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("913527"),
  i = n.n(s),
  r = n("442837"),
  o = n("422045"),
  u = n("481060"),
  d = n("727637"),
  c = n("782568"),
  f = n("317632"),
  h = n("174767"),
  E = n("594174"),
  m = n("836946"),
  p = n("507893"),
  S = n("55935"),
  g = n("689938"),
  N = n("415508");

function _(e) {
  let {
    invite: t,
    expired: n
  } = e, s = (0, r.useStateFromStores)([E.default], () => {
    var e, n;
    return null !== (n = null === (e = E.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
  }), c = (0, S.dateFormat)(i()(t.created_at), "LT"), f = l.useRef(null), p = (0, d.default)(f);
  return l.useEffect(() => {
    !n && (0, h.updateInviteStatus)(t)
  }, [t, n]), (0, a.jsxs)("div", {
    className: N.container,
    ref: f,
    children: [(0, a.jsxs)("div", {
      className: N.primaryRow,
      children: [(0, a.jsx)("img", {
        className: N.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, a.jsx)(u.Text, {
        className: N.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: g.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
          username: s
        })
      }), (0, a.jsxs)("div", {
        className: N.buttonContainer,
        children: [(0, a.jsx)(I, {
          expired: n,
          invite: t,
          isHoveringInvite: p
        }), (0, a.jsx)(m.default, {
          className: N.deleteButton,
          tooltip: g.default.Messages.DELETE,
          color: m.CircleIconButtonColors.SECONDARY,
          icon: (0, a.jsx)(o.TrashIcon, {
            width: 16,
            height: 16
          }),
          onClick: () => {
            (0, h.deleteInvite)(t)
          }
        })]
      })]
    }), (0, a.jsx)("div", {
      className: N.divider
    }), (0, a.jsxs)("div", {
      className: N.secondaryRow,
      children: [(0, a.jsxs)(u.Text, {
        variant: "text-xs/medium",
        className: N.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", c]
      }), n && (0, a.jsx)("div", {
        className: N.metaContainer,
        children: (0, a.jsx)(u.Text, {
          variant: "text-xxs/semibold",
          className: N.__invalid_metaText,
          color: "text-muted",
          children: g.default.Messages.GAME_INVITES_EXPIRED
        })
      })]
    })]
  })
}

function I(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: s
  } = e, i = (0, r.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(n)), o = (0, r.useStateFromStores)([f.default], () => f.default.isInviteJoinable(n)), [d, E] = l.useState(!1), m = l.useCallback(async () => {
    E(!0);
    try {
      await (0, h.launchInviteGame)(n)
    } catch {}
    E(!1)
  }, [n]), S = l.useCallback(async () => {
    E(!0);
    try {
      await (0, h.acceptInvite)(n)
    } catch {}
    E(!1)
  }, [n]);
  if (t) return i && s ? (0, a.jsx)(u.Button, {
    className: N.primaryButton,
    color: u.ButtonColors.TRANSPARENT,
    disabled: d,
    size: u.ButtonSizes.SMALL,
    onClick: m,
    children: g.default.Messages.GAME_INVITES_LAUNCH_GAME
  }) : null;
  return i && o ? (0, a.jsx)(u.Button, {
    className: N.primaryButton,
    color: u.ButtonColors.GREEN,
    disabled: d,
    size: u.ButtonSizes.SMALL,
    onClick: S,
    children: g.default.Messages.GAME_INVITES_JOIN_GAME
  }) : null != n.fallback_url ? (0, a.jsx)(u.Button, {
    className: N.primaryButton,
    disabled: d,
    size: u.ButtonSizes.SMALL,
    color: u.ButtonColors.TRANSPARENT,
    onClick: () => (0, c.default)(n.fallback_url),
    children: g.default.Messages.GAME_INVITES_INSTALL_GAME
  }) : (0, a.jsx)(u.Tooltip, {
    text: g.default.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({
      gameTitle: n.application_name
    }),
    children: e => (0, a.jsx)(u.Button, {
      ...e,
      className: N.primaryButton,
      disabled: !0,
      size: u.ButtonSizes.SMALL,
      color: u.ButtonColors.TRANSPARENT,
      onClick: () => (0, c.default)(n.fallback_url),
      children: (0, a.jsxs)("div", {
        className: N.launchToJoinContainer,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xxs/medium",
          className: N.launchToJoinText,
          color: "text-muted",
          children: g.default.Messages.GAME_INVITES_LAUNCH_TO_JOIN
        }), (0, a.jsx)(p.default, {
          color: u.tokens.colors.TEXT_MUTED.css,
          width: 12,
          height: 12
        })]
      })
    })
  })
}
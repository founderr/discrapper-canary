n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(913527),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(727637),
  u = n(782568),
  d = n(317632),
  E = n(174767),
  _ = n(594174),
  I = n(55935),
  T = n(689938),
  m = n(960626);

function N(e) {
  let {
    invite: t,
    expired: n
  } = e, l = (0, r.e7)([_.default], () => {
    var e, n;
    return null !== (n = null === (e = _.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
  }), u = (0, I.vc)(a()(t.created_at), "LT"), d = i.useRef(null), N = (0, c.Z)(d);
  return i.useEffect(() => {
    !n && (0, E.Br)(t)
  }, [t, n]), (0, s.jsxs)("div", {
    className: m.container,
    ref: d,
    children: [(0, s.jsxs)("div", {
      className: m.primaryRow,
      children: [(0, s.jsx)("img", {
        className: m.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, s.jsx)(o.Text, {
        className: m.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: T.Z.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
          username: l
        })
      }), (0, s.jsxs)("div", {
        className: m.buttonContainer,
        children: [(0, s.jsx)(h, {
          expired: n,
          invite: t,
          isHoveringInvite: N
        }), (0, s.jsx)(o.CircleIconButton, {
          className: m.deleteButton,
          tooltip: T.Z.Messages.DELETE,
          color: o.CircleIconButtonColors.SECONDARY,
          icon: (0, s.jsx)(o.TrashIcon, {
            size: "xs"
          }),
          onClick: () => {
            (0, E.UF)(t)
          }
        })]
      })]
    }), (0, s.jsx)("div", {
      className: m.divider
    }), (0, s.jsxs)("div", {
      className: m.secondaryRow,
      children: [(0, s.jsxs)(o.Text, {
        variant: "text-xs/medium",
        className: m.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", u]
      }), n && (0, s.jsx)("div", {
        className: m.metaContainer,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xxs/semibold",
          className: m.__invalid_metaText,
          color: "text-muted",
          children: T.Z.Messages.GAME_INVITES_EXPIRED
        })
      })]
    })]
  })
}

function h(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: l
  } = e, a = (0, r.e7)([d.Z], () => d.Z.isInviteGameInstalled(n)), c = (0, r.e7)([d.Z], () => d.Z.isInviteJoinable(n)), [_, I] = i.useState(!1), N = i.useCallback(async () => {
    I(!0);
    try {
      await (0, E.MH)(n)
    } catch {}
    I(!1)
  }, [n]), h = i.useCallback(async () => {
    I(!0);
    try {
      await (0, E.Ol)(n)
    } catch {}
    I(!1)
  }, [n]);
  if (t) return a && l ? (0, s.jsx)(o.Button, {
    className: m.primaryButton,
    color: o.ButtonColors.TRANSPARENT,
    disabled: _,
    size: o.ButtonSizes.SMALL,
    onClick: N,
    children: T.Z.Messages.GAME_INVITES_LAUNCH_GAME
  }) : null;
  return a && c ? (0, s.jsx)(o.Button, {
    className: m.primaryButton,
    color: o.ButtonColors.GREEN,
    disabled: _,
    size: o.ButtonSizes.SMALL,
    onClick: h,
    children: T.Z.Messages.GAME_INVITES_JOIN_GAME
  }) : null != n.fallback_url ? (0, s.jsx)(o.Button, {
    className: m.primaryButton,
    disabled: _,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.TRANSPARENT,
    onClick: () => (0, u.Z)(n.fallback_url),
    children: T.Z.Messages.GAME_INVITES_INSTALL_GAME
  }) : (0, s.jsx)(o.Tooltip, {
    text: T.Z.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({
      gameTitle: n.application_name
    }),
    children: e => (0, s.jsx)(o.Button, {
      ...e,
      className: m.primaryButton,
      disabled: !0,
      size: o.ButtonSizes.SMALL,
      color: o.ButtonColors.TRANSPARENT,
      onClick: () => (0, u.Z)(n.fallback_url),
      children: (0, s.jsxs)("div", {
        className: m.launchToJoinContainer,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-xxs/medium",
          className: m.launchToJoinText,
          color: "text-muted",
          children: T.Z.Messages.GAME_INVITES_LAUNCH_TO_JOIN
        }), (0, s.jsx)(o.CircleInformationIcon, {
          size: "xxs",
          color: o.tokens.colors.TEXT_MUTED.css
        })]
      })
    })
  })
}
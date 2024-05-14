"use strict";
n.r(t), n.d(t, {
  GuildsBarClanAdminUpsellPopout: function() {
    return T
  },
  GuildsBarClanUserUpsellPopout: function() {
    return N
  },
  GuildsBarFixedFooter: function() {
    return A
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("266067"),
  i = n("727075"),
  r = n("524437"),
  o = n("481060"),
  u = n("350810"),
  d = n("100527"),
  c = n("970606"),
  f = n("824991"),
  h = n("802001"),
  p = n("243778"),
  m = n("602147"),
  C = n("981631"),
  g = n("308083"),
  E = n("921944"),
  _ = n("689938"),
  I = n("41004");

function S(e) {
  let {
    title: t,
    message: n,
    dismissibleContent: r,
    defaultGameId: d,
    onPopoutVisible: c,
    onClick: h,
    children: _,
    isEligibleForUpsell: S = !0,
    withInviteIcon: N = !0
  } = e, T = (0, s.useLocation)(), [A, L] = (0, p.useSelectedDismissibleContent)([r], E.DismissibleContentGroupName.SIDEBAR), v = A !== r, x = (0, u.default)(), R = S && !x && !v && T.pathname !== C.Routes.GUILD_DISCOVERY;
  a.useEffect(() => {
    R && c()
  }, [R, c]);
  let M = a.useMemo(() => {
      switch (d) {
        case g.VALORANT_ID:
          return I.valorantBackgroundImage;
        case g.GENSHIN_ID:
          return I.genshinBackgroundImage;
        default:
          return
      }
    }, [d]),
    y = a.useCallback(() => {
      L(E.ContentDismissActionType.TAKE_ACTION), h(), (0, m.handleDiscoveryButtonClick)()
    }, [L, h]),
    O = a.useCallback(e => {
      e(), L(E.ContentDismissActionType.USER_DISMISS)
    }, [L]);
  return (0, l.jsxs)("div", {
    className: I.container,
    children: [(0, l.jsx)(o.Popout, {
      shouldShow: R,
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, l.jsxs)("div", {
          className: I.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: M
          }), (0, l.jsx)(o.Clickable, {
            onClick: () => O(a),
            className: I.close,
            children: (0, l.jsx)(i.CloseSmallIcon, {
              width: 16,
              height: 16,
              color: o.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: I.popoutContent,
            children: [N && (0, l.jsx)(f.ClanUpsellInviteByline, {}), (0, l.jsx)(f.ClanUpsellTitle, {
              title: t
            }), (0, l.jsx)(f.ClanUpsellMessage, {
              message: n
            }), (0, l.jsx)(f.ClanUpsellButton, {
              onClick: y
            })]
          }), (0, l.jsx)("div", {
            className: I.popoutCaret
          })]
        })
      },
      position: "top",
      animationPosition: "top",
      align: "left",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: I.popoutAnchor
      })
    }), _({
      onClick: y
    })]
  })
}

function N(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, s = a.useCallback(() => {
    (0, c.trackClanUserInviteViewed)({
      location: d.default.GUILDS_LIST
    })
  }, []), i = a.useCallback(() => {
    (0, c.trackClanUserInviteClicked)({
      location: d.default.GUILDS_LIST
    })
  }, []), [o, u] = a.useMemo(() => {
    switch (t) {
      case g.GENSHIN_ID:
        return [_.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_TITLE, _.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_MESSAGE];
      case g.VALORANT_ID:
        return [_.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_TITLE, _.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(S, {
    title: o,
    message: u,
    dismissibleContent: r.DismissibleContent.GUILD_LIST_CLAN_USER_UPSELL,
    defaultGameId: t,
    onClick: i,
    onPopoutVisible: s,
    withInviteIcon: !1,
    children: n
  })
}

function T(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, s = (0, h.useGuildsEligibleForClanConversion)("GuildsBarClanAdminUpsellPopout").length > 0, i = a.useCallback(() => {
    (0, c.trackClanAdminInviteViewed)({
      location: d.default.GUILDS_LIST
    })
  }, []), o = a.useCallback(() => {
    (0, c.trackClanAdminInviteClicked)({
      location: d.default.GUILDS_LIST
    })
  }, []), [u, f] = a.useMemo(() => {
    switch (t) {
      case g.GENSHIN_ID:
        return [_.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE, _.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      case g.VALORANT_ID:
        return [_.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE, _.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(S, {
    title: u,
    message: f,
    dismissibleContent: r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL,
    defaultGameId: t,
    onClick: o,
    isEligibleForUpsell: s,
    onPopoutVisible: i,
    children: n
  })
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: I.footer,
    children: [(0, l.jsx)("div", {
      className: I.gradient
    }), t]
  })
}
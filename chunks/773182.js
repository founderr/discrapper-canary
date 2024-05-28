"use strict";
n.r(t), n.d(t, {
  GuildsBarClanAdminUpsellPopout: function() {
    return M
  },
  GuildsBarClanApplicationCoachmarkPopout: function() {
    return y
  },
  GuildsBarClanUserUpsellPopout: function() {
    return R
  },
  GuildsBarFixedFooter: function() {
    return O
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("266067"),
  o = n("727075"),
  u = n("442837"),
  d = n("524437"),
  c = n("481060"),
  f = n("350810"),
  h = n("110924"),
  m = n("100527"),
  p = n("970606"),
  C = n("963202"),
  g = n("824991"),
  E = n("243778"),
  S = n("863249"),
  _ = n("937111"),
  I = n("602147"),
  N = n("981631"),
  T = n("308083"),
  A = n("921944"),
  L = n("689938"),
  v = n("41004");

function x(e) {
  let {
    title: t,
    message: n,
    dismissibleContent: s,
    defaultGameId: i,
    onPopoutVisible: u,
    onClick: d,
    children: h,
    isEligibleForUpsell: m = !0,
    withInviteIcon: p = !0
  } = e, C = (0, r.useLocation)(), [S, _] = (0, E.useSelectedDismissibleContent)([s], A.DismissibleContentGroupName.SIDEBAR), L = S !== s, x = (0, f.default)(), R = m && !x && !L && C.pathname !== N.Routes.GUILD_DISCOVERY;
  a.useEffect(() => {
    R && u()
  }, [R, u]);
  let M = a.useMemo(() => {
      switch (i) {
        case T.VALORANT_ID:
          return v.valorantBackgroundImage;
        case T.GENSHIN_ID:
          return v.genshinBackgroundImage;
        default:
          return
      }
    }, [i]),
    y = a.useCallback(() => {
      _(A.ContentDismissActionType.TAKE_ACTION), d(), (0, I.handleDiscoveryButtonClick)()
    }, [_, d]),
    O = a.useCallback(e => {
      e(), _(A.ContentDismissActionType.USER_DISMISS)
    }, [_]);
  return (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(c.Popout, {
      shouldShow: R,
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, l.jsxs)("div", {
          className: v.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: M
          }), (0, l.jsx)(c.Clickable, {
            onClick: () => O(a),
            className: v.close,
            children: (0, l.jsx)(o.CloseSmallIcon, {
              width: 16,
              height: 16,
              color: c.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: v.popoutContent,
            children: [p && (0, l.jsx)(g.ClanUpsellInviteByline, {}), (0, l.jsx)(g.ClanUpsellTitle, {
              title: t
            }), (0, l.jsx)(g.ClanUpsellMessage, {
              message: n
            }), (0, l.jsx)(g.ClanUpsellButton, {
              onClick: y
            })]
          }), (0, l.jsx)("div", {
            className: v.popoutCaret
          })]
        })
      },
      position: "top",
      animationPosition: "top",
      align: "left",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: v.popoutAnchor
      })
    }), h({
      onClick: y
    })]
  })
}

function R(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, s = a.useCallback(() => {
    (0, p.trackClanUserInviteViewed)({
      location: m.default.GUILDS_LIST
    })
  }, []), i = a.useCallback(() => {
    (0, p.trackClanUserInviteClicked)({
      location: m.default.GUILDS_LIST
    })
  }, []), [r, o] = a.useMemo(() => {
    switch (t) {
      case T.GENSHIN_ID:
        return [L.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_TITLE, L.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_MESSAGE];
      case T.VALORANT_ID:
        return [L.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_TITLE, L.default.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(x, {
    title: r,
    message: o,
    dismissibleContent: d.DismissibleContent.GUILD_LIST_CLAN_USER_UPSELL,
    defaultGameId: t,
    onClick: i,
    onPopoutVisible: s,
    withInviteIcon: !1,
    children: n
  })
}

function M(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, {
    guilds: s
  } = (0, C.useClanPrepilotExperimentForAllGuilds)({
    location: "GuildsBarClanAdminUpsellPopout",
    includeConverted: !1
  }), i = s.length > 0, r = a.useCallback(() => {
    (0, p.trackClanAdminInviteViewed)({
      location: m.default.GUILDS_LIST
    })
  }, []), o = a.useCallback(() => {
    (0, p.trackClanAdminInviteClicked)({
      location: m.default.GUILDS_LIST
    })
  }, []), [u, c] = a.useMemo(() => {
    switch (t) {
      case T.GENSHIN_ID:
        return [L.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE, L.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      case T.VALORANT_ID:
        return [L.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE, L.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(x, {
    title: u,
    message: c,
    dismissibleContent: d.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL,
    defaultGameId: t,
    onClick: o,
    isEligibleForUpsell: i,
    onPopoutVisible: r,
    children: n
  })
}

function y(e) {
  let {
    onActivate: t,
    children: n
  } = e, s = (0, u.useStateFromStores)([_.default], () => _.default.hasJoinRequestCoackmark()), i = a.useCallback(() => {
    S.default.clearCoachmark()
  }, []), r = (0, h.default)(s), o = a.useRef(null);
  return a.useEffect(() => {
    if (s && s !== r) {
      var e, n, l, a, i;
      t(), null === (i = o.current) || void 0 === i || null === (a = i.ref) || void 0 === a || null === (l = a.current) || void 0 === l || null === (n = l.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition()
    }
  }, [o, s, r, t]), (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(c.Popout, {
      ref: o,
      shouldShow: s,
      renderPopout: () => (0, l.jsxs)("div", {
        className: v.popoutContainer,
        children: [(0, l.jsxs)("div", {
          className: v.popoutContent,
          children: [(0, l.jsxs)("div", {
            className: v.coachmarkTextContainer,
            children: [(0, l.jsx)(c.Heading, {
              variant: "heading-md/medium",
              children: L.default.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: L.default.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
            })]
          }), (0, l.jsx)(c.Button, {
            fullWidth: !0,
            size: c.ButtonSizes.SMALL,
            color: c.ButtonColors.BRAND,
            onClick: i,
            children: L.default.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
          })]
        }), (0, l.jsx)("div", {
          className: v.popoutCaretLeft
        })]
      }),
      position: "right",
      animationPosition: "right",
      align: "top",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: v.popoutAnchor
      })
    }), n]
  })
}

function O(e) {
  let {
    hideGradient: t,
    children: n
  } = e;
  return (0, l.jsxs)("div", {
    className: v.footer,
    children: [(0, l.jsx)("div", {
      className: i()(v.gradient, {
        [v.gradientHidden]: t
      })
    }), n]
  })
}
"use strict";
n.r(t), n.d(t, {
  GuildsBarClanAdminUpsellPopout: function() {
    return x
  },
  GuildsBarFixedFooter: function() {
    return R
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("266067"),
  i = n("727075"),
  r = n("524437"),
  o = n("481060"),
  u = n("212093"),
  d = n("350810"),
  c = n("100527"),
  f = n("970606"),
  h = n("824991"),
  p = n("802001"),
  m = n("243778"),
  C = n("703656"),
  g = n("104259"),
  E = n("603592"),
  S = n("981631"),
  _ = n("308083"),
  I = n("731455"),
  N = n("921944"),
  T = n("689938"),
  A = n("434884");

function L() {
  window.location.pathname.startsWith(S.Routes.GUILD_DISCOVERY) && ((0, u.clearSearch)(), (0, u.selectCategory)(I.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let e = (0, C.getHistory)().location.search;
  (0, C.transitionTo)(S.Routes.GUILD_DISCOVERY, {
    search: e
  })
}
let v = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a,
    className: s,
    onClick: i
  } = e;
  return (0, l.jsx)(E.default, {
    id: "guild-discover-button",
    ref: t,
    className: s,
    onClick: null != i ? i : L,
    selected: n,
    tooltip: null != a ? a : T.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    icon: g.default
  })
});

function x(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, u = (0, p.useGuildsEligibleForClanConversion)("GuildsBarClanAdminUpsellPopout"), C = (0, s.useLocation)(), [g, E] = (0, m.useSelectedDismissibleContent)([r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL], N.DismissibleContentGroupName.SIDEBAR), I = g !== r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL, v = (0, d.default)(), x = u.length > 0 && !v && !I && C.pathname !== S.Routes.GUILD_DISCOVERY;
  a.useEffect(() => {
    x && (0, f.trackClanAdminInviteViewed)({
      location: c.default.GUILDS_LIST
    })
  }, [x]);
  let R = a.useMemo(() => {
      switch (t) {
        case _.VALORANT_ID:
          return A.valorantBackgroundImage;
        case _.GENSHIN_ID:
          return A.genshinBackgroundImage;
        default:
          return
      }
    }, [t]),
    M = a.useCallback(() => {
      (0, f.trackClanAdminInviteClicked)({
        location: c.default.GUILDS_LIST
      }), E(N.ContentDismissActionType.TAKE_ACTION), L()
    }, [E]),
    y = a.useCallback(e => {
      e(), E(N.ContentDismissActionType.USER_DISMISS)
    }, [E]);
  return (0, l.jsxs)("div", {
    className: A.container,
    children: [(0, l.jsx)(o.Popout, {
      shouldShow: x,
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, l.jsxs)("div", {
          className: A.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: R
          }), (0, l.jsx)(o.Clickable, {
            onClick: () => y(n),
            className: A.close,
            children: (0, l.jsx)(i.CloseSmallIcon, {
              width: 16,
              height: 16,
              color: o.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: A.popoutContent,
            children: [(0, l.jsx)(h.ClanUpsellTitle, {
              title: T.default.Messages.CLAN_GUILD_LIST_ADMIN_UPSELL_TITLE
            }), (0, l.jsx)(h.ClanUpsellMessage, {
              defaultGameId: t
            }), (0, l.jsx)(h.ClanUpsellButton, {
              onClick: M
            })]
          }), (0, l.jsx)("div", {
            className: A.popoutCaret
          })]
        })
      },
      position: "top",
      animationPosition: "top",
      align: "left",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: A.popoutAnchor
      })
    }), n({
      onClick: M
    })]
  })
}

function R(e) {
  let {
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: A.footer,
    children: [(0, l.jsx)("div", {
      className: A.gradient
    }), t]
  })
}
t.default = v
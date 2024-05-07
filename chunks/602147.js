"use strict";
n.r(t), n.d(t, {
  GuildsBarClanAdminUpsellPopout: function() {
    return v
  },
  GuildsBarFixedFooter: function() {
    return x
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
  p = n("243778"),
  m = n("703656"),
  C = n("104259"),
  g = n("603592"),
  E = n("981631"),
  S = n("308083"),
  _ = n("731455"),
  I = n("921944"),
  N = n("689938"),
  T = n("434884");

function A() {
  window.location.pathname.startsWith(E.Routes.GUILD_DISCOVERY) && ((0, u.clearSearch)(), (0, u.selectCategory)(_.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let e = (0, m.getHistory)().location.search;
  (0, m.transitionTo)(E.Routes.GUILD_DISCOVERY, {
    search: e
  })
}
let L = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a,
    className: s,
    onClick: i
  } = e;
  return (0, l.jsx)(g.default, {
    id: "guild-discover-button",
    ref: t,
    className: s,
    onClick: null != i ? i : A,
    selected: n,
    tooltip: null != a ? a : N.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    icon: C.default
  })
});

function v(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, u = (0, s.useLocation)(), [m, C] = (0, p.useSelectedDismissibleContent)([r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL], I.DismissibleContentGroupName.SIDEBAR), g = m !== r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL, _ = !(0, d.default)() && !g && u.pathname !== E.Routes.GUILD_DISCOVERY;
  a.useEffect(() => {
    _ && (0, f.trackClanAdminInviteViewed)({
      location: c.default.GUILDS_LIST
    })
  }, [_]);
  let L = a.useMemo(() => {
      switch (t) {
        case S.VALORANT_ID:
          return T.valorantBackgroundImage;
        case S.GENSHIN_ID:
          return T.genshinBackgroundImage;
        default:
          return
      }
    }, [t]),
    v = a.useCallback(() => {
      (0, f.trackClanAdminInviteClicked)({
        location: c.default.GUILDS_LIST
      }), C(I.ContentDismissActionType.TAKE_ACTION), A()
    }, [C]),
    x = a.useCallback(e => {
      e(), C(I.ContentDismissActionType.USER_DISMISS)
    }, [C]);
  return (0, l.jsxs)("div", {
    className: T.container,
    children: [(0, l.jsx)(o.Popout, {
      shouldShow: _,
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, l.jsxs)("div", {
          className: T.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: L
          }), (0, l.jsx)(o.Clickable, {
            onClick: () => x(n),
            className: T.close,
            children: (0, l.jsx)(i.CloseSmallIcon, {
              width: 16,
              height: 16,
              color: o.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: T.popoutContent,
            children: [(0, l.jsx)(h.ClanUpsellTitle, {
              title: N.default.Messages.CLAN_GUILD_LIST_ADMIN_UPSELL_TITLE
            }), (0, l.jsx)(h.ClanUpsellMessage, {
              defaultGameId: t
            }), (0, l.jsx)(h.ClanUpsellButton, {
              onClick: v
            })]
          }), (0, l.jsx)("div", {
            className: T.popoutCaret
          })]
        })
      },
      position: "top",
      animationPosition: "top",
      align: "left",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: T.popoutAnchor
      })
    }), n({
      onClick: v
    })]
  })
}

function x(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: T.footer,
    children: t
  })
}
t.default = L
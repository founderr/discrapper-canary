"use strict";
n.r(t), n.d(t, {
  GuildsBarClanAdminUpsellPopout: function() {
    return A
  },
  GuildsBarFixedFooter: function() {
    return L
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
  c = n("824991"),
  f = n("243778"),
  h = n("703656"),
  p = n("104259"),
  m = n("603592"),
  C = n("981631"),
  g = n("308083"),
  E = n("731455"),
  S = n("921944"),
  _ = n("689938"),
  I = n("434884");

function N() {
  window.location.pathname.startsWith(C.Routes.GUILD_DISCOVERY) && ((0, u.clearSearch)(), (0, u.selectCategory)(E.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let e = (0, h.getHistory)().location.search;
  (0, h.transitionTo)(C.Routes.GUILD_DISCOVERY, {
    search: e
  })
}
let T = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a,
    className: s,
    onClick: i
  } = e;
  return (0, l.jsx)(m.default, {
    id: "guild-discover-button",
    ref: t,
    className: s,
    onClick: null != i ? i : N,
    selected: n,
    tooltip: null != a ? a : _.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    icon: p.default
  })
});

function A(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, u = (0, s.useLocation)(), [h, p] = (0, f.useSelectedDismissibleContent)([r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL], S.DismissibleContentGroupName.SIDEBAR), m = h !== r.DismissibleContent.GUILD_LIST_CLAN_ADMIN_UPSELL, E = !(0, d.default)() && !m && u.pathname !== C.Routes.GUILD_DISCOVERY, T = a.useMemo(() => {
    switch (t) {
      case g.VALORANT_ID:
        return I.valorantBackgroundImage;
      case g.GENSHIN_ID:
        return I.genshinBackgroundImage;
      default:
        return
    }
  }, [t]), A = a.useCallback(() => {
    p(S.ContentDismissActionType.TAKE_ACTION), N()
  }, [p]), L = a.useCallback(e => {
    e(), p(S.ContentDismissActionType.USER_DISMISS)
  }, [p]);
  return (0, l.jsxs)("div", {
    className: I.container,
    children: [(0, l.jsx)(o.Popout, {
      shouldShow: E,
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, l.jsxs)("div", {
          className: I.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: T
          }), (0, l.jsx)(o.Clickable, {
            onClick: () => L(n),
            className: I.close,
            children: (0, l.jsx)(i.CloseSmallIcon, {
              width: 16,
              height: 16,
              color: o.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: I.popoutContent,
            children: [(0, l.jsx)(c.ClanUpsellTitle, {
              title: _.default.Messages.CLAN_GUILD_LIST_ADMIN_UPSELL_TITLE
            }), (0, l.jsx)(c.ClanUpsellMessage, {
              defaultGameId: t
            }), (0, l.jsx)(c.ClanUpsellButton, {
              onClick: A
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
    }), n({
      onClick: A
    })]
  })
}

function L(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: I.footer,
    children: t
  })
}
t.default = T
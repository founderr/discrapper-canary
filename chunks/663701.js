"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("924826"),
  u = n("873546"),
  d = n("442837"),
  c = n("704215"),
  f = n("952265"),
  E = n("481060"),
  h = n("493683"),
  C = n("348600"),
  _ = n("257968"),
  m = n("367907"),
  S = n("770471"),
  p = n("158631"),
  I = n("143614"),
  g = n("463119"),
  T = n("377171"),
  A = n("243778"),
  N = n("922409"),
  v = n("899740"),
  R = n("28476"),
  O = n("880257"),
  L = n("631885"),
  P = n("457396"),
  M = n("51596"),
  y = n("905423"),
  D = n("155409"),
  x = n("210887"),
  b = n("695346"),
  U = n("283595"),
  j = n("699516"),
  G = n("923834"),
  w = n("55563"),
  k = n("774343"),
  B = n("517802"),
  F = n("436088"),
  H = n("427828"),
  V = n("916187"),
  Y = n("158010"),
  W = n("988951"),
  K = n("814225"),
  z = n("515753"),
  q = n("831218"),
  Q = n("339149"),
  Z = n("981631"),
  X = n("689938"),
  J = n("279174");
let $ = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([j.default], () => j.default.getPendingCount()), i = (0, I.default)(), {
      canViewBroadcasts: r
    } = S.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, p.default)();
    return (0, a.jsxs)(z.LinkButton, {
      selected: t,
      route: Z.Routes.FRIENDS,
      icon: W.default,
      text: X.default.Messages.FRIENDS,
      onClick: () => {
        m.default.trackWithMetadata(Z.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [i.length > 0 && r && (0, a.jsx)(E.TextBadge, {
        color: T.default.BG_BRAND,
        text: (0, a.jsxs)("div", {
          className: J.broadcastingBadge,
          children: [(0, a.jsx)(F.default, {
            className: J.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, a.jsx)(E.NumberBadge, {
        count: l
      }) : null]
    })
  },
  ee = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, a.jsx)(z.LinkButton, {
      selected: t,
      route: Z.Routes.APPLICATION_LIBRARY,
      icon: H.default,
      text: X.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, a.jsx)(Q.default, {
        className: i()(J.downloadProgressCircle, {
          [J.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  et = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([x.default], () => x.default.getState().theme), c = (0, _.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(z.LinkButton, {
      selected: t,
      route: n,
      icon: B.default,
      iconClassName: i()(J.activitiesBirthdayIcon, {
        [J.activitiesBirthdayIconLight]: "light" === u
      }),
      text: X.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, a.jsx)(E.NumberBadge, {
        count: c
      }) : null
    })
  },
  en = () => {
    let e = (0, v.useMessageRequestsCount)(),
      t = (0, v.useNewMessageRequestsCount)();
    return e > 0 ? (0, a.jsx)(E.NumberBadge, {
      count: e,
      color: 0 === t ? T.default.ICON_MUTED : void 0
    }) : null
  },
  ea = e => {
    let {
      selected: t
    } = e, n = (0, o.useListItem)("messageRequests"), {
      channelId: s
    } = (0, N.useMessageRequestSidebarState)();
    if (!(0, R.useShouldShowMessageRequestsRow)()) return null;
    let l = null == s ? void 0 : () => h.default.preload(Z.ME, s);
    return (0, a.jsx)(z.LinkButton, {
      selected: t,
      route: Z.Routes.MESSAGE_REQUESTS,
      icon: V.default,
      text: X.default.Messages.MESSAGE_REQUESTS,
      onClick: l,
      ...n,
      children: (0, a.jsx)(en, {})
    })
  },
  es = e => {
    let {
      selected: t
    } = e, n = X.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = b.FamilyCenterEnabled.useSetting(), r = (0, O.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, a.jsx)(z.LinkButton, {
      selected: t,
      route: Z.Routes.FAMILY_CENTER,
      icon: Y.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: J.familyCenterLinkButton,
      ...l,
      children: (0, a.jsx)(el, {
        isParentHovered: u
      })
    }) : null
  },
  el = e => {
    let {
      isParentHovered: t
    } = e, s = (0, L.usePendingRequestCount)();
    return t ? (0, a.jsx)(z.CloseButton, {
      onClick: () => {
        (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("44153")]).then(n.bind(n, "760949"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": X.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: J.familyCenterPendingBadge,
      children: (0, a.jsx)(E.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(A.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(E.TextBadge, {
          text: X.default.Messages.NEW,
          color: T.default.BG_BRAND
        }) : null
      }
    })
  },
  ei = () => (0, M.show)("DM_SEARCH");

function er(e) {
  switch (e) {
    case Z.Routes.APPLICATION_LIBRARY:
      return Z.AnalyticsPages.LIBRARY;
    case Z.Routes.FRIENDS:
      return Z.AnalyticsPages.FRIENDS_LIST;
    case Z.Routes.COLLECTIBLES_SHOP:
      return Z.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(Z.Routes.APPLICATION_STORE)) return e === Z.Routes.APPLICATION_STORE ? Z.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(Z.Routes.APPLICATION_STORE) ? Z.AnalyticsPages.STORE_DIRECTORY_BROWSE : Z.AnalyticsPages.STORE_LISTING;
  return Z.AnalyticsPages.DM_CHANNEL
}
let eo = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, y.default)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.default), {
    enabled: f
  } = C.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)("nav", {
    className: J.privateChannels,
    "aria-label": X.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(D.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: i()(J.searchBar, {
          [J.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: i()(J.searchBarComponent, {
            [J.themedSearchBarMobile]: u.isMobile
          }),
          onClick: ei,
          children: X.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(q.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)($, {
        selected: null != c ? c === Z.Routes.FRIENDS : s === Z.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(ee, {
        selected: null == c ? null != s && s.startsWith(Z.Routes.APPLICATION_LIBRARY) : c.startsWith(Z.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === Z.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(P.NitroTabButton, {
        selected: null == c ? o : c.startsWith(Z.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(Z.Routes.ACTIVITIES) || location.pathname.startsWith(Z.Routes.APPLICATION_STORE) ? Z.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: er(s),
            section: Z.AnalyticsSections.NAVIGATION,
            object: Z.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(et, {
        selected: null != c && c.startsWith(Z.Routes.ACTIVITIES) || null != s && s.startsWith(Z.Routes.ACTIVITIES),
        route: Z.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: er(s),
            section: Z.AnalyticsSections.NAVIGATION,
            object: Z.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(ea, {
        selected: null == c ? null != s && s.startsWith(Z.Routes.MESSAGE_REQUESTS) : c === Z.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(g.CollectiblesShopButton, {
        selected: c === Z.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(Z.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: er(s),
            section: Z.AnalyticsSections.NAVIGATION,
            object: Z.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(es, {
        selected: null != s && s.startsWith(Z.Routes.FAMILY_CENTER) || null != c && c.startsWith(Z.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eu() {
  let e = (0, d.useStateFromStores)([k.default], () => k.default.getHomeLink()),
    t = (0, d.useStateFromStores)([w.default], () => {
      if (e === Z.Routes.APPLICATION_STORE) return !0;
      let t = (0, K.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = w.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !b.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([x.default], () => ({
      theme: x.default.theme
    })),
    l = (0, d.useStateFromStores)([U.default], () => U.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([G.default], () => G.default.getCurrentPath());
  return (0, a.jsx)(eo, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}
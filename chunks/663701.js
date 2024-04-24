"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eu
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("924826"),
  u = a("873546"),
  d = a("442837"),
  c = a("524437"),
  f = a("952265"),
  E = a("481060"),
  h = a("493683"),
  _ = a("348600"),
  C = a("257968"),
  m = a("367907"),
  S = a("770471"),
  I = a("158631"),
  p = a("143614"),
  T = a("463119"),
  g = a("377171"),
  A = a("243778"),
  N = a("922409"),
  v = a("899740"),
  R = a("28476"),
  O = a("880257"),
  L = a("631885"),
  M = a("457396"),
  P = a("51596"),
  x = a("905423"),
  y = a("155409"),
  D = a("210887"),
  b = a("695346"),
  U = a("283595"),
  j = a("699516"),
  G = a("923834"),
  w = a("55563"),
  k = a("774343"),
  F = a("517802"),
  B = a("436088"),
  H = a("427828"),
  V = a("916187"),
  Y = a("158010"),
  W = a("988951"),
  K = a("26290"),
  z = a("814225"),
  q = a("515753"),
  Q = a("831218"),
  Z = a("339149"),
  X = a("981631"),
  J = a("689938"),
  $ = a("344934");
let ee = e => {
    let {
      selected: t,
      ...a
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([j.default], () => j.default.getPendingCount()), i = (0, p.default)(), {
      canViewBroadcasts: r
    } = S.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, I.default)();
    return (0, n.jsxs)(q.LinkButton, {
      selected: t,
      route: X.Routes.FRIENDS,
      icon: W.default,
      text: J.default.Messages.FRIENDS,
      onClick: () => {
        m.default.trackWithMetadata(X.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...a,
      ...s,
      children: [i.length > 0 && r && (0, n.jsx)(K.TextBadge, {
        color: g.default.BG_BRAND,
        text: (0, n.jsxs)("div", {
          className: $.broadcastingBadge,
          children: [(0, n.jsx)(B.default, {
            className: $.broadcastingIcon
          }), (0, n.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, n.jsx)(K.NumberBadge, {
        count: l
      }) : null]
    })
  },
  et = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: a,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, n.jsx)(q.LinkButton, {
      selected: t,
      route: X.Routes.APPLICATION_LIBRARY,
      icon: H.default,
      text: J.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, n.jsx)(Z.default, {
        className: i()($.downloadProgressCircle, {
          [$.hideGameUpdateProgressIndicator]: a
        })
      })
    })
  },
  ea = e => {
    let {
      selected: t,
      route: a,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([D.default], () => D.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, n.jsx)(q.LinkButton, {
      selected: t,
      route: a,
      icon: F.default,
      iconClassName: i()($.activitiesBirthdayIcon, {
        [$.activitiesBirthdayIconLight]: "light" === u
      }),
      text: J.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, n.jsx)(K.NumberBadge, {
        count: c
      }) : null
    })
  },
  en = e => {
    let {
      selected: t
    } = e, a = (0, v.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: l
    } = (0, N.useMessageRequestSidebarState)();
    if (!(0, R.useShouldShowMessageRequestsRow)()) return null;
    let i = null == l ? void 0 : () => h.default.preload(X.ME, l);
    return (0, n.jsx)(q.LinkButton, {
      selected: t,
      route: X.Routes.MESSAGE_REQUESTS,
      icon: V.default,
      text: J.default.Messages.MESSAGE_REQUESTS,
      onClick: i,
      ...s,
      children: a > 0 ? (0, n.jsx)(K.NumberBadge, {
        count: a
      }) : null
    })
  },
  es = e => {
    let {
      selected: t
    } = e, a = J.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = b.FamilyCenterEnabled.useSetting(), r = (0, O.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, n.jsx)(q.LinkButton, {
      selected: t,
      route: X.Routes.FAMILY_CENTER,
      icon: Y.default,
      text: a,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: $.familyCenterLinkButton,
      ...l,
      children: (0, n.jsx)(el, {
        isParentHovered: u
      })
    }) : null
  },
  el = e => {
    let {
      isParentHovered: t
    } = e, s = (0, L.usePendingRequestCount)();
    return t ? (0, n.jsx)(q.CloseButton, {
      onClick: () => {
        (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("44153")]).then(a.bind(a, "760949"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": J.default.Messages.CLOSE
    }) : s > 0 ? (0, n.jsx)("div", {
      className: $.familyCenterPendingBadge,
      children: (0, n.jsx)(K.NumberBadge, {
        count: s
      })
    }) : (0, n.jsx)(A.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, n.jsx)(K.TextBadge, {
          text: J.default.Messages.NEW,
          color: g.default.BG_BRAND
        }) : null
      }
    })
  },
  ei = () => (0, P.show)("DM_SEARCH");

function er(e) {
  switch (e) {
    case X.Routes.APPLICATION_LIBRARY:
      return X.AnalyticsPages.LIBRARY;
    case X.Routes.FRIENDS:
      return X.AnalyticsPages.FRIENDS_LIST;
    case X.Routes.COLLECTIBLES_SHOP:
      return X.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(X.Routes.APPLICATION_STORE)) return e === X.Routes.APPLICATION_STORE ? X.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(X.Routes.APPLICATION_STORE) ? X.AnalyticsPages.STORE_DIRECTORY_BROWSE : X.AnalyticsPages.STORE_LISTING;
  return X.AnalyticsPages.DM_CHANNEL
}
let eo = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: a,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, x.default)(e => {
    let {
      channelId: t,
      path: a
    } = e;
    return [t, a]
  }, r.default), {
    enabled: f
  } = _.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, n.jsxs)("nav", {
    className: $.privateChannels,
    "aria-label": J.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, n.jsx)(y.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, n.jsx)("div", {
        className: i()($.searchBar, {
          [$.themedHeaderMobile]: u.isMobile
        }),
        children: (0, n.jsx)("button", {
          type: "button",
          className: i()($.searchBarComponent, {
            [$.themedSearchBarMobile]: u.isMobile
          }),
          onClick: ei,
          children: J.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, n.jsxs)(Q.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, n.jsx)(ee, {
        selected: null != c ? c === X.Routes.FRIENDS : s === X.Routes.FRIENDS
      }, "friends"), a && t ? (0, n.jsx)(et, {
        selected: null == c ? null != s && s.startsWith(X.Routes.APPLICATION_LIBRARY) : c.startsWith(X.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === X.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, n.jsx)(M.NitroTabButton, {
        selected: null == c ? o : c.startsWith(X.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(X.Routes.ACTIVITIES) || location.pathname.startsWith(X.Routes.APPLICATION_STORE) ? X.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: er(s),
            section: X.AnalyticsSections.NAVIGATION,
            object: X.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, n.jsx)(ea, {
        selected: null != c && c.startsWith(X.Routes.ACTIVITIES) || null != s && s.startsWith(X.Routes.ACTIVITIES),
        route: X.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: er(s),
            section: X.AnalyticsSections.NAVIGATION,
            object: X.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, n.jsx)(en, {
        selected: null == c ? null != s && s.startsWith(X.Routes.MESSAGE_REQUESTS) : c === X.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, n.jsx)(T.CollectiblesShopButton, {
        selected: c === X.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(X.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: er(s),
            section: X.AnalyticsSections.NAVIGATION,
            object: X.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, n.jsx)(es, {
        selected: null != s && s.startsWith(X.Routes.FAMILY_CENTER) || null != c && c.startsWith(X.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eu() {
  let e = (0, d.useStateFromStores)([k.default], () => k.default.getHomeLink()),
    t = (0, d.useStateFromStores)([w.default], () => {
      if (e === X.Routes.APPLICATION_STORE) return !0;
      let t = (0, z.getSKUIdFromURL)(e);
      if (null != t) {
        var a, n;
        return null !== (n = null === (a = w.default.get(t)) || void 0 === a ? void 0 : a.premium) && void 0 !== n && n
      }
      return !1
    }, [e]),
    a = !b.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([D.default], () => ({
      theme: D.default.theme
    })),
    l = (0, d.useStateFromStores)([U.default], () => U.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([G.default], () => G.default.getCurrentPath());
  return (0, n.jsx)(eo, {
    theme: s,
    showLibrary: a,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}
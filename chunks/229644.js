"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eU
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("16470"),
  o = n("974667"),
  u = n("394846"),
  d = n("446674"),
  c = n("151426"),
  f = n("551042"),
  E = n("77078"),
  h = n("450911"),
  _ = n("955153"),
  C = n("503525"),
  I = n("812204"),
  S = n("716241"),
  p = n("685665"),
  m = n("9759"),
  T = n("754493"),
  g = n("813531"),
  A = n("21526"),
  N = n("176555"),
  R = n("232374"),
  O = n("833514"),
  v = n("20606"),
  L = n("384997"),
  M = n("785770"),
  P = n("260488"),
  D = n("639547"),
  y = n("775032"),
  x = n("25132"),
  b = n("300962"),
  U = n("154889"),
  G = n("917247"),
  j = n("801388"),
  w = n("770469"),
  k = n("641078"),
  F = n("773367"),
  B = n("266782"),
  H = n("367226"),
  V = n("104589"),
  Y = n("393027"),
  W = n("12896"),
  K = n("161778"),
  z = n("845579"),
  q = n("686470"),
  Q = n("27618"),
  Z = n("697218"),
  X = n("160299"),
  J = n("521012"),
  $ = n("791823"),
  ee = n("552712"),
  et = n("330338"),
  en = n("311450"),
  ea = n("743826"),
  es = n("774223"),
  el = n("880013"),
  ei = n("556081"),
  er = n("216422"),
  eo = n("155207"),
  eu = n("564875"),
  ed = n("956089"),
  ec = n("719923"),
  ef = n("882941"),
  eE = n("430568"),
  eh = n("570687"),
  e_ = n("631316"),
  eC = n("524110"),
  eI = n("49111"),
  eS = n("782340"),
  ep = n("62599");
let em = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([Q.default], () => Q.default.getPendingCount()), i = (0, g.default)(), {
      canViewBroadcasts: r
    } = m.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, T.default)();
    return (0, a.jsxs)(eh.LinkButton, {
      selected: t,
      route: eI.Routes.FRIENDS,
      icon: eu.default,
      text: eS.default.Messages.FRIENDS,
      onClick: () => {
        S.default.trackWithMetadata(eI.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [i.length > 0 && r && (0, a.jsx)(ed.TextBadge, {
        color: v.default.BG_BRAND,
        text: (0, a.jsxs)("div", {
          className: ep.broadcastingBadge,
          children: [(0, a.jsx)(es.default, {
            className: ep.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, a.jsx)(ed.NumberBadge, {
        count: l
      }) : null]
    })
  },
  eT = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eI.Routes.APPLICATION_LIBRARY,
      icon: el.default,
      text: eS.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, a.jsx)(eC.default, {
        className: i(ep.downloadProgressCircle, {
          [ep.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  eg = e => {
    let t, n, {
        selected: s,
        route: l,
        locationState: i,
        ...r
      } = e,
      u = (0, d.useStateFromStores)([Z.default], () => Z.default.getCurrentUser()),
      c = (0, d.useStateFromStores)([J.default], () => J.default.getPremiumTypeSubscription()),
      f = (0, o.useListItem)("nitro"),
      E = (0, G.usePremiumTrialOffer)(),
      h = (0, U.usePremiumDiscountOffer)(),
      _ = (0, d.useStateFromStores)([X.default], () => X.default.isLocalizedPromoEnabled),
      C = _ && null == E,
      I = (0, k.useIsEligibleForBogoPromotion)(),
      S = (0, H.default)(),
      {
        enabled: p
      } = (0, b.default)(),
      m = s || null != E || null != h || I || S || null != u && Date.now() - u.createdAt.getTime() > 2592e6 || (0, ec.hasPremiumSubscriptionToDisplay)(u, c);
    return m && (!p || s) ? (I ? n = (0, a.jsx)(j.default, {
      isNitroTab: !0
    }) : S ? n = (0, a.jsx)(B.default, {}) : null != h ? n = (0, a.jsx)(F.PremiumDiscountOfferTabBadge, {
      userDiscount: h,
      isTabSelected: s,
      includesAmountOff: !1
    }) : null != E ? n = (0, a.jsx)(F.PremiumTrialOfferTabBadge, {
      trialOffer: E,
      isTabSelected: s
    }) : C && (n = (0, a.jsx)(w.LocalizedPricingBadgeIcon, {
      entryPoint: w.BadgeEntryPoint.PrivateMessages
    }), !s && (t = ep.localizedPricingBadge)), (0, a.jsx)(eh.LinkButton, {
      selected: s,
      route: l,
      icon: er.default,
      text: eS.default.Messages.PREMIUM,
      locationState: i,
      ...r,
      ...f,
      className: t,
      children: n
    })) : null
  },
  eA = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([K.default], () => K.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: n,
      icon: en.default,
      iconClassName: i(ep.activitiesBirthdayIcon, {
        [ep.activitiesBirthdayIconLight]: "light" === u
      }),
      text: eS.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, a.jsx)(ed.NumberBadge, {
        count: c
      }) : null
    })
  },
  eN = e => {
    let {
      selected: t
    } = e, n = (0, P.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: l
    } = (0, M.useMessageRequestSidebarState)(), i = (0, D.useShouldShowMessageRequestsRow)();
    if (!i) return null;
    let r = null == l ? void 0 : () => h.default.preload(eI.ME, l);
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eI.Routes.MESSAGE_REQUESTS,
      icon: ei.default,
      text: eS.default.Messages.MESSAGE_REQUESTS,
      onClick: r,
      ...s,
      children: n > 0 ? (0, a.jsx)(ed.NumberBadge, {
        count: n
      }) : null
    })
  },
  eR = e => {
    let {
      color: t
    } = e;
    return null != t ? (0, a.jsx)(ed.TextBadge, {
      color: t,
      text: eS.default.Messages.NEW
    }) : (0, a.jsx)(ed.PremiumBadge, {
      text: eS.default.Messages.NEW
    })
  },
  eO = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: s,
      children: l,
      ...i
    } = e, r = (0, o.useListItem)("shop"), u = I.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: d
    } = (0, p.default)(u);
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eI.Routes.COLLECTIBLES_SHOP,
      icon: ea.default,
      text: eS.default.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...r,
      ...i,
      onClick: () => {
        (0, A.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: u,
          analyticsLocations: d
        }), null != s && s()
      },
      children: l
    })
  },
  ev = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: s,
      displayOptions: l
    } = e;
    return (0, a.jsx)(E.Tooltip, {
      text: (0, a.jsxs)(E.Text, {
        variant: "text-sm/medium",
        className: ep.marketingBadgeTooltipContent,
        children: [null != l.tooltipEmojiName && (0, a.jsx)(eE.default, {
          emojiName: l.tooltipEmojiName
        }), l.tooltipText()]
      }),
      tooltipClassName: ep.newBadgeTooltip,
      position: "right",
      hideOnClick: !1,
      "aria-label": l.tooltipText(),
      children: e => (0, a.jsx)(eO, {
        selected: t,
        locationState: n,
        ...e,
        onButtonClick: s,
        children: (0, a.jsx)(eR, {
          color: l.badgeColor
        })
      })
    })
  },
  eL = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: s
    } = e;
    return (0, a.jsx)(E.Popout, {
      renderPopout: () => (0, a.jsx)(N.default, {}),
      animation: E.Popout.Animation.TRANSLATE,
      align: "top",
      shouldShow: !0,
      children: () => (0, a.jsx)(eO, {
        selected: t,
        locationState: n,
        onButtonClick: s
      })
    })
  },
  eM = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabCoachmark: s,
      dismissCollectiblesShopTabCoachmark: l
    } = (0, R.default)(), {
      collectiblesShopTabNewBadgeDisplayOptions: i,
      dismissCollectiblesShopTabNewBadge: r
    } = (0, O.default)();
    return null != i ? (0, a.jsx)(ev, {
      selected: t,
      locationState: n,
      onButtonClick: r,
      displayOptions: i
    }) : s === c.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK ? (0, a.jsx)(eL, {
      selected: t,
      locationState: n,
      onButtonClick: l
    }) : (0, a.jsx)(eO, {
      selected: t,
      locationState: n
    })
  },
  eP = e => {
    let {
      selected: t
    } = e, n = eS.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = z.FamilyCenterEnabled.useSetting(), r = (0, y.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eI.Routes.FAMILY_CENTER,
      icon: eo.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: ep.familyCenterLinkButton,
      ...l,
      children: (0, a.jsx)(eD, {
        isParentHovered: u
      })
    }) : null
  },
  eD = e => {
    let {
      isParentHovered: t
    } = e, s = (0, x.usePendingRequestCount)();
    return t ? (0, a.jsx)(eh.CloseButton, {
      onClick: () => {
        (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("6674").then(n.bind(n, "6674"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": eS.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: ep.familyCenterPendingBadge,
      children: (0, a.jsx)(ed.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(L.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(ed.TextBadge, {
          text: eS.default.Messages.NEW,
          color: v.default.BG_BRAND
        }) : null
      }
    })
  },
  ey = () => (0, V.show)("DM_SEARCH");

function ex(e) {
  switch (e) {
    case eI.Routes.APPLICATION_LIBRARY:
      return eI.AnalyticsPages.LIBRARY;
    case eI.Routes.FRIENDS:
      return eI.AnalyticsPages.FRIENDS_LIST;
    case eI.Routes.COLLECTIBLES_SHOP:
      return eI.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(eI.Routes.APPLICATION_STORE)) return e === eI.Routes.APPLICATION_STORE ? eI.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(eI.Routes.APPLICATION_STORE) ? eI.AnalyticsPages.STORE_DIRECTORY_BROWSE : eI.AnalyticsPages.STORE_LISTING;
  return eI.AnalyticsPages.DM_CHANNEL
}
let eb = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, Y.default)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.default), {
    enabled: f
  } = _.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)("nav", {
    className: ep.privateChannels,
    "aria-label": eS.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(W.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: i(ep.searchBar, {
          [ep.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: i(ep.searchBarComponent, {
            [ep.themedSearchBarMobile]: u.isMobile
          }),
          onClick: ey,
          children: eS.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(e_.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(em, {
        selected: null != c ? c === eI.Routes.FRIENDS : s === eI.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(eT, {
        selected: null == c ? null != s && s.startsWith(eI.Routes.APPLICATION_LIBRARY) : c.startsWith(eI.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === eI.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(eg, {
        selected: null == c ? o : c.startsWith(eI.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(eI.Routes.ACTIVITIES) || location.pathname.startsWith(eI.Routes.APPLICATION_STORE) ? eI.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: ex(s),
            section: eI.AnalyticsSections.NAVIGATION,
            object: eI.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(eA, {
        selected: null != c && c.startsWith(eI.Routes.ACTIVITIES) || null != s && s.startsWith(eI.Routes.ACTIVITIES),
        route: eI.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: ex(s),
            section: eI.AnalyticsSections.NAVIGATION,
            object: eI.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(eN, {
        selected: null == c ? null != s && s.startsWith(eI.Routes.MESSAGE_REQUESTS) : c === eI.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(eM, {
        selected: c === eI.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(eI.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: ex(s),
            section: eI.AnalyticsSections.NAVIGATION,
            object: eI.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(eP, {
        selected: null != s && s.startsWith(eI.Routes.FAMILY_CENTER) || null != c && c.startsWith(eI.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eU() {
  let e = (0, d.useStateFromStores)([et.default], () => et.default.getHomeLink()),
    t = (0, d.useStateFromStores)([ee.default], () => {
      if (e === eI.Routes.APPLICATION_STORE) return !0;
      let t = (0, ef.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = ee.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !z.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([K.default], () => ({
      theme: K.default.theme
    })),
    l = (0, d.useStateFromStores)([q.default], () => q.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([$.default], () => $.default.getCurrentPath());
  return (0, a.jsx)(eb, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}
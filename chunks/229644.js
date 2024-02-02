"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ex
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
  _ = n("450911"),
  h = n("955153"),
  C = n("503525"),
  I = n("812204"),
  T = n("716241"),
  S = n("685665"),
  m = n("9759"),
  p = n("754493"),
  A = n("813531"),
  g = n("21526"),
  N = n("176555"),
  R = n("232374"),
  O = n("833514"),
  L = n("20606"),
  v = n("384997"),
  M = n("867805"),
  P = n("785770"),
  D = n("260488"),
  y = n("639547"),
  x = n("775032"),
  b = n("25132"),
  U = n("300962"),
  G = n("154889"),
  j = n("917247"),
  w = n("801388"),
  k = n("770469"),
  F = n("641078"),
  B = n("773367"),
  H = n("266782"),
  V = n("367226"),
  Y = n("104589"),
  W = n("393027"),
  K = n("12896"),
  z = n("161778"),
  q = n("845579"),
  Q = n("686470"),
  Z = n("27618"),
  X = n("697218"),
  J = n("160299"),
  $ = n("521012"),
  ee = n("791823"),
  et = n("552712"),
  en = n("330338"),
  ea = n("311450"),
  es = n("743826"),
  el = n("774223"),
  ei = n("880013"),
  er = n("556081"),
  eo = n("216422"),
  eu = n("155207"),
  ed = n("564875"),
  ec = n("956089"),
  ef = n("719923"),
  eE = n("882941"),
  e_ = n("430568"),
  eh = n("570687"),
  eC = n("631316"),
  eI = n("524110"),
  eT = n("49111"),
  eS = n("782340"),
  em = n("592265");
let ep = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([Z.default], () => Z.default.getPendingCount()), i = (0, A.default)(), {
      canViewBroadcasts: r
    } = m.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, p.default)();
    return (0, a.jsxs)(eh.LinkButton, {
      selected: t,
      route: eT.Routes.FRIENDS,
      icon: ed.default,
      text: eS.default.Messages.FRIENDS,
      onClick: () => {
        T.default.trackWithMetadata(eT.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [i.length > 0 && r && (0, a.jsx)(ec.TextBadge, {
        color: L.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND,
        text: (0, a.jsxs)("div", {
          className: em.broadcastingBadge,
          children: [(0, a.jsx)(el.default, {
            className: em.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, a.jsx)(ec.NumberBadge, {
        count: l
      }) : null]
    })
  },
  eA = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eT.Routes.APPLICATION_LIBRARY,
      icon: ei.default,
      text: eS.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, a.jsx)(eI.default, {
        className: i(em.downloadProgressCircle, {
          [em.hideGameUpdateProgressIndicator]: n
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
      u = (0, d.useStateFromStores)([X.default], () => X.default.getCurrentUser()),
      c = (0, d.useStateFromStores)([$.default], () => $.default.getPremiumTypeSubscription()),
      f = (0, o.useListItem)("nitro"),
      E = (0, j.usePremiumTrialOffer)(),
      _ = (0, G.usePremiumDiscountOffer)(),
      h = (0, d.useStateFromStores)([J.default], () => J.default.isLocalizedPromoEnabled),
      C = h && null == E,
      I = (0, F.useIsEligibleForBogoPromotion)(),
      T = (0, V.default)(),
      {
        enabled: S
      } = (0, U.default)(),
      m = s || null != E || null != _ || I || T || null != u && Date.now() - u.createdAt.getTime() > 2592e6 || (0, ef.hasPremiumSubscriptionToDisplay)(u, c);
    return m && (!S || s) ? (I ? n = (0, a.jsx)(w.default, {
      isNitroTab: !0
    }) : T ? n = (0, a.jsx)(H.default, {}) : null != _ ? n = (0, a.jsx)(B.PremiumDiscountOfferTabBadge, {
      userDiscount: _,
      isTabSelected: s,
      includesAmountOff: !1
    }) : null != E ? n = (0, a.jsx)(B.PremiumTrialOfferTabBadge, {
      trialOffer: E,
      isTabSelected: s
    }) : C && (n = (0, a.jsx)(k.LocalizedPricingBadgeIcon, {
      entryPoint: k.BadgeEntryPoint.PrivateMessages
    }), !s && (t = em.localizedPricingBadge)), (0, a.jsx)(eh.LinkButton, {
      selected: s,
      route: l,
      icon: eo.default,
      text: eS.default.Messages.PREMIUM,
      locationState: i,
      ...r,
      ...f,
      className: t,
      children: n
    })) : null
  },
  eN = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([z.default], () => z.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: n,
      icon: ea.default,
      iconClassName: i(em.activitiesBirthdayIcon, {
        [em.activitiesBirthdayIconLight]: "light" === u
      }),
      text: eS.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, a.jsx)(ec.NumberBadge, {
        count: c
      }) : null
    })
  },
  eR = e => {
    let {
      selected: t
    } = e, n = (0, D.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: l
    } = (0, P.useMessageRequestSidebarState)(), i = (0, y.useShouldShowMessageRequestsRow)();
    if (!i) return null;
    let r = null == l ? void 0 : () => _.default.preload(eT.ME, l);
    return (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eT.Routes.MESSAGE_REQUESTS,
      icon: er.default,
      text: eS.default.Messages.MESSAGE_REQUESTS,
      onClick: r,
      ...s,
      children: n > 0 ? (0, a.jsx)(ec.NumberBadge, {
        count: n
      }) : null
    })
  },
  eO = () => (0, a.jsx)(ec.PremiumBadge, {
    text: eS.default.Messages.NEW
  }),
  eL = e => {
    var t;
    let {
      selected: n,
      locationState: s
    } = e, l = (0, o.useListItem)("shop"), i = I.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: r
    } = (0, S.default)(i), {
      collectiblesShopTabCoachmark: u,
      dismissCollectiblesShopTabCoachmark: d
    } = (0, R.default)(), {
      collectiblesShopTabNewBadge: f,
      dismissCollectiblesShopTabNewBadge: _
    } = (0, O.default)(), h = (0, a.jsxs)(eh.LinkButton, {
      selected: n,
      route: eT.Routes.COLLECTIBLES_SHOP,
      icon: es.default,
      text: eS.default.Messages.COLLECTIBLES_SHOP,
      onClick: () => {
        (0, g.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: i,
          analyticsLocations: r
        }), _(), d()
      },
      locationState: s,
      ...l,
      children: [f === c.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE && (0, a.jsx)(eO, {}), f === c.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE && (0, a.jsx)(E.Tooltip, {
        text: (0, a.jsxs)(E.Text, {
          variant: "text-sm/medium",
          className: em.newBadgeTooltipContent,
          children: [(0, a.jsx)(e_.default, {
            emojiName: null === (t = M.default.getByName("dragon")) || void 0 === t ? void 0 : t.surrogates
          }), eS.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT]
        }),
        tooltipClassName: em.newBadgeTooltip,
        "aria-label": eS.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
        position: "right",
        children: e => (0, a.jsx)(ec.TextBadge, {
          text: eS.default.Messages.NEW,
          color: L.default.REDESIGN_BUTTON_DANGER_BACKGROUND,
          ...e
        })
      })]
    });
    return u !== c.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK ? h : (0, a.jsx)(E.Popout, {
      renderPopout: () => (0, a.jsx)(N.default, {}),
      animation: E.Popout.Animation.TRANSLATE,
      align: "top",
      shouldShow: !0,
      children: () => h
    })
  },
  ev = e => {
    let {
      selected: t
    } = e, n = eS.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = q.FamilyCenterEnabled.useSetting(), r = (0, x.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, a.jsx)(eh.LinkButton, {
      selected: t,
      route: eT.Routes.FAMILY_CENTER,
      icon: eu.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: em.familyCenterLinkButton,
      ...l,
      children: (0, a.jsx)(eM, {
        isParentHovered: u
      })
    }) : null
  },
  eM = e => {
    let {
      isParentHovered: t
    } = e, s = (0, b.usePendingRequestCount)();
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
      className: em.familyCenterPendingBadge,
      children: (0, a.jsx)(ec.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(v.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(ec.TextBadge, {
          text: eS.default.Messages.NEW,
          color: L.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
        }) : null
      }
    })
  },
  eP = () => (0, Y.show)("DM_SEARCH");

function eD(e) {
  switch (e) {
    case eT.Routes.APPLICATION_LIBRARY:
      return eT.AnalyticsPages.LIBRARY;
    case eT.Routes.FRIENDS:
      return eT.AnalyticsPages.FRIENDS_LIST;
    case eT.Routes.COLLECTIBLES_SHOP:
      return eT.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(eT.Routes.APPLICATION_STORE)) return e === eT.Routes.APPLICATION_STORE ? eT.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(eT.Routes.APPLICATION_STORE) ? eT.AnalyticsPages.STORE_DIRECTORY_BROWSE : eT.AnalyticsPages.STORE_LISTING;
  return eT.AnalyticsPages.DM_CHANNEL
}
let ey = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, W.default)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.default), {
    enabled: f
  } = h.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)("nav", {
    className: em.privateChannels,
    "aria-label": eS.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(K.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: i(em.searchBar, {
          [em.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: i(em.searchBarComponent, {
            [em.themedSearchBarMobile]: u.isMobile
          }),
          onClick: eP,
          children: eS.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(eC.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(ep, {
        selected: null != c ? c === eT.Routes.FRIENDS : s === eT.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(eA, {
        selected: null == c ? null != s && s.startsWith(eT.Routes.APPLICATION_LIBRARY) : c.startsWith(eT.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === eT.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(eg, {
        selected: null == c ? o : c.startsWith(eT.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(eT.Routes.ACTIVITIES) || location.pathname.startsWith(eT.Routes.APPLICATION_STORE) ? eT.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: eD(s),
            section: eT.AnalyticsSections.NAVIGATION,
            object: eT.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(eN, {
        selected: null != c && c.startsWith(eT.Routes.ACTIVITIES) || null != s && s.startsWith(eT.Routes.ACTIVITIES),
        route: eT.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: eD(s),
            section: eT.AnalyticsSections.NAVIGATION,
            object: eT.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(eR, {
        selected: null == c ? null != s && s.startsWith(eT.Routes.MESSAGE_REQUESTS) : c === eT.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(eL, {
        selected: c === eT.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(eT.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: eD(s),
            section: eT.AnalyticsSections.NAVIGATION,
            object: eT.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(ev, {
        selected: null != s && s.startsWith(eT.Routes.FAMILY_CENTER) || null != c && c.startsWith(eT.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function ex() {
  let e = (0, d.useStateFromStores)([en.default], () => en.default.getHomeLink()),
    t = (0, d.useStateFromStores)([et.default], () => {
      if (e === eT.Routes.APPLICATION_STORE) return !0;
      let t = (0, eE.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = et.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !q.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([z.default], () => ({
      theme: z.default.theme
    })),
    l = (0, d.useStateFromStores)([Q.default], () => Q.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([ee.default], () => ee.default.getCurrentPath());
  return (0, a.jsx)(ey, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}
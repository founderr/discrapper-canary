"use strict";
n.r(t), n.d(t, {
  HomeButton: function() {
    return Y
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("974667"),
  i = n("446674"),
  r = n("95410"),
  u = n("77078"),
  o = n("524110"),
  d = n("805199"),
  c = n("951039"),
  f = n("713726"),
  h = n("9759"),
  C = n("194051"),
  p = n("651896"),
  m = n("520480"),
  E = n("813531"),
  g = n("749387"),
  I = n("260488"),
  _ = n("12896"),
  S = n("27618"),
  N = n("18494"),
  T = n("697218"),
  A = n("340412"),
  L = n("330338"),
  v = n("535974"),
  x = n("352326"),
  R = n("774223"),
  M = n("15738"),
  O = n("956089"),
  y = n("108189"),
  D = n("964889"),
  b = n("709681"),
  j = n("957833"),
  G = n("610898"),
  U = n("829562"),
  P = n("255991"),
  w = n("49111"),
  F = n("646718"),
  B = n("782340"),
  V = n("973321");
let H = {
  origin: {
    x: -16,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function k(e) {
  let {
    selected: t,
    user: n,
    badge: f,
    link: C,
    showProgressBadge: p
  } = e, I = (0, i.useStateFromStores)([d.default], () => d.default.isEditorOpen), [S, N] = a.useState(!1), [T, A] = a.useState(!1), [L, v] = a.useState(null), [x, D] = a.useState(0), [j, F] = a.useState(!1), {
    canViewBroadcasts: k
  } = h.default.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), Y = (0, E.default)(), K = Y.length > 0 && k;
  (0, m.useTrackNewBroadcastDetected)();
  let W = (0, s.useTreeItem)("home"),
    Z = () => {
      v(null), D(0), clearTimeout(L)
    };
  if (null == n) return null;
  let z = B.default.Messages.DIRECT_MESSAGES;
  T && (z = r.default.get(w.DISCODO_STORAGE_KEY) ? B.default.Messages.DISCODO_ENABLED : B.default.Messages.DISCODO_DISABLED), Y.length > 0 && h.default.trackExposure({
    location: "home_button"
  });
  let X = null;
  !t && p ? X = (0, l.jsx)(o.default, {
    className: V.downloadProgress,
    determineOwnVisibility: !1
  }) : K && (X = (0, l.jsx)(R.default, {
    className: V.broadcastBadge
  }));
  let Q = t || S || I,
    J = (0, l.jsx)(u.BlobMask, {
      highlight: K,
      selected: Q,
      lowerBadge: f > 0 ? (0, P.renderMentionBadge)(f) : null,
      upperBadge: X,
      lowerBadgeWidth: (0, O.getBadgeWidthForValue)(f),
      children: (0, l.jsx)(y.default, {
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), v(setTimeout(Z, 500)), D(x + 1), 15 === x)) {
            Z();
            let e = !r.default.get(w.DISCODO_STORAGE_KEY);
            r.default.set(w.DISCODO_STORAGE_KEY, e), e ? (0, b.playSound)("discodo") : (0, b.playSound)("user_leave"), A(!0), setTimeout(() => {
              A(!1)
            }, 1e3)
          }
        },
        selected: Q,
        ariaLabel: B.default.Messages.DIRECT_MESSAGES,
        ...W,
        to: {
          pathname: C,
          state: {
            analyticsSource: {
              page: w.AnalyticsPages.GUILD_CHANNEL,
              section: w.AnalyticsSections.NAVIGATION,
              object: w.AnalyticsObjects.BUTTON_HOME
            }
          }
        },
        children: (0, l.jsx)(c.default, {})
      })
    }),
    q = K ? (0, l.jsx)(u.Popout, {
      position: "right",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(g.default, {
          closePopout: t
        })
      },
      onRequestClose: () => {
        F(!1)
      },
      spacing: 8,
      shouldShow: j,
      children: () => J
    }) : null;
  return (0, l.jsx)("div", {
    className: V.tutorialContainer,
    onMouseEnter: () => {
      F(!0)
    },
    onMouseLeave: () => {
      setTimeout(() => {
        F(!1)
      }, 250)
    },
    children: (0, l.jsx)(_.default, {
      inlineSpecs: H,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(G.ListItem, {
        children: [(0, l.jsx)(M.default, {
          selected: t,
          hovered: S,
          className: V.pill
        }), null != q ? q : (0, l.jsx)(U.default, {
          color: u.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: z,
          selected: t,
          children: J
        })]
      })
    })
  })
}

function Y() {
  let e = (0, j.useIsHomeSelected)(),
    t = (0, i.useStateFromStores)([x.default, v.default], () => {
      let e = (0, o.getDispatchApplicationStates)(x.default.activeItems, v.default),
        {
          total: t,
          progress: n
        } = D.getCombinedProgress(e),
        l = D.calculateProgressPercentage(n, t);
      return l > 0 && l < 100
    }),
    n = (0, i.useStateFromStores)([C.default], () => C.default.getUserIdsToValidate()),
    s = (0, i.useStateFromStores)([S.default], () => S.default.getPendingCount()),
    r = Object.keys(F.SubscriptionTrials),
    {
      unviewedTrialCount: u,
      unviewedDiscountCount: d
    } = (0, i.useStateFromStoresObject)([A.default], () => ({
      unviewedTrialCount: A.default.getUnacknowledgedOffers(r).length,
      unviewedDiscountCount: A.default.getUnacknowledgedDiscountOffers().length
    })),
    c = u + d,
    h = (0, i.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    m = (0, I.useMessageRequestsCount)(),
    E = s + c + m,
    g = E === c && c > 0 && s + m === 0;
  a.useEffect(() => {
    n.length > 0 && (0, f.fetchBroadcasterBuckets)()
  }, [n]), (0, p.default)();
  let _ = L.default.getHomeLink();
  return g && (_ = w.Routes.APPLICATION_STORE), (0, l.jsx)(k, {
    selected: e,
    user: h,
    selectedChannelId: N.default.getChannelId(w.ME),
    badge: E,
    link: _,
    showProgressBadge: t
  })
}
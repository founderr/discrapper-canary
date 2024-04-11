"use strict";
n.r(t), n.d(t, {
  HomeButton: function() {
    return K
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("924826"),
  i = n("442837"),
  r = n("433517"),
  o = n("481060"),
  u = n("339149"),
  d = n("327943"),
  c = n("864682"),
  f = n("67212"),
  h = n("770471"),
  p = n("292584"),
  m = n("835865"),
  C = n("456541"),
  g = n("143614"),
  E = n("544803"),
  S = n("899740"),
  I = n("155409"),
  _ = n("699516"),
  N = n("944486"),
  T = n("594174"),
  A = n("295226"),
  L = n("774343"),
  v = n("417363"),
  x = n("941128"),
  R = n("436088"),
  y = n("880080"),
  M = n("26290"),
  O = n("15434"),
  b = n("780570"),
  D = n("557177"),
  j = n("278464"),
  G = n("682662"),
  P = n("662146"),
  U = n("674552"),
  w = n("981631"),
  B = n("474936"),
  F = n("689938"),
  V = n("111790");
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
    link: p,
    showProgressBadge: m
  } = e, S = (0, i.useStateFromStores)([d.default], () => d.default.isEditorOpen), [_, N] = a.useState(!1), [T, A] = a.useState(!1), [L, v] = a.useState(null), [x, b] = a.useState(0), [j, B] = a.useState(!1), {
    canViewBroadcasts: k
  } = h.default.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), K = (0, g.default)(), Y = K.length > 0 && k;
  (0, C.useTrackNewBroadcastDetected)();
  let W = (0, s.useTreeItem)("home"),
    Z = () => {
      v(null), b(0), clearTimeout(L)
    };
  if (null == n) return null;
  let z = F.default.Messages.DIRECT_MESSAGES;
  T && (z = r.Storage.get(w.DISCODO_STORAGE_KEY) ? F.default.Messages.DISCODO_ENABLED : F.default.Messages.DISCODO_DISABLED), K.length > 0 && h.default.trackExposure({
    location: "home_button"
  });
  let X = null;
  !t && m ? X = (0, l.jsx)(u.default, {
    className: V.downloadProgress,
    determineOwnVisibility: !1
  }) : Y && (X = (0, l.jsx)(R.default, {
    className: V.broadcastBadge
  }));
  let q = t || _ || S,
    Q = (0, l.jsx)(o.BlobMask, {
      highlight: Y,
      selected: q,
      lowerBadge: f > 0 ? (0, U.renderMentionBadge)(f) : null,
      upperBadge: X,
      lowerBadgeWidth: (0, M.getBadgeWidthForValue)(f),
      children: (0, l.jsx)(O.default, {
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), v(setTimeout(Z, 500)), b(x + 1), 15 === x)) {
            Z();
            let e = !r.Storage.get(w.DISCODO_STORAGE_KEY);
            r.Storage.set(w.DISCODO_STORAGE_KEY, e), e ? (0, D.playSound)("discodo") : (0, D.playSound)("user_leave"), A(!0), setTimeout(() => {
              A(!1)
            }, 1e3)
          }
        },
        selected: q,
        ariaLabel: F.default.Messages.DIRECT_MESSAGES,
        ...W,
        to: {
          pathname: p,
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
    J = Y ? (0, l.jsx)(o.Popout, {
      position: "right",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(E.default, {
          closePopout: t
        })
      },
      onRequestClose: () => {
        B(!1)
      },
      spacing: 8,
      shouldShow: j,
      children: () => Q
    }) : null;
  return (0, l.jsx)("div", {
    className: V.tutorialContainer,
    onMouseEnter: () => {
      B(!0)
    },
    onMouseLeave: () => {
      setTimeout(() => {
        B(!1)
      }, 250)
    },
    children: (0, l.jsx)(I.default, {
      inlineSpecs: H,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(G.ListItem, {
        children: [(0, l.jsx)(y.default, {
          selected: t,
          hovered: _,
          className: V.pill
        }), null != J ? J : (0, l.jsx)(P.default, {
          color: o.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: z,
          selected: t,
          children: Q
        })]
      })
    })
  })
}

function K() {
  let e = (0, j.useIsHomeSelected)(),
    t = (0, i.useStateFromStores)([x.default, v.default], () => {
      let e = (0, u.getDispatchApplicationStates)(x.default.activeItems, v.default),
        {
          total: t,
          progress: n
        } = b.getCombinedProgress(e),
        l = b.calculateProgressPercentage(n, t);
      return l > 0 && l < 100
    }),
    n = (0, i.useStateFromStores)([p.default], () => p.default.getUserIdsToValidate()),
    s = (0, i.useStateFromStores)([_.default], () => _.default.getPendingCount()),
    r = Object.keys(B.SubscriptionTrials),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: d
    } = (0, i.useStateFromStoresObject)([A.default], () => ({
      unviewedTrialCount: A.default.getUnacknowledgedOffers(r).length,
      unviewedDiscountCount: A.default.getUnacknowledgedDiscountOffers().length
    })),
    c = o + d,
    h = (0, i.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    C = (0, S.useMessageRequestsCount)(),
    g = s + c + C,
    E = g === c && c > 0 && s + C === 0;
  a.useEffect(() => {
    n.length > 0 && (0, f.fetchBroadcasterBuckets)()
  }, [n]), (0, m.default)();
  let I = L.default.getHomeLink();
  return E && (I = w.Routes.APPLICATION_STORE), (0, l.jsx)(k, {
    selected: e,
    user: h,
    selectedChannelId: N.default.getChannelId(w.ME),
    badge: g,
    link: I,
    showProgressBadge: t
  })
}
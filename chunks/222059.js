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
  m = n("292584"),
  p = n("835865"),
  C = n("456541"),
  g = n("143614"),
  E = n("544803"),
  _ = n("899740"),
  S = n("155409"),
  I = n("699516"),
  N = n("944486"),
  T = n("594174"),
  A = n("295226"),
  L = n("774343"),
  v = n("417363"),
  x = n("941128"),
  R = n("436088"),
  M = n("880080"),
  y = n("26290"),
  O = n("15434"),
  D = n("780570"),
  b = n("557177"),
  j = n("278464"),
  P = n("682662"),
  G = n("662146"),
  U = n("674552"),
  w = n("981631"),
  B = n("474936"),
  F = n("871465"),
  H = n("689938"),
  V = n("471155");
let k = {
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

function Y(e) {
  let {
    selected: t,
    user: n,
    badge: f,
    link: m,
    showProgressBadge: p
  } = e, _ = (0, i.useStateFromStores)([d.default], () => d.default.isEditorOpen), [I, N] = a.useState(!1), [T, A] = a.useState(!1), [L, v] = a.useState(null), [x, D] = a.useState(0), [j, B] = a.useState(!1), {
    canViewBroadcasts: Y
  } = h.default.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), K = (0, g.default)(), W = K.length > 0 && Y;
  (0, C.useTrackNewBroadcastDetected)();
  let z = (0, s.useTreeItem)("home"),
    Z = () => {
      v(null), D(0), clearTimeout(L)
    };
  if (null == n) return null;
  let X = H.default.Messages.DIRECT_MESSAGES;
  T && (X = r.Storage.get(w.DISCODO_STORAGE_KEY) ? H.default.Messages.DISCODO_ENABLED : H.default.Messages.DISCODO_DISABLED), K.length > 0 && h.default.trackExposure({
    location: "home_button"
  });
  let Q = null;
  !t && p ? Q = (0, l.jsx)(u.default, {
    className: V.downloadProgress,
    determineOwnVisibility: !1
  }) : W && (Q = (0, l.jsx)(R.default, {
    className: V.broadcastBadge
  }));
  let q = t || I || _,
    J = (0, l.jsx)(o.BlobMask, {
      highlight: W,
      selected: q,
      lowerBadge: f > 0 ? (0, U.renderMentionBadge)(f) : null,
      upperBadge: Q,
      lowerBadgeWidth: (0, y.getBadgeWidthForValue)(f),
      children: (0, l.jsx)(O.default, {
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), v(setTimeout(Z, 500)), D(x + 1), 15 === x)) {
            Z();
            let e = !r.Storage.get(w.DISCODO_STORAGE_KEY);
            r.Storage.set(w.DISCODO_STORAGE_KEY, e), e && r.Storage.set(F.CUSTOM_NOTIFICATION_SOUNDS_DISCODO_STORAGE_KEY, !0), e ? (0, b.playSound)("discodo") : (0, b.playSound)("user_leave"), A(!0), setTimeout(() => {
              A(!1)
            }, 1e3)
          }
        },
        selected: q,
        ariaLabel: H.default.Messages.DIRECT_MESSAGES,
        ...z,
        to: {
          pathname: m,
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
    $ = W ? (0, l.jsx)(o.Popout, {
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
      children: () => J
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
    children: (0, l.jsx)(S.default, {
      inlineSpecs: k,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(P.ListItem, {
        children: [(0, l.jsx)(M.default, {
          selected: t,
          hovered: I,
          className: V.pill
        }), null != $ ? $ : (0, l.jsx)(G.default, {
          color: o.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: X,
          selected: t,
          children: J
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
        } = D.getCombinedProgress(e),
        l = D.calculateProgressPercentage(n, t);
      return l > 0 && l < 100
    }),
    n = (0, i.useStateFromStores)([m.default], () => m.default.getUserIdsToValidate()),
    s = (0, i.useStateFromStores)([I.default], () => I.default.getPendingCount()),
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
    C = (0, _.useMessageRequestsCount)(),
    g = s + c + C,
    E = g === c && c > 0 && s + C === 0;
  a.useEffect(() => {
    n.length > 0 && (0, f.fetchBroadcasterBuckets)()
  }, [n]), (0, p.default)();
  let S = L.default.getHomeLink();
  return E && (S = w.Routes.APPLICATION_STORE), (0, l.jsx)(Y, {
    selected: e,
    user: h,
    selectedChannelId: N.default.getChannelId(w.ME),
    badge: g,
    link: S,
    showProgressBadge: t
  })
}
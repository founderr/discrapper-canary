"use strict";
n.r(t), n.d(t, {
  HomeButton: function() {
    return k
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
  C = n("835865"),
  p = n("456541"),
  g = n("143614"),
  E = n("544803"),
  S = n("899740"),
  _ = n("155409"),
  I = n("699516"),
  N = n("944486"),
  T = n("594174"),
  A = n("295226"),
  L = n("774343"),
  v = n("417363"),
  x = n("941128"),
  R = n("436088"),
  M = n("880080"),
  y = n("780570"),
  O = n("557177"),
  b = n("278464"),
  D = n("682662"),
  j = n("662146"),
  P = n("674552"),
  G = n("981631"),
  U = n("474936"),
  w = n("871465"),
  B = n("689938"),
  F = n("471155");
let V = {
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

function H(e) {
  let {
    selected: t,
    user: n,
    badge: f,
    link: m,
    showProgressBadge: C
  } = e, S = (0, i.useStateFromStores)([d.default], () => d.default.isEditorOpen), [I, N] = a.useState(!1), [T, A] = a.useState(!1), [L, v] = a.useState(null), [x, y] = a.useState(0), [b, U] = a.useState(!1), {
    canViewBroadcasts: H
  } = h.default.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), k = (0, g.default)(), Y = k.length > 0 && H;
  (0, p.useTrackNewBroadcastDetected)();
  let K = (0, s.useTreeItem)("home"),
    W = () => {
      v(null), y(0), clearTimeout(L)
    };
  if (null == n) return null;
  let z = B.default.Messages.DIRECT_MESSAGES;
  T && (z = r.Storage.get(G.DISCODO_STORAGE_KEY) ? B.default.Messages.DISCODO_ENABLED : B.default.Messages.DISCODO_DISABLED), k.length > 0 && h.default.trackExposure({
    location: "home_button"
  });
  let Z = null;
  !t && C ? Z = (0, l.jsx)(u.default, {
    className: F.downloadProgress,
    determineOwnVisibility: !1
  }) : Y && (Z = (0, l.jsx)(R.default, {
    className: F.broadcastBadge
  }));
  let X = t || I || S,
    q = (0, l.jsx)(o.BlobMask, {
      highlight: Y,
      selected: X,
      lowerBadge: f > 0 ? (0, P.renderMentionBadge)(f) : null,
      upperBadge: Z,
      lowerBadgeWidth: (0, o.getBadgeWidthForValue)(f),
      children: (0, l.jsx)(o.NavItem, {
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), v(setTimeout(W, 500)), y(x + 1), 15 === x)) {
            W();
            let e = !r.Storage.get(G.DISCODO_STORAGE_KEY);
            r.Storage.set(G.DISCODO_STORAGE_KEY, e), e && r.Storage.set(w.CUSTOM_NOTIFICATION_SOUNDS_DISCODO_STORAGE_KEY, !0), e ? (0, O.playSound)("discodo") : (0, O.playSound)("user_leave"), A(!0), setTimeout(() => {
              A(!1)
            }, 1e3)
          }
        },
        selected: X,
        ariaLabel: B.default.Messages.DIRECT_MESSAGES,
        ...K,
        to: {
          pathname: m,
          state: {
            analyticsSource: {
              page: G.AnalyticsPages.GUILD_CHANNEL,
              section: G.AnalyticsSections.NAVIGATION,
              object: G.AnalyticsObjects.BUTTON_HOME
            }
          }
        },
        children: (0, l.jsx)(c.default, {})
      })
    }),
    Q = Y ? (0, l.jsx)(o.Popout, {
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
        U(!1)
      },
      spacing: 8,
      shouldShow: b,
      children: () => q
    }) : null;
  return (0, l.jsx)("div", {
    className: F.tutorialContainer,
    onMouseEnter: () => {
      U(!0)
    },
    onMouseLeave: () => {
      setTimeout(() => {
        U(!1)
      }, 250)
    },
    children: (0, l.jsx)(_.default, {
      inlineSpecs: V,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(D.ListItem, {
        children: [(0, l.jsx)(M.default, {
          selected: t,
          hovered: I,
          className: F.pill
        }), null != Q ? Q : (0, l.jsx)(j.default, {
          color: o.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: z,
          selected: t,
          children: q
        })]
      })
    })
  })
}

function k() {
  let e = (0, b.useIsHomeSelected)(),
    t = (0, i.useStateFromStores)([x.default, v.default], () => {
      let e = (0, u.getDispatchApplicationStates)(x.default.activeItems, v.default),
        {
          total: t,
          progress: n
        } = y.getCombinedProgress(e),
        l = y.calculateProgressPercentage(n, t);
      return l > 0 && l < 100
    }),
    n = (0, i.useStateFromStores)([m.default], () => m.default.getUserIdsToValidate()),
    s = (0, i.useStateFromStores)([I.default], () => I.default.getPendingCount()),
    r = Object.keys(U.SubscriptionTrials),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: d
    } = (0, i.useStateFromStoresObject)([A.default], () => ({
      unviewedTrialCount: A.default.getUnacknowledgedOffers(r).length,
      unviewedDiscountCount: A.default.getUnacknowledgedDiscountOffers().length
    })),
    c = o + d,
    h = (0, i.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    p = (0, S.useNewMessageRequestsCount)(),
    g = s + c + p,
    E = g === c && c > 0 && s + p === 0;
  a.useEffect(() => {
    n.length > 0 && (0, f.fetchBroadcasterBuckets)()
  }, [n]), (0, C.default)();
  let _ = L.default.getHomeLink();
  return E && (_ = G.Routes.APPLICATION_STORE), (0, l.jsx)(H, {
    selected: e,
    user: h,
    selectedChannelId: N.default.getChannelId(G.ME),
    badge: g,
    link: _,
    showProgressBadge: t
  })
}
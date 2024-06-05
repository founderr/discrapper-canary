"use strict";
l.r(t), l.d(t, {
  ActivityDirectoryFooter: function() {
    return R
  },
  default: function() {
    return O
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("468194"),
  d = l("442837"),
  o = l("477690"),
  c = l("481060"),
  u = l("100527"),
  v = l("906732"),
  f = l("703656"),
  I = l("430824"),
  h = l("594174"),
  m = l("792125"),
  E = l("867176"),
  T = l("115130"),
  x = l("566620"),
  C = l("851191"),
  S = l("127255"),
  p = l("880308"),
  A = l("451576"),
  _ = l("439934"),
  g = l("701488"),
  N = l("981631"),
  j = l("689938"),
  D = l("734867"),
  y = l("497263"),
  L = l("398885");
let M = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  V = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  b = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function O(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: r,
    onActivityItemVisible: o,
    scrollerRef: O
  } = e, [R, B] = a.useState(0), F = (0, S.default)({
    guildId: l,
    enableFilter: !0,
    channel: t
  }), H = (0, d.useStateFromStores)([h.default], () => h.default.getCurrentUser()), Y = (0, d.useStateFromStores)([I.default], () => I.default.getGuild(l), [l]), {
    analyticsLocations: k
  } = (0, v.default)(u.default.ACTIVITY_DIRECTORY), P = (0, A.default)(null == t ? void 0 : t.id), {
    enableTuneInShelfPromoBanner: w
  } = C.ExperimentTuneInShelfPromoBanner.useExperiment({
    location: "ActivitiesShelf"
  }, {
    autoTrackExposure: !0
  }), U = (0, E.useIsActivitiesInTextShelfPosterEnabled)(null == t ? void 0 : t.id, "ActivityShelfSlideActivityDirectory"), {
    isDeveloperActivityShelfEnabled: G,
    filter: W
  } = (0, d.useStateFromStoresObject)([T.default], () => ({
    filter: T.default.getFilter(),
    isDeveloperActivityShelfEnabled: T.default.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = O.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        null != e && e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        B(null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [O]), a.useEffect(() => {
      (P || null != l) && (0, x.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, P]), (0, p.useFetchDeveloperActivityShelfItems)(), null == Y && !P || null == H) return null;
  let z = F.length > 0;

  function Z(e) {
    r()
  }
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: k,
    children: (0, i.jsxs)("div", {
      className: D.scrollContainer,
      children: [z ? (0, i.jsx)("div", {
        className: D.scrollBackgroundContainer,
        style: {
          top: -R
        },
        children: (0, i.jsx)("div", {
          className: s()(D.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return M + Math.ceil(e.length / 2) * (t ? b : V)
            })(F)
          }
        })
      }) : null, (0, i.jsxs)(c.Scroller, {
        ref: O,
        className: D.scroller,
        children: [function() {
          if (w) {
            let e = j.default.Messages.EMBEDDED_ACTIVITIES_TUNE_IN_PROMO_BANNER_ALT;
            return (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)(c.Clickable, {
                "aria-label": e,
                className: D.posterClickable,
                onClick: () => {
                  var e;
                  e = g.TUNE_IN_APPLICATION_ID, r(), (0, f.transitionTo)(N.Routes.ACTIVITY_DETAILS(g.TUNE_IN_APPLICATION_ID), void 0, void 0, k)
                },
                children: [(0, i.jsx)("div", {
                  className: D.poster,
                  children: (0, i.jsx)("img", {
                    className: D.posterBackground,
                    src: L,
                    alt: e
                  })
                }), (0, i.jsx)("div", {
                  className: D.posterDivider
                })]
              })
            })
          }
          if (U) {
            let e = j.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("div", {
                className: D.poster,
                children: [(0, i.jsx)("img", {
                  className: D.posterBackground,
                  src: y,
                  alt: e
                }), (0, i.jsx)("div", {
                  className: D.posterTextParent,
                  children: (0, i.jsx)(c.Text, {
                    className: s()((0, m.getThemeClass)(N.ThemeTypes.DARK), D.posterText),
                    variant: "display-sm",
                    style: {
                      fontSize: t
                    },
                    children: e
                  })
                })]
              }), (0, i.jsx)("div", {
                className: D.posterDivider
              })]
            })
          }
          return null
        }(), z ? (0, i.jsx)("div", {
          className: D.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(D.shelf),
            children: F.map(e => (0, i.jsx)(_.default, {
              large: 1 === F.length,
              activityItem: e,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: o,
              onActivityItemSelected: () => {
                var t;
                t = e.application.id, r()
              }
            }, "activity-shelf-item-".concat(e.application.id)))
          })
        }) : G && W.length > 0 ? (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: D.filterError,
          children: j.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: W
          })
        }) : (0, i.jsx)("div", {
          className: D.spinnerContainer,
          children: (0, i.jsx)(c.Spinner, {})
        })]
      })]
    })
  })
}

function R() {
  return (0, i.jsx)(c.Text, {
    variant: "text-sm/normal",
    children: j.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: g.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}
"use strict";
l.r(t), l.d(t, {
  ActivityDirectoryFooter: function() {
    return R
  },
  default: function() {
    return b
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
  f = l("430824"),
  h = l("594174"),
  m = l("792125"),
  I = l("867176"),
  E = l("115130"),
  T = l("566620"),
  x = l("851191"),
  S = l("127255"),
  C = l("880308"),
  p = l("451576"),
  A = l("439934"),
  _ = l("701488"),
  g = l("981631"),
  N = l("689938"),
  j = l("734867"),
  D = l("497263"),
  y = l("398885");
let M = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  L = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  V = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function b(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: r,
    onActivityItemVisible: o,
    scrollerRef: _
  } = e, [b, R] = a.useState(0), O = (0, S.default)({
    guildId: l,
    enableFilter: !0,
    channel: t
  }), B = (0, d.useStateFromStores)([h.default], () => h.default.getCurrentUser()), F = (0, d.useStateFromStores)([f.default], () => f.default.getGuild(l), [l]), {
    analyticsLocations: H
  } = (0, v.default)(u.default.ACTIVITY_DIRECTORY), Y = (0, p.default)(null == t ? void 0 : t.id), {
    enableTuneInShelfPromoBanner: k
  } = x.ExperimentTuneInShelfPromoBanner.useExperiment({
    location: "ActivitiesShelf"
  }, {
    autoTrackExposure: !0
  }), P = (0, I.useIsActivitiesInTextShelfPosterEnabled)(null == t ? void 0 : t.id, "ActivityShelfSlideActivityDirectory"), {
    isDeveloperActivityShelfEnabled: w,
    filter: G
  } = (0, d.useStateFromStoresObject)([E.default], () => ({
    filter: E.default.getFilter(),
    isDeveloperActivityShelfEnabled: E.default.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = _.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        null != e && e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        R(null !== (t = null === (e = _.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [_]), a.useEffect(() => {
      (Y || null != l) && (0, T.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, Y]), (0, C.useFetchDeveloperActivityShelfItems)(), null == F && !Y || null == B) return null;
  let U = O.length > 0;
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: H,
    children: (0, i.jsxs)("div", {
      className: j.scrollContainer,
      children: [U ? (0, i.jsx)("div", {
        className: j.scrollBackgroundContainer,
        style: {
          top: -b
        },
        children: (0, i.jsx)("div", {
          className: s()(j.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return M + Math.ceil(e.length / 2) * (t ? V : L)
            })(O)
          }
        })
      }) : null, (0, i.jsxs)(c.Scroller, {
        ref: _,
        className: j.scroller,
        children: [function() {
          if (k) {
            let e = N.default.Messages.EMBEDDED_ACTIVITIES_TUNE_IN_PROMO_BANNER_ALT;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: j.poster,
                children: (0, i.jsx)("img", {
                  className: j.posterBackground,
                  src: y,
                  alt: e
                })
              }), (0, i.jsx)("div", {
                className: j.posterDivider
              })]
            })
          }
          if (P) {
            let e = N.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("div", {
                className: j.poster,
                children: [(0, i.jsx)("img", {
                  className: j.posterBackground,
                  src: D,
                  alt: e
                }), (0, i.jsx)("div", {
                  className: j.posterTextParent,
                  children: (0, i.jsx)(c.Text, {
                    className: s()((0, m.getThemeClass)(g.ThemeTypes.DARK), j.posterText),
                    variant: "display-sm",
                    style: {
                      fontSize: t
                    },
                    children: e
                  })
                })]
              }), (0, i.jsx)("div", {
                className: j.posterDivider
              })]
            })
          }
          return null
        }(), U ? (0, i.jsx)("div", {
          className: j.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(j.shelf),
            children: O.map(e => (0, i.jsx)(A.default, {
              large: 1 === O.length,
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
        }) : w && G.length > 0 ? (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: j.filterError,
          children: N.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: G
          })
        }) : (0, i.jsx)("div", {
          className: j.spinnerContainer,
          children: (0, i.jsx)(c.Spinner, {})
        })]
      })]
    })
  })
}

function R() {
  return (0, i.jsx)(c.Text, {
    variant: "text-sm/normal",
    children: N.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: _.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}
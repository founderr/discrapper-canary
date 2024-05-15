"use strict";
l.r(t), l.d(t, {
  ActivityDirectoryFooter: function() {
    return V
  },
  default: function() {
    return L
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("468194"),
  d = l("442837"),
  c = l("477690"),
  o = l("481060"),
  u = l("100527"),
  v = l("906732"),
  f = l("430824"),
  h = l("594174"),
  I = l("792125"),
  m = l("867176"),
  E = l("115130"),
  T = l("566620"),
  C = l("127255"),
  x = l("880308"),
  S = l("451576"),
  p = l("439934"),
  A = l("701488"),
  _ = l("981631"),
  g = l("689938"),
  N = l("734867"),
  j = l("497263");
let y = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  D = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  M = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function L(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: r,
    onActivityItemVisible: c,
    scrollerRef: A
  } = e, [L, V] = a.useState(0), R = (0, C.default)({
    guildId: l,
    enableFilter: !0,
    channel: t
  }), b = (0, d.useStateFromStores)([h.default], () => h.default.getCurrentUser()), O = (0, d.useStateFromStores)([f.default], () => f.default.getGuild(l), [l]), {
    analyticsLocations: H
  } = (0, v.default)(u.default.ACTIVITY_DIRECTORY), F = (0, S.default)(null == t ? void 0 : t.id), B = (0, m.useIsActivitiesInTextShelfPosterEnabled)(null == t ? void 0 : t.id, "ActivityShelfSlideActivityDirectory"), {
    isDeveloperActivityShelfEnabled: Y,
    filter: w
  } = (0, d.useStateFromStoresObject)([E.default], () => ({
    filter: E.default.getFilter(),
    isDeveloperActivityShelfEnabled: E.default.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = A.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        null != e && e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        V(null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [A]), a.useEffect(() => {
      (F || null != l) && (0, T.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, F]), (0, x.useFetchDeveloperActivityShelfItems)(), null == O && !F || null == b) return null;
  let k = R.length > 0;
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: H,
    children: (0, i.jsxs)("div", {
      className: N.scrollContainer,
      children: [k ? (0, i.jsx)("div", {
        className: N.scrollBackgroundContainer,
        style: {
          top: -L
        },
        children: (0, i.jsx)("div", {
          className: s()(N.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return y + Math.ceil(e.length / 2) * (t ? M : D)
            })(R)
          }
        })
      }) : null, (0, i.jsxs)(o.Scroller, {
        ref: A,
        className: N.scroller,
        children: [function() {
          if (B) {
            let e = g.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("div", {
                className: N.poster,
                children: [(0, i.jsx)("img", {
                  className: N.posterBackground,
                  src: j,
                  alt: e
                }), (0, i.jsx)("div", {
                  className: N.posterTextParent,
                  children: (0, i.jsx)(o.Text, {
                    className: s()((0, I.getThemeClass)(_.ThemeTypes.DARK), N.posterText),
                    variant: "display-sm",
                    style: {
                      fontSize: t
                    },
                    children: e
                  })
                })]
              }), (0, i.jsx)("div", {
                className: N.posterDivider
              })]
            })
          }
          return null
        }(), k ? (0, i.jsx)("div", {
          className: N.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(N.shelf),
            children: R.map(e => (0, i.jsx)(p.default, {
              large: 1 === R.length,
              activityItem: e,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: c,
              onActivityItemSelected: () => {
                var t;
                t = e.application.id, r()
              }
            }, "activity-shelf-item-".concat(e.application.id)))
          })
        }) : Y && w.length > 0 ? (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: N.filterError,
          children: g.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: w
          })
        }) : (0, i.jsx)("div", {
          className: N.spinnerContainer,
          children: (0, i.jsx)(o.Spinner, {})
        })]
      })]
    })
  })
}

function V() {
  return (0, i.jsx)(o.Text, {
    variant: "text-sm/normal",
    children: g.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: A.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}
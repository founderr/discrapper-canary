"use strict";
l.r(t), l.d(t, {
  ActivityDirectoryFooter: function() {
    return M
  },
  default: function() {
    return D
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
  I = l("867176"),
  m = l("115130"),
  E = l("566620"),
  T = l("127255"),
  C = l("880308"),
  x = l("451576"),
  S = l("439934"),
  p = l("701488"),
  A = l("689938"),
  _ = l("734867"),
  g = l("497263");
let N = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  j = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  y = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function D(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: r,
    onActivityItemVisible: c,
    scrollerRef: p
  } = e, [D, M] = a.useState(0), L = (0, T.default)({
    guildId: l,
    enableFilter: !0,
    channel: t
  }), V = (0, d.useStateFromStores)([h.default], () => h.default.getCurrentUser()), R = (0, d.useStateFromStores)([f.default], () => f.default.getGuild(l), [l]), {
    analyticsLocations: b
  } = (0, v.default)(u.default.ACTIVITY_DIRECTORY), O = (0, x.default)(null == t ? void 0 : t.id), H = (0, I.useIsActivitiesInTextShelfPosterEnabled)(null == t ? void 0 : t.id, "ActivityShelfSlideActivityDirectory"), {
    isDeveloperActivityShelfEnabled: F,
    filter: B
  } = (0, d.useStateFromStoresObject)([m.default], () => ({
    filter: m.default.getFilter(),
    isDeveloperActivityShelfEnabled: m.default.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = p.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        null != e && e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        M(null !== (t = null === (e = p.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [p]), a.useEffect(() => {
      (O || null != l) && (0, E.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, O]), (0, C.useFetchDeveloperActivityShelfItems)(), null == R && !O || null == V) return null;
  let Y = L.length > 0;
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: b,
    children: (0, i.jsxs)("div", {
      className: _.scrollContainer,
      children: [Y ? (0, i.jsx)("div", {
        className: _.scrollBackgroundContainer,
        style: {
          top: -D
        },
        children: (0, i.jsx)("div", {
          className: s()(_.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return N + Math.ceil(e.length / 2) * (t ? y : j)
            })(L)
          }
        })
      }) : null, (0, i.jsxs)(o.Scroller, {
        ref: p,
        className: _.scroller,
        children: [function() {
          if (H) {
            let e = A.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT,
              t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("div", {
                className: _.poster,
                children: [(0, i.jsx)("img", {
                  className: _.posterBackground,
                  src: g,
                  alt: e
                }), (0, i.jsx)("div", {
                  className: _.posterTextParent,
                  children: (0, i.jsx)(o.Text, {
                    className: _.posterText,
                    variant: "display-sm",
                    style: {
                      fontSize: t
                    },
                    children: e
                  })
                })]
              }), (0, i.jsx)("div", {
                className: _.posterDivider
              })]
            })
          }
          return null
        }(), Y ? (0, i.jsx)("div", {
          className: _.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(_.shelf),
            children: L.map(e => (0, i.jsx)(S.default, {
              large: 1 === L.length,
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
        }) : F && B.length > 0 ? (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: _.filterError,
          children: A.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: B
          })
        }) : (0, i.jsx)("div", {
          className: _.spinnerContainer,
          children: (0, i.jsx)(o.Spinner, {})
        })]
      })]
    })
  })
}

function M() {
  return (0, i.jsx)(o.Text, {
    variant: "text-sm/normal",
    children: A.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: p.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}
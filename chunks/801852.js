"use strict";
n.r(t), n.d(t, {
  ActivitiesMiniShelf: function() {
    return k
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("90915"),
  u = n("748820"),
  o = n("446674"),
  d = n("77078"),
  c = n("997289"),
  f = n("244201"),
  h = n("206230"),
  m = n("812204"),
  p = n("685665"),
  E = n("393414"),
  S = n("161778"),
  g = n("124824"),
  C = n("772280"),
  _ = n("82636"),
  I = n("599110"),
  T = n("955153"),
  v = n("550766"),
  x = n("158962"),
  N = n("974555"),
  A = n("91761"),
  M = n("441821"),
  R = n("766914"),
  j = n("478272"),
  L = n("954016"),
  y = n("49111"),
  O = n("782340"),
  P = n("73687"),
  b = n("678070"),
  D = n("789335"),
  U = n("274889"),
  w = n("717387");
let F = "vc-activities-".concat((0, u.v4)()),
  k = a.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: u,
      onMouseEnter: k,
      onMouseLeave: B,
      onClick: V,
      className: H
    } = e, {
      enabled: G
    } = T.BirthdayActivitiesExperiment.useExperiment({
      location: "8009ca_3"
    }), {
      enableKrunkerStrikeMiniShelfBanner: W
    } = N.ExperimentKrunkerStrikeMiniShelfBanner.useExperiment({
      location: "activties_mini_shelf"
    }, {
      autoTrackExposure: !0
    }), {
      enableColonistMiniShelfBanner: Y
    } = x.ExperimentColonistMiniShelfBanner.useExperiment({
      location: "activties_mini_shelf"
    }, {
      autoTrackExposure: !0
    }), z = (0, o.useStateFromStores)([S.default], () => S.default.getState().theme), K = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
      id: Z,
      guild_id: X
    } = n;
    a.useEffect(() => {
      I.default.track(y.AnalyticEvents.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: Z,
        guild_id: X
      })
    }, [Z, X]), a.useEffect(() => {
      !s && u()
    }, [u, s]);
    let Q = (0, f.useAppContext)(),
      {
        analyticsLocations: q,
        AnalyticsLocationProvider: J
      } = (0, p.default)(m.default.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: $,
        AnalyticsLocationProvider: ee
      } = (0, p.default)([...q, m.default.ACTIVITIES_MINI_SHELF_BANNER]),
      et = Q === y.AppContext.POPOUT,
      en = (0, c.useAnalyticsContext)(),
      el = function(e) {
        let t = (0, A.default)({
          guildId: e
        });
        return t.slice(0, 5)
      }(n.getGuildId());
    a.useEffect(() => {
      let e = setTimeout(() => v.dismissNewActivityIndicator(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let ea = a.useCallback(() => {
        var e;
        (0, j.default)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: en.location,
          openInPopout: et,
          analyticsLocations: q
        }), B(), V()
      }, [en, q, n, V, B, et]),
      es = a.useCallback(e => {
        k(), I.default.track(y.AnalyticEvents.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [k, n]),
      ei = G ? (0, l.jsxs)(r.Link, {
        to: y.Routes.ACTIVITIES,
        children: [(0, l.jsx)("img", {
          alt: O.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === z ? b : D,
          className: P.poster
        }), (0, l.jsx)("div", {
          className: P.posterDivider
        })]
      }) : W ? (0, l.jsxs)(d.Clickable, {
        className: i(P.clickableBanner, {
          [P.clickableBannerReducedMotion]: K
        }),
        onClick: () => {
          V(), u(), (0, E.transitionTo)(y.Routes.ACTIVITY_DETAILS(L.KRUNKER_STRIKE_APPLICATION_ID), void 0, void 0, $)
        },
        children: [(0, l.jsx)("img", {
          alt: O.default.Messages.EMBEDDED_ACTIVITIES_KRUNKER_STRIKE_POSTER_ALT,
          src: w,
          className: P.poster
        }), (0, l.jsx)("div", {
          className: P.posterDivider
        })]
      }) : Y ? (0, l.jsxs)(d.Clickable, {
        className: i(P.clickableBanner, {
          [P.clickableBannerReducedMotion]: K
        }),
        onClick: () => {
          V(), u(), (0, E.transitionTo)(y.Routes.ACTIVITY_DETAILS(L.COLONIST_APPLICATION_ID), void 0, void 0, $)
        },
        children: [(0, l.jsx)("img", {
          alt: O.default.Messages.EMBEDDED_ACTIVITIES_COLONIST_POSTER_ALT,
          src: U,
          className: P.poster
        }), (0, l.jsx)("div", {
          className: P.posterDivider
        })]
      }) : null;
    return (0, l.jsx)(J, {
      children: (0, l.jsx)(g.default, {
        children: (0, l.jsxs)(d.Dialog, {
          ref: t,
          "aria-labelledby": F,
          className: H,
          children: [(0, l.jsx)(d.HeadingLevel, {
            forceLevel: 2,
            children: (0, l.jsx)(d.HiddenVisually, {
              children: (0, l.jsx)(d.H, {
                id: F,
                children: O.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, l.jsxs)("div", {
            className: P.container,
            onMouseEnter: es,
            onMouseLeave: B,
            children: [(0, l.jsxs)("div", {
              className: P.titleContainer,
              children: [(0, l.jsxs)("div", {
                className: P.titleLeft,
                children: [(0, l.jsx)(_.default, {
                  className: P.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: O.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, l.jsxs)(d.Clickable, {
                className: P.titleRight,
                onClick: ea,
                children: [(0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: O.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, l.jsx)(C.default, {
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: P.titleRightIcon
                })]
              })]
            }), (0, l.jsx)(ee, {
              children: ei
            }), (0, l.jsxs)("div", {
              className: P.activityContainer,
              children: [el.map(e => (0, l.jsx)(M.ActivitySuggestion, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  u(), V()
                },
                aspectRatio: M.ActivitySuggestion.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: P.activitySuggestion
              }, e.application.id)), (0, l.jsx)("div", {
                className: i(P.wumpusRocketOuterContainer, {
                  [P.wumpusReducedMotion]: K
                }),
                children: (0, l.jsx)("div", {
                  className: P.wumpusRocketInnerContainer,
                  children: (0, l.jsx)(R.default, {
                    className: P.wumpusRocket
                  })
                })
              })]
            })]
          })]
        })
      })
    })
  })
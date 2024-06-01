"use strict";
n.r(t), n.d(t, {
  ActivitiesMiniShelf: function() {
    return k
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("613828"),
  o = n("153832"),
  u = n("442837"),
  d = n("481060"),
  c = n("2052"),
  f = n("40851"),
  h = n("607070"),
  m = n("100527"),
  p = n("906732"),
  E = n("703656"),
  C = n("210887"),
  g = n("390322"),
  S = n("692437"),
  _ = n("944581"),
  T = n("626135"),
  I = n("348600"),
  A = n("566620"),
  v = n("480906"),
  N = n("11778"),
  x = n("127255"),
  M = n("5200"),
  R = n("558317"),
  y = n("403404"),
  L = n("701488"),
  O = n("981631"),
  j = n("689938"),
  P = n("492880"),
  D = n("587952"),
  b = n("736733"),
  U = n("661995"),
  F = n("175045");
let w = "vc-activities-".concat((0, o.v4)()),
  k = l.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: o,
      onMouseEnter: k,
      onMouseLeave: H,
      onClick: B,
      className: G
    } = e, {
      enabled: V
    } = I.BirthdayActivitiesExperiment.useExperiment({
      location: "8009ca_3"
    }), {
      enableDeathByAiMiniShelfBanner: W
    } = v.ExperimentDeathByAiMiniShelfBanner.useExperiment({
      location: "ActivitiesMiniShelf"
    }, {
      autoTrackExposure: !0
    }), {
      enableTuneInMiniShelfBanner: Y
    } = N.ExperimentTuneInMiniShelfBanner.useExperiment({
      location: "ActivitiesMiniShelf"
    }, {
      autoTrackExposure: !0
    }), z = (0, u.useStateFromStores)([C.default], () => C.default.getState().theme), K = (0, u.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
      id: Z,
      guild_id: q
    } = n;
    l.useEffect(() => {
      T.default.track(O.AnalyticEvents.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: Z,
        guild_id: q
      })
    }, [Z, q]), l.useEffect(() => {
      !s && o()
    }, [o, s]);
    let X = (0, f.useAppContext)(),
      {
        analyticsLocations: Q
      } = (0, p.default)(m.default.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: J
      } = (0, p.default)([...Q, m.default.ACTIVITIES_MINI_SHELF_BANNER]),
      $ = X === O.AppContext.POPOUT,
      ee = (0, c.useAnalyticsContext)(),
      et = function(e, t) {
        return (0, x.default)({
          guildId: e,
          channel: t
        }).slice(0, 5)
      }(n.getGuildId(), n);
    l.useEffect(() => {
      let e = setTimeout(() => A.dismissNewActivityIndicator(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let en = l.useCallback(() => {
        var e;
        (0, y.default)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: ee.location,
          openInPopout: $,
          analyticsLocations: Q
        }), H(), B()
      }, [ee, Q, n, B, H, $]),
      ea = l.useCallback(e => {
        k(), T.default.track(O.AnalyticEvents.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [k, n]),
      el = V ? (0, a.jsxs)(r.Link, {
        to: O.Routes.ACTIVITIES,
        children: [(0, a.jsx)("img", {
          alt: j.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === z ? D : b,
          className: P.poster
        }), (0, a.jsx)("div", {
          className: P.posterDivider
        })]
      }) : Y ? (0, a.jsxs)(d.Clickable, {
        className: i()(P.clickableBanner, {
          [P.clickableBannerReducedMotion]: K
        }),
        onClick: () => {
          B(), o(), (0, E.transitionTo)(O.Routes.ACTIVITY_DETAILS(L.TUNE_IN_APPLICATION_ID), void 0, void 0, J)
        },
        children: [(0, a.jsx)("img", {
          alt: j.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TUNE_IN_POSTER_ALT,
          src: F,
          className: P.poster
        }), (0, a.jsx)("div", {
          className: P.posterDivider
        })]
      }) : W ? (0, a.jsxs)(d.Clickable, {
        className: i()(P.clickableBanner, {
          [P.clickableBannerReducedMotion]: K
        }),
        onClick: () => {
          B(), o(), (0, E.transitionTo)(O.Routes.ACTIVITY_DETAILS(L.DEATH_BY_AI_APPLICATION_ID), void 0, void 0, J)
        },
        children: [(0, a.jsx)("img", {
          alt: j.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_DEATH_BY_AI_POSTER,
          src: U,
          className: P.poster
        }), (0, a.jsx)("div", {
          className: P.posterDivider
        })]
      }) : null;
    return (0, a.jsx)(p.AnalyticsLocationProvider, {
      value: Q,
      children: (0, a.jsx)(g.default, {
        children: (0, a.jsxs)(d.Dialog, {
          ref: t,
          "aria-labelledby": w,
          className: G,
          children: [(0, a.jsx)(d.HeadingLevel, {
            forceLevel: 2,
            children: (0, a.jsx)(d.HiddenVisually, {
              children: (0, a.jsx)(d.H, {
                id: w,
                children: j.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, a.jsxs)("div", {
            className: P.container,
            onMouseEnter: ea,
            onMouseLeave: H,
            children: [(0, a.jsxs)("div", {
              className: P.titleContainer,
              children: [(0, a.jsxs)("div", {
                className: P.titleLeft,
                children: [(0, a.jsx)(_.default, {
                  className: P.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: j.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, a.jsxs)(d.Clickable, {
                className: P.titleRight,
                onClick: en,
                children: [(0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: j.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, a.jsx)(S.default, {
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: P.titleRightIcon
                })]
              })]
            }), (0, a.jsx)(p.AnalyticsLocationProvider, {
              value: J,
              children: el
            }), (0, a.jsxs)("div", {
              className: P.activityContainer,
              children: [et.map(e => (0, a.jsx)(M.ActivitySuggestion, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  o(), B()
                },
                aspectRatio: M.ActivitySuggestion.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: P.activitySuggestion
              }, e.application.id)), (0, a.jsx)("div", {
                className: i()(P.wumpusRocketOuterContainer, {
                  [P.wumpusReducedMotion]: K
                }),
                children: (0, a.jsx)("div", {
                  className: P.wumpusRocketInnerContainer,
                  children: (0, a.jsx)(R.default, {
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
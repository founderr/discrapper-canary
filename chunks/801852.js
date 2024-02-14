"use strict";
n.r(t), n.d(t, {
  ActivitiesMiniShelf: function() {
    return H
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("90915"),
  o = n("748820"),
  u = n("446674"),
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
  T = n("614175"),
  v = n("955153"),
  x = n("550766"),
  N = n("337697"),
  A = n("158962"),
  M = n("974555"),
  R = n("91761"),
  j = n("441821"),
  L = n("766914"),
  O = n("478272"),
  y = n("954016"),
  P = n("49111"),
  b = n("782340"),
  D = n("73687"),
  U = n("678070"),
  w = n("789335"),
  F = n("274889"),
  k = n("894860"),
  V = n("717387"),
  B = n("861948");
let G = "vc-activities-".concat((0, o.v4)()),
  H = a.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: o,
      onMouseEnter: H,
      onMouseLeave: W,
      onClick: Y,
      className: z
    } = e, {
      enabled: K
    } = T.ActivitiesGameNightExperiment.useExperiment({
      location: "8009ca_1"
    }, {
      autoTrackExposure: !1
    }), {
      enabled: Z
    } = v.BirthdayActivitiesExperiment.useExperiment({
      location: "8009ca_3"
    }), {
      enabled: X
    } = N.ExperimentBirthdayGoodbye.useExperiment({
      location: "8009ca_4"
    }), {
      enableKrunkerStrikeMiniShelfBanner: J
    } = M.ExperimentKrunkerStrikeMiniShelfBanner.useExperiment({
      location: "activties_mini_shelf"
    }, {
      autoTrackExposure: !0
    }), {
      enableColonistMiniShelfBanner: q
    } = A.ExperimentColonistMiniShelfBanner.useExperiment({
      location: "activties_mini_shelf"
    }, {
      autoTrackExposure: !0
    }), Q = (0, u.useStateFromStores)([S.default], () => S.default.getState().theme), $ = (0, u.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
      id: ee,
      guild_id: et
    } = n;
    a.useEffect(() => {
      I.default.track(P.AnalyticEvents.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: ee,
        guild_id: et
      })
    }, [ee, et]), a.useEffect(() => {
      !s && o()
    }, [o, s]);
    let en = (0, f.useAppContext)(),
      {
        analyticsLocations: el,
        AnalyticsLocationProvider: ea
      } = (0, p.default)(m.default.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: es,
        AnalyticsLocationProvider: ei
      } = (0, p.default)([...el, m.default.ACTIVITIES_MINI_SHELF_BANNER]),
      er = en === P.AppContext.POPOUT,
      eo = (0, c.useAnalyticsContext)(),
      eu = function(e) {
        let t = (0, R.default)({
            guildId: e
          }),
          n = [];
        return t.forEach(e => {
          let [t, l] = e;
          n.push(...l)
        }), n.slice(0, 5)
      }(n.getGuildId());
    a.useEffect(() => {
      let e = setTimeout(() => x.dismissNewActivityIndicator(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let ed = a.useCallback(() => {
        var e;
        (0, O.default)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: eo.location,
          openInPopout: er,
          analyticsLocations: el
        }), W(), Y()
      }, [eo, el, n, Y, W, er]),
      ec = a.useCallback(e => {
        H(), I.default.track(P.AnalyticEvents.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [H, n]),
      ef = K ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("img", {
          alt: b.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_GAME_NIGHT_POSTER_ALT,
          src: k,
          className: D.poster
        }), (0, l.jsx)("div", {
          className: D.posterDivider
        })]
      }) : X ? (0, l.jsxs)("div", {
        className: D.freeWrapper,
        children: [(0, l.jsxs)("div", {
          className: D.freeLeft,
          children: [(0, l.jsx)(d.Text, {
            className: D.freeLeftTitle,
            variant: "display-md",
            children: b.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOR_EVERYONE_BANNER_TEXT
          }), (0, l.jsx)(d.Anchor, {
            href: "https://discord.com/blog/server-activities-games-voice-watch-together",
            className: i((0, d.getButtonStyle)({
              color: d.Button.Colors.BRAND
            }), D.freeButtonLink),
            children: b.default.Messages.LEARN_MORE
          })]
        }), (0, l.jsx)("img", {
          className: D.freeRight,
          src: B,
          alt: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
        })]
      }) : Z ? (0, l.jsxs)(r.Link, {
        to: P.Routes.ACTIVITIES,
        children: [(0, l.jsx)("img", {
          alt: b.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === Q ? U : w,
          className: D.poster
        }), (0, l.jsx)("div", {
          className: D.posterDivider
        })]
      }) : J ? (0, l.jsxs)(d.Clickable, {
        className: i(D.clickableBanner, {
          [D.clickableBannerReducedMotion]: $
        }),
        onClick: () => {
          Y(), o(), (0, E.transitionTo)(P.Routes.ACTIVITY_DETAILS(y.KRUNKER_STRIKE_APPLICATION_ID), void 0, void 0, es)
        },
        children: [(0, l.jsx)("img", {
          alt: b.default.Messages.EMBEDDED_ACTIVITIES_KRUNKER_STRIKE_POSTER_ALT,
          src: V,
          className: D.poster
        }), (0, l.jsx)("div", {
          className: D.posterDivider
        })]
      }) : q ? (0, l.jsxs)(d.Clickable, {
        className: i(D.clickableBanner, {
          [D.clickableBannerReducedMotion]: $
        }),
        onClick: () => {
          Y(), o(), (0, E.transitionTo)(P.Routes.ACTIVITY_DETAILS(y.COLONIST_APPLICATION_ID), void 0, void 0, es)
        },
        children: [(0, l.jsx)("img", {
          alt: b.default.Messages.EMBEDDED_ACTIVITIES_COLONIST_POSTER_ALT,
          src: F,
          className: D.poster
        }), (0, l.jsx)("div", {
          className: D.posterDivider
        })]
      }) : null;
    return (0, l.jsx)(ea, {
      children: (0, l.jsx)(g.default, {
        children: (0, l.jsxs)(d.Dialog, {
          ref: t,
          "aria-labelledby": G,
          className: z,
          children: [(0, l.jsx)(d.HeadingLevel, {
            forceLevel: 2,
            children: (0, l.jsx)(d.HiddenVisually, {
              children: (0, l.jsx)(d.H, {
                id: G,
                children: b.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, l.jsxs)("div", {
            className: D.container,
            onMouseEnter: ec,
            onMouseLeave: W,
            children: [(0, l.jsxs)("div", {
              className: D.titleContainer,
              children: [(0, l.jsxs)("div", {
                className: D.titleLeft,
                children: [(0, l.jsx)(_.default, {
                  className: D.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: b.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, l.jsxs)(d.Clickable, {
                className: D.titleRight,
                onClick: ed,
                children: [(0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: b.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, l.jsx)(C.default, {
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: D.titleRightIcon
                })]
              })]
            }), (0, l.jsx)(ei, {
              children: ef
            }), (0, l.jsxs)("div", {
              className: D.activityContainer,
              children: [eu.map(e => (0, l.jsx)(j.ActivitySuggestion, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  o(), Y()
                },
                aspectRatio: j.ActivitySuggestion.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: D.activitySuggestion
              }, e.application.id)), (0, l.jsx)("div", {
                className: i(D.wumpusRocketOuterContainer, {
                  [D.wumpusReducedMotion]: $
                }),
                children: (0, l.jsx)("div", {
                  className: D.wumpusRocketInnerContainer,
                  children: (0, l.jsx)(L.default, {
                    className: D.wumpusRocket
                  })
                })
              })]
            })]
          })]
        })
      })
    })
  })
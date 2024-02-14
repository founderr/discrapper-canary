"use strict";
n.r(t), n.d(t, {
  ActivityEntryPointTile: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("151426"),
  o = n("669491"),
  u = n("77078"),
  d = n("997289"),
  c = n("860345"),
  f = n("865821"),
  h = n("441821"),
  m = n("478272"),
  p = n("812204"),
  E = n("685665"),
  S = n("10641"),
  g = n("36562"),
  C = n("945330"),
  _ = n("381546"),
  I = n("564875"),
  T = n("82636"),
  v = n("924506"),
  x = n("599110"),
  N = n("439932"),
  A = n("784981"),
  M = n("49111"),
  R = n("954016"),
  j = n("782340"),
  L = n("885399"),
  O = n("861948");

function y(e) {
  let {
    channel: t,
    guild: n,
    width: a,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  } = e, {
    enabled: o
  } = c.PaxVcTileActivitiesExperiment.useExperiment({
    location: "4934f1_1"
  }, {
    autoTrackExposure: !1
  });
  return a < 250 ? (0, l.jsx)(P, {
    channel: t,
    guild: n,
    width: a,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  }) : r > 1 || o ? (0, l.jsx)(U, {
    channel: t,
    guild: n,
    width: a,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  }) : (0, l.jsx)(b, {
    channel: t,
    guild: n,
    width: a,
    inPopout: s
  })
}

function P(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: a
  } = e, {
    analyticsLocations: s,
    AnalyticsLocationProvider: r
  } = (0, E.default)(p.default.VC_TILE_ACTIVITY_SHELF_BUTTON), c = (0, d.useAnalyticsContext)(), f = (0, u.useToken)(o.default.colors.INTERACTIVE_NORMAL).hex(), h = () => {
    (0, m.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: c.location,
      openInPopout: n,
      analyticsLocations: s
    })
  };
  return (0, l.jsx)(r, {
    children: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.Tooltip, {
        text: j.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, l.jsx)(u.Clickable, {
            ...n,
            className: L.clickableTile,
            onClick: () => {
              null == t || t(), h()
            },
            children: (0, l.jsx)(A.default, {
              className: L.root,
              children: (0, l.jsx)("div", {
                className: L.iconContainer,
                children: (0, l.jsx)(v.default, {
                  width: 40,
                  height: 40
                })
              })
            })
          })
        }
      }), (0, l.jsx)(u.Clickable, {
        onClick: a,
        className: i((0, N.getThemeClass)(M.ThemeTypes.DARK), L.shelfButtonCloseButton),
        children: (0, l.jsx)(_.default, {
          width: 24,
          height: 24,
          className: L.closeButtonIcon,
          backgroundColor: f
        })
      })]
    })
  })
}

function b(e) {
  let {
    channel: t,
    guild: s,
    inPopout: i,
    width: r
  } = e;
  a.useEffect(() => {
    x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let o = (0, d.useAnalyticsContext)(),
    {
      analyticsLocations: c,
      AnalyticsLocationProvider: f
    } = (0, E.default)(p.default.VC_TILE_ACTIVITY_INVITE);
  return (0, l.jsx)(f, {
    children: (0, l.jsxs)(A.default, {
      className: L.root,
      children: [r > 400 ? (0, l.jsx)("img", {
        src: O,
        className: L.art,
        alt: j.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, (0, l.jsx)(u.Text, {
        className: L.heading,
        variant: "text-md/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
      }), (0, l.jsxs)("div", {
        className: L.buttonContainer,
        children: [(0, l.jsxs)(u.Button, {
          size: u.Button.Sizes.LARGE,
          color: u.Button.Colors.PRIMARY,
          className: L.button,
          innerClassName: L.buttonContents,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("310688").then(n.bind(n, "310688"));
              return n => (0, l.jsx)(e, {
                ...n,
                guild: s,
                channel: t,
                source: M.InstantInviteSources.ACTIVITY_ENTRY_POINT_TILE
              })
            }, {
              contextKey: i ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
            })
          },
          children: [(0, l.jsx)(I.default, {
            width: 16,
            height: 16
          }), (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: j.default.Messages.INVITE_FRIENDS
          })]
        }), (0, l.jsxs)(u.Button, {
          size: u.Button.Sizes.LARGE,
          className: L.button,
          innerClassName: L.buttonContents,
          onClick: function() {
            (0, m.default)({
              channel: t,
              guildId: t.guild_id,
              locationObject: o.location,
              openInPopout: i,
              analyticsLocations: c
            })
          },
          children: [(0, l.jsx)(T.default, {
            width: 16,
            height: 16
          }), (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: j.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY
          })]
        })]
      })]
    })
  })
}
let D = e => {
  let {
    userParticipantCount: t,
    guildId: n
  } = e, {
    enabled: l
  } = c.PaxVcTileActivitiesExperiment.useExperiment({
    location: "4934f1_2"
  }, {
    autoTrackExposure: !1
  }), a = (0, f.default)({
    guildId: n
  });
  if (l) {
    let e = new Set([R.PUTT_PARTY_APPLICATION_ID, R.LAND_IO_APPLICATION_ID, R.GARTIC_PHONE_APPLICATION_ID]);
    return a.filter(t => e.has(t.application.id))
  }
  if (2 === t) {
    let e = [],
      t = [(0, R.WATCH_YOUTUBE_PROD_APP_ID), (0, R.PUTT_PARTY_APPLICATION_ID), (0, R.CHESS_IN_THE_PARK_APP_ID)].filter(Boolean).slice(0, 3);
    return a.forEach(n => {
      let l = t.indexOf(n.application.id);
      !(l < 0) && (e[l] = n)
    }), e
  }
  return a.slice(0, 3)
};

function U(e) {
  let {
    channel: t,
    guild: n,
    handleClose: s,
    width: o,
    userParticipantCount: d
  } = e;
  a.useEffect(() => {
    x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: d
    })
  }, []);
  let c = D({
      userParticipantCount: d,
      guildId: n.id
    }),
    {
      AnalyticsLocationProvider: f
    } = (0, E.default)(p.default.VC_TILE_ACTIVITY_SUGGESTION);
  return (0, l.jsx)(f, {
    children: (0, l.jsxs)(A.default, {
      className: L.root,
      children: [o > 480 ? (0, l.jsx)("img", {
        className: L.art,
        src: O,
        alt: j.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, o > 300 ? (0, l.jsx)(u.Text, {
        className: L.heading,
        variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
      }) : null, (0, l.jsx)("div", {
        className: i(L.activitiesContainer, {
          [L.activitiesContainerSmol]: o <= 300
        }),
        children: c.map(e => (0, l.jsx)(h.ActivitySuggestion, {
          channel: t,
          activityItem: e,
          aspectRatio: h.ActivitySuggestion.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: L.activitySuggestion
        }, e.application.id))
      }), (0, l.jsxs)(u.Clickable, {
        className: L.checkboxContainer,
        onClick: function() {
          x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: d
          }), (0, S.markDismissibleContentAsDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, l.jsx)(g.default, {}), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: j.default.Messages.DONT_SHOW_AGAIN
        })]
      }), (0, l.jsx)(u.Clickable, {
        className: L.closeButtonContainer,
        onClick: function() {
          x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: d
          }), s()
        },
        children: (0, l.jsx)(C.default, {
          className: L.closeButton
        })
      })]
    })
  })
}
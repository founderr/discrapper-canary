i.r(n), i.d(n, {
  default: function() {
    return T
  }
}), i(47120), i(789020);
var a = i(735250),
  l = i(470079),
  t = i(266067),
  s = i(692547),
  r = i(481060),
  o = i(100527),
  u = i(906732),
  c = i(703656),
  d = i(502568),
  g = i(810090),
  p = i(630388),
  m = i(566620),
  x = i(146936),
  f = i(678173),
  v = i(880308),
  j = i(636508),
  h = i(696068),
  I = i(361213),
  S = i(952561),
  M = i(778569),
  y = i(513202),
  b = i(412019),
  Z = i(431136),
  C = i(226799),
  N = i(981631),
  _ = i(689938),
  E = i(938155);

function T(e) {
  var n, i;
  let {
    match: x
  } = e, j = null !== (n = (0, c.DR)()) && void 0 !== n ? n : [], {
    analyticsLocations: h
  } = (0, u.ZP)([...j, o.Z.ACTIVITY_DETAIL_PAGE]), {
    applicationId: S
  } = x.params;
  (0, v.g)(), l.useEffect(() => {
    (0, m.w1)({
      guildId: null
    })
  }, []);
  let y = (0, M.Z)({
      applicationId: null != S ? S : "",
      size: 2048,
      names: ["embedded_cover"]
    }),
    b = (0, f.T)(null, null != S && "" !== S ? S : null, void 0);
  if (null == S || null == b) return null;
  if (!(0, p.yE)(b.application.flags, N.udG.EMBEDDED)) return (0, a.jsx)(t.l_, {
    to: N.Z5c.ACTIVITIES
  });
  let Z = null != b.activity.activity_preview_video_asset_id ? (0, I.Z)(S, b.activity.activity_preview_video_asset_id) : null,
    T = C.o[S],
    D = (null == T ? void 0 : T.playersSuggestionMin) != null && (null == T ? void 0 : T.playersSuggestionMax) != null ? "".concat(T.playersSuggestionMin, " - ").concat(T.playersSuggestionMax) : void 0;
  return (0, a.jsx)(u.Gt, {
    value: h,
    children: (0, a.jsxs)("div", {
      className: E.outerContainer,
      children: [(0, a.jsxs)(d.ZP, {
        children: [(0, a.jsxs)("div", {
          className: E.titleContainer,
          children: [(0, a.jsx)(r.ActivitiesIcon, {
            size: "md",
            color: "currentColor",
            className: E.rocketIcon
          }), (0, a.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: b.application.name
          })]
        }), (0, a.jsx)("div", {
          className: E.__invalid_headerBarRightSideFiller
        })]
      }), (0, a.jsx)(r.Scroller, {
        className: E.scroller,
        children: (0, a.jsxs)("div", {
          className: E.innerContainer,
          children: [(0, a.jsxs)("div", {
            className: E.header,
            children: [(0, a.jsx)("img", {
              src: y.url,
              className: E.headerImage,
              alt: b.application.name
            }), (0, a.jsx)("div", {
              className: E.headerImageOverlay
            }), (0, a.jsxs)(r.Clickable, {
              onClick: () => {
                (0, c.op)()
              },
              className: E.backButtonContainer,
              children: [(0, a.jsx)(r.ChevronSmallLeftIcon, {
                size: "md",
                color: s.Z.unsafe_rawColors.WHITE_100,
                className: E.backButtonIcon
              }), (0, a.jsx)(r.Heading, {
                color: "always-white",
                variant: "heading-lg/semibold",
                children: _.Z.Messages.BACK
              })]
            })]
          }), (0, a.jsx)("div", {
            className: E.detailsOuterContainer,
            children: (0, a.jsx)("div", {
              className: E.detailsInnerContainer,
              children: (0, a.jsxs)("div", {
                className: E.detailsInnerInnerContainer,
                children: [(0, a.jsxs)("div", {
                  className: E.activityDetailsContainer,
                  children: [(0, a.jsxs)("div", {
                    children: [(0, a.jsx)("div", {
                      className: E.detailsTitle,
                      children: (0, a.jsx)(r.Heading, {
                        variant: "heading-xxl/bold",
                        children: b.application.name
                      })
                    }), (0, a.jsxs)("div", {
                      className: E.detailsDetails,
                      children: [null != D ? (0, a.jsxs)("div", {
                        className: E.detailItem,
                        children: [(0, a.jsx)(r.GroupIcon, {
                          size: "xs",
                          color: "currentColor"
                        }), (0, a.jsx)(r.Text, {
                          variant: "text-xs/semibold",
                          className: E.detailItemText,
                          children: _.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                            nPlayers: D
                          })
                        })]
                      }) : null, (null == T ? void 0 : T.timeSuggestionMinutes) != null ? (0, a.jsxs)("div", {
                        className: E.detailItem,
                        children: [(0, a.jsx)(r.HourglassIcon, {
                          size: "xs",
                          color: "currentColor"
                        }), (0, a.jsx)(r.Text, {
                          variant: "text-xs/semibold",
                          className: E.detailItemText,
                          children: _.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                            nMinutes: T.timeSuggestionMinutes
                          })
                        })]
                      }) : null, (0, a.jsxs)("div", {
                        className: E.detailItem,
                        children: [(0, a.jsx)(r.TagsIcon, {
                          size: "xs",
                          color: "currentColor"
                        }), (0, a.jsx)(r.Text, {
                          variant: "text-xs/semibold",
                          className: E.detailItemText,
                          children: b.application.tags.slice(0, 3).join(", ")
                        })]
                      })]
                    })]
                  }), (0, a.jsx)(r.Heading, {
                    variant: "heading-lg/medium",
                    className: E.detailsDescription,
                    children: b.application.description
                  }), (0, a.jsx)("div", {
                    className: E.divider
                  }), (0, a.jsxs)("div", {
                    className: E.imagesContainer,
                    children: [(null !== (i = null == T ? void 0 : T.gameplayImageUrls) && void 0 !== i ? i : []).map(e => (0, a.jsx)("img", {
                      src: e,
                      alt: _.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                        activityName: b.application.name
                      }),
                      className: E.activityImage
                    }, e)), (0, a.jsx)(g.Z, {
                      loop: !0,
                      autoPlay: !0,
                      muted: !0,
                      className: E.activityImage,
                      src: Z,
                      poster: y.url
                    })]
                  })]
                }), (0, a.jsx)("div", {
                  className: E.launcherOuterContainer,
                  children: (0, a.jsx)(A, {
                    activityItem: b
                  })
                })]
              })
            })
          })]
        })
      })]
    })
  })
}

function A(e) {
  var n, t;
  let {
    activityItem: s
  } = e, {
    analyticsLocations: o
  } = (0, u.ZP)(), c = (0, S.Z)(), [d, g] = l.useState(null !== (n = (0, j.$)()) && void 0 !== n ? n : void 0), [p, m] = l.useState(null !== (t = (0, h.d)({
    guildId: d
  })) && void 0 !== t ? t : void 0), f = (0, j.W)(), v = (0, h.F)(d), I = l.useCallback(() => {
    var e;
    if (null != p && null != d)(0, x.Z)({
      targetApplicationId: null == s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: c,
      channelId: p,
      guildId: d,
      embeddedActivitiesManager: y.Z,
      analyticsLocations: o
    })
  }, [s, o, c, p, d]), M = l.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([i.e("99387"), i.e("60133")]).then(i.bind(i, 827940));
      return n => (0, a.jsx)(e, {
        activityItem: s,
        ...n,
        analyticsLocations: o
      })
    })
  }, [s, o]);
  return (0, a.jsxs)("div", {
    className: E.launcherInnerContainer,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-md/medium",
      children: _.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
    }), (0, a.jsx)(r.Select, {
      placeholder: _.Z.Messages.GUILD_SELECT,
      optionClassName: E.__invalid_option,
      options: f,
      renderOptionValue: e => {
        let n = e.find(e => e.value === d);
        return null == n ? null : (0, a.jsx)(Z.m, {
          guildId: n.value
        })
      },
      renderOptionLabel: e => {
        let {
          value: n
        } = e;
        return (0, a.jsx)(Z.m, {
          guildId: n
        })
      },
      isSelected: e => e === d,
      select: e => {
        var n;
        g(e), m(null !== (n = (0, h.d)({
          guildId: e
        })) && void 0 !== n ? n : void 0)
      },
      serialize: e => e
    }), (0, a.jsx)(r.Select, {
      placeholder: _.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
      optionClassName: E.__invalid_option,
      options: v,
      isSelected: e => {
        let {
          channel: n
        } = e;
        return n.id === p
      },
      select: e => {
        let {
          channel: n
        } = e;
        return m(n.id)
      },
      serialize: e => {
        let {
          channel: n
        } = e;
        return n.id
      },
      renderOptionValue: () => {
        let e = v.find(e => e.value.channel.id === p);
        return null == e ? null : (0, a.jsx)(b.O, {
          channel: e.value.channel,
          users: e.value.users
        })
      },
      renderOptionLabel: e => {
        let {
          value: {
            channel: n,
            users: i
          }
        } = e;
        return (0, a.jsx)(b.O, {
          channel: n,
          users: i
        })
      }
    }), (0, a.jsx)(r.Button, {
      fullWidth: !0,
      disabled: null == d || null == p || !f.some(e => e.value === d) || !v.some(e => e.value.channel.id === p),
      onClick: I,
      children: _.Z.Messages.START
    }), (0, a.jsx)("div", {
      className: E.divider
    }), (0, a.jsx)(r.Button, {
      fullWidth: !0,
      color: r.Button.Colors.PRIMARY,
      onClick: M,
      children: _.Z.Messages.SHARE
    })]
  })
}
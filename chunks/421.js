l.d(n, {
  Z: function() {
    return Z
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  a = l(399606),
  s = l(481060),
  r = l(100527),
  o = l(906732),
  c = l(592125),
  d = l(810090),
  u = l(566620),
  g = l(146936),
  p = l(678173),
  m = l(636508),
  v = l(696068),
  I = l(361213),
  x = l(952561),
  E = l(778569),
  T = l(182906),
  h = l(513202),
  f = l(412019),
  C = l(431136),
  _ = l(226799),
  S = l(689938),
  j = l(123849);

function Z(e) {
  var n;
  let {
    applicationId: l,
    guildId: g,
    channelId: m,
    onActivityLaunch: v
  } = e, {
    analyticsLocations: x
  } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  i.useEffect(() => {
    (0, u.w1)({
      guildId: g
    })
  }, [g]);
  let T = (0, E.Z)({
      applicationId: null != l ? l : "",
      size: 2048
    }),
    h = (0, a.e7)([c.Z], () => c.Z.getChannel(m)),
    f = (0, p.T)(null != g ? g : null, l, h);
  if (null == f) return null;
  let C = null != f.activity.activity_preview_video_asset_id ? (0, I.Z)(l, f.activity.activity_preview_video_asset_id) : null,
    Z = _.o[l],
    M = (null == Z ? void 0 : Z.playersSuggestionMin) != null && (null == Z ? void 0 : Z.playersSuggestionMax) != null ? "".concat(Z.playersSuggestionMin, " - ").concat(Z.playersSuggestionMax) : void 0;
  return (0, t.jsx)(o.Gt, {
    value: x,
    children: (0, t.jsx)("div", {
      className: j.scrollContainer,
      children: (0, t.jsxs)(s.Scroller, {
        className: j.scroller,
        children: [(0, t.jsx)("div", {
          className: j.launcherOuterContainer,
          children: (0, t.jsx)(N, {
            activityItem: f,
            onLaunch: v,
            channelId: m
          })
        }), (0, t.jsxs)("div", {
          className: j.activityDetailsContainer,
          children: [(0, t.jsxs)("div", {
            children: [null != C ? (0, t.jsx)("div", {
              className: j.heroVideoContainer,
              children: (0, t.jsx)(d.Z, {
                loop: !0,
                autoPlay: !0,
                muted: !0,
                className: j.heroVideo,
                src: C,
                poster: T.url
              })
            }) : null, (0, t.jsx)("div", {
              className: j.detailsTitle,
              children: (0, t.jsx)(s.Heading, {
                variant: "heading-xxl/bold",
                children: f.application.name
              })
            }), (0, t.jsxs)("div", {
              className: j.detailsDetails,
              children: [null != M ? (0, t.jsxs)("div", {
                className: j.detailItem,
                children: [(0, t.jsx)(s.GroupIcon, {
                  size: "xs",
                  color: "currentColor"
                }), (0, t.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: j.detailItemText,
                  children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                    nPlayers: M
                  })
                })]
              }) : null, (null == Z ? void 0 : Z.timeSuggestionMinutes) != null ? (0, t.jsxs)("div", {
                className: j.detailItem,
                children: [(0, t.jsx)(s.HourglassIcon, {
                  size: "xs",
                  color: "currentColor"
                }), (0, t.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: j.detailItemText,
                  children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                    nMinutes: Z.timeSuggestionMinutes
                  })
                })]
              }) : null, (0, t.jsxs)("div", {
                className: j.detailItem,
                children: [(0, t.jsx)(s.TagsIcon, {
                  size: "xs",
                  color: "currentColor"
                }), (0, t.jsx)(s.Text, {
                  variant: "text-xs/semibold",
                  className: j.detailItemText,
                  children: f.application.tags.slice(0, 3).join(", ")
                })]
              })]
            })]
          }), (0, t.jsx)(s.Heading, {
            variant: "heading-lg/medium",
            className: j.detailsDescription,
            children: f.application.description
          }), (0, t.jsx)("div", {
            className: j.divider
          }), (0, t.jsx)("div", {
            className: j.imagesContainer,
            children: (null !== (n = null == Z ? void 0 : Z.gameplayImageUrls) && void 0 !== n ? n : []).map(e => (0, t.jsx)("img", {
              src: e,
              alt: S.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: f.application.name
              }),
              className: j.activityImage
            }, e))
          })]
        })]
      })
    })
  })
}

function N(e) {
  var n, r;
  let {
    activityItem: d,
    onLaunch: u,
    channelId: p
  } = e, I = (0, E.Z)({
    applicationId: d.application.id,
    size: 2048
  }), {
    analyticsLocations: _
  } = (0, o.ZP)(), Z = (0, x.Z)(), [N, M] = i.useState(null !== (n = (0, m.$)({
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== n ? n : void 0), [A, D] = i.useState(null !== (r = (0, v.d)({
    guildId: N,
    allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), y = (0, a.e7)([c.Z], () => c.Z.getChannel(A), [A]), b = (0, m.W)(), L = (0, v.F)(N), V = i.useCallback(() => {
    var e;
    if (null != A)(0, g.Z)({
      targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: Z,
      channelId: A,
      guildId: N,
      embeddedActivitiesManager: h.Z,
      analyticsLocations: _
    }).then(u)
  }, [d, _, Z, u, A, N]), R = i.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("60133"), l.e("36925")]).then(l.bind(l, 827940));
      return n => (0, t.jsx)(e, {
        activityItem: d,
        ...n,
        analyticsLocations: _
      })
    })
  }, [d, _]), O = null == y || null != y.guild_id && !(null != N && null != A && b.some(e => e.value === N) && L.some(e => e.value.channel.id === A)) && !0;
  return (0, t.jsxs)("div", {
    className: j.launcherInnerContainer,
    children: [(0, t.jsx)(T.Z, {
      applicationName: d.application.name,
      imageBackground: I,
      imageClassName: j.launchImage,
      imageNotFoundClassName: j.brokenLaunchImage
    }), (0, t.jsx)(s.Text, {
      variant: "text-md/medium",
      children: S.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
    }), null == p ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(s.Select, {
        placeholder: S.Z.Messages.GUILD_SELECT,
        optionClassName: j.__invalid_option,
        options: b,
        renderOptionValue: e => {
          let n = e.find(e => e.value === N);
          return null == n ? null : (0, t.jsx)(C.m, {
            guildId: n.value
          })
        },
        renderOptionLabel: e => {
          let {
            value: n
          } = e;
          return (0, t.jsx)(C.m, {
            guildId: n
          })
        },
        isSelected: e => e === N,
        select: e => {
          var n;
          M(e), D(null !== (n = (0, v.d)({
            guildId: e
          })) && void 0 !== n ? n : void 0)
        },
        serialize: e => e
      }), (0, t.jsx)(s.Select, {
        placeholder: S.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: j.__invalid_option,
        options: L,
        isSelected: e => {
          let {
            channel: n
          } = e;
          return n.id === A
        },
        select: e => {
          let {
            channel: n
          } = e;
          return D(n.id)
        },
        serialize: e => {
          let {
            channel: n
          } = e;
          return n.id
        },
        renderOptionValue: () => {
          let e = L.find(e => e.value.channel.id === A);
          return null == e ? null : (0, t.jsx)(f.O, {
            channel: e.value.channel,
            users: e.value.users
          })
        },
        renderOptionLabel: e => {
          let {
            value: {
              channel: n,
              users: l
            }
          } = e;
          return (0, t.jsx)(f.O, {
            channel: n,
            users: l
          })
        }
      }), (0, t.jsx)(s.Button, {
        fullWidth: !0,
        disabled: O,
        onClick: V,
        children: S.Z.Messages.START
      }), (0, t.jsx)("div", {
        className: j.divider
      }), (0, t.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: R,
        children: S.Z.Messages.SHARE
      })]
    }) : (0, t.jsxs)("div", {
      className: j.singleRowShareContainer,
      children: [(0, t.jsx)(s.Button, {
        fullWidth: !0,
        disabled: O,
        onClick: V,
        children: S.Z.Messages.START
      }), (0, t.jsx)(s.Button, {
        className: j.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: R,
        children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, {
          size: "md",
          color: "currentColor"
        })
      })]
    })]
  })
}
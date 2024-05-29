"use strict";
n.r(t), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("692547"),
  c = n("481060"),
  f = n("438139"),
  E = n("2052"),
  h = n("726542"),
  _ = n("638880"),
  C = n("655922"),
  m = n("122810"),
  S = n("833664"),
  p = n("503438"),
  I = n("420660"),
  g = n("74433"),
  T = n("952561"),
  A = n("513202"),
  N = n("906732"),
  v = n("812206"),
  R = n("933557"),
  O = n("102172"),
  L = n("871118"),
  M = n("849171"),
  x = n("314897"),
  P = n("592125"),
  y = n("594174"),
  D = n("368874"),
  b = n("366695"),
  U = n("366966"),
  j = n("446753"),
  G = n("619271"),
  w = n("395361"),
  k = n("639351"),
  B = n("632184"),
  F = n("368666"),
  H = n("81063"),
  V = n("823379"),
  Y = n("51144"),
  W = n("599706"),
  K = n("981631"),
  z = n("689938"),
  Q = n("691970");
let q = {
    SMALL: 64,
    LARGE: 160
  },
  Z = [14, 14, 12, 12, 10, 8, 6],
  X = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return (0, l.jsx)(c.Text, {
      className: o()(Q.textContent, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  J = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return (0, l.jsx)(c.Text, {
      className: o()(Q.textContent, t),
      variant: "text-xs/normal",
      children: e
    })
  },
  $ = (0, f.default)(e => {
    let {
      message: t
    } = e;
    return (0, l.jsx)("div", {
      className: Q.__invalid_timestamp,
      children: t
    })
  }),
  ee = e => {
    let {
      children: t
    } = e;
    return (0, l.jsx)("section", {
      className: Q.section,
      children: t
    })
  };
class et extends i.Component {
  renderTimePlayed() {
    let e;
    let {
      activity: t
    } = this.props, {
      timestamps: n
    } = t;
    return null == n || !(0, S.default)(t) || (0, p.default)(t) ? null : J(e = (0, m.default)(t) ? (0, l.jsx)($, {
      timestamps: n
    }) : (0, l.jsx)(U.default, {
      start: n.start,
      end: n.end,
      location: U.default.Locations.USER_ACTIVITY,
      className: Q.__invalid_playTime
    }))
  }
  render() {
    var e, t;
    let {
      activity: {
        assets: a,
        details: s,
        state: i,
        application_id: r
      },
      getAssetImage: u
    } = this.props;
    return (0, l.jsx)(ee, {
      children: (0, l.jsxs)("div", {
        className: Q.activitySection,
        children: [null != a && 0 !== Object.keys(a).length ? (0, l.jsxs)("div", {
          className: Q.activitySectionAssets,
          children: [(0, l.jsx)("img", {
            alt: null !== (e = a.large_text) && void 0 !== e ? e : "",
            src: u(r, a.large_image, [q.LARGE, q.LARGE]),
            className: o()(Q.largeImage, {
              [Q.largeImageMask]: null != a.small_image
            })
          }), null != a.small_image ? (0, l.jsx)("img", {
            alt: null !== (t = a.small_text) && void 0 !== t ? t : "",
            src: u(r, a.small_image, [q.SMALL, q.SMALL]),
            className: Q.smallImage
          }) : null]
        }) : (0, l.jsx)("div", {
          className: Q.activitySectionAssets,
          children: (0, l.jsx)("img", {
            alt: "",
            src: n("211827"),
            className: Q.largeImage
          })
        }), (0, l.jsxs)("div", {
          children: [X(null != s && "" !== s ? s : z.default.Messages.USER_ACTIVITY_HEADER_PLAYING), null != i ? J(i) : null, this.renderTimePlayed()]
        })]
      })
    })
  }
}(s = a || (a = {})).XBOX = "XBOX", s.SPOTIFY = "SPOTIFY", s.MULTIPLE = "MULTIPLE";
let en = e => {
  let t, {
    src: n,
    onClick: a,
    onContextMenu: s
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, l.jsx)(k.default, {
        className: Q.headerIcon,
        color: d.default.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, l.jsx)(w.default, {
        className: Q.headerIcon,
        color: d.default.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, l.jsx)("div", {
        className: Q.multipleIconWrapper,
        children: (0, l.jsx)(G.default, {
          className: o()(Q.headerIcon, Q.multipleIcon),
          color: d.default.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, l.jsx)("img", {
        src: null != n ? n : void 0,
        alt: "",
        className: Q.headerIcon
      })
  }
  return null != a || null != s ? (0, l.jsx)(c.Clickable, {
    onClick: a,
    className: o()(null != a ? Q.clickableIcon : ""),
    onContextMenu: s,
    children: t
  }) : t
};
en.Src = a;
let ea = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: a,
    icon: s,
    onContextMenu: i,
    guildId: r
  } = e;
  return (0, l.jsxs)("header", {
    className: null != s ? Q.headerFull : Q.headerSimple,
    children: [(0, l.jsx)(c.Avatar, {
      src: t.user.getAvatarURL(r, 32),
      "aria-label": t.user.username,
      size: c.AvatarSizes.SIZE_32,
      className: Q.headerAvatar,
      status: t.status,
      onContextMenu: i
    }), (0, l.jsxs)("div", {
      className: Q.__invalid_headerDetails,
      children: [(0, l.jsx)(c.Text, {
        className: o()(Q.textContent),
        variant: "text-md/semibold",
        children: n
      }), (0, l.jsx)(c.Text, {
        color: "header-secondary",
        className: Q.textContent,
        variant: "text-sm/normal",
        children: a
      })]
    }), null != s ? s : null]
  })
};
ea.Icon = en;
let es = e => {
  let {
    children: t,
    className: n,
    ...a
  } = e;
  return (0, l.jsx)(c.FocusRing, {
    children: (0, l.jsx)(j.default, {
      className: o()(n, Q.wrapper),
      padded: !0,
      ...a,
      children: t
    })
  })
};
es.Header = ea, es.Body = e => {
  let {
    children: t
  } = e;
  return (0, l.jsx)(j.default, {
    inset: !0,
    padded: !1,
    className: Q.body,
    children: t
  })
}, es.Separator = e => {
  let {
    inset: t,
    className: n
  } = e;
  return (0, l.jsx)("div", {
    className: o()(Q.separator, {
      [Q.inset]: t
    }, n)
  })
}, es.VoiceSection = e => {
  var t, n;
  let {
    guild: a,
    channel: s,
    onGuildClick: r,
    partySize: u,
    members: d,
    onChannelContextMenu: f
  } = e, E = i.useRef(null), h = (0, R.default)(s, !0);
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: Q.voiceSection,
      ref: E,
      onContextMenu: e => f(e, s),
      children: [(0, l.jsx)(c.Clickable, {
        onClick: r,
        "aria-hidden": !0,
        tabIndex: -1,
        children: (0, l.jsxs)("div", {
          className: Q.voiceSectionAssets,
          children: [null != a.getIconURL(32) ? (0, l.jsx)("img", {
            alt: "",
            src: null !== (t = a.getIconURL(32)) && void 0 !== t ? t : void 0,
            className: o()(Q.voiceSectionGuildImage, Q.largeImageMask)
          }) : (0, l.jsx)("div", {
            className: Q.voiceSectionNoGuildImageWrapper,
            children: (0, l.jsx)("div", {
              className: Q.voiceSectionNoGuildImage,
              style: {
                fontSize: null !== (n = Z[a.acronym.length]) && void 0 !== n ? n : Z[Z.length - 1]
              },
              children: a.acronym
            })
          }), (0, l.jsx)("div", {
            className: Q.voiceSectionIconWrapper,
            children: (0, l.jsx)(B.default, {
              className: Q.voiceSectionIcon
            })
          })]
        })
      }), (0, l.jsx)(c.Clickable, {
        onClick: r,
        focusProps: {
          ringTarget: E
        },
        children: (0, l.jsxs)("div", {
          className: Q.voiceSectionDetails,
          children: [X(a.toString(), Q.voiceSectionText), J(h, Q.voiceSectionText)]
        })
      }), (0, l.jsx)(W.default, {
        partySize: u,
        members: d,
        guildId: a.id
      })]
    })
  })
}, es.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: a,
    members: s
  } = e;
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: Q.gameSection,
      children: [null != t ? (0, l.jsx)("img", {
        alt: "",
        src: t,
        className: Q.gameSectionIcon
      }) : null, (0, l.jsxs)("div", {
        children: [X(n), J(z.default.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
          memberCount: a.totalSize
        }))]
      }), (0, l.jsx)(W.default, {
        partySize: a,
        members: s
      })]
    })
  })
}, es.RichPresenceSection = et, es.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: Q.xboxSection,
      children: [(0, l.jsx)(k.default, {
        className: Q.xboxSectionIcon
      }), (0, l.jsxs)("div", {
        className: Q.__invalid_xboxSectionDetails,
        children: [X(t), J(z.default.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)]
      })]
    })
  })
}, es.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: a,
      state: s,
      application_id: i
    },
    partySize: r,
    members: u,
    isSolo: c,
    getAssetImage: f
  } = e;
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: Q.spotifySection,
      children: [null != n ? (0, l.jsxs)("div", {
        className: Q.activitySectionAssets,
        children: [(0, l.jsx)("img", {
          alt: null !== (t = n.large_text) && void 0 !== t ? t : "",
          src: f(i, n.large_image, [q.LARGE, q.LARGE]),
          className: o()(Q.largeImage, Q.borderRadius0, {
            [Q.largeImageMask]: null != n.small_image
          })
        }), c ? null : (0, l.jsx)(w.default, {
          className: Q.smallImage,
          color: d.default.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, l.jsx)("div", {}), (0, l.jsxs)("div", {
        children: [null != a ? X(a) : null, null != s ? J(s) : null]
      }), (0, l.jsx)(W.default, {
        minAvatarsShown: c ? 2 : 1,
        partySize: r,
        members: u
      })]
    })
  })
}, es.TwitchSection = e => {
  let t, {
      activity: a,
      user: s,
      getAssetImage: i,
      guildId: r
    } = e,
    {
      name: u,
      details: d,
      assets: f,
      application_id: E
    } = a;
  if (null != f && (0, I.default)(a)) {
    var _;
    t = (0, l.jsx)(D.default, {
      className: Q.twitchSectionPreviewWrapper,
      aspectRatio: 16 / 9,
      children: (0, l.jsxs)(c.Clickable, {
        href: (0, C.default)(a),
        tag: "a",
        target: "_blank",
        children: [(0, l.jsx)("img", {
          alt: null !== (_ = f.large_text) && void 0 !== _ ? _ : "",
          src: i(E, f.large_image, [900, 500]),
          className: Q.twitchSectionPreview
        }), (0, l.jsx)("img", {
          src: n("497726"),
          className: Q.twitchSectionPlayButton,
          alt: ""
        })]
      })
    })
  }
  return (0, l.jsxs)(ee, {
    children: [(0, l.jsxs)("div", {
      className: o()({
        [Q.twitchSectionSimple]: null == s,
        [Q.twitchSectionFull]: null != s
      }),
      children: [(0, l.jsx)("img", {
        alt: "",
        src: h.default.get(K.PlatformTypes.TWITCH).icon.lightSVG,
        className: Q.twitchSectionIcon
      }), (0, l.jsxs)("div", {
        children: [X(u), null != d ? J(d) : null]
      }), null != s ? (0, l.jsx)(c.Avatar, {
        src: s.getAvatarURL(r, 24),
        "aria-label": s.username,
        className: Q.twitchSectionAvatar,
        size: c.AvatarSizes.SIZE_24
      }) : null]
    }), t]
  })
}, es.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: a,
    user: s,
    applicationStream: i,
    onPreviewClick: r,
    guildId: o
  } = e, d = (0, u.useStateFromStores)([P.default], () => P.default.getChannel(i.channelId)), [f, E] = (0, O.useCanWatchStream)(d), h = (0, l.jsxs)(c.Clickable, {
    onClick: f ? r : void 0,
    className: Q.applicationStreamingPreviewWrapper,
    children: [(0, l.jsx)(L.default, {
      stream: i,
      className: Q.applicationStreamingPreviewSize
    }), (0, l.jsx)("div", {
      className: Q.applicationStreamingHoverWrapper,
      children: (0, l.jsx)("div", {
        className: Q.applicationStreamingHoverText,
        children: (0, O.getStreamCTAString)(E)
      })
    })]
  }), _ = null !== (n = null === (t = (0, g.default)(a, i)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : z.default.Messages.SHARING_SCREEN;
  return (0, l.jsxs)(ee, {
    children: [(0, l.jsxs)("div", {
      className: Q.applicationStreamingSection,
      children: [(0, l.jsx)(c.Avatar, {
        size: c.AvatarSizes.SIZE_32,
        src: s.getAvatarURL(o, 32),
        "aria-label": s.username,
        className: Q.applicationStreamingAvatar
      }), (0, l.jsxs)("div", {
        children: [X(Y.default.getName(s)), J(_)]
      }), (0, l.jsx)(F.default, {
        size: F.default.Sizes.SMALL
      })]
    }), h]
  })
}, es.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: a,
    participants: s
  } = e, r = (0, T.default)(), [o, d] = i.useState(null), f = t.application_id;
  i.useEffect(() => {
    null != f && (0, H.fetchAssetIds)(f, ["embedded_background"]).then(e => {
      let [t] = e;
      return d(t)
    })
  }, [f]);
  let h = (0, u.useStateFromStoresArray)([y.default, x.default], () => Array.from(s).map(e => x.default.getId() === e ? null : y.default.getUser(e)).filter(V.isNotNullish)),
    C = (0, E.useAnalyticsContext)(),
    {
      analyticsLocations: m
    } = (0, N.default)();
  if (null == f) return null;
  let S = v.default.getApplication(f);
  if (null == S) return null;
  let p = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : void 0,
    I = (0, H.getAssetImage)(S.id, o, 300);
  return (0, l.jsxs)(ee, {
    children: [(0, l.jsxs)("div", {
      className: Q.embeddedActivityTopRow,
      children: [(0, l.jsx)(b.default, {
        game: S,
        size: b.default.Sizes.XSMALL,
        className: Q.embeddedActivityIcon
      }), (0, l.jsx)("div", {
        className: Q.embeddedActivityName,
        children: (0, l.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: S.name
        })
      }), null != p ? (0, l.jsx)("div", {
        className: Q.embeddedActivityTimeElapsed,
        children: (0, l.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, l.jsx)($, {
            timestamps: p
          })
        })
      }) : null]
    }), (0, l.jsxs)("div", {
      className: Q.embeddedActivityPlayerContainer,
      children: [null != I ? (0, l.jsx)("img", {
        src: I,
        alt: S.name,
        className: Q.embeddedActivityImage
      }) : null, (0, l.jsxs)("div", {
        className: Q.embeddedActivityImageOverlay,
        children: [(0, l.jsx)(M.Avatars, {
          users: h,
          guildId: a,
          channelId: n.id
        }), (0, l.jsx)("div", {
          className: Q.embeddedActivityJoinWrapper,
          children: (0, l.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: e => {
              e.stopPropagation(), (0, _.default)({
                applicationId: f,
                currentEmbeddedApplication: r,
                activityChannelId: n.id,
                locationObject: C.location,
                embeddedActivitiesManager: A.default,
                analyticsLocations: m
              })
            },
            children: z.default.Messages.JOIN
          })
        })]
      })]
    })]
  })
}, t.default = es
n(47120);
var i, s, l = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  u = n(692547),
  d = n(481060),
  E = n(438139),
  h = n(2052),
  _ = n(726542),
  I = n(638880),
  m = n(655922),
  g = n(122810),
  p = n(833664),
  N = n(503438),
  T = n(420660),
  C = n(74433),
  S = n(952561),
  A = n(513202),
  f = n(906732),
  Z = n(812206),
  v = n(933557),
  L = n(382182),
  O = n(871118),
  R = n(849171),
  x = n(314897),
  M = n(592125),
  P = n(594174),
  D = n(368874),
  b = n(366695),
  y = n(366966),
  j = n(446753),
  U = n(395361),
  G = n(639351),
  w = n(368666),
  k = n(81063),
  B = n(823379),
  H = n(51144),
  V = n(599706),
  F = n(981631),
  Y = n(689938),
  z = n(301661);
let W = {
    SMALL: 64,
    LARGE: 160
  },
  K = [14, 14, 12, 12, 10, 8, 6],
  q = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return (0, l.jsx)(d.Text, {
      className: o()(z.textContent, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  Q = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return (0, l.jsx)(d.Text, {
      className: o()(z.textContent, t),
      variant: "text-xs/normal",
      children: e
    })
  },
  X = (0, E.Z)(e => {
    let {
      message: t
    } = e;
    return (0, l.jsx)("div", {
      className: z.__invalid_timestamp,
      children: t
    })
  }),
  J = e => {
    let {
      children: t
    } = e;
    return (0, l.jsx)("section", {
      className: z.section,
      children: t
    })
  };
class $ extends a.Component {
  renderTimePlayed() {
    let e;
    let {
      activity: t
    } = this.props, {
      timestamps: n
    } = t;
    return null == n || !(0, p.Z)(t) || (0, N.Z)(t) ? null : Q(e = (0, g.Z)(t) ? (0, l.jsx)(X, {
      timestamps: n
    }) : (0, l.jsx)(y.ZP, {
      start: n.start,
      end: n.end,
      location: y.ZP.Locations.USER_ACTIVITY,
      className: z.__invalid_playTime
    }))
  }
  render() {
    var e, t;
    let {
      activity: {
        assets: i,
        details: s,
        state: a,
        application_id: r
      },
      getAssetImage: c
    } = this.props;
    return (0, l.jsx)(J, {
      children: (0, l.jsxs)("div", {
        className: z.activitySection,
        children: [null != i && 0 !== Object.keys(i).length ? (0, l.jsxs)("div", {
          className: z.activitySectionAssets,
          children: [(0, l.jsx)("img", {
            alt: null !== (e = i.large_text) && void 0 !== e ? e : "",
            src: c(r, i.large_image, [W.LARGE, W.LARGE]),
            className: o()(z.largeImage, {
              [z.largeImageMask]: null != i.small_image
            })
          }), null != i.small_image ? (0, l.jsx)("img", {
            alt: null !== (t = i.small_text) && void 0 !== t ? t : "",
            src: c(r, i.small_image, [W.SMALL, W.SMALL]),
            className: z.smallImage
          }) : null]
        }) : (0, l.jsx)("div", {
          className: z.activitySectionAssets,
          children: (0, l.jsx)("img", {
            alt: "",
            src: n(211827),
            className: z.largeImage
          })
        }), (0, l.jsxs)("div", {
          children: [q(null != s && "" !== s ? s : Y.Z.Messages.USER_ACTIVITY_HEADER_PLAYING), null != a ? Q(a) : null, this.renderTimePlayed()]
        })]
      })
    })
  }
}(s = i || (i = {})).XBOX = "XBOX", s.SPOTIFY = "SPOTIFY", s.MULTIPLE = "MULTIPLE";
let ee = e => {
  let t, {
    src: n,
    onClick: i,
    onContextMenu: s
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, l.jsx)(G.Z, {
        className: z.headerIcon,
        color: u.Z.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, l.jsx)(U.Z, {
        className: z.headerIcon,
        color: u.Z.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, l.jsx)("div", {
        className: z.multipleIconWrapper,
        children: (0, l.jsx)(d.GameControllerIcon, {
          size: "md",
          className: o()(z.headerIcon, z.multipleIcon),
          color: u.Z.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, l.jsx)("img", {
        src: null != n ? n : void 0,
        alt: "",
        className: z.headerIcon
      })
  }
  return null != i || null != s ? (0, l.jsx)(d.Clickable, {
    onClick: i,
    className: o()(null != i ? z.clickableIcon : ""),
    onContextMenu: s,
    children: t
  }) : t
};
ee.Src = i;
let et = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: i,
    icon: s,
    onContextMenu: a,
    guildId: r
  } = e;
  return (0, l.jsxs)("header", {
    className: null != s ? z.headerFull : z.headerSimple,
    children: [(0, l.jsx)(d.Avatar, {
      src: t.user.getAvatarURL(r, 32),
      "aria-label": t.user.username,
      size: d.AvatarSizes.SIZE_32,
      className: z.headerAvatar,
      status: t.status,
      onContextMenu: a
    }), (0, l.jsxs)("div", {
      className: z.__invalid_headerDetails,
      children: [(0, l.jsx)(d.Text, {
        className: o()(z.textContent),
        variant: "text-md/semibold",
        children: n
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        className: z.textContent,
        variant: "text-sm/normal",
        children: i
      })]
    }), null != s ? s : null]
  })
};
et.Icon = ee;
let en = e => {
  let {
    children: t,
    className: n,
    ...i
  } = e;
  return (0, l.jsx)(d.FocusRing, {
    children: (0, l.jsx)(j.Z, {
      className: o()(n, z.wrapper),
      padded: !0,
      ...i,
      children: t
    })
  })
};
en.Header = et, en.Body = e => {
  let {
    children: t
  } = e;
  return (0, l.jsx)(j.Z, {
    inset: !0,
    padded: !1,
    className: z.body,
    children: t
  })
}, en.Separator = e => {
  let {
    inset: t,
    className: n
  } = e;
  return (0, l.jsx)("div", {
    className: o()(z.separator, {
      [z.inset]: t
    }, n)
  })
}, en.VoiceSection = e => {
  var t, n;
  let {
    guild: i,
    channel: s,
    onGuildClick: r,
    partySize: c,
    members: u,
    onChannelContextMenu: E
  } = e, h = a.useRef(null), _ = (0, v.ZP)(s, !0);
  return (0, l.jsx)(J, {
    children: (0, l.jsxs)("div", {
      className: z.voiceSection,
      ref: h,
      onContextMenu: e => E(e, s),
      children: [(0, l.jsx)(d.Clickable, {
        onClick: r,
        "aria-hidden": !0,
        tabIndex: -1,
        children: (0, l.jsxs)("div", {
          className: z.voiceSectionAssets,
          children: [null != i.getIconURL(32) ? (0, l.jsx)("img", {
            alt: "",
            src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
            className: o()(z.voiceSectionGuildImage, z.largeImageMask)
          }) : (0, l.jsx)("div", {
            className: z.voiceSectionNoGuildImageWrapper,
            children: (0, l.jsx)("div", {
              className: z.voiceSectionNoGuildImage,
              style: {
                fontSize: null !== (n = K[i.acronym.length]) && void 0 !== n ? n : K[K.length - 1]
              },
              children: i.acronym
            })
          }), (0, l.jsx)("div", {
            className: z.voiceSectionIconWrapper,
            children: (0, l.jsx)(d.VoiceNormalIcon, {
              size: "md",
              color: "currentColor",
              className: z.voiceSectionIcon
            })
          })]
        })
      }), (0, l.jsx)(d.Clickable, {
        onClick: r,
        focusProps: {
          ringTarget: h
        },
        children: (0, l.jsxs)("div", {
          className: z.voiceSectionDetails,
          children: [q(i.toString(), z.voiceSectionText), Q(_, z.voiceSectionText)]
        })
      }), (0, l.jsx)(V.Z, {
        partySize: c,
        members: u,
        guildId: i.id
      })]
    })
  })
}, en.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: i,
    members: s
  } = e;
  return (0, l.jsx)(J, {
    children: (0, l.jsxs)("div", {
      className: z.gameSection,
      children: [null != t ? (0, l.jsx)("img", {
        alt: "",
        src: t,
        className: z.gameSectionIcon
      }) : null, (0, l.jsxs)("div", {
        children: [q(n), Q(Y.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
          memberCount: i.totalSize
        }))]
      }), (0, l.jsx)(V.Z, {
        partySize: i,
        members: s
      })]
    })
  })
}, en.RichPresenceSection = $, en.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, l.jsx)(J, {
    children: (0, l.jsxs)("div", {
      className: z.xboxSection,
      children: [(0, l.jsx)(G.Z, {
        className: z.xboxSectionIcon
      }), (0, l.jsxs)("div", {
        className: z.__invalid_xboxSectionDetails,
        children: [q(t), Q(Y.Z.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)]
      })]
    })
  })
}, en.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: i,
      state: s,
      application_id: a
    },
    partySize: r,
    members: c,
    isSolo: d,
    getAssetImage: E
  } = e;
  return (0, l.jsx)(J, {
    children: (0, l.jsxs)("div", {
      className: z.spotifySection,
      children: [null != n ? (0, l.jsxs)("div", {
        className: z.activitySectionAssets,
        children: [(0, l.jsx)("img", {
          alt: null !== (t = n.large_text) && void 0 !== t ? t : "",
          src: E(a, n.large_image, [W.LARGE, W.LARGE]),
          className: o()(z.largeImage, z.borderRadius0, {
            [z.largeImageMask]: null != n.small_image
          })
        }), d ? null : (0, l.jsx)(U.Z, {
          className: z.smallImage,
          color: u.Z.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, l.jsx)("div", {}), (0, l.jsxs)("div", {
        children: [null != i ? q(i) : null, null != s ? Q(s) : null]
      }), (0, l.jsx)(V.Z, {
        minAvatarsShown: d ? 2 : 1,
        partySize: r,
        members: c
      })]
    })
  })
}, en.TwitchSection = e => {
  let t, {
      activity: i,
      user: s,
      getAssetImage: a,
      guildId: r
    } = e,
    {
      name: c,
      details: u,
      assets: E,
      application_id: h
    } = i;
  if (null != E && (0, T.Z)(i)) {
    var I;
    t = (0, l.jsx)(D.Z, {
      className: z.twitchSectionPreviewWrapper,
      aspectRatio: 16 / 9,
      children: (0, l.jsxs)(d.Clickable, {
        href: (0, m.Z)(i),
        tag: "a",
        target: "_blank",
        children: [(0, l.jsx)("img", {
          alt: null !== (I = E.large_text) && void 0 !== I ? I : "",
          src: a(h, E.large_image, [900, 500]),
          className: z.twitchSectionPreview
        }), (0, l.jsx)("img", {
          src: n(497726),
          className: z.twitchSectionPlayButton,
          alt: ""
        })]
      })
    })
  }
  return (0, l.jsxs)(J, {
    children: [(0, l.jsxs)("div", {
      className: o()({
        [z.twitchSectionSimple]: null == s,
        [z.twitchSectionFull]: null != s
      }),
      children: [(0, l.jsx)("img", {
        alt: "",
        src: _.Z.get(F.ABu.TWITCH).icon.lightSVG,
        className: z.twitchSectionIcon
      }), (0, l.jsxs)("div", {
        children: [q(c), null != u ? Q(u) : null]
      }), null != s ? (0, l.jsx)(d.Avatar, {
        src: s.getAvatarURL(r, 24),
        "aria-label": s.username,
        className: z.twitchSectionAvatar,
        size: d.AvatarSizes.SIZE_24
      }) : null]
    }), t]
  })
}, en.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: i,
    user: s,
    applicationStream: a,
    onPreviewClick: r,
    guildId: o
  } = e, u = (0, c.e7)([M.Z], () => M.Z.getChannel(a.channelId)), [E, h] = (0, L.wq)(u), _ = (0, l.jsxs)(d.Clickable, {
    onClick: E ? r : void 0,
    className: z.applicationStreamingPreviewWrapper,
    children: [(0, l.jsx)(O.Z, {
      stream: a,
      className: z.applicationStreamingPreviewSize
    }), (0, l.jsx)("div", {
      className: z.applicationStreamingHoverWrapper,
      children: (0, l.jsx)("div", {
        className: z.applicationStreamingHoverText,
        children: (0, L.P9)(h)
      })
    })]
  }), I = null !== (n = null === (t = (0, C.Z)(i, a)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : Y.Z.Messages.SHARING_SCREEN;
  return (0, l.jsxs)(J, {
    children: [(0, l.jsxs)("div", {
      className: z.applicationStreamingSection,
      children: [(0, l.jsx)(d.Avatar, {
        size: d.AvatarSizes.SIZE_32,
        src: s.getAvatarURL(o, 32),
        "aria-label": s.username,
        className: z.applicationStreamingAvatar
      }), (0, l.jsxs)("div", {
        children: [q(H.ZP.getName(s)), Q(I)]
      }), (0, l.jsx)(w.ZP, {
        size: w.ZP.Sizes.SMALL
      })]
    }), _]
  })
}, en.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: i,
    participants: s
  } = e, r = (0, S.Z)(), [o, u] = a.useState(null), E = t.application_id;
  a.useEffect(() => {
    if (null != E)(0, k.fetchAssetIds)(E, ["embedded_background"]).then(e => {
      let [t] = e;
      return u(t)
    })
  }, [E]);
  let _ = (0, c.Wu)([P.default, x.default], () => Array.from(s).map(e => x.default.getId() === e ? null : P.default.getUser(e)).filter(B.lm)),
    m = (0, h.O)(),
    {
      analyticsLocations: g
    } = (0, f.ZP)();
  if (null == E) return null;
  let p = Z.Z.getApplication(E);
  if (null == p) return null;
  let N = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : void 0,
    T = (0, k.getAssetImage)(p.id, o, 300);
  return (0, l.jsxs)(J, {
    children: [(0, l.jsxs)("div", {
      className: z.embeddedActivityTopRow,
      children: [(0, l.jsx)(b.Z, {
        game: p,
        size: b.Z.Sizes.XSMALL,
        className: z.embeddedActivityIcon
      }), (0, l.jsx)("div", {
        className: z.embeddedActivityName,
        children: (0, l.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: p.name
        })
      }), null != N ? (0, l.jsx)("div", {
        className: z.embeddedActivityTimeElapsed,
        children: (0, l.jsx)(d.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, l.jsx)(X, {
            timestamps: N
          })
        })
      }) : null]
    }), (0, l.jsxs)("div", {
      className: z.embeddedActivityPlayerContainer,
      children: [null != T ? (0, l.jsx)("img", {
        src: T,
        alt: p.name,
        className: z.embeddedActivityImage
      }) : null, (0, l.jsxs)("div", {
        className: z.embeddedActivityImageOverlay,
        children: [(0, l.jsx)(R.OV, {
          users: _,
          guildId: i,
          channelId: n.id
        }), (0, l.jsx)("div", {
          className: z.embeddedActivityJoinWrapper,
          children: (0, l.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            onClick: e => {
              e.stopPropagation(), (0, I.Z)({
                applicationId: E,
                currentEmbeddedApplication: r,
                activityChannelId: n.id,
                locationObject: m.location,
                embeddedActivitiesManager: A.Z,
                analyticsLocations: g
              })
            },
            children: Y.Z.Messages.JOIN
          })
        })]
      })]
    })]
  })
}, t.Z = en
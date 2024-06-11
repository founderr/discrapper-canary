"use strict";
n.r(t), n.d(t, {
  Types: function() {
    return i
  }
}), n("789020"), n("47120");
var i, r, s, a = n("735250"),
  o = n("470079"),
  l = n("120356"),
  u = n.n(l),
  d = n("512722"),
  _ = n.n(d),
  c = n("780384"),
  E = n("481060"),
  I = n("438139"),
  T = n("410030"),
  f = n("726542"),
  S = n("740265"),
  h = n("122810"),
  A = n("833664"),
  m = n("503438"),
  N = n("802856"),
  p = n("420660"),
  O = n("833858"),
  C = n("223135"),
  R = n("769654"),
  g = n("750154"),
  L = n("768581"),
  v = n("630388"),
  D = n("153066"),
  M = n("672938"),
  y = n("285952"),
  P = n("366695"),
  U = n("346656"),
  b = n("514342"),
  G = n("366966"),
  w = n("936195"),
  k = n("692437"),
  B = n("632184"),
  x = n("806519"),
  V = n("981631"),
  F = n("701488"),
  H = n("689938"),
  Y = n("217833");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).USER_POPOUT = "UserPopout", s.USER_POPOUT_V2 = "UserPopoutV2", s.ACTIVITY_FEED = "ActivityFeed", s.PROFILE = "Profile", s.PROFILE_V2 = "ProfileV2", s.STREAM_PREVIEW = "StreamPreview", s.VOICE_CHANNEL = "VoiceChannel", s.SIMPLIFIED_PROFILE = "SimplifiedProfile", s.BITE_SIZE_POPOUT = "BiteSizePopout";
let W = {
    StreamPreview: [108, 60],
    UserPopout: [108, 60],
    UserPopoutV2: [108, 60],
    BiteSizePopout: [108, 60],
    VoiceChannel: [108, 60],
    Profile: [162, 90],
    ProfileV2: [162, 90],
    SimplifiedProfile: [162, 90],
    ActivityFeed: [900, 500]
  },
  {
    getAssetImage: K
  } = n("81063"),
  z = (0, I.default)(class extends o.PureComponent {
    render() {
      return (0, a.jsx)("div", {
        className: Y.timestamp,
        children: this.props.message
      })
    }
  });

function Z(e) {
  let {
    activity: t
  } = e, n = null;
  return (0, m.default)(t) && (n = V.PlatformTypes.SPOTIFY), null != t.platform && [V.ActivityGamePlatforms.PS4, V.ActivityGamePlatforms.PS5].includes(t.platform) && (n = V.PlatformTypes.PLAYSTATION), n
}

function Q(e) {
  let {
    activity: t
  } = e, n = (0, T.default)(), i = Z({
    activity: t
  });
  if (null == i) return null;
  let r = f.default.get(i);
  return (0, a.jsx)("img", {
    alt: "",
    src: (0, c.isThemeLight)(n) ? r.icon.lightSVG : r.icon.darkSVG,
    className: Y.platformIcon
  })
}
class X extends(r = o.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? void 0 : e.type) !== V.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== V.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== V.ActivityTypes.LISTENING && (null == e ? void 0 : e.type) !== V.ActivityTypes.HANG_STATUS ? {
      type: V.ActivityTypes.PLAYING,
      name: H.default.Messages.SHARING_SCREEN
    } : e
  }
  getTypeClass(e, t) {
    return (0, D.getClass)(Y, e, this.props.type, t)
  }
  isStreamerOnTypeProfile() {
    return (0, p.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, p.default)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t;
    let {
      hideHeader: n,
      activityGuild: i,
      showChannelDetails: r,
      renderHeaderAccessory: s,
      type: o
    } = this.props, l = this.activity;
    if (n || null == l) return null;
    let {
      name: d
    } = l;
    switch (l.type) {
      case V.ActivityTypes.STREAMING:
        t = H.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
          platform: [V.PlatformTypes.TWITCH, V.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : f.default.get(V.PlatformTypes.TWITCH).name
        });
        break;
      case V.ActivityTypes.LISTENING:
        t = H.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
          name: d
        });
        break;
      case V.ActivityTypes.WATCHING:
        t = H.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
          name: d
        });
        break;
      case V.ActivityTypes.PLAYING:
        t = (0, S.default)(l);
        break;
      case V.ActivityTypes.COMPETING:
        t = H.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
          name: d
        })
    }
    if (null != i) {
      var _;
      t = (0, v.hasFlag)(null !== (_ = null == l ? void 0 : l.flags) && void 0 !== _ ? _ : 0, V.ActivityFlags.EMBEDDED) ? l.type === V.ActivityTypes.WATCHING ? H.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
        guildName: i.name
      }) : H.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
        guildName: i.name
      }) : H.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
        server: i.name
      })
    }
    return (null == l ? void 0 : l.type) === V.ActivityTypes.HANG_STATUS && (t = H.default.Messages.STATUS_LEAD_IN_JUST), (0, a.jsxs)("div", {
      className: Y.headerContainer,
      children: [(0, a.jsx)(E.Heading, {
        className: u()((0, D.getClass)(Y, "headerText", e ? "EmptyBody" : "Normal")),
        variant: r ? "text-xs/semibold" : "eyebrow",
        color: "ProfileV2" === o ? "header-primary" : void 0,
        children: (0, a.jsx)(b.default, {
          children: t
        })
      }), null == s ? void 0 : s()]
    })
  }
  renderXboxImage() {
    return (0, a.jsx)("div", {
      className: Y.assets,
      children: (0, a.jsx)("img", {
        alt: "",
        src: f.default.get(V.PlatformTypes.XBOX).icon.customPNG,
        className: u()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, i;
    let r, s;
    if (e.type === V.ActivityTypes.HANG_STATUS) return (0, a.jsx)("div", {
      className: Y.assets,
      children: (0, a.jsx)(C.default, {
        hangStatusActivity: e,
        className: u()(Y.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: l
    } = this.props, {
      assets: d,
      application_id: _
    } = e;
    if (null == d || null == d.large_image && null == d.small_image) return null;
    (0, p.default)(e) && (r = W[l]);
    let c = (0, m.default)(e),
      I = null != d.large_image ? (0, a.jsx)("img", {
        alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
        src: K(_, d.large_image, null != r ? r : [F.ImageSizes.LARGE, F.ImageSizes.LARGE]),
        className: u()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? V.PlatformTypes.TWITCH : ""), {
          [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != d.small_image
        }, {
          [Y.assetsLargeImageSpotify]: c
        })
      }) : null;
    if (c) I = (0, a.jsx)(E.Anchor, {
      onClick: this.handleOpenSpotifyAlbum,
      children: I
    });
    else if ((0, g.isStageActivity)(e)) {
      let t = (0, g.unpackStageChannelParty)(e);
      if (null == t) return null;
      I = (0, a.jsx)(x.default, {
        mask: x.default.Masks.SQUIRCLE,
        width: F.ImageSizes.SMALL,
        height: F.ImageSizes.SMALL,
        children: (0, a.jsx)("img", {
          src: null !== (i = L.default.getGuildIconURL({
            id: t.guildId,
            icon: d.small_image,
            size: F.ImageSizes.SMALL
          })) && void 0 !== i ? i : void 0,
          className: Y.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (I = (0, a.jsxs)("div", {
      className: Y.twitchImageContainer,
      children: [(0, a.jsxs)("div", {
        className: Y.twitchImageOverlay,
        children: [(0, a.jsx)(E.H, {
          className: Y.streamName,
          children: e.name
        }), (0, a.jsx)("div", {
          className: Y.streamGame,
          children: H.default.Messages.STREAMER_PLAYING.format({
            game: e.details
          })
        })]
      }), (0, a.jsx)(E.Anchor, {
        className: Y.twitchBackgroundImage,
        href: e.url,
        children: I
      })]
    })), !(0, g.isStageActivity)(e) && null != d.small_image && (s = (0, a.jsx)(E.Tooltip, {
      text: "" !== d.small_text ? d.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, a.jsx)("img", {
          alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
          src: K(_, d.small_image, [F.ImageSizes.SMALL, F.ImageSizes.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == I ? "WithoutLargeImage" : void 0),
          ...e
        })
      }
    })), null == I) ? (0, a.jsx)("div", {
      className: Y.assets,
      children: s
    }) : (0, a.jsxs)("div", {
      className: Y.assets,
      children: [(0, a.jsx)(E.Tooltip, {
        text: null != d.large_text ? d.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != I ? o.cloneElement(I, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), s]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: i,
      activityGuild: r
    } = this.props;
    return null != e.assets || (0, h.default)(e) || e.type !== V.ActivityTypes.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != r ? (0, a.jsx)("div", {
      className: u()(Y.gameIcon, Y.screenshareIcon)
    }) : (0, a.jsx)(P.default, {
      className: Y.gameIcon,
      game: i
    })
  }
  renderName(e) {
    let {
      user: t,
      application: n,
      hideName: i
    } = this.props;
    if (i) return null;
    let {
      details: r,
      type: s
    } = e;
    if (s === V.ActivityTypes.CUSTOM_STATUS) return null;
    let o = (0, A.default)(e),
      l = e.name,
      d = l;
    if (s === V.ActivityTypes.HANG_STATUS ? d = (0, O.getHangStatusText)(e) : o && null != n ? d = (0, a.jsx)("span", {
        className: Y.activityName,
        children: d
      }) : !o && (l = r, d = r, (0, m.default)(e) && null != e.sync_id && null != r ? d = (0, a.jsx)(E.Anchor, {
        className: Y.bodyLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r
      }) : (0, g.isStageActivity)(e) && (d = e.name)), null == d) return null;
    let _ = null != Z({
      activity: e
    }) && "BiteSizePopout" === this.props.type;
    return (0, a.jsx)(E.Text, {
      title: l,
      variant: "text-sm/semibold",
      className: u()((0, D.getClass)(Y, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"), _ && Y.namePlatformIconMarginBiteSizePopout),
      children: d
    })
  }
  renderDetails(e) {
    let t;
    let {
      details: n,
      state: i
    } = e, {
      activityGuild: r
    } = this.props, s = n, o = n;
    if (e.type === V.ActivityTypes.CUSTOM_STATUS) s = i;
    else if (e.type === V.ActivityTypes.HANG_STATUS) s = null != r ? H.default.Messages.HANG_STATUS_LOCATION.format({
      guildName: r.name
    }) : null, t = null != r ? () => {
      (0, R.transitionToGuild)(r.id)
    } : void 0;
    else if (!(0, A.default)(e)) {
      if (o = s = i, (0, m.default)(e) && null != i) s = H.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: o,
        artistsHook: (t, n) => (0, a.jsx)(w.default, {
          artists: i,
          linkClassName: Y.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n)
      });
      else if ((0, g.isStageActivity)(e)) {
        var l;
        s = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text
      }
    }
    return null == s || 0 === s.length ? null : ((0, p.default)(e) && (s = H.default.Messages.STREAMER_PLAYING.format({
      game: s
    })), null != t) ? (0, a.jsx)(E.Clickable, {
      onClick: t,
      title: null != o ? o : void 0,
      className: Y.clickableDetails,
      children: s
    }) : (0, a.jsx)("div", {
      title: null != o ? o : void 0,
      className: (0, p.default)(e) || (0, m.default)(e) ? Y.detailsWrap : Y.details,
      children: s
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: i
    } = this.props;
    return n && null != t ? null == i ? (0, a.jsx)("div", {
      className: (0, p.default)(e) || (0, m.default)(e) ? Y.detailsWrap : Y.details,
      children: H.default.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
        guildName: t.name
      })
    }) : (0, a.jsxs)("div", {
      className: u()((0, p.default)(e) || (0, m.default)(e) ? Y.detailsWrap : Y.details, Y.guildDetails),
      children: [(0, a.jsx)(U.default, {
        guild: t,
        size: U.default.Sizes.SMOL,
        className: Y.guildIcon
      }), (0, a.jsx)(k.default, {
        width: 12,
        height: 12
      }), (0, a.jsxs)("div", {
        className: Y.voiceChannelInfo,
        children: [(0, a.jsx)(B.default, {
          width: 12,
          height: 12
        }), (0, a.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: null == i ? void 0 : i.name
        })]
      })]
    }) : null
  }
  renderTimePlayed(e) {
    let {
      activityGuild: t
    } = this.props;
    if (!(0, A.default)(e) || (0, m.default)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, h.default)(e) ? (0, a.jsx)(z, {
      timestamps: n
    }) : (0, a.jsx)(G.default, {
      start: n.start,
      location: G.default.Locations.USER_ACTIVITY,
      className: Y.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, m.default)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: i
    } = t;
    return null == n || null == i ? null : (0, a.jsx)(M.default, {
      start: n,
      end: i,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type || "SimplifiedProfile" === this.props.type || "BiteSizePopout" === this.props.type
    })
  }
  renderState(e, t) {
    var n, i;
    let r;
    let {
      state: s,
      party: o,
      assets: l
    } = e, u = s, d = u;
    return (!(0, A.default)(e) && (d = u = null == l ? void 0 : l.large_text, (0, m.default)(e) && null != u && (u = H.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
      album: d,
      albumHook: (t, n) => null != e.sync_id && null != d ? (0, a.jsx)(E.Anchor, {
        className: Y.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: d
      }, n) : d
    }))), null != u && 0 !== u.length && e.type !== V.ActivityTypes.CUSTOM_STATUS || (0, g.isStageActivity)(e)) ? ((null == o ? void 0 : o.size) == null && [(0, F.POKER_NIGHT_APPLICATION_ID)].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? r = H.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: "0",
      max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
    }) : (0, g.isStageActivity)(e) && (null == o ? void 0 : o.size) != null ? r = H.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
      numSpeakers: o.size[0],
      numListeners: o.size[1] - o.size[0]
    }) : (null == o ? void 0 : o.size) != null && o.size.length >= 2 && (r = H.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: o.size[0],
      max: o.size[1]
    })), (0, a.jsxs)("div", {
      className: Y.state,
      children: [(0, a.jsx)("span", {
        title: d,
        children: u
      }), null != r ? (0, a.jsxs)("span", {
        children: [" ", r]
      }) : null]
    })) : null
  }
  render() {
    let e;
    let {
      type: t,
      renderActions: n,
      className: i,
      application: r,
      showReactions: s
    } = this.props, o = this.activity;
    if (null == o || o.type === V.ActivityTypes.CUSTOM_STATUS) return null;
    let l = "UserPopout" === t || "UserPopoutV2" === t || "BiteSizePopout" === t,
      d = "Profile" === t || "ProfileV2" === t || "SimplifiedProfile" === t,
      _ = "ActivityFeed" === t,
      c = "StreamPreview" === t,
      E = !1;
    (0, N.default)(o) ? (e = this.renderXboxImage(), E = !0) : null == (e = this.renderImage(o)) && (E = null != (e = this.renderGameImage(o)));
    let I = this.renderName(o),
      T = this.renderDetails(o),
      f = this.renderState(o, r),
      S = this.renderTimePlayed(o),
      h = this.renderChannelDetails(o),
      A = null != n ? n() : null,
      m = this.renderTimeBar(o),
      p = ![e, I, T, f, S, m, A].some(e => null != e);
    return (0, a.jsxs)("div", {
      className: u()(this.getTypeClass("activity"), i),
      children: [this.renderHeader(p), (0, a.jsx)("div", {
        className: u()(E ? Y.bodyAlignCenter : Y.bodyNormal, s && !l && !c && Y.wrap),
        children: (0, a.jsxs)("div", {
          className: Y.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, a.jsxs)(y.default.Child, {
            className: u()((0, D.getClass)(Y, "content", E ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [I, T, f, S, h, l || c ? null : m, _ ? A : null]
          }), d ? (0, a.jsx)("div", {
            className: Y.actions,
            children: A
          }) : null]
        })
      }), l ? m : null, l || c ? A : null, (0, a.jsx)(Q, {
        activity: o
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      _()(null != e, "Spotify activity was null"), null == t || t(e)
    }), j(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: i
      } = this.props;
      _()(null != t, "Spotify activity was null"), null == n || n(t, i.id, e)
    }), j(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      _()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
j(X, "Types", i), t.default = X
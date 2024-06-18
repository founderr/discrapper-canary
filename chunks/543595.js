"use strict";
n.d(t, {
  Y: function() {
    return i
  }
}), n(789020), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(512722),
  c = n.n(_),
  d = n(780384),
  E = n(481060),
  I = n(438139),
  T = n(410030),
  h = n(726542),
  S = n(740265),
  f = n(122810),
  N = n(833664),
  A = n(503438),
  m = n(802856),
  O = n(420660),
  R = n(774073),
  p = n(833858),
  g = n(223135),
  C = n(769654),
  v = n(750154),
  L = n(768581),
  D = n(630388),
  M = n(153066),
  P = n(672938),
  y = n(285952),
  U = n(366695),
  b = n(346656),
  G = n(514342),
  w = n(366966),
  k = n(936195),
  B = n(806519),
  x = n(981631),
  V = n(701488),
  Z = n(689938),
  H = n(717132);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).USER_POPOUT = "UserPopout", s.USER_POPOUT_V2 = "UserPopoutV2", s.ACTIVITY_FEED = "ActivityFeed", s.PROFILE = "Profile", s.PROFILE_V2 = "ProfileV2", s.STREAM_PREVIEW = "StreamPreview", s.VOICE_CHANNEL = "VoiceChannel", s.SIMPLIFIED_PROFILE = "SimplifiedProfile", s.BITE_SIZE_POPOUT = "BiteSizePopout";
let Y = {
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
    getAssetImage: j
  } = n(81063),
  W = (0, I.Z)(class extends a.PureComponent {
    render() {
      return (0, o.jsx)("div", {
        className: H.timestamp,
        children: this.props.message
      })
    }
  });

function K(e) {
  let {
    activity: t
  } = e, n = null;
  return (0, A.Z)(t) && (n = x.ABu.SPOTIFY), null != t.platform && [x.M7m.PS4, x.M7m.PS5].includes(t.platform) && (n = x.ABu.PLAYSTATION), n
}

function z(e) {
  let {
    activity: t
  } = e, n = (0, T.ZP)(), i = K({
    activity: t
  });
  if (null == i) return null;
  let r = h.Z.get(i);
  return (0, o.jsx)("img", {
    alt: "",
    src: (0, d.ap)(n) ? r.icon.lightSVG : r.icon.darkSVG,
    className: H.platformIcon
  })
}
class q extends(r = a.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? void 0 : e.type) !== x.IIU.PLAYING && (null == e ? void 0 : e.type) !== x.IIU.WATCHING && (null == e ? void 0 : e.type) !== x.IIU.LISTENING && (null == e ? void 0 : e.type) !== x.IIU.HANG_STATUS ? {
      type: x.IIU.PLAYING,
      name: Z.Z.Messages.SHARING_SCREEN
    } : e
  }
  getTypeClass(e, t) {
    return (0, M.l)(H, e, this.props.type, t)
  }
  isStreamerOnTypeProfile() {
    return (0, O.Z)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, O.Z)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t;
    let {
      hideHeader: n,
      activityGuild: i,
      showChannelDetails: r,
      renderHeaderAccessory: s,
      type: a
    } = this.props, l = this.activity;
    if (n || null == l) return null;
    let {
      name: _
    } = l;
    switch (l.type) {
      case x.IIU.STREAMING:
        t = Z.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
          platform: [x.ABu.TWITCH, x.ABu.YOUTUBE].includes(_.toLowerCase()) ? _ : h.Z.get(x.ABu.TWITCH).name
        });
        break;
      case x.IIU.LISTENING:
        t = Z.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
          name: _
        });
        break;
      case x.IIU.WATCHING:
        t = Z.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
          name: _
        });
        break;
      case x.IIU.PLAYING:
        t = (0, S.Z)(l);
        break;
      case x.IIU.COMPETING:
        t = Z.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
          name: _
        })
    }
    if (null != i) {
      var c;
      t = (0, D.yE)(null !== (c = null == l ? void 0 : l.flags) && void 0 !== c ? c : 0, x.xjy.EMBEDDED) ? l.type === x.IIU.WATCHING ? Z.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
        guildName: i.name
      }) : Z.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
        guildName: i.name
      }) : Z.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
        server: i.name
      })
    }
    return (null == l ? void 0 : l.type) === x.IIU.HANG_STATUS && (t = Z.Z.Messages.STATUS_LEAD_IN_JUST), (0, o.jsxs)("div", {
      className: H.headerContainer,
      children: [(0, o.jsx)(E.Heading, {
        className: u()((0, M.l)(H, "headerText", e ? "EmptyBody" : "Normal")),
        variant: r ? "text-xs/semibold" : "eyebrow",
        color: "ProfileV2" === a ? "header-primary" : void 0,
        children: (0, o.jsx)(G.Z, {
          children: t
        })
      }), null == s ? void 0 : s()]
    })
  }
  renderXboxImage() {
    return (0, o.jsx)("div", {
      className: H.assets,
      children: (0, o.jsx)("img", {
        alt: "",
        src: h.Z.get(x.ABu.XBOX).icon.customPNG,
        className: u()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, i;
    let r, s;
    if (e.type === x.IIU.HANG_STATUS) return (0, o.jsx)("div", {
      className: H.assets,
      children: (0, o.jsx)(g.Z, {
        hangStatusActivity: e,
        className: u()(H.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: l
    } = this.props, {
      assets: _,
      application_id: c
    } = e;
    if (null == _ || null == _.large_image && null == _.small_image) return null;
    (0, O.Z)(e) && (r = Y[l]);
    let d = (0, A.Z)(e),
      I = null != _.large_image ? (0, o.jsx)("img", {
        alt: null !== (t = _.large_text) && void 0 !== t ? t : "",
        src: j(c, _.large_image, null != r ? r : [V.Si.LARGE, V.Si.LARGE]),
        className: u()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? x.ABu.TWITCH : ""), {
          [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != _.small_image
        }, {
          [H.assetsLargeImageSpotify]: d
        })
      }) : null;
    if (d) I = (0, o.jsx)(E.Anchor, {
      onClick: this.handleOpenSpotifyAlbum,
      children: I
    });
    else if ((0, v.dS)(e)) {
      let t = (0, v.rq)(e);
      if (null == t) return null;
      I = (0, o.jsx)(B.ZP, {
        mask: B.ZP.Masks.SQUIRCLE,
        width: V.Si.SMALL,
        height: V.Si.SMALL,
        children: (0, o.jsx)("img", {
          src: null !== (i = L.ZP.getGuildIconURL({
            id: t.guildId,
            icon: _.small_image,
            size: V.Si.SMALL
          })) && void 0 !== i ? i : void 0,
          className: H.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (I = (0, o.jsxs)("div", {
      className: H.twitchImageContainer,
      children: [(0, o.jsxs)("div", {
        className: H.twitchImageOverlay,
        children: [(0, o.jsx)(E.H, {
          className: H.streamName,
          children: e.name
        }), (0, o.jsx)("div", {
          className: H.streamGame,
          children: Z.Z.Messages.STREAMER_PLAYING.format({
            game: e.details
          })
        })]
      }), (0, o.jsx)(E.Anchor, {
        className: H.twitchBackgroundImage,
        href: e.url,
        children: I
      })]
    })), !(0, v.dS)(e) && null != _.small_image && (s = (0, o.jsx)(E.Tooltip, {
      text: "" !== _.small_text ? _.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, o.jsx)("img", {
          alt: null !== (t = _.small_text) && void 0 !== t ? t : "",
          src: j(c, _.small_image, [V.Si.SMALL, V.Si.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == I ? "WithoutLargeImage" : void 0),
          ...e
        })
      }
    })), null == I) ? (0, o.jsx)("div", {
      className: H.assets,
      children: s
    }) : (0, o.jsxs)("div", {
      className: H.assets,
      children: [(0, o.jsx)(E.Tooltip, {
        text: null != _.large_text ? _.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != I ? a.cloneElement(I, {
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
    return null != e.assets || (0, f.Z)(e) || e.type !== x.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != r ? (0, o.jsx)("div", {
      className: u()(H.gameIcon, H.screenshareIcon)
    }) : (0, o.jsx)(U.Z, {
      className: H.gameIcon,
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
    if (s === x.IIU.CUSTOM_STATUS) return null;
    let a = (0, N.Z)(e),
      l = e.name,
      _ = l;
    if (s === x.IIU.HANG_STATUS ? _ = (0, p.O8)(e) : a && null != n ? _ = (0, o.jsx)("span", {
        className: H.activityName,
        children: _
      }) : !a && (l = r, _ = r, (0, A.Z)(e) && null != e.sync_id && null != r ? _ = (0, o.jsx)(E.Anchor, {
        className: H.bodyLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r
      }) : (0, v.dS)(e) && (_ = e.name)), null == _) return null;
    let c = null != K({
      activity: e
    }) && "BiteSizePopout" === this.props.type;
    return (0, o.jsx)(E.Text, {
      title: l,
      variant: "text-sm/semibold",
      className: u()((0, M.l)(H, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"), c && H.namePlatformIconMarginBiteSizePopout),
      children: _
    })
  }
  renderDetails(e) {
    let t;
    let {
      details: n,
      state: i
    } = e, {
      activityGuild: r
    } = this.props, s = n, a = n;
    if (e.type === x.IIU.CUSTOM_STATUS) s = i;
    else if (e.type === x.IIU.HANG_STATUS) s = null != r ? Z.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: r.name
    }) : null, t = null != r ? () => {
      (0, C.X)(r.id)
    } : void 0;
    else if (!(0, N.Z)(e)) {
      if (a = s = i, (0, A.Z)(e) && null != i) s = Z.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: a,
        artistsHook: (t, n) => (0, o.jsx)(k.Z, {
          artists: i,
          linkClassName: H.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n)
      });
      else if ((0, v.dS)(e)) {
        var l;
        s = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text
      }
    }
    return null == s || 0 === s.length ? null : ((0, O.Z)(e) && (s = Z.Z.Messages.STREAMER_PLAYING.format({
      game: s
    })), null != t) ? (0, o.jsx)(E.Clickable, {
      onClick: t,
      title: null != a ? a : void 0,
      className: H.clickableDetails,
      children: s
    }) : (0, o.jsx)("div", {
      title: null != a ? a : void 0,
      className: (0, O.Z)(e) || (0, A.Z)(e) ? H.detailsWrap : H.details,
      children: s
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: i
    } = this.props;
    return n && null != t ? null == i ? (0, o.jsx)("div", {
      className: (0, O.Z)(e) || (0, A.Z)(e) ? H.detailsWrap : H.details,
      children: Z.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
        guildName: t.name
      })
    }) : (0, o.jsxs)("div", {
      className: u()((0, O.Z)(e) || (0, A.Z)(e) ? H.detailsWrap : H.details, H.guildDetails),
      children: [(0, o.jsx)(b.Z, {
        guild: t,
        size: b.Z.Sizes.SMOL,
        className: H.guildIcon
      }), (0, o.jsx)(E.ChevronSmallRightIcon, {
        size: "xxs",
        color: "currentColor"
      }), (0, o.jsxs)("div", {
        className: H.voiceChannelInfo,
        children: [(0, o.jsx)(E.VoiceNormalIcon, {
          size: "xxs",
          color: "currentColor"
        }), (0, o.jsx)(E.Text, {
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
    if (!(0, N.Z)(e) || (0, A.Z)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, f.Z)(e) ? (0, o.jsx)(W, {
      timestamps: n
    }) : (0, o.jsx)(w.ZP, {
      start: n.start,
      location: w.ZP.Locations.USER_ACTIVITY,
      className: H.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, A.Z)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: i
    } = t;
    return null == n || null == i ? null : (0, o.jsx)(P.Z, {
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
      party: a,
      assets: l
    } = e, u = s, _ = u;
    return (!(0, N.Z)(e) && (_ = u = null == l ? void 0 : l.large_text, (0, A.Z)(e) && null != u && (u = Z.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
      album: _,
      albumHook: (t, n) => null != e.sync_id && null != _ ? (0, o.jsx)(E.Anchor, {
        className: H.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: _
      }, n) : _
    }))), null != u && 0 !== u.length && e.type !== x.IIU.CUSTOM_STATUS || (0, v.dS)(e)) ? ((null == a ? void 0 : a.size) == null && [V.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? r = Z.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: "0",
      max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
    }) : (0, v.dS)(e) && (null == a ? void 0 : a.size) != null ? r = Z.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
      numSpeakers: a.size[0],
      numListeners: a.size[1] - a.size[0]
    }) : (null == a ? void 0 : a.size) != null && a.size.length >= 2 && (r = Z.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: a.size[0],
      max: a.size[1]
    })), (0, o.jsxs)("div", {
      className: H.state,
      children: [(0, o.jsx)("span", {
        title: _,
        children: u
      }), null != r ? (0, o.jsxs)("span", {
        children: [" ", r]
      }) : null]
    })) : null
  }
  render() {
    let e;
    let {
      type: t,
      renderActions: i,
      className: r,
      application: s,
      showReactions: a,
      onOpenGameProfile: l,
      shouldOpenGameProfile: _
    } = this.props, c = this.activity;
    if (null == c || c.type === x.IIU.CUSTOM_STATUS) return null;
    let d = "UserPopout" === t || "UserPopoutV2" === t || "BiteSizePopout" === t,
      I = "Profile" === t || "ProfileV2" === t || "SimplifiedProfile" === t,
      T = "ActivityFeed" === t,
      h = "StreamPreview" === t,
      S = !1;
    (0, m.Z)(c) ? (e = this.renderXboxImage(), S = !0) : null == (e = this.renderImage(c)) && (S = null != (e = this.renderGameImage(c)));
    let f = this.renderName(c),
      N = this.renderDetails(c),
      A = this.renderState(c, s),
      O = this.renderTimePlayed(c),
      R = this.renderChannelDetails(c),
      p = null != i ? i() : null,
      g = this.renderTimeBar(c),
      C = ![e, f, N, A, O, g, p].some(e => null != e);
    return (0, o.jsxs)("div", {
      className: u()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(C), (0, o.jsx)("div", {
        className: u()(S ? H.bodyAlignCenter : H.bodyNormal, a && !d && !h && H.wrap),
        children: (0, o.jsxs)("div", {
          className: H.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, o.jsxs)(y.Z.Child, {
            className: u()((0, M.l)(H, "content", S ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [(0, o.jsxs)(E.Clickable, {
              className: u()(_ && H.openGameProfile),
              onClick: _ ? () => {
                (0, E.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("99387"), n.e("30676"), n.e("94920"), n.e("7613"), n.e("65795")]).then(n.bind(n, 644941));
                  return t => {
                    var n;
                    return (0, o.jsx)(e, {
                      applicationId: null !== (n = null == c ? void 0 : c.application_id) && void 0 !== n ? n : "",
                      ...t
                    })
                  }
                }), null == l || l()
              } : void 0,
              children: [f, N, A, O]
            }), R, d || h ? null : g, T ? p : null]
          }), I ? (0, o.jsx)("div", {
            className: H.actions,
            children: p
          }) : null]
        })
      }), d ? g : null, d || h ? p : null, (0, o.jsx)(z, {
        activity: c
      })]
    })
  }
  constructor(...e) {
    super(...e), F(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      c()(null != e, "Spotify activity was null"), null == t || t(e)
    }), F(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: i
      } = this.props;
      c()(null != t, "Spotify activity was null"), null == n || n(t, i.id, e)
    }), F(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      c()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
F(q, "Types", i);
let X = e => {
  var t;
  let n = (0, R.Z)({
    location: "UserActivity",
    applicationId: null === (t = e.application) || void 0 === t ? void 0 : t.id
  });
  return (0, o.jsx)(q, {
    ...e,
    shouldOpenGameProfile: n
  })
};
X.Types = i, t.Z = X
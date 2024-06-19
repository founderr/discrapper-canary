n(47120);
var s, i = n(735250),
  l = n(470079),
  a = n(442837),
  r = n(481060),
  o = n(278323),
  c = n(224706),
  u = n(763472),
  d = n(498179),
  E = n(276852),
  _ = n(994339),
  I = n(275920),
  T = n(431583),
  N = n(592745),
  m = n(952164),
  h = n(768419),
  C = n(456432),
  S = n(103575),
  A = n(789407),
  p = n(598077),
  g = n(757266),
  f = n(831506),
  O = n(271383),
  R = n(283595),
  M = n(293273),
  x = n(594174),
  v = n(181106),
  L = n(417363),
  Z = n(243769),
  P = n(768581),
  D = n(358085),
  j = n(804739),
  U = n(410575),
  b = n(981631),
  y = n(701488);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let k = {
  spotify: "Spotify"
};
class G extends(s = l.PureComponent) {
  getCoverImage() {
    let {
      activity: e,
      connectedApplication: t,
      application: n,
      isPreview: s,
      message: i
    } = this.props;
    if (null != n && (s || null != i && (0, _.Z)(e, i, n.id))) {
      let t = (0, E.Z)(e, n.id);
      if (null != t) return t
    }
    return null == n || n instanceof A.ZP ? null : P.ZP.getApplicationIconURL({
      id: n.id,
      icon: null != t ? t.coverImage : n.coverImage,
      size: y.cc
    })
  }
  handleOpenSpotifyTrack(e) {
    (0, m.aG)(e)
  }
  handleOpenSpotifyArtist(e, t, n) {
    (0, m.d$)(e, t, n)
  }
  handleOpenSpotifyAlbum(e, t) {
    (0, m.Z5)(e, t)
  }
  shouldRenderCustomButton() {
    let {
      isLaunchable: e,
      application: t
    } = this.props;
    return null != t && null != t.primarySkuId && !e && D.isPlatformEmbedded
  }
  render() {
    return (0, i.jsx)(U.Z, {
      section: U.Z.Sections.APPLICATION_EMBED,
      children: this.renderEmbed()
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      sending: !1
    }), B(this, "handleJoin", () => {
      let {
        activity: e,
        analyticsLocations: t,
        userId: n,
        message: s,
        channelId: i
      } = this.props;
      if (null != e && null != n && null != s && null != e.session_id && null != e.application_id) {
        var l;
        c.Z.join({
          userId: n,
          sessionId: e.session_id,
          applicationId: e.application_id,
          channelId: i,
          messageId: s.id
        }), (0, I.Z)({
          type: b.q5t.JOIN,
          source: b.Sbl.MESSAGE_EMBED,
          userId: n,
          applicationId: e.application_id,
          partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id,
          messageId: s.id,
          analyticsLocations: t
        })
      }
    }), B(this, "handleInvite", async () => {
      let {
        activity: e,
        channelId: t
      } = this.props;
      if (null != e && null != t) try {
        this.setState({
          sending: !0
        }), await o.Z.sendActivityInvite({
          type: b.mFx.JOIN,
          channelId: t,
          activity: e,
          location: b.Sbl.MESSAGE_EMBED
        })
      } finally {
        this.setState({
          sending: !1
        })
      }
    }), B(this, "handleSync", () => {
      let {
        activity: e,
        userId: t
      } = this.props;
      null != e && null != t && u.Z_(e, t)
    }), B(this, "handleDownloadApp", () => {
      (0, r.openModal)(e => (0, i.jsx)(T.default, {
        source: "Game Invite",
        ...e
      }))
    }), B(this, "renderUserPopout", (e, t) => {
      let {
        channelId: n,
        guildId: s,
        message: l,
        analyticsLocations: a
      } = this.props;
      return null == n ? null : (0, i.jsx)(S.Z, {
        ...t,
        location: "ActivityInviteEmbed",
        userId: e.id,
        guildId: null != s ? s : void 0,
        channelId: n,
        messageId: null == l ? void 0 : l.id,
        newAnalyticsLocations: a
      })
    }), B(this, "renderSpotifyJoinButton", e => {
      let {
        channelId: t,
        guildId: n
      } = this.props;
      return (0, i.jsx)(C.Z, {
        guildId: null != n ? n : void 0,
        channelId: t,
        source: "Invite Embed",
        ...e
      })
    }), B(this, "renderCustomButton", e => {
      let {
        application: t
      } = this.props;
      return (0, i.jsx)(d.Z, {
        ...e,
        source: b.Sbl.MESSAGE_EMBED,
        application: t
      })
    }), B(this, "renderEmbed", () => {
      let e;
      let {
        activity: t,
        partyId: n,
        myPartyId: s,
        application: l,
        partyMembers: a,
        isPreview: r,
        isLaunching: o,
        isSender: c,
        activityActionType: u,
        className: d,
        channelId: E,
        message: _,
        hideParty: I,
        isSyncable: T,
        isLaunchable: N,
        guildId: m
      } = this.props;
      if (null != l) e = l.name;
      else if (null != n) {
        let [t] = n.split(":");
        e = k[t]
      }
      return (0, i.jsx)(Z.Z, {
        activity: t,
        partyId: n,
        myPartyId: s,
        applicationId: null != l ? l.id : null,
        name: e,
        partyMembers: a,
        className: d,
        coverImage: this.getCoverImage(),
        isPreview: r,
        isGameLaunchable: N,
        isLoading: o || this.state.sending,
        activityActionType: u,
        isInBrowser: !D.isPlatformEmbedded,
        isSyncable: T,
        isSender: c,
        channelId: E,
        guildId: null != m ? m : void 0,
        message: _,
        hideParty: I,
        onJoin: this.handleJoin,
        onInvite: this.handleInvite,
        onSync: this.handleSync,
        onDownloadApp: this.handleDownloadApp,
        onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
        onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
        onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
        renderUserPopout: this.renderUserPopout,
        renderSpotifyJoinButton: this.renderSpotifyJoinButton,
        renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
      })
    })
  }
}
B(G, "defaultProps", {
  isPreview: !1
}), t.Z = a.ZP.connectStores([h.Z, f.Z, M.Z, R.Z, N.Z, L.Z, g.Z, v.Z, x.default, O.ZP], e => {
  let {
    activity: t,
    analyticsLocations: n,
    application: s,
    partyId: i,
    userId: l,
    guildId: a
  } = e, {
    id: r
  } = null != s ? s : {}, o = null != t && null != t.party && t.party.id === i ? f.Z.getParty(t.party.id) : null, c = null != r ? M.Z.getApplicationActivity(r) : M.Z.findActivity(e => e.type === b.IIU.LISTENING), u = !1;
  null != r && (u = v.Z.getState(r, b.mFx.JOIN) === b.OcF.LOADING);
  let d = Array.from(null != o ? o : []).map(e => {
      let t = null != a ? O.ZP.getMember(a, e) : null,
        n = null != t ? t.nick : null,
        s = x.default.getUser(e),
        i = null == s;
      return null == s && (s = new p.Z({
        discriminator: "0005"
      })), {
        user: s,
        unknownUser: i,
        nick: n
      }
    }),
    E = null != t && h.Z.canPlay(t),
    _ = h.Z.getSyncingWith(),
    I = null != _ && null != l && _.userId === l;
  return {
    analyticsLocations: n,
    partyMembers: d,
    connectedApplication: null != r ? g.Z.getApplication(r) : null,
    myPartyId: null != c && null != c.party ? c.party.id : null,
    isLaunching: u,
    isSyncable: E && !I,
    isLaunchable: null != r && (0, j.t)({
      LibraryApplicationStore: R.Z,
      LaunchableGameStore: N.Z,
      DispatchApplicationStore: L.Z,
      ConnectedAppsStore: g.Z,
      applicationId: r
    })
  }
})(G)
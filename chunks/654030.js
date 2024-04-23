"use strict";
n.r(t), n("47120");
var s, l = n("735250"),
  a = n("470079"),
  i = n("442837"),
  r = n("481060"),
  o = n("278323"),
  u = n("224706"),
  d = n("763472"),
  c = n("498179"),
  f = n("276852"),
  E = n("994339"),
  _ = n("275920"),
  m = n("431583"),
  T = n("592745"),
  I = n("952164"),
  p = n("768419"),
  h = n("456432"),
  N = n("103575"),
  S = n("789407"),
  C = n("598077"),
  A = n("757266"),
  g = n("831506"),
  M = n("271383"),
  R = n("283595"),
  v = n("293273"),
  O = n("594174"),
  x = n("181106"),
  L = n("417363"),
  D = n("243769"),
  P = n("768581"),
  y = n("358085"),
  U = n("804739"),
  j = n("410575"),
  b = n("981631"),
  B = n("701488");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let F = {
  spotify: "Spotify"
};
class k extends(s = a.PureComponent) {
  getCoverImage() {
    let {
      activity: e,
      connectedApplication: t,
      application: n,
      isPreview: s,
      message: l
    } = this.props;
    if (null != n && (s || null != l && (0, E.default)(e, l, n.id))) {
      let t = (0, f.default)(e, n.id);
      if (null != t) return t
    }
    return null == n || n instanceof S.default ? null : P.default.getApplicationIconURL({
      id: n.id,
      icon: null != t ? t.coverImage : n.coverImage,
      size: B.ACTIVITY_INVITE_COVER_IMAGE_SIZE
    })
  }
  handleOpenSpotifyTrack(e) {
    (0, I.openTrack)(e)
  }
  handleOpenSpotifyArtist(e, t, n) {
    (0, I.openArtist)(e, t, n)
  }
  handleOpenSpotifyAlbum(e, t) {
    (0, I.openAlbum)(e, t)
  }
  shouldRenderCustomButton() {
    let {
      isLaunchable: e,
      application: t
    } = this.props;
    return null != t && null != t.primarySkuId && !e && y.isPlatformEmbedded
  }
  render() {
    return (0, l.jsx)(j.default, {
      section: j.default.Sections.APPLICATION_EMBED,
      children: this.renderEmbed()
    })
  }
  constructor(...e) {
    super(...e), G(this, "state", {
      sending: !1
    }), G(this, "handleJoin", () => {
      let {
        activity: e,
        analyticsLocations: t,
        userId: n,
        message: s,
        channelId: l
      } = this.props;
      if (null != e && null != n && null != s && null != e.session_id && null != e.application_id) {
        var a;
        u.default.join({
          userId: n,
          sessionId: e.session_id,
          applicationId: e.application_id,
          channelId: l,
          messageId: s.id
        }), (0, _.default)({
          type: b.AnalyticsGameOpenTypes.JOIN,
          source: b.AnalyticsLocations.MESSAGE_EMBED,
          userId: n,
          applicationId: e.application_id,
          partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
          messageId: s.id,
          analyticsLocations: t
        })
      }
    }), G(this, "handleInvite", async () => {
      let {
        activity: e,
        channelId: t
      } = this.props;
      if (null != e && null != t) try {
        this.setState({
          sending: !0
        }), await o.default.sendActivityInvite({
          type: b.ActivityActionTypes.JOIN,
          channelId: t,
          activity: e,
          location: b.AnalyticsLocations.MESSAGE_EMBED
        })
      } finally {
        this.setState({
          sending: !1
        })
      }
    }), G(this, "handleSync", () => {
      let {
        activity: e,
        userId: t
      } = this.props;
      null != e && null != t && d.sync(e, t)
    }), G(this, "handleDownloadApp", () => {
      (0, r.openModal)(e => (0, l.jsx)(m.default, {
        source: "Game Invite",
        ...e
      }))
    }), G(this, "renderUserPopout", (e, t) => {
      let {
        channelId: n,
        guildId: s,
        message: a,
        analyticsLocations: i
      } = this.props;
      return null == n ? null : (0, l.jsx)(N.default, {
        ...t,
        location: "ActivityInviteEmbed",
        userId: e.id,
        guildId: null != s ? s : void 0,
        channelId: n,
        messageId: null == a ? void 0 : a.id,
        newAnalyticsLocations: i
      })
    }), G(this, "renderSpotifyJoinButton", e => {
      let {
        channelId: t,
        guildId: n
      } = this.props;
      return (0, l.jsx)(h.default, {
        guildId: null != n ? n : void 0,
        channelId: t,
        source: "Invite Embed",
        ...e
      })
    }), G(this, "renderCustomButton", e => {
      let {
        application: t
      } = this.props;
      return (0, l.jsx)(c.default, {
        ...e,
        source: b.AnalyticsLocations.MESSAGE_EMBED,
        application: t
      })
    }), G(this, "renderEmbed", () => {
      let e;
      let {
        activity: t,
        partyId: n,
        myPartyId: s,
        application: a,
        partyMembers: i,
        isPreview: r,
        isLaunching: o,
        isSender: u,
        activityActionType: d,
        className: c,
        channelId: f,
        message: E,
        hideParty: _,
        isSyncable: m,
        isLaunchable: T,
        guildId: I
      } = this.props;
      if (null != a) e = a.name;
      else if (null != n) {
        let [t] = n.split(":");
        e = F[t]
      }
      return (0, l.jsx)(D.default, {
        activity: t,
        partyId: n,
        myPartyId: s,
        applicationId: null != a ? a.id : null,
        name: e,
        partyMembers: i,
        className: c,
        coverImage: this.getCoverImage(),
        isPreview: r,
        isGameLaunchable: T,
        isLoading: o || this.state.sending,
        activityActionType: d,
        isInBrowser: !y.isPlatformEmbedded,
        isSyncable: m,
        isSender: u,
        channelId: f,
        guildId: null != I ? I : void 0,
        message: E,
        hideParty: _,
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
G(k, "defaultProps", {
  isPreview: !1
}), t.default = i.default.connectStores([p.default, g.default, v.default, R.default, T.default, L.default, A.default, x.default, O.default, M.default], e => {
  let {
    activity: t,
    analyticsLocations: n,
    application: s,
    partyId: l,
    userId: a,
    guildId: i
  } = e, {
    id: r
  } = null != s ? s : {}, o = null != t && null != t.party && t.party.id === l ? g.default.getParty(t.party.id) : null, u = null != r ? v.default.getApplicationActivity(r) : v.default.findActivity(e => e.type === b.ActivityTypes.LISTENING), d = !1;
  null != r && (d = x.default.getState(r, b.ActivityActionTypes.JOIN) === b.ActivityActionStates.LOADING);
  let c = Array.from(null != o ? o : []).map(e => {
      let t = null != i ? M.default.getMember(i, e) : null,
        n = null != t ? t.nick : null,
        s = O.default.getUser(e),
        l = null == s;
      return null == s && (s = new C.default({
        discriminator: "0005"
      })), {
        user: s,
        unknownUser: l,
        nick: n
      }
    }),
    f = null != t && p.default.canPlay(t),
    E = p.default.getSyncingWith(),
    _ = null != E && null != a && E.userId === a;
  return {
    analyticsLocations: n,
    partyMembers: c,
    connectedApplication: null != r ? A.default.getApplication(r) : null,
    myPartyId: null != u && null != u.party ? u.party.id : null,
    isLaunching: d,
    isSyncable: f && !_,
    isLaunchable: null != r && (0, U.isLaunchable)({
      LibraryApplicationStore: R.default,
      LaunchableGameStore: T.default,
      DispatchApplicationStore: L.default,
      ConnectedAppsStore: A.default,
      applicationId: r
    })
  }
})(k)
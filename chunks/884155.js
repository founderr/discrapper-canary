"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("862337"),
  u = n("899633"),
  d = n("191225"),
  c = n("299285"),
  f = n("442939"),
  h = n("699209"),
  p = n("32346"),
  m = n("835040"),
  E = n("373469"),
  C = n("271938"),
  S = n("26989"),
  g = n("42887"),
  _ = n("957255"),
  I = n("824563"),
  T = n("101125"),
  v = n("235660"),
  x = n("280168"),
  N = n("800762"),
  A = n("68148"),
  M = n("158998"),
  R = n("774539"),
  j = n("201380"),
  L = n("49111"),
  O = n("39141"),
  y = n("707155");
let b = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: _
  } = e, A = s.id, y = (0, r.useStateFromStores)([C.default], () => C.default.getId() === A, [A]), [b, P, D] = (0, r.useStateFromStoresArray)([g.default], () => y ? [!g.default.isSupported() || g.default.isSelfMute() || g.default.isSelfMutedTemporarily(), g.default.isSelfDeaf(), !1] : [!g.default.isSupported() || g.default.isLocalMute(A), !1, g.default.isLocalVideoDisabled(A)], [y, A]), U = (0, r.useStateFromStores)([x.default], () => x.default.isPrioritySpeaker(A)), w = (0, u.default)({
    userId: A,
    checkSoundSharing: !0
  }), F = (0, r.useStateFromStores)([S.default], () => S.default.isGuestOrLurker(i.guild_id, A)), k = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(A)
  }), [A, i.id]), V = (0, f.default)(null != k ? [k.applicationId] : []), B = (0, R.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), H = (0, r.useStateFromStores)([I.default, T.default], () => y ? T.default.getActivities() : I.default.getActivities(A, i.guild_id)), G = H.find(e => null != e.application_id && e.type === L.ActivityTypes.PLAYING), W = (0, r.useStateFromStores)([c.default], () => (null == G ? void 0 : G.application_id) != null ? c.default.getApplication(null == G ? void 0 : G.application_id) : void 0);
  null != W && R.default.trackExposure({
    location: "voice_users"
  });
  let [Y, z] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.getStreamForUser(A, i.getGuildId()), E.default.getActiveStreamForUser(A, i.getGuildId())], [i, A]), K = (0, r.useStateFromStores)([v.default], () => v.default.getSessionById(o)), Z = M.default.useName(s), X = (0, r.useStateFromStores)([N.default], () => N.default.getVoicePlatformForChannel(i.id, A), [i.id, A]), {
    enableHangStatus: J
  } = h.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), q = (0, r.useStateFromStores)([p.default], () => y ? p.default.getHangStatusActivity() : null, [y]), Q = (0, r.useStateFromStores)([I.default], () => I.default.findActivity(A, e => e.type === L.ActivityTypes.HANG_STATUS), [A]);
  return (0, a.jsx)(m.default, {
    shakeLocation: O.ShakeLocation.VOICE_USER,
    isShaking: w,
    children: (0, a.jsx)(j.default, {
      ...e,
      nick: null != _ ? _ : Z,
      canDrag: e.canDrag && !F,
      otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: X,
      localMute: b && !y,
      localVideoDisabled: D,
      mute: n || b,
      deaf: l || P,
      speaking: w,
      priority: U,
      embeddedApplication: V[0],
      isStreaming: null != Y && Y.channelId === i.id,
      isWatching: null != z && z.state !== L.ApplicationStreamStates.ENDED,
      isGuest: F,
      showHangStatus: J && (C.default.getId() === s.id || null != Q),
      hangStatusActivity: y ? q : Q,
      isSelf: C.default.getId() === s.id,
      application: B ? W : void 0
    })
  })
});
b.displayName = "ConnectedVoiceUser";
class P extends l.Component {
  renderVoiceUsers() {
    let {
      channel: e,
      allowDragging: t,
      voiceStates: n,
      collapsed: l,
      collapsedMax: s = 6,
      tabIndex: i,
      location: r,
      numAudience: o
    } = this.props, {
      previewUserId: u,
      previewIsOpen: d
    } = this.state;
    if (null == n || 0 === n.length) return null;
    let c = l && n.length > s + 1 ? n.slice(0, s) : n,
      f = c.map(n => {
        var s;
        let {
          user: o,
          nick: c,
          voiceState: f
        } = n;
        return (0, a.jsx)(b, {
          user: o,
          nick: c,
          isSelfOnOtherClient: C.default.getId() === o.id && f.sessionId !== C.default.getSessionId(),
          mute: f.isVoiceMuted(),
          deaf: f.isVoiceDeafened(),
          video: f.selfVideo,
          serverMute: f.mute,
          serverDeaf: f.deaf,
          sessionId: null !== (s = f.sessionId) && void 0 !== s ? s : "",
          channel: e,
          collapsed: l,
          canDrag: t && _.default.can(L.Permissions.MOVE_MEMBERS, e),
          showPreview: this.handleShowPreview,
          hidePreview: this.handleHidePreview,
          previewIsOpen: d,
          shouldShowPreview: u === o.id,
          tabIndex: i,
          location: r
        }, o.id)
      });
    return null != o && o > 0 ? f.push((0, a.jsx)(j.AudienceVoiceUser, {
      collapsed: l,
      numAudience: o
    })) : l && n.length > s + 1 && f.push((0, a.jsx)(j.MoreVoiceUser, {
      numUsers: n.length - s
    })), f
  }
  render() {
    let e = this.renderVoiceUsers(),
      {
        collapsed: t,
        className: n,
        children: l,
        withGuildIcon: s
      } = this.props;
    return null == e && null == l ? null : (0, a.jsxs)(A.VoiceUserList, {
      className: i(n, y.list, {
        [y.collapsed]: t,
        [y.withGuildIcon]: s
      }),
      collapsed: t,
      children: [e, l]
    })
  }
  constructor(...e) {
    super(...e), this.showPreview = new o.DelayedCall(50, () => {
      this.setState({
        previewUserId: this.previewUserIdAfterDelay
      }), this.previewUserIdAfterDelay = null
    }), this.hidePreview = new o.DelayedCall(175, () => {
      this.setState({
        previewUserId: null
      })
    }), this.previewUserIdAfterDelay = null, this.state = {
      previewUserId: null,
      previewIsOpen: !1
    }, this.handleShowPreview = e => {
      this.props.allowPreviews && (this.setState({
        previewIsOpen: !0
      }), this.hidePreview.cancel(), this.previewUserIdAfterDelay = e, this.showPreview.delay())
    }, this.handleHidePreview = e => {
      if (!this.props.allowPreviews) return;
      let {
        previewUserId: t
      } = this.state;
      this.showPreview.cancel(), t === e && (this.setState({
        previewIsOpen: !1
      }), this.hidePreview.delay())
    }
  }
}
P.defaultProps = {
  allowPreviews: !0,
  allowDragging: !0
};
var D = P
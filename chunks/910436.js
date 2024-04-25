"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("653041"), a("47120");
var n = a("735250");
a("470079");
var s = a("287734"),
  l = a("872810"),
  i = a("122810"),
  r = a("841784"),
  o = a("503438"),
  u = a("802856"),
  d = a("420660"),
  c = a("23404"),
  f = a("769654"),
  E = a("81063"),
  h = a("761282"),
  _ = a("358924"),
  C = a("868854"),
  m = a("817915"),
  S = a("981631");

function I(e) {
  let {
    party: t,
    onChannelContextMenu: a,
    quest: I
  } = e, p = (0, C.useNowPlayingVisible)(), {
    voiceChannels: T,
    currentActivities: g,
    partiedMembers: A,
    applicationStreams: N,
    guildContext: v
  } = t, R = [], L = e => {
    var t, a;
    let {
      length: s
    } = R;
    if (0 === s) {
      R.push(e);
      return
    }
    let l = R[s - 1],
      i = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (a = null == l ? void 0 : l.key) && void 0 !== a ? a : "").startsWith("game") && i.startsWith("rich-presence");
    R.push((0, n.jsx)(_.default.Separator, {
      inset: r
    }, "sep-".concat(i))), R.push(e)
  };
  for (let {
      activity: e
    }
    of(T.length > 0 && T.forEach(e => {
      let {
        members: t,
        channel: s,
        guild: l
      } = e;
      L((0, n.jsx)(_.default.VoiceSection, {
        guild: l,
        channel: s,
        members: t,
        partySize: function(e, t) {
          let a;
          let n = e.length,
            s = 0;
          if (null != t && null != t.party && null != t.party.size && t.party.size.length >= 2) {
            let n = t.party.size;
            s = Math.max(n[0] - e.length, 0), a = n[1]
          } else a = n + s;
          return {
            knownSize: n,
            unknownSize: s,
            totalSize: a
          }
        }(t),
        onChannelContextMenu: a,
        onGuildClick: () => {
          (0, f.transitionToGuild)(l.id)
        }
      }, "voice-".concat(s.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = h.createBody(e);
      if (null != t) {
        L(t);
        break
      }
    } return N.length > 0 && p && N.forEach(e => {
    let {
      stream: t,
      streamUser: a,
      activity: i
    } = e;
    L((0, n.jsx)(_.default.ApplicationStreamingSection, {
      guildId: null == v ? void 0 : v.id,
      user: a,
      activity: i,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), g.forEach((e, t) => {
    var a, s, l, f, h, C, p, N, R;
    let {
      activity: O,
      game: P,
      playingMembers: M,
      activityUser: x
    } = e;
    if (null == O || null == O.type) return null;
    if (g.length > 1 && O.type === S.ActivityTypes.PLAYING && !(0, i.default)(O) && null != P) L((0, n.jsx)(_.default.GameSection, {
      icon: P.getIconURL(m.ICON_SIZE),
      name: P.name,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      members: M
    }, "game-".concat(null !== (a = O.session_id) && void 0 !== a ? a : t, "-").concat(null !== (s = O.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(O)) {
      let e = new Set(M.map(e => e.id)),
        t = null === (l = T.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && L((0, n.jsx)(_.default.EmbeddedActivitySection, {
        activity: O,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(O.application_id)))
    } else if ((null != O.assets || (0, i.default)(O)) && O.type === S.ActivityTypes.PLAYING) L((0, n.jsx)(_.default.RichPresenceSection, {
      activity: O,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (f = O.session_id) && void 0 !== f ? f : t, "-").concat(x.id)));
    else if ((0, d.default)(O)) {
      let e = T.length > 0 && T[0].members.length > 1,
        a = M.length > 1;
      L((0, n.jsx)(_.default.TwitchSection, {
        guildId: null == v ? void 0 : v.id,
        activity: O,
        user: e || a ? x : null,
        getAssetImage: E.getAssetImage
      }, "streaming-".concat(null !== (h = O.session_id) && void 0 !== h ? h : t)))
    } else(0, o.default)(O) ? L((0, n.jsx)(_.default.SpotifySection, {
      activity: O,
      isSolo: 1 === A.length,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      getAssetImage: E.getAssetImage,
      members: M
    }, "spotify-".concat(null !== (C = O.session_id) && void 0 !== C ? C : t, "-").concat(x.id))) : (null != O.assets || (0, i.default)(O)) && O.type === S.ActivityTypes.LISTENING ? L((0, n.jsx)(_.default.RichPresenceSection, {
      activity: O,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (p = O.session_id) && void 0 !== p ? p : t, "-").concat(x.id))) : (0, u.default)(O) && L((0, n.jsx)(_.default.XboxSection, {
      title: P.name
    }, "xbox-".concat(null !== (N = O.session_id) && void 0 !== N ? N : t)));
    null != I && null != P && P.id === I.config.applicationId && L((0, n.jsx)(c.default, {
      quest: I
    }, "quest-".concat(I.id, "-").concat(null !== (R = O.session_id) && void 0 !== R ? R : t)))
  }), R.length > 0 ? (0, n.jsx)(_.default.Body, {
    children: R
  }) : null
}
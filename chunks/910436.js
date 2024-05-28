"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("653041"), n("47120");
var a = n("735250");
n("470079");
var s = n("287734"),
  l = n("872810"),
  i = n("122810"),
  r = n("841784"),
  o = n("503438"),
  u = n("802856"),
  d = n("420660"),
  c = n("566078"),
  f = n("23404"),
  E = n("769654"),
  C = n("81063"),
  h = n("761282"),
  _ = n("358924"),
  S = n("868854"),
  m = n("817915"),
  p = n("981631");

function I(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: I
  } = e, g = (0, S.useNowPlayingVisible)(), {
    voiceChannels: T,
    currentActivities: A,
    partiedMembers: N,
    applicationStreams: v,
    guildContext: R
  } = t, O = [], L = e => {
    var t, n;
    let {
      length: s
    } = O;
    if (0 === s) {
      O.push(e);
      return
    }
    let l = O[s - 1],
      i = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : "").startsWith("game") && i.startsWith("rich-presence");
    O.push((0, a.jsx)(_.default.Separator, {
      inset: r
    }, "sep-".concat(i))), O.push(e)
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
      L((0, a.jsx)(_.default.VoiceSection, {
        guild: l,
        channel: s,
        members: t,
        partySize: function(e, t) {
          let n;
          let a = e.length,
            s = 0;
          if (null != t && null != t.party && null != t.party.size && t.party.size.length >= 2) {
            let a = t.party.size;
            s = Math.max(a[0] - e.length, 0), n = a[1]
          } else n = a + s;
          return {
            knownSize: a,
            unknownSize: s,
            totalSize: n
          }
        }(t),
        onChannelContextMenu: n,
        onGuildClick: () => {
          (0, E.transitionToGuild)(l.id)
        }
      }, "voice-".concat(s.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = h.createBody(e);
      if (null != t) {
        L(t);
        break
      }
    } return v.length > 0 && g && v.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: i
    } = e;
    L((0, a.jsx)(_.default.ApplicationStreamingSection, {
      guildId: null == R ? void 0 : R.id,
      user: n,
      activity: i,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), A.forEach((e, t) => {
    var n, s, l, E, h, S, g, v, O;
    let {
      activity: P,
      game: y,
      playingMembers: M,
      activityUser: D
    } = e;
    if (null == P || null == P.type) return null;
    if (A.length > 1 && P.type === p.ActivityTypes.PLAYING && !(0, i.default)(P) && null != y) L((0, a.jsx)(_.default.GameSection, {
      icon: y.getIconURL(m.ICON_SIZE),
      name: y.name,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      members: M
    }, "game-".concat(null !== (n = P.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = P.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(P)) {
      let e = new Set(M.map(e => e.id)),
        t = null === (l = T.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && L((0, a.jsx)(_.default.EmbeddedActivitySection, {
        activity: P,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(P.application_id)))
    } else if ((null != P.assets || (0, i.default)(P)) && P.type === p.ActivityTypes.PLAYING) L((0, a.jsx)(_.default.RichPresenceSection, {
      activity: P,
      getAssetImage: C.getAssetImage
    }, "rich-presence-".concat(null !== (E = P.session_id) && void 0 !== E ? E : t, "-").concat(D.id)));
    else if ((0, d.default)(P)) {
      let e = T.length > 0 && T[0].members.length > 1,
        n = M.length > 1;
      L((0, a.jsx)(_.default.TwitchSection, {
        guildId: null == R ? void 0 : R.id,
        activity: P,
        user: e || n ? D : null,
        getAssetImage: C.getAssetImage
      }, "streaming-".concat(null !== (h = P.session_id) && void 0 !== h ? h : t)))
    } else(0, o.default)(P) ? L((0, a.jsx)(_.default.SpotifySection, {
      activity: P,
      isSolo: 1 === N.length,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      getAssetImage: C.getAssetImage,
      members: M
    }, "spotify-".concat(null !== (S = P.session_id) && void 0 !== S ? S : t, "-").concat(D.id))) : (null != P.assets || (0, i.default)(P)) && P.type === p.ActivityTypes.LISTENING ? L((0, a.jsx)(_.default.RichPresenceSection, {
      activity: P,
      getAssetImage: C.getAssetImage
    }, "rich-presence-".concat(null !== (g = P.session_id) && void 0 !== g ? g : t, "-").concat(D.id))) : (0, u.default)(P) && L((0, a.jsx)(_.default.XboxSection, {
      title: y.name
    }, "xbox-".concat(null !== (v = P.session_id) && void 0 !== v ? v : t)));
    null != I && null != y && y.id === c.SharedQuestFields.build(I.config).application.id && L((0, a.jsx)(f.default, {
      quest: I
    }, "quest-".concat(I.id, "-").concat(null !== (O = P.session_id) && void 0 !== O ? O : t)))
  }), O.length > 0 ? (0, a.jsx)(_.default.Body, {
    children: O
  }) : null
}
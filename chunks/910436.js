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
  h = n("81063"),
  _ = n("761282"),
  C = n("358924"),
  m = n("868854"),
  S = n("817915"),
  p = n("981631");

function I(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: I
  } = e, g = (0, m.useNowPlayingVisible)(), {
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
    O.push((0, a.jsx)(C.default.Separator, {
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
      L((0, a.jsx)(C.default.VoiceSection, {
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
      let t = _.createBody(e);
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
    L((0, a.jsx)(C.default.ApplicationStreamingSection, {
      guildId: null == R ? void 0 : R.id,
      user: n,
      activity: i,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), A.forEach((e, t) => {
    var n, s, l, E, _, m, g, v, O;
    let {
      activity: M,
      game: P,
      playingMembers: x,
      activityUser: y
    } = e;
    if (null == M || null == M.type) return null;
    if (A.length > 1 && M.type === p.ActivityTypes.PLAYING && !(0, i.default)(M) && null != P) L((0, a.jsx)(C.default.GameSection, {
      icon: P.getIconURL(S.ICON_SIZE),
      name: P.name,
      partySize: {
        knownSize: x.length,
        unknownSize: 0,
        totalSize: x.length
      },
      members: x
    }, "game-".concat(null !== (n = M.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = M.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(M)) {
      let e = new Set(x.map(e => e.id)),
        t = null === (l = T.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && L((0, a.jsx)(C.default.EmbeddedActivitySection, {
        activity: M,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(M.application_id)))
    } else if ((null != M.assets || (0, i.default)(M)) && M.type === p.ActivityTypes.PLAYING) L((0, a.jsx)(C.default.RichPresenceSection, {
      activity: M,
      getAssetImage: h.getAssetImage
    }, "rich-presence-".concat(null !== (E = M.session_id) && void 0 !== E ? E : t, "-").concat(y.id)));
    else if ((0, d.default)(M)) {
      let e = T.length > 0 && T[0].members.length > 1,
        n = x.length > 1;
      L((0, a.jsx)(C.default.TwitchSection, {
        guildId: null == R ? void 0 : R.id,
        activity: M,
        user: e || n ? y : null,
        getAssetImage: h.getAssetImage
      }, "streaming-".concat(null !== (_ = M.session_id) && void 0 !== _ ? _ : t)))
    } else(0, o.default)(M) ? L((0, a.jsx)(C.default.SpotifySection, {
      activity: M,
      isSolo: 1 === N.length,
      partySize: {
        knownSize: x.length,
        unknownSize: 0,
        totalSize: x.length
      },
      getAssetImage: h.getAssetImage,
      members: x
    }, "spotify-".concat(null !== (m = M.session_id) && void 0 !== m ? m : t, "-").concat(y.id))) : (null != M.assets || (0, i.default)(M)) && M.type === p.ActivityTypes.LISTENING ? L((0, a.jsx)(C.default.RichPresenceSection, {
      activity: M,
      getAssetImage: h.getAssetImage
    }, "rich-presence-".concat(null !== (g = M.session_id) && void 0 !== g ? g : t, "-").concat(y.id))) : (0, u.default)(M) && L((0, a.jsx)(C.default.XboxSection, {
      title: P.name
    }, "xbox-".concat(null !== (v = M.session_id) && void 0 !== v ? v : t)));
    null != I && null != P && P.id === c.SharedQuestFields.build(I.config).application.id && L((0, a.jsx)(f.default, {
      quest: I
    }, "quest-".concat(I.id, "-").concat(null !== (O = M.session_id) && void 0 !== O ? O : t)))
  }), O.length > 0 ? (0, a.jsx)(C.default.Body, {
    children: O
  }) : null
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
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

function p(e) {
  let {
    party: t,
    onChannelContextMenu: a,
    quest: p
  } = e, I = (0, C.useNowPlayingVisible)(), {
    voiceChannels: g,
    currentActivities: T,
    partiedMembers: A,
    applicationStreams: N,
    guildContext: v
  } = t, L = [], R = e => {
    var t, a;
    let {
      length: s
    } = L;
    if (0 === s) {
      L.push(e);
      return
    }
    let l = L[s - 1],
      i = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (a = null == l ? void 0 : l.key) && void 0 !== a ? a : "").startsWith("game") && i.startsWith("rich-presence");
    L.push((0, n.jsx)(_.default.Separator, {
      inset: r
    }, "sep-".concat(i))), L.push(e)
  };
  for (let {
      activity: e
    }
    of(g.length > 0 && g.forEach(e => {
      let {
        members: t,
        channel: s,
        guild: l
      } = e;
      R((0, n.jsx)(_.default.VoiceSection, {
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
        R(t);
        break
      }
    } return N.length > 0 && I && N.forEach(e => {
    let {
      stream: t,
      streamUser: a,
      activity: i
    } = e;
    R((0, n.jsx)(_.default.ApplicationStreamingSection, {
      guildId: null == v ? void 0 : v.id,
      user: a,
      activity: i,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), T.forEach((e, t) => {
    var a, s, l, f, h, C, I, N, L;
    let {
      activity: O,
      game: M,
      playingMembers: P,
      activityUser: x
    } = e;
    if (null == O || null == O.type) return null;
    if (T.length > 1 && O.type === S.ActivityTypes.PLAYING && !(0, i.default)(O) && null != M) R((0, n.jsx)(_.default.GameSection, {
      icon: M.getIconURL(m.ICON_SIZE),
      name: M.name,
      partySize: {
        knownSize: P.length,
        unknownSize: 0,
        totalSize: P.length
      },
      members: P
    }, "game-".concat(null !== (a = O.session_id) && void 0 !== a ? a : t, "-").concat(null !== (s = O.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(O)) {
      let e = new Set(P.map(e => e.id)),
        t = null === (l = g.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && R((0, n.jsx)(_.default.EmbeddedActivitySection, {
        activity: O,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(O.application_id)))
    } else if ((null != O.assets || (0, i.default)(O)) && O.type === S.ActivityTypes.PLAYING) R((0, n.jsx)(_.default.RichPresenceSection, {
      activity: O,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (f = O.session_id) && void 0 !== f ? f : t, "-").concat(x.id)));
    else if ((0, d.default)(O)) {
      let e = g.length > 0 && g[0].members.length > 1,
        a = P.length > 1;
      R((0, n.jsx)(_.default.TwitchSection, {
        guildId: null == v ? void 0 : v.id,
        activity: O,
        user: e || a ? x : null,
        getAssetImage: E.getAssetImage
      }, "streaming-".concat(null !== (h = O.session_id) && void 0 !== h ? h : t)))
    } else(0, o.default)(O) ? R((0, n.jsx)(_.default.SpotifySection, {
      activity: O,
      isSolo: 1 === A.length,
      partySize: {
        knownSize: P.length,
        unknownSize: 0,
        totalSize: P.length
      },
      getAssetImage: E.getAssetImage,
      members: P
    }, "spotify-".concat(null !== (C = O.session_id) && void 0 !== C ? C : t, "-").concat(x.id))) : (null != O.assets || (0, i.default)(O)) && O.type === S.ActivityTypes.LISTENING ? R((0, n.jsx)(_.default.RichPresenceSection, {
      activity: O,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (I = O.session_id) && void 0 !== I ? I : t, "-").concat(x.id))) : (0, u.default)(O) && R((0, n.jsx)(_.default.XboxSection, {
      title: M.name
    }, "xbox-".concat(null !== (N = O.session_id) && void 0 !== N ? N : t)));
    null != p && null != M && M.id === p.config.applicationId && R((0, n.jsx)(c.default, {
      quest: p
    }, "quest-".concat(p.id, "-").concat(null !== (L = O.session_id) && void 0 !== L ? L : t)))
  }), L.length > 0 ? (0, n.jsx)(_.default.Body, {
    children: L
  }) : null
}
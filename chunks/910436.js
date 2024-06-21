n.d(t, {
  Z: function() {
    return T
  }
}), n(653041), n(47120);
var i = n(735250);
n(470079);
var s = n(287734),
  l = n(872810),
  a = n(122810),
  r = n(841784),
  o = n(503438),
  c = n(802856),
  u = n(420660),
  d = n(566078),
  E = n(23404),
  h = n(769654),
  _ = n(81063),
  I = n(761282),
  m = n(358924),
  g = n(868854),
  p = n(817915),
  N = n(981631);

function T(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: T
  } = e, C = (0, g.L)(), {
    voiceChannels: S,
    currentActivities: A,
    partiedMembers: f,
    applicationStreams: Z,
    guildContext: v
  } = t, L = [], O = e => {
    var t, n;
    let {
      length: s
    } = L;
    if (0 === s) {
      L.push(e);
      return
    }
    let l = L[s - 1],
      a = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : "").startsWith("game") && a.startsWith("rich-presence");
    L.push((0, i.jsx)(m.Z.Separator, {
      inset: r
    }, "sep-".concat(a))), L.push(e)
  };
  for (let {
      activity: e
    }
    of(S.length > 0 && S.forEach(e => {
      let {
        members: t,
        channel: s,
        guild: l
      } = e;
      O((0, i.jsx)(m.Z.VoiceSection, {
        guild: l,
        channel: s,
        members: t,
        partySize: function(e, t) {
          let n;
          let i = e.length,
            s = 0;
          !1;
          n = i + s;
          return {
            knownSize: i,
            unknownSize: s,
            totalSize: n
          }
        }(t),
        onChannelContextMenu: n,
        onGuildClick: () => {
          (0, h.X)(l.id)
        }
      }, "voice-".concat(s.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = I.ct(e);
      if (null != t) {
        O(t);
        break
      }
    } return Z.length > 0 && C && Z.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    O((0, i.jsx)(m.Z.ApplicationStreamingSection, {
      guildId: null == v ? void 0 : v.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), A.forEach((e, t) => {
    var n, s, l, h, I, g, C, Z, L;
    let {
      activity: R,
      game: x,
      playingMembers: M,
      activityUser: P
    } = e;
    if (null == R || null == R.type) return null;
    if (A.length > 1 && R.type === N.IIU.PLAYING && !(0, a.Z)(R) && null != x) O((0, i.jsx)(m.Z.GameSection, {
      icon: x.getIconURL(p.Z),
      name: x.name,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      members: M
    }, "game-".concat(null !== (n = R.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = R.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.Z)(R)) {
      let e = new Set(M.map(e => e.id)),
        t = null === (l = S.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && O((0, i.jsx)(m.Z.EmbeddedActivitySection, {
        activity: R,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(R.application_id)))
    } else if ((null != R.assets || (0, a.Z)(R)) && R.type === N.IIU.PLAYING) O((0, i.jsx)(m.Z.RichPresenceSection, {
      activity: R,
      getAssetImage: _.getAssetImage
    }, "rich-presence-".concat(null !== (h = R.session_id) && void 0 !== h ? h : t, "-").concat(P.id)));
    else if ((0, u.Z)(R)) {
      let e = S.length > 0 && S[0].members.length > 1,
        n = M.length > 1;
      O((0, i.jsx)(m.Z.TwitchSection, {
        guildId: null == v ? void 0 : v.id,
        activity: R,
        user: e || n ? P : null,
        getAssetImage: _.getAssetImage
      }, "streaming-".concat(null !== (I = R.session_id) && void 0 !== I ? I : t)))
    } else(0, o.Z)(R) ? O((0, i.jsx)(m.Z.SpotifySection, {
      activity: R,
      isSolo: 1 === f.length,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      getAssetImage: _.getAssetImage,
      members: M
    }, "spotify-".concat(null !== (g = R.session_id) && void 0 !== g ? g : t, "-").concat(P.id))) : (null != R.assets || (0, a.Z)(R)) && R.type === N.IIU.LISTENING ? O((0, i.jsx)(m.Z.RichPresenceSection, {
      activity: R,
      getAssetImage: _.getAssetImage
    }, "rich-presence-".concat(null !== (C = R.session_id) && void 0 !== C ? C : t, "-").concat(P.id))) : (0, c.Z)(R) && O((0, i.jsx)(m.Z.XboxSection, {
      title: x.name
    }, "xbox-".concat(null !== (Z = R.session_id) && void 0 !== Z ? Z : t)));
    null != T && null != x && x.id === d.r.build(T.config).application.id && O((0, i.jsx)(E.Z, {
      quest: T
    }, "quest-".concat(T.id, "-").concat(null !== (L = R.session_id) && void 0 !== L ? L : t)))
  }), L.length > 0 ? (0, i.jsx)(m.Z.Body, {
    children: L
  }) : null
}
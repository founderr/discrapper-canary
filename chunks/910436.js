n.d(t, {
  Z: function() {
    return N
  }
}), n(653041), n(47120);
var s = n(735250);
n(470079);
var i = n(287734),
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
  T = n(868854),
  g = n(817915),
  p = n(981631);

function N(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: N
  } = e, S = (0, T.L)(), {
    voiceChannels: C,
    currentActivities: A,
    partiedMembers: f,
    applicationStreams: Z,
    guildContext: L
  } = t, O = [], v = e => {
    var t, n;
    let {
      length: i
    } = O;
    if (0 === i) {
      O.push(e);
      return
    }
    let l = O[i - 1],
      a = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : "").startsWith("game") && a.startsWith("rich-presence");
    O.push((0, s.jsx)(m.Z.Separator, {
      inset: r
    }, "sep-".concat(a))), O.push(e)
  };
  for (let {
      activity: e
    }
    of(C.length > 0 && C.forEach(e => {
      let {
        members: t,
        channel: i,
        guild: l
      } = e;
      v((0, s.jsx)(m.Z.VoiceSection, {
        guild: l,
        channel: i,
        members: t,
        partySize: function(e, t) {
          let n;
          let s = e.length,
            i = 0;
          !1;
          n = s + i;
          return {
            knownSize: s,
            unknownSize: i,
            totalSize: n
          }
        }(t),
        onChannelContextMenu: n,
        onGuildClick: () => {
          (0, h.X)(l.id)
        }
      }, "voice-".concat(i.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = I.ct(e);
      if (null != t) {
        v(t);
        break
      }
    } return Z.length > 0 && S && Z.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: a
    } = e;
    v((0, s.jsx)(m.Z.ApplicationStreamingSection, {
      guildId: null == L ? void 0 : L.id,
      user: n,
      activity: a,
      applicationStream: t,
      onPreviewClick: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), A.forEach((e, t) => {
    var n, i, l, h, I, T, S, Z, O;
    let {
      activity: R,
      game: P,
      playingMembers: x,
      activityUser: M
    } = e;
    if (null == R || null == R.type) return null;
    if (A.length > 1 && R.type === p.IIU.PLAYING && !(0, a.Z)(R) && null != P) v((0, s.jsx)(m.Z.GameSection, {
      icon: P.getIconURL(g.Z),
      name: P.name,
      partySize: {
        knownSize: x.length,
        unknownSize: 0,
        totalSize: x.length
      },
      members: x
    }, "game-".concat(null !== (n = R.session_id) && void 0 !== n ? n : t, "-").concat(null !== (i = R.application_id) && void 0 !== i ? i : t)));
    else if ((0, r.Z)(R)) {
      let e = new Set(x.map(e => e.id)),
        t = null === (l = C.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && v((0, s.jsx)(m.Z.EmbeddedActivitySection, {
        activity: R,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(R.application_id)))
    } else if ((null != R.assets || (0, a.Z)(R)) && R.type === p.IIU.PLAYING) v((0, s.jsx)(m.Z.RichPresenceSection, {
      activity: R,
      getAssetImage: _.getAssetImage
    }, "rich-presence-".concat(null !== (h = R.session_id) && void 0 !== h ? h : t, "-").concat(M.id)));
    else if ((0, u.Z)(R)) {
      let e = C.length > 0 && C[0].members.length > 1,
        n = x.length > 1;
      v((0, s.jsx)(m.Z.TwitchSection, {
        guildId: null == L ? void 0 : L.id,
        activity: R,
        user: e || n ? M : null,
        getAssetImage: _.getAssetImage
      }, "streaming-".concat(null !== (I = R.session_id) && void 0 !== I ? I : t)))
    } else(0, o.Z)(R) ? v((0, s.jsx)(m.Z.SpotifySection, {
      activity: R,
      isSolo: 1 === f.length,
      partySize: {
        knownSize: x.length,
        unknownSize: 0,
        totalSize: x.length
      },
      getAssetImage: _.getAssetImage,
      members: x
    }, "spotify-".concat(null !== (T = R.session_id) && void 0 !== T ? T : t, "-").concat(M.id))) : (null != R.assets || (0, a.Z)(R)) && R.type === p.IIU.LISTENING ? v((0, s.jsx)(m.Z.RichPresenceSection, {
      activity: R,
      getAssetImage: _.getAssetImage
    }, "rich-presence-".concat(null !== (S = R.session_id) && void 0 !== S ? S : t, "-").concat(M.id))) : (0, c.Z)(R) && v((0, s.jsx)(m.Z.XboxSection, {
      title: P.name
    }, "xbox-".concat(null !== (Z = R.session_id) && void 0 !== Z ? Z : t)));
    null != N && null != P && P.id === d.r.build(N.config).application.id && v((0, s.jsx)(E.Z, {
      quest: N
    }, "quest-".concat(N.id, "-").concat(null !== (O = R.session_id) && void 0 !== O ? O : t)))
  }), O.length > 0 ? (0, s.jsx)(m.Z.Body, {
    children: O
  }) : null
}
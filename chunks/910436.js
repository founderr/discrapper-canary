n.d(t, {
  Z: function() {
return S;
  }
}), n(653041), n(47120);
var i = n(735250);
n(470079);
var s = n(287734),
  a = n(872810),
  r = n(122810),
  l = n(841784),
  o = n(503438),
  c = n(802856),
  d = n(420660),
  u = n(918701),
  _ = n(23404),
  E = n(769654),
  h = n(81063),
  I = n(761282),
  m = n(358924),
  g = n(868854),
  p = n(817915),
  T = n(981631);

function S(e) {
  let {
party: t,
onChannelContextMenu: n,
quest: S
  } = e, f = (0, g.L)(), {
voiceChannels: C,
currentActivities: N,
partiedMembers: A,
applicationStreams: Z,
guildContext: v
  } = t, L = [], O = e => {
var t, n;
let {
  length: s
} = L;
if (0 === s) {
  L.push(e);
  return;
}
let a = L[s - 1],
  r = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
  l = ''.concat(null !== (n = null == a ? void 0 : a.key) && void 0 !== n ? n : '').startsWith('game') && r.startsWith('rich-presence');
L.push((0, i.jsx)(m.Z.Separator, {
  inset: l
}, 'sep-'.concat(r))), L.push(e);
  };
  for (let {
  activity: e
}
of(C.length > 0 && C.forEach(e => {
  let {
    members: t,
    channel: s,
    guild: a
  } = e;
  O((0, i.jsx)(m.Z.VoiceSection, {
    guild: a,
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
      };
    }(t),
    onChannelContextMenu: n,
    onGuildClick: () => {
      (0, E.X)(a.id);
    }
  }, 'voice-'.concat(s.id)));
}), t.currentActivities))
if (null != e) {
  let t = I.ct(e);
  if (null != t) {
    O(t);
    break;
  }
}
  return Z.length > 0 && f && Z.forEach(e => {
let {
  stream: t,
  streamUser: n,
  activity: r
} = e;
O((0, i.jsx)(m.Z.ApplicationStreamingSection, {
  guildId: null == v ? void 0 : v.id,
  user: n,
  activity: r,
  applicationStream: t,
  onPreviewClick: () => {
    s.default.selectVoiceChannel(t.channelId), (0, a.iV)(t);
  }
}, 'application-stream-'.concat(t.ownerId)));
  }), N.forEach((e, t) => {
var n, s, a, E, I, g, f, Z, L;
let {
  activity: R,
  game: x,
  playingMembers: b,
  activityUser: P
} = e;
if (null == R || null == R.type)
  return null;
if (N.length > 1 && R.type === T.IIU.PLAYING && !(0, r.Z)(R) && null != x)
  O((0, i.jsx)(m.Z.GameSection, {
    icon: x.getIconURL(p.Z),
    name: x.name,
    partySize: {
      knownSize: b.length,
      unknownSize: 0,
      totalSize: b.length
    },
    members: b
  }, 'game-'.concat(null !== (n = R.session_id) && void 0 !== n ? n : t, '-').concat(null !== (s = R.application_id) && void 0 !== s ? s : t)));
else if ((0, l.Z)(R)) {
  let e = new Set(b.map(e => e.id)),
    t = null === (a = C.find(e => null != e)) || void 0 === a ? void 0 : a.channel;
  null != t && O((0, i.jsx)(m.Z.EmbeddedActivitySection, {
    activity: R,
    participants: e,
    channel: t,
    guildId: t.guild_id
  }, 'embedded-activity-'.concat(R.application_id)));
} else if ((null != R.assets || (0, r.Z)(R)) && R.type === T.IIU.PLAYING)
  O((0, i.jsx)(m.Z.RichPresenceSection, {
    activity: R,
    getAssetImage: h.getAssetImage
  }, 'rich-presence-'.concat(null !== (E = R.session_id) && void 0 !== E ? E : t, '-').concat(P.id)));
else if ((0, d.Z)(R)) {
  let e = C.length > 0 && C[0].members.length > 1,
    n = b.length > 1;
  O((0, i.jsx)(m.Z.TwitchSection, {
    guildId: null == v ? void 0 : v.id,
    activity: R,
    user: e || n ? P : null,
    getAssetImage: h.getAssetImage
  }, 'streaming-'.concat(null !== (I = R.session_id) && void 0 !== I ? I : t)));
} else
  (0, o.Z)(R) ? O((0, i.jsx)(m.Z.SpotifySection, {
    activity: R,
    isSolo: 1 === A.length,
    partySize: {
      knownSize: b.length,
      unknownSize: 0,
      totalSize: b.length
    },
    getAssetImage: h.getAssetImage,
    members: b
  }, 'spotify-'.concat(null !== (g = R.session_id) && void 0 !== g ? g : t, '-').concat(P.id))) : (null != R.assets || (0, r.Z)(R)) && R.type === T.IIU.LISTENING ? O((0, i.jsx)(m.Z.RichPresenceSection, {
    activity: R,
    getAssetImage: h.getAssetImage
  }, 'rich-presence-'.concat(null !== (f = R.session_id) && void 0 !== f ? f : t, '-').concat(P.id))) : (0, c.Z)(R) && O((0, i.jsx)(m.Z.XboxSection, {
    title: x.name
  }, 'xbox-'.concat(null !== (Z = R.session_id) && void 0 !== Z ? Z : t)));
null != S && null != x && (0, u._D)(R, S) && O((0, i.jsx)(_.Z, {
  quest: S
}, 'quest-'.concat(S.id, '-').concat(null !== (L = R.session_id) && void 0 !== L ? L : t)));
  }), L.length > 0 ? (0, i.jsx)(m.Z.Body, {
children: L
  }) : null;
}
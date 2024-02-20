"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("424973"), n("222007");
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("987317"),
  i = n("990766"),
  r = n("309570"),
  o = n("152311"),
  u = n("429928"),
  d = n("36539"),
  c = n("502651"),
  f = n("2973"),
  E = n("227231"),
  h = n("834440"),
  _ = n("239380"),
  C = n("550368"),
  I = n("67139"),
  S = n("62659"),
  m = n("636174"),
  p = n("49111");

function T(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    registerQuestEntrypoint: T,
    unregisterQuestEntrypoint: g,
    shouldRenderQuestEntrypoint: A
  } = e, {
    voiceChannels: N,
    currentActivities: R,
    partiedMembers: v,
    applicationStreams: O,
    guildContext: L
  } = t, M = (0, s.useStateFromStores)([f.default], () => f.default.quests), P = [], D = e => {
    var t, n;
    let {
      length: s
    } = P;
    if (0 === s) {
      P.push(e);
      return
    }
    let l = P[s - 1],
      i = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : ""),
      o = r.startsWith("game") && i.startsWith("rich-presence");
    P.push((0, a.jsx)(S.default.Separator, {
      inset: o
    }, "sep-".concat(i))), P.push(e)
  };
  for (let {
      activity: e
    }
    of(N.length > 0 && N.forEach(e => {
      let {
        members: t,
        channel: s,
        guild: l
      } = e;
      D((0, a.jsx)(S.default.VoiceSection, {
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
          (0, _.transitionToGuild)(l.id)
        }
      }, "voice-".concat(s.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = I.createBody(e);
      if (null != t) {
        D(t);
        break
      }
    } return O.length > 0 && O.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: s
    } = e;
    D((0, a.jsx)(S.default.ApplicationStreamingSection, {
      guildId: null == L ? void 0 : L.id,
      user: n,
      activity: s,
      applicationStream: t,
      onPreviewClick: () => {
        l.default.selectVoiceChannel(t.channelId), (0, i.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), R.forEach((e, n) => {
    var s, l, i, f, _, I, O, P, y;
    let {
      activity: x,
      game: b,
      playingMembers: U,
      activityUser: G
    } = e;
    if (null == x || null == x.type) return null;
    if (R.length > 1 && x.type === p.ActivityTypes.PLAYING && !(0, r.default)(x) && null != b) D((0, a.jsx)(S.default.GameSection, {
      icon: b.getIconURL(m.ICON_SIZE),
      name: b.name,
      partySize: {
        knownSize: U.length,
        unknownSize: 0,
        totalSize: U.length
      },
      members: U
    }, "game-".concat(null !== (s = x.session_id) && void 0 !== s ? s : n, "-").concat(null !== (l = x.application_id) && void 0 !== l ? l : n)));
    else if ((0, o.default)(x)) {
      let e = new Set(U.map(e => e.id)),
        t = null === (i = N.find(e => null != e)) || void 0 === i ? void 0 : i.channel;
      null != t && D((0, a.jsx)(S.default.EmbeddedActivitySection, {
        activity: x,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(x.application_id)))
    } else if ((null != x.assets || (0, r.default)(x)) && x.type === p.ActivityTypes.PLAYING) D((0, a.jsx)(S.default.RichPresenceSection, {
      activity: x,
      getAssetImage: C.getAssetImage
    }, "rich-presence-".concat(null !== (f = x.session_id) && void 0 !== f ? f : n, "-").concat(G.id)));
    else if ((0, c.default)(x)) {
      let e = N.length > 0 && N[0].members.length > 1,
        t = U.length > 1;
      D((0, a.jsx)(S.default.TwitchSection, {
        guildId: null == L ? void 0 : L.id,
        activity: x,
        user: e || t ? G : null,
        getAssetImage: C.getAssetImage
      }, "streaming-".concat(null !== (_ = x.session_id) && void 0 !== _ ? _ : n)))
    } else(0, u.default)(x) ? D((0, a.jsx)(S.default.SpotifySection, {
      activity: x,
      isSolo: 1 === v.length,
      partySize: {
        knownSize: U.length,
        unknownSize: 0,
        totalSize: U.length
      },
      getAssetImage: C.getAssetImage,
      members: U
    }, "spotify-".concat(null !== (I = x.session_id) && void 0 !== I ? I : n, "-").concat(G.id))) : (null != x.assets || (0, r.default)(x)) && x.type === p.ActivityTypes.LISTENING ? D((0, a.jsx)(S.default.RichPresenceSection, {
      activity: x,
      getAssetImage: C.getAssetImage
    }, "rich-presence-".concat(null !== (O = x.session_id) && void 0 !== O ? O : n, "-").concat(G.id))) : (0, d.default)(x) && D((0, a.jsx)(S.default.XboxSection, {
      title: b.name
    }, "xbox-".concat(null !== (P = x.session_id) && void 0 !== P ? P : n)));
    if (null != b) {
      let e = (0, E.getQuestByApplicationId)(M, b.id);
      null != e && A(e.id, t.id) && (T(e.id, t.id), D((0, a.jsx)(h.default, {
        quest: e,
        onUnmount: () => g(e.id)
      }, "quest-".concat(e.id, "-").concat(null !== (y = x.session_id) && void 0 !== y ? y : n))))
    }
  }), P.length > 0 ? (0, a.jsx)(S.default.Body, {
    children: P
  }) : null
}
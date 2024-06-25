n.d(t, {
  Q: function() {
    return j
  }
});
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(475179),
  u = n(239091),
  d = n(872810),
  h = n(40851),
  m = n(358221),
  E = n(258609),
  p = n(569545),
  g = n(382182),
  f = n(484459),
  C = n(103575),
  _ = n(199902),
  I = n(430824),
  x = n(496675),
  T = n(979651),
  N = n(40300),
  Z = n(88751),
  S = n(252132),
  v = n(248400),
  A = n(981631),
  M = n(354459),
  R = n(433654);
let j = 16 / 9,
  L = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: s,
      guildId: a,
      user: r,
      width: c,
      isModerator: u,
      onContextMenu: d,
      inPopout: h
    } = e, {
      reducedMotion: m
    } = i.useContext(o.AccessibilityPreferencesContext), {
      blocked: E,
      id: p
    } = t;
    return (0, l.jsx)(o.Popout, {
      preload: null == n ? void 0 : () => (0, f.W)(n.user, {
        guildId: s.guild_id,
        channelId: s.id
      }),
      renderPopout: e => (0, l.jsx)(C.Z, {
        ...e,
        location: "StageTile",
        guildId: a,
        channelId: s.id,
        userId: r.id
      }),
      position: "right",
      spacing: 8,
      children: e => (0, l.jsx)(o.Clickable, {
        onContextMenu: e => d(n, e),
        ...e,
        children: (0, l.jsx)(S.Z, {
          participant: n,
          aspectRatio: j,
          blocked: E,
          channel: s,
          className: R.tile,
          inCall: !0,
          inPopout: h,
          paused: !1,
          pulseSpeakingIndicator: !m.enabled,
          width: c,
          children: u && (0, l.jsx)(v.Z, {})
        }, p)
      })
    })
  },
  O = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: s,
      width: a,
      isModerator: u,
      onContextMenu: h,
      inPopout: f
    } = e, {
      reducedMotion: C
    } = i.useContext(o.AccessibilityPreferencesContext), {
      id: Z,
      blocked: L
    } = t, O = (0, r.Wu)([_.Z], () => _.Z.getAllActiveStreams(), []), {
      selectedParticipant: P,
      largeStream: y
    } = (0, r.cj)([m.Z], () => ({
      selectedParticipant: null != s ? m.Z.getSelectedParticipant(s.id) : null,
      largeStream: null != s && m.Z.getStageStreamSize(s.id)
    })), b = i.useCallback((e, t) => {
      if (e.type === M.fO.STREAM && 0 === O.filter(t => (0, p.V9)(t) === e.id && t.state !== A.jm8.ENDED).length) {
        if (!(0, g.p9)(s, T.Z, I.Z, x.Z, E.Z)[0]) return;
        (0, d.rn)((0, p.my)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == P ? void 0 : P.id) === e.id ? y ? (c.Z.selectParticipant(s.id, null), c.Z.updateStageStreamSize(s.id, !1)) : c.Z.updateStageStreamSize(s.id, !0) : (c.Z.updateStageStreamSize(s.id, !1), c.Z.selectParticipant(s.id, e.id))
    }, [O, s, P, y]);
    return (0, l.jsx)(S.Z, {
      participant: n,
      aspectRatio: j,
      fit: n.type === M.fO.USER ? N.L.COVER : void 0,
      blocked: L,
      channel: s,
      className: R.tile,
      inCall: !0,
      inPopout: f,
      onClick: b,
      onContextMenu: h,
      paused: !1,
      pulseSpeakingIndicator: !C.enabled,
      width: a,
      children: u && n.type === M.fO.USER && (0, l.jsx)(v.Z, {})
    }, Z)
  };
t.Z = i.memo(function(e) {
  var t;
  let {
    participant: i,
    channel: s,
    width: o
  } = e, c = (0, h.bp)(), d = s.getGuildId();
  a()(null != d, "Channel cannot be guildless");
  let {
    user: E
  } = i, p = (0, r.e7)([m.Z], () => m.Z.getParticipant(s.id, i.id), [s.id, i.id]), g = (0, r.e7)([Z.ZP], () => Z.ZP.isModerator(E.id, s.id), [s.id, E.id]);
  if (null == p || p.type === M.fO.ACTIVITY) return null;
  let f = (e, t) => {
      switch (e.type) {
        case M.fO.HIDDEN_STREAM:
        case M.fO.STREAM:
          (0, u.jW)(t, async () => {
            let {
              default: t
            } = await n.e("22183").then(n.bind(n, 987281));
            return n => (0, l.jsx)(t, {
              ...n,
              stream: e.stream,
              appContext: c,
              exitFullscreen: () => {}
            })
          }, {
            context: c
          });
          return;
        case M.fO.USER:
        default:
          (0, u.jW)(t, async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
            return t => (0, l.jsx)(e, {
              ...t,
              user: E,
              guildId: d,
              channel: s,
              showMediaItems: !0,
              showStageChannelItems: !0,
              showChatItems: !1
            })
          }, {
            context: c
          })
      }
    },
    C = p.type === M.fO.USER && !(null === (t = p.voiceState) || void 0 === t ? void 0 : t.selfVideo);
  return (0, l.jsx)(l.Fragment, {
    children: C ? (0, l.jsx)(L, {
      stageParticipant: i,
      rtcParticipant: p,
      channel: s,
      guildId: d,
      user: E,
      width: o,
      isModerator: g,
      onContextMenu: f,
      inPopout: c === A.IlC.POPOUT
    }) : (0, l.jsx)(O, {
      stageParticipant: i,
      rtcParticipant: p,
      channel: s,
      guildId: d,
      user: E,
      width: o,
      isModerator: g,
      onContextMenu: f,
      inPopout: c === A.IlC.POPOUT
    })
  })
})
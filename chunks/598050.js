"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("446674"),
  u = n("737960"),
  o = n("191145"),
  d = n("488464"),
  c = n("567469"),
  f = n("998716"),
  h = n("223378"),
  m = n("973137"),
  p = n("661917"),
  E = n("85427"),
  g = n("620103"),
  C = n("297446"),
  S = n("782340"),
  _ = n("956630");
let I = {
  singleSpeaker: 424,
  twoSpeakers: 624,
  threeSpeakers: 824
};
(a = l || (l = {}))[a.SELECTED = 0] = "SELECTED", a[a.SPEAKER = 1] = "SPEAKER", a[a.AUDIENCE = 2] = "AUDIENCE";
let T = (e, t) => {
    let n = Math.floor(e / t - 8),
      l = Math.floor(n / C.SPEAKER_TILE_ASPECT_RATIO);
    return {
      speakerTileWidth: n,
      speakerTileHeight: l
    }
  },
  v = (e, t) => e < I.singleSpeaker ? 1 : e < I.twoSpeakers ? 2 : e < I.threeSpeakers ? 3 : t ? 3 : 4,
  x = e => Math.floor((e - 32) / 102);

function N(e) {
  return e.type === f.StageChannelParticipantTypes.VOICE
}
var A = (0, u.default)(e => {
  var t, n;
  let {
    channel: l,
    width: a,
    onScroll: u
  } = e, {
    selectedParticipantId: I,
    largeStream: A,
    chatOpen: M
  } = (0, r.useStateFromStoresObject)([o.default], () => ({
    selectedParticipantId: o.default.getSelectedParticipantId(l.id),
    largeStream: o.default.getStageStreamSize(l.id),
    chatOpen: o.default.getChatOpen(l.id)
  }), [l.id]), R = (0, c.useActualStageSpeakerCount)(l.id), j = (0, c.useStageParticipantsCount)(l.id, f.StageChannelParticipantNamedIndex.AUDIENCE), L = (0, r.useStateFromStores)([d.default], () => null != I ? d.default.getParticipant(l.id, I) : null), O = (0, c.useStageParticipants)(l.id, f.StageChannelParticipantNamedIndex.SPEAKER), y = O.filter(N), P = null != O.find(e => e.type === f.StageChannelParticipantTypes.STREAM), b = x(a), D = v(a, M), U = {
    [f.StageChannelParticipantNamedIndex.SPEAKER]: D,
    [f.StageChannelParticipantNamedIndex.AUDIENCE]: b,
    [f.StageChannelParticipantNamedIndex.SELECTED]: 1
  }, w = (0, h.useThrottleDurationForChannel)(l.id), [F, k] = (0, h.useStageChannelParticipantsListThrottled)(l.id, U, w), B = [Math.max(null !== (t = F[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = F[1]) && void 0 !== n ? n : 1, 1), F[2]], {
    speakerTileWidth: V,
    speakerTileHeight: H
  } = T(a, D), G = A ? a - 32 : Math.min(a - 64, 3 * V + 8), W = e => e === F.length - 1 || 0 === j && 1 === e, [Y, z] = i.useState(!1), [K, Z] = i.useState(!1);
  return (0, s.jsx)(p.default, {
    sections: B,
    renderSection: e => {
      let {
        section: t
      } = e;
      if (1 === t) return 0 === R ? null : (0, s.jsx)(g.default, {
        participantCount: R,
        label: S.default.Messages.SPEAKER_LABEL,
        className: _.header,
        onClick: () => z(!Y),
        collapsed: Y,
        speakers: y,
        channel: l,
        isStreamLive: P
      }, "speaker-header-".concat(t));
      if (2 === t) return 0 === j ? null : (0, s.jsx)(g.default, {
        participantCount: j,
        label: S.default.Messages.AUDIENCE_LABEL,
        className: _.header,
        onClick: () => Z(!K),
        collapsed: K,
        channel: l
      }, "audience-header-".concat(t));
      return null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, a = k[t][n];
      if ((null == a ? void 0 : a.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === a.length || null == a[0]) return null;
          return (0, s.jsx)("div", {
            className: _.focusedRow,
            children: (0, s.jsx)(C.default, {
              channel: l,
              participant: a[0],
              width: G
            })
          }, "selected-participant");
        case 1:
          if (Y) return null;
          return (0, s.jsx)(i.Fragment, {
            children: (0, s.jsx)(E.default, {
              tileWidth: V,
              channel: l,
              participants: a,
              selectedParticipant: L
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (K) return null;
          return (0, s.jsx)(m.default, {
            channel: l,
            participants: a,
            maxTiles: b
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => {
      let t = null == k[e][0];
      return t ? 0 : 0 === e ? G / C.SPEAKER_TILE_ASPECT_RATIO + 8 : 1 === e ? Y ? 0 : H : K ? 0 : 98
    },
    renderFooter: e => {
      let {
        section: t
      } = e;
      return W(t) ? (0, s.jsx)("div", {
        className: _.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : W(e) ? 88 : 0,
    className: _.scroller,
    chunkSize: 60,
    onScroll: u
  })
})
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("446674"),
  o = n("737960"),
  u = n("191145"),
  d = n("488464"),
  c = n("567469"),
  f = n("998716"),
  h = n("223378"),
  m = n("973137"),
  p = n("661917"),
  E = n("85427"),
  S = n("620103"),
  g = n("297446"),
  C = n("782340"),
  _ = n("956630");
let I = {
  singleSpeaker: 424,
  twoSpeakers: 624,
  threeSpeakers: 824
};
(a = l || (l = {}))[a.SELECTED = 0] = "SELECTED", a[a.SPEAKER = 1] = "SPEAKER", a[a.AUDIENCE = 2] = "AUDIENCE";
let T = (e, t) => {
    let n = Math.floor(e / t - 8),
      l = Math.floor(n / g.SPEAKER_TILE_ASPECT_RATIO);
    return {
      speakerTileWidth: n,
      speakerTileHeight: l
    }
  },
  v = (e, t) => e < I.singleSpeaker ? 1 : e < I.twoSpeakers ? 2 : e < I.threeSpeakers ? 3 : t ? 3 : 4,
  x = e => Math.floor((e - 32) / 102);
var N = (0, o.default)(e => {
  var t, n;
  let {
    channel: l,
    width: a,
    onScroll: o
  } = e, {
    selectedParticipantId: I,
    largeStream: N,
    chatOpen: A
  } = (0, r.useStateFromStoresObject)([u.default], () => ({
    selectedParticipantId: u.default.getSelectedParticipantId(l.id),
    largeStream: u.default.getStageStreamSize(l.id),
    chatOpen: u.default.getChatOpen(l.id)
  }), [l.id]), M = (0, c.useActualStageSpeakerCount)(l.id), R = (0, c.useStageParticipantsCount)(l.id, f.StageChannelParticipantNamedIndex.AUDIENCE), j = (0, r.useStateFromStores)([d.default], () => null != I ? d.default.getParticipant(l.id, I) : null), L = (0, c.useStageParticipants)(l.id, f.StageChannelParticipantNamedIndex.SPEAKER), y = L.filter(e => e.type === f.StageChannelParticipantTypes.VOICE), O = null != L.find(e => e.type === f.StageChannelParticipantTypes.STREAM), P = x(a), b = v(a, A), D = {
    [f.StageChannelParticipantNamedIndex.SPEAKER]: b,
    [f.StageChannelParticipantNamedIndex.AUDIENCE]: P,
    [f.StageChannelParticipantNamedIndex.SELECTED]: 1
  }, U = (0, h.useThrottleDurationForChannel)(l.id), [w, F] = (0, h.useStageChannelParticipantsListThrottled)(l.id, D, U), k = [Math.max(null !== (t = w[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = w[1]) && void 0 !== n ? n : 1, 1), w[2]], {
    speakerTileWidth: V,
    speakerTileHeight: B
  } = T(a, b), H = N ? a - 32 : Math.min(a - 64, 3 * V + 8), G = e => e === w.length - 1 || 0 === R && 1 === e, [W, Y] = i.useState(!1), [z, K] = i.useState(!1);
  return (0, s.jsx)(p.default, {
    sections: k,
    renderSection: e => {
      let {
        section: t
      } = e;
      if (1 === t) return 0 === M ? null : (0, s.jsx)(S.default, {
        participantCount: M,
        label: C.default.Messages.SPEAKER_LABEL,
        className: _.header,
        onClick: () => Y(!W),
        collapsed: W,
        speakers: y,
        channel: l,
        isStreamLive: O
      }, "speaker-header-".concat(t));
      if (2 === t) return 0 === R ? null : (0, s.jsx)(S.default, {
        participantCount: R,
        label: C.default.Messages.AUDIENCE_LABEL,
        className: _.header,
        onClick: () => K(!z),
        collapsed: z,
        channel: l
      }, "audience-header-".concat(t));
      return null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, a = F[t][n];
      if ((null == a ? void 0 : a.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === a.length || null == a[0]) return null;
          return (0, s.jsx)("div", {
            className: _.focusedRow,
            children: (0, s.jsx)(g.default, {
              channel: l,
              participant: a[0],
              width: H
            })
          }, "selected-participant");
        case 1:
          if (W) return null;
          return (0, s.jsx)(i.Fragment, {
            children: (0, s.jsx)(E.default, {
              tileWidth: V,
              channel: l,
              participants: a,
              selectedParticipant: j
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (z) return null;
          return (0, s.jsx)(m.default, {
            channel: l,
            participants: a,
            maxTiles: P
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => {
      let t = null == F[e][0];
      return t ? 0 : 0 === e ? H / g.SPEAKER_TILE_ASPECT_RATIO + 8 : 1 === e ? W ? 0 : B : z ? 0 : 98
    },
    renderFooter: e => {
      let {
        section: t
      } = e;
      return G(t) ? (0, s.jsx)("div", {
        className: _.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : G(e) ? 88 : 0,
    className: _.scroller,
    chunkSize: 60,
    onScroll: o
  })
})
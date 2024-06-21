n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(442837),
  o = n(112724),
  c = n(358221),
  u = n(565799),
  d = n(431328),
  h = n(501655),
  m = n(27931),
  p = n(260979),
  E = n(766015),
  g = n(401139),
  f = n(12779),
  C = n(450369),
  _ = n(689938),
  I = n(310808);
let x = 424,
  T = 624,
  N = 824;
(i = l || (l = {}))[i.SELECTED = 0] = "SELECTED", i[i.SPEAKER = 1] = "SPEAKER", i[i.AUDIENCE = 2] = "AUDIENCE";
let Z = (e, t) => {
    let n = Math.floor(e / t - 8),
      l = Math.floor(n / C.Q);
    return {
      speakerTileWidth: n,
      speakerTileHeight: l
    }
  },
  S = (e, t) => e < x ? 1 : e < T ? 2 : e < N ? 3 : t ? 3 : 4,
  v = e => Math.floor((e - 32) / 102);

function A(e) {
  return e.type === h.Ui.VOICE
}
t.Z = (0, o.Z)(e => {
  var t, n;
  let {
    channel: l,
    width: i,
    onScroll: o
  } = e, {
    selectedParticipantId: x,
    largeStream: T,
    chatOpen: N
  } = (0, r.cj)([c.Z], () => ({
    selectedParticipantId: c.Z.getSelectedParticipantId(l.id),
    largeStream: c.Z.getStageStreamSize(l.id),
    chatOpen: c.Z.getChatOpen(l.id)
  }), [l.id]), M = (0, d.Io)(l.id), R = (0, d.Rk)(l.id, h.pV.AUDIENCE), j = (0, r.e7)([u.Z], () => null != x ? u.Z.getParticipant(l.id, x) : null), L = (0, d.w8)(l.id, h.pV.SPEAKER), O = L.filter(A), P = null != L.find(e => e.type === h.Ui.STREAM), b = v(i), y = S(i, N), D = {
    [h.pV.SPEAKER]: y,
    [h.pV.AUDIENCE]: b,
    [h.pV.SELECTED]: 1
  }, U = (0, m.Dx)(l.id), [k, w] = (0, m.aP)(l.id, D, U), H = [Math.max(null !== (t = k[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = k[1]) && void 0 !== n ? n : 1, 1), k[2]], {
    speakerTileWidth: B,
    speakerTileHeight: G
  } = Z(i, y), V = T ? i - 32 : Math.min(i - 64, 3 * B + 8), F = e => e === k.length - 1 || 0 === R && 1 === e, [z, W] = a.useState(!1), [Y, K] = a.useState(!1);
  return (0, s.jsx)(E.Z, {
    sections: H,
    renderSection: e => {
      let {
        section: t
      } = e;
      if (1 === t) return 0 === M ? null : (0, s.jsx)(f.Z, {
        participantCount: M,
        label: _.Z.Messages.SPEAKER_LABEL,
        className: I.header,
        onClick: () => W(!z),
        collapsed: z,
        speakers: O,
        channel: l,
        isStreamLive: P
      }, "speaker-header-".concat(t));
      if (2 === t) return 0 === R ? null : (0, s.jsx)(f.Z, {
        participantCount: R,
        label: _.Z.Messages.AUDIENCE_LABEL,
        className: I.header,
        onClick: () => K(!Y),
        collapsed: Y,
        channel: l
      }, "audience-header-".concat(t));
      return null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, i = w[t][n];
      if ((null == i ? void 0 : i.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === i.length || null == i[0]) return null;
          return (0, s.jsx)("div", {
            className: I.focusedRow,
            children: (0, s.jsx)(C.Z, {
              channel: l,
              participant: i[0],
              width: V
            })
          }, "selected-participant");
        case 1:
          if (z) return null;
          return (0, s.jsx)(a.Fragment, {
            children: (0, s.jsx)(g.Z, {
              tileWidth: B,
              channel: l,
              participants: i,
              selectedParticipant: j
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (Y) return null;
          return (0, s.jsx)(p.Z, {
            channel: l,
            participants: i,
            maxTiles: b
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == w[e][0] ? 0 : 0 === e ? V / C.Q + 8 : 1 === e ? z ? 0 : G : Y ? 0 : 98,
    renderFooter: e => {
      let {
        section: t
      } = e;
      return F(t) ? (0, s.jsx)("div", {
        className: I.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : F(e) ? 88 : 0,
    className: I.scroller,
    chunkSize: 60,
    onScroll: o
  })
})
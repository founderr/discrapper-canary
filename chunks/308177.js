n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(442837),
    o = n(112724),
    c = n(358221),
    u = n(565799),
    d = n(431328),
    h = n(501655),
    m = n(27931),
    p = n(260979),
    _ = n(766015),
    f = n(401139),
    E = n(12779),
    g = n(450369),
    C = n(689938),
    I = n(233573);
let T = 424,
    x = 624,
    v = 824;
((s = i || (i = {}))[(s.SELECTED = 0)] = 'SELECTED'), (s[(s.SPEAKER = 1)] = 'SPEAKER'), (s[(s.AUDIENCE = 2)] = 'AUDIENCE');
let S = (e, t) => {
        let n = Math.floor(e / t - 8),
            i = Math.floor(n / g.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: i
        };
    },
    N = (e, t) => (e < T ? 1 : e < x ? 2 : e < v ? 3 : t ? 3 : 4),
    A = (e) => Math.floor((e - 32) / 102);
function Z(e) {
    return e.type === h.Ui.VOICE;
}
t.Z = (0, o.Z)((e) => {
    var t, n;
    let { channel: i, width: s, onScroll: o } = e,
        {
            selectedParticipantId: T,
            largeStream: x,
            chatOpen: v
        } = (0, r.cj)(
            [c.Z],
            () => ({
                selectedParticipantId: c.Z.getSelectedParticipantId(i.id),
                largeStream: c.Z.getStageStreamSize(i.id),
                chatOpen: c.Z.getChatOpen(i.id)
            }),
            [i.id]
        ),
        M = (0, d.Io)(i.id),
        b = (0, d.Rk)(i.id, h.pV.AUDIENCE),
        R = (0, r.e7)([u.Z], () => (null != T ? u.Z.getParticipant(i.id, T) : null)),
        L = (0, d.w8)(i.id, h.pV.SPEAKER),
        j = L.filter(Z),
        O = null != L.find((e) => e.type === h.Ui.STREAM),
        P = A(s),
        y = N(s, v),
        D = {
            [h.pV.SPEAKER]: y,
            [h.pV.AUDIENCE]: P,
            [h.pV.SELECTED]: 1
        },
        k = (0, m.Dx)(i.id),
        [U, w] = (0, m.aP)(i.id, D, k),
        B = [Math.max(null !== (t = U[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = U[1]) && void 0 !== n ? n : 1, 1), U[2]],
        { speakerTileWidth: H, speakerTileHeight: G } = S(s, y),
        V = x ? s - 32 : Math.min(s - 64, 3 * H + 8),
        F = (e) => e === U.length - 1 || (0 === b && 1 === e),
        [W, z] = l.useState(!1),
        [Y, K] = l.useState(!1);
    return (0, a.jsx)(_.Z, {
        sections: B,
        renderSection: (e) => {
            let { section: t } = e;
            if (1 === t)
                return 0 === M
                    ? null
                    : (0, a.jsx)(
                          E.Z,
                          {
                              participantCount: M,
                              label: C.Z.Messages.SPEAKER_LABEL,
                              className: I.header,
                              onClick: () => z(!W),
                              collapsed: W,
                              speakers: j,
                              channel: i,
                              isStreamLive: O
                          },
                          'speaker-header-'.concat(t)
                      );
            if (2 === t)
                return 0 === b
                    ? null
                    : (0, a.jsx)(
                          E.Z,
                          {
                              participantCount: b,
                              label: C.Z.Messages.AUDIENCE_LABEL,
                              className: I.header,
                              onClick: () => K(!Y),
                              collapsed: Y,
                              channel: i
                          },
                          'audience-header-'.concat(t)
                      );
            return null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                s = w[t][n];
            if ((null == s ? void 0 : s.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === s.length || null == s[0]) return null;
                    return (0, a.jsx)(
                        'div',
                        {
                            className: I.focusedRow,
                            children: (0, a.jsx)(g.Z, {
                                channel: i,
                                participant: s[0],
                                width: V
                            })
                        },
                        'selected-participant'
                    );
                case 1:
                    if (W) return null;
                    return (0, a.jsx)(
                        l.Fragment,
                        {
                            children: (0, a.jsx)(f.Z, {
                                tileWidth: H,
                                channel: i,
                                participants: s,
                                selectedParticipant: R
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (Y) return null;
                    return (0, a.jsx)(
                        p.Z,
                        {
                            channel: i,
                            participants: s,
                            maxTiles: P
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == w[e][0] ? 0 : 0 === e ? V / g.Q + 8 : 1 === e ? (W ? 0 : G) : Y ? 0 : 98),
        renderFooter: (e) => {
            let { section: t } = e;
            return F(t) ? (0, a.jsx)('div', { className: I.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : F(e) ? 88 : 0),
        className: I.scroller,
        chunkSize: 60,
        onScroll: o
    });
});

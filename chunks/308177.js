n(47120);
var i,
    l,
    r = n(200651),
    s = n(192379),
    a = n(442837),
    o = n(112724),
    c = n(358221),
    u = n(565799),
    d = n(431328),
    h = n(501655),
    m = n(27931),
    p = n(260979),
    f = n(766015),
    g = n(401139),
    C = n(12779),
    x = n(450369),
    v = n(388032),
    _ = n(233573);
let I = 424,
    E = 624,
    b = 824;
((l = i || (i = {}))[(l.SELECTED = 0)] = 'SELECTED'), (l[(l.SPEAKER = 1)] = 'SPEAKER'), (l[(l.AUDIENCE = 2)] = 'AUDIENCE');
let S = (e, t) => {
        let n = Math.floor(e / t - 8),
            i = Math.floor(n / x.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: i
        };
    },
    Z = (e, t) => (e < I ? 1 : e < E ? 2 : e < b ? 3 : t ? 3 : 4),
    T = (e) => Math.floor((e - 32) / 102);
function N(e) {
    return e.type === h.Ui.VOICE;
}
t.Z = (0, o.Z)((e) => {
    var t, n;
    let { channel: i, width: l, onScroll: o } = e,
        {
            selectedParticipantId: I,
            largeStream: E,
            chatOpen: b
        } = (0, a.cj)(
            [c.Z],
            () => ({
                selectedParticipantId: c.Z.getSelectedParticipantId(i.id),
                largeStream: c.Z.getStageStreamSize(i.id),
                chatOpen: c.Z.getChatOpen(i.id)
            }),
            [i.id]
        ),
        j = (0, d.Io)(i.id),
        A = (0, d.Rk)(i.id, h.pV.AUDIENCE),
        y = (0, a.e7)([u.Z], () => (null != I ? u.Z.getParticipant(i.id, I) : null)),
        P = (0, d.w8)(i.id, h.pV.SPEAKER),
        M = P.filter(N),
        R = null != P.find((e) => e.type === h.Ui.STREAM),
        L = T(l),
        k = Z(l, b),
        O = {
            [h.pV.SPEAKER]: k,
            [h.pV.AUDIENCE]: L,
            [h.pV.SELECTED]: 1
        },
        w = (0, m.Dx)(i.id),
        [D, U] = (0, m.aP)(i.id, O, w),
        B = [Math.max(null !== (t = D[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = D[1]) && void 0 !== n ? n : 1, 1), D[2]],
        { speakerTileWidth: H, speakerTileHeight: F } = S(l, k),
        G = E ? l - 32 : Math.min(l - 64, 3 * H + 8),
        V = (e) => e === D.length - 1 || (0 === A && 1 === e),
        [z, W] = s.useState(!1),
        [Y, K] = s.useState(!1);
    return (0, r.jsx)(f.Z, {
        sections: B,
        renderSection: (e) => {
            let { section: t } = e;
            if (1 === t)
                return 0 === j
                    ? null
                    : (0, r.jsx)(
                          C.Z,
                          {
                              participantCount: j,
                              label: v.intl.string(v.t.CduOk5),
                              className: _.header,
                              onClick: () => W(!z),
                              collapsed: z,
                              speakers: M,
                              channel: i,
                              isStreamLive: R
                          },
                          'speaker-header-'.concat(t)
                      );
            if (2 === t)
                return 0 === A
                    ? null
                    : (0, r.jsx)(
                          C.Z,
                          {
                              participantCount: A,
                              label: v.intl.string(v.t['3foUu7']),
                              className: _.header,
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
                l = U[t][n];
            if ((null == l ? void 0 : l.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, r.jsx)(
                        'div',
                        {
                            className: _.focusedRow,
                            children: (0, r.jsx)(x.Z, {
                                channel: i,
                                participant: l[0],
                                width: G
                            })
                        },
                        'selected-participant'
                    );
                case 1:
                    if (z) return null;
                    return (0, r.jsx)(
                        s.Fragment,
                        {
                            children: (0, r.jsx)(g.Z, {
                                tileWidth: H,
                                channel: i,
                                participants: l,
                                selectedParticipant: y
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (Y) return null;
                    return (0, r.jsx)(
                        p.Z,
                        {
                            channel: i,
                            participants: l,
                            maxTiles: L
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? G / x.Q + 8 : 1 === e ? (z ? 0 : F) : Y ? 0 : 98),
        renderFooter: (e) => {
            let { section: t } = e;
            return V(t) ? (0, r.jsx)('div', { className: _.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : V(e) ? 88 : 0),
        className: _.scroller,
        chunkSize: 60,
        onScroll: o
    });
});

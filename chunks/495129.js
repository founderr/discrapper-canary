n.d(t, {
    H: function () {
        return A;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(442837),
    r = n(481060),
    o = n(904245),
    c = n(287734),
    d = n(957730),
    u = n(739566),
    _ = n(779125),
    E = n(599706),
    I = n(703656),
    m = n(592125),
    T = n(430824),
    N = n(594174),
    h = n(938475),
    C = n(5192),
    p = n(981631),
    f = n(689938),
    g = n(64182);
function A(e) {
    var t, n, a, A, S, M, x, O, R, v;
    let { message: L, channel: Z } = e,
        P =
            null === (a = L.embeds[0]) || void 0 === a
                ? void 0
                : null === (n = a.fields) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { rawName: t } = e;
                              return 'guild_id' === t;
                          })) || void 0 === t
                    ? void 0
                    : t.rawValue,
        D =
            null === (M = L.embeds[0]) || void 0 === M
                ? void 0
                : null === (S = M.fields) || void 0 === S
                  ? void 0
                  : null ===
                          (A = S.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === A
                    ? void 0
                    : A.rawValue,
        b = (0, l.e7)([T.Z], () => T.Z.getGuild(P)),
        j = (0, l.e7)([m.Z], () => m.Z.getChannel(D)),
        U = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        y = (0, l.e7)([], () => L.author.id === (null == U ? void 0 : U.id)),
        B = null === (x = Z.recipients) || void 0 === x ? void 0 : x.find((e) => e !== L.author.id),
        k = (0, l.e7)([N.default], () => (null != B ? N.default.getUser(B) : null)),
        G = (0, u.ZP)(L),
        F = (0, C._T)(Z.getGuildId(), Z.id, k),
        w = (0, l.Wu)([h.ZP], () => (null != j ? h.ZP.getVoiceStatesForChannel(j) : []), [j]),
        V = w.some((e) => e.user.id === (null == U ? void 0 : U.id)),
        H =
            null === (v = L.embeds[0]) || void 0 === v
                ? void 0
                : null === (R = v.fields) || void 0 === R
                  ? void 0
                  : null ===
                          (O = R.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === O
                    ? void 0
                    : O.rawValue,
        Y = null != H ? H.split(',') : [],
        W = (0, l.Wu)([N.default], () => Y.map((e) => N.default.getUser(e)).filter(Boolean)),
        K = y && null != k ? f.Z.Messages.WAVED_AT_USER.format({ username: F }) : f.Z.Messages.WAVED_AT_YOU.format({ username: G.nick }),
        z = null != b && null != j,
        X = null;
    (X = z ? (y || V ? f.Z.Messages.YOU_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(_.Z, { channel: null != j ? j : void 0 }, t) }) : f.Z.Messages.THEY_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(_.Z, { channel: null != j ? j : void 0 }, t) })) : f.Z.Messages.CANNOT_ACCESS_HANGOUT), 0 === w.length && (X = y ? f.Z.Messages.HANGOUT_OVER_SENDER : f.Z.Messages.HANGOUT_OVER_RECEIVER);
    let Q = y ? f.Z.Messages.WAVE_AGAIN : f.Z.Messages.WAVE_BACK;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: g.card,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: X
                    }),
                    w.length > 0
                        ? (0, i.jsx)('div', {
                              className: g.participants,
                              children: (0, i.jsx)(E.Z, {
                                  guildId: P,
                                  partySize: {
                                      knownSize: w.length,
                                      unknownSize: 0,
                                      totalSize: w.length
                                  },
                                  members: w.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: s()(g.participants, g.disabled),
                              children: (0, i.jsx)(E.Z, {
                                  guildId: P,
                                  partySize: {
                                      knownSize: W.length,
                                      unknownSize: Y.length - W.length,
                                      totalSize: Y.length
                                  },
                                  members: W,
                                  maxAvatarsShown: 5
                              })
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.actions,
                children: [
                    (0, i.jsxs)(r.Button, {
                        color: r.Button.Colors.BRAND,
                        onClick: () => {
                            null != D && null != P && ((0, I.uL)(p.Z5c.CHANNEL(P, D)), c.default.selectVoiceChannel(D));
                        },
                        className: g.button,
                        innerClassName: g.buttonInner,
                        disabled: V || !z,
                        children: [
                            (0, i.jsx)(r.VoiceNormalIcon, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            f.Z.Messages.JOIN_HANGOUT
                        ]
                    }),
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.Z.sendMessage(Z.id, d.ZP.parse(Z, '\uD83D\uDC4B'));
                        },
                        className: g.button,
                        children: Q
                    })
                ]
            })
        ]
    });
}

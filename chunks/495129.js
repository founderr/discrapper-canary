n.d(t, {
    H: function () {
        return S;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(904245),
    c = n(287734),
    u = n(957730),
    d = n(739566),
    _ = n(779125),
    E = n(599706),
    I = n(703656),
    m = n(592125),
    T = n(430824),
    f = n(594174),
    h = n(938475),
    N = n(5192),
    p = n(981631),
    C = n(689938),
    g = n(64182);
function S(e) {
    var t, n, a, S, A, x, R, O, v, M;
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
        b =
            null === (x = L.embeds[0]) || void 0 === x
                ? void 0
                : null === (A = x.fields) || void 0 === A
                  ? void 0
                  : null ===
                          (S = A.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === S
                    ? void 0
                    : S.rawValue,
        D = (0, r.e7)([T.Z], () => T.Z.getGuild(P)),
        j = (0, r.e7)([m.Z], () => m.Z.getChannel(b)),
        U = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        y = (0, r.e7)([], () => L.author.id === (null == U ? void 0 : U.id)),
        B = null === (R = Z.recipients) || void 0 === R ? void 0 : R.find((e) => e !== L.author.id),
        k = (0, r.e7)([f.default], () => (null != B ? f.default.getUser(B) : null)),
        G = (0, d.ZP)(L),
        F = (0, N._T)(Z.getGuildId(), Z.id, k),
        w = (0, r.Wu)([h.ZP], () => (null != j ? h.ZP.getVoiceStatesForChannel(j) : []), [j]),
        V = w.some((e) => e.user.id === (null == U ? void 0 : U.id)),
        H =
            null === (M = L.embeds[0]) || void 0 === M
                ? void 0
                : null === (v = M.fields) || void 0 === v
                  ? void 0
                  : null ===
                          (O = v.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === O
                    ? void 0
                    : O.rawValue,
        Y = null != H ? H.split(',') : [],
        W = (0, r.Wu)([f.default], () => Y.map((e) => f.default.getUser(e)).filter(Boolean)),
        z = y && null != k ? C.Z.Messages.WAVED_AT_USER.format({ username: F }) : C.Z.Messages.WAVED_AT_YOU.format({ username: G.nick }),
        K = null != D && null != j,
        X = null;
    (X = K ? (y || V ? C.Z.Messages.YOU_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(_.Z, { channel: null != j ? j : void 0 }, t) }) : C.Z.Messages.THEY_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(_.Z, { channel: null != j ? j : void 0 }, t) })) : C.Z.Messages.CANNOT_ACCESS_HANGOUT), 0 === w.length && (X = y ? C.Z.Messages.HANGOUT_OVER_SENDER : C.Z.Messages.HANGOUT_OVER_RECEIVER);
    let Q = y ? C.Z.Messages.WAVE_AGAIN : C.Z.Messages.WAVE_BACK;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: g.card,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: z
                    }),
                    (0, i.jsx)(l.Text, {
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
                    (0, i.jsxs)(l.Button, {
                        color: l.Button.Colors.BRAND,
                        onClick: () => {
                            null != b && null != P && ((0, I.uL)(p.Z5c.CHANNEL(P, b)), c.default.selectVoiceChannel(b));
                        },
                        className: g.button,
                        innerClassName: g.buttonInner,
                        disabled: V || !K,
                        children: [
                            (0, i.jsx)(l.VoiceNormalIcon, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            C.Z.Messages.JOIN_HANGOUT
                        ]
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.Z.sendMessage(Z.id, u.ZP.parse(Z, '\uD83D\uDC4B'));
                        },
                        className: g.button,
                        children: Q
                    })
                ]
            })
        ]
    });
}

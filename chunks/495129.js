n.d(t, {
    H: function () {
        return v;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(904245),
    u = n(287734),
    c = n(957730),
    d = n(739566),
    _ = n(779125),
    E = n(599706),
    f = n(703656),
    h = n(592125),
    p = n(430824),
    m = n(594174),
    I = n(938475),
    T = n(5192),
    g = n(981631),
    S = n(689938),
    A = n(64182);
function v(e) {
    var t, n, i, v, N, O, R, C, y, L;
    let { message: b, channel: D } = e,
        M =
            null === (i = b.embeds[0]) || void 0 === i
                ? void 0
                : null === (n = i.fields) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { rawName: t } = e;
                              return 'guild_id' === t;
                          })) || void 0 === t
                    ? void 0
                    : t.rawValue,
        P =
            null === (O = b.embeds[0]) || void 0 === O
                ? void 0
                : null === (N = O.fields) || void 0 === N
                  ? void 0
                  : null ===
                          (v = N.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === v
                    ? void 0
                    : v.rawValue,
        U = (0, o.e7)([p.Z], () => p.Z.getGuild(M)),
        w = (0, o.e7)([h.Z], () => h.Z.getChannel(P)),
        x = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        G = (0, o.e7)([], () => b.author.id === (null == x ? void 0 : x.id)),
        k = null === (R = D.recipients) || void 0 === R ? void 0 : R.find((e) => e !== b.author.id),
        B = (0, o.e7)([m.default], () => (null != k ? m.default.getUser(k) : null)),
        F = (0, d.ZP)(b),
        Z = (0, T._T)(D.getGuildId(), D.id, B),
        V = (0, o.Wu)([I.ZP], () => (null != w ? I.ZP.getVoiceStatesForChannel(w) : []), [w]),
        H = V.some((e) => e.user.id === (null == x ? void 0 : x.id)),
        Y =
            null === (L = b.embeds[0]) || void 0 === L
                ? void 0
                : null === (y = L.fields) || void 0 === y
                  ? void 0
                  : null ===
                          (C = y.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === C
                    ? void 0
                    : C.rawValue,
        j = null != Y ? Y.split(',') : [],
        W = (0, o.Wu)([m.default], () => j.map((e) => m.default.getUser(e)).filter(Boolean)),
        K = G && null != B ? S.Z.Messages.WAVED_AT_USER.format({ username: Z }) : S.Z.Messages.WAVED_AT_YOU.format({ username: F.nick }),
        z = null != U && null != w,
        q = null;
    (q = z ? (G || H ? S.Z.Messages.YOU_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, r.jsx)(_.Z, { channel: null != w ? w : void 0 }, t) }) : S.Z.Messages.THEY_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, r.jsx)(_.Z, { channel: null != w ? w : void 0 }, t) })) : S.Z.Messages.CANNOT_ACCESS_HANGOUT), 0 === V.length && (q = G ? S.Z.Messages.HANGOUT_OVER_SENDER : S.Z.Messages.HANGOUT_OVER_RECEIVER);
    let Q = G ? S.Z.Messages.WAVE_AGAIN : S.Z.Messages.WAVE_BACK;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: A.card,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: q
                    }),
                    V.length > 0
                        ? (0, r.jsx)('div', {
                              className: A.participants,
                              children: (0, r.jsx)(E.Z, {
                                  guildId: M,
                                  partySize: {
                                      knownSize: V.length,
                                      unknownSize: 0,
                                      totalSize: V.length
                                  },
                                  members: V.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, r.jsx)('div', {
                              className: a()(A.participants, A.disabled),
                              children: (0, r.jsx)(E.Z, {
                                  guildId: M,
                                  partySize: {
                                      knownSize: W.length,
                                      unknownSize: j.length - W.length,
                                      totalSize: j.length
                                  },
                                  members: W,
                                  maxAvatarsShown: 5
                              })
                          })
                ]
            }),
            (0, r.jsxs)('div', {
                className: A.actions,
                children: [
                    (0, r.jsxs)(s.Button, {
                        color: s.Button.Colors.BRAND,
                        onClick: () => {
                            null != P && null != M && ((0, f.uL)(g.Z5c.CHANNEL(M, P)), u.default.selectVoiceChannel(P));
                        },
                        className: A.button,
                        innerClassName: A.buttonInner,
                        disabled: H || !z,
                        children: [
                            (0, r.jsx)(s.VoiceNormalIcon, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            S.Z.Messages.JOIN_HANGOUT
                        ]
                    }),
                    (0, r.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        onClick: () => {
                            l.Z.sendMessage(D.id, c.ZP.parse(D, '\uD83D\uDC4B'));
                        },
                        className: A.button,
                        children: Q
                    })
                ]
            })
        ]
    });
}

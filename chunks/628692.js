r.d(n, {
    ku: function () {
        return O;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(399606),
    c = r(481060),
    d = r(596454),
    f = r(722932),
    _ = r(125900),
    h = r(801606),
    p = r(409700),
    m = r(135869),
    g = r(763296),
    E = r(697426),
    v = r(22382),
    I = r(747071),
    T = r(409673),
    b = r(695346),
    y = r(592125),
    S = r(626135),
    A = r(981631),
    N = r(388032),
    C = r(205659);
function R(e) {
    let { playSound: n } = e;
    return (0, a.jsxs)(c.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: n,
        className: C.inlineContainer,
        children: [
            (0, a.jsx)(c.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: C.unknownSound
            }),
            (0, a.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function O(e) {
    let { soundId: n } = e,
        r = (0, u.e7)([g.Z], () => g.Z.getSoundById(n));
    return (0, _.V2)({ location: 'SoundboardMentionInline' }) ? (null == r ? (0, a.jsx)(R, {}) : (0, a.jsx)(D, { sound: r })) : null;
}
function D(e) {
    let { sound: n, playSound: r, isPlaying: i } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        o = N.intl.formatToPlainString(N.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, f.X0)({ location: 'SoundboardMentionInline' })
        ? (0, a.jsxs)(c.Clickable, {
              'aria-label': o,
              tag: 'span',
              onClick: r,
              className: l()(C.inlineContainer, C.inlineButton, { [C.playing]: !0 === i }),
              children: [
                  s &&
                      (0, a.jsx)(d.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: C.soundmojiEmoji
                      }),
                  (0, a.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
function L(e) {
    let { channelId: n, messageId: r, soundId: i, jumbo: o = !1 } = e,
        l = b.jU.useSetting(),
        { currentPreviewRef: d } = s.useContext(m.Z),
        _ = (0, u.e7)([g.Z], () => g.Z.getSoundById(i), [i]),
        N = s.useMemo(() => {
            var e;
            return null !== (e = (0, h.Z)(n, r, i)) && void 0 !== e ? e : _;
        }, [n, r, i, _]),
        O = (0, u.e7)([y.Z], () => y.Z.getChannel(n)),
        [L, x] = s.useState(!1),
        w = (0, f.X0)({ location: 'SoundboardMention' }),
        P = s.useRef(null),
        M = s.useCallback(() => {
            var e, r;
            let a = new Audio((0, v.Z)(i));
            null != d.current && d.current.pause(),
                (d.current = a),
                (a.currentTime = 0),
                (a.volume = (0, I.Z)(null !== (r = null == N ? void 0 : N.volume) && void 0 !== r ? r : 1, b.AY.getSetting())),
                S.default.track(A.rMx.SOUNDMOJI_PLAY, {
                    guild_id: null == O ? void 0 : O.guild_id,
                    channel_id: n,
                    sound_guild_id: null == N ? void 0 : N.guildId,
                    sound_id: null == N ? void 0 : N.soundId
                }),
                a.play(),
                null === (e = P.current) || void 0 === e || e.addAnimation(),
                (a.onplay = () => x(!0)),
                (a.onpause = () => x(!1)),
                (a.onended = () => x(!1));
        }, [null == O ? void 0 : O.guild_id, n, i, N, d, x]);
    return w
        ? null == N
            ? (0, a.jsx)(R, { playSound: M })
            : o && !l
              ? (0, a.jsx)(
                    T.ZP,
                    {
                        containerClassName: C.jumboContainer,
                        className: C.jumboButton,
                        sound: N,
                        channel: O,
                        refreshEnabled: !0,
                        onSelectItem: M,
                        isPlayingSoundOverride: L,
                        isSoundmoji: !0,
                        buttonOverlay: E.Pb.SOUNDMOJI,
                        tooltipClassName: C.tooltip,
                        tooltipContentClassName: C.tooltipContainer,
                        tooltipOverride: (0, a.jsx)(p.Dp, { sound: N }),
                        soundmojiVisualEffectRef: P
                    },
                    ''.concat(N.soundId)
                )
              : (0, a.jsx)(c.Tooltip, {
                    'aria-label': N.name,
                    text: (0, a.jsx)(p.Dp, { sound: N }),
                    tooltipClassName: C.tooltip,
                    tooltipContentClassName: C.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, a.jsx)('span', {
                            ...e,
                            children: (0, a.jsx)(D, {
                                sound: N,
                                playSound: M,
                                isPlaying: L
                            })
                        })
                })
        : null;
}
n.ZP = L;

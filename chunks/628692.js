n.d(t, {
    ku: function () {
        return T;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(481060),
    u = n(596454),
    c = n(722932),
    d = n(125900),
    f = n(801606),
    _ = n(135869),
    p = n(763296),
    h = n(697426),
    m = n(22382),
    g = n(747071),
    E = n(409673),
    v = n(592125),
    I = n(388032),
    b = n(42693);
function S(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: b.inlineContainer,
        children: [
            (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: b.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function T(e) {
    let { soundId: t } = e,
        n = (0, o.e7)([p.Z], () => p.Z.getSoundById(t));
    return (0, d.V)({ location: 'SoundboardMentionInline' }) ? (null == n ? (0, r.jsx)(S, {}) : (0, r.jsx)(y, { sound: n })) : null;
}
function y(e) {
    let { sound: t, playSound: n, isPlaying: i } = e,
        a = (null == t ? void 0 : t.emojiId) != null || (null == t ? void 0 : t.emojiName) != null,
        o = I.intl.formatToPlainString(I.t.tuMUJy, {
            emojiName: null == t ? void 0 : t.emojiName,
            soundName: null == t ? void 0 : t.name
        });
    return (0, c.X0)({ location: 'SoundboardMentionInline' })
        ? (0, r.jsxs)(l.Clickable, {
              'aria-label': o,
              tag: 'span',
              onClick: n,
              className: s()(b.inlineContainer, b.inlineButton, { [b.playing]: !0 === i }),
              children: [
                  a &&
                      (0, r.jsx)(u.Z, {
                          emojiId: null == t ? void 0 : t.emojiId,
                          emojiName: null == t ? void 0 : t.emojiName,
                          className: b.soundmojiEmoji
                      }),
                  (0, r.jsx)('span', { children: ' '.concat(null == t ? void 0 : t.name, ' ') })
              ]
          })
        : null;
}
t.ZP = function (e) {
    let { channelId: t, messageId: n, soundId: a, jumbo: s = !1 } = e,
        { currentPreviewRef: l } = i.useContext(_.Z),
        u = (0, o.e7)(
            [p.Z],
            () => {
                var e;
                return null !== (e = p.Z.getSoundById(a)) && void 0 !== e ? e : (0, f.Z)(t, n, a);
            },
            [t, n, a]
        ),
        d = (0, o.e7)([v.Z], () => v.Z.getChannel(t)),
        [I, T] = i.useState(!1),
        A = (0, c.X0)({ location: 'SoundboardMention' }),
        N = i.useCallback(() => {
            var e;
            let t = new Audio((0, m.Z)(a));
            null != l.current && l.current.pause(), (l.current = t), (t.currentTime = 0), (t.volume = (0, g.Z)(null !== (e = null == u ? void 0 : u.volume) && void 0 !== e ? e : 1)), t.play(), (t.onplay = () => T(!0)), (t.onpause = () => T(!1)), (t.onended = () => T(!1));
        }, [a, u, l, T]);
    return A
        ? null == u
            ? (0, r.jsx)(S, { playSound: N })
            : s
              ? (0, r.jsx)(
                    E.ZP,
                    {
                        containerClassName: b.jumboContainer,
                        className: b.jumboButton,
                        sound: u,
                        channel: d,
                        refreshEnabled: !0,
                        onSelectItem: N,
                        isPlayingSoundOverride: I,
                        isAnimated: !1,
                        isSoundmoji: !0,
                        buttonOverlay: h.Pb.SOUNDMOJI
                    },
                    ''.concat(u.soundId)
                )
              : (0, r.jsx)(y, {
                    sound: u,
                    playSound: N,
                    isPlaying: I
                })
        : null;
};

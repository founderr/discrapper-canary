r.d(n, {
    ku: function () {
        return C;
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
    S = r(388032),
    A = r(205659);
function N(e) {
    let { playSound: n } = e;
    return (0, a.jsxs)(c.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: n,
        className: A.inlineContainer,
        children: [
            (0, a.jsx)(c.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: A.unknownSound
            }),
            (0, a.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function C(e) {
    let { soundId: n } = e,
        r = (0, u.e7)([g.Z], () => g.Z.getSoundById(n));
    return (0, _.V2)({ location: 'SoundboardMentionInline' }) ? (null == r ? (0, a.jsx)(N, {}) : (0, a.jsx)(R, { sound: r })) : null;
}
function R(e) {
    let { sound: n, playSound: r, isPlaying: i } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        o = S.intl.formatToPlainString(S.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, f.X0)({ location: 'SoundboardMentionInline' })
        ? (0, a.jsxs)(c.Clickable, {
              'aria-label': o,
              tag: 'span',
              onClick: r,
              className: l()(A.inlineContainer, A.inlineButton, { [A.playing]: !0 === i }),
              children: [
                  s &&
                      (0, a.jsx)(d.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: A.soundmojiEmoji
                      }),
                  (0, a.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
function O(e) {
    let { channelId: n, messageId: r, soundId: i, jumbo: o = !1 } = e,
        l = b.jU.useSetting(),
        { currentPreviewRef: d } = s.useContext(m.Z),
        _ = (0, u.e7)([g.Z], () => g.Z.getSoundById(i), [i]),
        S = s.useMemo(() => {
            var e;
            return null !== (e = (0, h.Z)(n, r, i)) && void 0 !== e ? e : _;
        }, [n, r, i, _]),
        C = (0, u.e7)([y.Z], () => y.Z.getChannel(n)),
        [O, D] = s.useState(!1),
        L = (0, f.X0)({ location: 'SoundboardMention' }),
        x = s.useRef(null),
        w = s.useCallback(() => {
            var e, n;
            let r = new Audio((0, v.Z)(i));
            null != d.current && d.current.pause(), (d.current = r), (r.currentTime = 0), (r.volume = (0, I.Z)(null !== (n = null == S ? void 0 : S.volume) && void 0 !== n ? n : 1, b.AY.getSetting())), r.play(), null === (e = x.current) || void 0 === e || e.addAnimation(), (r.onplay = () => D(!0)), (r.onpause = () => D(!1)), (r.onended = () => D(!1));
        }, [i, S, d, D]);
    return L
        ? null == S
            ? (0, a.jsx)(N, { playSound: w })
            : o && !l
              ? (0, a.jsx)(
                    T.ZP,
                    {
                        containerClassName: A.jumboContainer,
                        className: A.jumboButton,
                        sound: S,
                        channel: C,
                        refreshEnabled: !0,
                        onSelectItem: w,
                        isPlayingSoundOverride: O,
                        isSoundmoji: !0,
                        buttonOverlay: E.Pb.SOUNDMOJI,
                        tooltipClassName: A.tooltip,
                        tooltipContentClassName: A.tooltipContainer,
                        tooltipOverride: (0, a.jsx)(p.Dp, { sound: S }),
                        soundmojiVisualEffectRef: x
                    },
                    ''.concat(S.soundId)
                )
              : (0, a.jsx)(c.Tooltip, {
                    'aria-label': S.name,
                    text: (0, a.jsx)(p.Dp, { sound: S }),
                    tooltipClassName: A.tooltip,
                    tooltipContentClassName: A.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, a.jsx)('span', {
                            ...e,
                            children: (0, a.jsx)(R, {
                                sound: S,
                                playSound: w,
                                isPlaying: O
                            })
                        })
                })
        : null;
}
n.ZP = O;

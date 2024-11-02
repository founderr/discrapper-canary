n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(481060),
    u = n(596454),
    c = n(315744),
    d = n(208049),
    f = n(135869),
    _ = n(763296),
    h = n(22382),
    p = n(747071),
    m = n(42693);
t.Z = function (e) {
    let { soundId: t, jumbo: n = !1 } = e,
        { currentPreviewRef: a } = i.useContext(f.Z),
        g = (0, o.e7)([_.Z], () => _.Z.getSoundById(t)),
        E = (null == g ? void 0 : g.emojiId) != null || (null == g ? void 0 : g.emojiName) != null,
        [v, I] = i.useState(!1),
        S = (0, c.P)('soundmoji_chat_mention'),
        T = i.useCallback(() => {
            var e;
            null == g && (0, d.w)();
            let n = new Audio((0, h.Z)(t));
            null != a.current && a.current.pause(),
                (a.current = n),
                (n.currentTime = 0),
                (n.volume = (0, p.Z)(null !== (e = null == g ? void 0 : g.volume) && void 0 !== e ? e : 0.5)),
                I(!0),
                n.play(),
                n.addEventListener(
                    'ended',
                    () => {
                        I(!1);
                    },
                    { once: !0 }
                );
        }, [t, g, a, I]);
    return S
        ? null == g
            ? (0, r.jsxs)(l.Clickable, {
                  title: 'Risky Click',
                  tag: 'span',
                  onClick: T,
                  className: m.container,
                  children: [
                      (0, r.jsx)(l.VoiceNormalIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.unknownSound
                      }),
                      (0, r.jsx)(l.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'none',
                          className: m.text,
                          children: 'Unknown'
                      })
                  ]
              })
            : n
              ? (0, r.jsxs)(l.Clickable, {
                    onClick: T,
                    className: m.jumboContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: s()(m.jumboOverlay, { [m.playing]: v }),
                            children: (0, r.jsx)(l.CirclePlayIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.__invalid_jumboPlayIcon
                            })
                        }),
                        E &&
                            (0, r.jsx)(u.Z, {
                                emojiId: null == g ? void 0 : g.emojiId,
                                emojiName: null == g ? void 0 : g.emojiName,
                                className: m.jumboEmoji
                            }),
                        (0, r.jsx)(l.Text, {
                            tag: 'span',
                            variant: 'text-lg/normal',
                            color: 'none',
                            className: m.text,
                            children: g.name
                        })
                    ]
                })
              : (0, r.jsxs)(l.Clickable, {
                    tag: 'span',
                    onClick: T,
                    className: m.container,
                    children: [
                        E &&
                            (0, r.jsx)(u.Z, {
                                emojiId: null == g ? void 0 : g.emojiId,
                                emojiName: null == g ? void 0 : g.emojiName,
                                className: m.emoji
                            }),
                        (0, r.jsx)(l.Text, {
                            tag: 'span',
                            variant: 'text-md/normal',
                            color: 'none',
                            className: m.text,
                            children: g.name
                        })
                    ]
                })
        : null;
};

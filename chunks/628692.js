var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(399606),
    u = n(481060),
    c = n(596454),
    d = n(315744),
    _ = n(208049),
    E = n(135869),
    f = n(763296),
    h = n(22382),
    p = n(747071),
    m = n(42693);
function I(e) {
    let { soundId: t, jumbo: n = !1 } = e,
        { currentPreviewRef: r } = a.useContext(E.Z),
        o = (0, l.e7)([f.Z], () => f.Z.getSoundById(t)),
        I = (null == o ? void 0 : o.emojiId) != null || (null == o ? void 0 : o.emojiName) != null,
        [T, g] = a.useState(!1),
        S = (0, d.P)('soundmoji_chat_mention'),
        A = a.useCallback(() => {
            var e;
            null == o && (0, _.w)();
            let n = new Audio((0, h.Z)(t));
            null != r.current && r.current.pause(),
                (r.current = n),
                (n.currentTime = 0),
                (n.volume = (0, p.Z)(null !== (e = null == o ? void 0 : o.volume) && void 0 !== e ? e : 0.5)),
                g(!0),
                n.play(),
                n.addEventListener(
                    'ended',
                    () => {
                        g(!1);
                    },
                    { once: !0 }
                );
        }, [t, o, r, g]);
    return S
        ? null == o
            ? (0, i.jsxs)(u.Clickable, {
                  title: 'Risky Click',
                  tag: 'span',
                  onClick: A,
                  className: m.container,
                  children: [
                      (0, i.jsx)(u.VoiceNormalIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.unknownSound
                      }),
                      (0, i.jsx)(u.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'none',
                          className: m.text,
                          children: 'Unknown'
                      })
                  ]
              })
            : n
              ? (0, i.jsxs)(u.Clickable, {
                    onClick: A,
                    className: m.jumboContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(m.jumboOverlay, { [m.playing]: T }),
                            children: (0, i.jsx)(u.CirclePlayIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.__invalid_jumboPlayIcon
                            })
                        }),
                        I &&
                            (0, i.jsx)(c.Z, {
                                emojiId: null == o ? void 0 : o.emojiId,
                                emojiName: null == o ? void 0 : o.emojiName,
                                className: m.jumboEmoji
                            }),
                        (0, i.jsx)(u.Text, {
                            tag: 'span',
                            variant: 'text-lg/normal',
                            color: 'none',
                            className: m.text,
                            children: o.name
                        })
                    ]
                })
              : (0, i.jsxs)(u.Clickable, {
                    tag: 'span',
                    onClick: A,
                    className: m.container,
                    children: [
                        I &&
                            (0, i.jsx)(c.Z, {
                                emojiId: null == o ? void 0 : o.emojiId,
                                emojiName: null == o ? void 0 : o.emojiName,
                                className: m.emoji
                            }),
                        (0, i.jsx)(u.Text, {
                            tag: 'span',
                            variant: 'text-md/normal',
                            color: 'none',
                            className: m.text,
                            children: o.name
                        })
                    ]
                })
        : null;
}
t.Z = I;

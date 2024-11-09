t.r(n),
    t.d(n, {
        default: function () {
            return I;
        }
    }),
    t(47120),
    t(411104);
var l,
    a,
    i = t(200651),
    r = t(192379),
    s = t(120356),
    u = t.n(s),
    o = t(512722),
    c = t.n(o),
    d = t(481060),
    f = t(479531),
    m = t(349709),
    h = t(763610),
    g = t(626135),
    p = t(208049),
    v = t(671895),
    x = t(586826),
    N = t(812613),
    y = t(203437),
    b = t(710111),
    j = t(981631),
    C = t(388032),
    w = t(274362);
((a = l || (l = {})).READY = 'ready'), (a.ENCODING_FAILED = 'encoding-failed'), (a.ENCODING = 'encoding'), (a.UPLOADING = 'uploading');
let S = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'x-wav', 'mp4']
    }
];
function I(e) {
    var n, t, l, a;
    let { guildId: s, sourceFile: o, existingSound: I, onClose: E, transitionState: M, showGuildPicker: Z = !1 } = e,
        [T, _] = r.useState(null !== (t = null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null == I ? void 0 : I.name) && void 0 !== t ? t : ''),
        [k, P] = r.useState(null !== (l = null == I ? void 0 : I.volume) && void 0 !== l ? l : 1),
        [R, F] = r.useState(null == I ? void 0 : I.emojiId),
        [O, D] = r.useState(null == I ? void 0 : I.emojiName),
        { file: A, loadAudioFromFile: B, maxVolume: L, setMaxVolume: U } = (0, x.p)(),
        [G, z] = r.useState(!1),
        [H, V] = r.useState(null),
        [Y, q] = r.useState(null),
        [W, J] = r.useState('ready'),
        [K, X] = r.useState(s);
    async function Q(e) {
        try {
            await B(null != e ? e : null), J('ready'), V(null);
        } catch (e) {
            $(e);
        }
    }
    function $(e) {
        if (e instanceof f.Z) V(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message }
            };
            V(new f.Z(n));
        } else V(new f.Z(e));
    }
    r.useEffect(() => {
        if ((null == o ? void 0 : o.file) != null)
            (async function e(e) {
                try {
                    await B(e), J('ready'), V(null);
                } catch (e) {
                    $(e);
                }
            })(o.file);
    }, [null == o ? void 0 : o.file, B]);
    let ee = (function (e) {
            switch (e) {
                case 'encoding':
                    return C.intl.string(C.t['4IMMdH']);
                case 'encoding-failed':
                    return C.intl.string(C.t.Ka29xs);
                case 'uploading':
                    return C.intl.string(C.t.ndr58f);
            }
            return null;
        })(W),
        en = 'uploading' === W || 'encoding' === W,
        et = null != I,
        el =
            T.length >= 2 &&
            (et || null != A) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= b.YW;
            })(Y),
        ea = r.useCallback(async (e, n) => {
            J('encoding');
            try {
                let t = await (0, N.kV)(e, n);
                return J('ready'), t;
            } catch (e) {
                throw (J('encoding-failed'), e);
            }
        }, []),
        ei = r.useCallback(async () => {
            if (null == A) return;
            c()(null != K, 'Cannot submit soundboard sound with no guildId');
            let e = A;
            if (null != Y) {
                let n = await ea(A, Y);
                if (null == n) return;
                e = n;
            }
            let n = (0, N.Zk)(e);
            J('uploading');
            try {
                await (0, N.bb)({
                    readPromise: n,
                    guildId: K,
                    name: T,
                    volume: k,
                    emojiId: R,
                    emojiName: O
                }),
                    J('ready');
            } catch (e) {
                throw new f.Z(e);
            }
        }, [A, K, T, ea, Y, k, R, O]),
        er = r.useCallback(async () => {
            c()(null != K, 'Cannot submit soundboard sound with no guildId'), z(!0), V(null);
            try {
                et
                    ? await (0, p.$d)({
                          guildId: K,
                          soundId: I.soundId,
                          name: T,
                          volume: k,
                          emojiId: R,
                          emojiName: O
                      })
                    : await ei(),
                    E();
            } catch (e) {
                $(e);
            } finally {
                J('ready'), z(!1), P(1), U(1);
            }
        }, [et, E, K, I, T, k, R, O, ei, U]);
    r.useEffect(() => {
        B(null),
            g.default.track(j.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: K
            });
    }, []),
        r.useEffect(() => {
            P(Math.min(k, L));
        }, [k, P, L]);
    let es = (0, i.jsx)(m.Z, {
        guildId: K,
        emojiId: R,
        emojiName: O,
        setEmojiId: F,
        setEmojiName: D,
        error: null == H ? void 0 : H.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, i.jsxs)(d.ModalRoot, {
        transitionState: M,
        children: [
            (0, i.jsx)(d.ModalCloseButton, {
                onClick: E,
                className: w.modalClose
            }),
            (0, i.jsx)(d.ModalHeader, {
                className: w.headerContainer,
                separator: !1,
                children: (0, i.jsx)(d.Heading, {
                    className: w.header,
                    variant: 'heading-xl/extrabold',
                    children: et ? C.intl.string(C.t.HmsZGR) : C.intl.string(C.t['ioD/9P'])
                })
            }),
            (0, i.jsxs)(d.ModalContent, {
                className: w.__invalid_content,
                children: [
                    null != H &&
                        !H.hasFieldErrors() &&
                        (0, i.jsx)(d.FormErrorBlock, {
                            className: w.section,
                            children: H.message
                        }),
                    Z
                        ? (0, i.jsx)(d.FormItem, {
                              required: !0,
                              className: w.section,
                              title: C.intl.string(C.t.UYt7iY),
                              children: (0, i.jsx)(y.Z, {
                                  value: K,
                                  onChange: X
                              })
                          })
                        : null,
                    (et || null != A) &&
                        (0, i.jsx)(v.Z, {
                            sound: I,
                            volume: k,
                            disabled: en,
                            onChange: q
                        }),
                    et || null != o
                        ? null
                        : (0, i.jsx)(d.FormItem, {
                              required: !0,
                              error: null == H ? void 0 : H.getFirstFieldErrorMessage('sound'),
                              className: w.section,
                              title: C.intl.string(C.t.sSHaGx),
                              children: (0, i.jsx)(h.Z, {
                                  filename: null !== (a = null == A ? void 0 : A.name) && void 0 !== a ? a : '',
                                  buttonText: C.intl.string(C.t.zpi3XF),
                                  placeholder: C.intl.string(C.t['x+YULy']),
                                  onFileSelect: Q,
                                  filters: S
                              })
                          }),
                    (0, i.jsxs)('div', {
                        className: w.multiInput,
                        children: [
                            (0, i.jsx)(d.FormItem, {
                                required: !0,
                                error: null == H ? void 0 : H.getFirstFieldErrorMessage('name'),
                                className: u()(w.section, w.halfInput),
                                title: C.intl.string(C.t.NpJGaG),
                                children: (0, i.jsx)(d.TextInput, {
                                    placeholder: C.intl.string(C.t.NpJGaG),
                                    value: T,
                                    onChange: _,
                                    maxLength: b.Ek
                                })
                            }),
                            es
                        ]
                    }),
                    (0, i.jsx)(d.FormItem, {
                        error: null == H ? void 0 : H.getFirstFieldErrorMessage('volume'),
                        className: w.section,
                        title: C.intl.string(C.t['3CJlb2']),
                        children: (0, i.jsx)(d.Slider, {
                            initialValue: k,
                            onValueChange: (e) => P(e),
                            minValue: 0,
                            maxValue: L
                        })
                    })
                ]
            }),
            (0, i.jsxs)(d.ModalFooter, {
                children: [
                    (0, i.jsx)(d.Button, {
                        disabled: !el,
                        submitting: G,
                        size: d.Button.Sizes.SMALL,
                        onClick: er,
                        children: et ? C.intl.string(C.t['bZY17+']) : C.intl.string(C.t.RGJbYG)
                    }),
                    (0, i.jsx)(d.Button, {
                        disabled: G,
                        onClick: E,
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.LINK,
                        color: d.Button.Colors.PRIMARY,
                        children: C.intl.string(C.t.Khpixc)
                    }),
                    null != ee &&
                        (0, i.jsx)('div', {
                            className: w.soundStateHint,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: ee
                            })
                        })
                ]
            })
        ]
    });
}

n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120),
    n(411104),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(446411),
    u = n(468846),
    _ = n(313201),
    E = n(70097),
    h = n(605236),
    m = n(524444),
    I = n(626135),
    p = n(960048),
    g = n(565216),
    T = n(981631),
    f = n(921944),
    S = n(689938),
    C = n(67037);
let N = [],
    A = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(o.TextBadge, {
            className: r()(C.tag, n),
            text: t
        });
    },
    v = (e) => {
        let { header: t, subHeader: n, imageSrc: a, tagText: s, wideStyle: l } = e;
        return (0, i.jsxs)('div', {
            className: r()(C.featureCard, { [C.wideStyle]: l }),
            children: [
                null != s
                    ? (0, i.jsx)(A, {
                          tagText: s,
                          className: C.featureCardTag
                      })
                    : null,
                (0, i.jsx)('img', {
                    alt: '',
                    className: r()(C.featureCardImg, { [C.wideStyle]: l }),
                    src: a
                }),
                (0, i.jsxs)('div', {
                    className: C.featureCardTextGroup,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-md/extrabold',
                            className: C.featureCardTextHeader,
                            children: t
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                    ]
                })
            ]
        });
    };
function Z(e) {
    let { className: t, renderModalProps: n, heroArt: s, heroArtClassName: A, modalDismissibleContent: Z, modalTopExtra: L, header: R, headerClassName: O, subHeader: x, subHeaderExtra: b, featureCards: M, changeLogId: P, button: D, body: y } = e,
        { onClose: j, transitionState: U } = n,
        G = (0, _.Dt)(),
        w = M.length % 2 == 0,
        k = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [B, V] = a.useState(Date.now()),
        [H, F] = a.useState(0),
        [Y, z] = a.useState(0),
        [W, K] = a.useState(!1),
        [q, Q] = a.useState(!0),
        X = a.useRef(B),
        J = a.useRef(H),
        $ = a.useRef(Y),
        ee = a.useRef(W),
        et = a.useRef(q),
        [en, ei] = a.useState(N),
        ea = a.useRef(!1);
    function es() {
        let e = Date.now(),
            t = e - X.current,
            n = J.current,
            i = $.current;
        return ee.current && (F((n += t)), !et.current && z((i += t))), V(e), [n, i];
    }
    return (
        a.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ('video' !== s.type || null == s.subtitles) return;
                    let t =
                        null === (e = s.subtitles) || void 0 === e
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error('Failed to fetch the subtitle file '.concat(e.src));
                                  let n = await t.text(),
                                      i = new Blob([n], { type: 'text/vtt' }),
                                      a = URL.createObjectURL(i);
                                  return {
                                      ...e,
                                      src: a
                                  };
                              });
                    ei(await Promise.all(t));
                } catch (e) {
                    p.Z.captureException(e), ei(N);
                }
            };
            !0 !== ea.current && e(), (ea.current = !0);
        }, [s, en]),
        a.useEffect(
            () => () => {
                null != en &&
                    en.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [en]
        ),
        a.useEffect(() => {
            (X.current = B), (J.current = H), ($.current = Y), (ee.current = W), (et.current = q);
        }, [B, H, Y, W, q]),
        a.useEffect(
            () => () => {
                if ('video' === s.type || 'embed' === s.type) {
                    let [e, t] = es();
                    I.default.track(T.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: P,
                        seconds_played: Math.round(e / 1000)
                    }),
                        I.default.track(T.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: P,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [P, s.type]
        ),
        a.useEffect(() => {
            null != Z && (0, h.kk)(Z);
            let e = Date.now();
            return (
                I.default.track(T.rMx.CHANGE_LOG_OPENED, { change_log_id: P }),
                () => {
                    I.default.track(T.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: P,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != Z && (0, h.EW)(Z, { dismissAction: f.L.DISMISS });
                }
            );
        }, [Z, P]),
        (0, i.jsxs)(o.ModalRoot, {
            className: r()(C.root, t),
            transitionState: U,
            'aria-labelledby': G,
            children: [
                (0, i.jsx)(o.ModalCloseButton, {
                    className: C.closeButton,
                    onClick: j
                }),
                (0, i.jsx)(g.Z, { className: C.splash }),
                null == L ? void 0 : L(),
                (0, i.jsxs)(o.ModalContent, {
                    className: C.content,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'display-md',
                            className: r()(C.headerText, O),
                            children: R
                        }),
                        'video' === s.type
                            ? (0, i.jsx)(E.Z, {
                                  className: r()(C.video, A),
                                  autoPlay: !k,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: s.src,
                                  poster: s.poster,
                                  onPlay: (e) => {
                                      I.default.track(T.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: P }), V(Date.now()), K(!0), Q(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      es(), Q(e.currentTarget.muted), K(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      es(), Q(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      es(), Q(e.currentTarget.muted), K(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == en
                                          ? void 0
                                          : en.map((e) => {
                                                let t = S.Z.getLanguages().find((t) => t.code === e.locale);
                                                return null == t
                                                    ? null
                                                    : (0, i.jsx)(
                                                          'track',
                                                          {
                                                              label: t.englishName,
                                                              kind: 'captions',
                                                              srcLang: t.code,
                                                              src: e.src,
                                                              default: e.isDefault
                                                          },
                                                          e.locale
                                                      );
                                            })
                              })
                            : 'embed' === s.type
                              ? (0, i.jsx)(d.BC, {
                                    className: r()(C.video, A),
                                    allowFullScreen: !1,
                                    href: s.href,
                                    thumbnail: s.thumbnail,
                                    video: s.embed,
                                    provider: u.pn.YOUTUBE,
                                    maxWidth: s.embed.width,
                                    maxHeight: s.embed.height,
                                    renderVideoComponent: m.lV,
                                    renderImageComponent: m.Yi,
                                    renderLinkComponent: m.iT,
                                    renderForwardComponent: T.VqG,
                                    onPlay: () => {
                                        I.default.track(T.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: P });
                                    }
                                })
                              : 'image' === s.type
                                ? (0, i.jsx)('img', {
                                      alt: '',
                                      className: r()(C.video, A),
                                      src: s.src
                                  })
                                : null,
                        (0, i.jsxs)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            className: C.subHeader,
                            children: [x, null == b ? void 0 : b()]
                        }),
                        null != y &&
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/medium',
                                className: C.bodyText,
                                children: y
                            }),
                        (0, i.jsx)('div', {
                            className: r()(C.featureCardGroup, { [C.wideStyle]: w }),
                            children: M.map((e, t) =>
                                (0, i.jsx)(
                                    v,
                                    {
                                        ...e,
                                        wideStyle: w
                                    },
                                    ''.concat(e.header, '_').concat(t)
                                )
                            )
                        }),
                        D()
                    ]
                })
            ]
        })
    );
}

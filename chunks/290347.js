a.d(t, {
    Z: function () {
        return T;
    }
}),
    a(47120),
    a(411104),
    a(315314),
    a(610138),
    a(216116),
    a(78328),
    a(815648);
var r = a(735250),
    s = a(470079),
    n = a(120356),
    o = a.n(n),
    l = a(442837),
    c = a(481060),
    d = a(607070),
    u = a(446411),
    i = a(468846),
    _ = a(313201),
    f = a(70097),
    h = a(605236),
    g = a(524444),
    m = a(626135),
    N = a(960048),
    E = a(565216),
    p = a(981631),
    C = a(921944),
    O = a(689938),
    x = a(67037);
let A = [],
    M = (e) => {
        let { tagText: t, className: a } = e;
        return (0, r.jsx)(c.TextBadge, {
            className: o()(x.tag, a),
            text: t
        });
    },
    b = (e) => {
        let { header: t, subHeader: a, imageSrc: s, tagText: n, wideStyle: l } = e;
        return (0, r.jsxs)('div', {
            className: o()(x.featureCard, { [x.wideStyle]: l }),
            children: [
                null != n
                    ? (0, r.jsx)(M, {
                          tagText: n,
                          className: x.featureCardTag
                      })
                    : null,
                (0, r.jsx)('img', {
                    alt: '',
                    className: o()(x.featureCardImg, { [x.wideStyle]: l }),
                    src: s
                }),
                (0, r.jsxs)('div', {
                    className: x.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/extrabold',
                            className: x.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: a
                        })
                    ]
                })
            ]
        });
    };
function T(e) {
    let { className: t, renderModalProps: a, heroArt: n, heroArtClassName: M, modalDismissibleContent: T, modalTopExtra: D, header: y, headerClassName: R, subHeader: v, subHeaderExtra: B, featureCards: L, changeLogId: G, button: S, body: H } = e,
        { onClose: j, transitionState: w } = a,
        I = (0, _.Dt)(),
        U = L.length % 2 == 0,
        Z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [k, P] = s.useState(Date.now()),
        [V, Y] = s.useState(0),
        [z, W] = s.useState(0),
        [F, q] = s.useState(!1),
        [K, X] = s.useState(!0),
        Q = s.useRef(k),
        J = s.useRef(V),
        $ = s.useRef(z),
        ee = s.useRef(F),
        et = s.useRef(K),
        [ea, er] = s.useState(A),
        es = s.useRef(!1);
    function en() {
        let e = Date.now(),
            t = e - Q.current,
            a = J.current,
            r = $.current;
        return ee.current && (Y((a += t)), !et.current && W((r += t))), P(e), [a, r];
    }
    return (
        s.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ('video' !== n.type || null == n.subtitles) return;
                    let t =
                        null === (e = n.subtitles) || void 0 === e
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error('Failed to fetch the subtitle file '.concat(e.src));
                                  let a = await t.text(),
                                      r = new Blob([a], { type: 'text/vtt' }),
                                      s = URL.createObjectURL(r);
                                  return {
                                      ...e,
                                      src: s
                                  };
                              });
                    er(await Promise.all(t));
                } catch (e) {
                    N.Z.captureException(e), er(A);
                }
            };
            !0 !== es.current && e(), (es.current = !0);
        }, [n, ea]),
        s.useEffect(
            () => () => {
                null != ea &&
                    ea.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ea]
        ),
        s.useEffect(() => {
            (Q.current = k), (J.current = V), ($.current = z), (ee.current = F), (et.current = K);
        }, [k, V, z, F, K]),
        s.useEffect(
            () => () => {
                if ('video' === n.type || 'embed' === n.type) {
                    let [e, t] = en();
                    m.default.track(p.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: G,
                        seconds_played: Math.round(e / 1000)
                    }),
                        m.default.track(p.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: G,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [G, n.type]
        ),
        s.useEffect(() => {
            null != T && (0, h.kk)(T);
            let e = Date.now();
            return (
                m.default.track(p.rMx.CHANGE_LOG_OPENED, { change_log_id: G }),
                () => {
                    m.default.track(p.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: G,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != T && (0, h.EW)(T, { dismissAction: C.L.DISMISS });
                }
            );
        }, [T, G]),
        (0, r.jsxs)(c.ModalRoot, {
            className: o()(x.root, t),
            transitionState: w,
            'aria-labelledby': I,
            children: [
                (0, r.jsx)(c.ModalCloseButton, {
                    className: x.closeButton,
                    onClick: j
                }),
                (0, r.jsx)(E.Z, { className: x.splash }),
                null == D ? void 0 : D(),
                (0, r.jsxs)(c.ModalContent, {
                    className: x.content,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'display-md',
                            className: o()(x.headerText, R),
                            children: y
                        }),
                        'video' === n.type
                            ? (0, r.jsx)(f.Z, {
                                  className: o()(x.video, M),
                                  autoPlay: !Z,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: n.src,
                                  poster: n.poster,
                                  onPlay: (e) => {
                                      m.default.track(p.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: G }), P(Date.now()), q(!0), X(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      en(), X(e.currentTarget.muted), q(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      en(), X(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      en(), X(e.currentTarget.muted), q(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == ea
                                          ? void 0
                                          : ea.map((e) => {
                                                let t = O.Z.getLanguages().find((t) => t.code === e.locale);
                                                return null == t
                                                    ? null
                                                    : (0, r.jsx)(
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
                            : 'embed' === n.type
                              ? (0, r.jsx)(u.BC, {
                                    className: o()(x.video, M),
                                    allowFullScreen: !1,
                                    href: n.href,
                                    thumbnail: n.thumbnail,
                                    video: n.embed,
                                    provider: i.pn.YOUTUBE,
                                    maxWidth: n.embed.width,
                                    maxHeight: n.embed.height,
                                    renderVideoComponent: g.lV,
                                    renderImageComponent: g.Yi,
                                    renderLinkComponent: g.iT,
                                    onPlay: () => {
                                        m.default.track(p.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: G });
                                    }
                                })
                              : 'image' === n.type
                                ? (0, r.jsx)('img', {
                                      alt: '',
                                      className: o()(x.video, M),
                                      src: n.src
                                  })
                                : null,
                        (0, r.jsxs)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            className: x.subHeader,
                            children: [v, null == B ? void 0 : B()]
                        }),
                        null != H &&
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/medium',
                                className: x.bodyText,
                                children: H
                            }),
                        (0, r.jsx)('div', {
                            className: o()(x.featureCardGroup, { [x.wideStyle]: U }),
                            children: L.map((e, t) =>
                                (0, r.jsx)(
                                    b,
                                    {
                                        ...e,
                                        wideStyle: U
                                    },
                                    ''.concat(e.header, '_').concat(t)
                                )
                            )
                        }),
                        S()
                    ]
                })
            ]
        })
    );
}

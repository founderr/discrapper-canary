n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(411104),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(446411),
    u = n(468846),
    h = n(313201),
    m = n(70097),
    p = n(605236),
    g = n(524444),
    f = n(626135),
    _ = n(960048),
    E = n(565216),
    I = n(981631),
    C = n(921944),
    v = n(388032),
    S = n(484857);
let T = [],
    N = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(o.TextBadge, {
            className: a()(S.tag, n),
            text: t
        });
    },
    A = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: l, wideStyle: s } = e;
        return (0, i.jsxs)('div', {
            className: a()(S.featureCard, { [S.wideStyle]: s }),
            children: [
                null != l
                    ? (0, i.jsx)(N, {
                          tagText: l,
                          className: S.featureCardTag
                      })
                    : null,
                (0, i.jsx)('img', {
                    alt: '',
                    className: a()(S.featureCardImg, { [S.wideStyle]: s }),
                    src: r
                }),
                (0, i.jsxs)('div', {
                    className: S.featureCardTextGroup,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-md/extrabold',
                            className: S.featureCardTextHeader,
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
function b(e) {
    let { className: t, renderModalProps: n, heroArt: l, heroArtClassName: N, modalDismissibleContent: b, modalTopExtra: x, header: Z, headerClassName: L, subHeader: y, subHeaderExtra: O, featureCards: R, changeLogId: P, button: j, body: D } = e,
        { onClose: M, transitionState: w } = n,
        k = (0, h.Dt)(),
        U = R.length % 2 == 0,
        G = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        [B, V] = r.useState(Date.now()),
        [H, F] = r.useState(0),
        [z, Y] = r.useState(0),
        [W, K] = r.useState(!1),
        [q, X] = r.useState(!0),
        Q = r.useRef(B),
        J = r.useRef(H),
        $ = r.useRef(z),
        ee = r.useRef(W),
        et = r.useRef(q),
        [en, ei] = r.useState(T),
        er = r.useRef(!1);
    function el() {
        let e = Date.now(),
            t = e - Q.current,
            n = J.current,
            i = $.current;
        return ee.current && (F((n += t)), !et.current && Y((i += t))), V(e), [n, i];
    }
    return (
        r.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ('video' !== l.type || null == l.subtitles) return;
                    let t =
                        null === (e = l.subtitles) || void 0 === e
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error('Failed to fetch the subtitle file '.concat(e.src));
                                  let n = await t.text(),
                                      i = new Blob([n], { type: 'text/vtt' }),
                                      r = URL.createObjectURL(i);
                                  return {
                                      ...e,
                                      src: r
                                  };
                              });
                    ei(await Promise.all(t));
                } catch (e) {
                    _.Z.captureException(e), ei(T);
                }
            };
            !0 !== er.current && e(), (er.current = !0);
        }, [l, en]),
        r.useEffect(
            () => () => {
                null != en &&
                    en.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [en]
        ),
        r.useEffect(() => {
            (Q.current = B), (J.current = H), ($.current = z), (ee.current = W), (et.current = q);
        }, [B, H, z, W, q]),
        r.useEffect(
            () => () => {
                if ('video' === l.type || 'embed' === l.type) {
                    let [e, t] = el();
                    f.default.track(I.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: P,
                        seconds_played: Math.round(e / 1000)
                    }),
                        f.default.track(I.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: P,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [P, l.type]
        ),
        r.useEffect(() => {
            null != b && (0, p.kk)(b);
            let e = Date.now();
            return (
                f.default.track(I.rMx.CHANGE_LOG_OPENED, { change_log_id: P }),
                () => {
                    f.default.track(I.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: P,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != b && (0, p.EW)(b, { dismissAction: C.L.DISMISS });
                }
            );
        }, [b, P]),
        (0, i.jsxs)(o.ModalRoot, {
            className: a()(S.root, t),
            transitionState: w,
            'aria-labelledby': k,
            children: [
                (0, i.jsx)(o.ModalCloseButton, {
                    className: S.closeButton,
                    onClick: M
                }),
                (0, i.jsx)(E.Z, { className: S.splash }),
                null == x ? void 0 : x(),
                (0, i.jsxs)(o.ModalContent, {
                    className: S.content,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'display-md',
                            className: a()(S.headerText, L),
                            children: Z
                        }),
                        'video' === l.type
                            ? (0, i.jsx)(m.Z, {
                                  className: a()(S.video, N),
                                  autoPlay: !G,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: l.src,
                                  poster: l.poster,
                                  onPlay: (e) => {
                                      f.default.track(I.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: P }), V(Date.now()), K(!0), X(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      el(), X(e.currentTarget.muted), K(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      el(), X(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      el(), X(e.currentTarget.muted), K(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == en
                                          ? void 0
                                          : en.map((e) => {
                                                let t = (0, v.getLanguages)().find((t) => t.code === e.locale);
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
                            : 'embed' === l.type
                              ? (0, i.jsx)(d.BC, {
                                    className: a()(S.video, N),
                                    allowFullScreen: !1,
                                    href: l.href,
                                    thumbnail: l.thumbnail,
                                    video: l.embed,
                                    provider: u.pn.YOUTUBE,
                                    maxWidth: l.embed.width,
                                    maxHeight: l.embed.height,
                                    renderVideoComponent: g.lV,
                                    renderImageComponent: g.Yi,
                                    renderLinkComponent: g.iT,
                                    onPlay: () => {
                                        f.default.track(I.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: P });
                                    }
                                })
                              : 'image' === l.type
                                ? (0, i.jsx)('img', {
                                      alt: '',
                                      className: a()(S.video, N),
                                      src: l.src
                                  })
                                : null,
                        (0, i.jsxs)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            className: S.subHeader,
                            children: [y, null == O ? void 0 : O()]
                        }),
                        null != D &&
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/medium',
                                className: S.bodyText,
                                children: D
                            }),
                        R.length > 0 &&
                            (0, i.jsx)('div', {
                                className: a()(S.featureCardGroup, { [S.wideStyle]: U }),
                                children: R.map((e, t) =>
                                    (0, i.jsx)(
                                        A,
                                        {
                                            ...e,
                                            wideStyle: U
                                        },
                                        ''.concat(e.header, '_').concat(t)
                                    )
                                )
                            }),
                        j()
                    ]
                })
            ]
        })
    );
}

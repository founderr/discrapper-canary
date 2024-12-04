n.d(t, {
    A7: function () {
        return r;
    },
    BO: function () {
        return el;
    },
    DR: function () {
        return er;
    },
    G5: function () {
        return es;
    },
    LE: function () {
        return ea;
    },
    Rp: function () {
        return ei;
    },
    SE: function () {
        return ed;
    },
    W_: function () {
        return ec;
    },
    Y: function () {
        return eu;
    },
    Yi: function () {
        return J;
    },
    b_: function () {
        return W;
    },
    hX: function () {
        return Q;
    },
    iT: function () {
        return $;
    },
    lV: function () {
        return q;
    },
    ur: function () {
        return et;
    },
    wj: function () {
        return X;
    },
    xi: function () {
        return ee;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(374470),
    f = n(442837),
    _ = n(481060),
    p = n(904245),
    h = n(45114),
    m = n(431279),
    g = n(794295),
    E = n(593472),
    v = n(110924),
    I = n(858644),
    T = n(249458),
    b = n(313201),
    S = n(540059),
    y = n(688465),
    A = n(425886),
    N = n(80966),
    C = n(593545),
    R = n(479313),
    O = n(765104),
    D = n(505953),
    L = n(695346),
    x = n(201542),
    w = n(306680),
    P = n(594174),
    M = n(259580),
    k = n(626135),
    U = n(823379),
    B = n(589530),
    G = n(709054),
    Z = n(217702),
    F = n(981631),
    V = n(420212),
    j = n(814249),
    H = n(388032),
    Y = n(89111);
let W = {
        delay: 300,
        position: 'top'
    },
    K = (e) => (t) => {
        null == e || e(t), (0, B.jA)(t);
    },
    z = (e) => (t) => {
        null == e || e(t), (0, B.Zj)(t);
    };
function q(e) {
    let { onVolumeChange: t, onMute: n, volume: r, autoMute: i, alt: o, renderAdjacentContent: l, renderOverlayContent: u, ...c } = e,
        d = K(t),
        f = z(n);
    return (
        (r = null == r ? B.FC : r),
        (i = null == i ? B.rs : i),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(N.Z, {
                    ...c,
                    alt: o,
                    volume: r,
                    autoMute: i,
                    onVolumeChange: d,
                    onMute: f,
                    renderLinkComponent: $,
                    renderOverlayContent: u
                }),
                null != l && l()
            ]
        })
    );
}
function Q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, onVolumeShow: i, onVolumeHide: o, renderAdjacentContent: l, ...u } = e,
        c = K(t),
        d = z(r);
    return (
        (n = null == n ? B.FC : n),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(A.Z, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: i,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: $
                }),
                null != l && l()
            ]
        })
    );
}
function X(e) {
    let { onVolumeChange: t, volume: n, onMute: r, ...i } = e,
        s = K(t),
        o = z(r);
    return (
        (n = null == n ? B.FC : n),
        (0, a.jsx)(x.Z, {
            ...i,
            onVolumeChange: s,
            onMute: o,
            volume: n
        })
    );
}
function J(e) {
    let { alt: t, hiddenSpoilers: n, renderAdjacentContent: r, containerClassName: i, imageContainerClassName: o, disableAltTextDisplay: u = !1, mediaLayoutType: c, imageContainerStyle: d } = e,
        f = c === Z.hV.MOSAIC,
        p = !u && L.H1.getSetting() && null != t && '' !== t && !0 !== n,
        h = (e) => {
            let { altText: t } = e;
            return (0, a.jsxs)(_.Dialog, {
                'aria-label': H.intl.string(H.t.fSiQ3N),
                className: Y.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === V.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, a.jsx)('span', {
                        className: Y.mediaMosaicAltTextPopoutTitle,
                        children: H.intl.string(H.t.fSiQ3N)
                    }),
                    (0, a.jsx)('span', {
                        className: Y.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        g = s.createRef();
    return (0, a.jsxs)('div', {
        className: l()(Y.imageContent, i),
        children: [
            (0, a.jsxs)('div', {
                className: l()(Y.imageContainer, o),
                style: d,
                children: [(0, a.jsx)(m.Z, { ...e }), null != r && r()]
            }),
            f &&
                p &&
                (0, a.jsx)('div', {
                    className: Y.mediaMosaicAltTextContainer,
                    children: (0, a.jsx)(_.Popout, {
                        animation: _.Popout.Animation.FADE,
                        renderPopout: () => (0, a.jsx)(h, { altText: t }),
                        children: (e) =>
                            (0, a.jsx)(_.FocusRing, {
                                offset: 4,
                                children: (0, a.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: g,
                                    'aria-label': H.intl.string(H.t.fSiQ3N),
                                    className: Y.mediaMosaicAltText,
                                    children: H.intl.string(H.t.jCV1T0)
                                })
                            })
                    })
                }),
            !f &&
                p &&
                (0, a.jsx)('span', {
                    className: Y.altText,
                    children: t
                })
        ]
    });
}
function $(e) {
    return (0, a.jsx)(g.Z, { ...e });
}
function ee(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(C.Z, { ...n }), null != t && t()]
    });
}
function et(e) {
    return (0, a.jsx)(I.Z, { ...e });
}
((i = r || (r = {}))[(i.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (i[(i.REPLY = 1)] = 'REPLY');
function en(e) {
    switch (e) {
        case 0:
            return H.intl.string(H.t.gpoQsL);
        case 1:
            return H.intl.string(H.t['k3RM8/']);
        default:
            return (0, U.vE)(e);
    }
}
let er = (e) => {
        let { type: t = 0, onClick: n, className: r } = e,
            i = (0, S.Q)('JumpToPresentBar');
        return (0, a.jsx)(T.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)('div', {
                          className: l()(Y.jumpToPresentBar, r),
                          children: [
                              (0, a.jsx)(_.FocusRing, {
                                  offset: 4,
                                  children: (0, a.jsx)('button', {
                                      type: 'button',
                                      onClick: n,
                                      className: Y.barButtonMain,
                                      children: (function (e) {
                                          switch (e) {
                                              case 0:
                                                  return H.intl.string(H.t['4EvBb2']);
                                              case 1:
                                                  return H.intl.string(H.t['1J6Xq6']);
                                              default:
                                                  return (0, U.vE)(e);
                                          }
                                      })(t)
                                  })
                              }),
                              null != n
                                  ? (0, a.jsx)(_.FocusRing, {
                                        offset: 4,
                                        children: i
                                            ? (0, a.jsx)(_.Button, {
                                                  size: 'sm',
                                                  onClick: n,
                                                  children: en(t)
                                              })
                                            : (0, a.jsxs)('button', {
                                                  type: 'button',
                                                  onClick: n,
                                                  className: Y.barButtonAlt,
                                                  children: [en(t), (0, a.jsx)(M.Z, { className: Y.barButtonIcon })]
                                              })
                                    })
                                  : (0, a.jsx)(_.Spinner, {
                                        type: _.Spinner.Type.PULSING_ELLIPSIS,
                                        className: Y.spinner,
                                        itemClassName: Y.spinnerItem
                                    })
                          ]
                      })
        });
    },
    ei = (e) => {
        let { onClick: t, loading: n, className: r } = e;
        return (0, a.jsx)(T.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)(_.Clickable, {
                          className: l()(Y.messagesErrorBar, r),
                          onClick: t,
                          focusProps: {
                              offset: {
                                  top: 4,
                                  right: 4,
                                  bottom: 12,
                                  left: 4
                              }
                          },
                          children: [
                              (0, a.jsx)('div', {
                                  className: Y.barButtonMain,
                                  children: H.intl.string(H.t['1zUvl5'])
                              }),
                              n
                                  ? (0, a.jsx)(_.Spinner, {
                                        type: _.Spinner.Type.PULSING_ELLIPSIS,
                                        className: Y.spinner,
                                        itemClassName: Y.spinnerItem
                                    })
                                  : (0, a.jsx)('div', {
                                        className: Y.barButtonAlt,
                                        children: H.intl.string(H.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function ea(e) {
    let { content: t, channelId: n } = e,
        [r] = s.useState(() => (0, b.hQ)('NewMessagesBarJumpToNewMessages_')),
        i = s.useCallback(() => {
            let e = w.ZP.ackMessageId(n);
            null != e
                ? p.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : p.Z.jumpToMessage({
                      channelId: n,
                      messageId: G.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, h.In)(n);
        }, [n]),
        { disableInteractions: u } = s.useContext(T.G);
    return u
        ? null
        : (0, a.jsxs)('div', {
              className: l()(Y.newMessagesBar, { [Y.disableInteractions]: u }),
              children: [
                  (0, a.jsx)(_.FocusRing, {
                      offset: 4,
                      children: (0, a.jsx)('button', {
                          type: 'button',
                          className: Y.barButtonMain,
                          onClick: i,
                          'aria-label': H.intl.string(H.t.z0Mkp6),
                          'aria-describedby': r,
                          children: (0, a.jsx)('span', {
                              id: r,
                              className: Y.span,
                              children: t
                          })
                      })
                  }),
                  (0, a.jsx)(_.FocusRing, {
                      offset: 4,
                      children: (0, a.jsxs)('button', {
                          type: 'button',
                          onClick: o,
                          className: Y.barButtonAlt,
                          children: [
                              H.intl.string(H.t.e6RscX),
                              (0, a.jsx)(_.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: Y.barButtonIcon
                              })
                          ]
                      })
                  })
              ]
          });
}
function es(e) {
    var t, n, r;
    let { channel: i, content: o, scrollManager: u } = e,
        { disableInteractions: m } = s.useContext(T.G),
        [g, I] = s.useState(null),
        b = s.useRef(null),
        [S, A] = s.useState(null),
        N = s.useRef(null),
        C = (0, f.Wu)(
            [O.Z],
            () => {
                var e;
                return null !== (e = O.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        L = (0, v.Z)(C);
    s.useEffect(() => {
        !c().isEqual(L, C) &&
            k.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [C, L, i.guild_id, i.id, i.type]);
    let x = (0, f.e7)(
            [P.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == C
                            ? void 0
                            : C.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = P.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(U.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [C],
            eo
        ),
        B = null !== (n = (0, f.e7)([O.Z], () => O.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        Z = null == C ? void 0 : null === (t = C[B]) || void 0 === t ? void 0 : t.topic;
    null == Z && null == g && (null == C ? void 0 : C.length) >= 1 && (Z = null === (r = C[0]) || void 0 === r ? void 0 : r.topic);
    let V = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    I(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [I]
        ),
        W = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, R.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        K = s.useCallback(
            (e) => {
                W(), V(e);
            },
            [V, W]
        ),
        [z, q] = s.useState(!1),
        Q = s.useCallback(() => {
            k.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                q(!z);
        }, [z, C, q, i]),
        X = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.DZ.PILL_DROPDOWN,
                    n = C[e];
                if (null == n) return;
                (0, R.wv)(i.id, n.id), (0, R.yK)(i.id, n.id);
                let r = () => {
                    u.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            u.addAutomaticAnchorCallback(K, !1);
                        }, 100);
                };
                u.removeAutomaticAnchorCallback(K),
                    u.addScrollCompleteCallback(r),
                    k.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    p.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: E.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [C, i, K, u]
        ),
        J = s.useCallback((e) => {
            var t;
            q(e);
            let n = null === (t = N.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && A(n);
        }, []);
    s.useEffect(() => {
        if (null != S && z) {
            var e;
            null === (e = N.current) || void 0 === e || e.scrollTo({ top: S });
        }
    }, [S, z]);
    let $ = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = b.current) || void 0 === t ? void 0 : t.contains(e.target))))
                z &&
                    k.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: C.length,
                        message_counts: C.map((e) => e.count),
                        start_message_ids: C.map((e) => e.startId),
                        end_message_ids: C.map((e) => e.endId),
                        num_participants: C.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    J(!1);
        },
        [z, C, i, J]
    );
    s.useEffect(
        () => (
            u.addAutomaticAnchorCallback(K),
            () => {
                u.removeAutomaticAnchorCallback(K);
            }
        ),
        [u, K]
    ),
        s.useEffect(() => {
            (0, R.G1)(i.id);
        }, [i.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        );
    let ee = s.useMemo(
            () =>
                (0, a.jsx)(D.Z, {
                    channel: i,
                    summaries: C,
                    summariesMembers: x,
                    selectTopic: X,
                    setOpen: J
                }),
            [C, x, X, J, i]
        ),
        et = s.useCallback(() => {
            let e = w.ZP.ackMessageId(i.id);
            null != e
                ? p.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : p.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: G.default.castChannelIdAsMessageId(i.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [i.id]),
        en = s.useCallback(() => {
            (0, h.In)(i.id);
        }, [i.id]),
        er = H.intl.string(H.t['38qwgI']);
    return (
        C.length > 0 && (er = '' === Z || null == Z ? H.intl.string(H.t.DwnFuL) : Z),
        m
            ? null
            : (0, a.jsxs)('div', {
                  ref: b,
                  className: l()(Y.newTopicsBarContainer, Y.containerMarginTop),
                  children: [
                      (0, a.jsx)('div', {
                          className: l()(Y.newTopicsBarTopicSection),
                          children: (0, a.jsx)(_.Clickable, {
                              className: Y.newTopicsBarTextClickable,
                              'aria-label': H.intl.string(H.t.RT3MPz),
                              onClick: Q,
                              children: (0, a.jsxs)('div', {
                                  className: l()({
                                      [Y.newTopicsBarTextUnselected]: !z,
                                      [Y.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, a.jsx)(_.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: Y.newTopicsBarIcon
                                      }),
                                      (0, a.jsx)(_.Text, {
                                          variant: 'text-sm/medium',
                                          className: l()(Y.newTopicsBarCompact, Y.newTopicsBarText),
                                          children: er
                                      }),
                                      (0, a.jsx)(M.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: M.Z.Directions.DOWN,
                                          className: Y.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, a.jsx)(_.Clickable, {
                          onClick: et,
                          className: l()(Y.barButtonMain, Y.newTopicsBarInitial),
                          children: o
                      }),
                      (0, a.jsxs)(_.Clickable, {
                          onClick: en,
                          className: l()(Y.barButtonAlt, Y.flexEnd),
                          children: [
                              (0, a.jsx)('div', {
                                  className: Y.newTopicsBarCompact,
                                  children: H.intl.string(H.t.e6RscX)
                              }),
                              (0, a.jsx)(_.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: Y.barButtonIcon
                              })
                          ]
                      }),
                      z &&
                          (0, a.jsxs)('div', {
                              className: Y.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: Y.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: Y.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(_.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: Y.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(_.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: H.intl.string(H.t.q21fUl)
                                                  }),
                                                  (0, a.jsx)(y.Z, { className: Y.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(_.Clickable, {
                                              'aria-label': H.intl.string(H.t.cpT0Cg),
                                              onClick: Q,
                                              className: Y.topicsDropdownClose,
                                              children: (0, a.jsx)(_.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(_.Scroller, {
                                      ref: N,
                                      className: Y.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
function eo(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var r, i;
            return (r = e), null == (i = t[n]) || r.length !== i.length || !!r.some((e, t) => i[t] !== e);
        })
    );
}
function el(e) {
    var t, n, r;
    let { channel: i, scrollManager: o } = e,
        { disableInteractions: u } = s.useContext(T.G),
        [h, m] = s.useState(null),
        g = s.useRef(null),
        [I, b] = s.useState(null),
        S = s.useRef(null),
        A = (0, f.Wu)(
            [O.Z],
            () => {
                var e;
                return null !== (e = O.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        N = (0, v.Z)(A);
    s.useEffect(() => {
        !c().isEqual(N, A) &&
            k.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [A, N, i.guild_id, i.id, i.type]);
    let C = (0, f.e7)(
            [P.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == A
                            ? void 0
                            : A.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = P.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(U.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [A],
            eo
        ),
        L = null !== (n = (0, f.e7)([O.Z], () => O.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        x = null == A ? void 0 : null === (t = A[L]) || void 0 === t ? void 0 : t.topic;
    null == x && null == h && (null == A ? void 0 : A.length) >= 1 && (x = null === (r = A[0]) || void 0 === r ? void 0 : r.topic);
    let w = s.useMemo(() => c().get(A, L - 1), [L, A]),
        B = s.useMemo(() => c().get(A, L + 1), [L, A]),
        G = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    m(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [m]
        ),
        Z = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, R.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        V = s.useCallback(
            (e) => {
                Z(), G(e);
            },
            [G, Z]
        ),
        [W, K] = s.useState(!1),
        z = s.useCallback(() => {
            k.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                K(!W);
        }, [W, A, K, i]),
        q = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.DZ.PILL_DROPDOWN,
                    n = A[e];
                if (null == n) return;
                (0, R.wv)(i.id, n.id), (0, R.yK)(i.id, n.id);
                let r = () => {
                    o.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            o.addAutomaticAnchorCallback(V, !1);
                        }, 100);
                };
                o.removeAutomaticAnchorCallback(V),
                    o.addScrollCompleteCallback(r),
                    k.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    p.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: E.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [A, i, V, o]
        ),
        Q = s.useCallback(() => {
            q(L - 1, j.DZ.PILL_NEXT_ARROW);
        }, [q, L]),
        X = s.useCallback(() => {
            q(L + 1, j.DZ.PILL_PREVIOUS_ARROW);
        }, [L, q]),
        J = s.useCallback((e) => {
            var t;
            K(e);
            let n = null === (t = S.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && b(n);
        }, []);
    s.useEffect(() => {
        if (null != I && W) {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollTo({ top: I });
        }
    }, [I, W]);
    let $ = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))))
                W &&
                    k.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: A.length,
                        message_counts: A.map((e) => e.count),
                        start_message_ids: A.map((e) => e.startId),
                        end_message_ids: A.map((e) => e.endId),
                        num_participants: A.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    J(!1);
        },
        [W, A, i, J]
    );
    s.useEffect(
        () => (
            o.addAutomaticAnchorCallback(V),
            () => {
                o.removeAutomaticAnchorCallback(V);
            }
        ),
        [o, V]
    ),
        s.useEffect(() => {
            (0, R.G1)(i.id);
        }, [i.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        );
    let ee = s.useMemo(
        () =>
            (0, a.jsx)(D.Z, {
                channel: i,
                summaries: A,
                summariesMembers: C,
                selectTopic: q,
                setOpen: J
            }),
        [A, C, q, J, i]
    );
    if (!(0, f.e7)([O.Z], () => O.Z.shouldShowTopicsBar())) return null;
    let et = H.intl.string(H.t['38qwgI']);
    return (
        A.length > 0 && (et = '' === x || null == x ? H.intl.string(H.t.DwnFuL) : x),
        u
            ? null
            : (0, a.jsxs)('div', {
                  ref: g,
                  className: l()(Y.topicsPillContainer, Y.containerMarginTop),
                  children: [
                      (0, a.jsxs)('div', {
                          className: Y.topicsPill,
                          children: [
                              (0, a.jsx)(_.Clickable, {
                                  className: Y.topicsPillText,
                                  'aria-label': H.intl.string(H.t.RT3MPz),
                                  onClick: z,
                                  children: (0, a.jsxs)('div', {
                                      className: l()({
                                          [Y.topicsPillTextUnselected]: !W,
                                          [Y.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, a.jsx)(_.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: Y.topicsPillSummaryIcon
                                          }),
                                          (0, a.jsx)(_.Text, {
                                              className: Y.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.DOWN,
                                              className: Y.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: Y.topicsPillCarets,
                                  children: [
                                      (0, a.jsx)(_.Clickable, {
                                          'aria-label': H.intl.string(H.t['4huCnJ']),
                                          onClick: X,
                                          className: l()(Y.topicsPillCaret, Y.topicsCaretLeft, { [Y.topicsPillCaretDisabled]: null == B }),
                                          children: (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.UP
                                          })
                                      }),
                                      (0, a.jsx)(_.Clickable, {
                                          'aria-label': H.intl.string(H.t['58KOoK']),
                                          onClick: Q,
                                          className: l()(Y.topicsPillCaret, Y.topicsCaretRight, { [Y.topicsPillCaretDisabled]: null == w }),
                                          children: (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.DOWN
                                          })
                                      })
                                  ]
                              })
                          ]
                      }),
                      W &&
                          (0, a.jsxs)('div', {
                              className: Y.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: Y.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: Y.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(_.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: Y.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(_.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: H.intl.string(H.t.q21fUl)
                                                  }),
                                                  (0, a.jsx)(y.Z, { className: Y.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(_.Clickable, {
                                              'aria-label': H.intl.string(H.t.cpT0Cg),
                                              onClick: z,
                                              className: Y.topicsDropdownClose,
                                              children: (0, a.jsx)(_.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(_.Scroller, {
                                      ref: S,
                                      className: Y.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
let eu = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, a.jsxs)('div', {
            className: Y.tooltip,
            children: [
                (0, a.jsx)(_.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: Y.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, a.jsx)(_.Text, {
                        className: Y.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: H.intl.string(H.t['515vjI'])
                    })
            ]
        });
    },
    ec = (e) => {
        let { children: t, className: n } = e;
        return (0, a.jsx)('div', {
            className: l()(Y.popoutContainer, n),
            children: t
        });
    },
    ed = (e) => {
        let { className: t } = e;
        return (0, a.jsx)(ec, {
            className: t,
            children: (0, a.jsx)('div', {
                className: Y.popoutLoadingBackground,
                children: (0, a.jsx)('div', { className: Y.popoutLoadingForeground })
            })
        });
    };

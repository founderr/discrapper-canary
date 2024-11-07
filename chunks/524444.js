n.d(t, {
    A7: function () {
        return r;
    },
    BO: function () {
        return es;
    },
    DR: function () {
        return et;
    },
    G5: function () {
        return ei;
    },
    LE: function () {
        return er;
    },
    Rp: function () {
        return en;
    },
    SE: function () {
        return eu;
    },
    W_: function () {
        return el;
    },
    Y: function () {
        return eo;
    },
    Yi: function () {
        return X;
    },
    b_: function () {
        return Y;
    },
    hX: function () {
        return q;
    },
    iT: function () {
        return J;
    },
    lV: function () {
        return z;
    },
    ur: function () {
        return ee;
    },
    wj: function () {
        return Q;
    },
    xi: function () {
        return $;
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
    h = n(904245),
    p = n(45114),
    m = n(431279),
    g = n(794295),
    E = n(593472),
    v = n(110924),
    I = n(858644),
    S = n(249458),
    T = n(313201),
    b = n(688465),
    y = n(425886),
    A = n(80966),
    N = n(593545),
    C = n(479313),
    R = n(765104),
    O = n(505953),
    D = n(695346),
    L = n(201542),
    x = n(306680),
    w = n(594174),
    M = n(259580),
    P = n(626135),
    k = n(823379),
    U = n(589530),
    G = n(709054),
    B = n(217702),
    Z = n(981631),
    F = n(420212),
    V = n(814249),
    H = n(388032),
    j = n(650968);
let Y = {
        delay: 300,
        position: 'top'
    },
    W = (e) => (t) => {
        null == e || e(t), (0, U.jA)(t);
    },
    K = (e) => (t) => {
        null == e || e(t), (0, U.Zj)(t);
    };
function z(e) {
    let { onVolumeChange: t, onMute: n, volume: r, autoMute: i, alt: o, renderAdjacentContent: l, renderOverlayContent: u, ...c } = e,
        d = W(t),
        f = K(n);
    return (
        (r = null == r ? U.FC : r),
        (i = null == i ? U.rs : i),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(A.Z, {
                    ...c,
                    alt: o,
                    volume: r,
                    autoMute: i,
                    onVolumeChange: d,
                    onMute: f,
                    renderLinkComponent: J,
                    renderOverlayContent: u
                }),
                null != l && l()
            ]
        })
    );
}
function q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, onVolumeShow: i, onVolumeHide: o, renderAdjacentContent: l, ...u } = e,
        c = W(t),
        d = K(r);
    return (
        (n = null == n ? U.FC : n),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(y.Z, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: i,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: J
                }),
                null != l && l()
            ]
        })
    );
}
function Q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, ...i } = e,
        s = W(t),
        o = K(r);
    return (
        (n = null == n ? U.FC : n),
        (0, a.jsx)(L.Z, {
            ...i,
            onVolumeChange: s,
            onMute: o,
            volume: n
        })
    );
}
function X(e) {
    let { alt: t, hiddenSpoilers: n, renderAdjacentContent: r, containerClassName: i, imageContainerClassName: o, disableAltTextDisplay: u = !1, mediaLayoutType: c, imageContainerStyle: d } = e,
        f = c === B.hV.MOSAIC,
        h = !u && D.H1.getSetting() && null != t && '' !== t && !0 !== n,
        p = (e) => {
            let { altText: t } = e;
            return (0, a.jsxs)(_.Dialog, {
                'aria-label': H.intl.string(H.t.fSiQ3N),
                className: j.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === F.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, a.jsx)('span', {
                        className: j.mediaMosaicAltTextPopoutTitle,
                        children: H.intl.string(H.t.fSiQ3N)
                    }),
                    (0, a.jsx)('span', {
                        className: j.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        g = s.createRef();
    return (0, a.jsxs)('div', {
        className: l()(j.imageContent, i),
        children: [
            (0, a.jsxs)('div', {
                className: l()(j.imageContainer, o),
                style: d,
                children: [(0, a.jsx)(m.Z, { ...e }), null != r && r()]
            }),
            f &&
                h &&
                (0, a.jsx)('div', {
                    className: j.mediaMosaicAltTextContainer,
                    children: (0, a.jsx)(_.Popout, {
                        animation: _.Popout.Animation.FADE,
                        renderPopout: () => (0, a.jsx)(p, { altText: t }),
                        children: (e) =>
                            (0, a.jsx)(_.FocusRing, {
                                offset: 4,
                                children: (0, a.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: g,
                                    'aria-label': H.intl.string(H.t.fSiQ3N),
                                    className: j.mediaMosaicAltText,
                                    children: H.intl.string(H.t.jCV1T0)
                                })
                            })
                    })
                }),
            !f &&
                h &&
                (0, a.jsx)('span', {
                    className: j.altText,
                    children: t
                })
        ]
    });
}
function J(e) {
    return (0, a.jsx)(g.Z, { ...e });
}
function $(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(N.Z, { ...n }), null != t && t()]
    });
}
function ee(e) {
    return (0, a.jsx)(I.Z, { ...e });
}
((i = r || (r = {}))[(i.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (i[(i.REPLY = 1)] = 'REPLY');
let et = (e) => {
        let { type: t = 0, onClick: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)('div', {
                          className: j.jumpToPresentBar,
                          children: [
                              (0, a.jsx)(_.FocusRing, {
                                  offset: 4,
                                  children: (0, a.jsx)('button', {
                                      type: 'button',
                                      onClick: n,
                                      className: j.barButtonMain,
                                      children: (function (e) {
                                          switch (e) {
                                              case 0:
                                                  return H.intl.string(H.t['4EvBb2']);
                                              case 1:
                                                  return H.intl.string(H.t['1J6Xq6']);
                                              default:
                                                  return (0, k.vE)(e);
                                          }
                                      })(t)
                                  })
                              }),
                              null != n
                                  ? (0, a.jsx)(_.FocusRing, {
                                        offset: 4,
                                        children: (0, a.jsxs)('button', {
                                            type: 'button',
                                            onClick: n,
                                            className: j.barButtonAlt,
                                            children: [
                                                (function (e) {
                                                    switch (e) {
                                                        case 0:
                                                            return H.intl.string(H.t.gpoQsL);
                                                        case 1:
                                                            return H.intl.string(H.t['k3RM8/']);
                                                        default:
                                                            return (0, k.vE)(e);
                                                    }
                                                })(t),
                                                (0, a.jsx)(M.Z, { className: j.barButtonIcon })
                                            ]
                                        })
                                    })
                                  : (0, a.jsx)(_.Spinner, {
                                        type: _.Spinner.Type.PULSING_ELLIPSIS,
                                        className: j.spinner,
                                        itemClassName: j.spinnerItem
                                    })
                          ]
                      })
        });
    },
    en = (e) => {
        let { onClick: t, loading: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)(_.Clickable, {
                          className: j.messagesErrorBar,
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
                                  className: j.barButtonMain,
                                  children: H.intl.string(H.t['1zUvl5'])
                              }),
                              n
                                  ? (0, a.jsx)(_.Spinner, {
                                        type: _.Spinner.Type.PULSING_ELLIPSIS,
                                        className: j.spinner,
                                        itemClassName: j.spinnerItem
                                    })
                                  : (0, a.jsx)('div', {
                                        className: j.barButtonAlt,
                                        children: H.intl.string(H.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function er(e) {
    let { content: t, channelId: n } = e,
        [r] = s.useState(() => (0, T.hQ)('NewMessagesBarJumpToNewMessages_')),
        i = s.useCallback(() => {
            let e = x.ZP.ackMessageId(n);
            null != e
                ? h.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : h.Z.jumpToMessage({
                      channelId: n,
                      messageId: G.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, p.In)(n);
        }, [n]),
        { disableInteractions: u } = s.useContext(S.G);
    return u
        ? null
        : (0, a.jsxs)('div', {
              className: l()(j.newMessagesBar, { [j.disableInteractions]: u }),
              children: [
                  (0, a.jsx)(_.FocusRing, {
                      offset: 4,
                      children: (0, a.jsx)('button', {
                          type: 'button',
                          className: j.barButtonMain,
                          onClick: i,
                          'aria-label': H.intl.string(H.t.z0Mkp6),
                          'aria-describedby': r,
                          children: (0, a.jsx)('span', {
                              id: r,
                              className: j.span,
                              children: t
                          })
                      })
                  }),
                  (0, a.jsx)(_.FocusRing, {
                      offset: 4,
                      children: (0, a.jsxs)('button', {
                          type: 'button',
                          onClick: o,
                          className: j.barButtonAlt,
                          children: [
                              H.intl.string(H.t.e6RscX),
                              (0, a.jsx)(_.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: j.barButtonIcon
                              })
                          ]
                      })
                  })
              ]
          });
}
function ei(e) {
    var t, n, r;
    let { channel: i, content: o, scrollManager: u } = e,
        { disableInteractions: m } = s.useContext(S.G),
        [g, I] = s.useState(null),
        T = s.useRef(null),
        [y, A] = s.useState(null),
        N = s.useRef(null),
        D = (0, f.Wu)(
            [R.Z],
            () => {
                var e;
                return null !== (e = R.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        L = (0, v.Z)(D);
    s.useEffect(() => {
        !c().isEqual(L, D) &&
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: D.length,
                message_counts: D.map((e) => e.count),
                start_message_ids: D.map((e) => e.startId),
                end_message_ids: D.map((e) => e.endId),
                num_participants: D.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [D, L, i.guild_id, i.id, i.type]);
    let U = (0, f.e7)(
            [w.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == D
                            ? void 0
                            : D.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = w.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(k.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [D],
            ea
        ),
        B = null !== (n = (0, f.e7)([R.Z], () => R.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        F = null == D ? void 0 : null === (t = D[B]) || void 0 === t ? void 0 : t.topic;
    null == F && null == g && (null == D ? void 0 : D.length) >= 1 && (F = null === (r = D[0]) || void 0 === r ? void 0 : r.topic);
    let Y = s.useMemo(
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
                        (0, C.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        K = s.useCallback(
            (e) => {
                W(), Y(e);
            },
            [Y, W]
        ),
        [z, q] = s.useState(!1),
        Q = s.useCallback(() => {
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: D.length,
                message_counts: D.map((e) => e.count),
                start_message_ids: D.map((e) => e.startId),
                end_message_ids: D.map((e) => e.endId),
                num_participants: D.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                q(!z);
        }, [z, D, q, i]),
        X = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.DZ.PILL_DROPDOWN,
                    n = D[e];
                if (null == n) return;
                (0, C.wv)(i.id, n.id), (0, C.yK)(i.id, n.id);
                let r = () => {
                    u.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            u.addAutomaticAnchorCallback(K, !1);
                        }, 100);
                };
                u.removeAutomaticAnchorCallback(K),
                    u.addScrollCompleteCallback(r),
                    P.default.track(Z.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    h.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: E.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [D, i, K, u]
        ),
        J = s.useCallback((e) => {
            var t;
            q(e);
            let n = null === (t = N.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && A(n);
        }, []);
    s.useEffect(() => {
        if (null != y && z) {
            var e;
            null === (e = N.current) || void 0 === e || e.scrollTo({ top: y });
        }
    }, [y, z]);
    let $ = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = T.current) || void 0 === t ? void 0 : t.contains(e.target))))
                z &&
                    P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: D.length,
                        message_counts: D.map((e) => e.count),
                        start_message_ids: D.map((e) => e.startId),
                        end_message_ids: D.map((e) => e.endId),
                        num_participants: D.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    J(!1);
        },
        [z, D, i, J]
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
            (0, C.G1)(i.id);
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
                (0, a.jsx)(O.Z, {
                    channel: i,
                    summaries: D,
                    summariesMembers: U,
                    selectTopic: X,
                    setOpen: J
                }),
            [D, U, X, J, i]
        ),
        et = s.useCallback(() => {
            let e = x.ZP.ackMessageId(i.id);
            null != e
                ? h.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : h.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: G.default.castChannelIdAsMessageId(i.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [i.id]),
        en = s.useCallback(() => {
            (0, p.In)(i.id);
        }, [i.id]),
        er = H.intl.string(H.t['38qwgI']);
    return (
        D.length > 0 && (er = '' === F || null == F ? H.intl.string(H.t.DwnFuL) : F),
        m
            ? null
            : (0, a.jsxs)('div', {
                  ref: T,
                  className: l()(j.newTopicsBarContainer, j.containerMarginTop),
                  children: [
                      (0, a.jsx)('div', {
                          className: l()(j.newTopicsBarTopicSection),
                          children: (0, a.jsx)(_.Clickable, {
                              className: j.newTopicsBarTextClickable,
                              'aria-label': H.intl.string(H.t.RT3MPz),
                              onClick: Q,
                              children: (0, a.jsxs)('div', {
                                  className: l()({
                                      [j.newTopicsBarTextUnselected]: !z,
                                      [j.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, a.jsx)(_.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: j.newTopicsBarIcon
                                      }),
                                      (0, a.jsx)(_.Text, {
                                          variant: 'text-sm/medium',
                                          className: l()(j.newTopicsBarCompact, j.newTopicsBarText),
                                          children: er
                                      }),
                                      (0, a.jsx)(M.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: M.Z.Directions.DOWN,
                                          className: j.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, a.jsx)(_.Clickable, {
                          onClick: et,
                          className: l()(j.barButtonMain, j.newTopicsBarInitial),
                          children: o
                      }),
                      (0, a.jsxs)(_.Clickable, {
                          onClick: en,
                          className: l()(j.barButtonAlt, j.flexEnd),
                          children: [
                              (0, a.jsx)('div', {
                                  className: j.newTopicsBarCompact,
                                  children: H.intl.string(H.t.e6RscX)
                              }),
                              (0, a.jsx)(_.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: j.barButtonIcon
                              })
                          ]
                      }),
                      z &&
                          (0, a.jsxs)('div', {
                              className: j.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: j.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: j.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(_.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: j.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(_.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: H.intl.string(H.t.q21fUl)
                                                  }),
                                                  (0, a.jsx)(b.Z, { className: j.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(_.Clickable, {
                                              'aria-label': H.intl.string(H.t.cpT0Cg),
                                              onClick: Q,
                                              className: j.topicsDropdownClose,
                                              children: (0, a.jsx)(_.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(_.Scroller, {
                                      ref: N,
                                      className: j.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
function ea(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var r, i;
            return (r = e), null == (i = t[n]) || r.length !== i.length || !!r.some((e, t) => i[t] !== e);
        })
    );
}
function es(e) {
    var t, n, r;
    let { channel: i, scrollManager: o } = e,
        { disableInteractions: u } = s.useContext(S.G),
        [p, m] = s.useState(null),
        g = s.useRef(null),
        [I, T] = s.useState(null),
        y = s.useRef(null),
        A = (0, f.Wu)(
            [R.Z],
            () => {
                var e;
                return null !== (e = R.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        N = (0, v.Z)(A);
    s.useEffect(() => {
        !c().isEqual(N, A) &&
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
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
    let D = (0, f.e7)(
            [w.default],
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
                                                return null !== (t = w.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(k.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [A],
            ea
        ),
        L = null !== (n = (0, f.e7)([R.Z], () => R.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        x = null == A ? void 0 : null === (t = A[L]) || void 0 === t ? void 0 : t.topic;
    null == x && null == p && (null == A ? void 0 : A.length) >= 1 && (x = null === (r = A[0]) || void 0 === r ? void 0 : r.topic);
    let U = s.useMemo(() => c().get(A, L - 1), [L, A]),
        G = s.useMemo(() => c().get(A, L + 1), [L, A]),
        B = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    m(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [m]
        ),
        F = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, C.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        Y = s.useCallback(
            (e) => {
                F(), B(e);
            },
            [B, F]
        ),
        [W, K] = s.useState(!1),
        z = s.useCallback(() => {
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.DZ.PILL_DROPDOWN,
                    n = A[e];
                if (null == n) return;
                (0, C.wv)(i.id, n.id), (0, C.yK)(i.id, n.id);
                let r = () => {
                    o.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            o.addAutomaticAnchorCallback(Y, !1);
                        }, 100);
                };
                o.removeAutomaticAnchorCallback(Y),
                    o.addScrollCompleteCallback(r),
                    P.default.track(Z.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    h.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: E.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [A, i, Y, o]
        ),
        Q = s.useCallback(() => {
            q(L - 1, V.DZ.PILL_NEXT_ARROW);
        }, [q, L]),
        X = s.useCallback(() => {
            q(L + 1, V.DZ.PILL_PREVIOUS_ARROW);
        }, [L, q]),
        J = s.useCallback((e) => {
            var t;
            K(e);
            let n = null === (t = y.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && T(n);
        }, []);
    s.useEffect(() => {
        if (null != I && W) {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollTo({ top: I });
        }
    }, [I, W]);
    let $ = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))))
                W &&
                    P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            o.addAutomaticAnchorCallback(Y),
            () => {
                o.removeAutomaticAnchorCallback(Y);
            }
        ),
        [o, Y]
    ),
        s.useEffect(() => {
            (0, C.G1)(i.id);
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
            (0, a.jsx)(O.Z, {
                channel: i,
                summaries: A,
                summariesMembers: D,
                selectTopic: q,
                setOpen: J
            }),
        [A, D, q, J, i]
    );
    if (!(0, f.e7)([R.Z], () => R.Z.shouldShowTopicsBar())) return null;
    let et = H.intl.string(H.t['38qwgI']);
    return (
        A.length > 0 && (et = '' === x || null == x ? H.intl.string(H.t.DwnFuL) : x),
        u
            ? null
            : (0, a.jsxs)('div', {
                  ref: g,
                  className: l()(j.topicsPillContainer, j.containerMarginTop),
                  children: [
                      (0, a.jsxs)('div', {
                          className: j.topicsPill,
                          children: [
                              (0, a.jsx)(_.Clickable, {
                                  className: j.topicsPillText,
                                  'aria-label': H.intl.string(H.t.RT3MPz),
                                  onClick: z,
                                  children: (0, a.jsxs)('div', {
                                      className: l()({
                                          [j.topicsPillTextUnselected]: !W,
                                          [j.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, a.jsx)(_.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: j.topicsPillSummaryIcon
                                          }),
                                          (0, a.jsx)(_.Text, {
                                              className: j.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.DOWN,
                                              className: j.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: j.topicsPillCarets,
                                  children: [
                                      (0, a.jsx)(_.Clickable, {
                                          'aria-label': H.intl.string(H.t['4huCnJ']),
                                          onClick: X,
                                          className: l()(j.topicsPillCaret, j.topicsCaretLeft, { [j.topicsPillCaretDisabled]: null == G }),
                                          children: (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.UP
                                          })
                                      }),
                                      (0, a.jsx)(_.Clickable, {
                                          'aria-label': H.intl.string(H.t['58KOoK']),
                                          onClick: Q,
                                          className: l()(j.topicsPillCaret, j.topicsCaretRight, { [j.topicsPillCaretDisabled]: null == U }),
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
                              className: j.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: j.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: j.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(_.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: j.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(_.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: H.intl.string(H.t.q21fUl)
                                                  }),
                                                  (0, a.jsx)(b.Z, { className: j.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(_.Clickable, {
                                              'aria-label': H.intl.string(H.t.cpT0Cg),
                                              onClick: z,
                                              className: j.topicsDropdownClose,
                                              children: (0, a.jsx)(_.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(_.Scroller, {
                                      ref: y,
                                      className: j.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
let eo = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, a.jsxs)('div', {
            className: j.tooltip,
            children: [
                (0, a.jsx)(_.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: j.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, a.jsx)(_.Text, {
                        className: j.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: H.intl.string(H.t['515vjI'])
                    })
            ]
        });
    },
    el = (e) => {
        let { children: t, className: n } = e;
        return (0, a.jsx)('div', {
            className: l()(j.popoutContainer, n),
            children: t
        });
    },
    eu = (e) => {
        let { className: t } = e;
        return (0, a.jsx)(el, {
            className: t,
            children: (0, a.jsx)('div', {
                className: j.popoutLoadingBackground,
                children: (0, a.jsx)('div', { className: j.popoutLoadingForeground })
            })
        });
    };

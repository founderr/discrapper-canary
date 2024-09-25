n.d(t, {
    A7: function () {
        return r;
    },
    BO: function () {
        return eu;
    },
    DR: function () {
        return er;
    },
    G5: function () {
        return eo;
    },
    LE: function () {
        return ea;
    },
    Rp: function () {
        return ei;
    },
    SE: function () {
        return e_;
    },
    W_: function () {
        return ed;
    },
    Y: function () {
        return ec;
    },
    Yi: function () {
        return X;
    },
    b_: function () {
        return j;
    },
    hX: function () {
        return q;
    },
    iT: function () {
        return $;
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
        return J;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(374470),
    _ = n(442837),
    E = n(481060),
    f = n(904245),
    h = n(45114),
    p = n(431279),
    m = n(794295),
    I = n(593472),
    T = n(110924),
    g = n(858644),
    S = n(249458),
    A = n(313201),
    v = n(688465),
    N = n(425886),
    O = n(80966),
    R = n(593545),
    C = n(479313),
    y = n(765104),
    b = n(505953),
    L = n(695346),
    D = n(201542),
    M = n(306680),
    P = n(594174),
    U = n(259580),
    w = n(626135),
    x = n(823379),
    G = n(589530),
    k = n(709054),
    B = n(217702),
    F = n(981631),
    Z = n(420212),
    V = n(814249),
    H = n(689938),
    Y = n(650968);
let j = {
        delay: 300,
        position: 'top'
    },
    W = (e) => (t) => {
        null == e || e(t), (0, G.jA)(t);
    },
    K = (e) => (t) => {
        null == e || e(t), (0, G.Zj)(t);
    };
function z(e) {
    let { onVolumeChange: t, onMute: n, volume: r, autoMute: i, alt: s, renderAdjacentContent: l, renderOverlayContent: u, ...c } = e,
        d = W(t),
        _ = K(n);
    return (
        (r = null == r ? G.FC : r),
        (i = null == i ? G.rs : i),
        (0, a.jsxs)(o.Fragment, {
            children: [
                (0, a.jsx)(O.Z, {
                    ...c,
                    alt: s,
                    volume: r,
                    autoMute: i,
                    onVolumeChange: d,
                    onMute: _,
                    renderLinkComponent: $,
                    renderOverlayContent: u
                }),
                null != l && l()
            ]
        })
    );
}
function q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, onVolumeShow: i, onVolumeHide: s, renderAdjacentContent: l, ...u } = e,
        c = W(t),
        d = K(r);
    n = null == n ? G.FC : n;
    let _ = () => !1;
    return (0, a.jsxs)(o.Fragment, {
        children: [
            (0, a.jsx)(N.Z, {
                ...u,
                onVolumeChange: c,
                onMute: d,
                onVolumeShow: i,
                onVolumeHide: s,
                volume: n,
                autoMute: _,
                renderLinkComponent: $
            }),
            null != l && l()
        ]
    });
}
function Q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, ...i } = e,
        o = W(t),
        s = K(r);
    return (
        (n = null == n ? G.FC : n),
        (0, a.jsx)(D.Z, {
            ...i,
            onVolumeChange: o,
            onMute: s,
            volume: n
        })
    );
}
function X(e) {
    var t;
    let { alt: n, hiddenSpoilers: r, renderAdjacentContent: i, containerClassName: s, imageContainerClassName: u, disableAltTextDisplay: c = !1, mediaLayoutType: d, imageContainerStyle: _, renderForwardComponent: f } = e,
        h = d === B.hV.MOSAIC,
        m = !c && L.H1.getSetting() && null != n && '' !== n && !0 !== r,
        I = (e) => {
            let { altText: t } = e;
            return (0, a.jsxs)(E.Dialog, {
                'aria-label': H.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: Y.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === Z.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = T.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, a.jsx)('span', {
                        className: Y.mediaMosaicAltTextPopoutTitle,
                        children: H.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                    }),
                    (0, a.jsx)('span', {
                        className: Y.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        T = o.createRef(),
        g = (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Safari';
    return (0, a.jsxs)('div', {
        className: l()(
            {
                [Y.imageContentSafari]: g,
                [Y.imageContent]: !g
            },
            s
        ),
        children: [
            (0, a.jsxs)('div', {
                className: l()(Y.imageContainer, u),
                style: _,
                children: [
                    (0, a.jsx)(p.Z, {
                        ...e,
                        renderLinkComponent: $,
                        renderForwardComponent: null != f ? f : F.VqG
                    }),
                    null != i && i()
                ]
            }),
            h &&
                m &&
                (0, a.jsx)('div', {
                    className: Y.mediaMosaicAltTextContainer,
                    children: (0, a.jsx)(E.Popout, {
                        animation: E.Popout.Animation.FADE,
                        renderPopout: () => (0, a.jsx)(I, { altText: n }),
                        children: (e) =>
                            (0, a.jsx)(E.FocusRing, {
                                offset: 4,
                                children: (0, a.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: T,
                                    'aria-label': H.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                                    className: Y.mediaMosaicAltText,
                                    children: H.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                                })
                            })
                    })
                }),
            !h &&
                m &&
                (0, a.jsx)('span', {
                    className: Y.altText,
                    children: n
                })
        ]
    });
}
function $(e) {
    return (0, a.jsx)(m.Z, { ...e });
}
function J(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, a.jsxs)(o.Fragment, {
        children: [(0, a.jsx)(R.Z, { ...n }), null != t && t()]
    });
}
function ee(e) {
    return (0, a.jsx)(g.Z, { ...e });
}
function et(e) {
    switch (e) {
        case 0:
            return H.Z.Messages.YOURE_VIEWING_OLDER_MESSAGES;
        case 1:
            return H.Z.Messages.JUMP_BAR_VIEWING_REPLY;
        default:
            return (0, x.vE)(e);
    }
}
function en(e) {
    switch (e) {
        case 0:
            return H.Z.Messages.JUMP_TO_PRESENT;
        case 1:
            return H.Z.Messages.JUMP_TO_ORIGINAL_MESSAGE;
        default:
            return (0, x.vE)(e);
    }
}
!(function (e) {
    (e[(e.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (e[(e.REPLY = 1)] = 'REPLY');
})(r || (r = {}));
let er = (e) => {
        let { type: t = 0, onClick: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)('div', {
                          className: Y.jumpToPresentBar,
                          children: [
                              (0, a.jsx)(E.FocusRing, {
                                  offset: 4,
                                  children: (0, a.jsx)('button', {
                                      type: 'button',
                                      onClick: n,
                                      className: Y.barButtonMain,
                                      children: et(t)
                                  })
                              }),
                              null != n
                                  ? (0, a.jsx)(E.FocusRing, {
                                        offset: 4,
                                        children: (0, a.jsxs)('button', {
                                            type: 'button',
                                            onClick: n,
                                            className: Y.barButtonAlt,
                                            children: [en(t), (0, a.jsx)(U.Z, { className: Y.barButtonIcon })]
                                        })
                                    })
                                  : (0, a.jsx)(E.Spinner, {
                                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                                        className: Y.spinner,
                                        itemClassName: Y.spinnerItem
                                    })
                          ]
                      })
        });
    },
    ei = (e) => {
        let { onClick: t, loading: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)(E.Clickable, {
                          className: Y.messagesErrorBar,
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
                                  children: H.Z.Messages.MESSAGES_FAILED_TO_LOAD
                              }),
                              n
                                  ? (0, a.jsx)(E.Spinner, {
                                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                                        className: Y.spinner,
                                        itemClassName: Y.spinnerItem
                                    })
                                  : (0, a.jsx)('div', {
                                        className: Y.barButtonAlt,
                                        children: H.Z.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
                                    })
                          ]
                      })
        });
    };
function ea(e) {
    let { content: t, channelId: n } = e,
        [r] = o.useState(() => (0, A.hQ)('NewMessagesBarJumpToNewMessages_')),
        i = o.useCallback(() => {
            let e = M.ZP.ackMessageId(n);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: n,
                      messageId: k.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        s = o.useCallback(() => {
            (0, h.In)(n);
        }, [n]),
        { disableInteractions: u } = o.useContext(S.G);
    return u
        ? null
        : (0, a.jsxs)('div', {
              className: l()(Y.newMessagesBar, { [Y.disableInteractions]: u }),
              children: [
                  (0, a.jsx)(E.FocusRing, {
                      offset: 4,
                      children: (0, a.jsx)('button', {
                          type: 'button',
                          className: Y.barButtonMain,
                          onClick: i,
                          'aria-label': H.Z.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                          'aria-describedby': r,
                          children: (0, a.jsx)('span', {
                              id: r,
                              className: Y.span,
                              children: t
                          })
                      })
                  }),
                  (0, a.jsx)(E.FocusRing, {
                      offset: 4,
                      children: (0, a.jsxs)('button', {
                          type: 'button',
                          onClick: s,
                          className: Y.barButtonAlt,
                          children: [
                              H.Z.Messages.MARK_AS_READ,
                              (0, a.jsx)(E.ChatCheckIcon, {
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
function eo(e) {
    var t, n, r;
    let { channel: i, content: s, scrollManager: u } = e,
        { disableInteractions: p } = o.useContext(S.G),
        [m, g] = o.useState(null),
        A = o.useRef(null),
        [N, O] = o.useState(null),
        R = o.useRef(null),
        L = (0, _.Wu)(
            [y.Z],
            () => {
                var e;
                return null !== (e = y.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        D = (0, T.Z)(L);
    o.useEffect(() => {
        !c().isEqual(D, L) &&
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: L.length,
                message_counts: L.map((e) => e.count),
                start_message_ids: L.map((e) => e.startId),
                end_message_ids: L.map((e) => e.endId),
                num_participants: L.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [L, D, i.guild_id, i.id, i.type]);
    let G = (0, _.e7)(
            [P.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == L
                            ? void 0
                            : L.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = P.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(x.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [L],
            el
        ),
        B = null !== (n = (0, _.e7)([y.Z], () => y.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        Z = null == L ? void 0 : null === (t = L[B]) || void 0 === t ? void 0 : t.topic;
    null == Z && null == m && (null == L ? void 0 : L.length) >= 1 && (Z = null === (r = L[0]) || void 0 === r ? void 0 : r.topic);
    let j = o.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    g(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [g]
        ),
        W = o.useMemo(
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
        K = o.useCallback(
            (e) => {
                W(), j(e);
            },
            [j, W]
        ),
        [z, q] = o.useState(!1),
        Q = o.useCallback(() => {
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: L.length,
                message_counts: L.map((e) => e.count),
                start_message_ids: L.map((e) => e.startId),
                end_message_ids: L.map((e) => e.endId),
                num_participants: L.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                q(!z);
        }, [z, L, q, i]),
        X = o.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.DZ.PILL_DROPDOWN,
                    n = L[e];
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
                    w.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: I.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [L, i, K, u]
        ),
        $ = o.useCallback((e) => {
            var t;
            q(e);
            let n = null === (t = R.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && O(n);
        }, []);
    o.useEffect(() => {
        if (null != N && z) {
            var e;
            null === (e = R.current) || void 0 === e || e.scrollTo({ top: N });
        }
    }, [N, z]);
    let J = o.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = A.current) || void 0 === t ? void 0 : t.contains(e.target))))
                z &&
                    w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: L.length,
                        message_counts: L.map((e) => e.count),
                        start_message_ids: L.map((e) => e.startId),
                        end_message_ids: L.map((e) => e.endId),
                        num_participants: L.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    $(!1);
        },
        [z, L, i, $]
    );
    o.useEffect(
        () => (
            u.addAutomaticAnchorCallback(K),
            () => {
                u.removeAutomaticAnchorCallback(K);
            }
        ),
        [u, K]
    ),
        o.useEffect(() => {
            (0, C.G1)(i.id);
        }, [i.id]),
        o.useEffect(
            () => (
                document.addEventListener('mousedown', J),
                () => {
                    document.removeEventListener('mousedown', J);
                }
            ),
            [J]
        );
    let ee = o.useMemo(
            () =>
                (0, a.jsx)(b.Z, {
                    channel: i,
                    summaries: L,
                    summariesMembers: G,
                    selectTopic: X,
                    setOpen: $
                }),
            [L, G, X, $, i]
        ),
        et = o.useCallback(() => {
            let e = M.ZP.ackMessageId(i.id);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: k.default.castChannelIdAsMessageId(i.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [i.id]),
        en = o.useCallback(() => {
            (0, h.In)(i.id);
        }, [i.id]),
        er = H.Z.Messages.SUMMARIES_NO_SUMMARIES;
    return (
        L.length > 0 && (er = '' === Z || null == Z ? H.Z.Messages.SUMMARIES_VIEW_ALL : Z),
        p
            ? null
            : (0, a.jsxs)('div', {
                  ref: A,
                  className: l()(Y.newTopicsBarContainer, Y.containerMarginTop),
                  children: [
                      (0, a.jsx)('div', {
                          className: l()(Y.newTopicsBarTopicSection),
                          children: (0, a.jsx)(E.Clickable, {
                              className: Y.newTopicsBarTextClickable,
                              'aria-label': H.Z.Messages.SUMMARY_PILL,
                              onClick: Q,
                              children: (0, a.jsxs)('div', {
                                  className: l()({
                                      [Y.newTopicsBarTextUnselected]: !z,
                                      [Y.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, a.jsx)(E.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: Y.newTopicsBarIcon
                                      }),
                                      (0, a.jsx)(E.Text, {
                                          variant: 'text-sm/medium',
                                          className: l()(Y.newTopicsBarCompact, Y.newTopicsBarText),
                                          children: er
                                      }),
                                      (0, a.jsx)(U.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: U.Z.Directions.DOWN,
                                          className: Y.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, a.jsx)(E.Clickable, {
                          onClick: et,
                          className: l()(Y.barButtonMain, Y.newTopicsBarInitial),
                          children: s
                      }),
                      (0, a.jsxs)(E.Clickable, {
                          onClick: en,
                          className: l()(Y.barButtonAlt, Y.flexEnd),
                          children: [
                              (0, a.jsx)('div', {
                                  className: Y.newTopicsBarCompact,
                                  children: H.Z.Messages.MARK_AS_READ
                              }),
                              (0, a.jsx)(E.ChatCheckIcon, {
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
                                                  (0, a.jsx)(E.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: Y.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(E.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: H.Z.Messages.SUMMARIES
                                                  }),
                                                  (0, a.jsx)(v.Z, { className: Y.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(E.Clickable, {
                                              'aria-label': H.Z.Messages.CLOSE,
                                              onClick: Q,
                                              className: Y.topicsDropdownClose,
                                              children: (0, a.jsx)(E.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(E.Scroller, {
                                      ref: R,
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
function es(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
function el(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !es(e, t[n]));
}
function eu(e) {
    var t, n, r;
    let { channel: i, scrollManager: s } = e,
        { disableInteractions: u } = o.useContext(S.G),
        [h, p] = o.useState(null),
        m = o.useRef(null),
        [g, A] = o.useState(null),
        N = o.useRef(null),
        O = (0, _.Wu)(
            [y.Z],
            () => {
                var e;
                return null !== (e = y.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        R = (0, T.Z)(O);
    o.useEffect(() => {
        !c().isEqual(R, O) &&
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [O, R, i.guild_id, i.id, i.type]);
    let L = (0, _.e7)(
            [P.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == O
                            ? void 0
                            : O.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = P.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(x.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [O],
            el
        ),
        D = null !== (n = (0, _.e7)([y.Z], () => y.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        M = null == O ? void 0 : null === (t = O[D]) || void 0 === t ? void 0 : t.topic;
    null == M && null == h && (null == O ? void 0 : O.length) >= 1 && (M = null === (r = O[0]) || void 0 === r ? void 0 : r.topic);
    let G = o.useMemo(() => c().get(O, D - 1), [D, O]),
        k = o.useMemo(() => c().get(O, D + 1), [D, O]),
        B = o.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    p(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [p]
        ),
        Z = o.useMemo(
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
        j = o.useCallback(
            (e) => {
                Z(), B(e);
            },
            [B, Z]
        ),
        [W, K] = o.useState(!1),
        z = o.useCallback(() => {
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                K(!W);
        }, [W, O, K, i]),
        q = o.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.DZ.PILL_DROPDOWN,
                    n = O[e];
                if (null == n) return;
                (0, C.wv)(i.id, n.id), (0, C.yK)(i.id, n.id);
                let r = () => {
                    s.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            s.addAutomaticAnchorCallback(j, !1);
                        }, 100);
                };
                s.removeAutomaticAnchorCallback(j),
                    s.addScrollCompleteCallback(r),
                    w.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: I.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [O, i, j, s]
        ),
        Q = o.useCallback(() => {
            q(D - 1, V.DZ.PILL_NEXT_ARROW);
        }, [q, D]),
        X = o.useCallback(() => {
            q(D + 1, V.DZ.PILL_PREVIOUS_ARROW);
        }, [D, q]),
        $ = o.useCallback((e) => {
            var t;
            K(e);
            let n = null === (t = N.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && A(n);
        }, []);
    o.useEffect(() => {
        if (null != g && W) {
            var e;
            null === (e = N.current) || void 0 === e || e.scrollTo({ top: g });
        }
    }, [g, W]);
    let J = o.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = m.current) || void 0 === t ? void 0 : t.contains(e.target))))
                W &&
                    w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: O.length,
                        message_counts: O.map((e) => e.count),
                        start_message_ids: O.map((e) => e.startId),
                        end_message_ids: O.map((e) => e.endId),
                        num_participants: O.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    $(!1);
        },
        [W, O, i, $]
    );
    o.useEffect(
        () => (
            s.addAutomaticAnchorCallback(j),
            () => {
                s.removeAutomaticAnchorCallback(j);
            }
        ),
        [s, j]
    ),
        o.useEffect(() => {
            (0, C.G1)(i.id);
        }, [i.id]),
        o.useEffect(
            () => (
                document.addEventListener('mousedown', J),
                () => {
                    document.removeEventListener('mousedown', J);
                }
            ),
            [J]
        );
    let ee = o.useMemo(
        () =>
            (0, a.jsx)(b.Z, {
                channel: i,
                summaries: O,
                summariesMembers: L,
                selectTopic: q,
                setOpen: $
            }),
        [O, L, q, $, i]
    );
    if (!(0, _.e7)([y.Z], () => y.Z.shouldShowTopicsBar())) return null;
    let et = H.Z.Messages.SUMMARIES_NO_SUMMARIES;
    return (
        O.length > 0 && (et = '' === M || null == M ? H.Z.Messages.SUMMARIES_VIEW_ALL : M),
        u
            ? null
            : (0, a.jsxs)('div', {
                  ref: m,
                  className: l()(Y.topicsPillContainer, Y.containerMarginTop),
                  children: [
                      (0, a.jsxs)('div', {
                          className: Y.topicsPill,
                          children: [
                              (0, a.jsx)(E.Clickable, {
                                  className: Y.topicsPillText,
                                  'aria-label': H.Z.Messages.SUMMARY_PILL,
                                  onClick: z,
                                  children: (0, a.jsxs)('div', {
                                      className: l()({
                                          [Y.topicsPillTextUnselected]: !W,
                                          [Y.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, a.jsx)(E.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: Y.topicsPillSummaryIcon
                                          }),
                                          (0, a.jsx)(E.Text, {
                                              className: Y.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, a.jsx)(U.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: U.Z.Directions.DOWN,
                                              className: Y.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: Y.topicsPillCarets,
                                  children: [
                                      (0, a.jsx)(E.Clickable, {
                                          'aria-label': H.Z.Messages.SUMMARY_PILL_NEXT,
                                          onClick: X,
                                          className: l()(Y.topicsPillCaret, Y.topicsCaretLeft, { [Y.topicsPillCaretDisabled]: null == k }),
                                          children: (0, a.jsx)(U.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: U.Z.Directions.UP
                                          })
                                      }),
                                      (0, a.jsx)(E.Clickable, {
                                          'aria-label': H.Z.Messages.SUMMARY_PILL_PREVIOUS,
                                          onClick: Q,
                                          className: l()(Y.topicsPillCaret, Y.topicsCaretRight, { [Y.topicsPillCaretDisabled]: null == G }),
                                          children: (0, a.jsx)(U.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: U.Z.Directions.DOWN
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
                                                  (0, a.jsx)(E.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: Y.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(E.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: H.Z.Messages.SUMMARIES
                                                  }),
                                                  (0, a.jsx)(v.Z, { className: Y.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(E.Clickable, {
                                              'aria-label': H.Z.Messages.CLOSE,
                                              onClick: z,
                                              className: Y.topicsDropdownClose,
                                              children: (0, a.jsx)(E.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(E.Scroller, {
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
let ec = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, a.jsxs)('div', {
            className: Y.tooltip,
            children: [
                (0, a.jsx)(E.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: Y.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, a.jsx)(E.Text, {
                        className: Y.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: H.Z.Messages.EMOJI_TOOLTIP_CLICK_CTA
                    })
            ]
        });
    },
    ed = (e) => {
        let { children: t, className: n } = e;
        return (0, a.jsx)('div', {
            className: l()(Y.popoutContainer, n),
            children: t
        });
    },
    e_ = (e) => {
        let { className: t } = e;
        return (0, a.jsx)(ed, {
            className: t,
            children: (0, a.jsx)('div', {
                className: Y.popoutLoadingBackground,
                children: (0, a.jsx)('div', { className: Y.popoutLoadingForeground })
            })
        });
    };

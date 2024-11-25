n.d(t, {
    Z: function () {
        return ei;
    }
}),
    n(653041),
    n(47120),
    n(733860);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(904245),
    s = n(966390),
    o = n(902840),
    c = n(607070),
    d = n(367907),
    u = n(605984),
    h = n(453470),
    p = n(858644),
    m = n(600084),
    f = n(62764),
    g = n(79712),
    C = n(736052),
    x = n(359110),
    _ = n(359119),
    v = n(13279),
    I = n(248789),
    E = n(88101),
    b = n(576954),
    Z = n(280006),
    N = n(347102),
    S = n(765104),
    T = n(122707),
    j = n(779836),
    A = n(23750),
    y = n(496675),
    P = n(306680),
    M = n(944486),
    R = n(594174),
    L = n(55935),
    k = n(70956),
    O = n(709054),
    D = n(534091),
    w = n(900164),
    B = n(554838),
    U = n(481369),
    H = n(186877),
    G = n(294218),
    F = n(534469),
    V = n(993397),
    z = n(511010),
    W = n(524444),
    K = n(977391),
    Y = n(921235),
    q = n(97352),
    X = n(226027),
    J = n(959517),
    Q = n(981631),
    $ = n(134612),
    ee = n(388032);
function et(e) {
    return null != e && e.type === Q.ys_.MESSAGE && e.content.id === e.groupId;
}
let en = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: r } = e;
    return (0, i.jsx)(G.Z, {
        isGroupStart: r,
        channel: n,
        message: new A.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: Q.uaV.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(p.g, {
                    filename: t.name,
                    progress: null != t.progress ? t.progress : 0,
                    size: t.currentSize,
                    onCancelUpload: () => {
                        s.Z.cancel(t);
                    }
                })
            }
        })
    });
});
function ei(e) {
    var t, n;
    let l,
        s,
        { channel: p, messages: G, unreadCount: ei, showNewMessagesBar: el, messageDisplayCompact: er, channelStream: ea, uploads: es, scrollManager: eo, specs: ec, filterAfterTimestamp: ed, showingQuarantineBanner: eu, hideSummaries: eh, jumpBarClassName: ep } = e,
        em = R.default.getCurrentUser(),
        ef = () => eo.isInitialized() || G.ready,
        eg = (0, H.$)(p),
        eC = G.length > 0 && (null === (t = G.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(p)),
        ex = (0, o.ts)(p),
        e_ = (0, r.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !eh),
        ev = (0, E.P)(p.id),
        eI = (0, v.z)(p.id, $.zr),
        eE = (0, u.k)(p.id, $.zr),
        eb = (0, U.Z)(),
        eZ = (function (e, t) {
            if (e.isDM() && null != t)
                return t.type === _.pj.STRANGER_DANGER
                    ? (0, i.jsx)(b.M, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                    : t.type === _.pj.LIKELY_ATO
                      ? (0, i.jsx)(h.M, {
                            channelId: e.id,
                            warningId: t.id,
                            senderId: e.getRecipientId()
                        })
                      : (0, i.jsx)(I.Y, {
                            channelId: e.id,
                            warningId: t.id,
                            senderId: e.getRecipientId()
                        });
            return e.isGroupDM() && (0, Z.f)({ location: 'blocked_user_banner' }) ? (0, i.jsx)(N.e, { channel: e }) : null;
        })(p, null !== (n = null != ev ? ev : eI) && void 0 !== n ? n : eE),
        eN = p.isForumPost() && !eC ? (0, i.jsx)(f.Z, { postId: p.id }) : null,
        eS = (0, C.Z)(p.id);
    (0, q.Z)();
    let eT = null,
        ej = [],
        eA = ea.map((e, t) => {
            if (e.type === Q.ys_.DIVIDER) {
                var n, l;
                let r = null != e.unreadId;
                return null != ed
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(j.Z, {
                            index: t,
                            item: e,
                            channel: p,
                            isBeforeGroup: null == e.content && et(ea[t + 1])
                        })
                      : (0, i.jsx)(
                            z.Z,
                            {
                                isUnread: r,
                                isBeforeGroup: null == e.content && et(ea[t + 1]),
                                id: r ? J.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (l = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== l ? l : t)
                        );
            }
            if (e.type === Q.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    f.Z,
                    {
                        parentChannelId: p.parent_id,
                        postId: p.id,
                        isLastItem: t + 1 === ea.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(p.id)
                );
            if (e.type === Q.ys_.MESSAGE_GROUP_BLOCKED || e.type === Q.ys_.MESSAGE_GROUP_IGNORED || e.type === Q.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === Q.ys_.MESSAGE_GROUP_BLOCKED ? ee.t['+FcYMz'] : e.type === Q.ys_.MESSAGE_GROUP_IGNORED ? ee.t.VFWjc3 : ee.t.xfkfTE),
                    (0, i.jsx)(
                        V.Z,
                        {
                            unreadId: J.j1,
                            messages: e,
                            channel: p,
                            compact: er,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != ed && ed > e.content.timestamp.getTime() * k.Z.Millis.SECOND) return;
            let r = y.Z.can(Q.Plq.CREATE_INSTANT_INVITE, p);
            if ((0, w.Z)(e.content, r)) return;
            e.type === Q.ys_.MESSAGE && null == eT && (eT = e);
            let a = e.groupId === (null == eT ? void 0 : eT.groupId) ? eT.content.id : e.groupId,
                s = e.type === Q.ys_.THREAD_STARTER_MESSAGE ? F.Ru : F.ZP;
            return (0, i.jsx)(
                s,
                {
                    compact: er,
                    channel: p,
                    message: e.content,
                    groupId: a,
                    flashKey: e.flashKey,
                    id: (0, D.p)(p.id, e.content.id),
                    isLastItem: t >= ea.length - 1,
                    renderContentOnly: eS
                },
                e.content.id
            );
        });
    ej.push(...eA);
    let ey = ea[ea.length - 1];
    if (
        (null != em &&
            es.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, B.J)(
                        p,
                        ey,
                        new A.ZP({
                            type: Q.uaV.DEFAULT,
                            author: em
                        })
                    );
                ej.push(
                    (0, i.jsx)(
                        en,
                        {
                            file: e,
                            channel: p,
                            user: em,
                            isGroupStart: n
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        G.hasMoreBefore && null == ed)
    ) {
        G.length > 0 &&
            ej.unshift(
                (0, i.jsx)(
                    'div',
                    {
                        style: {
                            height: J.D4,
                            flex: '0 0 auto'
                        }
                    },
                    'buffer'
                )
            );
        let { useReducedMotion: e } = c.Z;
        ((e && ef()) || !e) &&
            ej.unshift(
                (0, i.jsx)(
                    K.ZP,
                    {
                        compact: er,
                        ...ec
                    },
                    'has-more'
                )
            );
    }
    if (
        ((!G.hasMoreBefore || null != ed) &&
            ej.unshift(
                (0, i.jsx)(
                    m.Z,
                    {
                        channel: p,
                        showingBanner: eu
                    },
                    'empty-message'
                )
            ),
        G.hasMoreAfter &&
            ej.push(
                (0, i.jsx)(
                    K.ZP,
                    {
                        compact: er,
                        ...ec
                    },
                    'has-more-after'
                )
            ),
        !eu && eg && ef() && ej.push((0, i.jsx)(Y.Z, { channel: p })),
        ei > 0 && el && ef())
    ) {
        let e, t;
        let n = P.ZP.getOldestUnreadTimestamp(p.id),
            r = 0 !== n ? n : O.default.extractTimestamp(p.id),
            a = (0, L.KC)(new Date(), new Date(r));
        if ((P.ZP.isEstimated(p.id) ? ((e = a ? ee.t.wvtbbG : ee.t.tHqbtr), (t = ee.t.vaPWFR)) : ((e = a ? ee.t.BctFHx : ee.t['3wXb9P']), (t = ee.t['4H8ldH'])), ex && (0, o.tW)(p) && eb.includes(X.E.SUMMARIES))) {
            let n = P.ZP.ackMessageId(p.id),
                a = (0, T.q)(p.id, P.ZP.getOldestUnreadMessageId(p.id));
            if (
                ((0, d.yw)(Q.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: ei,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: e_,
                    summaries_enabled_for_channel: (0, o.Lp)(p)
                }),
                (0, o.Lp)(p))
            ) {
                let n = e_
                    ? ee.intl.format(t, { count: ei })
                    : ee.intl.format(e, {
                          count: ei,
                          timestamp: r
                      });
                if (e_) {
                    let e =
                        a > 0
                            ? (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      textTransform: 'none',
                                      alignItems: 'center',
                                      position: 'absolute',
                                      left: '40%'
                                  },
                                  children: [
                                      ee.intl.format(t, { count: ei }),
                                      (0, i.jsx)(g.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      ee.intl.format(ee.t.CBftDQ, { count: a })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  style: {
                                      display: 'flex',
                                      textTransform: 'none',
                                      alignItems: 'center',
                                      position: 'absolute',
                                      left: '45%'
                                  },
                                  children: n
                              });
                    l = (0, i.jsx)(W.G5, {
                        scrollManager: eo,
                        content: e,
                        channel: p
                    });
                } else {
                    let e = (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            a > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          ee.intl.format(t, { count: ei }),
                                          (0, i.jsx)(g.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          ee.intl.format(ee.t.CBftDQ, { count: a })
                                      ]
                                  })
                                : (0, i.jsx)(i.Fragment, { children: n })
                    });
                    l = (0, i.jsx)(W.LE, {
                        content: e,
                        channelId: p.id
                    });
                }
            }
        } else
            eb.includes(X.E.NEW_MESSAGES) &&
                (l = (0, i.jsx)(W.LE, {
                    content: ee.intl.format(e, {
                        count: ei,
                        timestamp: r
                    }),
                    channelId: p.id
                }));
    }
    if (
        (null == l &&
            (0, o.Lp)(p) &&
            e_ &&
            eb.includes(X.E.SUMMARIES) &&
            (l = (0, i.jsx)(W.BO, {
                channel: p,
                scrollManager: eo
            })),
        G.error)
    )
        s = (0, i.jsx)(W.Rp, {
            loading: G.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = p.id),
                    void a.Z.fetchMessages({
                        channelId: e,
                        limit: Q.AQB,
                        truncate: !0
                    })
                );
            },
            className: ep
        });
    else if (G.hasMoreAfter && ef()) {
        let { jumpReturnTargetId: e } = G;
        s =
            G.loadingMore && G.jumpedToPresent
                ? (0, i.jsx)(W.DR, { className: ep })
                : null != e
                  ? (0, i.jsx)(W.DR, {
                        type: W.A7.REPLY,
                        onClick: () => {
                            var t, n;
                            return (
                                (t = p),
                                (n = e),
                                void a.Z.jumpToMessage({
                                    channelId: t.id,
                                    messageId: n,
                                    flash: !0
                                })
                            );
                        },
                        className: ep
                    })
                  : (0, i.jsx)(W.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, Q.AQB);
                                let t = M.Z.getChannelId();
                                e.id === t && (0, x.Kh)(e.id);
                            })(p),
                        className: ep
                    });
    }
    return {
        channelStreamMarkup: ej,
        newMessagesBar: l,
        jumpToPresentBar: s,
        forumPostActionBar: eN,
        safetyWarningBanner: eZ
    };
}

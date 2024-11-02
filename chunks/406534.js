n.d(t, {
    Z: function () {
        return et;
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
    u = n(367907),
    d = n(858644),
    h = n(600084),
    m = n(62764),
    p = n(79712),
    f = n(736052),
    g = n(359110),
    C = n(359119),
    x = n(13279),
    v = n(248789),
    _ = n(88101),
    I = n(576954),
    E = n(280006),
    b = n(347102),
    S = n(765104),
    Z = n(122707),
    T = n(779836),
    N = n(23750),
    j = n(496675),
    A = n(306680),
    y = n(944486),
    P = n(594174),
    M = n(55935),
    R = n(70956),
    L = n(709054),
    k = n(534091),
    O = n(900164),
    w = n(554838),
    D = n(481369),
    U = n(186877),
    B = n(294218),
    H = n(534469),
    F = n(993397),
    G = n(511010),
    V = n(524444),
    z = n(977391),
    W = n(921235),
    Y = n(97352),
    K = n(226027),
    q = n(959517),
    X = n(981631),
    J = n(134612),
    Q = n(388032);
function $(e) {
    return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: r } = e;
    return (0, i.jsx)(B.Z, {
        isGroupStart: r,
        channel: n,
        message: new N.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: X.uaV.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(d.g, {
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
function et(e) {
    var t;
    let n,
        l,
        { channel: s, messages: d, unreadCount: B, showNewMessagesBar: et, messageDisplayCompact: en, channelStream: ei, uploads: el, scrollManager: er, specs: ea, filterAfterTimestamp: es, showingQuarantineBanner: eo, hideSummaries: ec } = e,
        eu = P.default.getCurrentUser(),
        ed = () => er.isInitialized() || d.ready,
        eh = (0, U.$)(s),
        em = d.length > 0 && (null === (t = d.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(s)),
        ep = (0, o.ts)(s),
        ef = (0, r.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ec),
        eg = (0, _.P)(s.id),
        eC = (0, x.z)(s.id, J.zr),
        ex = (0, D.Z)(),
        ev = (function (e, t) {
            return e.isDM() && null != t
                ? t.type === C.pj.STRANGER_DANGER
                    ? (0, i.jsx)(I.M, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                    : (0, i.jsx)(v.Y, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                : e.isGroupDM() && (0, E.f)({ location: 'blocked_user_banner' })
                  ? (0, i.jsx)(b.e, { channel: e })
                  : null;
        })(s, null != eg ? eg : eC),
        e_ = s.isForumPost() && !em ? (0, i.jsx)(m.Z, { postId: s.id }) : null,
        eI = (0, f.Z)(s.id);
    (0, Y.Z)();
    let eE = null,
        eb = [],
        eS = ei.map((e, t) => {
            if (e.type === X.ys_.DIVIDER) {
                var n, l;
                let r = null != e.unreadId;
                return null != es
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(T.Z, {
                            index: t,
                            item: e,
                            channel: s,
                            isBeforeGroup: null == e.content && $(ei[t + 1])
                        })
                      : (0, i.jsx)(
                            G.Z,
                            {
                                isUnread: r,
                                isBeforeGroup: null == e.content && $(ei[t + 1]),
                                id: r ? q.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (l = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== l ? l : t)
                        );
            }
            if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    m.Z,
                    {
                        parentChannelId: s.parent_id,
                        postId: s.id,
                        isLastItem: t + 1 === ei.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(s.id)
                );
            if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? Q.t['+FcYMz'] : Q.t.xfkfTE),
                    (0, i.jsx)(
                        F.Z,
                        {
                            unreadId: q.j1,
                            messages: e,
                            channel: s,
                            compact: en,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != es && es > e.content.timestamp.getTime() * R.Z.Millis.SECOND) return;
            let r = j.Z.can(X.Plq.CREATE_INSTANT_INVITE, s);
            if ((0, O.Z)(e.content, r)) return;
            e.type === X.ys_.MESSAGE && null == eE && (eE = e);
            let a = e.groupId === (null == eE ? void 0 : eE.groupId) ? eE.content.id : e.groupId,
                o = e.type === X.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, i.jsx)(
                o,
                {
                    compact: en,
                    channel: s,
                    message: e.content,
                    groupId: a,
                    flashKey: e.flashKey,
                    id: (0, k.p)(s.id, e.content.id),
                    isLastItem: t >= ei.length - 1,
                    renderContentOnly: eI
                },
                e.content.id
            );
        });
    eb.push(...eS);
    let eZ = ei[ei.length - 1];
    if (
        (null != eu &&
            el.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, w.J)(
                        s,
                        eZ,
                        new N.ZP({
                            type: X.uaV.DEFAULT,
                            author: eu
                        })
                    );
                eb.push(
                    (0, i.jsx)(
                        ee,
                        {
                            file: e,
                            channel: s,
                            user: eu,
                            isGroupStart: n
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        d.hasMoreBefore && null == es)
    ) {
        d.length > 0 &&
            eb.unshift(
                (0, i.jsx)(
                    'div',
                    {
                        style: {
                            height: q.D4,
                            flex: '0 0 auto'
                        }
                    },
                    'buffer'
                )
            );
        let { useReducedMotion: e } = c.Z;
        ((e && ed()) || !e) &&
            eb.unshift(
                (0, i.jsx)(
                    z.ZP,
                    {
                        compact: en,
                        ...ea
                    },
                    'has-more'
                )
            );
    }
    if (
        ((!d.hasMoreBefore || null != es) &&
            eb.unshift(
                (0, i.jsx)(
                    h.Z,
                    {
                        channel: s,
                        showingBanner: eo
                    },
                    'empty-message'
                )
            ),
        d.hasMoreAfter &&
            eb.push(
                (0, i.jsx)(
                    z.ZP,
                    {
                        compact: en,
                        ...ea
                    },
                    'has-more-after'
                )
            ),
        !eo && eh && ed() && eb.push((0, i.jsx)(W.Z, { channel: s })),
        B > 0 && et && ed())
    ) {
        let e, t;
        let l = A.ZP.getOldestUnreadTimestamp(s.id),
            r = 0 !== l ? l : L.default.extractTimestamp(s.id),
            a = (0, M.KC)(new Date(), new Date(r));
        if ((A.ZP.isEstimated(s.id) ? ((e = a ? Q.t.wvtbbG : Q.t.tHqbtr), (t = Q.t.vaPWFR)) : ((e = a ? Q.t.BctFHx : Q.t['3wXb9P']), (t = Q.t['4H8ldH'])), ep && (0, o.tW)(s) && ex.includes(K.E.SUMMARIES))) {
            let l = A.ZP.ackMessageId(s.id),
                a = (0, Z.q)(s.id, A.ZP.getOldestUnreadMessageId(s.id));
            if (
                ((0, u.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: B,
                    last_ack_message_id: l,
                    summaries_enabled_by_user: ef,
                    summaries_enabled_for_channel: (0, o.Lp)(s)
                }),
                (0, o.Lp)(s))
            ) {
                let l = ef
                    ? Q.intl.format(t, { count: B })
                    : Q.intl.format(e, {
                          count: B,
                          timestamp: r
                      });
                if (ef) {
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
                                      Q.intl.format(t, { count: B }),
                                      (0, i.jsx)(p.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      Q.intl.format(Q.t.CBftDQ, { count: a })
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
                                  children: l
                              });
                    n = (0, i.jsx)(V.G5, {
                        scrollManager: er,
                        content: e,
                        channel: s
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
                                          Q.intl.format(t, { count: B }),
                                          (0, i.jsx)(p.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          Q.intl.format(Q.t.CBftDQ, { count: a })
                                      ]
                                  })
                                : (0, i.jsx)(i.Fragment, { children: l })
                    });
                    n = (0, i.jsx)(V.LE, {
                        content: e,
                        channelId: s.id
                    });
                }
            }
        } else
            ex.includes(K.E.NEW_MESSAGES) &&
                (n = (0, i.jsx)(V.LE, {
                    content: Q.intl.format(e, {
                        count: B,
                        timestamp: r
                    }),
                    channelId: s.id
                }));
    }
    if (
        (null == n &&
            (0, o.Lp)(s) &&
            ef &&
            ex.includes(K.E.SUMMARIES) &&
            (n = (0, i.jsx)(V.BO, {
                channel: s,
                scrollManager: er
            })),
        d.error)
    )
        l = (0, i.jsx)(V.Rp, {
            loading: d.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = s.id),
                    void a.Z.fetchMessages({
                        channelId: e,
                        limit: X.AQB,
                        truncate: !0
                    })
                );
            }
        });
    else if (d.hasMoreAfter && ed()) {
        let { jumpReturnTargetId: e } = d;
        l =
            d.loadingMore && d.jumpedToPresent
                ? (0, i.jsx)(V.DR, {})
                : null != e
                  ? (0, i.jsx)(V.DR, {
                        type: V.A7.REPLY,
                        onClick: () => {
                            var t, n;
                            return (
                                (t = s),
                                (n = e),
                                void a.Z.jumpToMessage({
                                    channelId: t.id,
                                    messageId: n,
                                    flash: !0
                                })
                            );
                        }
                    })
                  : (0, i.jsx)(V.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, X.AQB);
                                let t = y.Z.getChannelId();
                                e.id === t && (0, g.Kh)(e.id);
                            })(s)
                    });
    }
    return {
        channelStreamMarkup: eb,
        newMessagesBar: n,
        jumpToPresentBar: l,
        forumPostActionBar: e_,
        safetyWarningBanner: ev
    };
}

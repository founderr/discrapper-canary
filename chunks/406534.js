n.d(t, {
    Z: function () {
        return et;
    }
}),
    n(653041),
    n(47120),
    n(733860);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(904245),
    r = n(966390),
    o = n(902840),
    c = n(607070),
    u = n(367907),
    d = n(858644),
    h = n(600084),
    p = n(62764),
    m = n(79712),
    _ = n(736052),
    f = n(359110),
    E = n(359119),
    g = n(13279),
    C = n(248789),
    I = n(88101),
    T = n(576954),
    x = n(280006),
    v = n(347102),
    S = n(765104),
    N = n(122707),
    A = n(779836),
    Z = n(23750),
    M = n(496675),
    b = n(306680),
    R = n(944486),
    L = n(594174),
    P = n(55935),
    j = n(70956),
    O = n(709054),
    y = n(534091),
    D = n(900164),
    U = n(554838),
    k = n(481369),
    w = n(186877),
    B = n(294218),
    H = n(534469),
    G = n(993397),
    V = n(511010),
    F = n(524444),
    W = n(977391),
    z = n(921235),
    Y = n(97352),
    K = n(226027),
    q = n(959517),
    X = n(981631),
    J = n(134612),
    Q = n(689938);
function $(e) {
    return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = s.memo(function (e) {
    let { file: t, channel: n, user: s, isGroupStart: a } = e;
    return (0, i.jsx)(B.Z, {
        isGroupStart: a,
        channel: n,
        message: new Z.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: X.uaV.DEFAULT,
            author: s,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(d.g, {
                    filename: t.name,
                    progress: null != t.progress ? t.progress : 0,
                    size: t.currentSize,
                    onCancelUpload: () => {
                        r.Z.cancel(t);
                    }
                })
            }
        })
    });
});
function et(e) {
    var t;
    let n,
        s,
        { channel: r, messages: d, unreadCount: B, showNewMessagesBar: et, messageDisplayCompact: en, channelStream: ei, uploads: es, scrollManager: ea, specs: el, filterAfterTimestamp: er, showingQuarantineBanner: eo, hideSummaries: ec } = e,
        eu = L.default.getCurrentUser(),
        ed = () => ea.isInitialized() || d.ready,
        eh = (0, w.$)(r),
        ep = d.length > 0 && (null === (t = d.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(r)),
        em = (0, o.ts)(r),
        e_ = (0, a.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ec),
        ef = (0, I.P)(r.id),
        eE = (0, g.z)(r.id, J.zr),
        eg = (0, k.Z)(),
        eC = (function (e, t) {
            return e.isDM() && null != t
                ? t.type === E.pj.STRANGER_DANGER
                    ? (0, i.jsx)(T.M, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                    : (0, i.jsx)(C.Y, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                : e.isGroupDM() && (0, x.f)({ location: 'blocked_user_banner' })
                  ? (0, i.jsx)(v.e, { channel: e })
                  : null;
        })(r, null != ef ? ef : eE),
        eI = r.isForumPost() && !ep ? (0, i.jsx)(p.Z, { postId: r.id }) : null,
        eT = (0, _.Z)(r.id);
    (0, Y.Z)();
    let ex = null,
        ev = [],
        eS = ei.map((e, t) => {
            if (e.type === X.ys_.DIVIDER) {
                var n, s;
                let a = null != e.unreadId;
                return null != er
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(A.Z, {
                            index: t,
                            item: e,
                            channel: r,
                            isBeforeGroup: null == e.content && $(ei[t + 1])
                        })
                      : (0, i.jsx)(
                            V.Z,
                            {
                                isUnread: a,
                                isBeforeGroup: null == e.content && $(ei[t + 1]),
                                id: a ? q.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (s = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== s ? s : t)
                        );
            }
            if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    p.Z,
                    {
                        parentChannelId: r.parent_id,
                        postId: r.id,
                        isLastItem: t + 1 === ei.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(r.id)
                );
            if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? Q.Z.Messages.BLOCKED_MESSAGE_COUNT : Q.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT),
                    (0, i.jsx)(
                        G.Z,
                        {
                            unreadId: q.j1,
                            messages: e,
                            channel: r,
                            compact: en,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != er && er > e.content.timestamp.getTime() * j.Z.Millis.SECOND) return;
            let a = M.Z.can(X.Plq.CREATE_INSTANT_INVITE, r);
            if ((0, D.Z)(e.content, a)) return;
            e.type === X.ys_.MESSAGE && null == ex && (ex = e);
            let l = e.groupId === (null == ex ? void 0 : ex.groupId) ? ex.content.id : e.groupId,
                o = e.type === X.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, i.jsx)(
                o,
                {
                    compact: en,
                    channel: r,
                    message: e.content,
                    groupId: l,
                    flashKey: e.flashKey,
                    id: (0, y.p)(r.id, e.content.id),
                    isLastItem: t >= ei.length - 1,
                    renderContentOnly: eT
                },
                e.content.id
            );
        });
    ev.push(...eS);
    let eN = ei[ei.length - 1];
    if (
        (null != eu &&
            es.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, U.J)(
                        r,
                        eN,
                        new Z.ZP({
                            type: X.uaV.DEFAULT,
                            author: eu
                        })
                    );
                ev.push(
                    (0, i.jsx)(
                        ee,
                        {
                            file: e,
                            channel: r,
                            user: eu,
                            isGroupStart: n
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        d.hasMoreBefore && null == er)
    ) {
        d.length > 0 &&
            ev.unshift(
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
            ev.unshift(
                (0, i.jsx)(
                    W.ZP,
                    {
                        compact: en,
                        ...el
                    },
                    'has-more'
                )
            );
    }
    if (
        ((!d.hasMoreBefore || null != er) &&
            ev.unshift(
                (0, i.jsx)(
                    h.Z,
                    {
                        channel: r,
                        showingBanner: eo
                    },
                    'empty-message'
                )
            ),
        d.hasMoreAfter &&
            ev.push(
                (0, i.jsx)(
                    W.ZP,
                    {
                        compact: en,
                        ...el
                    },
                    'has-more-after'
                )
            ),
        !eo && eh && ed() && ev.push((0, i.jsx)(z.Z, { channel: r })),
        B > 0 && et && ed())
    ) {
        let e, t;
        let s = b.ZP.getOldestUnreadTimestamp(r.id),
            a = 0 !== s ? s : O.default.extractTimestamp(r.id),
            l = (0, P.KC)(new Date(), new Date(a));
        if ((b.ZP.isEstimated(r.id) ? ((e = l ? Q.Z.Messages.NEW_MESSAGES_ESTIMATED : Q.Z.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE), (t = Q.Z.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES)) : ((e = l ? Q.Z.Messages.NEW_MESSAGES : Q.Z.Messages.NEW_MESSAGES_WITH_DATE), (t = Q.Z.Messages.NEW_MESSAGES_SUMMARIES)), em && (0, o.tW)(r) && eg.includes(K.E.SUMMARIES))) {
            let s = b.ZP.ackMessageId(r.id),
                l = (0, N.q)(r.id, b.ZP.getOldestUnreadMessageId(r.id));
            if (
                ((0, u.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: l,
                    num_unread_messages: B,
                    last_ack_message_id: s,
                    summaries_enabled_by_user: e_,
                    summaries_enabled_for_channel: (0, o.Lp)(r)
                }),
                (0, o.Lp)(r))
            ) {
                let s = e_
                    ? t.format({ count: B })
                    : e.format({
                          count: B,
                          timestamp: a
                      });
                if (e_) {
                    let e =
                        l > 0
                            ? (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      textTransform: 'none',
                                      alignItems: 'center',
                                      position: 'absolute',
                                      left: '40%'
                                  },
                                  children: [
                                      t.format({ count: B }),
                                      (0, i.jsx)(m.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      Q.Z.Messages.NEW_SUMMARIES.format({ count: l })
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
                                  children: s
                              });
                    n = (0, i.jsx)(F.G5, {
                        scrollManager: ea,
                        content: e,
                        channel: r
                    });
                } else {
                    let e = (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            l > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          t.format({ count: B }),
                                          (0, i.jsx)(m.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          Q.Z.Messages.NEW_SUMMARIES.format({ count: l })
                                      ]
                                  })
                                : (0, i.jsx)(i.Fragment, { children: s })
                    });
                    n = (0, i.jsx)(F.LE, {
                        content: e,
                        channelId: r.id
                    });
                }
            }
        } else
            eg.includes(K.E.NEW_MESSAGES) &&
                (n = (0, i.jsx)(F.LE, {
                    content: e.format({
                        count: B,
                        timestamp: a
                    }),
                    channelId: r.id
                }));
    }
    if (
        (null == n &&
            (0, o.Lp)(r) &&
            e_ &&
            eg.includes(K.E.SUMMARIES) &&
            (n = (0, i.jsx)(F.BO, {
                channel: r,
                scrollManager: ea
            })),
        d.error)
    )
        s = (0, i.jsx)(F.Rp, {
            loading: d.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = r.id),
                    void l.Z.fetchMessages({
                        channelId: e,
                        limit: X.AQB,
                        truncate: !0
                    })
                );
            }
        });
    else if (d.hasMoreAfter && ed()) {
        let { jumpReturnTargetId: e } = d;
        s =
            d.loadingMore && d.jumpedToPresent
                ? (0, i.jsx)(F.DR, {})
                : null != e
                  ? (0, i.jsx)(F.DR, {
                        type: F.A7.REPLY,
                        onClick: () => {
                            var t, n;
                            return (
                                (t = r),
                                (n = e),
                                void l.Z.jumpToMessage({
                                    channelId: t.id,
                                    messageId: n,
                                    flash: !0
                                })
                            );
                        }
                    })
                  : (0, i.jsx)(F.DR, {
                        onClick: () =>
                            (function (e) {
                                l.Z.jumpToPresent(e.id, X.AQB);
                                let t = R.Z.getChannelId();
                                e.id === t && (0, f.Kh)(e.id);
                            })(r)
                    });
    }
    return {
        channelStreamMarkup: ev,
        newMessagesBar: n,
        jumpToPresentBar: s,
        forumPostActionBar: eI,
        safetyWarningBanner: eC
    };
}

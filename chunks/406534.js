n.d(t, {
    Z: function () {
        return et;
    }
}), n(653041), n(47120), n(733860);
var i = n(735250), a = n(470079), s = n(442837), l = n(904245), r = n(966390), o = n(902840), c = n(607070), d = n(367907), u = n(600084), h = n(62764), p = n(79712), m = n(736052), _ = n(359110), f = n(359119), E = n(13279), C = n(248789), g = n(88101), I = n(576954), x = n(280006), T = n(347102), v = n(765104), N = n(122707), S = n(779836), Z = n(23750), A = n(496675), M = n(306680), b = n(944486), R = n(594174), j = n(130208), L = n(55935), P = n(70956), O = n(709054), y = n(534091), D = n(900164), k = n(554838), U = n(481369), w = n(186877), B = n(294218), H = n(534469), G = n(993397), V = n(511010), F = n(524444), W = n(977391), z = n(921235), Y = n(97352), K = n(226027), q = n(959517), X = n(981631), Q = n(134612), J = n(689938);
function $(e) {
    return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = a.memo(function (e) {
    let {
        file: t,
        channel: n,
        user: a,
        isGroupStart: s
    } = e;
    return (0, i.jsx)(B.Z, {
        isGroupStart: s,
        channel: n,
        message: new Z.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: X.uaV.DEFAULT,
            author: a,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(j.g, {
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
    let n, a, r, {
            channel: j,
            messages: B,
            unreadCount: et,
            showNewMessagesBar: en,
            messageDisplayCompact: ei,
            channelStream: ea,
            uploads: es,
            scrollManager: el,
            specs: er,
            filterAfterTimestamp: eo,
            showingQuarantineBanner: ec,
            hideSummaries: ed
        } = e, eu = R.default.getCurrentUser(), eh = () => el.isInitialized() || B.ready, ep = (0, w.$)(j), em = B.length > 0 && (null === (t = B.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(j)), e_ = (0, o.ts)(j), ef = (0, s.e7)([v.Z], () => v.Z.shouldShowTopicsBar() && !ed), eE = (0, g.P)(j.id, Q.zr), eC = (0, E.z)(j.id, Q.zr), eg = (0, U.Z)(), eI = null != eE ? eE : eC;
    j.isDM() && null != eI ? n = eI.type === f.pj.STRANGER_DANGER ? (0, i.jsx)(I.M, {
        channelId: j.id,
        warningId: eI.id,
        senderId: j.getRecipientId()
    }) : (0, i.jsx)(C.Y, {
        channelId: j.id,
        warningId: eI.id,
        senderId: j.getRecipientId()
    }) : j.isGroupDM() && (0, x.f)({ location: 'blocked_user_banner' }) && (n = (0, i.jsx)(T.e, { channel: j }));
    let ex = j.isForumPost() && !em ? (0, i.jsx)(h.Z, { postId: j.id }) : null, eT = (0, m.Z)(j.id);
    (0, Y.Z)();
    let ev = null, eN = [], eS = ea.map((e, t) => {
            if (e.type === X.ys_.DIVIDER) {
                var n, a;
                let s = null != e.unreadId;
                return null != eo ? null : e.isSummaryDivider ? (0, i.jsx)(S.Z, {
                    index: t,
                    item: e,
                    channel: j,
                    isBeforeGroup: null == e.content && $(ea[t + 1])
                }) : (0, i.jsx)(V.Z, {
                    isUnread: s,
                    isBeforeGroup: null == e.content && $(ea[t + 1]),
                    id: s ? q.j1 : void 0,
                    children: e.content
                }, 'divider-'.concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t));
            }
            if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(h.Z, {
                    parentChannelId: j.parent_id,
                    postId: j.id,
                    isLastItem: t + 1 === ea.length,
                    isFirstMessage: !0
                }, 'forum-post-action-bar-'.concat(j.id));
            if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? J.Z.Messages.BLOCKED_MESSAGE_COUNT : J.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, i.jsx)(G.Z, {
                    unreadId: q.j1,
                    messages: e,
                    channel: j,
                    compact: ei,
                    collapsedReason: t
                }, e.key);
            }
            if (null != eo && eo > e.content.timestamp.getTime() * P.Z.Millis.SECOND)
                return;
            let s = A.Z.can(X.Plq.CREATE_INSTANT_INVITE, j);
            if ((0, D.Z)(e.content, s))
                return;
            e.type === X.ys_.MESSAGE && null == ev && (ev = e);
            let l = e.groupId === (null == ev ? void 0 : ev.groupId) ? ev.content.id : e.groupId, r = e.type === X.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, i.jsx)(r, {
                compact: ei,
                channel: j,
                message: e.content,
                groupId: l,
                flashKey: e.flashKey,
                id: (0, y.p)(j.id, e.content.id),
                isLastItem: t >= ea.length - 1,
                renderContentOnly: eT
            }, e.content.id);
        });
    eN.push(...eS);
    let eZ = ea[ea.length - 1];
    if (null != eu && es.forEach((e, t) => {
            let n = 0 === t && (0, k.J)(j, eZ, new Z.ZP({
                type: X.uaV.DEFAULT,
                author: eu
            }));
            eN.push((0, i.jsx)(ee, {
                file: e,
                channel: j,
                user: eu,
                isGroupStart: n
            }, 'upload-'.concat(e.id)));
        }), B.hasMoreBefore && null == eo) {
        B.length > 0 && eN.unshift((0, i.jsx)('div', {
            style: {
                height: q.D4,
                flex: '0 0 auto'
            }
        }, 'buffer'));
        let {useReducedMotion: e} = c.Z;
        (e && eh() || !e) && eN.unshift((0, i.jsx)(W.ZP, {
            compact: ei,
            ...er
        }, 'has-more'));
    }
    if ((!B.hasMoreBefore || null != eo) && eN.unshift((0, i.jsx)(u.Z, {
            channel: j,
            showingBanner: ec
        }, 'empty-message')), B.hasMoreAfter && eN.push((0, i.jsx)(W.ZP, {
            compact: ei,
            ...er
        }, 'has-more-after')), !ec && ep && eh() && eN.push((0, i.jsx)(z.Z, { channel: j })), et > 0 && en && eh()) {
        let e, t;
        let n = M.ZP.getOldestUnreadTimestamp(j.id), s = 0 !== n ? n : O.default.extractTimestamp(j.id), l = (0, L.KC)(new Date(), new Date(s));
        if (M.ZP.isEstimated(j.id) ? (e = l ? J.Z.Messages.NEW_MESSAGES_ESTIMATED : J.Z.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = J.Z.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = l ? J.Z.Messages.NEW_MESSAGES : J.Z.Messages.NEW_MESSAGES_WITH_DATE, t = J.Z.Messages.NEW_MESSAGES_SUMMARIES), e_ && (0, o.tW)(j) && eg.includes(K.E.SUMMARIES)) {
            let n = M.ZP.ackMessageId(j.id), l = (0, N.q)(j.id, M.ZP.getOldestUnreadMessageId(j.id));
            if ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: l,
                    num_unread_messages: et,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: ef,
                    summaries_enabled_for_channel: (0, o.Lp)(j)
                }), (0, o.Lp)(j)) {
                let n = ef ? t.format({ count: et }) : e.format({
                    count: et,
                    timestamp: s
                });
                if (ef) {
                    let e = l > 0 ? (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center',
                            position: 'absolute',
                            left: '40%'
                        },
                        children: [
                            t.format({ count: et }),
                            (0, i.jsx)(p.Z, {
                                style: {
                                    paddingLeft: 8,
                                    paddingRight: 8
                                },
                                height: 4,
                                width: 4
                            }),
                            J.Z.Messages.NEW_SUMMARIES.format({ count: l })
                        ]
                    }) : (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center',
                            position: 'absolute',
                            left: '45%'
                        },
                        children: n
                    });
                    a = (0, i.jsx)(F.G5, {
                        scrollManager: el,
                        content: e,
                        channel: j
                    });
                } else {
                    let e = (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children: l > 0 ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                t.format({ count: et }),
                                (0, i.jsx)(p.Z, {
                                    style: {
                                        paddingLeft: 8,
                                        paddingRight: 8
                                    },
                                    height: 4,
                                    width: 4
                                }),
                                J.Z.Messages.NEW_SUMMARIES.format({ count: l })
                            ]
                        }) : (0, i.jsx)(i.Fragment, { children: n })
                    });
                    a = (0, i.jsx)(F.LE, {
                        content: e,
                        channelId: j.id
                    });
                }
            }
        } else
            eg.includes(K.E.NEW_MESSAGES) && (a = (0, i.jsx)(F.LE, {
                content: e.format({
                    count: et,
                    timestamp: s
                }),
                channelId: j.id
            }));
    }
    if (null == a && (0, o.Lp)(j) && ef && eg.includes(K.E.SUMMARIES) && (a = (0, i.jsx)(F.BO, {
            channel: j,
            scrollManager: el
        })), B.error)
        r = (0, i.jsx)(F.Rp, {
            loading: B.loadingMore,
            onClick: () => {
                var e;
                return e = j.id, void l.Z.fetchMessages({
                    channelId: e,
                    limit: X.AQB,
                    truncate: !0
                });
            }
        });
    else if (B.hasMoreAfter && eh()) {
        let {jumpReturnTargetId: e} = B;
        r = B.loadingMore && B.jumpedToPresent ? (0, i.jsx)(F.DR, {}) : null != e ? (0, i.jsx)(F.DR, {
            type: F.A7.REPLY,
            onClick: () => {
                var t, n;
                return t = j, n = e, void l.Z.jumpToMessage({
                    channelId: t.id,
                    messageId: n,
                    flash: !0
                });
            }
        }) : (0, i.jsx)(F.DR, {
            onClick: () => function (e) {
                l.Z.jumpToPresent(e.id, X.AQB);
                let t = b.Z.getChannelId();
                e.id === t && (0, _.Kh)(e.id);
            }(j)
        });
    }
    return {
        channelStreamMarkup: eN,
        newMessagesBar: a,
        jumpToPresentBar: r,
        forumPostActionBar: ex,
        safetyWarningBanner: n
    };
}

"use strict";
n.r(t), n.d(t, {
  default: function() {
    return $
  }
}), n("424973"), n("222007"), n("843762");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("819689"),
  r = n("783480"),
  o = n("734575"),
  u = n("206230"),
  d = n("716241"),
  c = n("34695"),
  f = n("554393"),
  h = n("120027"),
  C = n("934288"),
  p = n("144491"),
  E = n("764828"),
  m = n("898436"),
  g = n("894295"),
  _ = n("933152"),
  S = n("820899"),
  T = n("347738"),
  A = n("339670"),
  M = n("21763"),
  I = n("719926"),
  N = n("957255"),
  v = n("660478"),
  L = n("18494"),
  R = n("697218"),
  y = n("410889"),
  x = n("888400"),
  O = n("718517"),
  D = n("299039"),
  P = n("154864"),
  j = n("383667"),
  b = n("459776"),
  F = n("921450"),
  H = n("366757"),
  U = n("699473"),
  k = n("556118"),
  G = n("342009"),
  B = n("97810"),
  w = n("933629"),
  V = n("88243"),
  W = n("753089"),
  Z = n("210062"),
  z = n("321933"),
  Y = n("894488"),
  K = n("49111"),
  q = n("324252"),
  X = n("782340");

function J(e) {
  return null != e && e.type === K.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let Q = s.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: s,
    isGroupStart: l
  } = e;
  return (0, a.jsx)(U.default, {
    isGroupStart: l,
    channel: n,
    message: new I.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: K.MessageTypes.DEFAULT,
      author: s,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, a.jsx)(y.AttachmentUpload, {
          filename: t.name,
          progress: null != t.progress ? t.progress : 0,
          size: t.currentSize,
          onCancelUpload: () => {
            r.default.cancel(t)
          }
        })
      }
    })
  })
});

function $(e) {
  var t;
  let n, s, r, {
      channel: y,
      messages: U,
      unreadCount: $,
      showNewMessagesBar: ee,
      messageDisplayCompact: et,
      channelStream: en,
      uploads: ea,
      scrollManager: es,
      specs: el,
      filterAfterTimestamp: ei,
      showingQuarantineBanner: er
    } = e,
    eo = R.default.getCurrentUser(),
    eu = () => es.isInitialized() || U.ready,
    ed = (0, H.useShowConvoStarterInDM)(y),
    ec = U.length > 0 && (null === (t = U.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(y)),
    ef = (0, o.useChannelSummariesExperiment)(y),
    eh = (0, l.useStateFromStores)([T.default], () => T.default.shouldShowTopicsBar()),
    eC = (0, _.useStrangerDangerWarning)(y.id, q.LOCATION_CONTEXT_WEB),
    ep = (0, m.useInappropriateConversationBannerForChannel)(y.id, q.LOCATION_CONTEXT_WEB),
    eE = (0, F.default)(),
    em = null != eC ? eC : ep;
  y.isDM() && null != em && (n = em.type === E.SafetyWarningTypes.STRANGER_DANGER ? (0, a.jsx)(S.StrangerDangerWarningBanner, {
    channelId: y.id,
    warningId: em.id,
    senderId: y.getRecipientId()
  }) : (0, a.jsx)(g.InappropriateConversationWarningBanner, {
    channelId: y.id,
    warningId: em.id,
    senderId: y.getRecipientId()
  }));
  let eg = y.isForumPost() && !ec ? (0, a.jsx)(f.default, {
      postId: y.id
    }) : null,
    e_ = (0, C.default)(y.id);
  (0, Z.default)();
  let eS = null,
    eT = [],
    eA = en.map((e, t) => {
      if (e.type === K.ChannelStreamTypes.DIVIDER) {
        var n, s;
        let l = null != e.unreadId;
        return null != ei ? null : e.isSummaryDivider ? (0, a.jsx)(M.default, {
          index: t,
          item: e,
          channel: y,
          isBeforeGroup: null == e.content && J(en[t + 1])
        }) : (0, a.jsx)(B.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && J(en[t + 1]),
          id: l ? Y.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (s = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== s ? s : t))
      }
      if (e.type === K.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, a.jsx)(f.default, {
        parentChannelId: y.parent_id,
        postId: y.id,
        isLastItem: t + 1 === en.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(y.id));
      if (e.type === K.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === K.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === K.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? X.default.Messages.BLOCKED_MESSAGE_COUNT : X.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, a.jsx)(G.default, {
          unreadId: Y.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: y,
          compact: et,
          collapsedReason: t
        }, e.key)
      }
      if (null != ei && ei > e.content.timestamp.getTime() * O.default.Millis.SECOND) return;
      let l = N.default.can(K.Permissions.CREATE_INSTANT_INVITE, y);
      if ((0, j.default)(e.content, l)) return;
      e.type === K.ChannelStreamTypes.MESSAGE && null == eS && (eS = e);
      let i = e.groupId === (null == eS ? void 0 : eS.groupId) ? eS.content.id : e.groupId,
        r = e.type === K.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? k.ThreadStarterChatMessage : k.default;
      return (0, a.jsx)(r, {
        compact: et,
        channel: y,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, P.getMessageDOMId)(y.id, e.content.id),
        isLastItem: t >= en.length - 1,
        renderContentOnly: e_
      }, e.content.id)
    });
  eT.push(...eA);
  let eM = en[en.length - 1];
  if (null != eo && ea.forEach((e, t) => {
      let n = 0 === t && (0, b.isNewGroupItem)(y, eM, new I.default({
        type: K.MessageTypes.DEFAULT,
        author: eo
      }));
      eT.push((0, a.jsx)(Q, {
        file: e,
        channel: y,
        user: eo,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), U.hasMoreBefore && null == ei) {
    U.length > 0 && eT.unshift((0, a.jsx)("div", {
      style: {
        height: Y.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = u.default;
    (e && eu() || !e) && eT.unshift((0, a.jsx)(V.default, {
      compact: et,
      ...el
    }, "has-more"))
  }
  if ((!U.hasMoreBefore || null != ei) && eT.unshift((0, a.jsx)(c.default, {
      channel: y,
      showingBanner: er
    }, "empty-message")), U.hasMoreAfter && eT.push((0, a.jsx)(V.default, {
      compact: et,
      ...el
    }, "has-more-after")), !er && ed && eu() && eT.push((0, a.jsx)(W.default, {
      channel: y
    })), $ > 0 && ee && eu()) {
    let e, t;
    let n = v.default.getOldestUnreadTimestamp(y.id),
      l = 0 !== n ? n : D.default.extractTimestamp(y.id),
      i = (0, x.isSameDay)(new Date, new Date(l));
    if (v.default.isEstimated(y.id) ? (e = i ? X.default.Messages.NEW_MESSAGES_ESTIMATED : X.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = X.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = i ? X.default.Messages.NEW_MESSAGES : X.default.Messages.NEW_MESSAGES_WITH_DATE, t = X.default.Messages.NEW_MESSAGES_SUMMARIES), ef && (0, o.channelEligibleForSummaries)(y) && eE.includes(z.ChatOverlays.SUMMARIES)) {
      let n = v.default.ackMessageId(y.id),
        i = (0, A.getUnreadTopicsCount)(y.id, v.default.getOldestUnreadMessageId(y.id));
      if ((0, d.trackWithMetadata)(K.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: $,
          last_ack_message_id: n,
          summaries_enabled_by_user: eh,
          summaries_enabled_for_channel: (0, o.canSeeChannelSummaries)(y)
        }), (0, o.canSeeChannelSummaries)(y)) {
        let n = eh ? t.format({
          count: $
        }) : e.format({
          count: $,
          timestamp: l
        });
        if (eh) {
          let e = i > 0 ? (0, a.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: $
            }), (0, a.jsx)(h.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), X.default.Messages.NEW_SUMMARIES.format({
              count: i
            })]
          }) : (0, a.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "45%"
            },
            children: n
          });
          s = (0, a.jsx)(w.NewTopicsBar, {
            scrollManager: es,
            content: e,
            channel: y
          })
        } else {
          let e = (0, a.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: i > 0 ? (0, a.jsxs)(a.Fragment, {
              children: [t.format({
                count: $
              }), (0, a.jsx)(h.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), X.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, a.jsx)(a.Fragment, {
              children: n
            })
          });
          s = (0, a.jsx)(w.NewMessagesBar, {
            content: e,
            channelId: y.id
          })
        }
      }
    } else eE.includes(z.ChatOverlays.NEW_MESSAGES) && (s = (0, a.jsx)(w.NewMessagesBar, {
      content: e.format({
        count: $,
        timestamp: l
      }),
      channelId: y.id
    }))
  }
  if (null == s && (0, o.canSeeChannelSummaries)(y) && eh && eE.includes(z.ChatOverlays.SUMMARIES) && (s = (0, a.jsx)(w.TopicsPill, {
      channel: y,
      scrollManager: es
    })), U.error) r = (0, a.jsx)(w.ErrorLoadingBar, {
    loading: U.loadingMore,
    onClick: () => {
      var e;
      return e = y.id, void i.default.fetchMessages({
        channelId: e,
        limit: K.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (U.hasMoreAfter && eu()) {
    let {
      jumpReturnTargetId: e
    } = U;
    r = U.loadingMore && U.jumpedToPresent ? (0, a.jsx)(w.JumpToPresentBar, {}) : null != e ? (0, a.jsx)(w.JumpToPresentBar, {
      type: w.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = y, n = e, void i.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, a.jsx)(w.JumpToPresentBar, {
      onClick: () => (function(e) {
        i.default.jumpToPresent(e.id, K.MAX_MESSAGES_PER_CHANNEL);
        let t = L.default.getChannelId();
        e.id === t && (0, p.transitionToChannel)(e.id)
      })(y)
    })
  }
  return {
    channelStreamMarkup: eT,
    newMessagesBar: s,
    jumpToPresentBar: r,
    forumPostActionBar: eg,
    safetyWarningBanner: n
  }
}
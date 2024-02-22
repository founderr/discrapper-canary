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
  S = n("933152"),
  _ = n("820899"),
  T = n("347738"),
  A = n("339670"),
  M = n("21763"),
  I = n("719926"),
  N = n("957255"),
  v = n("660478"),
  L = n("18494"),
  R = n("697218"),
  x = n("410889"),
  y = n("888400"),
  O = n("718517"),
  D = n("299039"),
  P = n("154864"),
  j = n("383667"),
  b = n("459776"),
  H = n("921450"),
  F = n("366757"),
  U = n("699473"),
  k = n("556118"),
  w = n("342009"),
  G = n("97810"),
  B = n("933629"),
  V = n("88243"),
  W = n("753089"),
  Z = n("210062"),
  z = n("321933"),
  K = n("894488"),
  Y = n("49111"),
  q = n("324252"),
  X = n("782340");

function J(e) {
  return null != e && e.type === Y.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
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
      type: Y.MessageTypes.DEFAULT,
      author: s,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, a.jsx)(x.AttachmentUpload, {
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
      channel: x,
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
    ed = (0, F.useShowConvoStarterInDM)(x),
    ec = U.length > 0 && (null === (t = U.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(x)),
    ef = (0, o.useChannelSummariesExperiment)(x),
    eh = (0, l.useStateFromStores)([T.default], () => T.default.shouldShowTopicsBar()),
    eC = (0, S.useStrangerDangerWarning)(x.id, q.LOCATION_CONTEXT_WEB),
    ep = (0, m.useInappropriateConversationBannerForChannel)(x.id, q.LOCATION_CONTEXT_WEB),
    eE = (0, H.default)(),
    em = null != eC ? eC : ep;
  x.isDM() && null != em && (n = em.type === E.SafetyWarningTypes.STRANGER_DANGER ? (0, a.jsx)(_.StrangerDangerWarningBanner, {
    channelId: x.id,
    warningId: em.id,
    senderId: x.getRecipientId()
  }) : (0, a.jsx)(g.InappropriateConversationWarningBanner, {
    channelId: x.id,
    warningId: em.id,
    senderId: x.getRecipientId()
  }));
  let eg = x.isForumPost() && !ec ? (0, a.jsx)(f.default, {
      postId: x.id
    }) : null,
    eS = (0, C.default)(x.id);
  (0, Z.default)();
  let e_ = null,
    eT = [],
    eA = en.map((e, t) => {
      if (e.type === Y.ChannelStreamTypes.DIVIDER) {
        var n, s;
        let l = null != e.unreadId;
        return null != ei ? null : e.isSummaryDivider ? (0, a.jsx)(M.default, {
          index: t,
          item: e,
          channel: x,
          isBeforeGroup: null == e.content && J(en[t + 1])
        }) : (0, a.jsx)(G.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && J(en[t + 1]),
          id: l ? K.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (s = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== s ? s : t))
      }
      if (e.type === Y.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, a.jsx)(f.default, {
        parentChannelId: x.parent_id,
        postId: x.id,
        isLastItem: t + 1 === en.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(x.id));
      if (e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? X.default.Messages.BLOCKED_MESSAGE_COUNT : X.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, a.jsx)(w.default, {
          unreadId: K.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: x,
          compact: et,
          collapsedReason: t
        }, e.key)
      }
      if (null != ei && ei > e.content.timestamp.getTime() * O.default.Millis.SECOND) return;
      let l = N.default.can(Y.Permissions.CREATE_INSTANT_INVITE, x);
      if ((0, j.default)(e.content, l)) return;
      e.type === Y.ChannelStreamTypes.MESSAGE && null == e_ && (e_ = e);
      let i = e.groupId === (null == e_ ? void 0 : e_.groupId) ? e_.content.id : e.groupId,
        r = e.type === Y.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? k.ThreadStarterChatMessage : k.default;
      return (0, a.jsx)(r, {
        compact: et,
        channel: x,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, P.getMessageDOMId)(x.id, e.content.id),
        isLastItem: t >= en.length - 1,
        renderContentOnly: eS
      }, e.content.id)
    });
  eT.push(...eA);
  let eM = en[en.length - 1];
  if (null != eo && ea.forEach((e, t) => {
      let n = 0 === t && (0, b.isNewGroupItem)(x, eM, new I.default({
        type: Y.MessageTypes.DEFAULT,
        author: eo
      }));
      eT.push((0, a.jsx)(Q, {
        file: e,
        channel: x,
        user: eo,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), U.hasMoreBefore && null == ei) {
    U.length > 0 && eT.unshift((0, a.jsx)("div", {
      style: {
        height: K.PLACEHOLDER_BUFFER,
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
      channel: x,
      showingBanner: er
    }, "empty-message")), U.hasMoreAfter && eT.push((0, a.jsx)(V.default, {
      compact: et,
      ...el
    }, "has-more-after")), !er && ed && eu() && eT.push((0, a.jsx)(W.default, {
      channel: x
    })), $ > 0 && ee && eu()) {
    let e, t;
    let n = v.default.getOldestUnreadTimestamp(x.id),
      l = 0 !== n ? n : D.default.extractTimestamp(x.id),
      i = (0, y.isSameDay)(new Date, new Date(l));
    if (v.default.isEstimated(x.id) ? (e = i ? X.default.Messages.NEW_MESSAGES_ESTIMATED : X.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = X.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = i ? X.default.Messages.NEW_MESSAGES : X.default.Messages.NEW_MESSAGES_WITH_DATE, t = X.default.Messages.NEW_MESSAGES_SUMMARIES), ef && (0, o.channelEligibleForSummaries)(x) && eE.includes(z.ChatOverlays.SUMMARIES)) {
      let n = v.default.ackMessageId(x.id),
        i = (0, A.getUnreadTopicsCount)(x.id, v.default.getOldestUnreadMessageId(x.id));
      if ((0, d.trackWithMetadata)(Y.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: $,
          last_ack_message_id: n,
          summaries_enabled_by_user: eh,
          summaries_enabled_for_channel: (0, o.canSeeChannelSummaries)(x)
        }), (0, o.canSeeChannelSummaries)(x)) {
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
          s = (0, a.jsx)(B.NewTopicsBar, {
            scrollManager: es,
            content: e,
            channel: x
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
          s = (0, a.jsx)(B.NewMessagesBar, {
            content: e,
            channelId: x.id
          })
        }
      }
    } else eE.includes(z.ChatOverlays.NEW_MESSAGES) && (s = (0, a.jsx)(B.NewMessagesBar, {
      content: e.format({
        count: $,
        timestamp: l
      }),
      channelId: x.id
    }))
  }
  if (null == s && (0, o.canSeeChannelSummaries)(x) && eh && eE.includes(z.ChatOverlays.SUMMARIES) && (s = (0, a.jsx)(B.TopicsPill, {
      channel: x,
      scrollManager: es
    })), U.error) r = (0, a.jsx)(B.ErrorLoadingBar, {
    loading: U.loadingMore,
    onClick: () => {
      var e;
      return e = x.id, void i.default.fetchMessages({
        channelId: e,
        limit: Y.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (U.hasMoreAfter && eu()) {
    let {
      jumpReturnTargetId: e
    } = U;
    r = U.loadingMore && U.jumpedToPresent ? (0, a.jsx)(B.JumpToPresentBar, {}) : null != e ? (0, a.jsx)(B.JumpToPresentBar, {
      type: B.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = x, n = e, void i.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, a.jsx)(B.JumpToPresentBar, {
      onClick: () => (function(e) {
        i.default.jumpToPresent(e.id, Y.MAX_MESSAGES_PER_CHANNEL);
        let t = L.default.getChannelId();
        e.id === t && (0, p.transitionToChannel)(e.id)
      })(x)
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
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("424973"), n("222007"), n("843762");
var s = n("37983"),
  a = n("884691"),
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
  m = n("933152"),
  E = n("820899"),
  g = n("347738"),
  S = n("339670"),
  _ = n("21763"),
  A = n("719926"),
  T = n("957255"),
  M = n("660478"),
  N = n("18494"),
  I = n("697218"),
  v = n("410889"),
  L = n("888400"),
  x = n("718517"),
  R = n("299039"),
  y = n("154864"),
  D = n("383667"),
  O = n("459776"),
  j = n("921450"),
  b = n("366757"),
  P = n("699473"),
  H = n("556118"),
  F = n("342009"),
  U = n("97810"),
  k = n("933629"),
  G = n("88243"),
  w = n("753089"),
  B = n("210062"),
  V = n("321933"),
  W = n("894488"),
  z = n("49111"),
  Z = n("324252"),
  K = n("782340");

function Y(e) {
  return null != e && e.type === z.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let q = a.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: a,
    isGroupStart: l
  } = e;
  return (0, s.jsx)(P.default, {
    isGroupStart: l,
    channel: n,
    message: new A.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: z.MessageTypes.DEFAULT,
      author: a,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, s.jsx)(v.AttachmentUpload, {
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

function X(e) {
  var t;
  let n, a, r, {
      channel: v,
      messages: P,
      unreadCount: X,
      showNewMessagesBar: J,
      messageDisplayCompact: Q,
      channelStream: $,
      uploads: ee,
      scrollManager: et,
      specs: en,
      filterAfterTimestamp: es,
      showingQuarantineBanner: ea
    } = e,
    el = I.default.getCurrentUser(),
    ei = () => et.isInitialized() || P.ready,
    er = (0, b.useShowConvoStarterInDM)(v),
    eo = P.length > 0 && (null === (t = P.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(v)),
    eu = (0, o.useChannelSummariesExperiment)(v),
    ed = (0, l.useStateFromStores)([g.default], () => g.default.shouldShowTopicsBar()),
    ec = (0, m.useStrangerDangerWarning)(v.id, Z.LOCATION_CONTEXT_WEB),
    ef = (0, j.default)();
  v.isDM() && null != ec && (n = (0, s.jsx)(E.StrangerDangerWarningBanner, {
    channelId: v.id,
    warningId: ec.id,
    senderId: v.getRecipientId()
  }));
  let eh = v.isForumPost() && !eo ? (0, s.jsx)(f.default, {
      postId: v.id
    }) : null,
    eC = (0, C.default)(v.id);
  (0, B.default)();
  let ep = null,
    em = [],
    eE = $.map((e, t) => {
      if (e.type === z.ChannelStreamTypes.DIVIDER) {
        var n, a;
        let l = null != e.unreadId;
        return null != es ? null : e.isSummaryDivider ? (0, s.jsx)(_.default, {
          index: t,
          item: e,
          channel: v,
          isBeforeGroup: null == e.content && Y($[t + 1])
        }) : (0, s.jsx)(U.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && Y($[t + 1]),
          id: l ? W.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t))
      }
      if (e.type === z.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, s.jsx)(f.default, {
        parentChannelId: v.parent_id,
        postId: v.id,
        isLastItem: t + 1 === $.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(v.id));
      if (e.type === z.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === z.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === z.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? K.default.Messages.BLOCKED_MESSAGE_COUNT : K.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, s.jsx)(F.default, {
          unreadId: W.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: v,
          compact: Q,
          collapsedReason: t
        }, e.key)
      }
      if (null != es && es > e.content.timestamp.getTime() * x.default.Millis.SECOND) return;
      let l = T.default.can(z.Permissions.CREATE_INSTANT_INVITE, v);
      if ((0, D.default)(e.content, l)) return;
      e.type === z.ChannelStreamTypes.MESSAGE && null == ep && (ep = e);
      let i = e.groupId === (null == ep ? void 0 : ep.groupId) ? ep.content.id : e.groupId,
        r = e.type === z.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? H.ThreadStarterChatMessage : H.default;
      return (0, s.jsx)(r, {
        compact: Q,
        channel: v,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, y.getMessageDOMId)(v.id, e.content.id),
        isLastItem: t >= $.length - 1,
        renderContentOnly: eC
      }, e.content.id)
    });
  em.push(...eE);
  let eg = $[$.length - 1];
  if (null != el && ee.forEach((e, t) => {
      let n = 0 === t && (0, O.isNewGroupItem)(v, eg, new A.default({
        type: z.MessageTypes.DEFAULT,
        author: el
      }));
      em.push((0, s.jsx)(q, {
        file: e,
        channel: v,
        user: el,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), P.hasMoreBefore && null == es) {
    P.length > 0 && em.unshift((0, s.jsx)("div", {
      style: {
        height: W.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = u.default;
    (e && ei() || !e) && em.unshift((0, s.jsx)(G.default, {
      compact: Q,
      ...en
    }, "has-more"))
  }
  if ((!P.hasMoreBefore || null != es) && em.unshift((0, s.jsx)(c.default, {
      channel: v,
      showingBanner: ea
    }, "empty-message")), P.hasMoreAfter && em.push((0, s.jsx)(G.default, {
      compact: Q,
      ...en
    }, "has-more-after")), !ea && er && ei() && em.push((0, s.jsx)(w.default, {
      channel: v
    })), X > 0 && J && ei()) {
    let e, t;
    let n = M.default.getOldestUnreadTimestamp(v.id),
      l = 0 !== n ? n : R.default.extractTimestamp(v.id),
      i = (0, L.isSameDay)(new Date, new Date(l));
    if (M.default.isEstimated(v.id) ? (e = i ? K.default.Messages.NEW_MESSAGES_ESTIMATED : K.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = K.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = i ? K.default.Messages.NEW_MESSAGES : K.default.Messages.NEW_MESSAGES_WITH_DATE, t = K.default.Messages.NEW_MESSAGES_SUMMARIES), eu && (0, o.channelEligibleForSummaries)(v) && ef.includes(V.ChatOverlays.SUMMARIES)) {
      let n = M.default.ackMessageId(v.id),
        i = (0, S.getUnreadTopicsCount)(v.id, M.default.getOldestUnreadMessageId(v.id));
      if ((0, d.trackWithMetadata)(z.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: X,
          last_ack_message_id: n,
          summaries_enabled_by_user: ed,
          summaries_enabled_for_channel: (0, o.canSeeChannelSummaries)(v)
        }), (0, o.canSeeChannelSummaries)(v)) {
        let n = ed ? t.format({
          count: X
        }) : e.format({
          count: X,
          timestamp: l
        });
        if (ed) {
          let e = i > 0 ? (0, s.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: X
            }), (0, s.jsx)(h.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), K.default.Messages.NEW_SUMMARIES.format({
              count: i
            })]
          }) : (0, s.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "45%"
            },
            children: n
          });
          a = (0, s.jsx)(k.NewTopicsBar, {
            scrollManager: et,
            content: e,
            channel: v
          })
        } else {
          let e = (0, s.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: i > 0 ? (0, s.jsxs)(s.Fragment, {
              children: [t.format({
                count: X
              }), (0, s.jsx)(h.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), K.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, s.jsx)(s.Fragment, {
              children: n
            })
          });
          a = (0, s.jsx)(k.NewMessagesBar, {
            content: e,
            channelId: v.id
          })
        }
      }
    } else ef.includes(V.ChatOverlays.NEW_MESSAGES) && (a = (0, s.jsx)(k.NewMessagesBar, {
      content: e.format({
        count: X,
        timestamp: l
      }),
      channelId: v.id
    }))
  }
  if (null == a && (0, o.canSeeChannelSummaries)(v) && ed && ef.includes(V.ChatOverlays.SUMMARIES) && (a = (0, s.jsx)(k.TopicsPill, {
      channel: v,
      scrollManager: et
    })), P.error) r = (0, s.jsx)(k.ErrorLoadingBar, {
    loading: P.loadingMore,
    onClick: () => {
      var e;
      return e = v.id, void i.default.fetchMessages({
        channelId: e,
        limit: z.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (P.hasMoreAfter && ei()) {
    let {
      jumpReturnTargetId: e
    } = P;
    r = P.loadingMore && P.jumpedToPresent ? (0, s.jsx)(k.JumpToPresentBar, {}) : null != e ? (0, s.jsx)(k.JumpToPresentBar, {
      type: k.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = v, n = e, void i.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, s.jsx)(k.JumpToPresentBar, {
      onClick: () => (function(e) {
        i.default.jumpToPresent(e.id, z.MAX_MESSAGES_PER_CHANNEL);
        let t = N.default.getChannelId();
        e.id === t && (0, p.transitionToChannel)(e.id)
      })(v)
    })
  }
  return {
    channelStreamMarkup: em,
    newMessagesBar: a,
    jumpToPresentBar: r,
    forumPostActionBar: eh,
    strangerDangerWarningBanner: n
  }
}
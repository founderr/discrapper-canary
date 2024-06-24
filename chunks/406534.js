n.d(t, {
  Z: function() {
    return $
  }
}), n(653041), n(47120), n(733860);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(904245),
  r = n(966390),
  o = n(902840),
  c = n(607070),
  u = n(367907),
  d = n(600084),
  h = n(62764),
  m = n(79712),
  p = n(736052),
  E = n(359110),
  g = n(359119),
  f = n(13279),
  C = n(248789),
  _ = n(88101),
  I = n(576954),
  x = n(765104),
  T = n(122707),
  N = n(779836),
  Z = n(23750),
  S = n(496675),
  v = n(306680),
  A = n(944486),
  M = n(594174),
  R = n(130208),
  j = n(55935),
  L = n(70956),
  O = n(709054),
  P = n(534091),
  y = n(900164),
  b = n(554838),
  D = n(481369),
  U = n(186877),
  k = n(294218),
  w = n(534469),
  H = n(993397),
  B = n(511010),
  G = n(524444),
  V = n(977391),
  F = n(921235),
  z = n(97352),
  W = n(226027),
  Y = n(959517),
  K = n(981631),
  q = n(134612),
  X = n(689938);

function Q(e) {
  return null != e && e.type === K.ys_.MESSAGE && e.content.id === e.groupId
}
let J = i.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: i,
    isGroupStart: s
  } = e;
  return (0, l.jsx)(k.Z, {
    isGroupStart: s,
    channel: n,
    message: new Z.ZP({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: K.uaV.DEFAULT,
      author: i,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, l.jsx)(R.g, {
          filename: t.name,
          progress: null != t.progress ? t.progress : 0,
          size: t.currentSize,
          onCancelUpload: () => {
            r.Z.cancel(t)
          }
        })
      }
    })
  })
});

function $(e) {
  var t;
  let n, i, r, {
      channel: R,
      messages: k,
      unreadCount: $,
      showNewMessagesBar: ee,
      messageDisplayCompact: et,
      channelStream: en,
      uploads: el,
      scrollManager: ei,
      specs: es,
      filterAfterTimestamp: ea,
      showingQuarantineBanner: er,
      hideSummaries: eo
    } = e,
    ec = M.default.getCurrentUser(),
    eu = () => ei.isInitialized() || k.ready,
    ed = (0, U.$)(R),
    eh = k.length > 0 && (null === (t = k.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(R)),
    em = (0, o.ts)(R),
    ep = (0, s.e7)([x.Z], () => x.Z.shouldShowTopicsBar() && !eo),
    eE = (0, _.P)(R.id, q.zr),
    eg = (0, f.z)(R.id, q.zr),
    ef = (0, D.Z)(),
    eC = null != eE ? eE : eg;
  R.isDM() && null != eC && (n = eC.type === g.pj.STRANGER_DANGER ? (0, l.jsx)(I.M, {
    channelId: R.id,
    warningId: eC.id,
    senderId: R.getRecipientId()
  }) : (0, l.jsx)(C.Y, {
    channelId: R.id,
    warningId: eC.id,
    senderId: R.getRecipientId()
  }));
  let e_ = R.isForumPost() && !eh ? (0, l.jsx)(h.Z, {
      postId: R.id
    }) : null,
    eI = (0, p.Z)(R.id);
  (0, z.Z)();
  let ex = null,
    eT = [],
    eN = en.map((e, t) => {
      if (e.type === K.ys_.DIVIDER) {
        var n, i;
        let s = null != e.unreadId;
        return null != ea ? null : e.isSummaryDivider ? (0, l.jsx)(N.Z, {
          index: t,
          item: e,
          channel: R,
          isBeforeGroup: null == e.content && Q(en[t + 1])
        }) : (0, l.jsx)(B.Z, {
          isUnread: s,
          isBeforeGroup: null == e.content && Q(en[t + 1]),
          id: s ? Y.j1 : void 0,
          children: e.content
        }, "divider-".concat(null !== (i = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== i ? i : t))
      }
      if (e.type === K.ys_.FORUM_POST_ACTION_BAR) return (0, l.jsx)(h.Z, {
        parentChannelId: R.parent_id,
        postId: R.id,
        isLastItem: t + 1 === en.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(R.id));
      if (e.type === K.ys_.MESSAGE_GROUP_BLOCKED || e.type === K.ys_.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === K.ys_.MESSAGE_GROUP_BLOCKED ? X.Z.Messages.BLOCKED_MESSAGE_COUNT : X.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, l.jsx)(H.Z, {
          unreadId: Y.j1,
          messages: e,
          channel: R,
          compact: et,
          collapsedReason: t
        }, e.key)
      }
      if (null != ea && ea > e.content.timestamp.getTime() * L.Z.Millis.SECOND) return;
      let s = S.Z.can(K.Plq.CREATE_INSTANT_INVITE, R);
      if ((0, y.Z)(e.content, s)) return;
      e.type === K.ys_.MESSAGE && null == ex && (ex = e);
      let a = e.groupId === (null == ex ? void 0 : ex.groupId) ? ex.content.id : e.groupId,
        r = e.type === K.ys_.THREAD_STARTER_MESSAGE ? w.Ru : w.ZP;
      return (0, l.jsx)(r, {
        compact: et,
        channel: R,
        message: e.content,
        groupId: a,
        flashKey: e.flashKey,
        id: (0, P.p)(R.id, e.content.id),
        isLastItem: t >= en.length - 1,
        renderContentOnly: eI
      }, e.content.id)
    });
  eT.push(...eN);
  let eZ = en[en.length - 1];
  if (null != ec && el.forEach((e, t) => {
      let n = 0 === t && (0, b.J)(R, eZ, new Z.ZP({
        type: K.uaV.DEFAULT,
        author: ec
      }));
      eT.push((0, l.jsx)(J, {
        file: e,
        channel: R,
        user: ec,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), k.hasMoreBefore && null == ea) {
    k.length > 0 && eT.unshift((0, l.jsx)("div", {
      style: {
        height: Y.D4,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.Z;
    (e && eu() || !e) && eT.unshift((0, l.jsx)(V.ZP, {
      compact: et,
      ...es
    }, "has-more"))
  }
  if ((!k.hasMoreBefore || null != ea) && eT.unshift((0, l.jsx)(d.Z, {
      channel: R,
      showingBanner: er
    }, "empty-message")), k.hasMoreAfter && eT.push((0, l.jsx)(V.ZP, {
      compact: et,
      ...es
    }, "has-more-after")), !er && ed && eu() && eT.push((0, l.jsx)(F.Z, {
      channel: R
    })), $ > 0 && ee && eu()) {
    let e, t;
    let n = v.ZP.getOldestUnreadTimestamp(R.id),
      s = 0 !== n ? n : O.default.extractTimestamp(R.id),
      a = (0, j.KC)(new Date, new Date(s));
    if (v.ZP.isEstimated(R.id) ? (e = a ? X.Z.Messages.NEW_MESSAGES_ESTIMATED : X.Z.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = X.Z.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = a ? X.Z.Messages.NEW_MESSAGES : X.Z.Messages.NEW_MESSAGES_WITH_DATE, t = X.Z.Messages.NEW_MESSAGES_SUMMARIES), em && (0, o.tW)(R) && ef.includes(W.E.SUMMARIES)) {
      let n = v.ZP.ackMessageId(R.id),
        a = (0, T.q)(R.id, v.ZP.getOldestUnreadMessageId(R.id));
      if ((0, u.yw)(K.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: a,
          num_unread_messages: $,
          last_ack_message_id: n,
          summaries_enabled_by_user: ep,
          summaries_enabled_for_channel: (0, o.Lp)(R)
        }), (0, o.Lp)(R)) {
        let n = ep ? t.format({
          count: $
        }) : e.format({
          count: $,
          timestamp: s
        });
        if (ep) {
          let e = a > 0 ? (0, l.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: $
            }), (0, l.jsx)(m.Z, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), X.Z.Messages.NEW_SUMMARIES.format({
              count: a
            })]
          }) : (0, l.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "45%"
            },
            children: n
          });
          i = (0, l.jsx)(G.G5, {
            scrollManager: ei,
            content: e,
            channel: R
          })
        } else {
          let e = (0, l.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: a > 0 ? (0, l.jsxs)(l.Fragment, {
              children: [t.format({
                count: $
              }), (0, l.jsx)(m.Z, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), X.Z.Messages.NEW_SUMMARIES.format({
                count: a
              })]
            }) : (0, l.jsx)(l.Fragment, {
              children: n
            })
          });
          i = (0, l.jsx)(G.LE, {
            content: e,
            channelId: R.id
          })
        }
      }
    } else ef.includes(W.E.NEW_MESSAGES) && (i = (0, l.jsx)(G.LE, {
      content: e.format({
        count: $,
        timestamp: s
      }),
      channelId: R.id
    }))
  }
  if (null == i && (0, o.Lp)(R) && ep && ef.includes(W.E.SUMMARIES) && (i = (0, l.jsx)(G.BO, {
      channel: R,
      scrollManager: ei
    })), k.error) r = (0, l.jsx)(G.Rp, {
    loading: k.loadingMore,
    onClick: () => {
      var e;
      return e = R.id, void a.Z.fetchMessages({
        channelId: e,
        limit: K.AQB,
        truncate: !0
      })
    }
  });
  else if (k.hasMoreAfter && eu()) {
    let {
      jumpReturnTargetId: e
    } = k;
    r = k.loadingMore && k.jumpedToPresent ? (0, l.jsx)(G.DR, {}) : null != e ? (0, l.jsx)(G.DR, {
      type: G.A7.REPLY,
      onClick: () => {
        var t, n;
        return t = R, n = e, void a.Z.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, l.jsx)(G.DR, {
      onClick: () => (function(e) {
        a.Z.jumpToPresent(e.id, K.AQB);
        let t = A.Z.getChannelId();
        e.id === t && (0, E.Kh)(e.id)
      })(R)
    })
  }
  return {
    channelStreamMarkup: eT,
    newMessagesBar: i,
    jumpToPresentBar: r,
    forumPostActionBar: e_,
    safetyWarningBanner: n
  }
}
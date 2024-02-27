"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("424973"), n("222007");
var a = n("637612"),
  s = n("336696"),
  l = n("888400"),
  i = n("299039"),
  r = n("459776"),
  o = n("654017"),
  u = n("49111");

function d(e) {
  let t, n, d, {
      channel: c,
      messages: f,
      oldestUnreadMessageId: h,
      treatSpam: C,
      summaries: p,
      selectedSummary: E
    } = e,
    m = [],
    g = !1,
    _ = null != h ? i.default.extractTimestamp(h) : null,
    S = null;
  return f.forEach(e => {
    var s, T, A, M, I, N, v, L;
    if (null != p && p.length > 0) {
      ;
      let t = i.default.extractTimestamp(e.id);
      for (let e = 0; s = e < (null == p ? void 0 : p.length), s; e++) {
        if (null == p[e]) continue;
        let n = i.default.extractTimestamp(p[e].startId),
          a = i.default.extractTimestamp(p[e].endId);
        if (t >= n && t <= a) {
          if (S === p[e].id) break;
          m.push({
            type: u.ChannelStreamTypes.DIVIDER,
            content: p[e].topic,
            contentKey: p[e].id
          }), S = p[e].id;
          break
        }
      }
    }
    let R = (0, l.dateFormat)(e.timestamp, "LL");
    R !== t && null == S && (m.push({
      type: u.ChannelStreamTypes.DIVIDER,
      content: R,
      contentKey: R
    }), t = R);
    let y = m[m.length - 1],
      x = null,
      O = (0, o.isSpam)(e);
    g = g || O;
    let D = function(e, t, n) {
      if (a.MessageTypesSets.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED;
      else if ((0, o.isSpamSupported)(e) && n) return u.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER;
      return null
    }(c, e, O && C);
    if (null !== D) {
      ;
      let t, n;
      [x, y] = (T = m, A = e, M = D, n = I = y, null == I || I.type !== M ? (t = {
        type: M,
        content: [],
        key: A.id
      }, T.push(t)) : n = (t = I).content[t.content.length - 1], [t, n])
    }
    if (h === e.id && null != _) {
      if (null != y && y.type === u.ChannelStreamTypes.DIVIDER) y.unreadId = e.id, _ = null;
      else if (null !== x) {
        ;
        N = x, v = c, (L = e).isFirstMessageInForumPost(v) || N.content.push({
          type: u.ChannelStreamTypes.DIVIDER,
          unreadId: L.id
        }), N.hasUnread = !0, _ = null
      } else !e.isFirstMessageInForumPost(c) && m.push({
        type: u.ChannelStreamTypes.DIVIDER,
        unreadId: e.id
      }), _ = null
    } else null != _ && i.default.extractTimestamp(e.id) > _ && (!e.isFirstMessageInForumPost(c) && m.push({
      type: u.ChannelStreamTypes.DIVIDER,
      unreadId: e.id
    }), _ = null);
    let P = (null == y ? void 0 : y.type) === u.ChannelStreamTypes.MESSAGE ? d : y;
    (0, r.isNewGroupItem)(c, P, e) && (n = e.id);
    let j = {
      type: e.type === u.MessageTypes.THREAD_STARTER_MESSAGE ? u.ChannelStreamTypes.THREAD_STARTER_MESSAGE : u.ChannelStreamTypes.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = j);
    let {
      jumpSequenceId: b,
      jumpFlash: F,
      jumpTargetId: H
    } = f;
    F && e.id === H && null != b && (j.flashKey = b), f.jumpTargetId === e.id && (j.jumpTarget = !0), null != E && e.id === E.startId && E.count > 1 && m.push({
      type: u.ChannelStreamTypes.DIVIDER,
      content: E.topic,
      contentKey: E.startId,
      isSummaryDivider: !0
    }), null !== x ? (x.content.push(j), j.jumpTarget && (x.hasJumpTarget = !0)) : m.push(j), e.isFirstMessageInForumPost(c) && m.push({
      type: u.ChannelStreamTypes.FORUM_POST_ACTION_BAR
    }), null != E && e.id === E.endId && E.count > 1 && m.push({
      type: u.ChannelStreamTypes.DIVIDER,
      contentKey: E.endId,
      isSummaryDivider: !0
    })
  }), g && (0, o.isSpamSupported)(c) && s.default.trackExposure({
    location: "416cc9_1"
  }), m
}
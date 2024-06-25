n.d(t, {
  Z: function() {
    return u
  }
}), n(653041), n(47120);
var l = n(275726),
  i = n(135938),
  s = n(55935),
  a = n(709054),
  r = n(554838),
  o = n(493892),
  c = n(981631);

function u(e) {
  let t, n, u, {
      channel: d,
      messages: h,
      oldestUnreadMessageId: m,
      treatSpam: E,
      summaries: p,
      selectedSummary: g
    } = e,
    f = [],
    C = !1,
    _ = null != m ? a.default.extractTimestamp(m) : null,
    I = null;
  return h.forEach(e => {
    var i, x, T, N, Z, S, v, A;
    if (null != p && p.length > 0) {
      ;
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; i = e < (null == p ? void 0 : p.length), i; e++) {
        if (null == p[e]) continue;
        let n = a.default.extractTimestamp(p[e].startId),
          l = a.default.extractTimestamp(p[e].endId);
        if (t >= n && t <= l) {
          if (I === p[e].id) break;
          f.push({
            type: c.ys_.DIVIDER,
            content: p[e].topic,
            contentKey: p[e].id
          }), I = p[e].id;
          break
        }
      }
    }
    let M = (0, s.vc)(e.timestamp, "LL");
    M !== t && null == I && (f.push({
      type: c.ys_.DIVIDER,
      content: M,
      contentKey: M
    }), t = M);
    let R = f[f.length - 1],
      j = null,
      L = (0, o.DQ)(e);
    C = C || L;
    let O = function(e, t, n) {
      if (l.V.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return c.ys_.MESSAGE_GROUP_BLOCKED;
      else if ((0, o.P1)(e) && n) return c.ys_.MESSAGE_GROUP_SPAMMER;
      return null
    }(d, e, L && E);
    if (null !== O) {
      ;
      let t, n;
      [j, R] = (x = f, T = e, N = O, n = Z = R, null == Z || Z.type !== N ? (t = {
        type: N,
        content: [],
        key: T.id
      }, x.push(t)) : n = (t = Z).content[t.content.length - 1], [t, n])
    }
    if (m === e.id && null != _) {
      if (null != R && R.type === c.ys_.DIVIDER) R.unreadId = e.id, _ = null;
      else if (null !== j) {
        ;
        S = j, v = d, (A = e).isFirstMessageInForumPost(v) || S.content.push({
          type: c.ys_.DIVIDER,
          unreadId: A.id
        }), S.hasUnread = !0, _ = null
      } else !e.isFirstMessageInForumPost(d) && f.push({
        type: c.ys_.DIVIDER,
        unreadId: e.id
      }), _ = null
    } else null != _ && a.default.extractTimestamp(e.id) > _ && (!e.isFirstMessageInForumPost(d) && f.push({
      type: c.ys_.DIVIDER,
      unreadId: e.id
    }), _ = null);
    let P = (null == R ? void 0 : R.type) === c.ys_.MESSAGE ? u : R;
    (0, r.J)(d, P, e) && (n = e.id);
    let y = {
      type: e.type === c.uaV.THREAD_STARTER_MESSAGE ? c.ys_.THREAD_STARTER_MESSAGE : c.ys_.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (u = y);
    let {
      jumpSequenceId: b,
      jumpFlash: D,
      jumpTargetId: U
    } = h;
    D && e.id === U && null != b && (y.flashKey = b), h.jumpTargetId === e.id && (y.jumpTarget = !0), null != g && e.id === g.startId && g.count > 1 && f.push({
      type: c.ys_.DIVIDER,
      content: g.topic,
      contentKey: g.startId,
      isSummaryDivider: !0
    }), null !== j ? (j.content.push(y), y.jumpTarget && (j.hasJumpTarget = !0)) : f.push(y), e.isFirstMessageInForumPost(d) && f.push({
      type: c.ys_.FORUM_POST_ACTION_BAR
    }), null != g && e.id === g.endId && g.count > 1 && f.push({
      type: c.ys_.DIVIDER,
      contentKey: g.endId,
      isSummaryDivider: !0
    })
  }), C && (0, o.P1)(d) && i.Z.trackExposure({
    location: "416cc9_1"
  }), f
}
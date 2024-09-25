n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(653041),
    n(47120);
var i = n(275726),
    s = n(135938),
    a = n(55935),
    l = n(709054),
    r = n(554838),
    o = n(493892),
    c = n(981631);
function u(e) {
    let t,
        n,
        u,
        { channel: d, messages: h, oldestUnreadMessageId: m, treatSpam: p, summaries: _, selectedSummary: f } = e,
        E = [],
        g = !1,
        C = null != m ? l.default.extractTimestamp(m) : null,
        I = null;
    return (
        h.forEach((e) => {
            var s, T, x, v, S, N, A, Z;
            if (null != _ && _.length > 0) {
                let t = l.default.extractTimestamp(e.id);
                for (let e = 0; (s = e < (null == _ ? void 0 : _.length)), s; e++) {
                    if (null == _[e]) continue;
                    let n = l.default.extractTimestamp(_[e].startId),
                        i = l.default.extractTimestamp(_[e].endId);
                    if (t >= n && t <= i) {
                        if (I === _[e].id) break;
                        E.push({
                            type: c.ys_.DIVIDER,
                            content: _[e].topic,
                            contentKey: _[e].id
                        }),
                            (I = _[e].id);
                        break;
                    }
                }
            }
            let M = (0, a.vc)(e.timestamp, 'LL');
            M !== t &&
                null == I &&
                (E.push({
                    type: c.ys_.DIVIDER,
                    content: M,
                    contentKey: M
                }),
                (t = M));
            let b = E[E.length - 1],
                R = null,
                L = (0, o.DQ)(e);
            g = g || L;
            let j = (function (e, t, n) {
                if (i.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return c.ys_.MESSAGE_GROUP_BLOCKED;
                else if ((0, o.P1)(e) && n) return c.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(d, e, L && p);
            if (null !== j) {
                let t, n;
                [R, b] =
                    ((T = E),
                    (x = e),
                    (v = j),
                    (n = S = b),
                    null == S || S.type !== v
                        ? ((t = {
                              type: v,
                              content: [],
                              key: x.id
                          }),
                          T.push(t))
                        : (n = (t = S).content[t.content.length - 1]),
                    [t, n]);
            }
            if (m === e.id && null != C) {
                if (null != b && b.type === c.ys_.DIVIDER) (b.unreadId = e.id), (C = null);
                else if (null !== R) {
                    (N = R),
                        (A = d),
                        (Z = e).isFirstMessageInForumPost(A) ||
                            N.content.push({
                                type: c.ys_.DIVIDER,
                                unreadId: Z.id
                            }),
                        (N.hasUnread = !0),
                        (C = null);
                } else
                    !e.isFirstMessageInForumPost(d) &&
                        E.push({
                            type: c.ys_.DIVIDER,
                            unreadId: e.id
                        }),
                        (C = null);
            } else
                null != C &&
                    l.default.extractTimestamp(e.id) > C &&
                    (!e.isFirstMessageInForumPost(d) &&
                        E.push({
                            type: c.ys_.DIVIDER,
                            unreadId: e.id
                        }),
                    (C = null));
            let O = (null == b ? void 0 : b.type) === c.ys_.MESSAGE ? u : b;
            (0, r.J)(d, O, e) && (n = e.id);
            let P = {
                type: e.type === c.uaV.THREAD_STARTER_MESSAGE ? c.ys_.THREAD_STARTER_MESSAGE : c.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (u = P);
            let { jumpSequenceId: y, jumpFlash: D, jumpTargetId: k } = h;
            D && e.id === k && null != y && (P.flashKey = y),
                h.jumpTargetId === e.id && (P.jumpTarget = !0),
                null != f &&
                    e.id === f.startId &&
                    f.count > 1 &&
                    E.push({
                        type: c.ys_.DIVIDER,
                        content: f.topic,
                        contentKey: f.startId,
                        isSummaryDivider: !0
                    }),
                null !== R ? (R.content.push(P), P.jumpTarget && (R.hasJumpTarget = !0)) : E.push(P),
                e.isFirstMessageInForumPost(d) && E.push({ type: c.ys_.FORUM_POST_ACTION_BAR }),
                null != f &&
                    e.id === f.endId &&
                    f.count > 1 &&
                    E.push({
                        type: c.ys_.DIVIDER,
                        contentKey: f.endId,
                        isSummaryDivider: !0
                    });
        }),
        g && (0, o.P1)(d) && s.Z.trackExposure({ location: '416cc9_1' }),
        E
    );
}

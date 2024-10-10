n.d(t, {
    JA: function () {
        return P;
    },
    Jw: function () {
        return r;
    },
    Od: function () {
        return M;
    },
    Wj: function () {
        return w;
    },
    gK: function () {
        return U;
    },
    oD: function () {
        return D;
    },
    vH: function () {
        return y;
    }
}),
    n(757143),
    n(653041),
    n(47120);
var r,
    i,
    a = n(470079),
    s = n(544891),
    o = n(570140),
    l = n(668781),
    u = n(430742),
    c = n(904245),
    d = n(166459),
    _ = n(238349),
    E = n(228392),
    f = n(957730),
    h = n(467798),
    p = n(592125),
    I = n(703558),
    m = n(375954),
    T = n(300429),
    S = n(70956),
    g = n(630388),
    A = n(709054),
    N = n(968437),
    R = n(665906),
    O = n(456077),
    v = n(124368),
    C = n(981631),
    L = n(689938);
function y(e) {
    let t = (0, R.NE)(e);
    return (0, R.Xu)(e) ? (t ? 2 : 3) : 1;
}
function D(e, t) {
    var n;
    if (3 === t) return !0;
    return null !== (n = e.isPrivate) && void 0 !== n && n;
}
function b(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function M(e, t) {
    var n, r, i, a, s, o, l;
    let u = null == t ? null : m.Z.getMessage(e.id, t),
        c = null !== (s = null == u ? void 0 : null === (r = u.embeds) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== s ? s : '',
        d = null !== (o = null == u ? void 0 : null === (a = u.poll) || void 0 === a ? void 0 : null === (i = a.question) || void 0 === i ? void 0 : i.text) && void 0 !== o ? o : '';
    if ('' !== c) return b(c, 40);
    if ('' !== d) return b(d, 80);
    {
        let t = f.ZP.unparse(null !== (l = null == u ? void 0 : u.content) && void 0 !== l ? l : '', e.id, !0),
            n = (0, O.Z)(t.split('\n')[0], !0);
        n = n.replace(/^[ #-]+/, '');
        let r = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                r.push(n);
                break;
            }
            r.push(n.substring(0, e.index)), r.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let i = r[0];
        for (let e = 1; e < r.length; e++) {
            let t = i + r[e];
            if (t.length > 40) break;
            i = t;
        }
        return b(i, 40);
    }
}
function P(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: i, location: o, onThreadCreated: l, useDefaultThreadName: _, uploadHandler: E } = e;
    return a.useCallback(
        async (e, a, h) => {
            var m;
            let T = null == n,
                S = D(r, i),
                g = null !== (m = r.name) && void 0 !== m ? m : '';
            if ('' === g && _) {
                let e = M(t, n);
                g = '' !== e ? e : L.Z.Messages.THREAD;
            }
            let R = (0, N.WD)(t),
                O = p.Z.getChannel(A.default.castMessageIdAsChannelId(n)),
                v = await x(t, () => {
                    let e = null != n ? C.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : C.ANM.CHANNEL_THREADS(t.id);
                    return s.tn.post({
                        url: e,
                        body: {
                            name: g,
                            type: S ? C.d4z.PRIVATE_THREAD : t.type === C.d4z.GUILD_ANNOUNCEMENT ? C.d4z.ANNOUNCEMENT_THREAD : C.d4z.PUBLIC_THREAD,
                            auto_archive_duration: R,
                            location: o
                        }
                    });
                });
            v !== O &&
                (u.Z.clearDraft(t.id, I.d.ThreadSettings),
                u.Z.clearDraft(t.id, I.d.FirstThreadMessage),
                null == l || l(v),
                (T || e.length > 0 || (null != a && a.length > 0) || (null != h && h.length > 0)) &&
                    (function (e, t, n, r, i) {
                        if (null != i && null != r && r.length > 0) i(e, r, t, n);
                        else if (null != n && n.length > 0) c.Z.sendStickers(e.id, n, t);
                        else c.Z.sendMessage(e.id, f.ZP.parse(e, t));
                    })(v, e, a, h, E)),
                d.Z.clearAll(t.id, I.d.FirstThreadMessage);
        },
        [t, n, r, l, i, o, _, E]
    );
}
function U(e, t, n, r, i) {
    return x(e, () =>
        s.tn.post({
            url: C.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: r,
                location: i
            }
        })
    );
}
function w(e) {
    let { parentChannel: t, name: n, appliedTags: r, onThreadCreated: i, upload: o } = e;
    return a.useCallback(
        async (e, a, l) => {
            let c = 0,
                [_, f] = (0, h.Z)(e);
            _ && ((e = f), (c = (0, g.pj)(c, C.iLy.SUPPRESS_NOTIFICATIONS)));
            let p = (0, N.WD)(t, null),
                m = C.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                T = {
                    name: n,
                    auto_archive_duration: p,
                    applied_tags: r,
                    message: {
                        content: e,
                        sticker_ids: a,
                        flags: 0 !== c ? c : void 0
                    }
                },
                S = await x(t, () =>
                    null != l && l.length > 0
                        ? o(m, T, l)
                        : s.tn.post({
                              url: m,
                              body: T
                          })
                );
            return (
                u.Z.clearDraft(t.id, I.d.ThreadSettings),
                u.Z.clearDraft(t.id, I.d.FirstThreadMessage),
                d.Z.clearAll(t.id, I.d.FirstThreadMessage),
                (0, E.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: S.id
                }),
                null == i || i(S),
                S
            );
        },
        [t, n, i, r, o]
    );
}
((i = r || (r = {}))[(i.Disabled = 1)] = 'Disabled'), (i[(i.Enabled = 2)] = 'Enabled'), (i[(i.PrivateOnly = 3)] = 'PrivateOnly');
async function x(e, t) {
    let n;
    let r = e.isForumLikeChannel();
    try {
        (n = await t()),
            null == n.body
                ? l.Z.show({
                      title: L.Z.Messages.ERROR,
                      body: L.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                  })
                : (o.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: T.S.CreateThread,
                      channelId: e.id
                  }),
                  o.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: n.body.id
                  }));
    } catch (t) {
        var i, a, s, u, d, E;
        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === C.evJ.TOO_MANY_THREADS)
            l.Z.show({
                title: r ? L.Z.Messages.CANNOT_CREATE_FORUM_POST : L.Z.Messages.CANNOT_CREATE_THREAD,
                body: r ? L.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : L.Z.Messages.TOO_MANY_THREADS_MESSAGE
            });
        else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === C.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            l.Z.show({
                title: L.Z.Messages.CANNOT_CREATE_THREAD,
                body: L.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
            });
        else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === C.evJ.SLOWMODE_RATE_LIMITED) {
            let n = null !== (E = t.body.retry_after) && void 0 !== E ? E : 0;
            n > 0 &&
                o.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: T.S.CreateThread,
                    cooldownMs: n * S.Z.Millis.SECOND
                });
        } else if (429 === t.status)
            l.Z.show({
                title: r ? L.Z.Messages.CANNOT_CREATE_FORUM_POST : L.Z.Messages.CANNOT_CREATE_THREAD,
                body: L.Z.Messages.RATE_LIMITED
            });
        else if (v.fZ.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
        else {
            if (v.RN.has(null === (d = t.body) || void 0 === d ? void 0 : d.code))
                return new Promise((e, n) => {
                    null == t.body && n(),
                        _.Z.addConditionalChangeListener(() => {
                            let t = _.Z.getAndDeleteMostRecentUserCreatedThreadId();
                            if (null != t) {
                                let r = p.Z.getChannel(t);
                                return (
                                    o.Z.wait(() => {
                                        null == r ? n() : e(r);
                                    }),
                                    !1
                                );
                            }
                        });
                });
            l.Z.show({
                title: L.Z.Messages.ERROR,
                body: L.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
            });
        }
    }
    let f = await new Promise((e, t) => {
        null == n.body && t(),
            p.Z.addConditionalChangeListener(() => {
                let t = p.Z.getChannel(n.body.id);
                if (null != t)
                    return (
                        o.Z.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await c.Z.fetchMessages({
            channelId: f.id,
            limit: C.AQB
        });
    } catch (e) {}
    return f;
}

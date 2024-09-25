n.d(t, {
    JA: function () {
        return w;
    },
    Jw: function () {
        return r;
    },
    Od: function () {
        return U;
    },
    Wj: function () {
        return G;
    },
    gK: function () {
        return x;
    },
    oD: function () {
        return M;
    },
    vH: function () {
        return D;
    }
});
var r,
    i = n(757143);
var a = n(653041);
var o = n(47120);
var s = n(470079),
    l = n(544891),
    u = n(570140),
    c = n(668781),
    d = n(430742),
    _ = n(904245),
    E = n(166459),
    f = n(238349),
    h = n(228392),
    p = n(957730),
    m = n(467798),
    I = n(592125),
    T = n(703558),
    g = n(375954),
    S = n(300429),
    A = n(70956),
    v = n(630388),
    N = n(709054),
    O = n(968437),
    R = n(665906),
    C = n(456077),
    y = n(124368),
    b = n(981631),
    L = n(689938);
function D(e) {
    let t = (0, R.NE)(e);
    return (0, R.Xu)(e) ? (t ? 2 : 3) : 1;
}
function M(e, t) {
    var n;
    if (3 === t) return !0;
    return null !== (n = e.isPrivate) && void 0 !== n && n;
}
function P(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function U(e, t) {
    var n, r, i, a, o, s, l;
    let u = null == t ? null : g.Z.getMessage(e.id, t),
        c = null !== (o = null == u ? void 0 : null === (r = u.embeds) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== o ? o : '',
        d = null !== (s = null == u ? void 0 : null === (a = u.poll) || void 0 === a ? void 0 : null === (i = a.question) || void 0 === i ? void 0 : i.text) && void 0 !== s ? s : '';
    if ('' !== c) return P(c, 40);
    if ('' !== d) return P(d, 80);
    {
        let t = p.ZP.unparse(null !== (l = null == u ? void 0 : u.content) && void 0 !== l ? l : '', e.id, !0),
            n = (0, C.Z)(t.split('\n')[0], !0);
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
        return P(i, 40);
    }
}
function w(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: i, location: a, onThreadCreated: o, useDefaultThreadName: u, uploadHandler: c } = e;
    return s.useCallback(
        async (e, s, _) => {
            var f;
            let h = null == n,
                p = M(r, i),
                m = null !== (f = r.name) && void 0 !== f ? f : '';
            if ('' === m && u) {
                let e = U(t, n);
                m = '' !== e ? e : L.Z.Messages.THREAD;
            }
            let g = (0, O.WD)(t),
                S = I.Z.getChannel(N.default.castMessageIdAsChannelId(n)),
                A = await B(t, () => {
                    let e = null != n ? b.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : b.ANM.CHANNEL_THREADS(t.id);
                    return l.tn.post({
                        url: e,
                        body: {
                            name: m,
                            type: p ? b.d4z.PRIVATE_THREAD : t.type === b.d4z.GUILD_ANNOUNCEMENT ? b.d4z.ANNOUNCEMENT_THREAD : b.d4z.PUBLIC_THREAD,
                            auto_archive_duration: g,
                            location: a
                        }
                    });
                });
            A !== S && (d.Z.clearDraft(t.id, T.d.ThreadSettings), d.Z.clearDraft(t.id, T.d.FirstThreadMessage), null == o || o(A), (h || e.length > 0 || (null != s && s.length > 0) || (null != _ && _.length > 0)) && k(A, e, s, _, c)), E.Z.clearAll(t.id, T.d.FirstThreadMessage);
        },
        [t, n, r, o, i, a, u, c]
    );
}
function x(e, t, n, r, i) {
    return B(e, () =>
        l.tn.post({
            url: b.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: r,
                location: i
            }
        })
    );
}
function G(e) {
    let { parentChannel: t, name: n, appliedTags: r, onThreadCreated: i, upload: a } = e;
    return s.useCallback(
        async (e, o, s) => {
            let u = 0,
                [c, _] = (0, m.Z)(e);
            c && ((e = _), (u = (0, v.pj)(u, b.iLy.SUPPRESS_NOTIFICATIONS)));
            let f = (0, O.WD)(t, null),
                p = b.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                I = {
                    name: n,
                    auto_archive_duration: f,
                    applied_tags: r,
                    message: {
                        content: e,
                        sticker_ids: o,
                        flags: 0 !== u ? u : void 0
                    }
                },
                g = await B(t, () =>
                    null != s && s.length > 0
                        ? a(p, I, s)
                        : l.tn.post({
                              url: p,
                              body: I
                          })
                );
            return (
                d.Z.clearDraft(t.id, T.d.ThreadSettings),
                d.Z.clearDraft(t.id, T.d.FirstThreadMessage),
                E.Z.clearAll(t.id, T.d.FirstThreadMessage),
                (0, h.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: g.id
                }),
                null == i || i(g),
                g
            );
        },
        [t, n, i, r, a]
    );
}
function k(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return _.Z.sendStickers(e.id, n, t);
    else return _.Z.sendMessage(e.id, p.ZP.parse(e, t));
}
async function B(e, t) {
    let n;
    let r = e.isForumLikeChannel();
    try {
        (n = await t()),
            null == n.body
                ? c.Z.show({
                      title: L.Z.Messages.ERROR,
                      body: L.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                  })
                : (u.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: S.S.CreateThread,
                      channelId: e.id
                  }),
                  u.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: n.body.id
                  }));
    } catch (t) {
        var i, a, o, s, l, d;
        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === b.evJ.TOO_MANY_THREADS)
            c.Z.show({
                title: r ? L.Z.Messages.CANNOT_CREATE_FORUM_POST : L.Z.Messages.CANNOT_CREATE_THREAD,
                body: r ? L.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : L.Z.Messages.TOO_MANY_THREADS_MESSAGE
            });
        else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === b.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            c.Z.show({
                title: L.Z.Messages.CANNOT_CREATE_THREAD,
                body: L.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
            });
        else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === b.evJ.SLOWMODE_RATE_LIMITED) {
            let n = null !== (d = t.body.retry_after) && void 0 !== d ? d : 0;
            n > 0 &&
                u.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: S.S.CreateThread,
                    cooldownMs: n * A.Z.Millis.SECOND
                });
        } else if (429 === t.status)
            c.Z.show({
                title: r ? L.Z.Messages.CANNOT_CREATE_FORUM_POST : L.Z.Messages.CANNOT_CREATE_THREAD,
                body: L.Z.Messages.RATE_LIMITED
            });
        else if (y.fZ.has(null === (s = t.body) || void 0 === s ? void 0 : s.code)) throw t;
        else {
            if (y.RN.has(null === (l = t.body) || void 0 === l ? void 0 : l.code))
                return new Promise((e, n) => {
                    null == t.body && n(),
                        f.Z.addConditionalChangeListener(() => {
                            let t = f.Z.getAndDeleteMostRecentUserCreatedThreadId();
                            if (null != t) {
                                let r = I.Z.getChannel(t);
                                return (
                                    u.Z.wait(() => {
                                        null == r ? n() : e(r);
                                    }),
                                    !1
                                );
                            }
                        });
                });
            c.Z.show({
                title: L.Z.Messages.ERROR,
                body: L.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
            });
        }
    }
    return new Promise((e, t) => {
        null == n.body && t(),
            I.Z.addConditionalChangeListener(() => {
                let t = I.Z.getChannel(n.body.id);
                if (null != t)
                    return (
                        u.Z.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
}
!(function (e) {
    (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled'), (e[(e.PrivateOnly = 3)] = 'PrivateOnly');
})(r || (r = {}));

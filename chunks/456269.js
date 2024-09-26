n.d(t, {
    AJ: function () {
        return ei;
    },
    Bs: function () {
        return en;
    },
    ES: function () {
        return z;
    },
    Eg: function () {
        return j;
    },
    IN: function () {
        return et;
    },
    J$: function () {
        return ec;
    },
    MC: function () {
        return ea;
    },
    O2: function () {
        return H;
    },
    Q: function () {
        return eo;
    },
    Vm: function () {
        return e_;
    },
    W3: function () {
        return W;
    },
    XZ: function () {
        return ep;
    },
    eV: function () {
        return $;
    },
    eZ: function () {
        return eh;
    },
    iM: function () {
        return J;
    },
    jR: function () {
        return ef;
    },
    kF: function () {
        return q;
    },
    kn: function () {
        return eE;
    },
    ku: function () {
        return eI;
    },
    mX: function () {
        return es;
    },
    n2: function () {
        return eT;
    },
    nP: function () {
        return er;
    },
    ql: function () {
        return ed;
    },
    r_: function () {
        return el;
    },
    vP: function () {
        return eg;
    },
    xw: function () {
        return ee;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(470079),
    o = n(392711),
    s = n.n(o),
    l = n(683860),
    u = n(442837),
    c = n(570140),
    d = n(45114),
    _ = n(339085),
    E = n(987170),
    f = n(905405),
    h = n(937889),
    p = n(739566),
    m = n(601070),
    I = n(344185),
    T = n(723774),
    g = n(144140),
    S = n(91159),
    A = n(592125),
    v = n(720202),
    N = n(430824),
    O = n(496675),
    R = n(306680),
    C = n(699516),
    y = n(111583),
    L = n(594174),
    b = n(823379),
    D = n(709054),
    M = n(883429),
    P = n(238349),
    U = n(368844),
    w = n(660189),
    x = n(581036),
    G = n(208970),
    k = n(882252),
    B = n(710352),
    F = n(981631),
    Z = n(176505),
    V = n(124368);
let H = (0, E.Z)({
    id: '2023-01_forums_non_community',
    label: 'Forum non-community',
    kind: 'guild',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function Y(e) {
    let t = (0, u.e7)([N.Z], () => N.Z.getGuild(e));
    return (
        H.useExperiment(
            {
                guildId: e,
                location: '553713_1'
            },
            { autoTrackExposure: !1 }
        ).enabled || !!((null == t ? void 0 : t.hasFeature(F.oNc.COMMUNITY)) || (null == t ? void 0 : t.hasFeature(F.oNc.INTERNAL_EMPLOYEE_ONLY)))
    );
}
function j(e) {
    return H.getCurrentConfig({
        guildId: e,
        location: '553713_2'
    }).enabled;
}
function W(e) {
    return Y(e);
}
let K = 180;
function z(e, t, n) {
    let r = (0, u.e7)([I.Z], () => I.Z.hasLoaded(e.guild_id));
    a.useEffect(() => {
        if (!r) return;
        let i = P.Z.getThreadIds(e.id, t, n),
            a = x.Z.getThreadIdsMissingCounts(e.guild_id, i)
                .filter((e) => (0, k.nU)(e, [R.ZP]))
                .slice(0, K)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: R.ZP.getTrackedAckMessageId(e)
                }));
        a.length > 0 &&
            c.Z.dispatch({
                type: 'REQUEST_FORUM_UNREADS',
                guildId: e.guild_id,
                channelId: e.id,
                threads: a
            });
    }, [e.id, e.guild_id, r, n, t]);
}
function q(e) {
    return (0, u.e7)([I.Z, A.Z], () => {
        let t = s()(I.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var t;
                return (null === (t = A.Z.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(Z.zZ.PINNED)) === !0;
            })
            .head();
        return A.Z.getChannel(t);
    });
}
function Q(e) {
    let t = null == e ? void 0 : e.parent_id;
    return (0, u.cj)(
        [A.Z],
        () => {
            var e;
            let n = A.Z.getChannel(t);
            return (null !== (e = null == n ? void 0 : n.availableTags) && void 0 !== e ? e : []).reduce(
                (e, t) => ({
                    ...e,
                    [t.id]: t
                }),
                {}
            );
        },
        [t]
    );
}
let X = [];
function $(e) {
    let t = Q(e);
    return a.useMemo(() => {
        var n, r, i;
        return null !== (i = null == e ? void 0 : null === (r = e.appliedTags) || void 0 === r ? void 0 : null === (n = r.map((e) => t[e])) || void 0 === n ? void 0 : n.filter(b.lm)) && void 0 !== i ? i : X;
    }, [t, null == e ? void 0 : e.appliedTags]);
}
function J(e, t) {
    let n = (0, u.Wu)([L.default], () => t.map((e) => L.default.getUser(e)).filter(b.lm));
    return (
        a.useEffect(() => {
            n.forEach((t) => {
                v.Z.requestMember(e.guild_id, t.id);
            });
        }, []),
        n
    );
}
function ee(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B.R6.DURATION_AGO,
        r = a.useMemo(() => D.default.extractTimestamp(e.id), [e.id]),
        i = (0, S.Ok)(e),
        o = a.useMemo(() => (0, k.Uw)(t, n), [t, n]);
    return a.useMemo(() => (t === l.z.CREATION_DATE ? (0, S.Ye)(r, o) : (0, S.Ye)(i, o)), [i, t, r, o]);
}
function et(e) {
    return a.useMemo(() => {
        var t;
        return s().maxBy(null !== (t = null == e ? void 0 : e.reactions) && void 0 !== t ? t : [], (e) => Math.max(e.burst_count, e.count));
    }, [null == e ? void 0 : e.reactions]);
}
function en(e) {
    let t = null == e ? void 0 : e.defaultReactionEmoji,
        n = (0, u.e7)([_.ZP], () => ((null == t ? void 0 : t.emojiId) != null ? _.ZP.getUsableCustomEmojiById(t.emojiId) : null));
    return null == t
        ? null
        : null != t.emojiId && null != n
          ? {
                id: t.emojiId,
                name: n.name,
                animated: n.animated
            }
          : null != t.emojiName
            ? {
                  id: t.emojiId,
                  name: t.emojiName,
                  animated: !1
              }
            : null;
}
function er(e) {
    let t = (0, u.e7)([g.Z], () => {
            var t;
            return null !== (t = g.Z.getCount(e.id)) && void 0 !== t ? t : 0;
        }),
        n = (0, T.lE)(t, e.id),
        r = (0, u.e7)([R.ZP], () => (0, k.nU)(e.id, [R.ZP])),
        i = (0, u.e7)([x.Z], () => {
            if (!r) return null;
            let n = x.Z.getCount(e.id);
            if (null == n || !(n > 0)) return '1+';
            {
                let e = Math.min(n, t);
                return e >= V.dg ? ''.concat(V.dg, '+') : e;
            }
        });
    return {
        messageCount: t,
        isMaxMessageCount: null != t && ''.concat(t) !== n,
        messageCountText: n,
        unreadCount: i
    };
}
function ei(e) {
    var t;
    let n = (0, u.e7)([L.default], () => L.default.getUser(e.ownerId)),
        r = (0, u.e7)([w.Z], () => {
            var t;
            return null === (t = w.Z.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage;
        }),
        i = (0, p.Sw)(null !== (t = null == r ? void 0 : r.author) && void 0 !== t ? t : n, e);
    return (
        a.useEffect(() => {
            null != e.ownerId && v.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: n,
            author: i
        }
    );
}
function ea(e) {
    var t, n;
    let r = L.default.getUser(e.ownerId),
        i = null === (t = w.Z.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage,
        a = (0, p.ij)(null !== (n = null == i ? void 0 : i.author) && void 0 !== n ? n : r, e);
    return {
        user: r,
        author: a
    };
}
function eo(e) {
    return (0, u.Wu)([y.Z, L.default, C.Z], () => {
        let t = L.default.getCurrentUser();
        return s()(y.Z.getTypingUsers(e.id))
            .keys()
            .filter((e) => e !== (null == t ? void 0 : t.id))
            .reject((e) => C.Z.isBlocked(e))
            .map((e) => L.default.getUser(e))
            .filter(b.lm)
            .map((e) => e.id)
            .value();
    });
}
function es(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
        i = (0, f.p)(),
        { hasSpoilerEmbeds: o, content: s } = a.useMemo(
            () =>
                (null == t ? void 0 : t.content) != null && '' !== t.content
                    ? (0, h.ZP)(t, {
                          formatInline: n,
                          noStyleAndInteraction: r,
                          allowHeading: !0,
                          allowList: !0,
                          shouldFilterKeywords: i
                      })
                    : {
                          hasSpoilerEmbeds: !1,
                          content: null
                      },
            [t, n, r, i]
        ),
        l = (0, U.eL)(t, o),
        u = (0, U.vg)(t, o);
    return {
        hasSpoilerEmbeds: o,
        content: s,
        firstMedia: l,
        firstMediaIsEmbed: u
    };
}
function el(e) {
    return (0, u.e7)([O.Z], () => O.Z.can(F.Plq.MANAGE_CHANNELS, e));
}
let eu = {
    isNew: !1,
    hasUnreads: !1
};
function ec(e) {
    return (0, u.cj)([N.Z, R.ZP], () => {
        var t;
        let n = N.Z.getGuild(null !== (t = e.getGuildId()) && void 0 !== t ? t : F.lds);
        return null == n ? eu : (0, k.FS)(e, n, [R.ZP]);
    });
}
function ed(e) {
    return a.useMemo(() => (null == e ? '' : null == e.template ? '' : e.template.trim()), [e]);
}
function e_(e) {
    let t = (0, u.e7)([O.Z], () => O.Z.can(F.Plq.MANAGE_THREADS, e));
    return a.useMemo(() => {
        var n;
        let r = [...(null !== (n = null == e ? void 0 : e.availableTags) && void 0 !== n ? n : [])];
        return !t && (r = r.filter((e) => !e.moderated)), r;
    }, [t, null == e ? void 0 : e.availableTags]);
}
function eE(e, t) {
    let n = e_((0, u.e7)([A.Z], () => A.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return a.useMemo(() => t.filter((e) => n.includes(e)), [t, n]);
}
function ef(e) {
    return (0, u.e7)([O.Z], () => O.Z.can(F.Plq.READ_MESSAGE_HISTORY, e));
}
function eh(e) {
    return (0, u.e7)([O.Z], () => O.Z.can(F.Plq.READ_MESSAGE_HISTORY, e));
}
function ep(e) {
    let { channelId: t } = e;
    return (0, u.cj)([G.Z], () => ({
        isSearchLoading: G.Z.getSearchLoading(t),
        searchQuery: G.Z.getSearchQuery(t),
        searchResults: G.Z.getSearchResults(t)
    }));
}
let em = 350;
function eI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { isSearchLoading: r, searchQuery: i } = ep({ channelId: e.id }),
        o = ef(e),
        s = a.useRef(null),
        l = a.useRef(new Set());
    a.useEffect(() => {
        if (null == i && null != s.current) {
            M.Z.clearForumSearch(e.id), (s.current = null);
            return;
        }
        if (null == i || 0 === i.length || n) return;
        if (!o) {
            M.Z.clearForumSearch(e.id);
            return;
        }
        if ((s.current === i && l.current === t) || r) return;
        let a = setTimeout(async () => {
            (s.current = i), (l.current = t);
            try {
                await M.Z.searchForumPosts(e.guild_id, e.id, i, t);
            } catch {}
        }, em);
        return () => clearTimeout(a);
    }, [o, e.guild_id, e.id, n, r, i, t]);
}
function eT(e, t) {
    return (0, u.e7)([m.Z, R.ZP, A.Z], () => {
        let n = A.Z.getChannel(t);
        if (!(null == n ? void 0 : n.isForumLikeChannel())) return 0;
        let r = m.Z.getActiveJoinedUnreadThreadsForParent(e, t),
            i = m.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
            a = R.ZP.ackMessageId(t),
            o = 0;
        if (null == a) return o;
        for (let e in r) {
            let t = r[e],
                n = R.ZP.lastMessageId(t.channel.id);
            null != n && n > a && o++;
        }
        for (let e in i) {
            let t = i[e],
                n = R.ZP.lastMessageId(t.id);
            null != n && n > a && o++;
        }
        return o;
    });
}
function eg(e) {
    let { channel: t, sortOrder: n, tagFilter: r, shouldAutomaticallyAck: i } = e,
        o = (0, u.Wu)([P.Z], () => P.Z.getThreadIds(t.id, n, r)),
        s = eT(t.guild_id, t.id),
        l = (0, u.e7)([P.Z], () => i && (s > 0 || P.Z.getCanAckThreads()), [i, s]);
    return (
        a.useEffect(() => {
            l && (0, d.U6)(t);
        }, [t, l]),
        o
    );
}

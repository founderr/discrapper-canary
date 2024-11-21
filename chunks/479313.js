n.d(t, {
    $l: function () {
        return N;
    },
    G1: function () {
        return E;
    },
    JR: function () {
        return T;
    },
    U$: function () {
        return S;
    },
    e7: function () {
        return b;
    },
    wv: function () {
        return I;
    },
    yK: function () {
        return v;
    }
});
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(399606),
    o = n(544891),
    l = n(570140),
    u = n(881052),
    c = n(902840),
    d = n(38618),
    f = n(592125),
    _ = n(70956),
    p = n(765104),
    h = n(981631);
let m = 30 * _.Z.Millis.SECOND;
async function g(e, t) {
    let n, r;
    if (!p.Z.shouldFetch(e, t)) return;
    let i = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARY',
        channelId: e,
        summaryId: t,
        requestedAt: i
    });
    try {
        let n = await o.tn.get({
            url: h.Z5c.CHANNEL_SUMMARY(e, t),
            rejectWithError: !1
        });
        r = null == n ? void 0 : n.body;
    } catch (e) {
        n = new u.Hx(e);
    }
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARY',
        channelId: e,
        summary: r,
        error: n,
        requestedAt: i,
        receivedAt: Date.now()
    });
}
async function E(e) {
    var t, n;
    let r, i;
    if (!p.Z.shouldFetch(e)) return;
    let s = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES',
        channelId: e,
        requestedAt: s
    });
    try {
        i = await o.tn.get({
            url: h.Z5c.CHANNEL_SUMMARIES(e),
            rejectWithError: !1
        });
    } catch (e) {
        r = new u.Hx(e);
    }
    let c = (null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? i.body.summaries : null !== (n = null == i ? void 0 : i.body) && void 0 !== n ? n : [];
    (c = a().takeRight(c, 75)),
        l.Z.dispatch({
            type: 'RECEIVE_CHANNEL_SUMMARIES',
            channelId: e,
            summaries: c,
            error: null != r ? r : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        });
}
function v(e, t) {
    l.Z.dispatch({
        type: 'SET_HIGHLIGHTED_SUMMARY',
        channelId: e,
        summaryId: null != t ? t : null
    });
}
function b() {
    l.Z.dispatch({ type: 'TOGGLE_TOPICS_BAR' });
}
function I(e, t) {
    null != e && null != t && g(e, t),
        l.Z.dispatch({
            type: 'SET_SELECTED_SUMMARY',
            channelId: e,
            summaryId: null != t ? t : null
        });
}
function T(e, t) {
    l.Z.dispatch({
        type: 'UPDATE_VISIBLE_MESSAGES',
        topVisibleMessage: null != e ? e : null,
        bottomVisibleMessage: null != t ? t : null
    });
}
function S(e, t) {
    l.Z.dispatch({
        type: 'SET_SUMMARY_FEEDBACK',
        summary: e,
        rating: t
    });
}
async function y() {
    var e;
    let t, n;
    if (!p.Z.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let r = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_AFFINITIES',
        requestedAt: r
    });
    try {
        n = await o.tn.get({
            url: '/users/@me/affinities/channels',
            rejectWithError: !1
        });
    } catch (e) {
        t = new u.Hx(e);
    }
    let i = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_AFFINITIES',
        affinities: i,
        error: null != t ? t : void 0,
        requestedAt: r,
        receivedAt: Date.now()
    });
}
async function A(e) {
    let t,
        n,
        { useQuickSwitcher: r = !0, useChannelAffinities: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = null != e ? e : [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(
                p.Z.defaultChannelIds({
                    withQuickSwitcher: r,
                    withChannelAffinities: i
                })
            )
            .filter((e) => {
                let t = f.Z.getChannel(e);
                return (0, c.Lp)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = p.Z.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let r = null == n ? void 0 : n.lastReceivedAt;
                return null == r || t - r > m;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES_BULK',
        channelIds: e,
        requestedAt: a
    });
    try {
        n = await o.tn.post({
            url: h.Z5c.USER_SUMMARIES,
            body: { channel_ids: e },
            rejectWithError: !1
        });
    } catch (e) {
        t = new u.Hx(e);
    }
    let s = null == n ? void 0 : n.body.summaries;
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARIES_BULK',
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: t
    });
}
async function N(e) {
    try {
        await o.tn.del({
            url: h.Z5c.CHANNEL_SUMMARY(e.channelId, e.id),
            rejectWithError: !1
        }),
            l.Z.dispatch({
                type: 'DELETE_SUMMARY',
                summary: e
            });
    } catch (e) {
        throw new u.Hx(e);
    }
}
t.ZP = {
    setSummaryFeedback: S,
    updateVisibleMessages: T,
    setSelectedSummary: I,
    setGravitySelectedSummary: function (e, t) {
        l.Z.dispatch({
            type: 'SET_GRAVITY_SELECTED_SUMMARY',
            channelId: e,
            summaryId: null != t ? t : null
        });
    },
    setHighlightedSummary: v,
    fetchSummaries: E,
    fetchSummariesBulk: A,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return (
            !(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, s.e7)([d.Z], () => d.Z.isConnected()),
                    n = r.useMemo(() => e.join(','), [e]);
                r.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await y();
                        } catch (e) {}
                        await A(n.split(','));
                    }
                }, [n, t]);
            })(t),
            (0, s.Wu)([p.Z], () => p.Z.topSummaries(), [])
        );
    },
    deleteSummary: N
};

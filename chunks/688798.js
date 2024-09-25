var r = n(47120);
var i = n(913527),
    a = n.n(i),
    o = n(570140),
    s = n(661111),
    l = n(493683),
    u = n(904245),
    c = n(232567),
    d = n(147913),
    _ = n(3148),
    E = n(960412),
    f = n(706454),
    h = n(695346),
    p = n(375954),
    m = n(306680),
    I = n(709054),
    T = n(839627),
    g = n(802098),
    S = n(128014),
    A = n(163379),
    v = n(596401),
    N = n(981631),
    O = n(930441);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e, t) {
    let n = 0,
        r = null;
    for (var [i, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (r = i));
    return r;
}
async function y(e, t) {
    let n = h.l4.getSetting(),
        r = I.default.extractTimestamp(e);
    if ((n >= e || a()().diff(r, 'days') > 30) && !t) return;
    let i = await (0, E.Y7)();
    if (!(null == i ? void 0 : i.categories[O.$Z.UPDATES_AND_ANNOUNCEMENTS])) return;
    let o = await l.Z.getOrEnsurePrivateChannel(v.sP);
    if (null == o) return;
    await u.Z.fetchMessages({
        channelId: o,
        limit: 1
    });
    let s = p.Z.getLastMessage(o),
        c = m.ZP.getOldestUnreadMessageId(o),
        d = m.ZP.hasUnread(o);
    if (null == s || null == c || d || s.id > c) return;
    let f = (0, _.ZP)({
        ...s,
        channelId: o,
        messageReference: void 0,
        poll: void 0,
        changelogId: s.changelogId
    });
    u.Z.receiveMessage(
        o,
        {
            ...f,
            state: N.yb.SENT,
            channel_id: o
        },
        !0,
        {}
    );
}
class b extends d.Z {
    constructor(...e) {
        super(...e),
            R(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            R(this, 'handleConnectionOpen', async (e) => {
                let { canReceiveMessage: t, canReceiveUnpublishedMessages: n } = T.Z.getCurrentConfig({ location: 'changelog_manager' }, { autoTrackExposure: !1 }),
                    r = await s.Z.fetchChangelogConfig(),
                    i = r.body,
                    a = C(i, (0, S.b)());
                if (
                    (o.Z.dispatch({
                        type: 'CHANGE_LOG_SET_CONFIG',
                        config: r.body,
                        latestChangelogId: a
                    }),
                    null == a)
                )
                    return;
                if (t) {
                    (0, c.PR)(v.sP), y(a, n);
                    return;
                }
                if (!0 !== i[a].show_on_startup) return;
                let l = g.Z.lastSeenChangelogId(),
                    u = g.Z.lastSeenChangelogDate();
                if (null != l && 0 >= I.default.compare(a, l)) return;
                let d = await s.Z.fetchChangelog(a, f.default.locale);
                if (null != d) {
                    if (null == u || null == g.Z.lastSeenChangelogDate()) {
                        s.Z.markChangelogAsSeen(a, d.date);
                        return;
                    }
                    !g.Z.isLocked() && new Date(d.date) > new Date(u) && (0, A.Z)();
                }
            });
    }
}
t.Z = new b();

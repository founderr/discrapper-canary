n.d(t, {
    B5: function () {
        return m;
    },
    PI: function () {
        return h;
    },
    ui: function () {
        return E;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(772848),
    s = n(286379),
    o = n(110924),
    l = n(797614),
    u = n(617136),
    c = n(882198),
    d = n(5881),
    f = n(981631);
function _(e, t, n) {
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
let h = 0.5;
class p {
    constructor({ questOrQuests: e, questContent: t, triggeredByStatusChange: n, trackGuildAndChannelMetadata: r, questContentPosition: i, questContentRowIndex: o, minViewTimeSeconds: m = 1 }) {
        var g = this;
        _(this, 'id', void 0),
            _(this, 'quests', void 0),
            _(this, 'questContent', void 0),
            _(this, 'triggeredByStatusChange', void 0),
            _(this, 'trackGuildAndChannelMetadata', void 0),
            _(this, 'questContentPosition', void 0),
            _(this, 'questContentRowIndex', void 0),
            _(this, 'heartbeatTimeoutId', void 0),
            _(this, 'lastBeatTime', void 0),
            _(this, 'minViewTimeReachedTimeoutId', void 0),
            _(this, 'minViewTimeSeconds', void 0),
            _(this, 'minViewportPercentage', void 0),
            _(this, 'isRunning', !1),
            _(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, d.T)().info(''.concat(e.config.messages.questName, ' Quest viewed for at least ').concat(this.minViewTimeSeconds, 's'), { impressionId: this.id }),
                        (0, u.dA)({
                            questId: e.id,
                            event: f.rMx.QUEST_CONTENT_VIEWED,
                            properties: {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange,
                                ...this.commonProperties(e)
                            },
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                        });
                });
            }),
            _(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                g.quests.forEach((t) => {
                    if (null != g.lastBeatTime) {
                        let n = Math.round(Date.now() - g.lastBeatTime);
                        (0, d.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: g.id }
                        ),
                            (0, u.dA)({
                                questId: t.id,
                                event: f.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: {
                                    is_termination_beat: e,
                                    viewed_time_ms: n,
                                    triggered_by_status_change: g.triggeredByStatusChange,
                                    ...g.commonProperties(t)
                                },
                                trackGuildAndChannelMetadata: g.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (g.lastBeatTime = Date.now());
            }),
            _(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                quest_status: (0, u.uk)(e),
                ...(0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            _(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new p({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t
                    })
                );
            }),
            _(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 60000)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, d.T)().info(''.concat(e.config.messages.questName, ' Quest became visible'), { impressionId: this.id }),
                            (0, u.dA)({
                                questId: e.id,
                                event: f.rMx.QUEST_CONTENT_LOADED,
                                properties: {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    ...this.commonProperties(e)
                                },
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, c.a)('QuestImpressionTracker') &&
                        l.Z.increment({
                            name: s.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            _(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && g.beat(!0), (g.lastBeatTime = void 0), clearInterval(g.heartbeatTimeoutId), clearTimeout(g.minViewTimeReachedTimeoutId), (g.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = m),
            (this.minViewportPercentage = h),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = o);
    }
}
let m = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    g = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, o.Z)(t);
        return t !== n;
    };
function E(e) {
    let { visible: t, visibleChanged: n, reference: a, focused: s, focusedChanged: o, impression: l } = e,
        u = g(e.questOrQuests);
    return (
        i.useEffect(
            () => () => {
                null != l.current && l.current.stop();
            },
            [l]
        ),
        i.useEffect(() => {
            let r = s && t,
                i = (n || o || u) && r,
                a = ((n || o) && !r) || u;
            (i || a) && null != l.current && l.current.stop(),
                i &&
                    ((l.current = new p({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    l.current.start());
        }, [s, t, l, o, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u, e.minViewTimeSeconds]),
        (0, r.jsx)(r.Fragment, { children: e.children(a) })
    );
}

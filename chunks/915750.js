n.d(t, {
    B5: function () {
        return I;
    },
    PI: function () {
        return p;
    },
    ui: function () {
        return g;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(772848),
    o = n(286379),
    s = n(110924),
    l = n(797614),
    u = n(617136),
    c = n(184309),
    d = n(5881),
    _ = n(981631);
function E(e, t, n) {
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
let f = 60,
    h = 1,
    p = 0.5;
class m {
    constructor({ questOrQuests: e, questContent: t, triggeredByStatusChange: n, trackGuildAndChannelMetadata: r, questContentPosition: i, questContentRowIndex: s }) {
        var I = this;
        E(this, 'id', void 0),
            E(this, 'quests', void 0),
            E(this, 'questContent', void 0),
            E(this, 'triggeredByStatusChange', void 0),
            E(this, 'trackGuildAndChannelMetadata', void 0),
            E(this, 'questContentPosition', void 0),
            E(this, 'questContentRowIndex', void 0),
            E(this, 'heartbeatTimeoutId', void 0),
            E(this, 'lastBeatTime', void 0),
            E(this, 'minViewTimeReachedTimeoutId', void 0),
            E(this, 'minViewTimeSeconds', void 0),
            E(this, 'minViewportPercentage', void 0),
            E(this, 'isRunning', !1),
            E(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, d.T)().info(''.concat(e.config.messages.questName, ' Quest viewed for at least ').concat(this.minViewTimeSeconds, 's'), { impressionId: this.id }),
                        (0, u.dA)({
                            questId: e.id,
                            event: _.rMx.QUEST_CONTENT_VIEWED,
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
            E(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                I.quests.forEach((t) => {
                    if (null != I.lastBeatTime) {
                        let n = Math.round(Date.now() - I.lastBeatTime);
                        (0, d.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: I.id }
                        ),
                            (0, u.dA)({
                                questId: t.id,
                                event: _.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: {
                                    is_termination_beat: e,
                                    viewed_time_ms: n,
                                    triggered_by_status_change: I.triggeredByStatusChange,
                                    ...I.commonProperties(t)
                                },
                                trackGuildAndChannelMetadata: I.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (I.lastBeatTime = Date.now());
            }),
            E(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                quest_status: (0, u.uk)(e),
                ...(0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            E(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new m({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t
                    })
                );
            }),
            E(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * f)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, d.T)().info(''.concat(e.config.messages.questName, ' Quest became visible'), { impressionId: this.id }),
                            (0, u.dA)({
                                questId: e.id,
                                event: _.rMx.QUEST_CONTENT_LOADED,
                                properties: {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    ...this.commonProperties(e)
                                },
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, c.a)('QuestImpressionTracker') &&
                        l.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            E(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && I.beat(!0), (I.lastBeatTime = void 0), clearInterval(I.heartbeatTimeoutId), clearTimeout(I.minViewTimeReachedTimeoutId), (I.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = h),
            (this.minViewportPercentage = p),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = s);
    }
}
let I = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    T = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, s.Z)(t);
        return t !== n;
    };
function g(e) {
    let { visible: t, visibleChanged: n, reference: a, focused: o, focusedChanged: s, impression: l } = e,
        u = T(e.questOrQuests);
    return (
        i.useEffect(
            () => () => {
                null != l.current && l.current.stop();
            },
            [l]
        ),
        i.useEffect(() => {
            let r = o && t,
                i = (n || s || u) && r,
                a = ((n || s) && !r) || u;
            (i || a) && null != l.current && l.current.stop(),
                i &&
                    ((l.current = new m({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata
                    })),
                    l.current.start());
        }, [o, t, l, s, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u]),
        (0, r.jsx)(r.Fragment, { children: e.children(a) })
    );
}

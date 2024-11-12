n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(812206),
    s = n(569545),
    o = n(687516),
    l = n(981283),
    u = n(928518),
    c = n(314897),
    d = n(592125),
    f = n(158776),
    _ = n(19780),
    p = n(959457),
    h = n(178635),
    m = n(531578),
    g = n(981631);
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
class v extends h.Z {
    _initialize() {
        l.Z.init();
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                USER_DM_MUTE_SHOW_FEEDBACK: (e) => this.handleUserDmMuteFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback()
            }),
            E(this, 'handleVoiceChannelFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(m.nw.VOICE, () => {
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('96888').then(n.bind(n, 988645));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                analyticsData: t
                            });
                    });
                });
            }),
            E(this, 'handleStreamClose', (e) => {
                var t;
                let { streamKey: a, canShowFeedback: l } = e,
                    u = (0, s.my)(a),
                    d = (0, o.L2)(u, f.Z),
                    _ = null !== (t = p.Z.getVideoStats(a)) && void 0 !== t ? t : {},
                    h = {
                        media_session_id: p.Z.getMediaSessionId(a),
                        rtc_connection_id: p.Z.getRtcConnectionId(a),
                        stream_region: p.Z.getRegion(a),
                        max_viewers: p.Z.getMaxViewers(a),
                        ..._
                    };
                l &&
                    this.possiblyShowFeedbackModal(m.nw.STREAM, () => {
                        (0, i.openModalLazy)(async () => {
                            let { default: e } = await n.e('23657').then(n.bind(n, 142402));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    stream: u,
                                    streamApplication: d,
                                    isStreamer: u.ownerId === c.default.getId(),
                                    ...t,
                                    analyticsData: h
                                });
                        });
                    });
            }),
            E(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(m.nw.VIDEO_BACKGROUND, () => {
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('11495').then(n.bind(n, 801320));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                analyticsData: t
                            });
                    });
                });
            }),
            E(this, 'handleActivityClose', (e) => {
                let { applicationId: t, channelId: s, showFeedback: o } = e,
                    l = a.Z.getApplication(t),
                    c = d.Z.getChannel(s),
                    f = {
                        rtc_connection_id: _.Z.getRTCConnectionId(),
                        media_session_id: _.Z.getMediaSessionId()
                    },
                    p = u.Z.getWindowOpen(g.KJ3.CHANNEL_CALL_POPOUT) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                null != l &&
                    null != c &&
                    o &&
                    this.possiblyShowFeedbackModal(m.nw.ACTIVITY, () => {
                        (0, i.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e('4413').then(n.bind(n, 450634));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        activityApplication: l,
                                        channel: c,
                                        analyticsData: f
                                    });
                            },
                            { contextKey: p }
                        );
                    });
            }),
            E(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: t, reportType: a } = e;
                this.possiblyShowFeedbackModal(m.nw.IN_APP_REPORTS, () => {
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('72135').then(n.bind(n, 442173));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                reportId: t,
                                reportType: a
                            });
                    });
                });
            }),
            E(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: t } = e;
                this.possiblyShowFeedbackModal(m.nw.USER_DM_MUTE, () => {
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('10620').then(n.bind(n, 408561));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                channel: t
                            });
                    });
                });
            }),
            E(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(m.nw.BLOCK_USER, () => {
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
                });
            });
    }
}
t.Z = new v();

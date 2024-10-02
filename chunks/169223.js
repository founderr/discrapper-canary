var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(812206),
    s = n(569545),
    l = n(687516),
    u = n(981283),
    c = n(928518),
    d = n(314897),
    _ = n(592125),
    E = n(158776),
    f = n(19780),
    h = n(959457),
    p = n(178635),
    m = n(531578),
    I = n(981631);
function T(e, t, n) {
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
class g extends p.Z {
    _initialize() {
        u.Z.init();
    }
    constructor(...e) {
        super(...e),
            T(this, 'actions', {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                USER_DM_MUTE_SHOW_FEEDBACK: (e) => this.handleUserDmMuteFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback()
            }),
            T(this, 'handleVoiceChannelFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(m.nw.VOICE, () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('51514'), n.e('96888')]).then(n.bind(n, 988645));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                analyticsData: t
                            });
                    });
                });
            }),
            T(this, 'handleStreamClose', (e) => {
                var t;
                let { streamKey: r, canShowFeedback: o } = e,
                    u = (0, s.my)(r),
                    c = (0, l.L2)(u, E.Z),
                    _ = null !== (t = h.Z.getVideoStats(r)) && void 0 !== t ? t : {},
                    f = {
                        media_session_id: h.Z.getMediaSessionId(r),
                        rtc_connection_id: h.Z.getRtcConnectionId(r),
                        stream_region: h.Z.getRegion(r),
                        max_viewers: h.Z.getMaxViewers(r),
                        ..._
                    };
                o &&
                    this.possiblyShowFeedbackModal(m.nw.STREAM, () => {
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('23657').then(n.bind(n, 142402));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    stream: u,
                                    streamApplication: c,
                                    isStreamer: u.ownerId === d.default.getId(),
                                    ...t,
                                    analyticsData: f
                                });
                        });
                    });
            }),
            T(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(m.nw.VIDEO_BACKGROUND, () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('11495').then(n.bind(n, 801320));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                analyticsData: t
                            });
                    });
                });
            }),
            T(this, 'handleActivityClose', (e) => {
                let { applicationId: t, channelId: r, showFeedback: s } = e,
                    l = o.Z.getApplication(t),
                    u = _.Z.getChannel(r),
                    d = {
                        rtc_connection_id: f.Z.getRTCConnectionId(),
                        media_session_id: f.Z.getMediaSessionId()
                    },
                    E = c.Z.getWindowOpen(I.KJ3.CHANNEL_CALL_POPOUT) ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
                null != l &&
                    null != u &&
                    s &&
                    this.possiblyShowFeedbackModal(m.nw.ACTIVITY, () => {
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e('4413').then(n.bind(n, 450634));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        activityApplication: l,
                                        channel: u,
                                        analyticsData: d
                                    });
                            },
                            { contextKey: E }
                        );
                    });
            }),
            T(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: t, reportType: r } = e;
                this.possiblyShowFeedbackModal(m.nw.IN_APP_REPORTS, () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('51514'), n.e('72135')]).then(n.bind(n, 442173));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                reportId: t,
                                reportType: r
                            });
                    });
                });
            }),
            T(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: t } = e;
                this.possiblyShowFeedbackModal(m.nw.USER_DM_MUTE, () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('10620').then(n.bind(n, 408561));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            });
                    });
                });
            }),
            T(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(m.nw.BLOCK_USER, () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                });
            });
    }
}
t.Z = new g();

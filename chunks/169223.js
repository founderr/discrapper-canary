var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(812206),
    l = r(569545),
    u = r(687516),
    c = r(981283),
    d = r(928518),
    f = r(314897),
    _ = r(592125),
    h = r(158776),
    p = r(19780),
    m = r(959457),
    g = r(178635),
    E = r(531578),
    v = r(981631);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class T extends g.Z {
    _initialize() {
        c.Z.init();
    }
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                USER_DM_MUTE_SHOW_FEEDBACK: (e) => this.handleUserDmMuteFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback()
            }),
            I(this, 'handleVoiceChannelFeedback', (e) => {
                let { analyticsData: n } = e;
                this.possiblyShowFeedbackModal(E.nw.VOICE, () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('96888').then(r.bind(r, 988645));
                        return (r) =>
                            (0, a.jsx)(e, {
                                ...r,
                                analyticsData: n
                            });
                    });
                });
            }),
            I(this, 'handleStreamClose', (e) => {
                var n;
                let { streamKey: i, canShowFeedback: o } = e,
                    c = (0, l.my)(i),
                    d = (0, u.L2)(c, h.Z),
                    _ = null !== (n = m.Z.getVideoStats(i)) && void 0 !== n ? n : {},
                    p = {
                        media_session_id: m.Z.getMediaSessionId(i),
                        rtc_connection_id: m.Z.getRtcConnectionId(i),
                        stream_region: m.Z.getRegion(i),
                        max_viewers: m.Z.getMaxViewers(i),
                        ..._
                    };
                o &&
                    this.possiblyShowFeedbackModal(E.nw.STREAM, () => {
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await r.e('23657').then(r.bind(r, 142402));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    stream: c,
                                    streamApplication: d,
                                    isStreamer: c.ownerId === f.default.getId(),
                                    ...n,
                                    analyticsData: p
                                });
                        });
                    });
            }),
            I(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: n } = e;
                this.possiblyShowFeedbackModal(E.nw.VIDEO_BACKGROUND, () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('11495').then(r.bind(r, 801320));
                        return (r) =>
                            (0, a.jsx)(e, {
                                ...r,
                                analyticsData: n
                            });
                    });
                });
            }),
            I(this, 'handleActivityClose', (e) => {
                let { applicationId: n, channelId: i, showFeedback: l } = e,
                    u = o.Z.getApplication(n),
                    c = _.Z.getChannel(i),
                    f = {
                        rtc_connection_id: p.Z.getRTCConnectionId(),
                        media_session_id: p.Z.getMediaSessionId()
                    },
                    h = d.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
                null != u &&
                    null != c &&
                    l &&
                    this.possiblyShowFeedbackModal(E.nw.ACTIVITY, () => {
                        (0, s.openModalLazy)(
                            async () => {
                                let { default: e } = await r.e('4413').then(r.bind(r, 450634));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        ...n,
                                        activityApplication: u,
                                        channel: c,
                                        analyticsData: f
                                    });
                            },
                            { contextKey: h }
                        );
                    });
            }),
            I(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: n, reportType: i } = e;
                this.possiblyShowFeedbackModal(E.nw.IN_APP_REPORTS, () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('72135').then(r.bind(r, 442173));
                        return (r) =>
                            (0, a.jsx)(e, {
                                ...r,
                                reportId: n,
                                reportType: i
                            });
                    });
                });
            }),
            I(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: n } = e;
                this.possiblyShowFeedbackModal(E.nw.USER_DM_MUTE, () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('10620').then(r.bind(r, 408561));
                        return (r) =>
                            (0, a.jsx)(e, {
                                ...r,
                                channel: n
                            });
                    });
                });
            }),
            I(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(E.nw.BLOCK_USER, () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('87995').then(r.bind(r, 180970));
                        return (n) => (0, a.jsx)(e, { ...n });
                    });
                });
            });
    }
}
n.Z = new T();

var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(16609),
    l = r(812206),
    u = r(569545),
    c = r(687516),
    d = r(981283),
    f = r(928518),
    _ = r(314897),
    h = r(592125),
    p = r(158776),
    m = r(19780),
    g = r(959457),
    E = r(178635),
    v = r(531578),
    I = r(981631);
function T(e, n, r) {
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
class b extends E.Z {
    _initialize() {
        d.Z.init();
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
                let { analyticsData: n } = e;
                this.possiblyShowFeedbackModal(v.nw.VOICE, () => {
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
            T(this, 'handleStreamClose', (e) => {
                var n;
                let { streamKey: i, canShowFeedback: o } = e,
                    l = (0, u.my)(i),
                    d = (0, c.L2)(l, p.Z),
                    f = null !== (n = g.Z.getVideoStats(i)) && void 0 !== n ? n : {},
                    h = {
                        media_session_id: g.Z.getMediaSessionId(i),
                        rtc_connection_id: g.Z.getRtcConnectionId(i),
                        stream_region: g.Z.getRegion(i),
                        max_viewers: g.Z.getMaxViewers(i),
                        ...f
                    };
                o &&
                    this.possiblyShowFeedbackModal(v.nw.STREAM, () => {
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await r.e('23657').then(r.bind(r, 142402));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    stream: l,
                                    streamApplication: d,
                                    isStreamer: l.ownerId === _.default.getId(),
                                    ...n,
                                    analyticsData: h
                                });
                        });
                    });
            }),
            T(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: n } = e;
                this.possiblyShowFeedbackModal(v.nw.VIDEO_BACKGROUND, () => {
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
            T(this, 'handleActivityClose', (e) => {
                let { applicationId: n, location: i, showFeedback: u } = e,
                    c = l.Z.getApplication(n),
                    d = (0, o.p)(i),
                    _ = h.Z.getChannel(d),
                    p = {
                        rtc_connection_id: m.Z.getRTCConnectionId(),
                        media_session_id: m.Z.getMediaSessionId()
                    },
                    g = f.Z.getWindowOpen(I.KJ3.CHANNEL_CALL_POPOUT) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
                null != c &&
                    null != _ &&
                    u &&
                    this.possiblyShowFeedbackModal(v.nw.ACTIVITY, () => {
                        (0, s.openModalLazy)(
                            async () => {
                                let { default: e } = await r.e('4413').then(r.bind(r, 450634));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        ...n,
                                        activityApplication: c,
                                        channel: _,
                                        analyticsData: p
                                    });
                            },
                            { contextKey: g }
                        );
                    });
            }),
            T(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: n, reportType: i } = e;
                this.possiblyShowFeedbackModal(v.nw.IN_APP_REPORTS, () => {
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
            T(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: n } = e;
                this.possiblyShowFeedbackModal(v.nw.USER_DM_MUTE, () => {
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
            T(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(v.nw.BLOCK_USER, () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('87995').then(r.bind(r, 180970));
                        return (n) => (0, a.jsx)(e, { ...n });
                    });
                });
            });
    }
}
n.Z = new b();

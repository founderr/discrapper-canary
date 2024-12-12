var i = r(200651);
r(192379);
var a = r(392711);
var s = r(481060),
    o = r(570140),
    l = r(846027),
    u = r(872810),
    c = r(695346),
    d = r(199902),
    f = r(314897),
    _ = r(650774),
    h = r(19780),
    p = r(594174),
    m = r(449753),
    g = r(569545),
    E = r(960861),
    v = r(803647),
    I = r(70722),
    T = r(981631);
let b = (0, a.debounce)(u.xc, 1000);
n.Z = {
    init() {
        m.Z.init(),
            E.ZP.initializeIfNeeded(),
            o.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: n } = e,
                    r = d.Z.getCurrentUserActiveStream();
                if (null != r) {
                    let e = n === T.FQ1.PAUSED;
                    (0, u.tK)(r, e);
                }
            }),
            o.Z.subscribe('STREAM_DELETE', (e) => {
                e.reason === T.si2.STREAM_FULL &&
                    ((0, u.aP)(e.streamKey, !1),
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await r.e('63757').then(r.bind(r, 309690));
                        return (n) => (0, i.jsx)(e, { ...n });
                    }));
            }),
            o.Z.subscribe('STREAM_WATCH', (e) => {
                let { streamKey: n, allowMultiple: r } = e;
                if (r) return;
                let i = (0, g.my)(n);
                d.Z.getAllActiveStreams().forEach((e) => {
                    if (e.ownerId !== i.ownerId && e.ownerId !== f.default.getId()) e.ownerId === f.default.getId() && l.Z.setGoLiveSource(null), (0, u.aP)((0, g.V9)(e), !1);
                });
            }),
            o.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                let { voiceStates: n } = e;
                n.forEach((e) => {
                    let { userId: n } = e;
                    if (n !== f.default.getId()) return;
                    let r = d.Z.getAllActiveStreams(),
                        i = h.Z.getChannelId();
                    r.forEach((e) => {
                        e.channelId !== i && (0, v.Z)(e, !1);
                    });
                });
            }),
            o.Z.subscribe('STREAM_CREATE', (e) => {
                var n;
                let { streamKey: r } = e,
                    { ownerId: i, guildId: a } = (0, g.my)(r);
                if (null == a || null == i || i !== (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return;
                let s = _.Z.getMemberCount(a);
                if (null != s && !(s < 2) && !(s > I.tB)) c.eo.getSetting() && b(r);
            });
    }
};

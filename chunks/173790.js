t.d(n, {
    Z: function () {
        return A;
    }
});
var i = t(735250), l = t(470079), r = t(218061), a = t(481060), s = t(361213), o = t(778569), c = t(783097), u = t(753972), d = t(387658), m = t(536650), p = t(675993), _ = t(689938), E = t(132439), h = t(413097);
function A(e) {
    let {
            channel: n,
            application: t,
            sectionName: s
        } = e, o = (0, c.ye)({ application: t }), A = o ? f : p.Z, N = l.useRef(null), {
            iconURL: C,
            name: v
        } = l.useMemo(() => (0, c.sl)(t, {
            botIconFirst: !o,
            fakeAppIconURL: h,
            size: 80
        }), [
            t,
            o
        ]);
    return (0, i.jsxs)(a.ScrollerNone, {
        className: E.container,
        fade: !0,
        ref: N,
        role: 'region',
        'aria-label': _.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({ applicationName: v }),
        children: [
            (0, i.jsx)(m.Z, {
                name: v,
                iconURL: C,
                scrollerRef: N
            }),
            null != C && (0, i.jsx)(u.Z, {
                src: C,
                className: E.appIcon
            }),
            (0, i.jsx)(r.Z, { size: 54 }),
            (0, i.jsx)(A, {
                channel: n,
                application: t,
                sectionName: s
            }),
            (0, i.jsx)(d.Z, {
                channel: n,
                application: t,
                sectionName: s
            })
        ]
    });
}
function f(e) {
    let {
            channel: n,
            application: t,
            sectionName: l
        } = e, r = (0, o.Z)({
            applicationId: t.id,
            size: 2048,
            names: ['embedded_cover']
        }), a = (0, c.yJ)(t), u = null != a && null != a.activity_preview_video_asset_id ? (0, s.Z)(t.id, a.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(p.Z, {
        channel: n,
        application: t,
        imageCoverUrl: r.url,
        videoUrl: u,
        sectionName: l
    });
}

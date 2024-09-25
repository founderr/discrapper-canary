t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(442837),
    o = t(218061),
    r = t(481060),
    s = t(361213),
    c = t(778569),
    d = t(213459),
    u = t(835473),
    m = t(541099),
    p = t(827498),
    _ = t(783097),
    C = t(753972),
    f = t(387658),
    h = t(536650),
    A = t(675993),
    E = t(689079),
    N = t(689938),
    v = t(804978),
    x = t(413097);
function I(e) {
    var n;
    let { channel: t, application: s, sectionName: c } = e,
        I = (0, l.e7)([m.Z], () => m.Z.entrypoint()),
        P = null !== (n = (0, u.q)(s.id === E.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s,
        L = (0, _.ye)(P) ? g : A.Z,
        S = a.useRef(null),
        [b, R] = a.useState(!1),
        { iconURL: T, name: M } = a.useMemo(
            () =>
                (0, _.sl)(P, {
                    fakeAppIconURL: x,
                    size: 84
                }),
            [P]
        ),
        y = (0, d.PL)(!0, !0),
        j = (0, d.LD)(t.guild_id, !0),
        Z = a.useMemo(() => (0, d.If)(t, P.id), [y, j, t, P.id]),
        O = !Z.isGuildInstalled && !Z.isUserInstalled;
    return (
        a.useEffect(() => {
            O ? d.ZP.queryInstallOnDemandApp(P.id, t.id) : d.ZP.maybeQueryForInstallLessApps(P.id, t.id);
        }, [P.id, t.id, O]),
        (0, i.jsxs)(r.ScrollerNone, {
            className: v.container,
            fade: !0,
            ref: S,
            role: 'region',
            'aria-label': N.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({ applicationName: M }),
            children: [
                (0, i.jsx)(h.Z, {
                    application: P,
                    name: M,
                    iconURL: T,
                    scrollerRef: S,
                    sectionName: c
                }),
                null != T &&
                    (0, i.jsx)(C.Z, {
                        src: T,
                        className: v.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: 54 }),
                (0, i.jsx)(L, {
                    channel: t,
                    application: P,
                    sectionName: c,
                    hasCommands: b
                }),
                I === p._b.TEXT
                    ? (0, i.jsx)(f.Z, {
                          channel: t,
                          application: P,
                          sectionName: c,
                          installOnDemand: O,
                          setHasCommands: R
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { channel: n, application: t, sectionName: a, hasCommands: l } = e,
        o = (0, c.Z)({
            applicationId: t.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        r = (0, _.yJ)(t),
        d = null != r && null != r.activity_preview_video_asset_id ? (0, s.Z)(t.id, r.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(A.Z, {
        channel: n,
        application: t,
        imageCoverUrl: o.url,
        videoUrl: d,
        sectionName: a,
        hasCommands: l
    });
}

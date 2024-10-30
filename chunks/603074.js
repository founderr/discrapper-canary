n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(990547),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(213609),
    E = n(28546),
    f = n(675478),
    h = n(19780),
    p = n(208049),
    I = n(522811),
    m = n(763296),
    T = n(526617),
    S = n(126857);
function g(e) {
    let { guildId: t, channel: n, containerWidth: a, onClose: g, onSelect: A, analyticsSource: N, suppressPlaySound: R, shouldValidateSelectedSound: O, shouldShowUpsell: v = !0, gridNotice: C, inExpressionPicker: L, soundButtonOverlay: D, listPadding: y, renderHeader: b, defaultSoundsOnly: M } = e,
        P = (0, l.e7)([m.Z], () => m.Z.isFetchingSounds() || m.Z.isFetchingDefaultSounds()),
        U = (0, l.e7)([h.Z], () => h.Z.getMediaSessionId()),
        { analyticsLocations: w } = (0, d.ZP)(c.Z.SOUNDBOARD_POPOUT);
    (0, _.Z)({
        type: o.ImpressionTypes.POPOUT,
        name: o.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: N,
            guild_id: t,
            media_session_id: U
        }
    }),
        i.useEffect(() => {
            p.w(), f.DZ.loadIfNecessary(), (0, E.ql)('');
        }, []);
    let { refreshEnabled: x } = (0, I.Z)({ location: 'SoundboardSoundPicker' });
    return (0, r.jsx)(d.Gt, {
        value: w,
        children: (0, r.jsx)(u.Dialog, {
            className: s()(S.picker, {
                [S.fetching]: P,
                [S.inExpressionPicker]: L,
                [S.refresh]: x
            }),
            children: P
                ? (0, r.jsx)(u.Spinner, {})
                : (0, r.jsx)(T.Z, {
                      guildId: t,
                      channel: n,
                      onClose: g,
                      onSelect: A,
                      shouldValidateSelectedSound: O,
                      containerWidth: a,
                      suppressPlaySound: R,
                      shouldShowUpsell: v,
                      gridNotice: C,
                      soundButtonOverlay: D,
                      listPadding: y,
                      renderHeader: b,
                      defaultSoundsOnly: M,
                      inExpressionPicker: L,
                      refreshEnabled: x
                  })
        })
    });
}

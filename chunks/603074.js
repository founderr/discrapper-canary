n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(213609),
    E = n(28546),
    f = n(675478),
    h = n(19780),
    p = n(208049),
    m = n(522811),
    I = n(763296),
    T = n(526617),
    g = n(126857);
function S(e) {
    let { guildId: t, channel: n, containerWidth: a, onClose: S, onSelect: A, analyticsSource: v, suppressPlaySound: N, shouldShowUpsell: O = !0, gridNotice: R, inExpressionPicker: C, soundButtonOverlay: y, listPadding: b, renderHeader: L, defaultSoundsOnly: D } = e,
        M = (0, l.e7)([I.Z], () => I.Z.isFetchingSounds() || I.Z.isFetchingDefaultSounds()),
        P = (0, l.e7)([h.Z], () => h.Z.getMediaSessionId()),
        { analyticsLocations: U } = (0, d.ZP)(c.Z.SOUNDBOARD_POPOUT);
    (0, _.Z)({
        type: s.ImpressionTypes.POPOUT,
        name: s.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: v,
            guild_id: t,
            media_session_id: P
        }
    }),
        i.useEffect(() => {
            p.w(), f.DZ.loadIfNecessary(), (0, E.ql)('');
        }, []);
    let { refreshEnabled: w } = (0, m.Z)({ location: 'SoundboardSoundPicker' });
    return (0, r.jsx)(d.Gt, {
        value: U,
        children: (0, r.jsx)(u.Dialog, {
            className: o()(g.picker, {
                [g.fetching]: M,
                [g.inExpressionPicker]: C,
                [g.refresh]: w
            }),
            children: M
                ? (0, r.jsx)(u.Spinner, {})
                : (0, r.jsx)(T.Z, {
                      guildId: t,
                      channel: n,
                      onClose: S,
                      onSelect: A,
                      containerWidth: a,
                      suppressPlaySound: N,
                      shouldShowUpsell: O,
                      gridNotice: R,
                      soundButtonOverlay: y,
                      listPadding: b,
                      renderHeader: L,
                      defaultSoundsOnly: D,
                      inExpressionPicker: C,
                      refreshEnabled: w
                  })
        })
    });
}

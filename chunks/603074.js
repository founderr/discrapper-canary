r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(990547),
    u = r(442837),
    c = r(481060),
    d = r(100527),
    f = r(906732),
    _ = r(213609),
    h = r(28546),
    p = r(675478),
    m = r(19780),
    g = r(208049),
    E = r(522811),
    v = r(763296),
    I = r(526617),
    T = r(620492);
function b(e) {
    let { guildId: n, channel: r, containerWidth: s, onClose: b, onSelect: y, analyticsSource: S, suppressPlaySound: A, shouldValidateSelectedSound: N, shouldShowUpsell: C = !0, gridNotice: R, inExpressionPicker: O, soundButtonOverlay: D, listPadding: L, renderHeader: x, defaultSoundsOnly: w } = e,
        P = (0, u.e7)([v.Z], () => v.Z.isFetchingSounds() || v.Z.isFetchingDefaultSounds()),
        M = (0, u.e7)([m.Z], () => m.Z.getMediaSessionId()),
        { analyticsLocations: k } = (0, f.ZP)(d.Z.SOUNDBOARD_POPOUT);
    (0, _.Z)({
        type: l.ImpressionTypes.POPOUT,
        name: l.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: S,
            guild_id: n,
            media_session_id: M
        }
    }),
        a.useEffect(() => {
            g.w(), p.DZ.loadIfNecessary(), (0, h.ql)('');
        }, []);
    let { refreshEnabled: U } = (0, E.Z)({ location: 'SoundboardSoundPicker' });
    return (0, i.jsx)(f.Gt, {
        value: k,
        children: (0, i.jsx)(c.Dialog, {
            className: o()(T.picker, {
                [T.fetching]: P,
                [T.inExpressionPicker]: O,
                [T.refresh]: U
            }),
            children: P
                ? (0, i.jsx)(c.Spinner, {})
                : (0, i.jsx)(I.Z, {
                      guildId: n,
                      channel: r,
                      onClose: b,
                      onSelect: y,
                      shouldValidateSelectedSound: N,
                      containerWidth: s,
                      suppressPlaySound: A,
                      shouldShowUpsell: C,
                      gridNotice: R,
                      soundButtonOverlay: D,
                      listPadding: L,
                      renderHeader: x,
                      defaultSoundsOnly: w,
                      inExpressionPicker: O,
                      refreshEnabled: U
                  })
        })
    });
}

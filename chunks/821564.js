n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(846027),
    r = n(131951),
    o = n(358085),
    c = n(981631),
    u = n(689938);
function d(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, s.e7)([r.Z], () => r.Z.getMode()),
        d = (t, s) =>
            (0, i.jsx)(
                a.MenuRadioItem,
                {
                    id: t,
                    group: 'input-modes',
                    label: s,
                    checked: n === t,
                    action: () => l.Z.setMode(t, void 0, void 0, { analyticsLocations: e })
                },
                t
            );
    return [d(c.pM4.VOICE_ACTIVITY, u.Z.Messages.INPUT_MODE_VAD), d(c.pM4.PUSH_TO_TALK, t ? u.Z.Messages.INPUT_MODE_PTT_LIMITED : u.Z.Messages.INPUT_MODE_PTT)];
}

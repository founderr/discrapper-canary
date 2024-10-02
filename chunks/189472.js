var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(87051),
    l = n(367907),
    u = n(138201),
    c = n(592125),
    d = n(9156),
    _ = n(621600),
    E = n(981631),
    f = n(689938);
let h = (e) => {
    let { user: t, reportId: n } = e,
        r = c.Z.getDMFromUserId(t.id),
        h = (0, o.e7)([d.ZP], () => (null == r ? null : d.ZP.isChannelMuted(null, r))),
        [p, m] = a.useState(null != h && h),
        I = a.useCallback(() => {
            null != r &&
                (m(!0),
                l.ZP.trackWithMetadata(E.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: n
                }),
                s.Z.updateChannelOverrideSettings(null, r, { muted: !0 }, _.ZB.Muted));
        }, [r, t, n]);
    return (0, i.jsx)(u.Z, {
        title: f.Z.Messages.IAR_UPSELLS_MUTE_TITLE.format({ username: t.username }),
        description: f.Z.Messages.IAR_UPSELLS_MUTE_DESCRIPTION,
        buttonText: p ? f.Z.Messages.IAR_UPSELLS_MUTED_BUTTON : f.Z.Messages.IAR_UPSELLS_MUTE_BUTTON,
        buttonDisabled: p,
        onButtonPress: I
    });
};
t.Z = h;

n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(87051),
    o = n(367907),
    l = n(138201),
    u = n(592125),
    c = n(9156),
    d = n(621600),
    f = n(981631),
    _ = n(388032);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        h = u.Z.getDMFromUserId(t.id),
        p = (0, a.e7)([c.ZP], () => (null == h ? null : c.ZP.isChannelMuted(null, h))),
        [m, g] = i.useState(null != p && p),
        E = i.useCallback(() => {
            null != h &&
                (g(!0),
                o.ZP.trackWithMetadata(f.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: n
                }),
                s.Z.updateChannelOverrideSettings(null, h, { muted: !0 }, d.ZB.Muted));
        }, [h, t, n]);
    return (0, r.jsx)(l.Z, {
        title: _.intl.formatToPlainString(_.t.TRp5wc, { username: t.username }),
        description: _.intl.string(_.t['yM/+AA']),
        buttonText: m ? _.intl.string(_.t.E8x4Nj) : _.intl.string(_.t.HITUcX),
        buttonDisabled: m,
        onButtonPress: E
    });
};

n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(904245),
    o = n(367907),
    l = n(138201),
    u = n(592125),
    c = n(496675),
    d = n(981631),
    f = n(388032);
t.Z = (e) => {
    let { message: t, reportId: n } = e,
        [_, h] = i.useState(!1),
        p = i.useCallback(() => {
            h(!0), o.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), s.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        m = i.useMemo(() => {
            let e = u.Z.getChannel(t.getChannelId());
            return null != e && e.type !== d.d4z.DM && e.type !== d.d4z.GROUP_DM && c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [t]);
    return null != t && m
        ? (0, r.jsx)(l.Z, {
              title: f.intl.string(f.t.c9BHLy),
              description: f.intl.string(f.t.dK8S09),
              buttonText: _ ? f.intl.string(f.t.f3pnLC) : f.intl.string(f.t.ch2xbm),
              buttonDisabled: _,
              buttonColor: a.Button.Colors.RED,
              onButtonPress: p
          })
        : null;
};

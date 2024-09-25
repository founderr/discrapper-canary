var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(904245),
    l = n(367907),
    u = n(138201),
    c = n(592125),
    d = n(496675),
    _ = n(981631),
    E = n(689938);
let f = (e) => {
    let { message: t, reportId: n } = e,
        [r, f] = a.useState(!1),
        h = a.useCallback(() => {
            f(!0), l.ZP.trackWithMetadata(_.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), s.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        p = a.useMemo(() => {
            let e = c.Z.getChannel(t.getChannelId());
            return null != e && e.type !== _.d4z.DM && e.type !== _.d4z.GROUP_DM && d.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [t]);
    return null != t && p
        ? (0, i.jsx)(u.Z, {
              title: E.Z.Messages.IAR_UPSELLS_DELETE_MESSAGE_TITLE,
              description: E.Z.Messages.IAR_UPSELLS_DELETE_MESSAGE_DESCRIPTION,
              buttonText: r ? E.Z.Messages.IAR_UPSELLS_DELETED_MESSAGE_BUTTON : E.Z.Messages.IAR_UPSELLS_DELETE_MESSAGE_BUTTON,
              buttonDisabled: r,
              buttonColor: o.Button.Colors.RED,
              onButtonPress: h
          })
        : null;
};
t.Z = f;

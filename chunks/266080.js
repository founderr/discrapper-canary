var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(367907),
    l = n(434404),
    u = n(138201),
    c = n(430824),
    d = n(981631),
    _ = n(689938);
let E = (e) => {
    let { guildId: t, reportId: n } = e,
        [r, E] = a.useState(!1),
        f = c.Z.getGuild(t),
        h = null != f;
    a.useEffect(() => {
        E(!h);
    }, [h]);
    let p = a.useCallback(() => {
        E(!0),
            s.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            l.Z.leaveGuild(t);
    }, [t, n]);
    if (null == f) return null;
    let m = () => {
        (0, o.openModal)((e) =>
            (0, i.jsx)(o.ConfirmModal, {
                header: _.Z.Messages.LEAVE_SERVER_TITLE.format({ name: f.name }),
                confirmText: _.Z.Messages.LEAVE_SERVER,
                cancelText: _.Z.Messages.CANCEL,
                onConfirm: p,
                ...e,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: _.Z.Messages.LEAVE_SERVER_BODY.format({ name: f.name })
                })
            })
        );
    };
    return (0, i.jsx)(u.Z, {
        title: _.Z.Messages.IAR_UPSELLS_LEAVE_SERVER_TITLE,
        description: _.Z.Messages.IAR_UPSELLS_LEAVE_SERVER_DESCRIPTION.format({ guildName: null == f ? void 0 : f.name }),
        buttonText: r ? _.Z.Messages.IAR_UPSELLS_LEFT_SERVER_BUTTON : _.Z.Messages.IAR_UPSELLS_LEAVE_SERVER_BUTTON,
        buttonDisabled: r,
        buttonColor: o.Button.Colors.RED,
        onButtonPress: m
    });
};
t.Z = E;

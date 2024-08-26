t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(442837),
    o = t(481060),
    r = t(595519),
    s = t(374065),
    c = t(542094),
    d = t(895924),
    u = t(496675),
    m = t(499254),
    p = t(827498),
    _ = t(890280),
    C = t(176412),
    f = t(231338),
    h = t(689938),
    E = t(872674);
function A(e) {
    let { channel: n, application: t, sectionName: A, commandName: N, buttonSize: x = o.ButtonSizes.MEDIUM } = e,
        v = a.useId(),
        I = a.useCallback(() => {
            m.y(p.ti.ACTIVITY);
        }, []),
        { submitting: g, wasSubmitting: P } = (0, _.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: v,
            onSubmissionComplete: I
        }),
        [L, b] = a.useState(!1),
        S = (0, c.Qv)({
            applicationId: t.id,
            channelId: n.id
        }),
        {
            onActivityItemSelected: R,
            buttonColor: T,
            buttonText: M
        } = (0, C.P7)({
            channel: n,
            application: t,
            location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: A,
            commandName: N,
            autoDismissOnClick: S === c.JS.LEAVE,
            launchingComponentId: v,
            submitting: null != P ? P : g
        }),
        y = (function (e) {
            let { channel: n, activityAction: t } = e,
                i = (0, l.e7)([u.Z], () => u.Z.can(f.Pl.USE_EMBEDDED_ACTIVITIES, n)),
                a = (0, s.KF)(n.id),
                o = !1;
            switch (t) {
                case c.JS.LEAVE:
                    o = !1;
                    break;
                case c.JS.START:
                    n.isGuildVoice() ? a !== s.jy.CAN_LAUNCH && (o = !0) : !(0, r.WS)(n) && (o = !0);
                    break;
                case c.JS.JOIN:
                    n.isGuildVoice() ? (o = !i) : !(0, r.WS)(n) && (o = !0);
            }
            return o;
        })({
            channel: n,
            activityAction: S
        });
    return (0, i.jsx)(o.Tooltip, {
        shouldShow: y,
        tooltipContentClassName: E.tooltipContent,
        text: h.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START,
        children: (e) => {
            let { onClick: n, ...a } = e;
            return (0, i.jsx)(o.Button, {
                ...a,
                type: 'submit',
                size: x,
                color: T,
                disabled: y,
                submitting: L,
                onClick: () => {
                    b(!0), R(), null == n || n();
                },
                'aria-label': h.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: M,
                    applicationName: t.name
                }),
                children: M
            });
        }
    });
}

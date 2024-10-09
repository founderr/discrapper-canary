t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(481060),
    o = t(542094),
    r = t(895924),
    s = t(626135),
    c = t(499254),
    d = t(827498),
    u = t(160973),
    m = t(783097),
    p = t(890280),
    _ = t(176412),
    C = t(981631),
    h = t(689938),
    f = t(94958);
function A(e) {
    let { channel: n, application: t, sectionName: A, primaryEntryPointCommand: E, buttonSize: N = l.ButtonSizes.MEDIUM } = e,
        v = a.useId(),
        x = a.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        { submitting: I, wasSubmitting: P } = (0, p.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: v,
            onSubmissionComplete: x
        }),
        [g, T] = a.useState(!1),
        L = (0, o.Qv)({
            applicationId: t.id,
            channelId: n.id
        }),
        b = a.useMemo(() => (0, m.XZ)(E.displayName), [E.displayName]),
        {
            onActivityItemSelected: S,
            buttonColor: R,
            buttonText: M
        } = (0, _.P7)({
            channel: n,
            application: t,
            location: r.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: A,
            commandName: b,
            autoDismissOnClick: L === o.JS.LEAVE,
            launchingComponentId: v,
            submitting: null != P ? P : I
        }),
        { disabled: j, reason: y } = (0, u.Z)({
            channelId: n.id,
            application: t,
            activityAction: L
        });
    return (0, i.jsx)(l.Tooltip, {
        shouldShow: null != y,
        tooltipContentClassName: f.tooltipContent,
        text: y,
        children: (e) => {
            let { onClick: n, ...a } = e;
            return (0, i.jsx)(l.Button, {
                ...a,
                type: 'submit',
                size: N,
                color: R,
                disabled: j,
                submitting: g,
                onClick: () => {
                    T(!0),
                        S(),
                        null == n || n(),
                        s.default.track(C.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                            application_id: t.id,
                            button_action: d._y.USE_APP_COMMAND
                        });
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

t.d(n, {
    Z: function () {
        return N;
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
    _ = t(783097),
    C = t(890280),
    h = t(176412),
    f = t(231338),
    A = t(689938),
    E = t(872674);
function N(e) {
    let { channel: n, application: t, sectionName: N, primaryEntryPointCommand: x, buttonSize: v = o.ButtonSizes.MEDIUM } = e,
        I = a.useId(),
        g = a.useCallback(() => {
            m.y(p.ti.ACTIVITY);
        }, []),
        { submitting: P, wasSubmitting: S } = (0, C.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: I,
            onSubmissionComplete: g
        }),
        [L, b] = a.useState(!1),
        R = (0, c.Qv)({
            applicationId: t.id,
            channelId: n.id
        }),
        T = a.useMemo(() => (0, _.XZ)(x.displayName), [x.displayName]),
        {
            onActivityItemSelected: M,
            buttonColor: y,
            buttonText: j
        } = (0, h.P7)({
            channel: n,
            application: t,
            location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: N,
            commandName: T,
            autoDismissOnClick: R === c.JS.LEAVE,
            launchingComponentId: I,
            submitting: null != S ? S : P
        }),
        Z = (function (e) {
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
            activityAction: R
        });
    return (0, i.jsx)(o.Tooltip, {
        shouldShow: Z,
        tooltipContentClassName: E.tooltipContent,
        text: A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START,
        children: (e) => {
            let { onClick: n, ...a } = e;
            return (0, i.jsx)(o.Button, {
                ...a,
                type: 'submit',
                size: v,
                color: y,
                disabled: Z,
                submitting: L,
                onClick: () => {
                    b(!0), M(), null == n || n();
                },
                'aria-label': A.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: j,
                    applicationName: t.name
                }),
                children: j
            });
        }
    });
}

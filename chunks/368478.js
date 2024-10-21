n.d(t, {
    J: function () {
        return E;
    },
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(789020);
var i = n(192379),
    s = n(442837),
    a = n(317381),
    l = n(122613),
    r = n(574952),
    o = n(100527),
    c = n(906732),
    u = n(783097),
    d = n(895924),
    h = n(812236),
    p = n(630388),
    m = n(981631),
    _ = n(689938);
function f(e) {
    let { channel: t, primaryEntryPointCommand: n, application: l } = e,
        [r, d] = i.useState(!1),
        f = (0, s.e7)([a.ZP], () => a.ZP.getCurrentEmbeddedActivity()),
        E = i.useMemo(() => (null != n ? (0, u.XZ)(n.displayName) : _.Z.Messages.OPEN), [n]),
        g = void 0 !== l.flags && (0, p.yE)(l.flags, m.udG.EMBEDDED),
        C = null != f && f.applicationId === l.id && f.channelId === t.id,
        { analyticsLocations: I } = (0, c.ZP)(o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        T = null != t.recipients ? t.recipients[0] : void 0,
        x = (0, h.ms)({
            channel: t,
            applicationId: l.id,
            botUserId: T
        });
    return {
        isExecutingLaunchInteraction: r,
        buttonText: x && g ? (C ? _.Z.Messages.LEAVE : null != E ? E : _.Z.Messages.LAUNCH) : _.Z.Messages.OPEN,
        hasActiveMatchingEmbeddedActivity: C,
        isEmbeddedApp: g,
        currentEmbeddedActivity: f,
        channelRecipientUserId: T,
        setIsExecutingLaunchInteraction: d,
        analyticsLocations: I
    };
}
function E(e) {
    let { channel: t, application: n, isEmbeddedApp: s, hasActiveMatchingEmbeddedActivity: a, currentEmbeddedActivity: o, onOpenButtonPress: c, channelRecipientUserId: u, setIsExecutingLaunchInteraction: p, analyticsLocations: m } = e,
        _ = (0, h.ms)({
            channel: t,
            applicationId: n.id,
            botUserId: u
        }),
        f = i.useCallback(() => {
            a && null != o
                ? (0, r.Z)().leaveActivity({
                      channelId: t.id,
                      applicationId: o.applicationId
                  })
                : (p(!0),
                  (0, l.Z)({
                      targetApplicationId: n.id,
                      channelId: t.id,
                      analyticsLocations: m,
                      onExecutedCallback: () => {
                          p(!1);
                      },
                      commandOrigin: d.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [a, t.id, n.id, o, m, p]);
    return _ && s ? f : c;
}

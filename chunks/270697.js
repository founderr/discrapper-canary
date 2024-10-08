n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(789020);
var i = n(470079),
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
    let { channel: t, primaryEntryPointCommand: n, application: f, onOpenButtonPress: E } = e,
        [g, C] = i.useState(!1),
        I = (0, s.e7)([a.ZP], () => a.ZP.getCurrentEmbeddedActivity()),
        T = i.useMemo(() => (null != n ? (0, u.XZ)(n.displayName) : _.Z.Messages.OPEN), [n]),
        x = void 0 !== f.flags && (0, p.yE)(f.flags, m.udG.EMBEDDED),
        v = null != I && I.applicationId === f.id && I.channelId === t.id,
        { analyticsLocations: S } = (0, c.ZP)(o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        N = null != t.recipients ? t.recipients[0] : void 0,
        A =
            (0, h.ms)({
                channel: t,
                applicationId: f.id,
                botUserId: N
            }) && x,
        Z = i.useCallback(() => {
            v
                ? (0, r.Z)().leaveActivity({
                      channelId: t.id,
                      applicationId: I.applicationId
                  })
                : (C(!0),
                  (0, l.Z)({
                      targetApplicationId: f.id,
                      channelId: t.id,
                      analyticsLocations: S,
                      onExecutedCallback: () => {
                          C(!1);
                      },
                      commandOrigin: d.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [v, t.id, f.id, I, S]);
    return {
        onPress: A ? Z : E,
        isExecutingLaunchInteraction: g,
        buttonText: A ? (v ? _.Z.Messages.LEAVE : null != T ? T : _.Z.Messages.LAUNCH) : _.Z.Messages.OPEN,
        hasActiveMatchingEmbeddedActivity: v
    };
}

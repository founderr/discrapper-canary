n.d(t, {
    J: function () {
        return x;
    },
    Z: function () {
        return C;
    }
}),
    n(47120),
    n(789020);
var i = n(192379),
    l = n(442837),
    r = n(317381),
    a = n(122613),
    s = n(16609),
    o = n(574952),
    c = n(100527),
    d = n(906732),
    u = n(783097),
    h = n(895924),
    p = n(812236),
    m = n(630388),
    f = n(981631),
    g = n(388032);
function C(e) {
    let { channel: t, primaryEntryPointCommand: n, application: a, showAppLauncherPopup: o = !1 } = e,
        [h, C] = i.useState(!1),
        x = (0, l.e7)([r.ZP], () => r.ZP.getCurrentEmbeddedActivity()),
        v = o ? g.t.cpT0Cg : g.t['0hKkS0'],
        _ = i.useMemo(() => (null != n ? (0, u.XZ)(n.displayName) : g.intl.string(g.t['3xjX0d'])), [n]),
        I = void 0 !== a.flags && (0, m.yE)(a.flags, f.udG.EMBEDDED),
        E = null != x && x.applicationId === a.id && (0, s.p)(x.location) === t.id,
        { analyticsLocations: b } = (0, d.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        Z = null != t.recipients ? t.recipients[0] : void 0,
        S = (0, p.ms)({
            channel: t,
            applicationId: a.id,
            botUserId: Z
        });
    return {
        isExecutingLaunchInteraction: h,
        buttonText: S && I ? (E ? g.intl.string(g.t['Hi1/aW']) : null != _ ? _ : g.intl.string(g.t.zKX8Nj)) : g.intl.string(v),
        hasActiveMatchingEmbeddedActivity: E,
        isEmbeddedApp: I,
        currentEmbeddedActivity: x,
        channelRecipientUserId: Z,
        setIsExecutingLaunchInteraction: C,
        analyticsLocations: b
    };
}
function x(e) {
    let { channel: t, application: n, isEmbeddedApp: l, hasActiveMatchingEmbeddedActivity: r, currentEmbeddedActivity: s, onOpenButtonPress: c, channelRecipientUserId: d, setIsExecutingLaunchInteraction: u, analyticsLocations: m } = e,
        f = (0, p.ms)({
            channel: t,
            applicationId: n.id,
            botUserId: d
        }),
        g = i.useCallback(() => {
            r && null != s
                ? (0, o.Z)().leaveActivity({
                      location: s.location,
                      applicationId: s.applicationId
                  })
                : (u(!0),
                  (0, a.Z)({
                      targetApplicationId: n.id,
                      channelId: t.id,
                      analyticsLocations: m,
                      onExecutedCallback: () => {
                          u(!1);
                      },
                      commandOrigin: h.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [r, t.id, n.id, s, m, u]);
    return f && l ? g : c;
}

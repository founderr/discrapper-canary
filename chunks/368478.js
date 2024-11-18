n.d(t, {
    J: function () {
        return C;
    },
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(789020);
var i = n(192379),
    l = n(442837),
    r = n(317381),
    a = n(122613),
    s = n(574952),
    o = n(100527),
    c = n(906732),
    d = n(783097),
    u = n(895924),
    h = n(812236),
    p = n(630388),
    m = n(981631),
    f = n(388032);
function g(e) {
    let { channel: t, primaryEntryPointCommand: n, application: a, showAppLauncherPopup: s = !1 } = e,
        [u, g] = i.useState(!1),
        C = (0, l.e7)([r.ZP], () => r.ZP.getCurrentEmbeddedActivity()),
        x = s ? f.t.cpT0Cg : f.t['0hKkS0'],
        _ = i.useMemo(() => (null != n ? (0, d.XZ)(n.displayName) : f.intl.string(f.t['3xjX0d'])), [n]),
        v = void 0 !== a.flags && (0, p.yE)(a.flags, m.udG.EMBEDDED),
        I = null != C && C.applicationId === a.id && C.channelId === t.id,
        { analyticsLocations: E } = (0, c.ZP)(o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        b = null != t.recipients ? t.recipients[0] : void 0,
        Z = (0, h.ms)({
            channel: t,
            applicationId: a.id,
            botUserId: b
        });
    return {
        isExecutingLaunchInteraction: u,
        buttonText: Z && v ? (I ? f.intl.string(f.t['Hi1/aW']) : null != _ ? _ : f.intl.string(f.t.zKX8Nj)) : f.intl.string(x),
        hasActiveMatchingEmbeddedActivity: I,
        isEmbeddedApp: v,
        currentEmbeddedActivity: C,
        channelRecipientUserId: b,
        setIsExecutingLaunchInteraction: g,
        analyticsLocations: E
    };
}
function C(e) {
    let { channel: t, application: n, isEmbeddedApp: l, hasActiveMatchingEmbeddedActivity: r, currentEmbeddedActivity: o, onOpenButtonPress: c, channelRecipientUserId: d, setIsExecutingLaunchInteraction: p, analyticsLocations: m } = e,
        f = (0, h.ms)({
            channel: t,
            applicationId: n.id,
            botUserId: d
        }),
        g = i.useCallback(() => {
            r && null != o
                ? (0, s.Z)().leaveActivity({
                      channelId: t.id,
                      applicationId: o.applicationId
                  })
                : (p(!0),
                  (0, a.Z)({
                      targetApplicationId: n.id,
                      channelId: t.id,
                      analyticsLocations: m,
                      onExecutedCallback: () => {
                          p(!1);
                      },
                      commandOrigin: u.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [r, t.id, n.id, o, m, p]);
    return f && l ? g : c;
}

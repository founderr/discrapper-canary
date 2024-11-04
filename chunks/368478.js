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
    s = n(122613),
    a = n(574952),
    o = n(100527),
    c = n(906732),
    u = n(783097),
    d = n(895924),
    h = n(812236),
    m = n(630388),
    p = n(981631),
    f = n(388032);
function g(e) {
    let { channel: t, primaryEntryPointCommand: n, application: s } = e,
        [a, d] = i.useState(!1),
        g = (0, l.e7)([r.ZP], () => r.ZP.getCurrentEmbeddedActivity()),
        C = i.useMemo(() => (null != n ? (0, u.XZ)(n.displayName) : f.intl.string(f.t['3xjX0d'])), [n]),
        x = void 0 !== s.flags && (0, m.yE)(s.flags, p.udG.EMBEDDED),
        v = null != g && g.applicationId === s.id && g.channelId === t.id,
        { analyticsLocations: _ } = (0, c.ZP)(o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        I = null != t.recipients ? t.recipients[0] : void 0,
        E = (0, h.ms)({
            channel: t,
            applicationId: s.id,
            botUserId: I
        });
    return {
        isExecutingLaunchInteraction: a,
        buttonText: E && x ? (v ? f.intl.string(f.t['Hi1/aW']) : null != C ? C : f.intl.string(f.t.zKX8Nj)) : f.intl.string(f.t['3xjX0d']),
        hasActiveMatchingEmbeddedActivity: v,
        isEmbeddedApp: x,
        currentEmbeddedActivity: g,
        channelRecipientUserId: I,
        setIsExecutingLaunchInteraction: d,
        analyticsLocations: _
    };
}
function C(e) {
    let { channel: t, application: n, isEmbeddedApp: l, hasActiveMatchingEmbeddedActivity: r, currentEmbeddedActivity: o, onOpenButtonPress: c, channelRecipientUserId: u, setIsExecutingLaunchInteraction: m, analyticsLocations: p } = e,
        f = (0, h.ms)({
            channel: t,
            applicationId: n.id,
            botUserId: u
        }),
        g = i.useCallback(() => {
            r && null != o
                ? (0, a.Z)().leaveActivity({
                      channelId: t.id,
                      applicationId: o.applicationId
                  })
                : (m(!0),
                  (0, s.Z)({
                      targetApplicationId: n.id,
                      channelId: t.id,
                      analyticsLocations: p,
                      onExecutedCallback: () => {
                          m(!1);
                      },
                      commandOrigin: d.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [r, t.id, n.id, o, p, m]);
    return f && l ? g : c;
}

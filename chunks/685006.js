n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(100527),
    a = n(367907),
    o = n(450936),
    c = n(368478),
    u = n(499254),
    d = n(827498),
    h = n(541716),
    m = n(61356),
    p = n(981631),
    f = n(589858);
function g(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: r } = e,
        { isInitialLoading: c, application: m, primaryEntryPointCommand: f } = (0, o.Z)({ channel: t }),
        g = null == m ? void 0 : m.id,
        x = l.useCallback(() => {
            u.__(d._b.TEXT, h.I.NORMAL, { applicationId: g }),
                (0, a.yw)(p.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: g,
                    location: s.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                    source: d._b.TEXT
                });
        }, [g]);
    return c || null == m
        ? null
        : (0, i.jsx)(C, {
              channel: t,
              application: m,
              primaryEntryPointCommand: f,
              onOpenButtonPress: x,
              entryPointCommandButtonRef: n,
              type: r
          });
}
function C(e) {
    let { channel: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: s, entryPointCommandButtonRef: a, type: o } = e,
        {
            isExecutingLaunchInteraction: u,
            buttonText: d,
            hasActiveMatchingEmbeddedActivity: h,
            isEmbeddedApp: p,
            currentEmbeddedActivity: g,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: v
        } = (0, c.Z)({
            channel: t,
            primaryEntryPointCommand: l,
            application: n
        }),
        _ = (0, c.J)({
            channel: t,
            application: n,
            isEmbeddedApp: p,
            hasActiveMatchingEmbeddedActivity: h,
            currentEmbeddedActivity: g,
            onOpenButtonPress: s,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: v
        }),
        I = h ? r.Button.Colors.RED : r.Button.Colors.BRAND,
        E = (0, m.Z)({ type: o });
    return (0, i.jsx)(r.Button, {
        className: f.entryPointAppCommandButton,
        size: r.Button.Sizes.LARGE,
        color: I,
        submitting: u,
        onClick: _,
        buttonRef: a,
        disabled: E,
        children: d
    });
}

n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(100527),
    s = n(367907),
    o = n(450936),
    c = n(368478),
    d = n(499254),
    u = n(827498),
    h = n(541716),
    p = n(61356),
    m = n(981631),
    f = n(902265);
function g(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: r } = e,
        { isInitialLoading: c, application: p, primaryEntryPointCommand: f } = (0, o.Z)({ channel: t }),
        g = null == p ? void 0 : p.id,
        x = l.useCallback(() => {
            d.__(u._b.TEXT, h.I.NORMAL, { applicationId: g }),
                (0, s.yw)(m.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: g,
                    location: a.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                    source: u._b.TEXT
                });
        }, [g]);
    return c || null == p
        ? null
        : (0, i.jsx)(C, {
              channel: t,
              application: p,
              primaryEntryPointCommand: f,
              onOpenButtonPress: x,
              entryPointCommandButtonRef: n,
              type: r
          });
}
function C(e) {
    let { channel: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: a, entryPointCommandButtonRef: s, type: o } = e,
        {
            isExecutingLaunchInteraction: d,
            buttonText: u,
            hasActiveMatchingEmbeddedActivity: h,
            isEmbeddedApp: m,
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
            isEmbeddedApp: m,
            hasActiveMatchingEmbeddedActivity: h,
            currentEmbeddedActivity: g,
            onOpenButtonPress: a,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: v
        }),
        I = h ? r.Button.Colors.RED : r.Button.Colors.BRAND,
        E = (0, p.Z)({ type: o });
    return (0, i.jsx)(r.Button, {
        className: f.entryPointAppCommandButton,
        size: r.Button.Sizes.LARGE,
        color: I,
        submitting: d,
        onClick: _,
        buttonRef: s,
        disabled: E,
        children: u
    });
}

n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(100527),
    r = n(367907),
    o = n(450936),
    c = n(368478),
    u = n(499254),
    d = n(827498),
    h = n(541716),
    p = n(61356),
    m = n(981631),
    _ = n(589858);
function f(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: a } = e,
        { isInitialLoading: c, application: p, primaryEntryPointCommand: _ } = (0, o.Z)({ channel: t }),
        f = null == p ? void 0 : p.id,
        g = s.useCallback(() => {
            u.__(d._b.TEXT, h.I.NORMAL, { applicationId: f }),
                (0, r.yw)(m.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: f,
                    location: l.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                    source: d._b.TEXT
                });
        }, [f]);
    return c || null == p
        ? null
        : (0, i.jsx)(E, {
              channel: t,
              application: p,
              primaryEntryPointCommand: _,
              onOpenButtonPress: g,
              entryPointCommandButtonRef: n,
              type: a
          });
}
function E(e) {
    let { channel: t, application: n, primaryEntryPointCommand: s, onOpenButtonPress: l, entryPointCommandButtonRef: r, type: o } = e,
        {
            isExecutingLaunchInteraction: u,
            buttonText: d,
            hasActiveMatchingEmbeddedActivity: h,
            isEmbeddedApp: m,
            currentEmbeddedActivity: f,
            channelRecipientUserId: E,
            setIsExecutingLaunchInteraction: g,
            analyticsLocations: C
        } = (0, c.Z)({
            channel: t,
            primaryEntryPointCommand: s,
            application: n
        }),
        I = (0, c.J)({
            channel: t,
            application: n,
            isEmbeddedApp: m,
            hasActiveMatchingEmbeddedActivity: h,
            currentEmbeddedActivity: f,
            onOpenButtonPress: l,
            channelRecipientUserId: E,
            setIsExecutingLaunchInteraction: g,
            analyticsLocations: C
        }),
        T = h ? a.Button.Colors.RED : a.Button.Colors.BRAND,
        x = (0, p.Z)({ type: o });
    return (0, i.jsx)(a.Button, {
        className: _.entryPointAppCommandButton,
        size: a.Button.Sizes.LARGE,
        color: T,
        submitting: u,
        onClick: I,
        buttonRef: r,
        disabled: x,
        children: d
    });
}

n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(481060),
    l = n(450936),
    r = n(368478),
    o = n(499254),
    c = n(827498),
    u = n(541716),
    d = n(61356),
    h = n(589858);
function p(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: a } = e,
        { isInitialLoading: r, application: d, primaryEntryPointCommand: h } = (0, l.Z)({ channel: t }),
        p = null == d ? void 0 : d.id,
        _ = s.useCallback(() => {
            o.__(c._b.TEXT, u.I.NORMAL, { applicationId: p });
        }, [p]);
    return r || null == d
        ? null
        : (0, i.jsx)(m, {
              channel: t,
              application: d,
              primaryEntryPointCommand: h,
              onOpenButtonPress: _,
              entryPointCommandButtonRef: n,
              type: a
          });
}
function m(e) {
    let { channel: t, application: n, primaryEntryPointCommand: s, onOpenButtonPress: l, entryPointCommandButtonRef: o, type: c } = e,
        {
            isExecutingLaunchInteraction: u,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: m,
            isEmbeddedApp: _,
            currentEmbeddedActivity: f,
            channelRecipientUserId: E,
            setIsExecutingLaunchInteraction: g,
            analyticsLocations: C
        } = (0, r.Z)({
            channel: t,
            primaryEntryPointCommand: s,
            application: n
        }),
        I = (0, r.J)({
            channel: t,
            application: n,
            isEmbeddedApp: _,
            hasActiveMatchingEmbeddedActivity: m,
            currentEmbeddedActivity: f,
            onOpenButtonPress: l,
            channelRecipientUserId: E,
            setIsExecutingLaunchInteraction: g,
            analyticsLocations: C
        }),
        T = m ? a.Button.Colors.RED : a.Button.Colors.BRAND,
        x = (0, d.Z)({ type: c });
    return (0, i.jsx)(a.Button, {
        className: h.entryPointAppCommandButton,
        size: a.Button.Sizes.LARGE,
        color: T,
        submitting: u,
        onClick: I,
        buttonRef: o,
        disabled: x,
        children: p
    });
}

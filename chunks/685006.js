n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(911969),
    c = n(100527),
    d = n(367907),
    u = n(450936),
    h = n(368478),
    p = n(499254),
    m = n(827498),
    f = n(213459),
    g = n(541716),
    C = n(61356),
    x = n(981631),
    v = n(314734),
    _ = n(700559);
function I(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: r } = e,
        { isInitialLoading: a, application: s, primaryEntryPointCommand: h } = (0, u.Z)({ channel: t }),
        v = null == s ? void 0 : s.id,
        _ = (0, C.Z)({ type: r }),
        { sectionCommands: I } = (0, f.If)(t, null != v ? v : ''),
        b = l.useCallback(() => {
            _
                ? p.yT(m.ti.DISMISSED)
                : (p.__(m._b.TEXT, g.Ie.NORMAL, { applicationId: v }),
                  (0, d.yw)(x.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: v,
                      location: c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: m._b.TEXT
                  }));
        }, [v, _]),
        Z = null != I && I.filter((e) => e.type === o.yU.CHAT || e.type === o.yU.PRIMARY_ENTRY_POINT).length > 0;
    return a || null == s || !1 === Z
        ? null
        : (0, i.jsx)(E, {
              channel: t,
              application: s,
              primaryEntryPointCommand: h,
              onOpenButtonPress: b,
              entryPointCommandButtonRef: n,
              type: r
          });
}
function E(e) {
    let { channel: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: r, entryPointCommandButtonRef: o, type: c } = e,
        d = (0, C.Z)({ type: c }),
        {
            isExecutingLaunchInteraction: u,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: m,
            isEmbeddedApp: f,
            currentEmbeddedActivity: g,
            channelRecipientUserId: x,
            setIsExecutingLaunchInteraction: I,
            analyticsLocations: E
        } = (0, h.Z)({
            channel: t,
            primaryEntryPointCommand: l,
            application: n,
            showAppLauncherPopup: d
        }),
        b = (0, h.J)({
            channel: t,
            application: n,
            isEmbeddedApp: f,
            hasActiveMatchingEmbeddedActivity: m,
            currentEmbeddedActivity: g,
            onOpenButtonPress: r,
            channelRecipientUserId: x,
            setIsExecutingLaunchInteraction: I,
            analyticsLocations: E
        }),
        Z = m ? s.Button.Colors.RED : s.Button.Colors.BRAND;
    return (0, i.jsx)(s.Button, {
        className: a()(_.entryPointAppCommandButton, v.Id),
        size: s.Button.Sizes.LARGE,
        color: Z,
        submitting: u,
        onClick: b,
        buttonRef: o,
        children: p
    });
}

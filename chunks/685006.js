n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(100527),
    c = n(367907),
    d = n(450936),
    u = n(368478),
    h = n(499254),
    p = n(827498),
    m = n(541716),
    f = n(61356),
    g = n(981631),
    C = n(314734),
    x = n(902265);
function v(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: a } = e,
        { isInitialLoading: r, application: s, primaryEntryPointCommand: u } = (0, d.Z)({ channel: t }),
        C = null == s ? void 0 : s.id,
        x = (0, f.Z)({ type: a }),
        v = l.useCallback(() => {
            x
                ? h.yT(p.ti.DISMISSED)
                : (h.__(p._b.TEXT, m.I.NORMAL, { applicationId: C }),
                  (0, c.yw)(g.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: C,
                      location: o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: p._b.TEXT
                  }));
        }, [C, x]);
    return r || null == s
        ? null
        : (0, i.jsx)(_, {
              channel: t,
              application: s,
              primaryEntryPointCommand: u,
              onOpenButtonPress: v,
              entryPointCommandButtonRef: n,
              type: a
          });
}
function _(e) {
    let { channel: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: a, entryPointCommandButtonRef: o, type: c } = e,
        d = (0, f.Z)({ type: c }),
        {
            isExecutingLaunchInteraction: h,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: m,
            isEmbeddedApp: g,
            currentEmbeddedActivity: v,
            channelRecipientUserId: _,
            setIsExecutingLaunchInteraction: I,
            analyticsLocations: E
        } = (0, u.Z)({
            channel: t,
            primaryEntryPointCommand: l,
            application: n,
            showAppLauncherPopup: d
        }),
        b = (0, u.J)({
            channel: t,
            application: n,
            isEmbeddedApp: g,
            hasActiveMatchingEmbeddedActivity: m,
            currentEmbeddedActivity: v,
            onOpenButtonPress: a,
            channelRecipientUserId: _,
            setIsExecutingLaunchInteraction: I,
            analyticsLocations: E
        }),
        Z = m ? s.Button.Colors.RED : s.Button.Colors.BRAND;
    return (0, i.jsx)(s.Button, {
        className: r()(x.entryPointAppCommandButton, C.Id),
        size: s.Button.Sizes.LARGE,
        color: Z,
        submitting: h,
        onClick: b,
        buttonRef: o,
        children: p
    });
}

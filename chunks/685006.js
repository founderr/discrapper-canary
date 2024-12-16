n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(100527),
    c = n(367907),
    d = n(450936),
    u = n(368478),
    h = n(499254),
    p = n(827498),
    m = n(213459),
    f = n(541716),
    g = n(61356),
    C = n(981631),
    x = n(314734),
    v = n(700559);
function _(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: r } = e,
        { isInitialLoading: a, application: s, primaryEntryPointCommand: u } = (0, d.Z)({ channel: t }),
        x = null == s ? void 0 : s.id,
        v = (0, g.Z)({ type: r }),
        { sectionCommands: _ } = (0, m.If)(t, null != x ? x : ''),
        E = l.useCallback(() => {
            v
                ? h.yT(p.ti.DISMISSED)
                : (h.__(p._b.TEXT, f.Ie.NORMAL, { applicationId: x }),
                  (0, c.yw)(C.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: x,
                      location: o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: p._b.TEXT
                  }));
        }, [x, v]);
    return a || null == s || null == _ || 0 === _.length
        ? null
        : (0, i.jsx)(I, {
              channel: t,
              application: s,
              primaryEntryPointCommand: u,
              onOpenButtonPress: E,
              entryPointCommandButtonRef: n,
              type: r
          });
}
function I(e) {
    let { channel: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: r, entryPointCommandButtonRef: o, type: c } = e,
        d = (0, g.Z)({ type: c }),
        {
            isExecutingLaunchInteraction: h,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: m,
            isEmbeddedApp: f,
            currentEmbeddedActivity: C,
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
            isEmbeddedApp: f,
            hasActiveMatchingEmbeddedActivity: m,
            currentEmbeddedActivity: C,
            onOpenButtonPress: r,
            channelRecipientUserId: _,
            setIsExecutingLaunchInteraction: I,
            analyticsLocations: E
        }),
        Z = m ? s.Button.Colors.RED : s.Button.Colors.BRAND;
    return (0, i.jsx)(s.Button, {
        className: a()(v.entryPointAppCommandButton, x.Id),
        size: s.Button.Sizes.LARGE,
        color: Z,
        submitting: h,
        onClick: b,
        buttonRef: o,
        children: p
    });
}

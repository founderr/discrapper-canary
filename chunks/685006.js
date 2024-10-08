n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(481060),
    l = n(949075),
    r = n(270697),
    o = n(499254),
    c = n(827498),
    u = n(541716),
    d = n(589858);
function h(e) {
    let { channel: t } = e,
        { isInitialLoading: n, application: a, primaryEntryPointCommand: r } = (0, l.Z)({ channel: t }),
        d = null == a ? void 0 : a.id,
        h = s.useCallback(() => {
            o.__(c._b.TEXT, u.I.NORMAL, { applicationId: d });
        }, [d]);
    return n || null == a
        ? null
        : (0, i.jsx)(p, {
              channel: t,
              application: a,
              primaryEntryPointCommand: r,
              onOpenButtonPress: h
          });
}
function p(e) {
    let { channel: t, application: n, primaryEntryPointCommand: s, onOpenButtonPress: l } = e,
        {
            onPress: o,
            isExecutingLaunchInteraction: c,
            buttonText: u,
            hasActiveMatchingEmbeddedActivity: h
        } = (0, r.Z)({
            channel: t,
            primaryEntryPointCommand: s,
            application: n,
            onOpenButtonPress: l
        }),
        p = h ? a.Button.Colors.RED : a.Button.Colors.BRAND;
    return (0, i.jsx)(a.Button, {
        className: d.entryPointAppCommandButton,
        size: a.Button.Sizes.LARGE,
        color: p,
        submitting: c,
        onClick: o,
        children: u
    });
}

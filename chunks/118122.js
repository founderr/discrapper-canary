n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(906732),
    c = n(560067),
    u = n(451603),
    d = n(885714),
    h = n(155409),
    p = n(430824),
    m = n(594174),
    f = n(40153),
    g = n(603592),
    C = n(981631),
    _ = n(675999),
    v = n(388032),
    x = n(940722);
let I = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};
function b(e) {
    (0, o.jW)(e, async () => {
        let { default: e } = await n.e('9606').then(n.bind(n, 987578));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function E(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        o = (0, r.e7)([p.Z], () => p.Z.getGuilds()),
        E = l.useMemo(() => Object.values(o), [o]),
        S = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        Z = l.useMemo(() => E.some((e) => e.isOwner(S)), [E, S]),
        N = (0, a.useModalsStore)((e) => (0, a.hasModalOpenSelector)(e, _.PU)),
        { analyticsLocations: y } = (0, s.ZP)(),
        T = (0, a.useRedesignIconContext)().enabled,
        A = (0, i.jsx)(g.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, u.yU)()
                    ? (0, d.Z)({
                          analyticsSource: { page: C.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: C.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: C.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: y
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: N,
            onContextMenu: b,
            tooltip: v.intl.string(v.t.l5WIbW),
            icon: T ? a.PlusMediumIcon : a.PlusSmallIcon
        });
    return t
        ? A
        : (0, i.jsx)('div', {
              className: x.tutorialContainer,
              children: (0, i.jsxs)(h.Z, {
                  tutorialId: Z ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: I,
                  position: 'right',
                  children: [
                      A,
                      null != n &&
                          (0, i.jsx)(f.ZP, {
                              name: v.intl.string(v.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}

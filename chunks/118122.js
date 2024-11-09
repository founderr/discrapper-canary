n.d(t, {
    Z: function () {
        return S;
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
    f = n(594174),
    m = n(40153),
    g = n(603592),
    C = n(981631),
    _ = n(675999),
    v = n(388032),
    x = n(355355);
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
function S(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        o = (0, r.e7)([p.Z], () => p.Z.getGuilds()),
        S = l.useMemo(() => Object.values(o), [o]),
        Z = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        N = l.useMemo(() => S.some((e) => e.isOwner(Z)), [S, Z]),
        E = (0, a.useModalsStore)((e) => (0, a.hasModalOpenSelector)(e, _.PU)),
        { analyticsLocations: y } = (0, s.ZP)(),
        j = (0, a.useRedesignIconContext)().enabled,
        T = (0, i.jsx)(g.Z, {
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
            selected: E,
            onContextMenu: b,
            tooltip: v.intl.string(v.t.l5WIbW),
            icon: j ? a.PlusMediumIcon : a.PlusSmallIcon
        });
    return t
        ? T
        : (0, i.jsx)('div', {
              className: x.tutorialContainer,
              children: (0, i.jsxs)(h.Z, {
                  tutorialId: N ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: I,
                  position: 'right',
                  children: [
                      T,
                      null != n &&
                          (0, i.jsx)(m.ZP, {
                              name: v.intl.string(v.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}

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
    u = n(540059),
    d = n(451603),
    h = n(885714),
    p = n(155409),
    m = n(430824),
    f = n(594174),
    g = n(40153),
    C = n(603592),
    _ = n(981631),
    v = n(675999),
    x = n(388032),
    I = n(940722);
let b = {
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
function S(e) {
    (0, o.jW)(e, async () => {
        let { default: e } = await n.e('9606').then(n.bind(n, 987578));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function E(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        o = (0, r.e7)([m.Z], () => m.Z.getGuilds()),
        E = l.useMemo(() => Object.values(o), [o]),
        Z = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        N = l.useMemo(() => E.some((e) => e.isOwner(Z)), [E, Z]),
        y = (0, a.useModalsStore)((e) => (0, a.hasModalOpenSelector)(e, v.PU)),
        { analyticsLocations: T } = (0, s.ZP)(),
        A = (0, u.Q)('CreateJoinGuildButton'),
        j = (0, i.jsx)(C.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, d.yU)()
                    ? (0, h.Z)({
                          analyticsSource: { page: _.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: _.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: _.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: T
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: y,
            onContextMenu: S,
            tooltip: x.intl.string(x.t.l5WIbW),
            icon: A ? a.CirclePlusIcon : a.PlusMediumIcon
        });
    return t
        ? j
        : (0, i.jsx)('div', {
              className: I.tutorialContainer,
              children: (0, i.jsxs)(p.Z, {
                  tutorialId: N ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: b,
                  position: 'right',
                  children: [
                      j,
                      null != n &&
                          (0, i.jsx)(g.ZP, {
                              name: x.intl.string(x.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}

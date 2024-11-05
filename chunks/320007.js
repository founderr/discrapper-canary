n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(665149),
    s = n(618158),
    c = n(819640),
    d = n(131951),
    u = n(924557),
    m = n(435064),
    h = n(779618),
    f = n(175470),
    p = n(203259),
    g = n(356659),
    _ = n(388032);
function C(e) {
    let { canShowReminder: t = !1, className: C } = e,
        E = (0, h.Z)(d.Z),
        { showClipsHeaderEntrypoint: I } = u.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: x,
            hasNewClips: v,
            lastClipsSession: N,
            remindersEnabled: T,
            hasAnyClipAnimations: S
        } = (0, l.cj)([m.Z], () => ({
            hasClips: m.Z.hasClips(),
            hasNewClips: m.Z.getNewClipIds().length > 0,
            lastClipsSession: m.Z.getLastClipsSession(),
            remindersEnabled: m.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: m.Z.hasAnyClipAnimations()
        })),
        b = null != N && N.newClipIds.length > 0,
        A = (0, f.n)((e) => e.clipsButtonRef),
        j = (0, f.n)((e) => e.setClipsButtonRef),
        Z = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: R, allowIdle: P } = (0, s.Y)('animation');
    function y() {
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('32304')]).then(n.bind(n, 542055));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: g.Qr }
        );
    }
    return (r.useEffect(() => (S ? R() : P(), () => P()), [S, R, P]), I && E && x)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != A &&
                      t &&
                      T &&
                      b &&
                      !(0, a.hasAnyModalOpen)() &&
                      !Z &&
                      (0, i.jsx)(p.Z, {
                          clipIconRef: A,
                          lastClipsSession: N,
                          onOpenClipsGallery: y
                      }),
                  (0, i.jsx)('div', {
                      ref: j,
                      children: (0, i.jsx)(o.JO, {
                          className: C,
                          icon: a.ClipsIcon,
                          showBadge: v,
                          tooltip: _.intl.string(_.t.MXaLEB),
                          onClick: y
                      })
                  })
              ]
          })
        : null;
}

n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    l = n(442837),
    s = n(481060),
    a = n(665149),
    o = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    h = n(435064),
    _ = n(779618),
    f = n(175470),
    E = n(203259),
    p = n(356659),
    m = n(689938);
function I(e) {
    let { canShowReminder: t = !1, className: I } = e,
        C = (0, _.Z)(u.Z),
        { showClipsHeaderEntrypoint: S } = d.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: g,
            hasNewClips: R,
            lastClipsSession: T,
            remindersEnabled: N,
            hasAnyClipAnimations: x
        } = (0, l.cj)([h.Z], () => ({
            hasClips: h.Z.hasClips(),
            hasNewClips: h.Z.getNewClipIds().length > 0,
            lastClipsSession: h.Z.getLastClipsSession(),
            remindersEnabled: h.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: h.Z.hasAnyClipAnimations()
        })),
        v = null != T && T.newClipIds.length > 0,
        L = (0, f.n)((e) => e.clipsButtonRef),
        b = (0, f.n)((e) => e.setClipsButtonRef),
        O = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: A, allowIdle: P } = (0, o.Y)('animation');
    function Z() {
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('32304')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, { ...t });
            },
            { modalKey: p.Qr }
        );
    }
    return (i.useEffect(() => (x ? A() : P(), () => P()), [x, A, P]), S && C && g)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != L &&
                      t &&
                      N &&
                      v &&
                      !(0, s.hasAnyModalOpen)() &&
                      !O &&
                      (0, r.jsx)(E.Z, {
                          clipIconRef: L,
                          lastClipsSession: T,
                          onOpenClipsGallery: Z
                      }),
                  (0, r.jsx)('div', {
                      ref: b,
                      children: (0, r.jsx)(a.JO, {
                          className: I,
                          icon: s.ClipsIcon,
                          showBadge: R,
                          tooltip: m.Z.Messages.CLIPS_GALLERY_TOOLTIP,
                          onClick: Z
                      })
                  })
              ]
          })
        : null;
}

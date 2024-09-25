n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    l = n(442837),
    s = n(481060),
    a = n(665149),
    o = n(618158),
    u = n(819640),
    c = n(131951),
    d = n(924557),
    h = n(435064),
    _ = n(779618),
    f = n(175470),
    E = n(203259),
    p = n(356659),
    m = n(689938);
function C(e) {
    let { canShowReminder: t = !1, className: C } = e,
        S = (0, _.Z)(c.Z),
        { showClipsHeaderEntrypoint: I } = d.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: g,
            hasNewClips: T,
            lastClipsSession: R,
            remindersEnabled: N,
            hasAnyClipAnimations: v
        } = (0, l.cj)([h.Z], () => ({
            hasClips: h.Z.hasClips(),
            hasNewClips: h.Z.getNewClipIds().length > 0,
            lastClipsSession: h.Z.getLastClipsSession(),
            remindersEnabled: h.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: h.Z.hasAnyClipAnimations()
        })),
        x = null != R && R.newClipIds.length > 0,
        A = (0, f.n)((e) => e.clipsButtonRef),
        L = (0, f.n)((e) => e.setClipsButtonRef),
        b = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        { preventIdle: O, allowIdle: Z } = (0, o.Y)('animation');
    function P() {
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('32304')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, { ...t });
            },
            { modalKey: p.Qr }
        );
    }
    return (i.useEffect(() => (v ? O() : Z(), () => Z()), [v, O, Z]), I && S && g)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != A &&
                      t &&
                      N &&
                      x &&
                      !(0, s.hasAnyModalOpen)() &&
                      !b &&
                      (0, r.jsx)(E.Z, {
                          clipIconRef: A,
                          lastClipsSession: R,
                          onOpenClipsGallery: P
                      }),
                  (0, r.jsx)('div', {
                      ref: L,
                      children: (0, r.jsx)(a.JO, {
                          className: C,
                          icon: s.ClipsIcon,
                          showBadge: T,
                          tooltip: m.Z.Messages.CLIPS_GALLERY_TOOLTIP,
                          onClick: P
                      })
                  })
              ]
          })
        : null;
}

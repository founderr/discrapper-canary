n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(665149),
    o = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    _ = n(435064),
    E = n(779618),
    I = n(175470),
    m = n(203259),
    T = n(356659),
    f = n(689938);
function h(e) {
    let { canShowReminder: t = !1, className: h } = e,
        N = (0, E.Z)(u.Z),
        { showClipsHeaderEntrypoint: p } = d.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: C,
            hasNewClips: g,
            lastClipsSession: S,
            remindersEnabled: A,
            hasAnyClipAnimations: x
        } = (0, s.cj)([_.Z], () => ({
            hasClips: _.Z.hasClips(),
            hasNewClips: _.Z.getNewClipIds().length > 0,
            lastClipsSession: _.Z.getLastClipsSession(),
            remindersEnabled: _.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: _.Z.hasAnyClipAnimations()
        })),
        R = null != S && S.newClipIds.length > 0,
        v = (0, I.n)((e) => e.clipsButtonRef),
        O = (0, I.n)((e) => e.setClipsButtonRef),
        M = (0, s.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: L, allowIdle: Z } = (0, o.Y)('animation');
    function b() {
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('32304')]).then(n.bind(n, 542055));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: T.Qr }
        );
    }
    return (a.useEffect(() => (x ? L() : Z(), () => Z()), [x, L, Z]), p && N && C)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != v &&
                      t &&
                      A &&
                      R &&
                      !(0, r.hasAnyModalOpen)() &&
                      !M &&
                      (0, i.jsx)(m.Z, {
                          clipIconRef: v,
                          lastClipsSession: S,
                          onOpenClipsGallery: b
                      }),
                  (0, i.jsx)('div', {
                      ref: O,
                      children: (0, i.jsx)(l.JO, {
                          className: h,
                          icon: r.ClipsIcon,
                          showBadge: g,
                          tooltip: f.Z.Messages.CLIPS_GALLERY_TOOLTIP,
                          onClick: b
                      })
                  })
              ]
          })
        : null;
}

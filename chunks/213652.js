n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(481060),
    r = n(435064),
    o = n(39604),
    c = n(441167),
    u = n(871499),
    d = n(199902),
    h = n(314897),
    p = n(358221),
    m = n(354459),
    _ = n(689938),
    f = n(285403);
function E(e) {
    let { channel: t } = e,
        n = (0, a.e7)([p.Z], () => p.Z.getSelectedParticipant(t.id)),
        E = (null == n ? void 0 : n.type) === m.fO.STREAM,
        g = (0, a.e7)([d.Z], () => (E ? d.Z.getActiveStreamForStreamKey(n.id) : null)),
        { ignoreSenderPreference: C } = c.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
        { viewerClippingAllowed: I, isAtMaxSavingClipOperations: T } = (0, a.cj)([r.Z], () => ({
            viewerClippingAllowed: null != g && (r.Z.isViewerClippingAllowedForUser(g.ownerId) || C),
            isAtMaxSavingClipOperations: r.Z.getIsAtMaxSaveClipOperations()
        })),
        x = r.Z.getSettings().clipsEnabled,
        S = (null == g ? void 0 : g.ownerId) === h.default.getId(),
        v = !x || !(S || I) || T || null == n,
        N = s.useCallback(
            (e) =>
                (0, i.jsx)(l.CameraIcon, {
                    ...e,
                    color: 'currentColor'
                }),
            []
        );
    return (0, i.jsx)(u.Z, {
        className: f.actionBarButton,
        onClick: () => {
            !v && (S ? (0, o.C1)() : (0, o.C1)(n.id));
        },
        disabled: v,
        iconComponent: N,
        label: null == g ? _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : S || I ? (x ? (T ? void 0 : _.Z.Messages.CLIPS_SAVE) : _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_ENABLE_CLIPS_TOOLTIP) : _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP,
        grow: !1
    });
}

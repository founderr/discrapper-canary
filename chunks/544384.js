n.d(t, {
    E: function () {
        return y;
    },
    Z: function () {
        return A;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(872810),
    u = n(410575),
    c = n(358221),
    d = n(418469),
    f = n(776031),
    _ = n(803647),
    h = n(361291),
    p = n(199902),
    m = n(131951),
    g = n(594174),
    E = n(5192),
    v = n(358085),
    I = n(521147),
    S = n(981631),
    b = n(65154),
    T = n(388032);
function y(e, t, n) {
    let r = (0, a.e7)([c.Z], () => c.Z.getSelectedParticipantId(e.id)),
        i = (0, a.e7)([p.Z], () => (null != r ? p.Z.getActiveStreamForStreamKey(r) : null), [r]);
    return (0, a.Wu)(
        [g.default],
        () => {
            let r = n
                .filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
                .map((t) => ({
                    stream: t,
                    username: E.ZP.getName(e.getGuildId(), e.id, g.default.getUser(t.ownerId))
                }));
            return 1 === r.length && r[0].stream.ownerId === (null == i ? void 0 : i.ownerId) ? [] : r;
        },
        [e, i, n, t]
    );
}
function A(e) {
    var t, n, c;
    let { channel: p, currentUser: g, activeStreams: E, hideSelfOptions: A = !1, showReportOption: N = !1, handleGoLive: C, onClose: R, onSelect: O, appContext: D = S.IlC.APP } = e,
        L = (0, a.e7)([m.Z], () => m.Z.getGoLiveSource()),
        x = (0, a.e7)([h.Z], () => h.Z.getState().soundshareEnabled),
        w = m.Z.supports(b.AN.DESKTOP_CAPTURE_APPLICATIONS),
        M = null !== (c = E.find((e) => e.ownerId === (null == g ? void 0 : g.id))) && void 0 !== c ? c : null,
        P = y(p, g, E),
        k = (0, f.Z)(M, D),
        U = (0, d.Z)(M, D, S.VqG),
        G = (0, a.e7)([m.Z], () => m.Z.supports(b.AN.SOUNDSHARE)),
        B = (0, a.e7)([m.Z], () => m.Z.supportsScreenSoundshare()),
        Z = (null == L ? void 0 : L.desktopSource) != null,
        F = null == L ? void 0 : null === (n = L.desktopSource) || void 0 === n ? void 0 : null === (t = n.id) || void 0 === t ? void 0 : t.startsWith('screen'),
        V = I.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !(Z && G && (!F || B)),
                autoTrackExposure: !0
            }
        ).enabled,
        H = i.useCallback(() => {
            var e, t, n;
            (null === (n = m.Z.getGoLiveSource()) || void 0 === n ? void 0 : null === (t = n.desktopSource) || void 0 === t ? void 0 : null === (e = t.id) || void 0 === e ? void 0 : e.startsWith('prepicked:'))
                ? m.Z.getMediaEngine().eachConnection((e) => {
                      e.context === b.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : C();
        }, [C]),
        j = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: b.Yn.STREAM
                };
            if ((null == L ? void 0 : L.desktopSource) != null) {
                var i;
                r.desktopSettings = {
                    sourceId: null == L ? void 0 : null === (i = L.desktopSource) || void 0 === i ? void 0 : i.id,
                    sound: !x
                };
            }
            (0, l.Rc)({
                preset: e,
                resolution: t,
                frameRate: n,
                soundshareEnabled: !x
            }),
                o.Z.setGoLiveSource(r);
        }, [L, x]),
        Y =
            null == M
                ? (0, r.jsx)(s.MenuItem, {
                      id: 'share-your-screen',
                      label: T.intl.string(T.t.fjBNo6),
                      icon: s.ScreenArrowIcon,
                      action: C
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          v.isPlatformEmbedded
                              ? (0, r.jsx)(s.MenuItem, {
                                    id: 'stream-settings',
                                    label: T.intl.string(T.t.ytAD9f),
                                    children: k
                                })
                              : null,
                          N ? U : null,
                          V
                              ? (0, r.jsx)(s.MenuCheckboxItem, {
                                    id: 'stream-settings-audio-enable',
                                    label: T.intl.string(T.t.ZJEHt7),
                                    checked: x,
                                    action: j
                                })
                              : null,
                          w
                              ? (0, r.jsx)(s.MenuItem, {
                                    id: 'change-windows',
                                    label: T.intl.string(T.t.qntSam),
                                    icon: s.ScreenArrowIcon,
                                    action: H
                                })
                              : null,
                          (0, r.jsx)(s.MenuItem, {
                              id: 'stop-streaming',
                              label: T.intl.string(T.t.S5anIS),
                              icon: s.ScreenXIcon,
                              action: () => (0, _.Z)(M)
                          })
                      ]
                  });
    return (0, r.jsx)(u.Z, {
        section: S.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(s.Menu, {
            onSelect: O,
            navId: 'manage-streams',
            onClose: R,
            'aria-label': null != M ? T.intl.string(T.t.S5anIS) : T.intl.string(T.t.fjBNo6),
            children: [
                (0, r.jsx)(s.MenuGroup, {
                    children: P.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            s.MenuItem,
                            {
                                id: t.ownerId,
                                label: T.intl.formatToPlainString(T.t['7rkg+/'], { username: n }),
                                icon: s.ScreenXIcon,
                                action: () => (0, _.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                A ? null : Y
            ]
        })
    });
}

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
    p = n(361291),
    h = n(199902),
    m = n(131951),
    g = n(594174),
    E = n(5192),
    v = n(358085),
    b = n(521147),
    I = n(981631),
    T = n(65154),
    S = n(388032);
function y(e, t, n) {
    let r = (0, a.e7)([c.Z], () => c.Z.getSelectedParticipantId(e.id)),
        i = (0, a.e7)([h.Z], () => (null != r ? h.Z.getActiveStreamForStreamKey(r) : null), [r]);
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
    let { channel: h, currentUser: g, activeStreams: E, hideSelfOptions: A = !1, showReportOption: N = !1, handleGoLive: C, onClose: R, onSelect: O, appContext: D = I.IlC.APP, disableChangeWindows: L = !1 } = e,
        x = (0, a.e7)([m.Z], () => m.Z.getGoLiveSource()),
        w = (0, a.e7)([p.Z], () => p.Z.getState().soundshareEnabled),
        M = m.Z.supports(T.AN.DESKTOP_CAPTURE_APPLICATIONS),
        P = null !== (c = E.find((e) => e.ownerId === (null == g ? void 0 : g.id))) && void 0 !== c ? c : null,
        k = y(h, g, E),
        U = (0, f.Z)(P, D),
        G = (0, d.Z)(P, D, I.VqG),
        B = (0, a.e7)([m.Z], () => m.Z.supports(T.AN.SOUNDSHARE)),
        Z = (0, a.e7)([m.Z], () => m.Z.supportsScreenSoundshare()),
        F = (null == x ? void 0 : x.desktopSource) != null,
        V = null == x ? void 0 : null === (n = x.desktopSource) || void 0 === n ? void 0 : null === (t = n.id) || void 0 === t ? void 0 : t.startsWith('screen'),
        j = b.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !(F && B && (!V || Z)),
                autoTrackExposure: !0
            }
        ).enabled,
        H = i.useCallback(() => {
            var e, t, n;
            (null === (n = m.Z.getGoLiveSource()) || void 0 === n ? void 0 : null === (t = n.desktopSource) || void 0 === t ? void 0 : null === (e = t.id) || void 0 === e ? void 0 : e.startsWith('prepicked:'))
                ? m.Z.getMediaEngine().eachConnection((e) => {
                      e.context === T.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : C();
        }, [C]),
        Y = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = p.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: T.Yn.STREAM
                };
            if ((null == x ? void 0 : x.desktopSource) != null) {
                var i;
                r.desktopSettings = {
                    sourceId: null == x ? void 0 : null === (i = x.desktopSource) || void 0 === i ? void 0 : i.id,
                    sound: !w
                };
            }
            (0, l.Rc)({
                preset: e,
                resolution: t,
                frameRate: n,
                soundshareEnabled: !w
            }),
                o.Z.setGoLiveSource(r);
        }, [x, w]),
        W =
            null == P
                ? (0, r.jsx)(s.MenuItem, {
                      id: 'share-your-screen',
                      label: S.intl.string(S.t.fjBNo6),
                      icon: s.ScreenArrowIcon,
                      action: C
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          v.isPlatformEmbedded
                              ? (0, r.jsx)(s.MenuItem, {
                                    id: 'stream-settings',
                                    label: S.intl.string(S.t.ytAD9f),
                                    children: U
                                })
                              : null,
                          N ? G : null,
                          j
                              ? (0, r.jsx)(s.MenuCheckboxItem, {
                                    id: 'stream-settings-audio-enable',
                                    label: S.intl.string(S.t.ZJEHt7),
                                    checked: w,
                                    action: Y
                                })
                              : null,
                          M && !L
                              ? (0, r.jsx)(s.MenuItem, {
                                    id: 'change-windows',
                                    label: S.intl.string(S.t.qntSam),
                                    icon: s.ScreenArrowIcon,
                                    action: H
                                })
                              : null,
                          (0, r.jsx)(s.MenuItem, {
                              id: 'stop-streaming',
                              label: S.intl.string(S.t.S5anIS),
                              icon: s.ScreenXIcon,
                              action: () => (0, _.Z)(P)
                          })
                      ]
                  });
    return (0, r.jsx)(u.Z, {
        section: I.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(s.Menu, {
            onSelect: O,
            navId: 'manage-streams',
            onClose: R,
            'aria-label': null != P ? S.intl.string(S.t.S5anIS) : S.intl.string(S.t.fjBNo6),
            children: [
                (0, r.jsx)(s.MenuGroup, {
                    children: k.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            s.MenuItem,
                            {
                                id: t.ownerId,
                                label: S.intl.formatToPlainString(S.t['7rkg+/'], { username: n }),
                                icon: s.ScreenXIcon,
                                action: () => (0, _.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                A ? null : W
            ]
        })
    });
}

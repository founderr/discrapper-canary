n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(179658),
    c = n(304680),
    d = n(579806),
    u = n(600164),
    m = n(729345),
    g = n(921801),
    h = n(857192),
    p = n(131951),
    x = n(226961),
    T = n(12647),
    S = n(726985),
    _ = n(981631),
    E = n(65154),
    C = n(388032),
    f = n(232186);
async function I() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function N(e) {
    (0, l.openModal)((t) =>
        (0, i.jsx)(l.ConfirmModal, {
            header: C.intl.string(C.t['7UXEFx']),
            confirmText: C.intl.string(C.t.BddRzc),
            cancelText: C.intl.string(C.t['ETE/oK']),
            onCancel: t.onClose,
            onConfirm: () => a.Z.setDebugLogging(e),
            ...t,
            children: (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: C.intl.string(C.t.IYPrRk)
            })
        })
    );
}
function A() {
    let [e, t] = s.useState(!1),
        { debugLogging: n, aecDumpEnabled: d } = (0, r.cj)([p.Z], () => ({
            aecDumpSupported: p.Z.isAecDumpSupported(),
            debugLogging: p.Z.getDebugLogging(),
            aecDumpEnabled: p.Z.getAecDump(),
            supportsConnectionReplay: p.Z.supports(E.AN.CONNECTION_REPLAY)
        })),
        A = (0, r.e7)([h.default], () => h.default.isStreamInfoOverlayEnabled),
        b = (0, r.e7)([x.ZP], () => x.ZP.shouldRecordNextConnection());
    async function v() {
        t(!0);
        try {
            await p.Z.getMediaEngine().writeAudioDebugState(),
                await T.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, m.E)(_.GU0.RTC),
                !(function () {
                    let e = C.intl.string(C.t['fKBB8/']),
                        t = C.intl.string(C.t.BvyxEx);
                    (0, l.openModal)((n) =>
                        (0, i.jsx)(l.ConfirmModal, {
                            header: e,
                            confirmButtonColor: l.Button.Colors.BRAND,
                            confirmText: C.intl.string(C.t.BddRzc),
                            ...n,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    );
                })();
        } catch (e) {
            !(function (e) {
                let t = C.intl.string(C.t.QZg0Jy),
                    n = null != e ? e : C.intl.string(C.t.VzHcSk);
                (0, l.openModal)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                        header: t,
                        confirmButtonColor: l.Button.Colors.BRAND,
                        confirmText: C.intl.string(C.t.BddRzc),
                        ...e,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: n
                        })
                    })
                );
            })(e.displayMessage);
        }
    }
    return (0, i.jsxs)(l.FormSection, {
        className: f.marginBottom40,
        title: C.intl.string(C.t.OFpL3d),
        children: [
            (0, i.jsx)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: A,
                    onChange: (e) => (0, o.y)({ isStreamInfoOverlayEnabled: e }),
                    note: C.intl.string(C.t.kBXuW1),
                    children: C.intl.string(C.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: d,
                    onChange: (e) => a.Z.setAecDump(e),
                    note: C.intl.string(C.t['xl9+Iy']),
                    children: C.intl.string(C.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        value: b,
                        onChange: (e) => c.TC(e),
                        note: C.intl.string(C.t.Lm72RU),
                        children: C.intl.string(C.t.U4FgFB)
                    }),
                    (0, i.jsx)(l.FormItem, {
                        children: (0, i.jsx)(u.Z, {
                            className: f.marginBottom20,
                            children: (0, i.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(l.Button, {
                                    size: l.Button.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: C.intl.string(C.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    (0, i.jsx)(l.FormDivider, { className: f.marginBottom20 })
                ]
            }),
            (0, i.jsxs)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: [
                    (0, i.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        value: n,
                        onChange: N,
                        note: C.intl.string(C.t['/7ak9f']),
                        children: C.intl.string(C.t['726JHB'])
                    }),
                    (0, i.jsx)(l.FormItem, {
                        children: (0, i.jsxs)(u.Z, {
                            children: [
                                (0, i.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, i.jsx)(l.Button, {
                                        disabled: e,
                                        size: l.Button.Sizes.SMALL,
                                        onClick: v,
                                        children: C.intl.string(C.t['3UB9aW'])
                                    })
                                }),
                                (0, i.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, i.jsx)(l.Button, {
                                        size: l.Button.Sizes.SMALL,
                                        onClick: I,
                                        children: C.intl.string(C.t.nuPtYm)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

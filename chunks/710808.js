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
    h = n(921801),
    g = n(857192),
    p = n(131951),
    x = n(226961),
    S = n(12647),
    T = n(726985),
    C = n(981631),
    E = n(65154),
    _ = n(388032),
    f = n(113207);
async function I() {
    let e = await d.Z.fileManager.getModulePath(),
        t = d.Z.fileManager.join(e, 'discord_voice');
    d.Z.fileManager.showItemInFolder(t);
}
function N(e) {
    (0, l.openModal)((t) =>
        (0, i.jsx)(l.ConfirmModal, {
            header: _.intl.string(_.t['7UXEFx']),
            confirmText: _.intl.string(_.t.BddRzc),
            cancelText: _.intl.string(_.t['ETE/oK']),
            onCancel: t.onClose,
            onConfirm: () => a.Z.setDebugLogging(e),
            ...t,
            children: (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: _.intl.string(_.t.IYPrRk)
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
        A = (0, r.e7)([g.default], () => g.default.isStreamInfoOverlayEnabled),
        b = (0, r.e7)([x.ZP], () => x.ZP.shouldRecordNextConnection());
    async function v() {
        t(!0);
        try {
            await p.Z.getMediaEngine().writeAudioDebugState(),
                await S.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, m.E)(C.GU0.RTC),
                !(function () {
                    let e = _.intl.string(_.t['fKBB8/']),
                        t = _.intl.string(_.t.BvyxEx);
                    (0, l.openModal)((n) =>
                        (0, i.jsx)(l.ConfirmModal, {
                            header: e,
                            confirmButtonColor: l.Button.Colors.BRAND,
                            confirmText: _.intl.string(_.t.BddRzc),
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
                let t = _.intl.string(_.t.QZg0Jy),
                    n = null != e ? e : _.intl.string(_.t.VzHcSk);
                (0, l.openModal)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                        header: t,
                        confirmButtonColor: l.Button.Colors.BRAND,
                        confirmText: _.intl.string(_.t.BddRzc),
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
        title: _.intl.string(_.t.OFpL3d),
        children: [
            (0, i.jsx)(h.F, {
                setting: T.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: A,
                    onChange: (e) => (0, o.y)({ isStreamInfoOverlayEnabled: e }),
                    note: _.intl.string(_.t.kBXuW1),
                    children: _.intl.string(_.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(h.F, {
                setting: T.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: d,
                    onChange: (e) => a.Z.setAecDump(e),
                    note: _.intl.string(_.t['xl9+Iy']),
                    children: _.intl.string(_.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(h.F, {
                setting: T.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        value: b,
                        onChange: (e) => c.TC(e),
                        note: _.intl.string(_.t.Lm72RU),
                        children: _.intl.string(_.t.U4FgFB)
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
                                    children: _.intl.string(_.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    (0, i.jsx)(l.FormDivider, { className: f.marginBottom20 })
                ]
            }),
            (0, i.jsxs)(h.F, {
                setting: T.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: [
                    (0, i.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        value: n,
                        onChange: N,
                        note: _.intl.string(_.t['/7ak9f']),
                        children: _.intl.string(_.t['726JHB'])
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
                                        children: _.intl.string(_.t['3UB9aW'])
                                    })
                                }),
                                (0, i.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, i.jsx)(l.Button, {
                                        size: l.Button.Sizes.SMALL,
                                        onClick: I,
                                        children: _.intl.string(_.t.nuPtYm)
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

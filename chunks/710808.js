t.d(s, {
    Z: function () {
        return R;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(846027),
    l = t(179658),
    c = t(304680),
    d = t(579806),
    u = t(600164),
    _ = t(729345),
    E = t(921801),
    T = t(857192),
    I = t(131951),
    S = t(226961),
    N = t(12647),
    m = t(726985),
    C = t(981631),
    g = t(65154),
    A = t(689938),
    h = t(224499);
async function O() {
    let e = await d.Z.fileManager.getModulePath(),
        s = d.Z.fileManager.join(e, 'discord_voice');
    d.Z.fileManager.showItemInFolder(s);
}
function p(e) {
    (0, r.openModal)((s) =>
        (0, n.jsx)(r.ConfirmModal, {
            header: A.Z.Messages.SET_DEBUG_LOGGING,
            confirmText: A.Z.Messages.OKAY,
            cancelText: A.Z.Messages.CANCEL,
            onCancel: s.onClose,
            onConfirm: () => o.Z.setDebugLogging(e),
            ...s,
            children: (0, n.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: A.Z.Messages.SET_DEBUG_LOGGING_BODY
            })
        })
    );
}
function R() {
    let [e, s] = a.useState(!1),
        { debugLogging: t, aecDumpEnabled: d } = (0, i.cj)([I.Z], () => ({
            aecDumpSupported: I.Z.isAecDumpSupported(),
            debugLogging: I.Z.getDebugLogging(),
            aecDumpEnabled: I.Z.getAecDump(),
            supportsConnectionReplay: I.Z.supports(g.AN.CONNECTION_REPLAY)
        })),
        R = (0, i.e7)([T.default], () => T.default.isStreamInfoOverlayEnabled),
        x = (0, i.e7)([S.ZP], () => S.ZP.shouldRecordNextConnection());
    async function f() {
        s(!0);
        try {
            await I.Z.getMediaEngine().writeAudioDebugState(),
                await N.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, _.E)(C.GU0.RTC),
                !(function () {
                    let e = A.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
                        s = A.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
                    (0, r.openModal)((t) =>
                        (0, n.jsx)(r.ConfirmModal, {
                            header: e,
                            confirmButtonColor: r.Button.Colors.BRAND,
                            confirmText: A.Z.Messages.OKAY,
                            ...t,
                            children: (0, n.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: s
                            })
                        })
                    );
                })();
        } catch (e) {
            !(function (e) {
                let s = A.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
                    t = null != e ? e : A.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
                (0, r.openModal)((e) =>
                    (0, n.jsx)(r.ConfirmModal, {
                        header: s,
                        confirmButtonColor: r.Button.Colors.BRAND,
                        confirmText: A.Z.Messages.OKAY,
                        ...e,
                        children: (0, n.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: t
                        })
                    })
                );
            })(e.displayMessage);
        }
    }
    return (0, n.jsxs)(r.FormSection, {
        className: h.marginBottom40,
        title: A.Z.Messages.FORM_LABEL_DEBUG,
        children: [
            (0, n.jsx)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: R,
                    onChange: (e) => (0, l.y)({ isStreamInfoOverlayEnabled: e }),
                    note: A.Z.Messages.FORM_HELP_STREAM_INFO_OVERLAY,
                    children: A.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY
                })
            }),
            (0, n.jsx)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: d,
                    onChange: (e) => o.Z.setAecDump(e),
                    note: A.Z.Messages.FORM_HELP_AEC_DUMP,
                    children: A.Z.Messages.FORM_CHECKBOX_AEC_DUMP
                })
            }),
            (0, n.jsxs)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: x,
                        onChange: (e) => c.TC(e),
                        note: A.Z.Messages.FORM_HELP_CONNECTION_LOG,
                        children: A.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG
                    }),
                    (0, n.jsx)(r.FormItem, {
                        children: (0, n.jsx)(u.Z, {
                            className: h.marginBottom20,
                            children: (0, n.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, n.jsx)(r.Button, {
                                    size: r.Button.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: A.Z.Messages.OPEN_CONNECTION_REPLAY
                                })
                            })
                        })
                    }),
                    (0, n.jsx)(r.FormDivider, { className: h.marginBottom20 })
                ]
            }),
            (0, n.jsxs)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: [
                    (0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: t,
                        onChange: p,
                        note: A.Z.Messages.FORM_HELP_DEBUG_LOGGING,
                        children: A.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING
                    }),
                    (0, n.jsx)(r.FormItem, {
                        children: (0, n.jsxs)(u.Z, {
                            children: [
                                (0, n.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, n.jsx)(r.Button, {
                                        disabled: e,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: f,
                                        children: A.Z.Messages.UPLOAD
                                    })
                                }),
                                (0, n.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, n.jsx)(r.Button, {
                                        size: r.Button.Sizes.SMALL,
                                        onClick: O,
                                        children: A.Z.Messages.SHOW_FOLDER
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

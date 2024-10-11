t.d(s, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(401430),
    l = t(921801),
    c = t(695103),
    d = t(998502),
    _ = t(695346),
    u = t(399970),
    E = t(726985),
    T = t(981631),
    S = t(689938);
function I() {
    let [e] = a.useState(() => d.ZP.getEnableHardwareAcceleration()),
        s = _.bm.useSetting(),
        t = _.Sb.useSetting(),
        I = (0, i.e7)([c.Z], () => c.Z.testModeApplicationId),
        N = a.useCallback((e) => {
            _.bm.updateSetting(!e);
        }, []),
        m = a.useCallback((e) => {
            e ? (0, r.openModal)((e) => (0, n.jsx)(u.Z, { ...e })) : o.mc();
        }, []),
        C = a.useCallback((e) => {
            (0, r.openModal)((s) =>
                (0, n.jsx)(r.ConfirmModal, {
                    header: S.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
                    confirmText: S.Z.Messages.OKAY,
                    cancelText: S.Z.Messages.CANCEL,
                    onConfirm: () => d.ZP.setEnableHardwareAcceleration(e),
                    ...s,
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: S.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
                    })
                })
            );
        }, []);
    return (0, n.jsxs)(r.FormSection, {
        tag: r.FormTitleTags.H1,
        title: S.Z.Messages.SETTINGS_ADVANCED,
        children: [
            (0, n.jsx)(l.F, {
                setting: E.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: t,
                    onChange: _.Sb.updateSetting,
                    note: S.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({ apiDocsUrl: T.EYA.API_DOCS }),
                    children: S.Z.Messages.DEVELOPER_MODE
                })
            }),
            (0, n.jsx)(l.F, {
                setting: E.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: e,
                    onChange: C,
                    note: S.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
                    children: S.Z.Messages.HARDWARE_ACCELERATION
                })
            }),
            (0, n.jsx)(l.F, {
                setting: E.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: !s,
                    onChange: N,
                    note: S.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
                    children: S.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
                })
            }),
            (0, n.jsx)(l.F, {
                setting: E.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: null != I,
                    note: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
                    onChange: m,
                    children: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
                })
            })
        ]
    });
}

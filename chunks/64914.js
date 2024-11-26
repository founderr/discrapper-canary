n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(401430),
    o = n(153867),
    c = n(921801),
    d = n(695103),
    u = n(998502),
    m = n(740492),
    h = n(695346),
    g = n(399970),
    p = n(726985),
    x = n(981631),
    S = n(388032);
function T() {
    let [e] = s.useState(() => u.ZP.getEnableHardwareAcceleration()),
        t = h.bm.useSetting(),
        n = h.Sb.useSetting(),
        T = (0, r.e7)([d.Z], () => d.Z.testModeApplicationId),
        E = (0, r.e7)([m.ZP], () => m.ZP.showPlayAgain),
        _ = s.useCallback((e) => {
            h.bm.updateSetting(!e);
        }, []),
        C = s.useCallback((e) => {
            e ? (0, l.openModal)((e) => (0, i.jsx)(g.Z, { ...e })) : a.mc();
        }, []),
        I = s.useCallback((e) => {
            o.ZP.updatedUnsyncedSettings({ showPlayAgain: e });
        }, []),
        f = s.useCallback((e) => {
            (0, l.openModal)((t) =>
                (0, i.jsx)(l.ConfirmModal, {
                    header: S.intl.string(S.t.aqpAvr),
                    confirmText: S.intl.string(S.t.BddRzc),
                    cancelText: S.intl.string(S.t['ETE/oK']),
                    onConfirm: () => u.ZP.setEnableHardwareAcceleration(e),
                    ...t,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: S.intl.string(S.t.uDP3Ky)
                    })
                })
            );
        }, []);
    return (0, i.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: S.intl.string(S.t['8/udY2']),
        children: [
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: n,
                    onChange: h.Sb.updateSetting,
                    note: S.intl.format(S.t['CY6q/f'], { apiDocsUrl: x.EYA.API_DOCS }),
                    children: S.intl.string(S.t.ObIb1d)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: e,
                    onChange: f,
                    note: S.intl.string(S.t.Afc7l5),
                    children: S.intl.string(S.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: !t,
                    onChange: _,
                    note: S.intl.string(S.t['8mYp39']),
                    children: S.intl.string(S.t.fi3UQE)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: null != T,
                    note: S.intl.string(S.t['52hMnJ']),
                    onChange: C,
                    children: S.intl.string(S.t.erOqlp)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: E,
                    note: S.intl.string(S.t['B/qU4O']),
                    onChange: I,
                    children: S.intl.string(S.t.qDZryM)
                })
            })
        ]
    });
}

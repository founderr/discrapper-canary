n.d(t, {
    Z: function () {
        return S;
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
    g = n(695346),
    h = n(399970),
    p = n(726985),
    x = n(981631),
    T = n(388032);
function S() {
    let [e] = s.useState(() => u.ZP.getEnableHardwareAcceleration()),
        t = g.bm.useSetting(),
        n = g.Sb.useSetting(),
        S = (0, r.e7)([d.Z], () => d.Z.testModeApplicationId),
        _ = (0, r.e7)([m.ZP], () => m.ZP.showPlayAgain),
        E = s.useCallback((e) => {
            g.bm.updateSetting(!e);
        }, []),
        C = s.useCallback((e) => {
            e ? (0, l.openModal)((e) => (0, i.jsx)(h.Z, { ...e })) : a.mc();
        }, []),
        f = s.useCallback((e) => {
            o.ZP.updatedUnsyncedSettings({ showPlayAgain: e });
        }, []),
        I = s.useCallback((e) => {
            (0, l.openModal)((t) =>
                (0, i.jsx)(l.ConfirmModal, {
                    header: T.intl.string(T.t.aqpAvr),
                    confirmText: T.intl.string(T.t.BddRzc),
                    cancelText: T.intl.string(T.t['ETE/oK']),
                    onConfirm: () => u.ZP.setEnableHardwareAcceleration(e),
                    ...t,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: T.intl.string(T.t.uDP3Ky)
                    })
                })
            );
        }, []);
    return (0, i.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: T.intl.string(T.t['8/udY2']),
        children: [
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: n,
                    onChange: g.Sb.updateSetting,
                    note: T.intl.format(T.t['CY6q/f'], { apiDocsUrl: x.EYA.API_DOCS }),
                    children: T.intl.string(T.t.ObIb1d)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: e,
                    onChange: I,
                    note: T.intl.string(T.t.Afc7l5),
                    children: T.intl.string(T.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: !t,
                    onChange: E,
                    note: T.intl.string(T.t['8mYp39']),
                    children: T.intl.string(T.t.fi3UQE)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: null != S,
                    note: T.intl.string(T.t['52hMnJ']),
                    onChange: C,
                    children: T.intl.string(T.t.erOqlp)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: _,
                    note: T.intl.string(T.t['B/qU4O']),
                    onChange: f,
                    children: T.intl.string(T.t.qDZryM)
                })
            })
        ]
    });
}

n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(401430),
    o = n(921801),
    c = n(695103),
    d = n(998502),
    u = n(695346),
    m = n(399970),
    h = n(726985),
    g = n(981631),
    p = n(388032);
function x() {
    let [e] = s.useState(() => d.ZP.getEnableHardwareAcceleration()),
        t = u.bm.useSetting(),
        n = u.Sb.useSetting(),
        x = (0, r.e7)([c.Z], () => c.Z.testModeApplicationId),
        S = s.useCallback((e) => {
            u.bm.updateSetting(!e);
        }, []),
        T = s.useCallback((e) => {
            e ? (0, l.openModal)((e) => (0, i.jsx)(m.Z, { ...e })) : a.mc();
        }, []),
        C = s.useCallback((e) => {
            (0, l.openModal)((t) =>
                (0, i.jsx)(l.ConfirmModal, {
                    header: p.intl.string(p.t.aqpAvr),
                    confirmText: p.intl.string(p.t.BddRzc),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: () => d.ZP.setEnableHardwareAcceleration(e),
                    ...t,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: p.intl.string(p.t.uDP3Ky)
                    })
                })
            );
        }, []);
    return (0, i.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: p.intl.string(p.t['8/udY2']),
        children: [
            (0, i.jsx)(o.F, {
                setting: h.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: n,
                    onChange: u.Sb.updateSetting,
                    note: p.intl.format(p.t['CY6q/f'], { apiDocsUrl: g.EYA.API_DOCS }),
                    children: p.intl.string(p.t.ObIb1d)
                })
            }),
            (0, i.jsx)(o.F, {
                setting: h.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: e,
                    onChange: C,
                    note: p.intl.string(p.t.Afc7l5),
                    children: p.intl.string(p.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(o.F, {
                setting: h.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: !t,
                    onChange: S,
                    note: p.intl.string(p.t['8mYp39']),
                    children: p.intl.string(p.t.fi3UQE)
                })
            }),
            (0, i.jsx)(o.F, {
                setting: h.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(l.FormSwitch, {
                    value: null != x,
                    note: p.intl.string(p.t['52hMnJ']),
                    onChange: T,
                    children: p.intl.string(p.t.erOqlp)
                })
            })
        ]
    });
}

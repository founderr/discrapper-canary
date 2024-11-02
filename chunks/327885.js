n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    m = n(825209),
    h = n(887278),
    g = n(630699),
    p = n(212632),
    x = n(658785),
    S = n(556296),
    T = n(808506),
    C = n(237997),
    _ = n(626135);
n(63063);
var E = n(13140),
    f = n(981631),
    I = n(388032),
    N = n(301942);
let A = b(null);
function b(e) {
    var t;
    let n = C.Z.getNotificationPositionMode(),
        i = n !== f._vf.DISABLED,
        s = S.Z.getOverlayKeybind(),
        r = S.Z.getOverlayChatKeybind();
    return {
        enabled: T.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: C.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, E.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, E.BB)(r.shortcut) : null,
        text_opacity_slider: C.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : T.Z.enabled
    };
}
function v(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.FormItem, {
        title: n,
        className: N.userSettingsOverlayField,
        children: t
    });
}
function j(e) {
    let { className: t, showHeader: n = !0 } = e,
        { enabled: s, legacyEnabled: l } = (0, o.cj)([T.Z], () => ({
            enabled: T.Z.enabled,
            legacyEnabled: T.Z.legacyEnabled
        })),
        {
            avatarSizeMode: E,
            displayNameMode: j,
            displayUserMode: O,
            notificationPositionMode: R,
            textChatNotificationMode: P,
            shouldShowKeybindIndicators: D
        } = (0, o.cj)([C.Z], () => ({
            avatarSizeMode: C.Z.getAvatarSizeMode(),
            displayNameMode: C.Z.getDisplayNameMode(),
            displayUserMode: C.Z.getDisplayUserMode(),
            notificationPositionMode: C.Z.getNotificationPositionMode(),
            textChatNotificationMode: C.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: C.Z.showKeybindIndicators
        })),
        y = (0, o.e7)([S.Z], () => S.Z.getOverlayKeybind()),
        { showKeybindIndicators: B } = x.Z.useExperiment({ location: 'overlay_user_settings' }),
        L = (0, h.$1)();
    function Z(e) {
        u.Z.setEnabled(e, l),
            _.default.track(f.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - global'
            });
    }
    function F(e) {
        u.Z.setEnabled(s, e),
            _.default.track(f.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - legacy'
            });
    }
    return (
        !(function () {
            let e = b(A);
            !a().isEqual(e, A) && (_.default.track(f.rMx.OVERLAY_SETTINGS_UPDATED, e), (A = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.FormSection, {
                    className: t,
                    tag: c.FormTitleTags.H1,
                    title: n ? I.intl.string(I.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: N.enableOverlaySection,
                            children: [
                                (0, g.H)()
                                    ? (0, i.jsxs)(c.FormItem, {
                                          title: I.intl.string(I.t.XkaTrq),
                                          className: N.enableOverlayItem,
                                          children: [
                                              (0, i.jsx)(c.FormSwitch, {
                                                  className: N.enableSwitch,
                                                  value: s,
                                                  hideBorder: !0,
                                                  onChange: Z,
                                                  children: I.intl.string(I.t.vSP6c3)
                                              }),
                                              (0, i.jsx)(c.FormSwitch, {
                                                  className: N.enableSwitch,
                                                  value: l,
                                                  disabled: L || !s,
                                                  note: L ? I.intl.string(I.t.Eb0lnJ) : null,
                                                  hideBorder: !0,
                                                  onChange: F,
                                                  children: I.intl.string(I.t.znUpRE)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(c.FormItem, {
                                          title: I.intl.string(I.t.XkaTrq),
                                          className: N.enableOverlayItem,
                                          children: (0, i.jsx)(c.FormSwitch, {
                                              className: N.enableSwitch,
                                              value: s,
                                              disabled: L,
                                              note: L ? I.intl.string(I.t.Eb0lnJ) : null,
                                              hideBorder: !0,
                                              onChange: Z,
                                              children: I.intl.string(I.t.vSP6c3)
                                          })
                                      }),
                                (0, i.jsx)(c.FormItem, {
                                    title: I.intl.string(I.t.VsAZcH),
                                    className: N.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !s,
                                        defaultValue: null != y ? y.shortcut : [],
                                        onChange: function (e) {
                                            r()(null != y, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...y,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(v, {
                            title: I.intl.string(I.t.dnvZSk),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.YcOxtr),
                                        value: f.ipw.LARGE
                                    },
                                    {
                                        name: I.intl.string(I.t.BKIKq6),
                                        value: f.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: E
                            })
                        }),
                        (0, i.jsx)(v, {
                            title: I.intl.string(I.t.J0dpcH),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.nBmDra),
                                        value: f.wC$.ALWAYS
                                    },
                                    {
                                        name: I.intl.string(I.t['2OvIZW']),
                                        value: f.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: I.intl.string(I.t.ekjlPD),
                                        value: f.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: j
                            })
                        }),
                        (0, i.jsx)(v, {
                            title: I.intl.string(I.t.swsWWF),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.nBmDra),
                                        value: f.OYC.ALWAYS
                                    },
                                    {
                                        name: I.intl.string(I.t['2OvIZW']),
                                        value: f.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: O
                            })
                        }),
                        B &&
                            (0, i.jsx)(v, {
                                children: (0, i.jsx)(c.FormSwitch, {
                                    value: D,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: I.intl.string(I.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.FormSection, {
                    tag: c.FormTitleTags.H1,
                    title: I.intl.string(I.t['3GMnLi']),
                    className: N.notificationSection,
                    children: [
                        (0, i.jsx)(v, {
                            title: I.intl.string(I.t.IQv8Eh),
                            children: (0, i.jsx)('div', {
                                className: N.notificationSettings,
                                children: (0, i.jsx)(p.Z, {
                                    position: R,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, i.jsx)(v, {
                            children: (0, i.jsx)(c.FormSwitch, {
                                value: R !== f._vf.DISABLED && P === f.Ypu.ENABLED,
                                disabled: R === f._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = f.Ypu;
                                    u.Z.setTextChatNotificationMode(P === e ? t : e);
                                },
                                hideBorder: !0,
                                children: I.intl.string(I.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}

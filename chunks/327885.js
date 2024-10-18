t.d(s, {
    Z: function () {
        return f;
    }
});
var n = t(735250);
t(470079);
var a = t(512722),
    i = t.n(a),
    r = t(392711),
    o = t.n(r),
    l = t(442837),
    c = t(481060),
    d = t(660216),
    _ = t(13245),
    u = t(825209),
    E = t(887278),
    T = t(630699),
    S = t(212632),
    I = t(658785),
    N = t(556296),
    m = t(808506),
    A = t(237997),
    C = t(626135);
t(63063);
var g = t(13140),
    h = t(981631),
    O = t(689938),
    p = t(301942);
let R = x(null);
function x(e) {
    var s;
    let t = A.Z.getNotificationPositionMode(),
        n = t !== h._vf.DISABLED,
        a = N.Z.getOverlayKeybind(),
        i = N.Z.getOverlayChatKeybind();
    return {
        enabled: m.Z.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: A.Z.getTextChatNotificationMode(),
        hotkey: null != a ? (0, g.BB)(a.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
        text_opacity_slider: A.Z.getTextWidgetOpacity(),
        old_enabled: null !== (s = null == e ? void 0 : e.enabled) && void 0 !== s ? s : m.Z.enabled
    };
}
function M(e) {
    let { children: s, title: t } = e;
    return (0, n.jsx)(c.FormItem, {
        title: t,
        className: p.userSettingsOverlayField,
        children: s
    });
}
function f(e) {
    let { className: s, showHeader: t = !0 } = e,
        { enabled: a, legacyEnabled: r } = (0, l.cj)([m.Z], () => ({
            enabled: m.Z.enabled,
            legacyEnabled: m.Z.legacyEnabled
        })),
        {
            avatarSizeMode: g,
            displayNameMode: f,
            displayUserMode: D,
            notificationPositionMode: L,
            textChatNotificationMode: P,
            shouldShowKeybindIndicators: b
        } = (0, l.cj)([A.Z], () => ({
            avatarSizeMode: A.Z.getAvatarSizeMode(),
            displayNameMode: A.Z.getDisplayNameMode(),
            displayUserMode: A.Z.getDisplayUserMode(),
            notificationPositionMode: A.Z.getNotificationPositionMode(),
            textChatNotificationMode: A.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: A.Z.showKeybindIndicators
        })),
        Z = (0, l.e7)([N.Z], () => N.Z.getOverlayKeybind()),
        { showKeybindIndicators: v } = I.Z.useExperiment({ location: 'overlay_user_settings' }),
        j = (0, E.$1)();
    function B(e) {
        _.Z.setEnabled(e, r),
            C.default.track(h.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - global'
            });
    }
    function U(e) {
        _.Z.setEnabled(a, e),
            C.default.track(h.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - legacy'
            });
    }
    return (
        !(function () {
            let e = x(R);
            !o().isEqual(e, R) && (C.default.track(h.rMx.OVERLAY_SETTINGS_UPDATED, e), (R = e));
        })(),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(c.FormSection, {
                    className: s,
                    tag: c.FormTitleTags.H1,
                    title: t ? O.Z.Messages.OVERLAY : null,
                    children: [
                        !1,
                        (0, n.jsxs)('div', {
                            className: p.enableOverlaySection,
                            children: [
                                (0, T.H)()
                                    ? (0, n.jsxs)(c.FormItem, {
                                          title: O.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
                                          className: p.enableOverlayItem,
                                          children: [
                                              (0, n.jsx)(c.FormSwitch, {
                                                  className: p.enableSwitch,
                                                  value: a,
                                                  hideBorder: !0,
                                                  onChange: B,
                                                  children: O.Z.Messages.ENABLE_INGAME_OVERLAY
                                              }),
                                              (0, n.jsx)(c.FormSwitch, {
                                                  className: p.enableSwitch,
                                                  value: r,
                                                  disabled: j || !a,
                                                  note: j ? O.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
                                                  hideBorder: !0,
                                                  onChange: U,
                                                  children: O.Z.Messages.ENABLE_LEGACY_OVERLAY
                                              })
                                          ]
                                      })
                                    : (0, n.jsx)(c.FormItem, {
                                          title: O.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
                                          className: p.enableOverlayItem,
                                          children: (0, n.jsx)(c.FormSwitch, {
                                              className: p.enableSwitch,
                                              value: a,
                                              disabled: j,
                                              note: j ? O.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
                                              hideBorder: !0,
                                              onChange: B,
                                              children: O.Z.Messages.ENABLE_INGAME_OVERLAY
                                          })
                                      }),
                                (0, n.jsx)(c.FormItem, {
                                    title: O.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
                                    className: p.enableOverlayItem,
                                    children: (0, n.jsx)(u.Z, {
                                        disabled: !a,
                                        defaultValue: null != Z ? Z.shortcut : [],
                                        onChange: function (e) {
                                            i()(null != Z, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...Z,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, n.jsx)(M, {
                            title: O.Z.Messages.FORM_LABEL_AVATAR_SIZE,
                            children: (0, n.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: O.Z.Messages.AVATAR_SIZE_OPTION_LARGE,
                                        value: h.ipw.LARGE
                                    },
                                    {
                                        name: O.Z.Messages.AVATAR_SIZE_OPTION_SMALL,
                                        value: h.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: s } = e;
                                    return _.Z.setAvatarSizeMode(s);
                                },
                                value: g
                            })
                        }),
                        (0, n.jsx)(M, {
                            title: O.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
                            children: (0, n.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: O.Z.Messages.DISPLAY_OPTION_ALWAYS,
                                        value: h.wC$.ALWAYS
                                    },
                                    {
                                        name: O.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
                                        value: h.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: O.Z.Messages.DISPLAY_OPTION_NEVER,
                                        value: h.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: s } = e;
                                    return _.Z.setDisplayNameMode(s);
                                },
                                value: f
                            })
                        }),
                        (0, n.jsx)(M, {
                            title: O.Z.Messages.FORM_LABEL_DISPLAY_USERS,
                            children: (0, n.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: O.Z.Messages.DISPLAY_OPTION_ALWAYS,
                                        value: h.OYC.ALWAYS
                                    },
                                    {
                                        name: O.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
                                        value: h.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: s } = e;
                                    return _.Z.setDisplayUserMode(s);
                                },
                                value: D
                            })
                        }),
                        v &&
                            (0, n.jsx)(M, {
                                children: (0, n.jsx)(c.FormSwitch, {
                                    value: b,
                                    onChange: (e) => _.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: O.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
                                })
                            })
                    ]
                }),
                (0, n.jsxs)(c.FormSection, {
                    tag: c.FormTitleTags.H1,
                    title: O.Z.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
                    className: p.notificationSection,
                    children: [
                        (0, n.jsx)(M, {
                            title: O.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                            children: (0, n.jsx)('div', {
                                className: p.notificationSettings,
                                children: (0, n.jsx)(S.Z, {
                                    position: L,
                                    onChange: (e, s) => _.Z.setNotificationPositionMode(s)
                                })
                            })
                        }),
                        (0, n.jsx)(M, {
                            children: (0, n.jsx)(c.FormSwitch, {
                                value: L !== h._vf.DISABLED && P === h.Ypu.ENABLED,
                                disabled: L === h._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: s } = h.Ypu;
                                    _.Z.setTextChatNotificationMode(P === e ? s : e);
                                },
                                hideBorder: !0,
                                children: O.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
                            })
                        })
                    ]
                })
            ]
        })
    );
}

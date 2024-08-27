t.d(n, {
    Z: function () {
        return J;
    }
});
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(442837),
    o = t(481060),
    u = t(230711),
    c = t(812206),
    d = t(605436),
    m = t(600164),
    E = t(594190),
    S = t(925329),
    _ = t(565138),
    g = t(977059),
    h = t(695346),
    x = t(494620),
    Z = t(592125),
    f = t(650774),
    C = t(430824),
    N = t(131951),
    I = t(944486),
    R = t(594174),
    v = t(449224),
    T = t(626135),
    A = t(823379),
    p = t(63063),
    M = t(358085),
    j = t(653255),
    L = t(989941),
    O = t(618407),
    D = t(586290),
    P = t(233037),
    G = t(810013),
    U = t(537135),
    b = t(641115),
    w = t(143135),
    k = t(70722),
    V = t(981631),
    B = t(526761),
    W = t(689938),
    H = t(85586),
    y = t(458623);
function F(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: s, onChangeSource: a } = e,
        r = (0, i.e7)([E.ZP, v.Z], () => ((0, M.isWindows)() ? (0, L.Z)(E.ZP, v.Z) : null)),
        u = (0, i.e7)([c.Z], () => ((null == r ? void 0 : r.id) != null ? c.Z.getApplication(r.id) : null)),
        d = (0, i.e7)([E.ZP], () => E.ZP.getRunningGames()),
        m = (0, i.Wu)([c.Z], () => d.map((e) => (null != e.id ? c.Z.getApplication(e.id) : null)).filter(A.lm), [d]),
        _ = null;
    if ((null != n ? (_ = n.name) : null != r && (_ = r.name), null == _)) return null;
    let g = (0, w.Z)(r, n, d),
        h = s
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == g ? void 0 : g.id);
              })
            : u,
        x = null != n && n.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
    return (0, l.jsx)(o.FormItem, {
        title: W.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
        className: y.modalContent,
        titleClassName: y.formItemTitleVerySlim,
        children: (0, l.jsxs)(U.Z, {
            children: [
                null != h
                    ? (0, l.jsx)(S.Z, {
                          game: h,
                          size: S.Z.Sizes.XSMALL,
                          className: H.selectedIcon
                      })
                    : (0, l.jsx)(x, { className: H.selectedIcon }),
                (0, l.jsx)('span', {
                    className: H.ellipsisText,
                    children: _
                }),
                t
                    ? (0, l.jsx)(o.Button, {
                          className: H.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: a,
                          children: W.Z.Messages.CHANGE
                      })
                    : null
            ]
        })
    });
}
function z(e) {
    let { onChange: n, guildId: t } = e,
        s = (0, i.e7)([C.Z], () => C.Z.getGuild(t));
    return null == s
        ? (n(), null)
        : (0, l.jsx)(o.FormItem, {
              title: W.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: y.modalContent,
              titleClassName: y.formItemTitle,
              children: (0, l.jsxs)(U.Z, {
                  children: [
                      (0, l.jsx)(_.Z, {
                          guild: s,
                          size: _.Z.Sizes.SMALLER,
                          className: H.selectedIcon
                      }),
                      (0, l.jsx)('span', {
                          className: H.ellipsisText,
                          children: s.toString()
                      }),
                      (0, l.jsx)(o.Button, {
                          className: H.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: n,
                          children: W.Z.Messages.CHANGE
                      })
                  ]
              })
          });
}
function Y(e) {
    let { text: n } = e;
    return (0, l.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: H.warning,
        children: [
            (0, l.jsx)(o.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: H.warningIcon
            }),
            (0, l.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: n
            })
        ]
    });
}
function K(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        a = h.eo.useSetting(),
        u = s.useCallback((e, n) => {
            h.eo.updateSetting(n), T.default.track(V.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return t >= 2 && t <= k.tB
        ? (0, l.jsx)(o.FormItem, {
              className: r()(y.modalContent, H.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  value: !!a,
                  type: o.Checkbox.Types.INVERTED,
                  onChange: u,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: W.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                  })
              })
          })
        : null;
}
function Q(e) {
    let { enabled: n, onChange: t, screen: a } = e,
        i = s.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.FormItem, {
        className: r()(y.modalContent, H.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: i,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: a ? W.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : W.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
            })
        })
    });
}
function X(e) {
    let { enabled: n, onChange: t } = e,
        a = s.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.FormItem, {
        className: r()(y.modalContent, H.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: W.Z.Messages.GO_LIVE_MODAL_DISABLE_STREAM_PREVIEWS
            })
        })
    });
}
function J(e) {
    let { selectedSource: n, selectedFPS: t, selectedChannelId: a, selectedPreset: r, selectedResolution: o, sourceChanged: c, selectedGuildId: m, targetGuildPremiumTier: E, selectSource: S, selectGuild: _, sound: h, previewDisabled: f, onClose: C, onChangeSelectedFPS: v, onChangeSelectedResolution: T, onChangeSelectedPreset: A, onChangeSelectedChannelId: M, onChangeSource: L, onChangeAudioDevice: U, onChangeGuild: w, onChangeSound: k, onChangePreviewDisabled: y } = e,
        J = (0, i.e7)([I.Z, Z.Z], () => Z.Z.getChannel(I.Z.getVoiceChannelId())),
        q = (0, i.e7)([j.Z], () => j.Z.GPUDriversOutdated),
        $ = (0, i.e7)([j.Z], () => j.Z.problematicGPUDriver),
        ee = (0, i.e7)([R.default], () => R.default.getCurrentUser()),
        en = (0, O.Z)();
    null != n && n.id.startsWith('screen') && !N.Z.supportsScreenSoundshare() && (en = W.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
    let et = !!(null == n ? void 0 : n.id.startsWith('camera')),
        el = null != ee && ee.verified && !ee.bot,
        es = null != J && !(0, d.Yk)(J),
        ea = !(0, i.e7)([N.Z], () => N.Z.getHardwareH264()),
        { enabled: er } = (0, g.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(s.Fragment, {
        children: [
            et
                ? (0, l.jsx)(D.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: L,
                      onChangeAudioDevice: U
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(F, {
                              selectSource: S,
                              sourceChanged: c,
                              onChangeSource: L,
                              selectedSource: n
                          }),
                          null != en ? (0, l.jsx)(Y, { text: en }) : null,
                          null != n && null == en
                              ? (0, l.jsx)(Q, {
                                    enabled: h,
                                    onChange: k,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            _ && null != m
                ? (0, l.jsx)(z, {
                      guildId: m,
                      onChange: w
                  })
                : null,
            null != J
                ? (0, l.jsx)(G.Z, { channel: J })
                : (0, l.jsx)(P.Z, {
                      guildId: m,
                      selectedChannelId: a,
                      onChangeSelectedChannelId: M
                  }),
            null != m && el && es ? (0, l.jsx)(K, { guildId: m }) : null,
            q ? (0, l.jsx)(Y, { text: W.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED }) : null,
            $ ? (0, l.jsx)(Y, { text: W.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({ helpCenterLink: p.Z.getArticleURL(V.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            ea &&
                (0, l.jsx)(x.Z, {
                    look: x.z.WARNING,
                    className: H.hardwareWarning,
                    children: W.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                        onClick: () => {
                            C(), u.Z.open(V.oAB.VOICE, null, { scrollPosition: B.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(b.Z, {
                selectedPreset: r,
                selectedFPS: t,
                selectedResolution: o,
                targetGuildPremiumTier: E,
                onClose: C,
                onFPSChange: v,
                onResolutionChange: T,
                onPresetChange: A,
                captureDeviceSelected: et
            }),
            er &&
                (0, l.jsx)(X, {
                    enabled: f,
                    onChange: y
                })
        ]
    });
}

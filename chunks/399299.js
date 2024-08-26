t.d(n, {
    Z: function () {
        return ee;
    }
});
var l = t(735250),
    s = t(470079),
    a = t(120356),
    i = t.n(a),
    r = t(442837),
    o = t(481060),
    c = t(230711),
    u = t(812206),
    d = t(605436),
    m = t(924557),
    E = t(954564),
    _ = t(98131),
    S = t(600164),
    h = t(594190),
    x = t(925329),
    C = t(565138),
    g = t(977059),
    I = t(695346),
    N = t(494620),
    Z = t(592125),
    f = t(650774),
    R = t(430824),
    A = t(131951),
    T = t(944486),
    v = t(594174),
    L = t(449224),
    M = t(626135),
    p = t(823379),
    O = t(63063),
    j = t(358085),
    P = t(653255),
    D = t(989941),
    G = t(618407),
    U = t(586290),
    b = t(233037),
    w = t(810013),
    k = t(537135),
    B = t(641115),
    V = t(143135),
    y = t(70722),
    H = t(981631),
    W = t(526761),
    F = t(689938),
    z = t(85586),
    K = t(458623);
function Y(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: s, onChangeSource: a } = e,
        i = (0, r.e7)([h.ZP, L.Z], () => ((0, j.isWindows)() ? (0, D.Z)(h.ZP, L.Z) : null)),
        c = (0, r.e7)([u.Z], () => ((null == i ? void 0 : i.id) != null ? u.Z.getApplication(i.id) : null)),
        d = (0, r.e7)([h.ZP], () => h.ZP.getRunningGames()),
        m = (0, r.Wu)([u.Z], () => d.map((e) => (null != e.id ? u.Z.getApplication(e.id) : null)).filter(p.lm), [d]),
        E = null;
    if ((null != n ? (E = n.name) : null != i && (E = i.name), null == E)) return null;
    let _ = (0, V.Z)(i, n, d),
        S = s
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == _ ? void 0 : _.id);
              })
            : c,
        C = null != n && n.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
    return (0, l.jsx)(o.FormItem, {
        title: F.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
        className: K.modalContent,
        titleClassName: K.formItemTitleVerySlim,
        children: (0, l.jsxs)(k.Z, {
            children: [
                null != S
                    ? (0, l.jsx)(x.Z, {
                          game: S,
                          size: x.Z.Sizes.XSMALL,
                          className: z.selectedIcon
                      })
                    : (0, l.jsx)(C, { className: z.selectedIcon }),
                (0, l.jsx)('span', {
                    className: z.ellipsisText,
                    children: E
                }),
                t
                    ? (0, l.jsx)(o.Button, {
                          className: z.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: a,
                          children: F.Z.Messages.CHANGE
                      })
                    : null
            ]
        })
    });
}
function Q(e) {
    let { onChange: n, guildId: t } = e,
        s = (0, r.e7)([R.Z], () => R.Z.getGuild(t));
    return null == s
        ? (n(), null)
        : (0, l.jsx)(o.FormItem, {
              title: F.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: K.modalContent,
              titleClassName: K.formItemTitle,
              children: (0, l.jsxs)(k.Z, {
                  children: [
                      (0, l.jsx)(C.Z, {
                          guild: s,
                          size: C.Z.Sizes.SMALLER,
                          className: z.selectedIcon
                      }),
                      (0, l.jsx)('span', {
                          className: z.ellipsisText,
                          children: s.toString()
                      }),
                      (0, l.jsx)(o.Button, {
                          className: z.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: n,
                          children: F.Z.Messages.CHANGE
                      })
                  ]
              })
          });
}
function X(e) {
    let { text: n } = e;
    return (0, l.jsxs)(S.Z, {
        align: S.Z.Align.CENTER,
        className: z.warning,
        children: [
            (0, l.jsx)(o.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: z.warningIcon
            }),
            (0, l.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: n
            })
        ]
    });
}
function q(e) {
    let { guildId: n } = e,
        t = (0, r.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        a = I.eo.useSetting(),
        c = s.useCallback((e, n) => {
            I.eo.updateSetting(n), M.default.track(H.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return t >= 2 && t <= y.tB
        ? (0, l.jsx)(o.FormItem, {
              className: i()(K.modalContent, z.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  value: !!a,
                  type: o.Checkbox.Types.INVERTED,
                  onChange: c,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: F.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                  })
              })
          })
        : null;
}
function J(e) {
    let { enabled: n, onChange: t, screen: a } = e,
        r = s.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.FormItem, {
        className: i()(K.modalContent, z.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: r,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: a ? F.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : F.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
            })
        })
    });
}
function $(e) {
    let { enabled: n, onChange: t } = e,
        a = s.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.FormItem, {
        className: i()(K.modalContent, z.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: F.Z.Messages.GO_LIVE_MODAL_DISABLE_STREAM_PREVIEWS
            })
        })
    });
}
function ee(e) {
    let { selectedSource: n, selectedFPS: t, selectedChannelId: a, selectedPreset: i, selectedResolution: o, sourceChanged: u, selectedGuildId: S, targetGuildPremiumTier: h, selectSource: x, selectGuild: C, sound: I, previewDisabled: f, onClose: R, onChangeSelectedFPS: L, onChangeSelectedResolution: M, onChangeSelectedPreset: p, onChangeSelectedChannelId: j, onChangeSource: D, onChangeAudioDevice: k, onChangeGuild: V, onChangeSound: y, onChangePreviewDisabled: K, isAnimationDone: ee } = e,
        en = (0, r.e7)([T.Z, Z.Z], () => Z.Z.getChannel(T.Z.getVoiceChannelId())),
        et = (0, r.e7)([P.Z], () => P.Z.GPUDriversOutdated),
        el = (0, r.e7)([P.Z], () => P.Z.problematicGPUDriver),
        es = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
        ea = (0, m.Go)(),
        ei = (0, m.Zq)({ autoTrackExposure: !ea }),
        er = (0, G.Z)();
    null != n && n.id.startsWith('screen') && !A.Z.supportsScreenSoundshare() && (er = F.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
    let eo = ea
            ? (0, l.jsx)(_.Z, {
                  guildId: S,
                  isAnimationDone: ee
              })
            : ei
              ? (0, l.jsx)(E.Z, {})
              : void 0,
        ec = !!(null == n ? void 0 : n.id.startsWith('camera')),
        eu = null != es && es.verified && !es.bot,
        ed = null != en && !(0, d.Yk)(en),
        em = !(0, r.e7)([A.Z], () => A.Z.getHardwareH264()),
        { enabled: eE } = (0, g.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(s.Fragment, {
        children: [
            ec
                ? (0, l.jsx)(U.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: D,
                      onChangeAudioDevice: k
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(Y, {
                              selectSource: x,
                              sourceChanged: u,
                              onChangeSource: D,
                              selectedSource: n
                          }),
                          null != er ? (0, l.jsx)(X, { text: er }) : null,
                          null != n && null == er
                              ? (0, l.jsx)(J, {
                                    enabled: I,
                                    onChange: y,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            C && null != S
                ? (0, l.jsx)(Q, {
                      guildId: S,
                      onChange: V
                  })
                : null,
            null != en
                ? (0, l.jsx)(w.Z, { channel: en })
                : (0, l.jsx)(b.Z, {
                      guildId: S,
                      selectedChannelId: a,
                      onChangeSelectedChannelId: j
                  }),
            null != S && eu && ed ? (0, l.jsx)(q, { guildId: S }) : null,
            et ? (0, l.jsx)(X, { text: F.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED }) : null,
            el ? (0, l.jsx)(X, { text: F.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({ helpCenterLink: O.Z.getArticleURL(H.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            em &&
                (0, l.jsx)(N.Z, {
                    look: N.z.WARNING,
                    className: z.hardwareWarning,
                    children: F.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                        onClick: () => {
                            R(), c.Z.open(H.oAB.VOICE, null, { scrollPosition: W.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(B.Z, {
                selectedPreset: i,
                selectedFPS: t,
                selectedResolution: o,
                targetGuildPremiumTier: h,
                onClose: R,
                onFPSChange: L,
                onResolutionChange: M,
                onPresetChange: p,
                captureDeviceSelected: ec
            }),
            eE &&
                (0, l.jsx)($, {
                    enabled: f,
                    onChange: K
                }),
            eo
        ]
    });
}

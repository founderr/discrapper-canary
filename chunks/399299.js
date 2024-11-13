n.d(t, {
    Z: function () {
        return q;
    }
});
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(230711),
    d = n(812206),
    u = n(605436),
    f = n(600164),
    h = n(594190),
    m = n(925329),
    x = n(565138),
    g = n(977059),
    p = n(695346),
    v = n(494620),
    j = n(592125),
    C = n(650774),
    S = n(430824),
    _ = n(131951),
    Z = n(944486),
    I = n(594174),
    T = n(449224),
    N = n(626135),
    b = n(823379),
    w = n(63063),
    y = n(358085),
    E = n(653255),
    R = n(989941),
    M = n(618407),
    k = n(586290),
    A = n(233037),
    P = n(810013),
    B = n(537135),
    L = n(641115),
    G = n(143135),
    D = n(70722),
    O = n(981631),
    U = n(526761),
    F = n(388032),
    H = n(264954),
    W = n(410894);
function V(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: i, onChangeSource: r } = e,
        s = (0, a.e7)([h.ZP, T.Z], () => ((0, y.isWindows)() ? (0, R.Z)(h.ZP, T.Z) : null)),
        c = (0, a.e7)([d.Z], () => ((null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null)),
        u = (0, a.e7)([h.ZP], () => h.ZP.getRunningGames()),
        f = (0, a.Wu)([d.Z], () => u.map((e) => (null != e.id ? d.Z.getApplication(e.id) : null)).filter(b.lm), [u]),
        x = null;
    if ((null != t ? (x = t.name) : null != s && (x = s.name), null == x)) return null;
    let g = (0, G.Z)(s, t, u),
        p = i
            ? f.find((e) => {
                  let { id: t } = e;
                  return t === (null == g ? void 0 : g.id);
              })
            : c,
        v = null != t && t.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
    return (0, l.jsx)(o.FormItem, {
        title: F.intl.string(F.t.TC7Ev7),
        className: W.modalContent,
        titleClassName: W.formItemTitleVerySlim,
        children: (0, l.jsxs)(B.Z, {
            children: [
                null != p
                    ? (0, l.jsx)(m.Z, {
                          game: p,
                          size: m.Z.Sizes.XSMALL,
                          className: H.selectedIcon
                      })
                    : (0, l.jsx)(v, { className: H.selectedIcon }),
                (0, l.jsx)('span', {
                    className: H.ellipsisText,
                    children: x
                }),
                n
                    ? (0, l.jsx)(o.Button, {
                          className: H.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: r,
                          children: F.intl.string(F.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function z(e) {
    let { onChange: t, guildId: n } = e,
        i = (0, a.e7)([S.Z], () => S.Z.getGuild(n));
    return null == i
        ? (t(), null)
        : (0, l.jsx)(o.FormItem, {
              title: F.intl.string(F.t.WC3u3t),
              className: W.modalContent,
              titleClassName: W.formItemTitle,
              children: (0, l.jsxs)(B.Z, {
                  children: [
                      (0, l.jsx)(x.Z, {
                          guild: i,
                          size: x.Z.Sizes.SMALLER,
                          className: H.selectedIcon
                      }),
                      (0, l.jsx)('span', {
                          className: H.ellipsisText,
                          children: i.toString()
                      }),
                      (0, l.jsx)(o.Button, {
                          className: H.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: t,
                          children: F.intl.string(F.t.GEgsAw)
                      })
                  ]
              })
          });
}
function K(e) {
    let { text: t } = e;
    return (0, l.jsxs)(f.Z, {
        align: f.Z.Align.CENTER,
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
                children: t
            })
        ]
    });
}
function Y(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount(t)) && void 0 !== e ? e : 0;
        }),
        r = p.eo.useSetting(),
        c = i.useCallback((e, t) => {
            p.eo.updateSetting(t), N.default.track(O.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
        }, []);
    return n >= 2 && n <= D.tB
        ? (0, l.jsx)(o.FormItem, {
              className: s()(W.modalContent, H.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  value: !!r,
                  type: o.Checkbox.Types.INVERTED,
                  onChange: c,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: F.intl.string(F.t.Cef4t7)
                  })
              })
          })
        : null;
}
function X(e) {
    let { enabled: t, onChange: n, screen: r } = e,
        a = i.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, l.jsx)(o.FormItem, {
        className: s()(W.modalContent, H.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: r ? F.intl.string(F.t['5Adrtb']) : F.intl.string(F.t.gRpbRE)
            })
        })
    });
}
function J(e) {
    let { enabled: t, onChange: n } = e,
        r = i.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, l.jsx)(o.FormItem, {
        className: s()(W.modalContent, H.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: r,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: F.intl.string(F.t.JE73jI)
            })
        })
    });
}
function q(e) {
    let { selectedSource: t, selectedFPS: n, selectedChannelId: r, selectedPreset: s, selectedResolution: o, sourceChanged: d, selectedGuildId: f, targetGuildPremiumTier: h, selectSource: m, selectGuild: x, sound: p, previewDisabled: C, onClose: S, onChangeSelectedFPS: T, onChangeSelectedResolution: N, onChangeSelectedPreset: b, onChangeSelectedChannelId: y, onChangeSource: R, onChangeAudioDevice: B, onChangeGuild: G, onChangeSound: D, onChangePreviewDisabled: W } = e,
        q = (0, a.e7)([Z.Z, j.Z], () => j.Z.getChannel(Z.Z.getVoiceChannelId())),
        Q = (0, a.e7)([E.Z], () => E.Z.GPUDriversOutdated),
        $ = (0, a.e7)([E.Z], () => E.Z.problematicGPUDriver),
        ee = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
        et = (0, M.Z)();
    null != t && t.id.startsWith('screen') && !_.Z.supportsScreenSoundshare() && (et = F.intl.string(F.t['1b0Gm5']));
    let en = !!(null == t ? void 0 : t.id.startsWith('camera')),
        el = null != ee && ee.verified && !ee.bot,
        ei = null != q && !(0, u.Yk)(q),
        er = !(0, a.e7)([_.Z], () => _.Z.getHardwareEncoding()),
        { enabled: es } = (0, g.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            en
                ? (0, l.jsx)(k.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: R,
                      onChangeAudioDevice: B
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(V, {
                              selectSource: m,
                              sourceChanged: d,
                              onChangeSource: R,
                              selectedSource: t
                          }),
                          null != et ? (0, l.jsx)(K, { text: et }) : null,
                          null != t && null == et
                              ? (0, l.jsx)(X, {
                                    enabled: p,
                                    onChange: D,
                                    screen: t.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            x && null != f
                ? (0, l.jsx)(z, {
                      guildId: f,
                      onChange: G
                  })
                : null,
            null != q
                ? (0, l.jsx)(P.Z, { channel: q })
                : (0, l.jsx)(A.Z, {
                      guildId: f,
                      selectedChannelId: r,
                      onChangeSelectedChannelId: y
                  }),
            null != f && el && ei ? (0, l.jsx)(Y, { guildId: f }) : null,
            Q ? (0, l.jsx)(K, { text: F.intl.string(F.t.q65tS0) }) : null,
            $ ? (0, l.jsx)(K, { text: F.intl.format(F.t.RrLvub, { helpCenterLink: w.Z.getArticleURL(O.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            er &&
                (0, l.jsx)(v.Z, {
                    look: v.z.WARNING,
                    className: H.hardwareWarning,
                    children: F.intl.format(F.t.zCLXws, {
                        onClick: () => {
                            S(), c.Z.open(O.oAB.VOICE, null, { scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(L.Z, {
                selectedPreset: s,
                selectedFPS: n,
                selectedResolution: o,
                targetGuildPremiumTier: h,
                onClose: S,
                onFPSChange: T,
                onResolutionChange: N,
                onPresetChange: b,
                captureDeviceSelected: en
            }),
            es &&
                (0, l.jsx)(J, {
                    enabled: C,
                    onChange: W
                })
        ]
    });
}

n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(224706),
    u = n(225433),
    m = n(570928),
    h = n(594190),
    g = n(320724),
    p = n(297700),
    x = n(77498),
    S = n(283595),
    T = n(626135),
    E = n(251625),
    C = n(358085),
    _ = n(210887),
    f = n(981631),
    I = n(388032),
    N = n(621360),
    A = n(616926),
    b = n(652849),
    v = n(684309),
    j = n(232186);
let O = a.ZP.connectStores([_.Z], () => ({ theme: _.Z.theme }))(c.EmptyState),
    R = (0, C.isWindows)();
function P(e) {
    let { onClose: t } = e,
        n = (0, a.e7)([h.ZP], () => h.ZP.getCandidateGames()),
        [r, o] = s.useState(null),
        u = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, i.jsxs)(c.Dialog, {
        className: l()(N.addGamePopout, A.elevationBorderHigh),
        'aria-label': I.intl.string(I.t.GTCx0t),
        children: [
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: I.intl.string(I.t.XqMe3N),
                value: r,
                options: u,
                onChange: function (e) {
                    o(e);
                },
                renderOptionLabel: (e) =>
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        lineClamp: 1,
                        children: e.label
                    })
            }),
            (0, i.jsx)(c.FormDivider, { className: l()(j.marginTop8, j.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: l()(N.actions, b.horizontal),
                children: [
                    (0, i.jsx)(c.Button, {
                        className: N.cancelButton,
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: t,
                        children: I.intl.string(I.t['ETE/oK'])
                    }),
                    (0, i.jsx)(c.Button, {
                        disabled: null == r,
                        onClick: function () {
                            if (null != r) d.Z.addGame(r.pid, r.name), t();
                        },
                        children: I.intl.string(I.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function D(e) {
    var t;
    let { rawGame: n, nowPlaying: r = !1, isOverride: g } = e,
        E = (0, a.cj)([x.Z, h.ZP, S.Z], () => (0, h.FZ)(n)),
        [C, _] = s.useState(!1),
        [A, j] = s.useState(null !== (t = E.name) && void 0 !== t ? t : '???'),
        O = l()(b.flexCenter, {
            [N.game]: !r,
            [N.activeGame]: r,
            [v.card]: !r,
            [N.nowPlaying]: null != E && r
        });
    function P() {
        d.Z.deleteEntry(E);
    }
    function D() {
        E.name !== A && d.Z.editName(E, A);
    }
    function y(e) {
        13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
    }
    function B() {
        d.Z.toggleDetection(E);
    }
    function L() {
        if (C) return;
        let e = null != E.id ? x.Z.getDetectableGame(E.id) : null;
        T.default.track(f.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: E.name
        }),
            (0, c.showToast)((0, c.createToast)(I.intl.formatToPlainString(I.t['6klMOj'], { gameName: E.name }), c.ToastType.SUCCESS)),
            _(!0);
    }
    return (0, i.jsxs)('div', {
        className: O,
        children: [
            (0, i.jsxs)('div', {
                className: l()(N.gameNameLastPlayed, b.vertical),
                children: [
                    E.verified && !g
                        ? (0, i.jsxs)('div', {
                              className: N.detectedApplication,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: N.gameName,
                                      children: E.name
                                  }),
                                  (0, i.jsx)(c.Tooltip, {
                                      text: I.intl.string(I.t['4PJP5u']),
                                      children: (e) =>
                                          (0, i.jsx)(p.Z, {
                                              className: N.gameVerifiedIcon,
                                              size: 18,
                                              color: o.Z.unsafe_rawColors.BRAND_500.css,
                                              ...e,
                                              children: (0, i.jsx)(c.CheckmarkSmallIcon, {
                                                  size: 'custom',
                                                  width: 18,
                                                  height: 18,
                                                  color: o.Z.unsafe_rawColors.WHITE_500.css
                                              })
                                          })
                                  })
                              ]
                          })
                        : (0, i.jsx)('input', {
                              className: l()(N.gameName, N.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: A,
                              onBlur: D,
                              onKeyDown: y,
                              onChange: (e) => j(e.target.value)
                          }),
                    (function () {
                        let e;
                        let { played: t, exePath: n } = E;
                        return (
                            r ? (e = I.intl.string(I.t.VbV5dn)) : null != t && '' !== t && (e = I.intl.format(I.t.gGeOEx, { when: t })),
                            (0, i.jsx)('div', {
                                className: N.lastPlayed,
                                children: (0, i.jsx)(m.Z, {
                                    hoverText: null != n && '' !== n ? n.toUpperCase() : '',
                                    children: e
                                })
                            })
                        );
                    })()
                ]
            }),
            g
                ? null
                : C
                  ? null
                  : (0, i.jsx)('div', {
                        className: l()(b.flexCenter, b.noWrap, b.justifyBetween, N.toggleContainer),
                        children: (0, i.jsx)(c.Tooltip, {
                            text: I.intl.string(I.t['y0B+lp']),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.Clickable, {
                                    'aria-label': I.intl.string(I.t['y0B+lp']),
                                    className: N.toggleIcon,
                                    onClick: L,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    children: (0, i.jsx)(c.FlagIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: N.toggleIconOn,
                                        colorClass: N.fill
                                    })
                                });
                            }
                        })
                    }),
            (function () {
                let { detectable: e } = E,
                    t = e
                        ? (0, i.jsx)(c.EyeIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: N.toggleIconOn,
                              colorClass: N.fill
                          })
                        : (0, i.jsx)(c.EyeSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: N.toggleIconOff,
                              colorClass: N.fill
                          });
                return (0, i.jsx)('div', {
                    className: l()(b.flexCenter, b.noWrap, b.justifyBetween, N.toggleContainer),
                    children: (0, i.jsx)(c.Tooltip, {
                        text: I.intl.string(I.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: s } = e;
                            return (0, i.jsx)(c.Clickable, {
                                'aria-label': I.intl.string(I.t.QmitzM),
                                className: N.toggleIcon,
                                onClick: B,
                                onMouseEnter: n,
                                onMouseLeave: s,
                                children: t
                            });
                        }
                    })
                });
            })(),
            (function () {
                if (!R) return null;
                let { overlay: e, overlayWarn: t } = E,
                    n = e
                        ? (0, i.jsx)(c.ScreenIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: N.toggleIconOn,
                              colorClass: N.fill
                          })
                        : (0, i.jsx)(c.ScreenSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: N.toggleIconOff,
                              colorClass: N.fill
                          }),
                    s = t
                        ? (0, i.jsx)(c.Tooltip, {
                              text: I.intl.string(I.t.Vfw2Ly),
                              children: (e) =>
                                  (0, i.jsx)('i', {
                                      className: N.overlayWarningIcon,
                                      ...e
                                  })
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: l()(b.flexCenter, b.noWrap, b.justifyBetween, N.toggleContainer),
                    children: [
                        s,
                        (0, i.jsx)(c.Tooltip, {
                            text: I.intl.string(I.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: s, onMouseLeave: r } = t;
                                return (0, i.jsx)(c.Clickable, {
                                    'aria-label': I.intl.string(I.t['1+O+Tk']),
                                    className: N.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return (t = !e), void d.Z.toggleOverlay(E, t);
                                    },
                                    onMouseEnter: s,
                                    onMouseLeave: r,
                                    children: n
                                });
                            }
                        })
                    ]
                });
            })(),
            !r || g
                ? (0, i.jsx)(u.Z, {
                      className: N.removeGame,
                      onClick: P
                  })
                : null
        ]
    });
}
function y() {
    return (0, i.jsx)('div', {
        className: l()(b.flexCenter, N.notDetected, N.activeGame),
        children: (0, i.jsxs)('div', {
            className: l()(N.gameNameLastPlayed, b.vertical),
            children: [
                (0, i.jsx)('div', {
                    className: N.gameName,
                    children: I.intl.string(I.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: N.lastPlayed,
                    children: I.intl.string(I.t.T5Ilm5)
                })
            ]
        })
    });
}
function B(e) {
    let { children: t } = e;
    return (0, i.jsxs)(O, {
        className: j.marginTop40,
        children: [
            (0, i.jsx)(c.EmptyStateImage, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250
            }),
            t
        ]
    });
}
let L = (0, E.oH)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
t.Z = function (e) {
    let { className: t, showHeader: n = !0 } = e,
        r = (0, a.Wu)([h.ZP], () => h.ZP.getGamesSeen(!0)),
        { runningGame: o, overrideExePaths: d } = (0, a.cj)([h.ZP], () => ({
            runningGame: h.ZP.getVisibleGame(),
            overrideExePaths: L(...h.ZP.getOverrides())
        }));
    return (
        s.useEffect(() => ((0, g.Ky)(), g.P7), []),
        (0, i.jsxs)(c.FormSection, {
            tag: 'h1',
            title: n ? I.intl.string(I.t.AVDyEh) : null,
            className: t,
            children: [
                null != o
                    ? (0, i.jsx)(
                          D,
                          {
                              rawGame: o,
                              isOverride: d.has(o.exePath),
                              nowPlaying: !0
                          },
                          (0, h.rH)(o)
                      )
                    : (0, i.jsx)(y, {}),
                (0, i.jsxs)('div', {
                    className: l()(N.nowPlayingAdd, j.marginReset, j.marginTop8, j.marginBottom20),
                    children: [
                        (0, i.jsx)('span', { children: I.intl.string(I.t.xwhoqK) }),
                        (0, i.jsx)(c.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, i.jsx)(P, { onClose: t });
                            },
                            align: 'center',
                            position: 'bottom',
                            children: (e) =>
                                (0, i.jsx)(c.Button, {
                                    ...e,
                                    look: c.ButtonLooks.LINK,
                                    size: c.ButtonSizes.MIN,
                                    color: c.ButtonColors.LINK,
                                    children: I.intl.string(I.t.GjgdXV)
                                })
                        })
                    ]
                }),
                0 === r.length
                    ? (0, i.jsx)(B, { children: (0, i.jsx)(c.EmptyStateText, { children: I.intl.string(I.t['1yiJws']) }) })
                    : (0, i.jsxs)(c.FormSection, {
                          className: j.marginTop40,
                          children: [
                              (0, i.jsx)(c.FormTitle, {
                                  className: j.marginBottom4,
                                  children: I.intl.string(I.t.jCOdv7)
                              }),
                              (0, i.jsx)(c.FormText, {
                                  type: c.FormTextTypes.DESCRIPTION,
                                  children: I.intl.format(I.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                              }),
                              r.map((e) =>
                                  (0, i.jsx)(
                                      D,
                                      {
                                          rawGame: e,
                                          isOverride: d.has(e.exePath)
                                      },
                                      (0, h.rH)(e)
                                  )
                              )
                          ]
                      })
            ]
        })
    );
};

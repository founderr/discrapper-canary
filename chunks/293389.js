t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(692547),
    c = t(481060),
    d = t(224706),
    _ = t(225433),
    u = t(570928),
    E = t(594190),
    T = t(320724),
    S = t(297700),
    I = t(77498),
    N = t(283595),
    m = t(626135),
    A = t(251625),
    C = t(358085),
    g = t(210887),
    h = t(981631),
    O = t(689938),
    p = t(545217),
    R = t(852401),
    x = t(739017),
    f = t(869042),
    M = t(113207);
let D = o.ZP.connectStores([g.Z], () => ({ theme: g.Z.theme }))(c.EmptyState),
    P = (0, C.isWindows)();
function L(e) {
    let { onClose: s } = e,
        t = (0, o.e7)([E.ZP], () => E.ZP.getCandidateGames()),
        [i, l] = a.useState(null),
        _ = t.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, n.jsxs)(c.Dialog, {
        className: r()(p.addGamePopout, R.elevationBorderHigh),
        'aria-label': O.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
        children: [
            (0, n.jsx)(c.SearchableSelect, {
                placeholder: O.Z.Messages.SELECT,
                value: i,
                options: _,
                onChange: function (e) {
                    l(e);
                },
                renderOptionLabel: (e) =>
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        lineClamp: 1,
                        children: e.label
                    })
            }),
            (0, n.jsx)(c.FormDivider, { className: r()(M.marginTop8, M.marginBottom8) }),
            (0, n.jsxs)('div', {
                className: r()(p.actions, x.horizontal),
                children: [
                    (0, n.jsx)(c.Button, {
                        className: p.cancelButton,
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: s,
                        children: O.Z.Messages.CANCEL
                    }),
                    (0, n.jsx)(c.Button, {
                        disabled: null == i,
                        onClick: function () {
                            if (null != i) d.Z.addGame(i.pid, i.name), s();
                        },
                        children: O.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME
                    })
                ]
            })
        ]
    });
}
function b(e) {
    var s;
    let { rawGame: t, nowPlaying: i = !1, isOverride: T } = e,
        A = (0, o.cj)([I.Z, E.ZP, N.Z], () => (0, E.FZ)(t)),
        [C, g] = a.useState(!1),
        [R, M] = a.useState(null !== (s = A.name) && void 0 !== s ? s : '???'),
        D = r()(x.flexCenter, {
            [p.game]: !i,
            [p.activeGame]: i,
            [f.card]: !i,
            [p.nowPlaying]: null != A && i
        });
    function L() {
        d.Z.deleteEntry(A);
    }
    function b() {
        A.name !== R && d.Z.editName(A, R);
    }
    function Z(e) {
        13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
    }
    function v() {
        d.Z.toggleDetection(A);
    }
    function j() {
        if (C) return;
        let e = null != A.id ? I.Z.getDetectableGame(A.id) : null;
        m.default.track(h.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: A.name
        }),
            (0, c.showToast)((0, c.createToast)(O.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({ gameName: A.name }), c.ToastType.SUCCESS)),
            g(!0);
    }
    return (0, n.jsxs)('div', {
        className: D,
        children: [
            (0, n.jsxs)('div', {
                className: r()(p.gameNameLastPlayed, x.vertical),
                children: [
                    A.verified && !T
                        ? (0, n.jsxs)('div', {
                              className: p.detectedApplication,
                              children: [
                                  (0, n.jsx)('div', {
                                      className: p.gameName,
                                      children: A.name
                                  }),
                                  (0, n.jsx)(c.Tooltip, {
                                      text: O.Z.Messages.SETTINGS_GAMES_VERIFIED_ICON,
                                      children: (e) =>
                                          (0, n.jsx)(S.Z, {
                                              className: p.gameVerifiedIcon,
                                              size: 18,
                                              color: l.Z.unsafe_rawColors.BRAND_500.css,
                                              ...e,
                                              children: (0, n.jsx)(c.CheckmarkSmallIcon, {
                                                  size: 'custom',
                                                  width: 18,
                                                  height: 18,
                                                  color: l.Z.unsafe_rawColors.WHITE_500.css
                                              })
                                          })
                                  })
                              ]
                          })
                        : (0, n.jsx)('input', {
                              className: r()(p.gameName, p.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: R,
                              onBlur: b,
                              onKeyDown: Z,
                              onChange: (e) => M(e.target.value)
                          }),
                    (function () {
                        let e;
                        let { played: s, exePath: t } = A;
                        return (
                            i ? (e = O.Z.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE) : null != s && '' !== s && (e = O.Z.Messages.SETTINGS_GAMES_LAST_PLAYED.format({ when: s })),
                            (0, n.jsx)('div', {
                                className: p.lastPlayed,
                                children: (0, n.jsx)(u.Z, {
                                    hoverText: null != t && '' !== t ? t.toUpperCase() : '',
                                    children: e
                                })
                            })
                        );
                    })()
                ]
            }),
            T
                ? null
                : C
                  ? null
                  : (0, n.jsx)('div', {
                        className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
                        children: (0, n.jsx)(c.Tooltip, {
                            text: O.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
                            children: (e) => {
                                let { onMouseEnter: s, onMouseLeave: t } = e;
                                return (0, n.jsx)(c.Clickable, {
                                    'aria-label': O.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
                                    className: p.toggleIcon,
                                    onClick: j,
                                    onMouseEnter: s,
                                    onMouseLeave: t,
                                    children: (0, n.jsx)(c.FlagIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: p.toggleIconOn,
                                        colorClass: p.fill
                                    })
                                });
                            }
                        })
                    }),
            (function () {
                let { detectable: e } = A,
                    s = e
                        ? (0, n.jsx)(c.EyeIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.toggleIconOn,
                              colorClass: p.fill
                          })
                        : (0, n.jsx)(c.EyeSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.toggleIconOff,
                              colorClass: p.fill
                          });
                return (0, n.jsx)('div', {
                    className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
                    children: (0, n.jsx)(c.Tooltip, {
                        text: O.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: a } = e;
                            return (0, n.jsx)(c.Clickable, {
                                'aria-label': O.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
                                className: p.toggleIcon,
                                onClick: v,
                                onMouseEnter: t,
                                onMouseLeave: a,
                                children: s
                            });
                        }
                    })
                });
            })(),
            (function () {
                if (!P) return null;
                let { overlay: e, overlayWarn: s } = A,
                    t = e
                        ? (0, n.jsx)(c.ScreenIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.toggleIconOn,
                              colorClass: p.fill
                          })
                        : (0, n.jsx)(c.ScreenSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.toggleIconOff,
                              colorClass: p.fill
                          }),
                    a = s
                        ? (0, n.jsx)(c.Tooltip, {
                              text: O.Z.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
                              children: (e) =>
                                  (0, n.jsx)('i', {
                                      className: p.overlayWarningIcon,
                                      ...e
                                  })
                          })
                        : null;
                return (0, n.jsxs)('div', {
                    className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
                    children: [
                        a,
                        (0, n.jsx)(c.Tooltip, {
                            text: O.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
                            children: (s) => {
                                let { onMouseEnter: a, onMouseLeave: i } = s;
                                return (0, n.jsx)(c.Clickable, {
                                    'aria-label': O.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
                                    className: p.toggleIcon,
                                    onClick: () => {
                                        var s;
                                        return (s = !e), void d.Z.toggleOverlay(A, s);
                                    },
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    children: t
                                });
                            }
                        })
                    ]
                });
            })(),
            !i || T
                ? (0, n.jsx)(_.Z, {
                      className: p.removeGame,
                      onClick: L
                  })
                : null
        ]
    });
}
function Z() {
    return (0, n.jsx)('div', {
        className: r()(x.flexCenter, p.notDetected, p.activeGame),
        children: (0, n.jsxs)('div', {
            className: r()(p.gameNameLastPlayed, x.vertical),
            children: [
                (0, n.jsx)('div', {
                    className: p.gameName,
                    children: O.Z.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
                }),
                (0, n.jsx)('div', {
                    className: p.lastPlayed,
                    children: O.Z.Messages.SETTINGS_GAMES_NOT_PLAYING
                })
            ]
        })
    });
}
function v(e) {
    let { children: s } = e;
    return (0, n.jsxs)(D, {
        className: M.marginTop40,
        children: [
            (0, n.jsx)(c.EmptyStateImage, {
                darkSrc: t(879601),
                lightSrc: t(889000),
                width: 430,
                height: 250
            }),
            s
        ]
    });
}
let j = (0, A.oH)(function () {
    for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
    return new Set(s.map((e) => e.exePath));
});
s.Z = function (e) {
    let { className: s, showHeader: t = !0 } = e,
        i = (0, o.Wu)([E.ZP], () => E.ZP.getGamesSeen(!0)),
        { runningGame: l, overrideExePaths: d } = (0, o.cj)([E.ZP], () => ({
            runningGame: E.ZP.getVisibleGame(),
            overrideExePaths: j(...E.ZP.getOverrides())
        }));
    return (
        a.useEffect(() => ((0, T.Ky)(), T.P7), []),
        (0, n.jsxs)(c.FormSection, {
            tag: 'h1',
            title: t ? O.Z.Messages.REGISTERED_GAMES : null,
            className: s,
            children: [
                null != l
                    ? (0, n.jsx)(
                          b,
                          {
                              rawGame: l,
                              isOverride: d.has(l.exePath),
                              nowPlaying: !0
                          },
                          (0, E.rH)(l)
                      )
                    : (0, n.jsx)(Z, {}),
                (0, n.jsxs)('div', {
                    className: r()(p.nowPlayingAdd, M.marginReset, M.marginTop8, M.marginBottom20),
                    children: [
                        (0, n.jsx)('span', { children: O.Z.Messages.SETTINGS_GAMES_NOT_SEEING_GAME }),
                        (0, n.jsx)(c.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: s } = e;
                                return (0, n.jsx)(L, { onClose: s });
                            },
                            align: 'center',
                            position: 'bottom',
                            children: (e) =>
                                (0, n.jsx)(c.Button, {
                                    ...e,
                                    look: c.ButtonLooks.LINK,
                                    size: c.ButtonSizes.MIN,
                                    color: c.ButtonColors.LINK,
                                    children: O.Z.Messages.SETTINGS_GAMES_ADD_GAME
                                })
                        })
                    ]
                }),
                0 === i.length
                    ? (0, n.jsx)(v, { children: (0, n.jsx)(c.EmptyStateText, { children: O.Z.Messages.SETTINGS_GAMES_NO_GAMES_HEADER }) })
                    : (0, n.jsxs)(c.FormSection, {
                          className: M.marginTop40,
                          children: [
                              (0, n.jsx)(c.FormTitle, {
                                  className: M.marginBottom4,
                                  children: O.Z.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
                              }),
                              (0, n.jsx)(c.FormText, {
                                  type: c.FormTextTypes.DESCRIPTION,
                                  children: O.Z.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({ igdbLink: 'https://www.igdb.com/about' })
                              }),
                              i.map((e) =>
                                  (0, n.jsx)(
                                      b,
                                      {
                                          rawGame: e,
                                          isOverride: d.has(e.exePath)
                                      },
                                      (0, E.rH)(e)
                                  )
                              )
                          ]
                      })
            ]
        })
    );
};

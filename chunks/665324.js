n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(525654),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(232567),
    h = n(596454),
    g = n(410030),
    x = n(623624),
    p = n(357156),
    f = n(208049),
    C = n(763296),
    v = n(22382),
    _ = n(747071),
    I = n(286654),
    N = n(171368),
    T = n(430824),
    j = n(594174),
    b = n(15385),
    S = n(768581),
    E = n(267642),
    R = n(358085),
    y = n(51144),
    Z = n(999382),
    A = n(70409),
    L = n(981631),
    D = n(710111),
    O = n(388032),
    k = n(275715);
let P = R.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function M() {
    let e = (0, c.e7)([Z.Z], () => Z.Z.getProps().guild);
    return null == e
        ? null
        : (0, i.jsx)(u.FormSection, {
              tag: u.FormTitleTags.H1,
              title: O.intl.string(O.t.OWQNYm),
              children: (0, i.jsx)(F, { guild: e })
          });
}
function w(e) {
    let { children: t } = e;
    return (0, i.jsx)(u.Heading, {
        className: k.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function B(e) {
    let { currentTier: t, availableSounds: n, guildId: r } = e,
        l = T.Z.getGuild(r),
        s = (0, E.U2)(t, l);
    return 0 === t
        ? (0, i.jsx)(i.Fragment, {
              children: O.intl.format(O.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: s
              })
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.Tooltip, {
                      text: O.intl.formatToPlainString(O.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, i.jsx)(u.Clickable, {
                              className: k.boostingIconWrapper,
                              onClick: () => {
                                  var e;
                                  return (
                                      (e = r),
                                      void (0, x.f)({
                                          guildId: e,
                                          location: {
                                              section: L.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                              object: L.qAy.BOOST_GEM_ICON
                                          }
                                      })
                                  );
                              },
                              tabIndex: -1,
                              children: (0, i.jsx)(b.Z, { ...e })
                          })
                  }),
                  O.intl.format(O.t.HHCdvb, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t
                  })
              ]
          });
}
let U = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, ...l } = e,
            [s, a] = r.useState(!1),
            o = r.useMemo(() => new d.V7(), []),
            c = r.useCallback(() => {
                o.stop(), a(!0);
            }, [o]),
            m = r.useCallback(() => {
                o.start(200, () => a(!1));
            }, [o]);
        return (0, i.jsx)(u.Popout, {
            shouldShow: s,
            renderPopout: (e) =>
                (0, i.jsx)(u.Dialog, {
                    className: k.browserUnsupportedDialog,
                    onMouseEnter: c,
                    onMouseLeave: m,
                    children: t(e)
                }),
            ...l,
            children: (e) => n(e)
        });
    },
    G = () =>
        (0, i.jsx)(U, {
            renderPopoutBody: () =>
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: O.intl.format(O.t.bGXPVl, {})
                }),
            renderPopoutChildren: (e) =>
                (0, i.jsx)(u.Button, {
                    ...e,
                    disabled: !0,
                    children: O.intl.string(O.t['/uNYPD'])
                })
        });
function F(e) {
    let { guild: t } = e,
        [l, s] = (0, c.Wu)([C.Z], () => {
            var e;
            return [null !== (e = C.Z.getSoundsForGuild(t.id)) && void 0 !== e ? e : D.Hy, C.Z.isFetchingSounds() || C.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: a } = (0, p.XJ)(t),
        o = r.useRef(null),
        d = (0, g.ZP)(),
        m = t.premiumTier,
        h = (0, E.yw)(t, l, m);
    r.useEffect(() => {
        (0, f.w)();
    }, []);
    let x = r.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, v.Z)(t.soundId))), e), {}), [l]),
        I = 0 === l.length && !s;
    function N(e) {
        var t;
        null === (t = o.current) || void 0 === t || t.pause();
        let n = x[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, _.Z)(e.volume)), n.play());
    }
    r.useEffect(
        () => () => {
            var e;
            null === (e = o.current) || void 0 === e || e.pause();
        },
        []
    );
    if (s) return (0, i.jsx)(u.Spinner, {});
    let T = P
        ? (0, i.jsx)(u.Button, {
              onClick: function () {
                  (0, u.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('56184')]).then(n.bind(n, 758961));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              guildId: t.id
                          });
                  });
              },
              disabled: h <= 0 || !a,
              children: O.intl.string(O.t['/uNYPD'])
          })
        : (0, i.jsx)(G, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(u.Text, {
                        className: k.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: O.intl.string(O.t.BohnsL)
                    }),
                    (0, i.jsx)('div', {
                        className: k.buttons,
                        children: !I && T
                    })
                ]
            }),
            I
                ? (0, i.jsxs)(u.EmptyState, {
                      theme: d,
                      className: k.empty,
                      children: [
                          (0, i.jsx)(u.EmptyStateImage, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, i.jsx)(u.EmptyStateText, {
                              note: O.intl.string(O.t.ZhoSBA),
                              noteClassName: k.emptyText,
                              children: O.intl.string(O.t.I6P1p6)
                          }),
                          T
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.FormDivider, { className: k.divider }),
                          (0, i.jsx)(u.Heading, {
                              className: k.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, i.jsx)(B, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: h
                              })
                          }),
                          (0, i.jsx)(A.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === h
                          }),
                          (0, i.jsxs)('div', {
                              className: k.soundTable,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: k.tableHeaders,
                                      children: [(0, i.jsx)(w, { children: O.intl.string(O.t.sMOuub) }), (0, i.jsx)(w, { children: O.intl.string(O.t.lLFvlZ) }), (0, i.jsx)(w, { children: O.intl.string(O.t['85qMS0']) })]
                                  }),
                                  l.map((e) =>
                                      (0, i.jsx)(
                                          H,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: N
                                          },
                                          e.soundId
                                      )
                                  )
                              ]
                          })
                      ]
                  })
        ]
    });
}
function H(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: d, name: g, user: x, userId: C, emojiId: v, emojiName: _ } = t,
        T = (0, c.e7)([j.default], () => (null != x ? x : j.default.getUser(C)), [C, x]),
        { canManageGuildExpression: b } = (0, p.XJ)(o),
        E = r.useMemo(() => b(t), [t, b]),
        R = null != v || null != _,
        [Z, A] = r.useState(!1),
        D = (0, I.z)(t, o.id);
    async function P() {
        if (!Z) {
            A(!0);
            try {
                await (0, f.AA)(o.id, d);
            } catch {
                A(!1);
            }
        }
    }
    r.useEffect(() => {
        null == T && e();
        async function e() {
            await (0, m.PR)(C);
        }
    }, [T, C]);
    let M = r.useCallback(() => {
            null != T &&
                (0, N.openUserProfileModal)({
                    userId: T.id,
                    guildId: o.id,
                    analyticsLocation: { section: L.jXE.GUILD_SETTINGS_SOUNDBOARD }
                });
        }, [T, o.id]),
        w = y.ZP.useUserTag(T);
    return (0, i.jsxs)('div', {
        className: s()(k.row, { [k.active]: l }),
        children: [
            R
                ? (0, i.jsx)(h.Z, {
                      emojiId: v,
                      emojiName: _,
                      className: k.emoji
                  })
                : (0, i.jsx)(u.ImageIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: k.emoji
                  }),
            (0, i.jsx)(u.Clickable, {
                onClick: () => {
                    !Z && a(t);
                },
                onContextMenu: D,
                className: k.soundName,
                children: (0, i.jsxs)(u.Text, {
                    variant: 'text-sm/normal',
                    className: k.soundName,
                    children: [
                        g,
                        ' ',
                        (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: k.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != T &&
                (0, i.jsxs)(u.Clickable, {
                    className: k.uploader,
                    onClick: M,
                    children: [
                        (0, i.jsx)(u.Avatar, {
                            'aria-label': w,
                            size: u.AvatarSizes.SIZE_24,
                            className: k.uploaderAvatar,
                            src: (0, S.ov)(T, !1, 24)
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: w
                        })
                    ]
                }),
            E
                ? (0, i.jsxs)('div', {
                      className: k.soundEditContainer,
                      children: [
                          (0, i.jsx)(u.Clickable, {
                              className: k.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('56184')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  guildId: o.id,
                                                  existingSound: t
                                              });
                                      });
                              },
                              'aria-label': O.intl.string(O.t.bt75u7),
                              children: (0, i.jsx)(u.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: k.soundEditIcon
                              })
                          }),
                          (0, i.jsx)(u.Clickable, {
                              className: k.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.openModal)((e) =>
                                          (0, i.jsx)(u.ConfirmModal, {
                                              header: O.intl.formatToPlainString(O.t['PR/VbG'], { soundName: g }),
                                              confirmText: O.intl.string(O.t.oyYWHB),
                                              cancelText: O.intl.string(O.t['ETE/oK']),
                                              onConfirm: P,
                                              ...e,
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: 'text-md/normal',
                                                  children: O.intl.format(O.t['u6+CmJ'], { soundName: g })
                                              })
                                          })
                                      );
                              },
                              'aria-label': O.intl.string(O.t.N86XcH),
                              children: (0, i.jsx)(u.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: k.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

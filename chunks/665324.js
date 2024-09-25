n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120),
    n(724458);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(525654),
    o = n.n(l),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    _ = n(232567),
    I = n(596454),
    E = n(410030),
    T = n(623624),
    m = n(357156),
    N = n(208049),
    S = n(763296),
    g = n(22382),
    h = n(747071),
    C = n(286654),
    x = n(171368),
    p = n(430824),
    R = n(594174),
    L = n(15385),
    f = n(768581),
    O = n(267642),
    A = n(358085),
    M = n(999382),
    D = n(70409),
    v = n(981631),
    j = n(710111),
    Z = n(689938),
    b = n(275715);
let U = A.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function G() {
    let e = (0, c.e7)([M.Z], () => M.Z.getProps().guild);
    return null == e
        ? null
        : (0, s.jsx)(u.FormSection, {
              tag: u.FormTitleTags.H1,
              title: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
              children: (0, s.jsx)(k, { guild: e })
          });
}
function P(e) {
    let { children: t } = e;
    return (0, s.jsx)(u.Heading, {
        className: b.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function B(e) {
    let { currentTier: t, availableSounds: n, guildId: a } = e,
        i = p.Z.getGuild(a),
        r = (0, O.U2)(t, i);
    return 0 === t
        ? (0, s.jsx)(s.Fragment, {
              children: Z.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
                  slots: n,
                  totalSlots: r
              })
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(u.Tooltip, {
                      text: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({ currentBoostLevel: t }),
                      children: (e) =>
                          (0, s.jsx)(u.Clickable, {
                              className: b.boostingIconWrapper,
                              onClick: () => {
                                  var e;
                                  return (
                                      (e = a),
                                      void (0, T.f)({
                                          guildId: e,
                                          location: {
                                              section: v.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                              object: v.qAy.BOOST_GEM_ICON
                                          }
                                      })
                                  );
                              },
                              tabIndex: -1,
                              children: (0, s.jsx)(L.Z, { ...e })
                          })
                  }),
                  Z.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
                      slots: n,
                      totalSlots: r,
                      boostLevel: t
                  })
              ]
          });
}
let y = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, ...i } = e,
            [r, l] = a.useState(!1),
            o = a.useMemo(() => new d.V7(), []),
            c = a.useCallback(() => {
                o.stop(), l(!0);
            }, [o]),
            _ = a.useCallback(() => {
                o.start(200, () => l(!1));
            }, [o]);
        return (0, s.jsx)(u.Popout, {
            shouldShow: r,
            renderPopout: (e) =>
                (0, s.jsx)(u.Dialog, {
                    className: b.browserUnsupportedDialog,
                    onMouseEnter: c,
                    onMouseLeave: _,
                    children: t(e)
                }),
            ...i,
            children: (e) => n(e)
        });
    },
    F = () =>
        (0, s.jsx)(y, {
            renderPopoutBody: () =>
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
                }),
            renderPopoutChildren: (e) =>
                (0, s.jsx)(u.Button, {
                    ...e,
                    disabled: !0,
                    children: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
                })
        });
function k(e) {
    let { guild: t } = e,
        [i, r] = (0, c.Wu)([S.Z], () => {
            var e;
            return [null !== (e = S.Z.getSoundsForGuild(t.id)) && void 0 !== e ? e : j.Hy, S.Z.isFetchingSounds() || S.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: l } = (0, m.X)(t),
        o = a.useRef(null),
        d = (0, E.ZP)(),
        _ = t.premiumTier,
        I = (0, O.yw)(t, i, _);
    a.useEffect(() => {
        (0, N.w)();
    }, []);
    let T = a.useMemo(() => i.reduce((e, t) => ((e[t.soundId] = new Audio((0, g.Z)(t.soundId))), e), {}), [i]),
        C = 0 === i.length && !r;
    function x(e) {
        var t;
        null === (t = o.current) || void 0 === t || t.pause();
        let n = T[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, h.Z)(e.volume)), n.play());
    }
    a.useEffect(
        () => () => {
            var e;
            null === (e = o.current) || void 0 === e || e.pause();
        },
        []
    );
    if (r) return (0, s.jsx)(u.Spinner, {});
    let p = U
        ? (0, s.jsx)(u.Button, {
              onClick: function () {
                  (0, u.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('56184')]).then(n.bind(n, 758961));
                      return (n) =>
                          (0, s.jsx)(e, {
                              ...n,
                              guildId: t.id
                          });
                  });
              },
              disabled: I <= 0 || !l,
              children: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
          })
        : (0, s.jsx)(F, {});
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(u.Text, {
                        className: b.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
                    }),
                    (0, s.jsx)('div', {
                        className: b.buttons,
                        children: !C && p
                    })
                ]
            }),
            C
                ? (0, s.jsxs)(u.EmptyState, {
                      theme: d,
                      className: b.empty,
                      children: [
                          (0, s.jsx)(u.EmptyStateImage, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, s.jsx)(u.EmptyStateText, {
                              note: Z.Z.Messages.NO_SOUNDS,
                              noteClassName: b.emptyText,
                              children: Z.Z.Messages.NO_SOUNDS_TITLE
                          }),
                          p
                      ]
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(u.FormDivider, { className: b.divider }),
                          (0, s.jsx)(u.Heading, {
                              className: b.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, s.jsx)(B, {
                                  guildId: t.id,
                                  currentTier: _,
                                  availableSounds: I
                              })
                          }),
                          (0, s.jsx)(D.Z, {
                              guild: t,
                              numSounds: i.length,
                              isOutOfSlots: 0 === I
                          }),
                          (0, s.jsxs)('div', {
                              className: b.soundTable,
                              children: [
                                  (0, s.jsxs)('div', {
                                      className: b.tableHeaders,
                                      children: [(0, s.jsx)(P, { children: Z.Z.Messages.EMOJI }), (0, s.jsx)(P, { children: Z.Z.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN }), (0, s.jsx)(P, { children: Z.Z.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN })]
                                  }),
                                  i.map((e) =>
                                      (0, s.jsx)(
                                          w,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: x
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
function w(e) {
    let { sound: t, isPlaying: i, onPlaySound: l, guild: o } = e,
        { soundId: d, name: E, user: T, userId: S, emojiId: g, emojiName: h } = t,
        p = (0, c.e7)([R.default], () => (null != T ? T : R.default.getUser(S)), [S, T]),
        { canManageGuildExpression: L } = (0, m.X)(o),
        O = a.useMemo(() => L(t), [t, L]),
        A = null != g || null != h,
        [M, D] = a.useState(!1),
        j = (0, C.z)(t, o.id);
    async function U() {
        if (!M) {
            D(!0);
            try {
                await (0, N.AA)(o.id, d);
            } catch {
                D(!1);
            }
        }
    }
    a.useEffect(() => {
        null == p && e();
        async function e() {
            await (0, _.PR)(S);
        }
    }, [p, S]);
    let G = a.useCallback(() => {
        null != p &&
            (0, x.openUserProfileModal)({
                userId: p.id,
                guildId: o.id,
                analyticsLocation: { section: v.jXE.GUILD_SETTINGS_SOUNDBOARD }
            });
    }, [p, o.id]);
    return (0, s.jsxs)('div', {
        className: r()(b.row, { [b.active]: i }),
        children: [
            A
                ? (0, s.jsx)(I.Z, {
                      emojiId: g,
                      emojiName: h,
                      className: b.emoji
                  })
                : (0, s.jsx)(u.ImageIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: b.emoji
                  }),
            (0, s.jsx)(u.Clickable, {
                onClick: () => {
                    !M && l(t);
                },
                onContextMenu: j,
                className: b.soundName,
                children: (0, s.jsxs)(u.Text, {
                    variant: 'text-sm/normal',
                    className: b.soundName,
                    children: [
                        E,
                        ' ',
                        (0, s.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != p &&
                (0, s.jsxs)(u.Clickable, {
                    className: b.uploader,
                    onClick: G,
                    children: [
                        (0, s.jsx)(u.Avatar, {
                            'aria-label': null == p ? void 0 : p.username,
                            size: u.AvatarSizes.SIZE_24,
                            className: b.uploaderAvatar,
                            src: (0, f.ov)(p, !1, 24)
                        }),
                        (0, s.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: null == p ? void 0 : p.username
                        })
                    ]
                }),
            O
                ? (0, s.jsxs)('div', {
                      className: b.soundEditContainer,
                      children: [
                          (0, s.jsx)(u.Clickable, {
                              className: b.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('56184')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, s.jsx)(e, {
                                                  ...n,
                                                  guildId: o.id,
                                                  existingSound: t
                                              });
                                      });
                              },
                              'aria-label': Z.Z.Messages.EDIT,
                              children: (0, s.jsx)(u.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: b.soundEditIcon
                              })
                          }),
                          (0, s.jsx)(u.Clickable, {
                              className: b.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.openModal)((e) =>
                                          (0, s.jsx)(u.ConfirmModal, {
                                              header: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({ soundName: E }),
                                              confirmText: Z.Z.Messages.DELETE,
                                              cancelText: Z.Z.Messages.CANCEL,
                                              onConfirm: U,
                                              ...e,
                                              children: (0, s.jsx)(u.Text, {
                                                  variant: 'text-md/normal',
                                                  children: Z.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({ soundName: E })
                                              })
                                          })
                                      );
                              },
                              'aria-label': Z.Z.Messages.REMOVE,
                              children: (0, s.jsx)(u.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: b.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(348327),
    o = n.n(a),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    h = n(239091),
    g = n(596454),
    x = n(607070),
    p = n(933557),
    f = n(471445),
    C = n(339085),
    I = n(565138),
    _ = n(372769),
    N = n(621923),
    v = n(690221),
    T = n(524329),
    j = n(575258),
    S = n(514698),
    b = n(592125),
    E = n(4912),
    R = n(626135),
    Z = n(700785),
    A = n(434404),
    L = n(92160),
    y = n(981631),
    D = n(231338),
    O = n(388032),
    M = n(740380);
let P = 'WELCOME_CHANNEL',
    k = (e) => {
        var t;
        let l,
            { guildId: a, welcomeChannel: o, onEdit: x, onChannelReorder: I, isDropHovered: _, index: v } = e,
            [T, j] = r.useState(!1),
            R = r.useRef(null),
            A = (0, u.e7)([b.Z], () => b.Z.getChannel(o.channel_id)),
            L = (0, u.e7)([C.ZP], () => (null != o.emoji_id ? C.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            k = null != A && Z.Uu(y.Plq.VIEW_CHANNEL, A),
            w = null !== (t = (0, f.KS)(A)) && void 0 !== t ? t : m.TextIcon,
            B = (0, p.ZP)(A, !1),
            { homeSettingsEnabled: U } = (0, N.kZ)(a),
            [, G] = (0, c.c)({
                type: P,
                item: {
                    channel: o,
                    index: v
                },
                end: (e, t) => {
                    null != e && !t.didDrop() && I(e.channel, null, !0);
                }
            }),
            [, F] = (0, d.L)({
                accept: P,
                hover: (e) => {
                    I(e.channel, v, !1);
                },
                drop: (e) => {
                    I(e.channel, v, !0);
                }
            });
        return (
            r.useLayoutEffect(
                () => (
                    G(F(R)),
                    () => {
                        G(null), F(null);
                    }
                ),
                [G, F]
            ),
            (l = k
                ? null != L || null != o.emoji_name
                    ? (0, i.jsx)(g.Z, {
                          emojiId: null == L ? void 0 : L.id,
                          emojiName: null != L ? L.name : o.emoji_name,
                          animated: !!(null == L ? void 0 : L.animated)
                      })
                    : (0, i.jsx)(w, {
                          size: 'md',
                          color: 'currentColor',
                          className: M.channelIcon
                      })
                : (0, i.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: M.warningIcon
                  })),
            (0, i.jsxs)('div', {
                className: s()(M.welcomeChannel, { [M.dragging]: _ }),
                ref: R,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: a,
                                welcomeChannel: o,
                                onChannelReorder: I,
                                setShowConfirmModal: j,
                                onEdit: x,
                                index: v
                            });
                    });
                },
                children: [
                    l,
                    (0, i.jsxs)('div', {
                        className: M.channelDescriptionWrapper,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, i.jsxs)(m.Text, {
                                className: k ? void 0 : M.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, i.jsx)(w, {
                                        className: M.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)('span', { children: k ? B : O.intl.string(O.t.zFuCsL) })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(m.Button, {
                        color: m.Button.Colors.PRIMARY,
                        size: m.Button.Sizes.SMALL,
                        disabled: U,
                        onClick: () =>
                            (0, m.openModalLazy)(
                                async () => {
                                    let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            welcomeChannel: o,
                                            guildId: a,
                                            onSave: x
                                        });
                                },
                                { onCloseRequest: () => D.Vq }
                            ),
                        children: O.intl.string(O.t.bt75u7)
                    }),
                    T &&
                        (0, i.jsx)(S.Z, {
                            onConfirm: () => x(),
                            onCancel: () => j(!1),
                            channelId: o.channel_id
                        })
                ]
            })
        );
    };
t.Z = (e) => {
    var t;
    let { guild: l, showCreateModal: s } = e,
        { welcomeSettings: a, originalWelcomeSettings: c } = (0, u.e7)([j.Z], () => j.Z.getSettingsProps()),
        d = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
        [h, g] = r.useState(null),
        [p, f] = r.useState(!1),
        [C, S] = r.useState(!1),
        { description: b, channels: Z, enabled: P } = a,
        { homeSettingsEnabled: w } = (0, N.kZ)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : y.lds),
        B = () => {
            if (null != l) b !== c.description && ((0, T.Es)(l.id, { description: null == b ? void 0 : b.trim() }), f(!0));
        },
        U = (e) => {
            if (null != l) !o()(e, c.channels) && ((0, T.Es)(l.id, { channels: e }), f(!0));
        },
        G = (e) => {
            if (null != l) e !== c.enabled && ((0, T.Es)(l.id, { enabled: e }), S(!d), f(!0));
        },
        F = (e) => {
            if (null == e) return;
            let t = [...(null != Z ? Z : []), e];
            (0, T.VP)({ channels: t }), U(t);
        },
        H = (e) => (t) => {
            let n = [...(null != Z ? Z : [])];
            null == t ? n.splice(e, 1) : (n[e] = t), (0, T.VP)({ channels: n }), U(n), 0 === n.length && P && ((0, T.VP)({ enabled: !1 }), G(!1));
        },
        z = (e, t, n) => {
            if (null == Z) return;
            let i = Z.indexOf(e),
                r = [...Z];
            null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), (0, T.VP)({ channels: r })), n ? (U(r), g(null)) : g(t);
        },
        V = r.useRef(!1);
    r.useEffect(
        () => (
            null != l &&
                s &&
                (0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: l.id,
                                onSave: F
                            });
                    },
                    { onCloseRequest: () => D.Vq }
                ),
            () => {
                V.current = !0;
            }
        ),
        []
    ),
        r.useEffect(
            () => () => {
                if (V.current && p) {
                    let e = [],
                        t = [],
                        n = !1;
                    null == Z ||
                        Z.forEach((i) => {
                            e.push(i.description), t.push(i.channel_id), null != i.emoji_id && (n = !0);
                        }),
                        R.default.track(y.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                            guild_id: null == l ? void 0 : l.id,
                            options: e,
                            options_channel_ids: t,
                            guild_description: b,
                            has_custom_emojis: n,
                            is_enabled: P
                        });
                }
            },
            [p, Z, b, P, l, V]
        ),
        r.useEffect(() => () => (0, T.sm)(), []);
    let W = r.useCallback(() => {
        null != l && A.Z.open(l.id, y.pNK.ONBOARDING);
    }, [l]);
    return null == l
        ? null
        : (0, i.jsxs)(m.FormSection, {
              title: O.intl.string(O.t['2rkmDg']),
              tag: m.FormTitleTags.H1,
              children: [
                  w &&
                      (0, i.jsx)('div', {
                          className: M.notice,
                          children: (0, i.jsxs)(m.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, i.jsx)(E.Z, { className: M.noticeIcon }),
                                  O.intl.format(O.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, i.jsx)(v.Z, {
                                              onClick: W,
                                              children: e
                                          })
                                  })
                              ]
                          })
                      }),
                  (0, i.jsx)(m.Text, {
                      className: M.__invalid_description,
                      variant: 'text-sm/normal',
                      children: O.intl.string(O.t['w2d74+'])
                  }),
                  (0, i.jsx)(L.Z, {
                      enabled: P,
                      onPreview:
                          (null == Z ? void 0 : Z.length) === 0
                              ? void 0
                              : () => {
                                    null != l &&
                                        (0, m.openModalLazy)(async () => {
                                            let { default: e } = await n.e('90542').then(n.bind(n, 184782));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    guildId: l.id,
                                                    isPreview: !0
                                                });
                                        });
                                },
                      onToggle:
                          P || (null == Z ? void 0 : Z.length) !== 0
                              ? () => {
                                    G(!P);
                                }
                              : void 0,
                      animateStatus: C,
                      firstLine: P ? O.intl.string(O.t.JbB7Qk) : O.intl.string(O.t['/bd0Qk']),
                      secondLine: P ? O.intl.string(O.t['TA1g7+']) : O.intl.string(O.t.nc6r1N)
                  }),
                  (0, i.jsxs)('div', {
                      className: M.previewContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: M.welcomeHeader,
                              children: [
                                  (0, i.jsx)(I.Z, {
                                      size: I.Z.Sizes.LARGER,
                                      className: M.icon,
                                      guild: l,
                                      animate: !0,
                                      tabIndex: -1
                                  }),
                                  (0, i.jsx)(m.Heading, {
                                      className: M.welcomeTitle,
                                      variant: 'heading-xl/semibold',
                                      children: O.intl.format(O.t['0aydCA'], {
                                          guildName: l.name,
                                          guildNameHook: (e, t) =>
                                              (0, i.jsxs)(
                                                  'span',
                                                  {
                                                      children: [
                                                          (0, i.jsx)(_.Z, {
                                                              guild: l,
                                                              className: M.headerGuildBadge,
                                                              flowerStarClassName: M.flowerStar
                                                          }),
                                                          (0, i.jsx)('strong', { children: e })
                                                      ]
                                                  },
                                                  t
                                              )
                                      })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: M.descriptionWrapper,
                                      children: (0, i.jsx)(m.TextArea, {
                                          className: M.descriptionInput,
                                          placeholder: O.intl.string(O.t.qzZHaW),
                                          onChange: (e) => {
                                              (0, T.VP)({ description: e });
                                          },
                                          onBlur: () => {
                                              B();
                                          },
                                          onKeyDown: (e) => {
                                              e.keyCode === y.yXg.ENTER && e.preventDefault();
                                          },
                                          value: b,
                                          maxLength: 140,
                                          disabled: w
                                      })
                                  })
                              ]
                          }),
                          (0, i.jsx)(m.FormDivider, { className: M.divider }),
                          (0, i.jsxs)('div', {
                              className: M.welcomeChannels,
                              children: [
                                  (0, i.jsx)(m.FormTitle, { children: O.intl.string(O.t.euJXzc) }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      className: M.addChannelSubtext,
                                      children: O.intl.string(O.t.VOnnn5)
                                  }),
                                  null == Z
                                      ? void 0
                                      : Z.map((e, t) =>
                                            (0, i.jsx)(
                                                k,
                                                {
                                                    guildId: l.id,
                                                    welcomeChannel: e,
                                                    onEdit: H(t),
                                                    onChannelReorder: z,
                                                    isDropHovered: t === h,
                                                    index: t
                                                },
                                                t
                                            )
                                        ),
                                  (null == Z || Z.length < 5) &&
                                      (0, i.jsx)(m.Button, {
                                          onClick: () =>
                                              (0, m.openModalLazy)(
                                                  async () => {
                                                      let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                                      return (t) =>
                                                          (0, i.jsx)(e, {
                                                              ...t,
                                                              guildId: l.id,
                                                              onSave: F
                                                          });
                                                  },
                                                  { onCloseRequest: () => D.Vq }
                                              ),
                                          className: M.addChannelButton,
                                          disabled: w,
                                          color: m.Button.Colors.PRIMARY,
                                          children: O.intl.string(O.t.U1BDe3)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
};

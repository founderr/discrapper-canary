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
    v = n(565138),
    _ = n(372769),
    I = n(621923),
    N = n(690221),
    T = n(524329),
    j = n(575258),
    b = n(514698),
    S = n(592125),
    E = n(4912),
    R = n(626135),
    Z = n(700785),
    y = n(434404),
    A = n(92160),
    L = n(981631),
    D = n(231338),
    O = n(388032),
    k = n(740380);
let P = 'WELCOME_CHANNEL',
    M = (e) => {
        var t;
        let l,
            { guildId: a, welcomeChannel: o, onEdit: x, onChannelReorder: v, isDropHovered: _, index: N } = e,
            [T, j] = r.useState(!1),
            R = r.useRef(null),
            y = (0, u.e7)([S.Z], () => S.Z.getChannel(o.channel_id)),
            A = (0, u.e7)([C.ZP], () => (null != o.emoji_id ? C.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            M = null != y && Z.Uu(L.Plq.VIEW_CHANNEL, y),
            w = null !== (t = (0, f.KS)(y)) && void 0 !== t ? t : m.TextIcon,
            B = (0, p.ZP)(y, !1),
            { homeSettingsEnabled: U } = (0, I.kZ)(a),
            [, G] = (0, c.c)({
                type: P,
                item: {
                    channel: o,
                    index: N
                },
                end: (e, t) => {
                    null != e && !t.didDrop() && v(e.channel, null, !0);
                }
            }),
            [, F] = (0, d.L)({
                accept: P,
                hover: (e) => {
                    v(e.channel, N, !1);
                },
                drop: (e) => {
                    v(e.channel, N, !0);
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
            (l = M
                ? null != A || null != o.emoji_name
                    ? (0, i.jsx)(g.Z, {
                          emojiId: null == A ? void 0 : A.id,
                          emojiName: null != A ? A.name : o.emoji_name,
                          animated: !!(null == A ? void 0 : A.animated)
                      })
                    : (0, i.jsx)(w, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.channelIcon
                      })
                : (0, i.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: k.warningIcon
                  })),
            (0, i.jsxs)('div', {
                className: s()(k.welcomeChannel, { [k.dragging]: _ }),
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
                                onChannelReorder: v,
                                setShowConfirmModal: j,
                                onEdit: x,
                                index: N
                            });
                    });
                },
                children: [
                    l,
                    (0, i.jsxs)('div', {
                        className: k.channelDescriptionWrapper,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, i.jsxs)(m.Text, {
                                className: M ? void 0 : k.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, i.jsx)(w, {
                                        className: k.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)('span', { children: M ? B : O.intl.string(O.t.zFuCsL) })
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
                        (0, i.jsx)(b.Z, {
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
        [C, b] = r.useState(!1),
        { description: S, channels: Z, enabled: P } = a,
        { homeSettingsEnabled: w } = (0, I.kZ)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : L.lds),
        B = () => {
            if (null != l) S !== c.description && ((0, T.Es)(l.id, { description: null == S ? void 0 : S.trim() }), f(!0));
        },
        U = (e) => {
            if (null != l) !o()(e, c.channels) && ((0, T.Es)(l.id, { channels: e }), f(!0));
        },
        G = (e) => {
            if (null != l) e !== c.enabled && ((0, T.Es)(l.id, { enabled: e }), b(!d), f(!0));
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
        W = r.useRef(!1);
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
                W.current = !0;
            }
        ),
        []
    ),
        r.useEffect(
            () => () => {
                if (W.current && p) {
                    let e = [],
                        t = [],
                        n = !1;
                    null == Z ||
                        Z.forEach((i) => {
                            e.push(i.description), t.push(i.channel_id), null != i.emoji_id && (n = !0);
                        }),
                        R.default.track(L.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                            guild_id: null == l ? void 0 : l.id,
                            options: e,
                            options_channel_ids: t,
                            guild_description: S,
                            has_custom_emojis: n,
                            is_enabled: P
                        });
                }
            },
            [p, Z, S, P, l, W]
        ),
        r.useEffect(() => () => (0, T.sm)(), []);
    let V = r.useCallback(() => {
        null != l && y.Z.open(l.id, L.pNK.ONBOARDING);
    }, [l]);
    return null == l
        ? null
        : (0, i.jsxs)(m.FormSection, {
              title: O.intl.string(O.t['2rkmDg']),
              tag: m.FormTitleTags.H1,
              children: [
                  w &&
                      (0, i.jsx)('div', {
                          className: k.notice,
                          children: (0, i.jsxs)(m.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, i.jsx)(E.Z, { className: k.noticeIcon }),
                                  O.intl.format(O.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, i.jsx)(N.Z, {
                                              onClick: V,
                                              children: e
                                          })
                                  })
                              ]
                          })
                      }),
                  (0, i.jsx)(m.Text, {
                      className: k.__invalid_description,
                      variant: 'text-sm/normal',
                      children: O.intl.string(O.t['w2d74+'])
                  }),
                  (0, i.jsx)(A.Z, {
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
                      className: k.previewContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: k.welcomeHeader,
                              children: [
                                  (0, i.jsx)(v.Z, {
                                      size: v.Z.Sizes.LARGER,
                                      className: k.icon,
                                      guild: l,
                                      animate: !0,
                                      tabIndex: -1
                                  }),
                                  (0, i.jsx)(m.Heading, {
                                      className: k.welcomeTitle,
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
                                                              className: k.headerGuildBadge,
                                                              flowerStarClassName: k.flowerStar
                                                          }),
                                                          (0, i.jsx)('strong', { children: e })
                                                      ]
                                                  },
                                                  t
                                              )
                                      })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: k.descriptionWrapper,
                                      children: (0, i.jsx)(m.TextArea, {
                                          className: k.descriptionInput,
                                          placeholder: O.intl.string(O.t.qzZHaW),
                                          onChange: (e) => {
                                              (0, T.VP)({ description: e });
                                          },
                                          onBlur: () => {
                                              B();
                                          },
                                          onKeyDown: (e) => {
                                              e.keyCode === L.yXg.ENTER && e.preventDefault();
                                          },
                                          value: S,
                                          maxLength: 140,
                                          disabled: w
                                      })
                                  })
                              ]
                          }),
                          (0, i.jsx)(m.FormDivider, { className: k.divider }),
                          (0, i.jsxs)('div', {
                              className: k.welcomeChannels,
                              children: [
                                  (0, i.jsx)(m.FormTitle, { children: O.intl.string(O.t.euJXzc) }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      className: k.addChannelSubtext,
                                      children: O.intl.string(O.t.VOnnn5)
                                  }),
                                  null == Z
                                      ? void 0
                                      : Z.map((e, t) =>
                                            (0, i.jsx)(
                                                M,
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
                                          className: k.addChannelButton,
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

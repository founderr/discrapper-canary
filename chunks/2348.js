n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(653041);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(111028),
    u = n(977258),
    _ = n(637853),
    I = n(473403),
    E = n(216306),
    T = n(743475),
    m = n(827907),
    N = n(868814),
    S = n(981631),
    g = n(689938),
    h = n(697913);
function C(e) {
    let { guild: t, channel: a } = e,
        i = (0, m.Mf)(a.id);
    return 'null' === a.id
        ? (0, s.jsx)('div', {
              className: r()(h.categoryRow, h.uncategorized),
              children: (0, s.jsx)(o.Text, {
                  className: h.categoryText,
                  color: 'text-muted',
                  variant: 'text-xs/semibold',
                  lineClamp: 1,
                  children: a.name
              })
          })
        : (0, s.jsxs)(o.Clickable, {
              className: r()(h.categoryRow, { [h.uncategorized]: 'null' === a.id }),
              onContextMenu: (e) => {
                  (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('58059'), n.e('39285'), n.e('8965'), n.e('33260')]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, s.jsx)(e, {
                              ...n,
                              channel: a,
                              guild: t
                          });
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.s)(t.id, a.id)
                      ? (0, T.pt)(a.id)
                      : (0, o.openModalLazy)(async () => {
                            let { default: e } = await n.e('35641').then(n.bind(n, 589279));
                            return (n) =>
                                (0, s.jsx)(e, {
                                    ...n,
                                    guildId: t.id,
                                    startingChannelId: a.id
                                });
                        }),
                  !0
              ),
              children: [
                  (0, s.jsx)(o.Text, {
                      className: h.categoryText,
                      color: 'text-muted',
                      variant: 'text-xs/semibold',
                      lineClamp: 1,
                      children: a.name
                  }),
                  (0, s.jsx)(o.Checkbox, {
                      'aria-checked': i,
                      value: i,
                      type: o.Checkbox.Types.INVERTED,
                      className: h.checkbox,
                      displayOnly: !0
                  })
              ]
          });
}
let x = a.memo(function () {
        return (0, s.jsx)('div', { className: h.separator });
    }),
    p = a.memo(function (e) {
        let { index: t } = e;
        return (0, s.jsx)(
            o.Text,
            {
                variant: 'text-xs/normal',
                className: h.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    R = a.memo(function (e) {
        let { channel: t, category: a, guild: i, isFirstChannel: E, isLastChannel: C, tooltipDirection: R = 'right' } = e,
            L = (0, m.Mf)(t.id, a.id),
            f = (0, m.t4)(t.id, a.id),
            O = (0, m.EH)(t.id, a.id),
            A = (0, m.lL)(i.id, a.id),
            M = null != (0, N.Z)(i).find((e) => e.id === t.id),
            D = (0, _.mn)(t.id),
            v = (e) => {
                if (!f)
                    return (
                        e.stopPropagation(),
                        (0, u.s)(i.id, t.id)
                            ? (0, T.pt)(t.id)
                            : (0, o.openModalLazy)(async () => {
                                  let { default: e } = await n.e('35641').then(n.bind(n, 589279));
                                  return (n) =>
                                      (0, s.jsx)(e, {
                                          ...n,
                                          guildId: i.id,
                                          startingChannelId: t.id
                                      });
                              }),
                        !0
                    );
            },
            j = (e) => {
                t.isGuildVocal()
                    ? (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('53115'), n.e('58059'), n.e('39285'), n.e('90029'), n.e('18320'), n.e('83331'), n.e('69213')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, s.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  guild: i
                              });
                      })
                    : (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('77298'), n.e('23357'), n.e('50506'), n.e('31045'), n.e('11438'), n.e('79695'), n.e('29549'), n.e('6380'), n.e('18543'), n.e('31605'), n.e('72181'), n.e('30671'), n.e('81272'), n.e('79107'), n.e('95393'), n.e('53115'), n.e('56602'), n.e('86975'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('18895'), n.e('43244'), n.e('7590'), n.e('59743'), n.e('39285'), n.e('68241'), n.e('26138'), n.e('80915'), n.e('67588'), n.e('48800'), n.e('47321'), n.e('28128'), n.e('37220'), n.e('90029'), n.e('82158'), n.e('91315'), n.e('18320'), n.e('14259'), n.e('41811')]).then(n.bind(n, 373651));
                          return (n) =>
                              (0, s.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  guild: i
                              });
                      });
            };
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(o.Tooltip, {
                    text: null != O ? O : A,
                    delay: 500,
                    position: R,
                    children: (e) =>
                        (0, s.jsxs)(o.Clickable, {
                            className: r()(h.channelRow, {
                                [h.firstChannel]: E,
                                [h.lastChannel]: C,
                                [h.disabled]: f
                            }),
                            ...e,
                            onClick: v,
                            onContextMenu: j,
                            children: [
                                (0, s.jsx)('div', {
                                    className: h.channelInfo,
                                    children: (0, s.jsxs)('div', {
                                        className: h.channelName,
                                        children: [
                                            (0, s.jsx)(I._, {
                                                channel: t,
                                                guild: i
                                            }),
                                            (0, s.jsx)(d.Z, {
                                                className: h.__invalid_name,
                                                children: (0, s.jsx)(o.Text, {
                                                    className: h.channelText,
                                                    variant: 'text-md/medium',
                                                    lineClamp: 1,
                                                    color: f ? 'text-muted' : 'text-normal',
                                                    children: t.name
                                                })
                                            }),
                                            M
                                                ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          (0, s.jsx)(p, { index: 0 }),
                                                          (0, s.jsx)(o.Text, {
                                                              variant: 'text-xs/medium',
                                                              className: h.channelSubtitle,
                                                              color: 'text-brand',
                                                              children: g.Z.Messages.CHANNEL_POPULAR
                                                          })
                                                      ]
                                                  })
                                                : null
                                        ]
                                    })
                                }),
                                (0, s.jsx)('div', {
                                    className: h.channelActions,
                                    children: (0, u.s)(t.guild_id, t.id)
                                        ? (0, s.jsx)(o.Checkbox, {
                                              'aria-checked': L,
                                              value: L,
                                              type: o.Checkbox.Types.INVERTED,
                                              disabled: f,
                                              color: D ? l.Z.colors.TEXT_BRAND.css : l.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                              innerClassName: h.checkboxInner,
                                              displayOnly: !0
                                          })
                                        : (0, s.jsxs)(o.Button, {
                                              look: o.Button.Looks.OUTLINED,
                                              color: o.Button.Colors.PRIMARY,
                                              className: h.lockedPill,
                                              innerClassName: h.lockedPillInner,
                                              onClick: S.dG4,
                                              children: [
                                                  (0, s.jsx)(o.LockIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  }),
                                                  (0, s.jsx)(o.Text, {
                                                      variant: 'text-sm/medium',
                                                      color: 'none',
                                                      children: g.Z.Messages.UNLOCK
                                                  })
                                              ]
                                          })
                                })
                            ]
                        })
                }),
                !C && (0, s.jsx)(x, {})
            ]
        });
    });
function L(e) {
    let { categories: t, guild: n, className: i, hasSidebar: r } = e,
        l = a.useCallback(
            (e) => {
                let a = t._categories[e];
                return (0, s.jsx)(
                    C,
                    {
                        channel: a.channel,
                        guild: n
                    },
                    a.channel.id
                );
            },
            [t, n]
        ),
        o = a.useCallback(
            (e, a) => {
                let i = t._categories[e],
                    l = t[i.channel.id][a];
                return null == l
                    ? null
                    : (0, s.jsx)(
                          R,
                          {
                              category: i.channel,
                              channel: l.channel,
                              guild: n,
                              isFirstChannel: 0 === a,
                              isLastChannel: t[i.channel.id].length - 1 === a,
                              tooltipDirection: r ? 'right' : 'top'
                          },
                          l.channel.id
                      );
            },
            [t, n, r]
        ),
        c = (0, E.tn)(n.id, t, 64);
    return (0, s.jsx)('div', {
        className: i,
        children: c.map((e, t) => {
            let n = l(t),
                a = [],
                i = e.rowCount;
            if (0 === i) return null;
            for (let e = 0; e < i; e++) a.push(o(t, e));
            return (0, s.jsxs)(s.Fragment, {
                children: [n, a]
            });
        })
    });
}

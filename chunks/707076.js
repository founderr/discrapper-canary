t.d(n, {
    Z: function () {
        return D;
    },
    j: function () {
        return C;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(442837),
    a = t(481060),
    o = t(367907),
    c = t(548473),
    d = t(721012),
    u = t(621923),
    m = t(869764),
    I = t(150512),
    h = t(430824),
    N = t(594174),
    g = t(626135),
    T = t(999382),
    f = t(983135),
    S = t(84658),
    x = t(981631),
    E = t(388032),
    _ = t(581013);
let v = () => [
        {
            emoji: '\uD83E\uDDD9',
            emojiDescription: E.intl.string(E.t.Jh9uiY),
            title: E.intl.string(E.t.ATF45u),
            selected: !0
        },
        {
            emoji: '\uD83C\uDFA4',
            emojiDescription: E.intl.string(E.t['nGt+MT']),
            title: E.intl.string(E.t['30uo7O']),
            selected: !1
        },
        {
            emoji: '\uD83D\uDC40',
            emojiDescription: E.intl.string(E.t.hOMH5u),
            title: E.intl.string(E.t['5Z5sgo']),
            selected: !1
        }
    ],
    p = () => [
        {
            channelIcon: () =>
                (0, i.jsx)(a.AnnouncementsIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: E.intl.string(E.t.MXJozM),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, i.jsx)(a.TextIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: E.intl.string(E.t.Pkj0f3),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, i.jsx)(a.TextIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: E.intl.string(E.t['imVD+v']),
            selected: !1
        },
        {
            channelIcon: () =>
                (0, i.jsx)(a.ForumIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: E.intl.string(E.t['Pj/Wpq']),
            selected: !0
        }
    ];
function C(e) {
    let { isTooltip: n = !1 } = e,
        t = v();
    n && t.pop();
    let l = n
            ? (0, i.jsx)(a.Text, {
                  variant: 'text-sm/semibold',
                  color: 'header-primary',
                  children: E.intl.string(E.t.nTI2mZ)
              })
            : (0, i.jsx)(a.Heading, {
                  variant: 'heading-md/semibold',
                  children: E.intl.string(E.t.g1OQtr)
              }),
        s = n
            ? (0, i.jsx)(a.Text, {
                  variant: 'text-xxs/normal',
                  children: E.intl.format(E.t.hGwDPT, {})
              })
            : (0, i.jsx)(a.Text, {
                  variant: 'text-xs/normal',
                  children: E.intl.format(E.t['8XLD3t'], {})
              });
    return (0, i.jsxs)('div', {
        className: r()(_.upsellPreview, _.spacingLarge, { [_.tooltip]: n }),
        children: [
            l,
            (0, i.jsx)('div', {
                className: _.spacingSmall,
                children: t.map((e, n) => {
                    let { emoji: t, emojiDescription: l, title: s, selected: o } = e;
                    return (0, i.jsxs)(
                        'div',
                        {
                            className: r()(_.previewListItem, { [_.selected]: o }),
                            children: [
                                (0, i.jsx)('span', {
                                    role: 'img',
                                    'aria-label': l,
                                    children: t
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: s
                                }),
                                o &&
                                    (0, i.jsx)('div', {
                                        className: _.checkboxCircle,
                                        children: (0, i.jsx)(a.CheckmarkLargeIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: _.checkmark
                                        })
                                    })
                            ]
                        },
                        n
                    );
                })
            }),
            s
        ]
    });
}
function j() {
    let e = [
        {
            message: E.t.FUUXXl,
            profilePic: 'https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80',
            adminTitle: E.intl.string(E.t.RZVpur)
        },
        {
            message: E.t.JAXvDQ,
            profilePic: 'https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80',
            adminTitle: E.intl.string(E.t.xyrlg4)
        },
        {
            message: E.t.Wj9Djo,
            profilePic: 'https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80',
            adminTitle: E.intl.string(E.t['o/LQMj'])
        },
        {
            message: E.t.ALsMNT,
            profilePic: 'https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80',
            adminTitle: E.intl.string(E.t['uvM+xc'])
        }
    ];
    return (0, i.jsx)(d.i, { testimonials: e });
}
function D() {
    let e = (0, s.e7)([T.Z], () => T.Z.getGuildId()),
        n = (0, s.e7)([h.Z], () => h.Z.getGuild(e)),
        t = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
        { homeSettingsEnabled: l } = (0, u.kZ)(null != e ? e : x.lds);
    return null == e || null == n || null == t
        ? null
        : (0, i.jsxs)('div', {
              className: _.upsellContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: _.upsellHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: _.islands,
                              children: [
                                  (0, i.jsx)(c.xm, {}),
                                  (0, i.jsx)(c._I, {
                                      guild: n,
                                      mainIslandClassName: _.mainIsland,
                                      balloonDogClassName: _.balloonDog
                                  }),
                                  (0, i.jsx)(c.B0, {})
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: _.upsellHeaderText,
                              children: [
                                  (0, i.jsx)(a.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: E.intl.string(E.t.GnKOAw)
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: E.intl.string(E.t.SJRFJi)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: _.upsellButtons,
                              children: (0, i.jsx)(a.Button, {
                                  onClick: function () {
                                      null != e &&
                                          (g.default.track(x.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                              ...(0, o.hH)(e),
                                              step: S.PG[S.PG.LANDING],
                                              back: !1,
                                              skip: !1
                                          }),
                                          (0, f.IG)(e, S.PG.LANDING));
                                  },
                                  color: a.Button.Colors.BRAND,
                                  disabled: !1,
                                  children: E.intl.string(E.t.RzWDqa)
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(a.FormDivider, {}),
                  (0, i.jsx)(j, {}),
                  (0, i.jsx)(a.FormDivider, {}),
                  (0, i.jsxs)('div', {
                      className: _.valuesContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: _.valueContainer,
                              children: [
                                  (0, i.jsx)(C, {}),
                                  (0, i.jsxs)('div', {
                                      className: _.valueText,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: E.intl.string(E.t.Z7kqKS)
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: E.intl.string(E.t.di3UCw)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          l &&
                              (0, i.jsxs)('div', {
                                  className: _.valueContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: _.valueText,
                                          children: [
                                              (0, i.jsx)(a.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: E.intl.string(E.t.O4jYEh)
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: E.intl.string(E.t['l/l/Gx'])
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: r()(_.upsellPreview, _.spacingLarge),
                                          children: [
                                              (0, i.jsx)(I.Z, {
                                                  guildId: e,
                                                  welcomeMessage: {
                                                      authorIds: [t.id],
                                                      message: E.intl.string(E.t.hIWAfn)
                                                  }
                                              }),
                                              (0, i.jsx)(m.k, {
                                                  title: E.intl.string(E.t['47zu7O']),
                                                  subtitle: E.intl.string(E.t.amoSNz),
                                                  completed: !0,
                                                  Icon: a.TextIcon,
                                                  variant: 'static'
                                              }),
                                              (0, i.jsx)(m.k, {
                                                  title: E.intl.string(E.t.EZfTKC),
                                                  subtitle: E.intl.string(E.t['/sYelZ']),
                                                  completed: !0,
                                                  Icon: a.TextIcon,
                                                  variant: 'static'
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          (0, i.jsxs)('div', {
                              className: _.valueContainer,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: r()(_.upsellPreview, _.spacingLarge),
                                      children: p().map((e, n) => {
                                          let { channelIcon: t, channel: l, selected: s } = e;
                                          return (0, i.jsxs)(
                                              'div',
                                              {
                                                  className: r()(_.previewListItem, _.spaceBetween, { [_.selected]: s }),
                                                  children: [
                                                      (0, i.jsxs)('div', {
                                                          className: _.channel,
                                                          children: [
                                                              t(),
                                                              (0, i.jsx)(a.Text, {
                                                                  variant: 'text-md/medium',
                                                                  color: 'header-primary',
                                                                  children: l
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: r()(_.checkbox, { [_.selected]: s }),
                                                          children:
                                                              s &&
                                                              (0, i.jsx)(a.CheckmarkLargeIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: _.checkmark
                                                              })
                                                      })
                                                  ]
                                              },
                                              n
                                          );
                                      })
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: _.valueText,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: E.intl.string(E.t['3T9aHB'])
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: E.intl.string(E.t.dA7Cam)
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}

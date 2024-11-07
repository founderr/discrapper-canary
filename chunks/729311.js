n.d(t, {
    Z: function () {
        return D;
    },
    j: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(852860),
    d = n(111028),
    u = n(977258),
    m = n(45966),
    h = n(473403),
    g = n(454585),
    x = n(323502),
    p = n(958832),
    f = n(324067),
    C = n(984933),
    I = n(259580),
    _ = n(999382),
    N = n(743475),
    v = n(889369),
    T = n(570961),
    j = n(208665),
    S = n(868814),
    b = n(974513),
    E = n(2348),
    R = n(353890),
    Z = n(716130),
    A = n(388032),
    L = n(110447);
function y(e) {
    let { guild: t } = e,
        l = (0, a.e7)([m.Z], () => m.Z.getEnabled(t.id)),
        s = (0, a.e7)([p.Z], () => p.Z.hasFetched(t.id)),
        c = (0, S.Z)(t),
        f = (0, a.e7)([v.Z], () => v.Z.editedDefaultChannelIds),
        C = c.filter((e) => !f.has(e.id)),
        [I, _] = r.useState(!1);
    r.useEffect(() => {
        !s && !l && (0, x.S)(t.id);
    }, [t.id, s, l]);
    let T = (e) => {
        (0, o.openModalLazy)(async () => {
            let { default: r } = await n.e('35641').then(n.bind(n, 89216));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    guildId: t.id,
                    startingChannelId: e
                });
        });
    };
    return I || 0 === C.length
        ? null
        : (0, i.jsxs)('div', {
              className: L.recommendations,
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      children: A.intl.string(A.t.NN7rDw)
                  }),
                  (0, i.jsxs)('div', {
                      className: L.recsSubheader,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: A.intl.string(A.t['3Uuql5'])
                          }),
                          (0, i.jsxs)(o.Clickable, {
                              className: L.dismissAll,
                              onClick: () => _(!0),
                              children: [
                                  (0, i.jsx)(o.CheckmarkLargeIcon, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: L.checkmark
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      className: L.dismissAllText,
                                      variant: 'text-xs/medium',
                                      color: 'text-brand',
                                      children: A.intl.string(A.t.ZC3PJy)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: L.recommendedChannels,
                      children: C.map((e, n) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: L.channelRow,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: L.channelInfo,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: L.channelName,
                                                      children: [
                                                          (0, i.jsx)(h._, {
                                                              channel: e,
                                                              guild: t
                                                          }),
                                                          (0, i.jsx)(d.Z, {
                                                              className: L.__invalid_name,
                                                              children: (0, i.jsx)(o.Text, {
                                                                  className: L.__invalid_channelText,
                                                                  variant: 'text-md/medium',
                                                                  lineClamp: 1,
                                                                  color: 'text-normal',
                                                                  children: e.name
                                                              })
                                                          })
                                                      ]
                                                  }),
                                                  null != e.topic && e.topic.length > 0
                                                      ? (0, i.jsx)(
                                                            d.Z,
                                                            {
                                                                children: (0, i.jsx)(o.Text, {
                                                                    className: L.topic,
                                                                    variant: 'text-xs/normal',
                                                                    children: g.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                                                })
                                                            },
                                                            'topic'
                                                        )
                                                      : null
                                              ]
                                          }),
                                          (0, u.s)(t.id, e.id)
                                              ? (0, i.jsx)(o.Button, {
                                                    color: o.Button.Colors.BRAND,
                                                    size: o.Button.Sizes.SMALL,
                                                    className: L.addChannelCTA,
                                                    onClick: () => (0, N.pt)(e.id),
                                                    children: A.intl.string(A.t.OYkgVl)
                                                })
                                              : (0, i.jsxs)(o.Button, {
                                                    look: o.Button.Looks.OUTLINED,
                                                    color: o.Button.Colors.PRIMARY,
                                                    className: L.lockedPill,
                                                    innerClassName: L.lockedPillInner,
                                                    onClick: () => T(e.id),
                                                    children: [
                                                        (0, i.jsx)(o.LockIcon, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: A.intl.string(A.t.zA9d1N)
                                                        })
                                                    ]
                                                })
                                      ]
                                  }),
                                  n < C.length - 1 ? (0, i.jsx)('div', { className: L.separator }) : null
                              ]
                          })
                      )
                  }),
                  (0, i.jsx)('div', { className: L.largeSeparator })
              ]
          });
}
function D(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, a.e7)([_.Z], () => _.Z.getGuild()),
        l = (0, a.e7)([m.Z], () => m.Z.isLoading()),
        c = (0, a.e7)([C.ZP], () => C.ZP.getChannels(null == n ? void 0 : n.id)),
        d = (0, a.e7)([f.Z], () => f.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, a.e7)([j.Z], () => j.Z.advancedMode),
        h = r.useRef(null),
        [g, x] = r.useState(!1);
    return (r.useEffect(() => {
        if (t)
            return () => {
                null != n &&
                    (0, N.DO)(n)
                        .then(() => {
                            u && (0, T.rS)(n, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
    }, [t, u]),
    null == n)
        ? null
        : l
          ? (0, i.jsx)(o.Spinner, {})
          : (0, i.jsxs)('div', {
                className: L.columns,
                children: [
                    (0, i.jsxs)('div', {
                        className: L.channelBrowser,
                        children: [
                            (0, i.jsx)(o.Clickable, {
                                className: L.collapseButton,
                                onClick: () => x((e) => !e),
                                children: (0, i.jsx)(I.Z, {
                                    direction: g ? I.Z.Directions.DOWN : I.Z.Directions.UP,
                                    height: 16,
                                    width: 16
                                })
                            }),
                            (0, i.jsx)(o.Heading, {
                                className: L.header,
                                variant: 'heading-lg/extrabold',
                                children: A.intl.string(A.t['4GSygo'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: A.intl.string(A.t.Kq7FAQ)
                            }),
                            (0, i.jsx)(b.Wu, {
                                className: L.advancedModeToggle,
                                guildId: n.id
                            }),
                            g
                                ? null
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(y, { guild: n }),
                                          (0, i.jsx)(E.Z, {
                                              className: s()(L.channelBrowserOuter),
                                              guild: n,
                                              categories: d,
                                              channels: c,
                                              hasSidebar: !1
                                          })
                                      ]
                                  }),
                            u &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('div', { className: L.largeSeparator }),
                                        (0, i.jsx)(o.Heading, {
                                            className: L.prejoinHeader,
                                            variant: 'heading-lg/extrabold',
                                            children: A.intl.string(A.t.g2Rnpa)
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            className: L.prejoinSubHeader,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: A.intl.string(A.t.bLDQ1d)
                                        }),
                                        (0, i.jsx)('div', {
                                            ref: h,
                                            className: L.advancedModeQuestions,
                                            children: (0, i.jsx)(Z.Z, {
                                                guildId: n.id,
                                                prejoinOnly: !0,
                                                includeCount: !0,
                                                singleColumn: !0
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)(R.Z, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != h.current && h.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    })
                ]
            });
}
function O() {
    let e = (0, a.e7)([_.Z], () => _.Z.getProps().guild),
        t = (0, a.e7)([v.Z], () => v.Z.submitting),
        n = (0, a.e7)([j.Z], () => j.Z.advancedMode);
    return null == e
        ? null
        : (0, i.jsx)(c.Z, {
              onSave: () => {
                  (0, N.DO)(e)
                      .then(() => {
                          n && (0, T.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: N.BG,
              submitting: t,
              onSaveText: A.intl.string(A.t.R3BPHx)
          });
}

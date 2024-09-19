n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(526629),
    r = n(722770),
    l = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    _ = n(689938),
    I = n(825723);
function E(e) {
    let { guildId: t, triggerType: n } = e,
        E = a.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [T] = a.useState(E),
        [m, N] = a.useState(!1),
        { editingRule: S, createNewEditingRule: g } = (0, d.V)(),
        { getDefaultRuleName: h } = c.I6[n],
        C = !(0, o.Vb)(S) && (null == S ? void 0 : S.triggerType) === n,
        [x, p] = a.useState(C ? S : T),
        R = (0, l.useSpring)({
            opacity: C ? 0 : 1,
            pointerEvents: C ? 'none' : 'all',
            config: {
                ...i.config.stiff,
                clamp: !0
            }
        }),
        L = (0, l.useSpring)({
            opacity: C ? 1 : 0,
            pointerEvents: C ? 'all' : 'none',
            config: {
                ...i.config.stiff,
                clamp: !0
            },
            onStart: () => {
                p(C ? S : T);
            },
            onRest: () => {
                p(C ? S : T), N(C);
            }
        });
    return null == S || C
        ? (0, s.jsxs)('div', {
              className: I.mainRuleContainer,
              style: { height: C ? 'auto' : '60px' },
              children: [
                  (0, s.jsx)(i.animated.div, {
                      className: I.animatedRuleCardContainer,
                      style: L,
                      children: (0, s.jsx)(u.Z, {
                          rule: x,
                          persistEdit: m
                      })
                  }),
                  (0, s.jsx)(i.animated.div, {
                      className: I.animatedNewRuleContainer,
                      style: R,
                      children: (0, s.jsxs)(l.Clickable, {
                          className: I.addAnotherRuleCardContainer,
                          onClick: () => {
                              g(t, n);
                          },
                          children: [
                              (0, s.jsx)(l.CirclePlusIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: r.Z.BLUE_345,
                                  className: I.plusIcon
                              }),
                              (0, s.jsx)(l.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: _.Z.Messages.GUILD_AUTOMOD_ADD_ADDITIONAL_RULE.format({ ruleName: h() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}

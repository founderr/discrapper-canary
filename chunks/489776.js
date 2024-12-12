n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(752877),
    s = n(722770),
    a = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    m = n(388032),
    h = n(697132);
function g(e) {
    let { guildId: t, triggerType: n } = e,
        g = r.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [x] = r.useState(g),
        [p, f] = r.useState(!1),
        { editingRule: C, createNewEditingRule: _ } = (0, d.V)(),
        { getDefaultRuleName: I } = c.I6[n],
        v = !(0, o.Vb)(C) && (null == C ? void 0 : C.triggerType) === n,
        [N, T] = r.useState(v ? C : x),
        b = (0, a.useSpring)({
            opacity: v ? 0 : 1,
            pointerEvents: v ? 'none' : 'all',
            config: {
                ...l.config.stiff,
                clamp: !0
            }
        }),
        j = (0, a.useSpring)({
            opacity: v ? 1 : 0,
            pointerEvents: v ? 'all' : 'none',
            config: {
                ...l.config.stiff,
                clamp: !0
            },
            onStart: () => {
                T(v ? C : x);
            },
            onRest: () => {
                T(v ? C : x), f(v);
            }
        });
    return null == C || v
        ? (0, i.jsxs)('div', {
              className: h.mainRuleContainer,
              style: { height: v ? 'auto' : '60px' },
              children: [
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedRuleCardContainer,
                      style: j,
                      children: (0, i.jsx)(u.Z, {
                          rule: N,
                          persistEdit: p
                      })
                  }),
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedNewRuleContainer,
                      style: b,
                      children: (0, i.jsxs)(a.Clickable, {
                          className: h.addAnotherRuleCardContainer,
                          onClick: () => {
                              _(t, n);
                          },
                          children: [
                              (0, i.jsx)(a.CirclePlusIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: s.Z.BLUE_345,
                                  className: h.plusIcon
                              }),
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.intl.format(m.t.dNjRAQ, { ruleName: I() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}

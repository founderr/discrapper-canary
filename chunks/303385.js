var o = n(200651);
n(192379);
var s = n(100621),
    r = n(481060),
    a = n(497505),
    l = n(302245),
    i = n(644646),
    c = n(46140),
    d = n(689938),
    u = n(437567);
t.Z = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: p, partnerBranding: m, useReducedMotion: x } = e,
        { enabled: C, variant: g } = l.Hp.useExperiment({ location: c.dr.QUESTS_BAR });
    if (!C) return null;
    let _ = null;
    return (g === l.PW.REWARD_AVAILABLE ? (_ = d.Z.Messages.REWARD_AVAILABLE) : g === l.PW.EARN_A_REWARD ? (_ = d.Z.Messages.EARN_A_REWARD) : g === l.PW.EARN_A_REWARD_EXCLAMATION && (_ = d.Z.Messages.EARN_A_REWARD_EXCLAIMATION), null == _)
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(s.animated.div, {
                      className: u.rewardTileSpacer,
                      style: {
                          transform: (0, s.to)(
                              [
                                  n.to({
                                      range: [0, 1],
                                      output: [1, 24 / 38]
                                  })
                              ],
                              (e) => 'scale('.concat(e, ')')
                          )
                      }
                  }),
                  (0, o.jsx)(s.animated.div, {
                      className: u.rewardTileContainer,
                      style: {
                          transform: (0, s.to)(
                              [
                                  n.to({
                                      range: [0, 1],
                                      output: [-8, 0]
                                  }),
                                  n.to({
                                      range: [0, 1],
                                      output: [0, 92]
                                  }),
                                  n.to({
                                      range: [1, 0],
                                      output: [1, 0.75]
                                  })
                              ],
                              (e, t, n) => 'translate('.concat(e, 'px, ').concat(t, 'px) scale(').concat(n, ')')
                          )
                      },
                      children: (0, o.jsx)(i.Z, {
                          learnMoreStyle: 'text',
                          quest: t,
                          questContent: a.jn.QUEST_BAR_V2,
                          location: c.dr.QUESTS_BAR,
                          autoplay: p && !x
                      })
                  }),
                  (0, o.jsxs)('div', {
                      className: u.rewardHighlightLogoCTA,
                      children: [
                          (0, o.jsx)(s.animated.div, {
                              className: u.partnerBranding,
                              style: {
                                  opacity: n.to({
                                      range: [0, 1],
                                      output: [1, p ? 1 : 0.8]
                                  }),
                                  transform: (0, s.to)(
                                      [
                                          n.to({
                                              range: [0, 1],
                                              output: [0, -48]
                                          }),
                                          n.to({
                                              range: [0, 1],
                                              output: [0, 8]
                                          })
                                      ],
                                      (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                                  )
                              },
                              children: m
                          }),
                          (0, o.jsx)(s.animated.div, {
                              className: u.rewardHighlightCTA,
                              style: {
                                  opacity: n.to({
                                      range: [0, 1],
                                      output: [0.7, 0]
                                  })
                              },
                              children: (0, o.jsx)(r.Text, {
                                  color: 'always-white',
                                  variant: 'text-xs/medium',
                                  children: _
                              })
                          })
                      ]
                  })
              ]
          });
};

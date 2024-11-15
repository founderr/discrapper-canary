var o = n(200651);
n(192379);
var r = n(100621),
    s = n(481060),
    a = n(497505),
    i = n(302245),
    l = n(644646),
    c = n(46140),
    d = n(388032),
    u = n(408901);
t.Z = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: p, partnerBranding: m, useReducedMotion: x } = e,
        { enabled: g, variant: f } = i.Hp.useExperiment({ location: c.dr.QUESTS_BAR });
    if (!g) return null;
    let h = null;
    return (f === i.PW.REWARD_AVAILABLE ? (h = d.intl.string(d.t['2BD0CQ'])) : f === i.PW.EARN_A_REWARD ? (h = d.intl.string(d.t.mETI3N)) : f === i.PW.EARN_A_REWARD_EXCLAMATION && (h = d.intl.string(d.t.LCpIZG)), null == h)
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(r.animated.div, {
                      className: u.rewardTileSpacer,
                      style: {
                          transform: (0, r.to)(
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
                  (0, o.jsx)(r.animated.div, {
                      className: u.rewardTileContainer,
                      style: {
                          transform: (0, r.to)(
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
                      children: (0, o.jsx)(l.Z, {
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
                          (0, o.jsx)(r.animated.div, {
                              className: u.partnerBranding,
                              style: {
                                  opacity: n.to({
                                      range: [0, 1],
                                      output: [1, p ? 1 : 0.8]
                                  }),
                                  transform: (0, r.to)(
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
                          (0, o.jsx)(r.animated.div, {
                              className: u.rewardHighlightCTA,
                              style: {
                                  opacity: n.to({
                                      range: [0, 1],
                                      output: [0.7, 0]
                                  })
                              },
                              children: (0, o.jsx)(s.Text, {
                                  color: 'always-white',
                                  variant: 'text-xs/medium',
                                  children: h
                              })
                          })
                      ]
                  })
              ]
          });
};

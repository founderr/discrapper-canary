var o = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(100621),
    l = n(481060),
    i = n(113434),
    c = n(497505),
    d = n(685613),
    u = n(340100),
    p = n(644646),
    m = n(788284),
    x = n(46140),
    C = n(689938),
    g = n(968387);
t.Z = function (e) {
    var t;
    let { className: n, expansionSpring: s, isExpanded: _, isExpansionAnimationComplete: f, quest: h, useReducedMotion: E } = e,
        S = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { percentComplete: T } = (0, i.Rf)(h),
        N = (0, i.Jf)(h),
        v = null != N ? N.completedRatio > 0 : T > 0;
    return (0, o.jsxs)(a.animated.div, {
        'aria-hidden': _ && f,
        className: r()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: _,
            [g.contentCollapsedAccepted]: S
        }),
        style: {
            opacity: s.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: [
            (0, o.jsx)(m.Z, {
                quest: h,
                useReducedMotion: E
            }),
            (0, o.jsx)('div', {
                className: g.contentCollapsedWrapper,
                children: S
                    ? (0, o.jsxs)('div', {
                          className: g.questProgressWrapper,
                          children: [
                              (0, o.jsx)(p.Z, {
                                  className: g.questProgressRewardTile,
                                  quest: h,
                                  questContent: c.jn.QUEST_BAR,
                                  autoplay: !1,
                                  location: x.dr.QUESTS_BAR
                              }),
                              v
                                  ? (0, o.jsx)(u.Z, {
                                        className: g.questProgressBar,
                                        quest: h
                                    })
                                  : (0, o.jsx)(l.Text, {
                                        className: g.questProgressHint,
                                        color: 'always-white',
                                        variant: 'text-sm/semibold',
                                        children: C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
                                    })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          className: g.brandingWrapper,
                          children: [
                              (0, o.jsx)(d.Z, {
                                  className: g.partnerBranding,
                                  quest: h
                              }),
                              (0, o.jsx)(l.Heading, {
                                  color: 'always-white',
                                  variant: 'heading-sm/medium',
                                  className: g.questName,
                                  children: C.Z.Messages.QUEST.format({ questName: h.config.messages.questName })
                              })
                          ]
                      })
            })
        ]
    });
};

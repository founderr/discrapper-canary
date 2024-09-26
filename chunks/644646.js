var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(374470),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(70097),
    _ = n(617136),
    E = n(918701),
    f = n(302245),
    h = n(566078),
    p = n(78826),
    m = n(341907),
    I = n(46140),
    T = n(689938),
    g = n(141533);
function S(e) {
    let { className: t, quest: n, autoplay: a = !0, learnMoreStyle: S = null } = e,
        A = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        v = (0, E.gO)(n),
        N = i.useMemo(() => (0, E.nP)(v.name), [v.name]),
        O = i.useCallback(
            (t) => {
                var r;
                (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, _._3)({
                        questId: n.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE
                    }),
                    (0, m.navigateToQuestHome)(e.location, e.questContent, n.id),
                    null === (r = e.onClick) || void 0 === r || r.call(e, t);
            },
            [n.id, e]
        ),
        R = (0, f.vI)(n, I.dr.QUESTS_BAR),
        C = i.useRef(null),
        y = i.useRef(a);
    i.useEffect(() => {
        if (null != C.current) {
            if (!N || A) {
                (C.current.currentTime = 0), C.current.pause();
                return;
            }
            a && !y.current ? C.current.play() : !a && y.current && ((C.current.currentTime = 0), C.current.pause()), (y.current = a);
        }
    }, [a, N, A]);
    let L = N
        ? (0, r.jsx)(p.Fl, {
              id: 'QuestRewardTile_rewardTileAnimated',
              children: (e) =>
                  (0, r.jsx)(d.Z, {
                      ref: (t) => {
                          (e.current = t), (C.current = t);
                      },
                      autoPlay: !A && a,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: g.questRewardTileAsset,
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: v.url,
                          type: (0, E.mN)(v.url)
                      })
                  })
          })
        : (0, r.jsx)(p.Fl, {
              id: 'QuestRewardTile_rewardTileStatic',
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: e,
                      alt: h.r.build(n.config).defaultReward.messages.name,
                      className: o()(g.questRewardTileAsset, g.questRewardTileAssetStatic),
                      src: v.url
                  })
          });
    return null == S
        ? (0, r.jsx)('div', {
              className: o()(g.questRewardTile, t),
              children: L
          })
        : (0, r.jsxs)(u.Clickable, {
              className: o()(
                  g.questRewardTileInteractive,
                  g.questRewardTile,
                  {
                      [g.rewardHighlight]: R,
                      [g.borderOverlay]: !R
                  },
                  t
              ),
              onClick: O,
              children: [
                  L,
                  R &&
                      (0, r.jsx)(u.Shine, {
                          className: g.shine,
                          shineSize: u.ShineSizes.SMALL
                      }),
                  'text' === S &&
                      (0, r.jsx)(u.Text, {
                          color: 'always-white',
                          variant: 'text-xs/normal',
                          className: g.questRewardTileDetailsLearnMore,
                          children: T.Z.Messages.QUESTS_LEARN_MORE_STACKED.format()
                      }),
                  'icon' === S &&
                      (0, r.jsx)('div', {
                          className: g.questRewardTileDetailsLearnMore,
                          children: (0, r.jsx)(u.CircleInformationIcon, {
                              size: 'xxs',
                              color: u.tokens.colors.WHITE.css
                          })
                      })
              ]
          });
}
t.Z = S;

var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(374470),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(70097),
    f = n(617136),
    _ = n(302245),
    h = n(475595),
    p = n(566078),
    m = n(78826),
    g = n(341907),
    E = n(46140),
    v = n(388032),
    I = n(319181);
t.Z = function (e) {
    let { className: t, quest: n, autoplay: a = !0, learnMoreStyle: S = null } = e,
        b = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        T = i.useMemo(() => (0, h.fh)(n, h.eC.REWARD), [n]),
        y = i.useCallback(
            (t) => {
                var r;
                (0, o.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, f._3)({
                        questId: n.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: f.jZ.REWARD_LEARN_MORE
                    }),
                    (0, g.navigateToQuestHome)(e.location, e.questContent, n.id),
                    null === (r = e.onClick) || void 0 === r || r.call(e, t);
            },
            [n.id, e]
        ),
        A = (0, _.vI)(n, E.dr.QUESTS_BAR),
        N = i.useRef(null),
        C = i.useRef(a);
    i.useEffect(() => {
        if (null != N.current) {
            if (!T.isAnimated || b) {
                (N.current.currentTime = 0), N.current.pause();
                return;
            }
            a && !C.current ? N.current.play() : !a && C.current && ((N.current.currentTime = 0), N.current.pause()), (C.current = a);
        }
    }, [a, T, b]);
    let R = T.isAnimated
        ? (0, r.jsx)(m.Fl, {
              id: 'QuestRewardTile_rewardTileAnimated',
              children: (e) => {
                  var t;
                  return (0, r.jsx)(d.Z, {
                      ref: (t) => {
                          (e.current = t), (N.current = t);
                      },
                      autoPlay: !b && a,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: I.questRewardTileAsset,
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: T.url,
                          type: null !== (t = T.mimetype) && void 0 !== t ? t : void 0
                      })
                  });
              }
          })
        : (0, r.jsx)(m.Fl, {
              id: 'QuestRewardTile_rewardTileStatic',
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: e,
                      alt: p.r.build(n.config).defaultReward.messages.name,
                      className: s()(I.questRewardTileAsset, I.questRewardTileAssetStatic),
                      src: T.url
                  })
          });
    return null == S
        ? (0, r.jsx)('div', {
              className: s()(I.questRewardTile, t),
              children: R
          })
        : (0, r.jsxs)(u.Clickable, {
              className: s()(
                  I.questRewardTileInteractive,
                  I.questRewardTile,
                  {
                      [I.rewardHighlight]: A,
                      [I.borderOverlay]: !A
                  },
                  t
              ),
              onClick: y,
              children: [
                  R,
                  A &&
                      (0, r.jsx)(u.Shine, {
                          className: I.shine,
                          shineSize: u.ShineSizes.SMALL
                      }),
                  'text' === S &&
                      (0, r.jsx)(u.Text, {
                          color: 'always-white',
                          variant: 'text-xs/normal',
                          className: I.questRewardTileDetailsLearnMore,
                          children: v.intl.format(v.t.DYAleX, {})
                      }),
                  'icon' === S &&
                      (0, r.jsx)('div', {
                          className: I.questRewardTileDetailsLearnMore,
                          children: (0, r.jsx)(u.CircleInformationIcon, {
                              size: 'xxs',
                              color: u.tokens.colors.WHITE.css
                          })
                      })
              ]
          });
};

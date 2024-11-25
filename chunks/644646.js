var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(374470),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(436774),
    f = n(70097),
    _ = n(617136),
    p = n(918701),
    h = n(302245),
    m = n(475595),
    g = n(566078),
    E = n(78826),
    v = n(341907),
    I = n(46140),
    b = n(388032),
    T = n(66330);
t.Z = function (e) {
    let t;
    let { className: n, quest: a, autoplay: S = !0, learnMoreStyle: y = null } = e,
        A = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        N = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
        C = i.useCallback(
            (t) => {
                var n;
                (0, o.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, _._3)({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE
                    }),
                    (0, v.navigateToQuestHome)(e.location, e.questContent, a.id),
                    null === (n = e.onClick) || void 0 === n || n.call(e, t);
            },
            [a.id, e]
        ),
        R = (0, h.vI)(a, I.dr.QUESTS_BAR),
        O = i.useRef(null),
        D = i.useRef(S),
        L = (0, p.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != O.current) {
                if (!N.isAnimated || A) {
                    (O.current.currentTime = 0), O.current.pause();
                    return;
                }
                S && !D.current ? O.current.play() : !S && D.current && ((O.current.currentTime = 0), O.current.pause()), (D.current = S);
            }
        }, [S, N, A]),
        (t = L
            ? (0, r.jsx)(E.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, r.jsx)('div', {
                          ref: e,
                          className: s()(T.questRewardTileAsset, T.nitroRewardTileAssetContainer),
                          children: (0, r.jsx)(u.NitroWheelIcon, {
                              size: 'lg',
                              className: T.nitroRewardTileAsset,
                              color: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                          })
                      })
              })
            : N.isAnimated
              ? (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(f.Z, {
                            ref: (t) => {
                                (e.current = t), (O.current = t);
                            },
                            autoPlay: !A && S,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: T.questRewardTileAsset,
                            controls: !1,
                            children: (0, r.jsx)('source', {
                                src: N.url,
                                type: null !== (t = N.mimetype) && void 0 !== t ? t : void 0
                            })
                        });
                    }
                })
              : (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: g.r.build(a.config).defaultReward.messages.name,
                            className: s()(T.questRewardTileAsset, T.questRewardTileAssetStatic),
                            src: N.url
                        })
                })),
        null == y
            ? (0, r.jsx)('div', {
                  className: s()(T.questRewardTile, n),
                  children: t
              })
            : (0, r.jsxs)(u.Clickable, {
                  className: s()(
                      T.questRewardTileInteractive,
                      T.questRewardTile,
                      {
                          [T.rewardHighlight]: R,
                          [T.borderOverlay]: !R
                      },
                      n
                  ),
                  onClick: C,
                  children: [
                      t,
                      R &&
                          (0, r.jsx)(u.Shine, {
                              className: T.shine,
                              shineSize: u.ShineSizes.SMALL
                          }),
                      'text' === y &&
                          (0, r.jsx)(u.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: T.questRewardTileDetailsLearnMore,
                              children: b.intl.format(b.t.DYAleX, {})
                          }),
                      'icon' === y &&
                          (0, r.jsx)('div', {
                              className: T.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(u.CircleInformationIcon, {
                                  size: 'xxs',
                                  color: u.tokens.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
};

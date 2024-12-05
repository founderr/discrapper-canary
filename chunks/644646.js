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
    _ = n(918701),
    p = n(475595),
    h = n(566078),
    m = n(352084),
    g = n(78826),
    E = n(341907),
    v = n(388032),
    I = n(66330);
t.Z = function (e) {
    let t;
    let { className: n, quest: a, autoplay: T = !0, learnMoreStyle: b = null } = e,
        S = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        y = i.useMemo(() => (0, p.fh)(a, p.eC.REWARD), [a]),
        A = i.useCallback(
            (t) => {
                var n;
                (0, o.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, f._3)({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: f.jZ.REWARD_LEARN_MORE
                    }),
                    (0, E.navigateToQuestHome)(e.location, e.questContent, a.id),
                    null === (n = e.onClick) || void 0 === n || n.call(e, t);
            },
            [a.id, e]
        ),
        N = i.useRef(null),
        C = i.useRef(T),
        R = (0, _.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != N.current) {
                if (!y.isAnimated || S) {
                    (N.current.currentTime = 0), N.current.pause();
                    return;
                }
                T && !C.current ? N.current.play() : !T && C.current && ((N.current.currentTime = 0), N.current.pause()), (C.current = T);
            }
        }, [T, y, S]),
        (t = R
            ? (0, r.jsx)(g.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, r.jsx)(m.Z, {
                          ref: e,
                          className: I.questRewardTileAsset
                      })
              })
            : y.isAnimated
              ? (0, r.jsx)(g.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(d.Z, {
                            ref: (t) => {
                                (e.current = t), (N.current = t);
                            },
                            autoPlay: !S && T,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: I.questRewardTileAsset,
                            controls: !1,
                            children: (0, r.jsx)('source', {
                                src: y.url,
                                type: null !== (t = y.mimetype) && void 0 !== t ? t : void 0
                            })
                        });
                    }
                })
              : (0, r.jsx)(g.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: h.r.build(a.config).defaultReward.messages.name,
                            className: s()(I.questRewardTileAsset, I.questRewardTileAssetStatic),
                            src: y.url
                        })
                })),
        null == b
            ? (0, r.jsx)('div', {
                  className: s()(I.questRewardTile, n),
                  children: t
              })
            : (0, r.jsxs)(u.Clickable, {
                  className: s()(I.questRewardTileInteractive, I.questRewardTile, I.rewardHighlight, n),
                  onClick: A,
                  children: [
                      t,
                      (0, r.jsx)(u.Shine, {
                          className: I.shine,
                          shineSize: u.ShineSizes.SMALL
                      }),
                      'text' === b &&
                          (0, r.jsx)(u.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: I.questRewardTileDetailsLearnMore,
                              children: v.intl.format(v.t.DYAleX, {})
                          }),
                      'icon' === b &&
                          (0, r.jsx)('div', {
                              className: I.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(u.CircleInformationIcon, {
                                  size: 'xxs',
                                  color: u.tokens.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
};

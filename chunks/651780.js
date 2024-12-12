n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(355467),
    c = n(821849),
    d = n(774078),
    u = n(15640),
    m = n(774380),
    h = n(404270),
    g = n(386937),
    x = n(316350),
    p = n(899667),
    f = n(626135),
    C = n(267642),
    _ = n(63063),
    I = n(999382),
    v = n(981631),
    N = n(388032),
    T = n(981004);
function b(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: r } = e,
        { days: l, hours: s } = (0, d.Z)(t);
    return n <= 0
        ? null
        : (0, i.jsx)(i.Fragment, {
              children:
                  0 === l && 0 === s
                      ? N.intl.format(N.t.kF0HER, {
                            tierName: r,
                            numPremiumSubscriptions: n
                        })
                      : N.intl.format(N.t.neDJho, {
                            days: l,
                            hours: s,
                            tierName: r,
                            numPremiumSubscriptions: n
                        })
          });
}
function j(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        r = (0, C.gZ)(t, n),
        l = (0, C.nW)((0, C.rF)(t.length, n));
    if (null == r || null == l) return null;
    let a = (0, C._k)(t, n);
    return (0, i.jsxs)(s.HelpMessage, {
        messageType: s.HelpMessageTypes.WARNING,
        children: [
            (0, i.jsx)('div', {
                className: T.guildBoostingGracePeriodTitle,
                children: N.intl.format(N.t.LG7vvr, {})
            }),
            (0, i.jsx)(b, {
                endsAt: r,
                appliedGuildBoostsToMaintain: a,
                tierName: l
            })
        ]
    });
}
let S = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: r, tier: l, tiers: s, tierIndex: a, guildId: o } = e;
    return (0, i.jsx)(
        x.Z,
        {
            subscriptionCount: r,
            tier: l,
            onSetRef: n,
            isAnimatedTo: t,
            hasBottomMargin: a !== s.length - 1,
            guildId: o
        },
        l.tier
    );
};
function E() {
    r.useEffect(() => {
        a.Z.wait(() => {
            (0, o.tZ)(), (0, c.Y2)();
        });
    }, []);
    let e = (0, l.e7)([I.Z], () => I.Z.getGuild()),
        t = (0, l.e7)([p.Z], () => (null != e ? p.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.Fragment, {
                children: [
                    (0, i.jsx)(s.FormTitle, {
                        tag: s.FormTitleTags.H1,
                        children: N.intl.string(N.t.nLovSU)
                    }),
                    null != t && null != e
                        ? (0, i.jsx)(j, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, i.jsx)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: T.titleBlurb,
                        children: N.intl.format(N.t.hLOkp6, { helpdeskArticle: _.Z.getArticleURL(v.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            (0, i.jsx)(g.Z, {
                tiers: (0, C.cP)(null != e && e.hasFeature(v.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= v.B9o),
                renderTier: S
            }),
            (0, i.jsx)('div', { className: T.divider }),
            n ? (0, i.jsx)(h.Z, {}) : null,
            n
                ? (0, i.jsx)(m.Z, {
                      onOpenPremiumClick: () =>
                          void f.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: v.ZY5.GUILD_SETTINGS,
                                  section: v.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: v.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}

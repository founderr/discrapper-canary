t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return v;
        }
    });
var l = t(200651),
    i = t(192379),
    r = t(269210),
    a = t(752843),
    o = t(481060),
    s = t(757746),
    c = t(930155),
    u = t(889989),
    d = t(263519),
    m = t(73346),
    f = t(591759),
    p = t(886253),
    h = t(680005),
    x = t(938337);
function v(e) {
    var n, t;
    let { appId: v, subscriptionType: _, onClose: C, skuId: g, guildId: I, transitionState: b, onHeaderTitleClick: j } = e,
        { data: S } = (0, c.H)(g),
        N = S[0],
        { data: E } = (0, s.Z)(g),
        T = i.useMemo(() => {
            var e;
            return (null == E ? void 0 : E.thumbnail) != null && null !== (e = f.Z.toURLSafe((0, m._W)(v, E.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [v, null == E ? void 0 : E.thumbnail]),
        y = i.useMemo(() => {
            let e = null == E ? void 0 : E.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, u.n)(v, e.icon)
                }));
        }, [v, null == E ? void 0 : E.benefits]),
        { openModal: Z, subscriptionPurchaseButtonState: k } = (0, d.Z)({
            skuId: g,
            subscribeForGuild: null != I ? I : void 0
        });
    return null == E
        ? null
        : (0, l.jsx)(p.A, {
              appId: v,
              skuId: g,
              transitionState: b,
              onHeaderTitleClick: null != j ? j : C,
              onClose: C,
              footer: (0, l.jsx)(h.pV, {
                  onClick: Z,
                  appId: v,
                  subscriptionType: _,
                  skuId: g,
                  subscriptionPlan: N,
                  state: k
              }),
              children: (0, l.jsx)(x.i, {
                  appId: v,
                  skuId: g,
                  benefits:
                      null != y
                          ? y.map((e) =>
                                (0, l.jsx)(
                                    r.Gm,
                                    {
                                        header: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = E.description) && void 0 !== n ? n : void 0,
                  imgSrc: T,
                  title: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : E.summary,
                  tag: (0, l.jsx)(a.Z, { type: _ }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}

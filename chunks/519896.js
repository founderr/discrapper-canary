t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return I;
        }
    });
var l = t(735250),
    i = t(470079),
    s = t(269210),
    a = t(752843),
    o = t(481060),
    r = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(696906),
    p = t(73346),
    m = t(591759),
    v = t(886253),
    f = t(680005),
    h = t(938337);
function I(e) {
    var n;
    let { appId: t, subscriptionType: I, onClose: S, skuId: x, guildId: T, transitionState: N, onHeaderTitleClick: E } = e,
        { data: g } = (0, u.H)(x),
        { data: _ } = (0, r.Z)(x),
        R = i.useMemo(() => {
            var e;
            return (null == _ ? void 0 : _.thumbnail) != null && null !== (e = m.Z.toURLSafe((0, p._W)(t, _.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [t, null == _ ? void 0 : _.thumbnail]),
        Z = i.useMemo(() => {
            let e = null == _ ? void 0 : _.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(t, e.icon)
                }));
        }, [t, null == _ ? void 0 : _.benefits]),
        { openModal: C, canOpenModal: O } = (0, d.Z)({
            skuId: x,
            subscribeForGuild: null != T ? T : void 0
        });
    return null == _ || null == g || 0 === g.length
        ? null
        : (0, l.jsx)(v.A, {
              appId: t,
              skuId: x,
              transitionState: N,
              onHeaderTitleClick: null != E ? E : S,
              onClose: S,
              footer: (0, l.jsx)(f.p, {
                  onClick: C,
                  appId: t,
                  subscriptionType: I,
                  skuId: x,
                  subscriptionPlan: g[0],
                  canPurchase: O
              }),
              children: (0, l.jsx)(h.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != Z
                          ? Z.map((e) =>
                                (0, l.jsx)(
                                    s.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = _.description) && void 0 !== n ? n : void 0,
                  imgSrc: R,
                  title: g[0].name,
                  tag: (0, l.jsx)(a.Z, { type: I }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}

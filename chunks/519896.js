t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return x;
        }
    });
var i = t(735250),
    l = t(470079),
    r = t(269210),
    o = t(752843),
    s = t(481060),
    a = t(757746),
    c = t(930155),
    u = t(889989),
    d = t(73346),
    S = t(591759),
    m = t(886253),
    f = t(680005),
    I = t(938337);
function x(e) {
    var n;
    let { appId: t, groupListingId: x, subscriptionType: _, guildId: p, onClose: h, skuId: T, transitionState: v, onHeaderTitleClick: E } = e,
        { data: N } = (0, c.H)(T),
        { data: g } = (0, a.Z)(T),
        R = l.useMemo(() => {
            var e;
            return (null == g ? void 0 : g.thumbnail) != null && null !== (e = S.Z.toURLSafe((0, d._W)(t, g.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [t, null == g ? void 0 : g.thumbnail]),
        L = l.useMemo(() => {
            let e = null == g ? void 0 : g.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, u.n)(t, e.icon)
                }));
        }, [t, null == g ? void 0 : g.benefits]);
    return null == g || null == N || 0 === N.length
        ? null
        : (0, i.jsx)(m.A, {
              appId: t,
              skuId: T,
              transitionState: v,
              onHeaderTitleClick: null != E ? E : h,
              onClose: h,
              footer: (0, i.jsx)(f.p, {
                  appId: t,
                  groupListingId: x,
                  subscriptionType: _,
                  guildId: p,
                  skuId: T,
                  subscriptionPlan: N[0]
              }),
              children: (0, i.jsx)(I.i, {
                  appId: t,
                  skuId: T,
                  benefits:
                      null != L
                          ? L.map((e) =>
                                (0, i.jsx)(
                                    r.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = g.description) && void 0 !== n ? n : void 0,
                  imgSrc: R,
                  title: N[0].name,
                  tag: (0, i.jsx)(o.Z, { type: _ }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}

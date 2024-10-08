t.r(e),
    t.d(e, {
        SubscriptionDetailsModal: function () {
            return S;
        }
    });
var l = t(735250),
    i = t(470079),
    r = t(269210),
    a = t(752843),
    o = t(481060),
    s = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(696906),
    f = t(73346),
    p = t(591759),
    m = t(886253),
    v = t(680005),
    I = t(938337);
function S(n) {
    var e;
    let { appId: t, subscriptionType: S, onClose: h, skuId: x, guildId: g, transitionState: N, onHeaderTitleClick: Z } = n,
        { data: E } = (0, u.H)(x),
        { data: T } = (0, s.Z)(x),
        C = i.useMemo(() => {
            var n;
            return (null == T ? void 0 : T.thumbnail) != null && null !== (n = p.Z.toURLSafe((0, f._W)(t, T.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [t, null == T ? void 0 : T.thumbnail]),
        _ = i.useMemo(() => {
            let n = null == T ? void 0 : T.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, c.n)(t, n.icon)
                }));
        }, [t, null == T ? void 0 : T.benefits]),
        {
            openModal: A,
            canOpenModal: b,
            cannotOpenReason: O
        } = (0, d.Z)({
            skuId: x,
            guildId: g,
            showBenefitsFirst: !1
        });
    return null == T || null == E || 0 === E.length
        ? null
        : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: N,
              onHeaderTitleClick: null != Z ? Z : h,
              onClose: h,
              footer: (0, l.jsx)(v.p, {
                  onClick: A,
                  appId: t,
                  subscriptionType: S,
                  skuId: x,
                  subscriptionPlan: E[0],
                  canPurchase: b,
                  cannotPurchaseReason: O
              }),
              children: (0, l.jsx)(I.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != _
                          ? _.map((n) =>
                                (0, l.jsx)(
                                    r.G,
                                    {
                                        name: n.title,
                                        icon: n.icon,
                                        description: n.description
                                    },
                                    n.id
                                )
                            )
                          : void 0,
                  description: null !== (e = T.description) && void 0 !== e ? e : void 0,
                  imgSrc: C,
                  title: E[0].name,
                  tag: (0, l.jsx)(a.Z, { type: S }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}

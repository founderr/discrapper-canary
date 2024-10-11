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
    p = t(73346),
    f = t(591759),
    m = t(886253),
    v = t(680005),
    I = t(938337);
function S(n) {
    var e;
    let { appId: t, subscriptionType: S, onClose: h, skuId: x, guildId: N, transitionState: T, onHeaderTitleClick: g } = n,
        { data: E } = (0, u.H)(x),
        { data: Z } = (0, s.Z)(x),
        _ = i.useMemo(() => {
            var n;
            return (null == Z ? void 0 : Z.thumbnail) != null && null !== (n = f.Z.toURLSafe((0, p._W)(t, Z.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [t, null == Z ? void 0 : Z.thumbnail]),
        C = i.useMemo(() => {
            let n = null == Z ? void 0 : Z.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, c.n)(t, n.icon)
                }));
        }, [t, null == Z ? void 0 : Z.benefits]),
        {
            openModal: O,
            canOpenModal: R,
            cannotOpenReason: A
        } = (0, d.Z)({
            skuId: x,
            guildId: N,
            showBenefitsFirst: !1
        });
    return null == Z || null == E || 0 === E.length
        ? null
        : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: T,
              onHeaderTitleClick: null != g ? g : h,
              onClose: h,
              footer: (0, l.jsx)(v.p, {
                  onClick: O,
                  appId: t,
                  subscriptionType: S,
                  skuId: x,
                  subscriptionPlan: E[0],
                  canPurchase: R,
                  cannotPurchaseReason: A
              }),
              children: (0, l.jsx)(I.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != C
                          ? C.map((n) =>
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
                  description: null !== (e = Z.description) && void 0 !== e ? e : void 0,
                  imgSrc: _,
                  title: E[0].name,
                  tag: (0, l.jsx)(a.Z, { type: S }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}

n.r(t),
    n.d(t, {
        SubscriptionDetailsModal: function () {
            return m;
        }
    });
var r = n(735250),
    i = n(470079),
    a = n(269210),
    o = n(752843),
    s = n(481060),
    l = n(757746),
    u = n(930155),
    c = n(889989),
    d = n(696906),
    _ = n(73346),
    E = n(591759),
    f = n(886253),
    h = n(680005),
    p = n(938337);
function m(e) {
    var t;
    let { appId: n, subscriptionType: m, onClose: I, skuId: T, guildId: g, transitionState: S, onHeaderTitleClick: A } = e,
        { data: v } = (0, u.H)(T),
        { data: N } = (0, l.Z)(T),
        O = i.useMemo(() => {
            var e;
            return (null == N ? void 0 : N.thumbnail) != null && null !== (e = E.Z.toURLSafe((0, _._W)(n, N.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [n, null == N ? void 0 : N.thumbnail]),
        R = i.useMemo(() => {
            let e = null == N ? void 0 : N.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(n, e.icon)
                }));
        }, [n, null == N ? void 0 : N.benefits]),
        {
            openModal: C,
            canOpenModal: y,
            cannotOpenReason: L
        } = (0, d.Z)({
            skuId: T,
            guildId: g,
            showBenefitsFirst: !1
        });
    return null == N || null == v || 0 === v.length
        ? null
        : (0, r.jsx)(f.A, {
              appId: n,
              skuId: T,
              transitionState: S,
              onHeaderTitleClick: null != A ? A : I,
              onClose: I,
              footer: (0, r.jsx)(h.p, {
                  onClick: C,
                  appId: n,
                  subscriptionType: m,
                  skuId: T,
                  subscriptionPlan: v[0],
                  canPurchase: y,
                  cannotPurchaseReason: L
              }),
              children: (0, r.jsx)(p.i, {
                  appId: n,
                  skuId: T,
                  benefits:
                      null != R
                          ? R.map((e) =>
                                (0, r.jsx)(
                                    a.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (t = N.description) && void 0 !== t ? t : void 0,
                  imgSrc: O,
                  title: v[0].name,
                  tag: (0, r.jsx)(o.Z, { type: m }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}

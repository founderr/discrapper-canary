t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return h;
        }
    });
var l = t(735250),
    i = t(470079),
    a = t(269210),
    r = t(752843),
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
function h(e) {
    var n;
    let { appId: t, subscriptionType: h, onClose: S, skuId: x, guildId: N, transitionState: T, onHeaderTitleClick: Z } = e,
        { data: g } = (0, u.H)(x),
        { data: E } = (0, s.Z)(x),
        _ = i.useMemo(() => {
            var e;
            return (null == E ? void 0 : E.thumbnail) != null && null !== (e = f.Z.toURLSafe((0, p._W)(t, E.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [t, null == E ? void 0 : E.thumbnail]),
        R = i.useMemo(() => {
            let e = null == E ? void 0 : E.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(t, e.icon)
                }));
        }, [t, null == E ? void 0 : E.benefits]),
        {
            openModal: C,
            canOpenModal: O,
            cannotOpenReason: A
        } = (0, d.Z)({
            skuId: x,
            guildId: N,
            showBenefitsFirst: !1
        });
    return null == E || null == g || 0 === g.length
        ? null
        : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: T,
              onHeaderTitleClick: null != Z ? Z : S,
              onClose: S,
              footer: (0, l.jsx)(v.p, {
                  onClick: C,
                  appId: t,
                  subscriptionType: h,
                  skuId: x,
                  subscriptionPlan: g[0],
                  canPurchase: O,
                  cannotPurchaseReason: A
              }),
              children: (0, l.jsx)(I.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != R
                          ? R.map((e) =>
                                (0, l.jsx)(
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
                  description: null !== (n = E.description) && void 0 !== n ? n : void 0,
                  imgSrc: _,
                  title: g[0].name,
                  tag: (0, l.jsx)(r.Z, { type: h }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}

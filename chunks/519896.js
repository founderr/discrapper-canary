t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return I;
        }
    });
var l = t(735250),
    i = t(470079),
    a = t(269210),
    s = t(752843),
    r = t(481060),
    o = t(757746),
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
    let { appId: t, subscriptionType: I, onClose: x, skuId: S, guildId: T, transitionState: N, onHeaderTitleClick: E } = e,
        { data: _ } = (0, u.H)(S),
        { data: g } = (0, o.Z)(S),
        Z = i.useMemo(() => {
            var e;
            return (null == g ? void 0 : g.thumbnail) != null && null !== (e = m.Z.toURLSafe((0, p._W)(t, g.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [t, null == g ? void 0 : g.thumbnail]),
        R = i.useMemo(() => {
            let e = null == g ? void 0 : g.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(t, e.icon)
                }));
        }, [t, null == g ? void 0 : g.benefits]),
        { openModal: O, canOpenModal: j } = (0, d.Z)({
            skuId: S,
            guildId: T,
            showBenefitsFirst: !1
        });
    return null == g || null == _ || 0 === _.length
        ? null
        : (0, l.jsx)(v.A, {
              appId: t,
              skuId: S,
              transitionState: N,
              onHeaderTitleClick: null != E ? E : x,
              onClose: x,
              footer: (0, l.jsx)(f.p, {
                  onClick: O,
                  appId: t,
                  subscriptionType: I,
                  skuId: S,
                  subscriptionPlan: _[0],
                  canPurchase: j
              }),
              children: (0, l.jsx)(h.i, {
                  appId: t,
                  skuId: S,
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
                  description: null !== (n = g.description) && void 0 !== n ? n : void 0,
                  imgSrc: Z,
                  title: _[0].name,
                  tag: (0, l.jsx)(s.Z, { type: I }),
                  FallbackIcon: r.BadgeIcon
              })
          });
}

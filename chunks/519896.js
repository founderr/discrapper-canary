t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return v;
        }
    });
var o = t(200651),
    l = t(192379),
    r = t(269210),
    i = t(752843),
    s = t(481060),
    a = t(757746),
    c = t(930155),
    d = t(889989),
    u = t(263519),
    m = t(73346),
    x = t(591759),
    f = t(886253),
    h = t(680005),
    p = t(938337);
function v(e) {
    var n, t;
    let { appId: v, subscriptionType: _, onClose: j, skuId: I, guildId: g, transitionState: k, onHeaderTitleClick: N } = e,
        { data: C } = (0, c.H)(I),
        S = C[0],
        { data: b } = (0, a.Z)(I),
        T = l.useMemo(() => {
            var e;
            return (null == b ? void 0 : b.thumbnail) != null && null !== (e = x.Z.toURLSafe((0, m._W)(v, b.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [v, null == b ? void 0 : b.thumbnail]),
        E = l.useMemo(() => {
            let e = null == b ? void 0 : b.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(v, e.icon)
                }));
        }, [v, null == b ? void 0 : b.benefits]),
        { openModal: R, subscriptionPurchaseButtonState: B } = (0, u.Z)({
            skuId: I,
            subscribeForGuild: null != g ? g : void 0
        });
    return null == b
        ? null
        : (0, o.jsx)(f.A, {
              appId: v,
              skuId: I,
              transitionState: k,
              onHeaderTitleClick: null != N ? N : j,
              onClose: j,
              footer: (0, o.jsx)(h.pV, {
                  onClick: R,
                  appId: v,
                  subscriptionType: _,
                  skuId: I,
                  subscriptionPlan: S,
                  state: B
              }),
              children: (0, o.jsx)(p.i, {
                  appId: v,
                  skuId: I,
                  benefits:
                      null != E
                          ? E.map((e) =>
                                (0, o.jsx)(
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
                  description: null !== (n = b.description) && void 0 !== n ? n : void 0,
                  imgSrc: T,
                  title: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : b.summary,
                  tag: (0, o.jsx)(i.Z, { type: _ }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}

t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return v;
        }
    });
var o = t(200651),
    l = t(192379),
    i = t(269210),
    r = t(752843),
    s = t(481060),
    a = t(757746),
    c = t(930155),
    d = t(889989),
    u = t(263519),
    m = t(73346),
    x = t(591759),
    h = t(886253),
    f = t(680005),
    p = t(938337);
function v(e) {
    var n, t;
    let { appId: v, subscriptionType: _, onClose: j, skuId: I, guildId: N, transitionState: k, onHeaderTitleClick: S } = e,
        { data: T } = (0, c.H)(I),
        g = T[0],
        { data: C } = (0, a.Z)(I),
        R = l.useMemo(() => {
            var e;
            return (null == C ? void 0 : C.thumbnail) != null && null !== (e = x.Z.toURLSafe((0, m._W)(v, C.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [v, null == C ? void 0 : C.thumbnail]),
        E = l.useMemo(() => {
            let e = null == C ? void 0 : C.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(v, e.icon)
                }));
        }, [v, null == C ? void 0 : C.benefits]),
        { openModal: Z, subscriptionPurchaseButtonState: b } = (0, u.Z)({
            skuId: I,
            subscribeForGuild: null != N ? N : void 0
        });
    return null == C
        ? null
        : (0, o.jsx)(h.A, {
              appId: v,
              skuId: I,
              transitionState: k,
              onHeaderTitleClick: null != S ? S : j,
              onClose: j,
              footer: (0, o.jsx)(f.pV, {
                  onClick: Z,
                  appId: v,
                  subscriptionType: _,
                  skuId: I,
                  subscriptionPlan: g,
                  state: b
              }),
              children: (0, o.jsx)(p.i, {
                  appId: v,
                  skuId: I,
                  benefits:
                      null != E
                          ? E.map((e) =>
                                (0, o.jsx)(
                                    i.Gm,
                                    {
                                        header: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = C.description) && void 0 !== n ? n : void 0,
                  imgSrc: R,
                  title: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : C.summary,
                  tag: (0, o.jsx)(r.Z, { type: _ }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}

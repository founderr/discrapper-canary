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
    let { appId: v, subscriptionType: _, onClose: j, skuId: I, guildId: N, transitionState: S, onHeaderTitleClick: k } = e,
        { data: g } = (0, c.H)(I),
        C = g[0],
        { data: R } = (0, a.Z)(I),
        T = l.useMemo(() => {
            var e;
            return (null == R ? void 0 : R.thumbnail) != null && null !== (e = x.Z.toURLSafe((0, m._W)(v, R.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [v, null == R ? void 0 : R.thumbnail]),
        E = l.useMemo(() => {
            let e = null == R ? void 0 : R.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(v, e.icon)
                }));
        }, [v, null == R ? void 0 : R.benefits]),
        { openModal: Z, subscriptionPurchaseButtonState: b } = (0, u.Z)({
            skuId: I,
            subscribeForGuild: null != N ? N : void 0
        });
    return null == R
        ? null
        : (0, o.jsx)(h.A, {
              appId: v,
              skuId: I,
              transitionState: S,
              onHeaderTitleClick: null != k ? k : j,
              onClose: j,
              footer: (0, o.jsx)(f.pV, {
                  onClick: Z,
                  appId: v,
                  subscriptionType: _,
                  skuId: I,
                  subscriptionPlan: C,
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
                  description: null !== (n = R.description) && void 0 !== n ? n : void 0,
                  imgSrc: T,
                  title: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : R.summary,
                  tag: (0, o.jsx)(r.Z, { type: _ }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}

t.r(e),
    t.d(e, {
        SubscriptionDetailsModal: function () {
            return I;
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
    h = t(938337);
function I(n) {
    var e, t;
    let { appId: I, subscriptionType: S, onClose: x, skuId: T, guildId: E, transitionState: g, onHeaderTitleClick: N } = n,
        { data: R } = (0, u.H)(T),
        _ = R[0],
        { data: O } = (0, s.Z)(T),
        Z = i.useMemo(() => {
            var n;
            return (null == O ? void 0 : O.thumbnail) != null && null !== (n = f.Z.toURLSafe((0, p._W)(I, O.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [I, null == O ? void 0 : O.thumbnail]),
        C = i.useMemo(() => {
            let n = null == O ? void 0 : O.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, c.n)(I, n.icon)
                }));
        }, [I, null == O ? void 0 : O.benefits]),
        { openModal: b, cannotOpenReason: j } = (0, d.ZP)({
            skuId: T,
            subscribeForGuild: null != E ? E : void 0
        });
    return null == O
        ? null
        : (0, l.jsx)(m.A, {
              appId: I,
              skuId: T,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(v.p, {
                  onClick: b,
                  appId: I,
                  subscriptionType: S,
                  skuId: T,
                  subscriptionPlan: _,
                  cannotOpenReason: j
              }),
              children: (0, l.jsx)(h.i, {
                  appId: I,
                  skuId: T,
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
                  description: null !== (e = O.description) && void 0 !== e ? e : void 0,
                  imgSrc: Z,
                  title: null !== (t = null == _ ? void 0 : _.name) && void 0 !== t ? t : O.summary,
                  tag: (0, l.jsx)(a.Z, { type: S }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}

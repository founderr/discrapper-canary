t.r(e),
    t.d(e, {
        SubscriptionDetailsModal: function () {
            return I;
        }
    });
var l = t(200651),
    i = t(192379),
    r = t(269210),
    s = t(752843),
    a = t(481060),
    o = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(696906),
    f = t(73346),
    p = t(591759),
    v = t(886253),
    m = t(680005),
    h = t(938337);
function I(n) {
    var e, t;
    let { appId: I, subscriptionType: S, onClose: x, skuId: E, guildId: T, transitionState: g, onHeaderTitleClick: R } = n,
        { data: N } = (0, u.H)(E),
        O = N[0],
        { data: Z } = (0, o.Z)(E),
        _ = i.useMemo(() => {
            var n;
            return (null == Z ? void 0 : Z.thumbnail) != null && null !== (n = p.Z.toURLSafe((0, f._W)(I, Z.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [I, null == Z ? void 0 : Z.thumbnail]),
        C = i.useMemo(() => {
            let n = null == Z ? void 0 : Z.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, c.n)(I, n.icon)
                }));
        }, [I, null == Z ? void 0 : Z.benefits]),
        { openModal: j, cannotOpenReason: b } = (0, d.ZP)({
            skuId: E,
            subscribeForGuild: null != T ? T : void 0
        });
    return null == Z
        ? null
        : (0, l.jsx)(v.A, {
              appId: I,
              skuId: E,
              transitionState: g,
              onHeaderTitleClick: null != R ? R : x,
              onClose: x,
              footer: (0, l.jsx)(m.p, {
                  onClick: j,
                  appId: I,
                  subscriptionType: S,
                  skuId: E,
                  subscriptionPlan: O,
                  cannotOpenReason: b
              }),
              children: (0, l.jsx)(h.i, {
                  appId: I,
                  skuId: E,
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
                  title: null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : Z.summary,
                  tag: (0, l.jsx)(s.Z, { type: S }),
                  FallbackIcon: a.BadgeIcon
              })
          });
}

t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return I;
        }
    });
var l = t(735250);
t(470079);
var i = t(752843),
    s = t(442837),
    a = t(481060),
    o = t(55563),
    r = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    p = t(886253),
    m = t(680005),
    v = t(938337),
    f = t(981631),
    h = t(689938);
function I(e) {
    var n, t, I, S;
    let { onClose: x, transitionState: T, skuId: N, appId: E, onHeaderTitleClick: g } = e,
        _ = (0, s.e7)([r.Z], () => r.Z.getForSKU(N), [N]),
        Z = (0, s.e7)([o.Z], () => o.Z.get(N), [N]),
        R = (0, d.M)(N);
    if (null == Z) return null;
    let O = null !== (t = Z.name) && void 0 !== t ? t : '',
        C = null !== (I = null == _ ? void 0 : null === (n = _.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== I ? I : void 0,
        j = (null == _ ? void 0 : _.headerBackground) != null && null !== (S = c.Z.toURLSafe((0, u._W)(E, _.headerBackground, 256))) && void 0 !== S ? S : void 0,
        b = Z.type === f.epS.DURABLE && R,
        A = Z.type === f.epS.DURABLE ? (b ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: L } = Z;
    return null == L
        ? null
        : (0, l.jsx)(p.A, {
              appId: E,
              skuId: Z.id,
              transitionState: T,
              onHeaderTitleClick: null != g ? g : x,
              onClose: x,
              footer: (0, l.jsx)(m.Y, {
                  appId: E,
                  sku: Z
              }),
              children: (0, l.jsx)(v.i, {
                  appId: E,
                  skuId: Z.id,
                  title: O,
                  description: C,
                  imgSrc: j,
                  tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}

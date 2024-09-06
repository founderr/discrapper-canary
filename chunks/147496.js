t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return S;
        }
    });
var i = t(735250);
t(470079);
var l = t(752843),
    r = t(442837),
    s = t(481060),
    o = t(55563),
    a = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    f = t(886253),
    p = t(680005),
    m = t(938337),
    v = t(981631),
    I = t(689938);
function S(e) {
    var n, t, S, g;
    let { onClose: h, transitionState: x, skuId: E, appId: _, onHeaderTitleClick: N } = e,
        T = (0, r.e7)([a.Z], () => a.Z.getForSKU(E), [E]),
        Z = (0, r.e7)([o.Z], () => o.Z.get(E), [E]),
        C = (0, d.M)(E);
    if (null == Z) return null;
    let A = null !== (t = Z.name) && void 0 !== t ? t : '',
        L = null !== (S = null == T ? void 0 : null === (n = T.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== S ? S : void 0,
        b = (null == T ? void 0 : T.headerBackground) != null && null !== (g = c.Z.toURLSafe((0, u._W)(_, T.headerBackground, 256))) && void 0 !== g ? g : void 0,
        O = Z.type === v.epS.DURABLE && C,
        R = Z.type === v.epS.DURABLE ? (O ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: j } = Z;
    return null == j
        ? null
        : (0, i.jsx)(f.A, {
              appId: _,
              skuId: Z.id,
              transitionState: x,
              onHeaderTitleClick: null != N ? N : h,
              onClose: h,
              footer: (0, i.jsx)(p.Y, {
                  appId: _,
                  sku: Z
              }),
              children: (0, i.jsx)(m.i, {
                  appId: _,
                  skuId: Z.id,
                  title: A,
                  description: L,
                  imgSrc: b,
                  tag: null != R ? (0, i.jsx)(l.V, { text: R }) : void 0,
                  FallbackIcon: s.TicketIcon
              })
          });
}

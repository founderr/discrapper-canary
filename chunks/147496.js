t.r(e),
    t.d(e, {
        ItemDetailsModal: function () {
            return I;
        }
    });
var l = t(200651);
t(192379);
var i = t(752843),
    r = t(442837),
    s = t(481060),
    a = t(55563),
    o = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    f = t(886253),
    p = t(680005),
    v = t(938337),
    m = t(981631),
    h = t(689938);
function I(n) {
    var e, t, I, S;
    let { onClose: x, transitionState: E, skuId: T, appId: g, onHeaderTitleClick: R } = n,
        N = (0, r.e7)([o.Z], () => o.Z.getForSKU(T), [T]),
        O = (0, r.e7)([a.Z], () => a.Z.get(T), [T]),
        Z = (0, d.M)(T);
    if (null == O) return null;
    let _ = null !== (t = O.name) && void 0 !== t ? t : '',
        C = null !== (I = null == N ? void 0 : null === (e = N.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== I ? I : void 0,
        j = (null == N ? void 0 : N.headerBackground) != null && null !== (S = c.Z.toURLSafe((0, u._W)(g, N.headerBackground, 256))) && void 0 !== S ? S : void 0,
        b = O.type === m.epS.DURABLE && Z,
        A = O.type === m.epS.DURABLE ? (b ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: L } = O;
    return null == L
        ? null
        : (0, l.jsx)(f.A, {
              appId: g,
              skuId: O.id,
              transitionState: E,
              onHeaderTitleClick: null != R ? R : x,
              onClose: x,
              footer: (0, l.jsx)(p.Y, {
                  appId: g,
                  sku: O
              }),
              children: (0, l.jsx)(v.i, {
                  appId: g,
                  skuId: O.id,
                  title: _,
                  description: C,
                  imgSrc: j,
                  tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                  FallbackIcon: s.TicketIcon
              })
          });
}

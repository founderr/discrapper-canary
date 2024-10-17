t.r(e),
    t.d(e, {
        ItemDetailsModal: function () {
            return h;
        }
    });
var l = t(735250);
t(470079);
var i = t(752843),
    o = t(442837),
    r = t(481060),
    a = t(55563),
    s = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    p = t(886253),
    v = t(680005),
    m = t(938337),
    f = t(981631),
    I = t(689938);
function h(n) {
    var e, t, h, S;
    let { onClose: x, transitionState: g, skuId: T, appId: E, onHeaderTitleClick: N } = n,
        R = (0, o.e7)([s.Z], () => s.Z.getForSKU(T), [T]),
        O = (0, o.e7)([a.Z], () => a.Z.get(T), [T]),
        _ = (0, d.M)(T);
    if (null == O) return null;
    let Z = null !== (t = O.name) && void 0 !== t ? t : '',
        C = null !== (h = null == R ? void 0 : null === (e = R.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== h ? h : void 0,
        b = (null == R ? void 0 : R.headerBackground) != null && null !== (S = c.Z.toURLSafe((0, u._W)(E, R.headerBackground, 256))) && void 0 !== S ? S : void 0,
        j = O.type === f.epS.DURABLE && _,
        A = O.type === f.epS.DURABLE ? (j ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: L } = O;
    return null == L
        ? null
        : (0, l.jsx)(p.A, {
              appId: E,
              skuId: O.id,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(v.Y, {
                  appId: E,
                  sku: O
              }),
              children: (0, l.jsx)(m.i, {
                  appId: E,
                  skuId: O.id,
                  title: Z,
                  description: C,
                  imgSrc: b,
                  tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                  FallbackIcon: r.TicketIcon
              })
          });
}

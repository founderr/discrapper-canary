t.r(e),
    t.d(e, {
        ItemDetailsModal: function () {
            return I;
        }
    });
var l = t(735250);
t(470079);
var i = t(752843),
    r = t(442837),
    a = t(481060),
    o = t(55563),
    s = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    p = t(886253),
    f = t(680005),
    m = t(938337),
    v = t(981631),
    h = t(689938);
function I(n) {
    var e, t, I, S;
    let { onClose: x, transitionState: T, skuId: E, appId: g, onHeaderTitleClick: N } = n,
        R = (0, r.e7)([s.Z], () => s.Z.getForSKU(E), [E]),
        _ = (0, r.e7)([o.Z], () => o.Z.get(E), [E]),
        O = (0, d.M)(E);
    if (null == _) return null;
    let Z = null !== (t = _.name) && void 0 !== t ? t : '',
        C = null !== (I = null == R ? void 0 : null === (e = R.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== I ? I : void 0,
        b = (null == R ? void 0 : R.headerBackground) != null && null !== (S = c.Z.toURLSafe((0, u._W)(g, R.headerBackground, 256))) && void 0 !== S ? S : void 0,
        j = _.type === v.epS.DURABLE && O,
        A = _.type === v.epS.DURABLE ? (j ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: L } = _;
    return null == L
        ? null
        : (0, l.jsx)(p.A, {
              appId: g,
              skuId: _.id,
              transitionState: T,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(f.Y, {
                  appId: g,
                  sku: _
              }),
              children: (0, l.jsx)(m.i, {
                  appId: g,
                  skuId: _.id,
                  title: Z,
                  description: C,
                  imgSrc: b,
                  tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}

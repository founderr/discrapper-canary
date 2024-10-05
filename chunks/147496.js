t.r(e),
    t.d(e, {
        ItemDetailsModal: function () {
            return S;
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
    f = t(886253),
    p = t(680005),
    m = t(938337),
    v = t(981631),
    I = t(689938);
function S(n) {
    var e, t, S, h;
    let { onClose: x, transitionState: N, skuId: g, appId: T, onHeaderTitleClick: Z } = n,
        E = (0, r.e7)([s.Z], () => s.Z.getForSKU(g), [g]),
        C = (0, r.e7)([o.Z], () => o.Z.get(g), [g]),
        _ = (0, d.M)(g);
    if (null == C) return null;
    let A = null !== (t = C.name) && void 0 !== t ? t : '',
        O = null !== (S = null == E ? void 0 : null === (e = E.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== S ? S : void 0,
        R = (null == E ? void 0 : E.headerBackground) != null && null !== (h = c.Z.toURLSafe((0, u._W)(T, E.headerBackground, 256))) && void 0 !== h ? h : void 0,
        b = C.type === v.epS.DURABLE && _,
        j = C.type === v.epS.DURABLE ? (b ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: P } = C;
    return null == P
        ? null
        : (0, l.jsx)(f.A, {
              appId: T,
              skuId: C.id,
              transitionState: N,
              onHeaderTitleClick: null != Z ? Z : x,
              onClose: x,
              footer: (0, l.jsx)(p.Y, {
                  appId: T,
                  sku: C
              }),
              children: (0, l.jsx)(m.i, {
                  appId: T,
                  skuId: C.id,
                  title: A,
                  description: O,
                  imgSrc: R,
                  tag: null != j ? (0, l.jsx)(i.V, { text: j }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}

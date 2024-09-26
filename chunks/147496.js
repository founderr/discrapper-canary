n.r(t),
    n.d(t, {
        ItemDetailsModal: function () {
            return m;
        }
    });
var r = n(735250);
n(470079);
var i = n(752843),
    a = n(442837),
    o = n(481060),
    s = n(55563),
    l = n(551428),
    u = n(73346),
    c = n(591759),
    d = n(110742),
    _ = n(886253),
    E = n(680005),
    f = n(938337),
    h = n(981631),
    p = n(689938);
function m(e) {
    var t, n, m, I;
    let { onClose: T, transitionState: g, skuId: S, appId: A, onHeaderTitleClick: v } = e,
        N = (0, a.e7)([l.Z], () => l.Z.getForSKU(S), [S]),
        O = (0, a.e7)([s.Z], () => s.Z.get(S), [S]),
        R = (0, d.M)(S);
    if (null == O) return null;
    let C = null !== (n = O.name) && void 0 !== n ? n : '',
        y = null !== (m = null == N ? void 0 : null === (t = N.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== m ? m : void 0,
        L = (null == N ? void 0 : N.headerBackground) != null && null !== (I = c.Z.toURLSafe((0, u._W)(A, N.headerBackground, 256))) && void 0 !== I ? I : void 0,
        b = O.type === h.epS.DURABLE && R,
        D = O.type === h.epS.DURABLE ? (b ? p.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : p.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: M } = O;
    return null == M
        ? null
        : (0, r.jsx)(_.A, {
              appId: A,
              skuId: O.id,
              transitionState: g,
              onHeaderTitleClick: null != v ? v : T,
              onClose: T,
              footer: (0, r.jsx)(E.Y, {
                  appId: A,
                  sku: O
              }),
              children: (0, r.jsx)(f.i, {
                  appId: A,
                  skuId: O.id,
                  title: C,
                  description: y,
                  imgSrc: L,
                  tag: null != D ? (0, r.jsx)(i.V, { text: D }) : void 0,
                  FallbackIcon: o.TicketIcon
              })
          });
}

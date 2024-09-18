t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return S;
        }
    });
var l = t(735250);
t(470079);
var i = t(752843),
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
    var n, t, S, h;
    let { onClose: g, transitionState: x, skuId: _, appId: N, onHeaderTitleClick: E } = e,
        T = (0, r.e7)([a.Z], () => a.Z.getForSKU(_), [_]),
        Z = (0, r.e7)([o.Z], () => o.Z.get(_), [_]),
        C = (0, d.M)(_);
    if (null == Z) return null;
    let A = null !== (t = Z.name) && void 0 !== t ? t : '',
        O = null !== (S = null == T ? void 0 : null === (n = T.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== S ? S : void 0,
        L = (null == T ? void 0 : T.headerBackground) != null && null !== (h = c.Z.toURLSafe((0, u._W)(N, T.headerBackground, 256))) && void 0 !== h ? h : void 0,
        R = Z.type === v.epS.DURABLE && C,
        b = Z.type === v.epS.DURABLE ? (R ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: j } = Z;
    return null == j
        ? null
        : (0, l.jsx)(f.A, {
              appId: N,
              skuId: Z.id,
              transitionState: x,
              onHeaderTitleClick: null != E ? E : g,
              onClose: g,
              footer: (0, l.jsx)(p.Y, {
                  appId: N,
                  sku: Z
              }),
              children: (0, l.jsx)(m.i, {
                  appId: N,
                  skuId: Z.id,
                  title: A,
                  description: O,
                  imgSrc: L,
                  tag: null != b ? (0, l.jsx)(i.V, { text: b }) : void 0,
                  FallbackIcon: s.TicketIcon
              })
          });
}

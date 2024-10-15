t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return I;
        }
    });
var l = t(735250);
t(470079);
var i = t(752843),
    a = t(442837),
    s = t(481060),
    r = t(55563),
    o = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    p = t(886253),
    m = t(680005),
    v = t(938337),
    f = t(981631),
    h = t(689938);
function I(e) {
    var n, t, I, x;
    let { onClose: S, transitionState: T, skuId: N, appId: E, onHeaderTitleClick: _ } = e,
        g = (0, a.e7)([o.Z], () => o.Z.getForSKU(N), [N]),
        Z = (0, a.e7)([r.Z], () => r.Z.get(N), [N]),
        R = (0, d.M)(N);
    if (null == Z) return null;
    let O = null !== (t = Z.name) && void 0 !== t ? t : '',
        j = null !== (I = null == g ? void 0 : null === (n = g.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== I ? I : void 0,
        C = (null == g ? void 0 : g.headerBackground) != null && null !== (x = c.Z.toURLSafe((0, u._W)(E, g.headerBackground, 256))) && void 0 !== x ? x : void 0,
        A = Z.type === f.epS.DURABLE && R,
        b = Z.type === f.epS.DURABLE ? (A ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: L } = Z;
    return null == L
        ? null
        : (0, l.jsx)(p.A, {
              appId: E,
              skuId: Z.id,
              transitionState: T,
              onHeaderTitleClick: null != _ ? _ : S,
              onClose: S,
              footer: (0, l.jsx)(m.Y, {
                  appId: E,
                  sku: Z
              }),
              children: (0, l.jsx)(v.i, {
                  appId: E,
                  skuId: Z.id,
                  title: O,
                  description: j,
                  imgSrc: C,
                  tag: null != b ? (0, l.jsx)(i.V, { text: b }) : void 0,
                  FallbackIcon: s.TicketIcon
              })
          });
}

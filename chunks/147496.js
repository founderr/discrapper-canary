t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return _;
        }
    });
var i = t(735250);
t(470079);
var l = t(752843),
    r = t(442837),
    o = t(481060),
    s = t(55563),
    a = t(551428),
    c = t(73346),
    u = t(591759),
    d = t(110742),
    S = t(886253),
    m = t(680005),
    f = t(938337),
    I = t(981631),
    x = t(689938);
function _(e) {
    var n, t, _, p;
    let { onClose: h, transitionState: T, skuId: v, appId: E, onHeaderTitleClick: N } = e,
        g = (0, r.e7)([a.Z], () => a.Z.getForSKU(v), [v]),
        R = (0, r.e7)([s.Z], () => s.Z.get(v), [v]),
        L = (0, d.M)(v);
    if (null == R) return null;
    let C = null !== (t = R.name) && void 0 !== t ? t : '',
        j = null !== (_ = null == g ? void 0 : null === (n = g.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== _ ? _ : void 0,
        O = (null == g ? void 0 : g.headerBackground) != null && null !== (p = u.Z.toURLSafe((0, c._W)(E, g.headerBackground, 256))) && void 0 !== p ? p : void 0,
        Z = R.type === I.epS.DURABLE && L,
        A = R.type === I.epS.DURABLE ? (Z ? x.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : x.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: M } = R;
    return null == M
        ? null
        : (0, i.jsx)(S.A, {
              appId: E,
              skuId: R.id,
              transitionState: T,
              onHeaderTitleClick: null != N ? N : h,
              onClose: h,
              footer: (0, i.jsx)(m.Y, {
                  appId: E,
                  sku: R
              }),
              children: (0, i.jsx)(f.i, {
                  appId: E,
                  skuId: R.id,
                  title: C,
                  description: j,
                  imgSrc: O,
                  tag: null != A ? (0, i.jsx)(l.V, { text: A }) : void 0,
                  FallbackIcon: o.TicketIcon
              })
          });
}

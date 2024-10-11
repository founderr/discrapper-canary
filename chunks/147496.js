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
    p = t(886253),
    f = t(680005),
    m = t(938337),
    v = t(981631),
    I = t(689938);
function S(n) {
    var e, t, S, h;
    let { onClose: x, transitionState: N, skuId: T, appId: g, onHeaderTitleClick: E } = n,
        Z = (0, r.e7)([s.Z], () => s.Z.getForSKU(T), [T]),
        _ = (0, r.e7)([o.Z], () => o.Z.get(T), [T]),
        C = (0, d.M)(T);
    if (null == _) return null;
    let O = null !== (t = _.name) && void 0 !== t ? t : '',
        R = null !== (S = null == Z ? void 0 : null === (e = Z.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== S ? S : void 0,
        A = (null == Z ? void 0 : Z.headerBackground) != null && null !== (h = c.Z.toURLSafe((0, u._W)(g, Z.headerBackground, 256))) && void 0 !== h ? h : void 0,
        b = _.type === v.epS.DURABLE && C,
        j = _.type === v.epS.DURABLE ? (b ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: P } = _;
    return null == P
        ? null
        : (0, l.jsx)(p.A, {
              appId: g,
              skuId: _.id,
              transitionState: N,
              onHeaderTitleClick: null != E ? E : x,
              onClose: x,
              footer: (0, l.jsx)(f.Y, {
                  appId: g,
                  sku: _
              }),
              children: (0, l.jsx)(m.i, {
                  appId: g,
                  skuId: _.id,
                  title: O,
                  description: R,
                  imgSrc: A,
                  tag: null != j ? (0, l.jsx)(i.V, { text: j }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}

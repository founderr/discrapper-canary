t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return h;
        }
    });
var l = t(735250);
t(470079);
var i = t(752843),
    a = t(442837),
    r = t(481060),
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
function h(e) {
    var n, t, h, S;
    let { onClose: x, transitionState: N, skuId: T, appId: Z, onHeaderTitleClick: g } = e,
        E = (0, a.e7)([s.Z], () => s.Z.getForSKU(T), [T]),
        _ = (0, a.e7)([o.Z], () => o.Z.get(T), [T]),
        R = (0, d.M)(T);
    if (null == _) return null;
    let C = null !== (t = _.name) && void 0 !== t ? t : '',
        O = null !== (h = null == E ? void 0 : null === (n = E.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== h ? h : void 0,
        A = (null == E ? void 0 : E.headerBackground) != null && null !== (S = c.Z.toURLSafe((0, u._W)(Z, E.headerBackground, 256))) && void 0 !== S ? S : void 0,
        j = _.type === v.epS.DURABLE && R,
        b = _.type === v.epS.DURABLE ? (j ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: P } = _;
    return null == P
        ? null
        : (0, l.jsx)(p.A, {
              appId: Z,
              skuId: _.id,
              transitionState: N,
              onHeaderTitleClick: null != g ? g : x,
              onClose: x,
              footer: (0, l.jsx)(f.Y, {
                  appId: Z,
                  sku: _
              }),
              children: (0, l.jsx)(m.i, {
                  appId: Z,
                  skuId: _.id,
                  title: C,
                  description: O,
                  imgSrc: A,
                  tag: null != b ? (0, l.jsx)(i.V, { text: b }) : void 0,
                  FallbackIcon: r.TicketIcon
              })
          });
}

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
    let { onClose: x, transitionState: g, skuId: N, appId: Z, onHeaderTitleClick: E } = n,
        T = (0, r.e7)([s.Z], () => s.Z.getForSKU(N), [N]),
        C = (0, r.e7)([o.Z], () => o.Z.get(N), [N]),
        _ = (0, d.M)(N);
    if (null == C) return null;
    let A = null !== (t = C.name) && void 0 !== t ? t : '',
        b = null !== (S = null == T ? void 0 : null === (e = T.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== S ? S : void 0,
        O = (null == T ? void 0 : T.headerBackground) != null && null !== (h = c.Z.toURLSafe((0, u._W)(Z, T.headerBackground, 256))) && void 0 !== h ? h : void 0,
        R = C.type === v.epS.DURABLE && _,
        j = C.type === v.epS.DURABLE ? (R ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: P } = C;
    return null == P
        ? null
        : (0, l.jsx)(f.A, {
              appId: Z,
              skuId: C.id,
              transitionState: g,
              onHeaderTitleClick: null != E ? E : x,
              onClose: x,
              footer: (0, l.jsx)(p.Y, {
                  appId: Z,
                  sku: C
              }),
              children: (0, l.jsx)(m.i, {
                  appId: Z,
                  skuId: C.id,
                  title: A,
                  description: b,
                  imgSrc: O,
                  tag: null != j ? (0, l.jsx)(i.V, { text: j }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}

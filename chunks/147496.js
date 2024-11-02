t.r(e),
    t.d(e, {
        ItemDetailsModal: function () {
            return x;
        }
    });
var l = t(200651);
t(192379);
var i = t(752843),
    r = t(442837),
    o = t(481060),
    a = t(55563),
    s = t(551428),
    u = t(73346),
    c = t(591759),
    d = t(110742),
    p = t(886253),
    f = t(680005),
    v = t(938337),
    m = t(981631),
    h = t(388032);
function x(n) {
    var e, t, x, S;
    let { onClose: I, transitionState: g, skuId: Z, appId: T, onHeaderTitleClick: N } = n,
        b = (0, r.e7)([s.Z], () => s.Z.getForSKU(Z), [Z]),
        j = (0, r.e7)([a.Z], () => a.Z.get(Z), [Z]),
        E = (0, d.M)(Z);
    if (null == j) return null;
    let C = null !== (t = j.name) && void 0 !== t ? t : '',
        k = null !== (x = null == b ? void 0 : null === (e = b.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== x ? x : void 0,
        R = (null == b ? void 0 : b.headerBackground) != null && null !== (S = c.Z.toURLSafe((0, u._W)(T, b.headerBackground, 256))) && void 0 !== S ? S : void 0,
        _ = j.type === m.epS.DURABLE && E,
        O = j.type === m.epS.DURABLE ? (_ ? h.intl.string(h.t.bm82mp) : h.intl.string(h.t['6gprwc'])) : void 0,
        { price: P } = j;
    return null == P
        ? null
        : (0, l.jsx)(p.A, {
              appId: T,
              skuId: j.id,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : I,
              onClose: I,
              footer: (0, l.jsx)(f.Y, {
                  appId: T,
                  sku: j
              }),
              children: (0, l.jsx)(v.i, {
                  appId: T,
                  skuId: j.id,
                  title: C,
                  description: k,
                  imgSrc: R,
                  tag: null != O ? (0, l.jsx)(i.V, { text: O }) : void 0,
                  FallbackIcon: o.TicketIcon
              })
          });
}

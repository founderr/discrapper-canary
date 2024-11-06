n.r(t),
    n.d(t, {
        ItemDetailsModal: function () {
            return g;
        }
    });
var i = n(200651);
n(192379);
var a = n(752843),
    r = n(442837),
    l = n(481060),
    o = n(55563),
    s = n(551428),
    c = n(73346),
    d = n(591759),
    u = n(110742),
    p = n(886253),
    m = n(680005),
    _ = n(938337),
    h = n(981631),
    f = n(388032);
function g(e) {
    var t, n, g, v;
    let { onClose: x, transitionState: I, skuId: C, appId: N, onHeaderTitleClick: b } = e,
        S = (0, r.e7)([s.Z], () => s.Z.getForSKU(C), [C]),
        j = (0, r.e7)([o.Z], () => o.Z.get(C), [C]),
        T = (0, u.M)(C);
    if (null == j) return null;
    let y = null !== (n = j.name) && void 0 !== n ? n : '',
        E = null !== (g = null == S ? void 0 : null === (t = S.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== g ? g : void 0,
        A = (null == S ? void 0 : S.headerBackground) != null && null !== (v = d.Z.toURLSafe((0, c._W)(N, S.headerBackground, 256))) && void 0 !== v ? v : void 0,
        P = j.type === h.epS.DURABLE && T,
        L = j.type === h.epS.DURABLE ? (P ? f.intl.string(f.t.bm82mp) : f.intl.string(f.t['6gprwc'])) : void 0,
        { price: R } = j;
    return null == R
        ? null
        : (0, i.jsx)(p.A, {
              appId: N,
              skuId: j.id,
              transitionState: I,
              onHeaderTitleClick: null != b ? b : x,
              onClose: x,
              footer: (0, i.jsx)(m.Y, {
                  appId: N,
                  sku: j
              }),
              children: (0, i.jsx)(_.i, {
                  appId: N,
                  skuId: j.id,
                  title: y,
                  description: E,
                  imgSrc: A,
                  tag: null != L ? (0, i.jsx)(a.V, { text: L }) : void 0,
                  FallbackIcon: l.TicketIcon
              })
          });
}

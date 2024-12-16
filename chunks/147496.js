t.r(n),
    t.d(n, {
        ItemDetailsModal: function () {
            return v;
        }
    });
var l = t(200651);
t(192379);
var i = t(752843),
    r = t(442837),
    a = t(481060),
    o = t(55563),
    s = t(551428),
    c = t(73346),
    u = t(591759),
    d = t(110742),
    m = t(886253),
    f = t(680005),
    p = t(938337),
    x = t(981631),
    h = t(388032);
function v(e) {
    var n, t, v, C;
    let { onClose: _, transitionState: g, skuId: I, appId: b, onHeaderTitleClick: j } = e,
        S = (0, r.e7)([s.Z], () => s.Z.getForSKU(I), [I]),
        N = (0, r.e7)([o.Z], () => o.Z.get(I), [I]),
        T = (0, d.M)(I);
    if (null == N) return null;
    let E = null !== (t = N.name) && void 0 !== t ? t : '',
        y = null !== (v = null == S ? void 0 : null === (n = S.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== v ? v : void 0,
        Z = (null == S ? void 0 : S.headerBackground) != null && null !== (C = u.Z.toURLSafe((0, c._W)(b, S.headerBackground, 256))) && void 0 !== C ? C : void 0,
        k = N.type === x.epS.DURABLE && T,
        L = N.type === x.epS.DURABLE ? (k ? h.intl.string(h.t.bm82mp) : h.intl.string(h.t['6gprwc'])) : void 0,
        { price: R } = N;
    return null == R
        ? null
        : (0, l.jsx)(m.A, {
              appId: b,
              skuId: N.id,
              transitionState: g,
              onHeaderTitleClick: null != j ? j : _,
              onClose: _,
              footer: (0, l.jsx)(f.YG, {
                  appId: b,
                  sku: N
              }),
              children: (0, l.jsx)(p.i, {
                  appId: b,
                  skuId: N.id,
                  title: E,
                  description: y,
                  imgSrc: Z,
                  tag: null != L ? (0, l.jsx)(i.V, { text: L }) : void 0,
                  FallbackIcon: a.TicketIcon
              })
          });
}

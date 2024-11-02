n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    s = n(671533),
    c = n(240864),
    u = n(613810),
    d = n(596211),
    m = n(388032),
    f = n(467051);
function h(e) {
    var t, n, r, h;
    let { guildId: p, productId: g } = e,
        _ = (0, a.e7)([c.Z], () => c.Z.getGuildProduct(g)),
        C = (null !== (h = null == _ ? void 0 : null === (t = _.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== h ? h : 0) > 1,
        E = null == _ ? void 0 : null === (r = _.attachments) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.id;
    return C
        ? (0, i.jsxs)(o.Button, {
              onClick: function () {
                  u.Z.open({
                      guildId: p,
                      productId: g
                  });
              },
              innerClassName: f.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.UyuiUF) }),
                  (0, i.jsx)(o.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(s.Z, {
                      width: 16,
                      height: 16,
                      direction: s.Z.Directions.RIGHT
                  })
              ]
          })
        : (l()(null != E, 'No attachment'),
          (0, i.jsxs)(d.Z, {
              guildId: p,
              productId: g,
              attachmentId: E,
              innerClassName: f.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.t9bE9f) }),
                  (0, i.jsx)(o.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(o.DownloadIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}

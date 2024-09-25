n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(671533),
    u = n(240864),
    c = n(613810),
    d = n(596211),
    _ = n(689938),
    E = n(467051);
function f(e) {
    var t, n, i, f;
    let { guildId: h, productId: p } = e,
        m = (0, o.e7)([u.Z], () => u.Z.getGuildProduct(p)),
        I = (null !== (f = null == m ? void 0 : null === (t = m.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== f ? f : 0) > 1,
        T = null == m ? void 0 : null === (i = m.attachments) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.id;
    function g() {
        c.Z.open({
            guildId: h,
            productId: p
        });
    }
    return I
        ? (0, r.jsxs)(s.Button, {
              onClick: g,
              innerClassName: E.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES }),
                  (0, r.jsx)(s.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(l.Z, {
                      width: 16,
                      height: 16,
                      direction: l.Z.Directions.RIGHT
                  })
              ]
          })
        : (a()(null != T, 'No attachment'),
          (0, r.jsxs)(d.Z, {
              guildId: h,
              productId: p,
              attachmentId: T,
              innerClassName: E.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE }),
                  (0, r.jsx)(s.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(s.DownloadIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}

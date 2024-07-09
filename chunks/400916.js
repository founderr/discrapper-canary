n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(512722), s = n.n(a), r = n(399606), l = n(481060), o = n(671533), c = n(240864), d = n(613810), u = n(596211), _ = n(689938), E = n(731718);
function m(e) {
    var t, n, a, m;
    let {
            guildId: I,
            productId: T
        } = e, h = (0, r.e7)([c.Z], () => c.Z.getGuildProduct(T)), N = (null !== (m = null == h ? void 0 : null === (t = h.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== m ? m : 0) > 1, p = null == h ? void 0 : null === (a = h.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
    return N ? (0, i.jsxs)(l.Button, {
        onClick: function () {
            d.Z.open({
                guildId: I,
                productId: T
            });
        },
        innerClassName: E.textWithIcon,
        children: [
            (0, i.jsx)('div', { children: _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES }),
            (0, i.jsx)(l.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, i.jsx)(o.Z, {
                width: 16,
                height: 16,
                direction: o.Z.Directions.RIGHT
            })
        ]
    }) : (s()(null != p, 'No attachment'), (0, i.jsxs)(u.Z, {
        guildId: I,
        productId: T,
        attachmentId: p,
        innerClassName: E.textWithIcon,
        children: [
            (0, i.jsx)('div', { children: _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE }),
            (0, i.jsx)(l.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, i.jsx)(l.DownloadIcon, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    }));
}

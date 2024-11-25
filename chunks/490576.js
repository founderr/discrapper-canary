e.r(n),
    e.d(n, {
        default: function () {
            return b;
        }
    });
var a = e(200651);
e(192379);
var i = e(512722),
    r = e.n(i),
    o = e(468194),
    l = e(442837),
    c = e(477690),
    s = e(481060),
    d = e(809086),
    u = e(430824),
    m = e(240864),
    f = e(598952),
    x = e(596211),
    h = e(388032),
    g = e(954374);
let _ = (0, o.Mg)(c.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
function j(t) {
    let { guildProductListing: n, guildId: e, onClose: i } = t,
        r = (0, l.e7)([u.Z], () => {
            var t;
            return null === (t = u.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
        });
    return (0, a.jsxs)(s.ModalHeader, {
        className: g.header,
        children: [
            (0, a.jsx)(d.Z, {
                className: g.headerImage,
                listing: n,
                imageSize: _,
                alt: ''
            }),
            (0, a.jsx)(s.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, a.jsxs)('div', {
                className: g.headerTextColumn,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, a.jsx)(s.Spacer, { size: 8 }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: g.__invalid_description,
                        children: r
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: g.__invalid_description,
                        children: h.intl.format(h.t['6dOuaG'], { count: n.attachments_count })
                    })
                ]
            }),
            (0, a.jsx)(s.ModalCloseButton, {
                className: g.closeButton,
                onClick: i
            })
        ]
    });
}
function v(t) {
    let { attachment: n, guildId: e, productId: i } = t;
    return (0, a.jsxs)('li', {
        className: g.attachmentRow,
        children: [
            (0, a.jsx)(f.Z, { attachment: n }),
            (0, a.jsx)(x.Z, {
                className: g.attachmentDownloadButton,
                guildId: e,
                productId: i,
                attachmentId: n.id,
                children: (0, a.jsx)(s.DownloadIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function b(t) {
    var n;
    let { guildId: e, productId: i, onClose: o, transitionState: c } = t,
        d = (0, l.e7)([m.Z], () => m.Z.getGuildProduct(i));
    r()(null != d, 'guildProductListing cannot be null');
    let u = null !== (n = d.attachments) && void 0 !== n ? n : [];
    return (0, a.jsxs)(s.ModalRoot, {
        className: g.modal,
        size: s.ModalSize.MEDIUM,
        transitionState: c,
        'aria-label': h.intl.string(h.t['3jaCaW']),
        children: [
            (0, a.jsx)(j, {
                guildId: e,
                guildProductListing: d,
                onClose: o
            }),
            (0, a.jsx)(s.ModalContent, {
                children: (0, a.jsx)('ul', {
                    className: g.__invalid_attachmentsList,
                    children: u.map((t) =>
                        (0, a.jsx)(
                            v,
                            {
                                guildId: e,
                                productId: d.id,
                                attachment: t
                            },
                            t.id
                        )
                    )
                })
            })
        ]
    });
}

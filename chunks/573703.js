t.d(n, {
    Z: function () {
        return d;
    }
});
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(63063),
    s = t(376340),
    c = t(981631),
    l = t(689938),
    a = t(623022),
    C = t(38920);
function u() {
    return (0, o.jsx)('div', {
        className: a.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)('div', {
            className: a.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: (0, o.jsx)(i.Anchor, {
                    href: r.Z.getArticleURL(c.BhN.CRUNCHYROLL_CONNECTION),
                    children: l.Z.Messages.LEARN_MORE
                })
            })
        })
    });
}
function d(e) {
    let { onClose: n } = e;
    return (0, o.jsx)(s.L, {
        img: (0, o.jsx)('img', {
            src: C,
            width: '224',
            height: '104',
            alt: ''
        }),
        title: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
        body: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
        content: (0, o.jsx)(u, {}),
        onClose: n
    });
}

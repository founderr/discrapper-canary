t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(780384),
    s = t(481060),
    o = t(410030),
    c = t(44315),
    d = t(208567),
    u = t(981631),
    x = t(686550);
let m = u.Ilk.PRIMARY_400,
    h = u.Ilk.PRIMARY_500;
function g(e) {
    let { enabled: n, imageClassName: t, iconWrapperClassName: i, ...u } = e,
        g = (0, o.ZP)(),
        v = (0, a.wj)(g) ? m : h,
        j = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(v)
        };
    return (0, l.jsx)(d.Z, {
        className: r()({
            [x.avatarUploader]: n,
            [x.avatarUploaderDisabled]: !n
        }),
        imageClassName: r()(t, x.avatarUploaderInnerSquare, { [x.avatarUploaderInnerSquareDisabled]: !n }),
        icon:
            null != u.image && '' !== u.image
                ? (0, l.jsx)(s.PencilIcon, {
                      size: 'custom',
                      ...j
                  })
                : (0, l.jsx)(s.ImagePlusIcon, {
                      size: 'custom',
                      ...j
                  }),
        iconClassName: r()(x.avatarUploadIcon, x.hideDefaultIcon),
        iconWrapperClassName: i,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}

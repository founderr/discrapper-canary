l.d(n, {
    Z: function () {
        return I;
    }
});
var s = l(200651);
l(192379);
var a = l(120356),
    t = l.n(a),
    i = l(780384),
    r = l(481060),
    o = l(410030),
    d = l(44315),
    c = l(208567),
    u = l(981631),
    E = l(686550);
let _ = u.Ilk.PRIMARY_400,
    x = u.Ilk.PRIMARY_500;
function I(e) {
    let { enabled: n, imageClassName: l, iconWrapperClassName: a, ...u } = e,
        I = (0, o.ZP)(),
        m = (0, i.wj)(I) ? _ : x,
        N = {
            height: 18,
            width: 18,
            color: (0, d.Lq)(m)
        };
    return (0, s.jsx)(c.Z, {
        className: t()({
            [E.avatarUploader]: n,
            [E.avatarUploaderDisabled]: !n
        }),
        imageClassName: t()(l, E.avatarUploaderInnerSquare, { [E.avatarUploaderInnerSquareDisabled]: !n }),
        icon:
            null != u.image && '' !== u.image
                ? (0, s.jsx)(r.PencilIcon, {
                      size: 'custom',
                      ...N
                  })
                : (0, s.jsx)(r.ImagePlusIcon, {
                      size: 'custom',
                      ...N
                  }),
        iconClassName: t()(E.avatarUploadIcon, E.hideDefaultIcon),
        iconWrapperClassName: a,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}

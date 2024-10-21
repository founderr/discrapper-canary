n.d(t, {
    Dd: function () {
        return d;
    },
    Sw: function () {
        return _;
    },
    To: function () {
        return E;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(49800),
    o = n(600164),
    l = n(534542),
    u = n(512983),
    c = n(502002);
let d = s.Z.Types,
    _ = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function E(e) {
    let t,
        n,
        { type: i = s.Z.Types.DANGER, imageData: d, button: E, className: f, iconClassName: h, title: p, body: I, style: m, align: T = o.Z.Align.START } = e,
        S = o.Z.Direction.HORIZONTAL;
    if (null != d) {
        let { position: e, ...n } = d;
        (t = (0, r.jsx)(o.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)('img', {
                alt: '',
                className: a()(c.icon, h),
                ...n
            })
        })),
            e === _.RIGHT && (S = o.Z.Direction.HORIZONTAL_REVERSE);
    } else null != E && (n = E);
    let g = !0;
    return (
        i === s.Z.Types.PRIMARY && (g = !1),
        (0, r.jsx)(s.Z, {
            className: a()(c.formNotice, f),
            type: i,
            style: m,
            children: (0, r.jsxs)(o.Z, {
                direction: S,
                align: T,
                children: [
                    t,
                    (0, r.jsxs)(o.Z.Child, {
                        children: [
                            null != p && '' !== p
                                ? (0, r.jsx)(u.v, {
                                      tag: u.R.H5,
                                      className: a()(c.formNoticeTitle, { [c.whiteText]: g }),
                                      faded: !0,
                                      children: p
                                  })
                                : null,
                            (0, r.jsx)(l.R, {
                                className: a()(c.formNoticeBody, { [c.whiteText]: g }),
                                children: I
                            }),
                            n
                        ]
                    })
                ]
            })
        })
    );
}
E.Types = s.Z.Types;

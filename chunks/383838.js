n.d(t, {
    Dd: function () {
        return d;
    },
    Sw: function () {
        return f;
    },
    To: function () {
        return _;
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
    c = n(493022);
let d = s.Z.Types,
    f = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function _(e) {
    let t,
        n,
        { type: i = s.Z.Types.DANGER, imageData: d, button: _, className: h, iconClassName: p, title: m, body: g, style: E, align: v = o.Z.Align.START } = e,
        I = o.Z.Direction.HORIZONTAL;
    if (null != d) {
        let { position: e, ...n } = d;
        (t = (0, r.jsx)(o.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)('img', {
                alt: '',
                className: a()(c.icon, p),
                ...n
            })
        })),
            e === f.RIGHT && (I = o.Z.Direction.HORIZONTAL_REVERSE);
    } else null != _ && (n = _);
    let S = !0;
    return (
        i === s.Z.Types.PRIMARY && (S = !1),
        (0, r.jsx)(s.Z, {
            className: a()(c.formNotice, h),
            type: i,
            style: E,
            children: (0, r.jsxs)(o.Z, {
                direction: I,
                align: v,
                children: [
                    t,
                    (0, r.jsxs)(o.Z.Child, {
                        children: [
                            null != m && '' !== m
                                ? (0, r.jsx)(u.v, {
                                      tag: u.R.H5,
                                      className: a()(c.formNoticeTitle, { [c.whiteText]: S }),
                                      faded: !0,
                                      children: m
                                  })
                                : null,
                            (0, r.jsx)(l.R, {
                                className: a()(c.formNoticeBody, { [c.whiteText]: S }),
                                children: g
                            }),
                            n
                        ]
                    })
                ]
            })
        })
    );
}
_.Types = s.Z.Types;

var t = a(735250);
a(470079);
var i = a(120356),
    l = a.n(i),
    c = a(780384),
    o = a(481060),
    r = a(410030),
    s = a(726542),
    p = a(122021),
    d = a(231757),
    u = a(626135),
    m = a(981631),
    N = a(823302);
e.Z = (n) => {
    let { disabled: e = !1, type: a, className: i, innerClassName: f, onConnect: x } = n,
        h = (0, r.ZP)(),
        C = s.Z.get((0, p.rR)(a));
    return (0, t.jsx)(o.Tooltip, {
        text: C.name,
        children: (n) => {
            let { onMouseEnter: r, onMouseLeave: p } = n;
            return (0, t.jsx)('div', {
                className: l()(N.wrapper, i),
                children: (0, t.jsx)(o.FocusRing, {
                    children: (0, t.jsx)('button', {
                        onMouseEnter: r,
                        onMouseLeave: p,
                        className: l()(N.inner, f),
                        type: 'button',
                        disabled: e,
                        style: { backgroundImage: "url('".concat((0, c.wj)(h) ? C.icon.darkSVG : C.icon.lightSVG, "')") },
                        onClick:
                            null != x
                                ? x
                                : () =>
                                      (function (n) {
                                          let e = s.Z.get(n);
                                          (0, d.Z)({
                                              platformType: e.type,
                                              location: 'Friends List'
                                          }),
                                              u.default.track(m.rMx.ACCOUNT_LINK_STEP, {
                                                  previous_step: 'desktop connections',
                                                  current_step: 'desktop oauth',
                                                  platform_type: e.type
                                              });
                                      })(a),
                        'aria-label': C.name
                    })
                })
            });
        }
    });
};

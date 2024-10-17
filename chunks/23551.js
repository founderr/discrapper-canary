var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(780384),
    o = t(481060),
    l = t(410030),
    c = t(726542),
    d = t(122021),
    _ = t(231757),
    u = t(626135),
    E = t(981631),
    T = t(823302);
s.Z = (e) => {
    let { disabled: s = !1, type: t, className: a, innerClassName: S, onConnect: I } = e,
        N = (0, l.ZP)(),
        A = c.Z.get((0, d.rR)(t));
    return (0, n.jsx)(o.Tooltip, {
        text: A.name,
        children: (e) => {
            let { onMouseEnter: l, onMouseLeave: d } = e;
            return (0, n.jsx)('div', {
                className: i()(T.wrapper, a),
                children: (0, n.jsx)(o.FocusRing, {
                    children: (0, n.jsx)('button', {
                        onMouseEnter: l,
                        onMouseLeave: d,
                        className: i()(T.inner, S),
                        type: 'button',
                        disabled: s,
                        style: { backgroundImage: "url('".concat((0, r.wj)(N) ? A.icon.darkSVG : A.icon.lightSVG, "')") },
                        onClick:
                            null != I
                                ? I
                                : () =>
                                      (function (e) {
                                          let s = c.Z.get(e);
                                          (0, _.Z)({
                                              platformType: s.type,
                                              location: 'Friends List'
                                          }),
                                              u.default.track(E.rMx.ACCOUNT_LINK_STEP, {
                                                  previous_step: 'desktop connections',
                                                  current_step: 'desktop oauth',
                                                  platform_type: s.type
                                              });
                                      })(t),
                        'aria-label': A.name
                    })
                })
            });
        }
    });
};

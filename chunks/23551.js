var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(726542),
    d = n(122021),
    u = n(231757),
    m = n(626135),
    h = n(981631),
    g = n(823302);
t.Z = (e) => {
    let { disabled: t = !1, type: n, className: s, innerClassName: p, onConnect: x } = e,
        S = (0, o.ZP)(),
        T = c.Z.get((0, d.rR)(n));
    return (0, i.jsx)(a.Tooltip, {
        text: T.name,
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: d } = e;
            return (0, i.jsx)('div', {
                className: r()(g.wrapper, s),
                children: (0, i.jsx)(a.FocusRing, {
                    children: (0, i.jsx)('button', {
                        onMouseEnter: o,
                        onMouseLeave: d,
                        className: r()(g.inner, p),
                        type: 'button',
                        disabled: t,
                        style: { backgroundImage: "url('".concat((0, l.wj)(S) ? T.icon.darkSVG : T.icon.lightSVG, "')") },
                        onClick:
                            null != x
                                ? x
                                : () =>
                                      (function (e) {
                                          let t = c.Z.get(e);
                                          (0, u.Z)({
                                              platformType: t.type,
                                              location: 'Friends List'
                                          }),
                                              m.default.track(h.rMx.ACCOUNT_LINK_STEP, {
                                                  previous_step: 'desktop connections',
                                                  current_step: 'desktop oauth',
                                                  platform_type: t.type
                                              });
                                      })(n),
                        'aria-label': T.name
                    })
                })
            });
        }
    });
};

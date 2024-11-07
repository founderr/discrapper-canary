n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(40966),
    u = n(580552),
    c = n(249458),
    d = n(240991),
    f = n(882530);
function _(e) {
    let { userBio: t, className: n, animateOnHover: a = !1, isHovering: _ = !1, lineClamp: h = 6, setLineClamp: p = !0, textColor: m, userId: g } = e,
        E = i.useMemo(() => ((0, u.Z)(g) ? (0, r.jsx)(l.Z, {}) : null == t || '' === t ? null : (0, d.parseBioReact)(t)), [g, t]);
    return null == E
        ? null
        : (0, r.jsx)('div', {
              className: s()(n, f.markup),
              children: (0, r.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  lineClamp: p ? h : void 0,
                  color: void 0 !== m ? m : void 0,
                  children: (0, r.jsx)(c.G.Provider, {
                      value: {
                          disableAnimations: a && !_,
                          disableInteractions: !1
                      },
                      children: E
                  })
              })
          });
}

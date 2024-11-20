n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(802433),
    l = n(680295),
    c = n(296140),
    d = n(241822);
e.Z = (t) => {
    let { profileEffectId: e, isHovering: n, forCollectedModal: a = !1, isPurchased: u, removeSetHeight: f = !1 } = t,
        g = a ? 250 : 0.1,
        [p, v] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== a) v(!1);
        else {
            let t = setTimeout(() => {
                v(!1);
            }, g);
            return () => {
                clearTimeout(t);
            };
        }
    }, [g, a]),
    null != e)
        ? (0, r.jsxs)('div', {
              className: s()(c.previewContainer, {
                  [c.previewContainerAnimation]: a,
                  [c.previewContainerSetHeight]: !f
              }),
              children: [
                  (0, r.jsx)('img', {
                      src: d,
                      alt: ' ',
                      className: a ? c.previewForCollected : c.preview,
                      'aria-hidden': !0
                  }),
                  !p &&
                      (0, r.jsx)('div', {
                          className: u ? c.purchasedEffect : void 0,
                          children: (0, r.jsx)(l.Z, {
                              profileEffectId: e,
                              useThumbnail: !0,
                              autoPlay: a,
                              restartMethod: o.j.FromStart,
                              resetOnHover: !0,
                              isHovering: n,
                              introDelay: g,
                              useOpacityOnHover: !1,
                              shopPreview: !0
                          })
                      })
              ]
          })
        : null;
};

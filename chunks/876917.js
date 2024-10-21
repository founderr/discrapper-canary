n(47120);
var a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    i = n(802433),
    l = n(680295),
    c = n(296140),
    d = n(241822);
t.Z = (e) => {
    let { profileEffectId: t, isHovering: n, forCollectedModal: s = !1, isPurchased: u, removeSetHeight: f = !1 } = e,
        g = s ? 250 : 0.1,
        [p, E] = r.useState(!0);
    return (r.useEffect(() => {
        if (!0 !== s) E(!1);
        else {
            let e = setTimeout(() => {
                E(!1);
            }, g);
            return () => {
                clearTimeout(e);
            };
        }
    }, [g, s]),
    null != t)
        ? (0, a.jsxs)('div', {
              className: o()(c.previewContainer, {
                  [c.previewContainerAnimation]: s,
                  [c.previewContainerSetHeight]: !f
              }),
              children: [
                  (0, a.jsx)('img', {
                      src: d,
                      alt: ' ',
                      className: s ? c.previewForCollected : c.preview,
                      'aria-hidden': !0
                  }),
                  !p &&
                      (0, a.jsx)('div', {
                          className: u ? c.purchasedEffect : void 0,
                          children: (0, a.jsx)(l.Z, {
                              profileEffectId: t,
                              useThumbnail: !0,
                              autoPlay: s,
                              restartMethod: i.j.FromStart,
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

n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(802433),
    l = n(680295),
    c = n(537616),
    d = n(241822);
e.Z = (t) => {
    let { profileEffectId: e, isHovering: n, forCollectedModal: i = !1, isPurchased: u, removeSetHeight: f = !1 } = t,
        p = i ? 250 : 0.1,
        [g, h] = a.useState(!0);
    return (a.useEffect(() => {
        if (!0 !== i) h(!1);
        else {
            let t = setTimeout(() => {
                h(!1);
            }, p);
            return () => {
                clearTimeout(t);
            };
        }
    }, [p, i]),
    null != e)
        ? (0, r.jsxs)('div', {
              className: o()(c.previewContainer, {
                  [c.previewContainerAnimation]: i,
                  [c.previewContainerSetHeight]: !f
              }),
              children: [
                  (0, r.jsx)('img', {
                      src: d,
                      alt: ' ',
                      className: i ? c.previewForCollected : c.preview,
                      'aria-hidden': !0
                  }),
                  !g &&
                      (0, r.jsx)('div', {
                          className: u ? c.purchasedEffect : void 0,
                          children: (0, r.jsx)(l.Z, {
                              profileEffectId: e,
                              useThumbnail: !0,
                              autoPlay: i,
                              restartMethod: s.j.FromStart,
                              resetOnHover: !0,
                              isHovering: n,
                              introDelay: p,
                              useOpacityOnHover: !1,
                              shopPreview: !0
                          })
                      })
              ]
          })
        : null;
};

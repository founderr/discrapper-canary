var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(143927),
    u = n(318766),
    c = n(28546),
    d = n(957825),
    _ = n(933283);
function E(e, t) {
    let { disabled: n, type: r } = e,
        [o, E, f] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], l.Z),
        h = a.useCallback(() => {
            (0, c.RO)(d.X1.EMOJI, r);
        }, [r]);
    return n
        ? null
        : (0, i.jsx)('div', {
              className: s()(d.CT, _.buttonContainer),
              ref: t,
              children: (0, i.jsx)(u.Z, {
                  className: _.emojiButton,
                  onClick: h,
                  active: o === d.X1.EMOJI && E === r,
                  'aria-controls': f,
                  tabIndex: 0,
                  focusProps: {
                      offset: {
                          top: 4,
                          bottom: 4,
                          left: -4,
                          right: -4
                      }
                  }
              })
          });
}
t.Z = a.memo(a.forwardRef(E));

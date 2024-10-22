n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(619915),
    r = n(737592),
    s = n(561788),
    o = n(289223);
function c(e) {
    let { channel: t, onAction: n } = e,
        c = (0, a.ZP)(t),
        u = Array.from((0, a.uF)(c).values());
    return 0 === u.length
        ? null
        : (0, i.jsxs)(l.Scroller, {
              className: o.container,
              children: [
                  (0, i.jsx)('div', {
                      className: o.popoutHeaderContainer,
                      children: (0, i.jsx)(s.Z, { channel: t })
                  }),
                  (0, i.jsx)('div', { className: o.headerDivider }),
                  u.map((e, l) => {
                      var a;
                      return (0, i.jsx)(
                          r.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null !== (a = e.presenceActivity) && void 0 !== a ? a : void 0,
                              channel: t,
                              onAction: n
                          },
                          l
                      );
                  })
              ]
          });
}

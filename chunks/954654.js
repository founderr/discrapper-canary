l.d(n, {
    ZP: function () {
        return j;
    },
    xX: function () {
        return g;
    }
});
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(911969),
    s = l(970184),
    o = l(987106),
    u = l(927057),
    c = l(574597),
    d = l(378975),
    m = l(413991),
    p = l(12067),
    f = l(676149),
    x = l(861529),
    v = l(770009),
    h = l(889515),
    C = l(915689);
function g(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case a.re.ACTION_ROW:
                    return (0, t.jsx)(
                        h.Z,
                        {
                            ...e,
                            renderComponents: g
                        },
                        n
                    );
                case a.re.BUTTON:
                    return (0, t.jsx)(o.Z, { ...e }, n);
                case a.re.STRING_SELECT:
                    return (0, t.jsx)(d.Z, { ...e }, n);
                case a.re.CHANNEL_SELECT:
                    return (0, t.jsx)(u.Z, { ...e }, n);
                case a.re.USER_SELECT:
                case a.re.ROLE_SELECT:
                case a.re.MENTIONABLE_SELECT:
                    return (0, t.jsx)(c.Z, { ...e }, n);
                case a.re.INPUT_TEXT:
                    return (0, t.jsx)(m.Z, { ...e }, n);
                case a.re.TEXT:
                    return (0, t.jsx)(x.Z, { ...e }, n);
                case a.re.MEDIA_GALLERY:
                    return (0, t.jsx)(p.Z, { ...e }, n);
                case a.re.SEPARATOR:
                    return (0, t.jsx)(f.Z, { ...e }, n);
                case a.re.CONTENT_INVENTORY_ENTRY:
                    return (0, t.jsx)(v.Z, { ...e }, n);
            }
        })(e, n.toString())
    );
}
function j(e) {
    let { message: n } = e,
        { components: l } = n;
    return 0 === l.length
        ? null
        : (0, t.jsx)('div', {
              className: r()([C.container, { [C.containerUikit]: n.isUIKitComponents() }]),
              children: (0, t.jsx)(s.Il, {
                  message: n,
                  children: g(l)
              })
          });
}

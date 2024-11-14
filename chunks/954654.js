t.d(n, {
    ZP: function () {
        return g;
    },
    xX: function () {
        return C;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(911969),
    o = t(970184),
    s = t(987106),
    c = t(927057),
    u = t(574597),
    d = t(378975),
    m = t(413991),
    f = t(12067),
    p = t(676149),
    h = t(861529),
    x = t(770009),
    v = t(889515),
    _ = t(915689);
function C(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case a.re.ACTION_ROW:
                    return (0, l.jsx)(
                        v.Z,
                        {
                            ...e,
                            renderComponents: C
                        },
                        n
                    );
                case a.re.BUTTON:
                    return (0, l.jsx)(s.Z, { ...e }, n);
                case a.re.STRING_SELECT:
                    return (0, l.jsx)(d.Z, { ...e }, n);
                case a.re.CHANNEL_SELECT:
                    return (0, l.jsx)(c.Z, { ...e }, n);
                case a.re.USER_SELECT:
                case a.re.ROLE_SELECT:
                case a.re.MENTIONABLE_SELECT:
                    return (0, l.jsx)(u.Z, { ...e }, n);
                case a.re.INPUT_TEXT:
                    return (0, l.jsx)(m.Z, { ...e }, n);
                case a.re.TEXT:
                    return (0, l.jsx)(h.Z, { ...e }, n);
                case a.re.MEDIA_GALLERY:
                    return (0, l.jsx)(f.Z, { ...e }, n);
                case a.re.SEPARATOR:
                    return (0, l.jsx)(p.Z, { ...e }, n);
                case a.re.CONTENT_INVENTORY_ENTRY:
                    return (0, l.jsx)(x.Z, { ...e }, n);
            }
        })(e, n.toString())
    );
}
function g(e) {
    let { message: n } = e,
        { components: t } = n;
    return 0 === t.length
        ? null
        : (0, l.jsx)('div', {
              className: r()([_.container, { [_.containerUikit]: n.isUIKitComponents() }]),
              children: (0, l.jsx)(o.Il, {
                  message: n,
                  children: C(t)
              })
          });
}

t.d(n, {
    ZP: function () {
        return x;
    },
    xX: function () {
        return E;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    a = t.n(i),
    r = t(911969),
    o = t(970184),
    s = t(987106),
    c = t(927057),
    u = t(574597),
    d = t(378975),
    m = t(413991),
    _ = t(12067),
    f = t(676149),
    p = t(861529),
    C = t(770009),
    h = t(889515),
    I = t(915689);
function E(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case r.re.ACTION_ROW:
                    return (0, l.jsx)(
                        h.Z,
                        {
                            ...e,
                            renderComponents: E
                        },
                        n
                    );
                case r.re.BUTTON:
                    return (0, l.jsx)(s.Z, { ...e }, n);
                case r.re.STRING_SELECT:
                    return (0, l.jsx)(d.Z, { ...e }, n);
                case r.re.CHANNEL_SELECT:
                    return (0, l.jsx)(c.Z, { ...e }, n);
                case r.re.USER_SELECT:
                case r.re.ROLE_SELECT:
                case r.re.MENTIONABLE_SELECT:
                    return (0, l.jsx)(u.Z, { ...e }, n);
                case r.re.INPUT_TEXT:
                    return (0, l.jsx)(m.Z, { ...e }, n);
                case r.re.TEXT:
                    return (0, l.jsx)(p.Z, { ...e }, n);
                case r.re.MEDIA_GALLERY:
                    return (0, l.jsx)(_.Z, { ...e }, n);
                case r.re.SEPARATOR:
                    return (0, l.jsx)(f.Z, { ...e }, n);
                case r.re.CONTENT_INVENTORY_ENTRY:
                    return (0, l.jsx)(C.Z, { ...e }, n);
            }
        })(e, n.toString())
    );
}
function x(e) {
    let { message: n } = e,
        { components: t } = n;
    return 0 === t.length
        ? null
        : (0, l.jsx)('div', {
              className: a()([I.container, { [I.containerUikit]: n.isUIKitComponents() }]),
              children: (0, l.jsx)(o.Il, {
                  message: n,
                  children: E(t)
              })
          });
}

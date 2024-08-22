t.d(n, {
    ZP: function () {
        return N;
    },
    xX: function () {
        return h;
    }
});
var l = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
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
    E = t(770009),
    I = t(889515),
    C = t(751319);
function h(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case r.re.ACTION_ROW:
                    return (0, l.jsx)(
                        I.Z,
                        {
                            ...e,
                            renderComponents: h
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
                    return (0, l.jsx)(E.Z, { ...e }, n);
            }
        })(e, n.toString())
    );
}
function N(e) {
    let { message: n } = e,
        { components: t } = n;
    return 0 === t.length
        ? null
        : (0, l.jsx)('div', {
              className: i()([C.container, { [C.containerUikit]: n.isUIKitComponents() }]),
              children: (0, l.jsx)(o.Il, {
                  message: n,
                  children: h(t)
              })
          });
}

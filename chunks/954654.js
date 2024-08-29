l.d(n, {
    ZP: function () {
        return v;
    },
    xX: function () {
        return T;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    a = l.n(r),
    i = l(911969),
    s = l(970184),
    u = l(987106),
    o = l(927057),
    c = l(574597),
    d = l(378975),
    m = l(413991),
    E = l(12067),
    p = l(676149),
    N = l(861529),
    f = l(770009),
    _ = l(889515),
    C = l(751319);
function T(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case i.re.ACTION_ROW:
                    return (0, t.jsx)(
                        _.Z,
                        {
                            ...e,
                            renderComponents: T
                        },
                        n
                    );
                case i.re.BUTTON:
                    return (0, t.jsx)(u.Z, { ...e }, n);
                case i.re.STRING_SELECT:
                    return (0, t.jsx)(d.Z, { ...e }, n);
                case i.re.CHANNEL_SELECT:
                    return (0, t.jsx)(o.Z, { ...e }, n);
                case i.re.USER_SELECT:
                case i.re.ROLE_SELECT:
                case i.re.MENTIONABLE_SELECT:
                    return (0, t.jsx)(c.Z, { ...e }, n);
                case i.re.INPUT_TEXT:
                    return (0, t.jsx)(m.Z, { ...e }, n);
                case i.re.TEXT:
                    return (0, t.jsx)(N.Z, { ...e }, n);
                case i.re.MEDIA_GALLERY:
                    return (0, t.jsx)(E.Z, { ...e }, n);
                case i.re.SEPARATOR:
                    return (0, t.jsx)(p.Z, { ...e }, n);
                case i.re.CONTENT_INVENTORY_ENTRY:
                    return (0, t.jsx)(f.Z, { ...e }, n);
            }
        })(e, n.toString())
    );
}
function v(e) {
    let { message: n } = e,
        { components: l } = n;
    return 0 === l.length
        ? null
        : (0, t.jsx)('div', {
              className: a()([C.container, { [C.containerUikit]: n.isUIKitComponents() }]),
              children: (0, t.jsx)(s.Il, {
                  message: n,
                  children: T(l)
              })
          });
}

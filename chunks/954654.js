n.d(t, {
    ZP: function () {
        return S;
    },
    xX: function () {
        return T;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(911969),
    s = n(970184),
    l = n(987106),
    u = n(927057),
    c = n(574597),
    d = n(378975),
    _ = n(413991),
    E = n(12067),
    f = n(676149),
    h = n(861529),
    p = n(770009),
    m = n(889515),
    I = n(915689);
function T(e) {
    return e.map((e, t) => g(e, t.toString()));
}
function g(e, t) {
    switch (e.type) {
        case o.re.ACTION_ROW:
            return (0, r.jsx)(
                m.Z,
                {
                    ...e,
                    renderComponents: T
                },
                t
            );
        case o.re.BUTTON:
            return (0, r.jsx)(l.Z, { ...e }, t);
        case o.re.STRING_SELECT:
            return (0, r.jsx)(d.Z, { ...e }, t);
        case o.re.CHANNEL_SELECT:
            return (0, r.jsx)(u.Z, { ...e }, t);
        case o.re.USER_SELECT:
        case o.re.ROLE_SELECT:
        case o.re.MENTIONABLE_SELECT:
            return (0, r.jsx)(c.Z, { ...e }, t);
        case o.re.INPUT_TEXT:
            return (0, r.jsx)(_.Z, { ...e }, t);
        case o.re.TEXT:
            return (0, r.jsx)(h.Z, { ...e }, t);
        case o.re.MEDIA_GALLERY:
            return (0, r.jsx)(E.Z, { ...e }, t);
        case o.re.SEPARATOR:
            return (0, r.jsx)(f.Z, { ...e }, t);
        case o.re.CONTENT_INVENTORY_ENTRY:
            return (0, r.jsx)(p.Z, { ...e }, t);
    }
}
function S(e) {
    let { message: t } = e,
        { components: n } = t;
    return 0 === n.length
        ? null
        : (0, r.jsx)('div', {
              className: a()([I.container, { [I.containerUikit]: t.isUIKitComponents() }]),
              children: (0, r.jsx)(s.Il, {
                  message: t,
                  children: T(n)
              })
          });
}

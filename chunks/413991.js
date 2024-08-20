t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    r = t(481060),
    a = t(911969),
    o = t(970184),
    s = t(293979),
    c = t(203079);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: _, required: p, value: h } = e,
        [C, v] = i.useState(null != h ? h : ''),
        {
            state: x,
            executeStateUpdate: E,
            error: I
        } = (0, o.Ee)(
            e,
            null != h
                ? {
                      type: t,
                      value: h
                  }
                : void 0
        ),
        T = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == x ? void 0 : x.type) === t && v(x.value);
    }, [t, x]);
    let g = {
        name: d,
        value: C,
        placeholder: m,
        minLength: f,
        maxLength: _,
        required: p,
        onChange: (e) => {
            v(e),
                E({
                    type: t,
                    value: e
                });
        },
        autoFocus: T
    };
    switch (u) {
        case a.FO.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...g });
            break;
        case a.FO.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, { ...g });
    }
    return (0, l.jsx)(r.FormItem, {
        title: d,
        required: p,
        className: c.formItem,
        error: I,
        children: n
    });
}

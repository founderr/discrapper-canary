l.d(n, {
    Z: function () {
        return c;
    }
}),
    l(47120);
var t = l(735250),
    r = l(470079),
    i = l(481060),
    a = l(911969),
    s = l(970184),
    u = l(293979),
    o = l(203079);
function c(e) {
    let n;
    let { type: l, style: c, label: d, placeholder: m, minLength: p, maxLength: f, required: E, value: N } = e,
        [C, v] = r.useState(null != N ? N : ''),
        {
            state: h,
            executeStateUpdate: _,
            error: x
        } = (0, s.Ee)(
            e,
            null != N
                ? {
                      type: l,
                      value: N
                  }
                : void 0
        ),
        T = (0, u.hz)(e.id);
    r.useEffect(() => {
        (null == h ? void 0 : h.type) === l && v(h.value);
    }, [l, h]);
    let I = {
        name: d,
        value: C,
        placeholder: m,
        minLength: p,
        maxLength: f,
        required: E,
        onChange: (e) => {
            v(e),
                _({
                    type: l,
                    value: e
                });
        },
        autoFocus: T
    };
    switch (c) {
        case a.FO.SMALL:
            n = (0, t.jsx)(i.TextInput, { ...I });
            break;
        case a.FO.PARAGRAPH:
            n = (0, t.jsx)(i.TextArea, { ...I });
    }
    return (0, t.jsx)(i.FormItem, {
        title: d,
        required: E,
        className: o.formItem,
        error: x,
        children: n
    });
}

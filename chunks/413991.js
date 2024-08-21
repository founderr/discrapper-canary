t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    a = t(481060),
    r = t(911969),
    o = t(970184),
    s = t(293979),
    c = t(203079);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: _, required: p, value: C } = e,
        [h, E] = i.useState(null != C ? C : ''),
        {
            state: I,
            executeStateUpdate: T,
            error: x
        } = (0, o.Ee)(
            e,
            null != C
                ? {
                      type: t,
                      value: C
                  }
                : void 0
        ),
        N = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == I ? void 0 : I.type) === t && E(I.value);
    }, [t, I]);
    let v = {
        name: d,
        value: h,
        placeholder: m,
        minLength: f,
        maxLength: _,
        required: p,
        onChange: (e) => {
            E(e),
                T({
                    type: t,
                    value: e
                });
        },
        autoFocus: N
    };
    switch (u) {
        case r.FO.SMALL:
            n = (0, l.jsx)(a.TextInput, { ...v });
            break;
        case r.FO.PARAGRAPH:
            n = (0, l.jsx)(a.TextArea, { ...v });
    }
    return (0, l.jsx)(a.FormItem, {
        title: d,
        required: p,
        className: c.formItem,
        error: x,
        children: n
    });
}

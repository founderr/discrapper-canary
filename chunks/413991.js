t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(911969),
    o = t(970184),
    s = t(293979),
    c = t(203079);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: _, maxLength: f, required: p, value: E } = e,
        [I, C] = a.useState(null != E ? E : ''),
        {
            state: h,
            executeStateUpdate: N,
            error: T
        } = (0, o.Ee)(
            e,
            null != E
                ? {
                      type: t,
                      value: E
                  }
                : void 0
        ),
        x = (0, s.hz)(e.id);
    a.useEffect(() => {
        (null == h ? void 0 : h.type) === t && C(h.value);
    }, [t, h]);
    let v = {
        name: d,
        value: I,
        placeholder: m,
        minLength: _,
        maxLength: f,
        required: p,
        onChange: (e) => {
            C(e),
                N({
                    type: t,
                    value: e
                });
        },
        autoFocus: x
    };
    switch (u) {
        case r.FO.SMALL:
            n = (0, l.jsx)(i.TextInput, { ...v });
            break;
        case r.FO.PARAGRAPH:
            n = (0, l.jsx)(i.TextArea, { ...v });
    }
    return (0, l.jsx)(i.FormItem, {
        title: d,
        required: p,
        className: c.formItem,
        error: T,
        children: n
    });
}

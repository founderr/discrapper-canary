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
    let { type: l, style: c, label: d, placeholder: m, minLength: E, maxLength: f, required: p, value: C } = e,
        [N, _] = r.useState(null != C ? C : ''),
        {
            state: v,
            executeStateUpdate: T,
            error: h
        } = (0, s.Ee)(
            e,
            null != C
                ? {
                      type: l,
                      value: C
                  }
                : void 0
        ),
        I = (0, u.hz)(e.id);
    r.useEffect(() => {
        (null == v ? void 0 : v.type) === l && _(v.value);
    }, [l, v]);
    let x = {
        name: d,
        value: N,
        placeholder: m,
        minLength: E,
        maxLength: f,
        required: p,
        onChange: (e) => {
            _(e),
                T({
                    type: l,
                    value: e
                });
        },
        autoFocus: I
    };
    switch (c) {
        case a.FO.SMALL:
            n = (0, t.jsx)(i.TextInput, { ...x });
            break;
        case a.FO.PARAGRAPH:
            n = (0, t.jsx)(i.TextArea, { ...x });
    }
    return (0, t.jsx)(i.FormItem, {
        title: d,
        required: p,
        className: o.formItem,
        error: h,
        children: n
    });
}

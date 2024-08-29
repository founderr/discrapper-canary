l.d(n, {
    Z: function () {
        return c;
    }
}),
    l(47120);
var t = l(735250),
    r = l(470079),
    a = l(481060),
    i = l(911969),
    s = l(970184),
    u = l(293979),
    o = l(203079);
function c(e) {
    let n;
    let { type: l, style: c, label: d, placeholder: m, minLength: E, maxLength: p, required: N, value: f } = e,
        [_, C] = r.useState(null != f ? f : ''),
        {
            state: T,
            executeStateUpdate: v,
            error: h
        } = (0, s.Ee)(
            e,
            null != f
                ? {
                      type: l,
                      value: f
                  }
                : void 0
        ),
        x = (0, u.hz)(e.id);
    r.useEffect(() => {
        (null == T ? void 0 : T.type) === l && C(T.value);
    }, [l, T]);
    let I = {
        name: d,
        value: _,
        placeholder: m,
        minLength: E,
        maxLength: p,
        required: N,
        onChange: (e) => {
            C(e),
                v({
                    type: l,
                    value: e
                });
        },
        autoFocus: x
    };
    switch (c) {
        case i.FO.SMALL:
            n = (0, t.jsx)(a.TextInput, { ...I });
            break;
        case i.FO.PARAGRAPH:
            n = (0, t.jsx)(a.TextArea, { ...I });
    }
    return (0, t.jsx)(a.FormItem, {
        title: d,
        required: N,
        className: o.formItem,
        error: h,
        children: n
    });
}

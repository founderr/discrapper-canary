t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(481060),
    r = t(911969),
    o = t(970184),
    s = t(293979),
    c = t(350874);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: _, maxLength: f, required: p, value: C } = e,
        [h, I] = i.useState(null != C ? C : ''),
        {
            state: x,
            executeStateUpdate: E,
            error: v
        } = (0, o.Ee)(
            e,
            null != C
                ? {
                      type: t,
                      value: C
                  }
                : void 0
        ),
        T = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == x ? void 0 : x.type) === t && I(x.value);
    }, [t, x]);
    let N = {
        name: d,
        value: h,
        placeholder: m,
        minLength: _,
        maxLength: f,
        required: p,
        onChange: (e) => {
            I(e),
                E({
                    type: t,
                    value: e
                });
        },
        autoFocus: T
    };
    switch (u) {
        case r.FO.SMALL:
            n = (0, l.jsx)(a.TextInput, { ...N });
            break;
        case r.FO.PARAGRAPH:
            n = (0, l.jsx)(a.TextArea, {
                autosize: !0,
                ...N
            });
    }
    return (0, l.jsx)(a.FormItem, {
        title: d,
        required: p,
        className: c.formItem,
        error: v,
        children: n
    });
}

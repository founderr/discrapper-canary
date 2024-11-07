l.d(n, {
    Z: function () {
        return c;
    }
}),
    l(47120);
var t = l(200651),
    i = l(192379),
    r = l(481060),
    a = l(911969),
    s = l(970184),
    o = l(293979),
    u = l(666944);
function c(e) {
    let n;
    let { type: l, style: c, label: d, placeholder: m, minLength: p, maxLength: f, required: x, value: v } = e,
        [h, C] = i.useState(null != v ? v : ''),
        {
            state: g,
            executeStateUpdate: j,
            error: S
        } = (0, s.Ee)(
            e,
            null != v
                ? {
                      type: l,
                      value: v
                  }
                : void 0
        ),
        I = (0, o.hz)(e.id);
    i.useEffect(() => {
        (null == g ? void 0 : g.type) === l && C(g.value);
    }, [l, g]);
    let N = {
        name: d,
        value: h,
        placeholder: m,
        minLength: p,
        maxLength: f,
        required: x,
        onChange: (e) => {
            C(e),
                j({
                    type: l,
                    value: e
                });
        },
        autoFocus: I
    };
    switch (c) {
        case a.FO.SMALL:
            n = (0, t.jsx)(r.TextInput, { ...N });
            break;
        case a.FO.PARAGRAPH:
            n = (0, t.jsx)(r.TextArea, {
                autosize: !0,
                ...N
            });
    }
    return (0, t.jsx)(r.FormItem, {
        title: d,
        required: x,
        className: u.formItem,
        error: S,
        children: n
    });
}

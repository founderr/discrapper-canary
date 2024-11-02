t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(911969),
    o = t(970184),
    s = t(293979),
    c = t(350874);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: p, required: h, value: _ } = e,
        [x, C] = i.useState(null != _ ? _ : ''),
        {
            state: v,
            executeStateUpdate: b,
            error: g
        } = (0, o.Ee)(
            e,
            null != _
                ? {
                      type: t,
                      value: _
                  }
                : void 0
        ),
        I = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == v ? void 0 : v.type) === t && C(v.value);
    }, [t, v]);
    let S = {
        name: d,
        value: x,
        placeholder: m,
        minLength: f,
        maxLength: p,
        required: h,
        onChange: (e) => {
            C(e),
                b({
                    type: t,
                    value: e
                });
        },
        autoFocus: I
    };
    switch (u) {
        case a.FO.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...S });
            break;
        case a.FO.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, {
                autosize: !0,
                ...S
            });
    }
    return (0, l.jsx)(r.FormItem, {
        title: d,
        required: h,
        className: c.formItem,
        error: g,
        children: n
    });
}

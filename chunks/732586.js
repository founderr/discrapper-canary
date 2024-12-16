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
    c = t(234175);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: p, required: x, value: h } = e,
        [v, C] = i.useState(null != h ? h : ''),
        {
            state: _,
            executeStateUpdate: g,
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
        b = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == _ ? void 0 : _.type) === t && C(_.value);
    }, [t, _]);
    let j = {
        name: d,
        value: v,
        placeholder: m,
        minLength: f,
        maxLength: p,
        required: x,
        onChange: (e) => {
            C(e),
                g({
                    type: t,
                    value: e
                });
        },
        autoFocus: b
    };
    switch (u) {
        case a.PT.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...j });
            break;
        case a.PT.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, {
                autosize: !0,
                ...j
            });
    }
    return (0, l.jsx)(r.FormItem, {
        title: d,
        required: x,
        className: c.formItem,
        error: I,
        children: n
    });
}

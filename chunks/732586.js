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
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: p, required: h, value: x } = e,
        [v, _] = i.useState(null != x ? x : ''),
        {
            state: C,
            executeStateUpdate: g,
            error: I
        } = (0, o.Ee)(
            e,
            null != x
                ? {
                      type: t,
                      value: x
                  }
                : void 0
        ),
        b = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == C ? void 0 : C.type) === t && _(C.value);
    }, [t, C]);
    let j = {
        name: d,
        value: v,
        placeholder: m,
        minLength: f,
        maxLength: p,
        required: h,
        onChange: (e) => {
            _(e),
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
        required: h,
        className: c.formItem,
        error: I,
        children: n
    });
}

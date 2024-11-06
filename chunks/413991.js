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
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: p, required: x, value: h } = e,
        [v, _] = i.useState(null != h ? h : ''),
        {
            state: C,
            executeStateUpdate: b,
            error: g
        } = (0, o.Ee)(
            e,
            null != h
                ? {
                      type: t,
                      value: h
                  }
                : void 0
        ),
        I = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == C ? void 0 : C.type) === t && _(C.value);
    }, [t, C]);
    let j = {
        name: d,
        value: v,
        placeholder: m,
        minLength: f,
        maxLength: p,
        required: x,
        onChange: (e) => {
            _(e),
                b({
                    type: t,
                    value: e
                });
        },
        autoFocus: I
    };
    switch (u) {
        case a.FO.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...j });
            break;
        case a.FO.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, {
                autosize: !0,
                ...j
            });
    }
    return (0, l.jsx)(r.FormItem, {
        title: d,
        required: x,
        className: c.formItem,
        error: g,
        children: n
    });
}

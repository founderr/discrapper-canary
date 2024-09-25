n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(911969),
    l = n(970184),
    u = n(293979),
    c = n(350874);
function d(e) {
    let t;
    let { type: n, style: r, label: d, placeholder: _, minLength: E, maxLength: f, required: h, value: p } = e,
        [m, I] = a.useState(null != p ? p : ''),
        {
            state: T,
            executeStateUpdate: g,
            error: S
        } = (0, l.Ee)(
            e,
            null != p
                ? {
                      type: n,
                      value: p
                  }
                : void 0
        ),
        A = (0, u.hz)(e.id);
    a.useEffect(() => {
        (null == T ? void 0 : T.type) === n && I(T.value);
    }, [n, T]);
    let v = {
        name: d,
        value: m,
        placeholder: _,
        minLength: E,
        maxLength: f,
        required: h,
        onChange: (e) => {
            I(e),
                g({
                    type: n,
                    value: e
                });
        },
        autoFocus: A
    };
    switch (r) {
        case s.FO.SMALL:
            t = (0, i.jsx)(o.TextInput, { ...v });
            break;
        case s.FO.PARAGRAPH:
            t = (0, i.jsx)(o.TextArea, {
                autosize: !0,
                ...v
            });
    }
    return (0, i.jsx)(o.FormItem, {
        title: d,
        required: h,
        className: c.formItem,
        error: S,
        children: t
    });
}

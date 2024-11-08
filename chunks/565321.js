t(47120);
var r = t(200651),
    a = t(192379),
    i = t(481060),
    o = t(881052),
    s = t(484455),
    l = t(592286),
    c = t(388032),
    d = t(55529);
n.Z = function (e) {
    let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
        [f, h] = a.useState(null),
        [x, p] = a.useState(u),
        g = a.useRef(!1),
        C = a.useRef(!1);
    a.useEffect(
        () => () => {
            C.current = !0;
        },
        []
    );
    let b = a.useCallback(async () => {
        if (!g.current) {
            h(null);
            try {
                await t(n, x);
            } catch (e) {
                if (C.current) return;
                h(new o.Hx(e).getAnyErrorMessage());
            } finally {
                if (C.current) return;
                g.current = !1;
            }
        }
    }, [x, n, t]);
    return (0, r.jsxs)(s.Z, {
        title: c.intl.string(c.t.aDJAfn),
        children: [
            (0, r.jsx)(i.TextArea, {
                className: d.fieldBackground,
                maxLength: l.Us,
                value: null != x ? x : '',
                placeholder: c.intl.string(c.t.AJfv3d),
                onChange: (e) => {
                    p(e);
                },
                onBlur: b,
                autosize: !0,
                disabled: m
            }),
            null != f && '' !== f
                ? (0, r.jsx)(i.Text, {
                      className: d.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: f
                  })
                : null
        ]
    });
};

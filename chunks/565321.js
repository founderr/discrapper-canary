t(47120);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    r = t(881052),
    s = t(484455),
    o = t(592286),
    c = t(388032),
    d = t(31619);
n.Z = function (e) {
    let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
        [x, f] = l.useState(null),
        [h, g] = l.useState(u),
        v = l.useRef(!1),
        j = l.useRef(!1);
    l.useEffect(
        () => () => {
            j.current = !0;
        },
        []
    );
    let C = l.useCallback(async () => {
        if (!v.current) {
            f(null);
            try {
                await t(n, h);
            } catch (e) {
                if (j.current) return;
                f(new r.Hx(e).getAnyErrorMessage());
            } finally {
                if (j.current) return;
                v.current = !1;
            }
        }
    }, [h, n, t]);
    return (0, i.jsxs)(s.Z, {
        title: c.intl.string(c.t.aDJAfn),
        children: [
            (0, i.jsx)(a.TextArea, {
                className: d.fieldBackground,
                maxLength: o.Us,
                value: null != h ? h : '',
                placeholder: c.intl.string(c.t.AJfv3d),
                onChange: (e) => {
                    g(e);
                },
                onBlur: C,
                autosize: !0,
                disabled: m
            }),
            null != x && '' !== x
                ? (0, i.jsx)(a.Text, {
                      className: d.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: x
                  })
                : null
        ]
    });
};

t(47120);
var a = t(200651),
    r = t(192379),
    i = t(481060),
    s = t(881052),
    o = t(484455),
    l = t(592286),
    c = t(689938),
    d = t(631403);
n.Z = function (e) {
    let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
        [_, f] = r.useState(null),
        [C, h] = r.useState(u),
        x = r.useRef(!1),
        p = r.useRef(!1);
    r.useEffect(
        () => () => {
            p.current = !0;
        },
        []
    );
    let g = r.useCallback(async () => {
        if (!x.current) {
            f(null);
            try {
                await t(n, C);
            } catch (e) {
                if (p.current) return;
                f(new s.Hx(e).getAnyErrorMessage());
            } finally {
                if (p.current) return;
                x.current = !1;
            }
        }
    }, [C, n, t]);
    return (0, a.jsxs)(o.Z, {
        title: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
        children: [
            (0, a.jsx)(i.TextArea, {
                className: d.fieldBackground,
                maxLength: l.Us,
                value: null != C ? C : '',
                placeholder: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
                onChange: (e) => {
                    h(e);
                },
                onBlur: g,
                autosize: !0,
                disabled: m
            }),
            null != _ && '' !== _
                ? (0, a.jsx)(i.Text, {
                      className: d.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: _
                  })
                : null
        ]
    });
};

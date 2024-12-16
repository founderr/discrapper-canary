e.r(n),
    e.d(n, {
        ParagraphFormFieldModal: function () {
            return p;
        },
        TextInputFormFieldModal: function () {
            return f;
        }
    }),
    e(47120),
    e(757143);
var a = e(200651),
    r = e(192379),
    o = e(481060),
    i = e(881052),
    l = e(246364),
    d = e(915509),
    c = e(592286),
    s = e(388032);
function u(t) {
    var n;
    let { type: e, title: l, description: u, field: f, onSave: p, onClose: m } = t,
        [g, x] = r.useState(null !== (n = null == f ? void 0 : f.label) && void 0 !== n ? n : ''),
        [h, _] = r.useState(null),
        C = async () => {
            null != h && _(null);
            let t = g.trim();
            if ('' === t) {
                _(s.intl.string(s.t['G+TI4+']));
                return;
            }
            try {
                await p({
                    field_type: e,
                    label: t,
                    required: !0
                }),
                    m();
            } catch (t) {
                _(new i.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, a.jsx)(d.Z, {
        ...t,
        errorText: h,
        title: l,
        description: u,
        onConfirm: C,
        onCancel: m,
        children: (0, a.jsx)(o.TextInput, {
            onChange: (t) => {
                null != h && _(null);
                let n = t.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > c.XN && (n = n.slice(0, c.XN)), x(n);
            },
            placeholder: s.intl.string(s.t.fqVmbG),
            value: g,
            onKeyDown: (t) => 'Enter' === t.key && C()
        })
    });
}
function f(t) {
    return (0, a.jsx)(u, {
        title: s.intl.string(s.t.w6Q9w8),
        description: s.intl.string(s.t['A6M+qq']),
        type: l.QJ.TEXT_INPUT,
        ...t
    });
}
function p(t) {
    return (0, a.jsx)(u, {
        title: s.intl.string(s.t.gG0JBA),
        description: s.intl.string(s.t.SMX0iY),
        type: l.QJ.PARAGRAPH,
        ...t
    });
}

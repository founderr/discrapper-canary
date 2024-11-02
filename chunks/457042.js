e.r(n),
    e.d(n, {
        ParagraphFormFieldModal: function () {
            return m;
        },
        TextInputFormFieldModal: function () {
            return f;
        }
    }),
    e(47120),
    e(757143);
var a = e(200651),
    r = e(192379),
    l = e(481060),
    o = e(881052),
    i = e(246364),
    s = e(915509),
    d = e(592286),
    u = e(388032);
function c(t) {
    var n;
    let { type: e, title: i, description: c, field: f, onSave: m, onClose: p } = t,
        [x, g] = r.useState(null !== (n = null == f ? void 0 : f.label) && void 0 !== n ? n : ''),
        [_, C] = r.useState(null),
        h = async () => {
            null != _ && C(null);
            let t = x.trim();
            if ('' === t) {
                C(u.intl.string(u.t['G+TI4+']));
                return;
            }
            try {
                await m({
                    field_type: e,
                    label: t,
                    required: !0
                }),
                    p();
            } catch (t) {
                C(new o.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, a.jsx)(s.Z, {
        ...t,
        errorText: _,
        title: i,
        description: c,
        onConfirm: h,
        onCancel: p,
        children: (0, a.jsx)(l.TextInput, {
            onChange: (t) => {
                null != _ && C(null);
                let n = t.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > d.XN && (n = n.slice(0, d.XN)), g(n);
            },
            placeholder: u.intl.string(u.t.fqVmbG),
            value: x,
            onKeyDown: (t) => 'Enter' === t.key && h()
        })
    });
}
function f(t) {
    return (0, a.jsx)(c, {
        title: u.intl.string(u.t.w6Q9w8),
        description: u.intl.string(u.t['A6M+qq']),
        type: i.QJ.TEXT_INPUT,
        ...t
    });
}
function m(t) {
    return (0, a.jsx)(c, {
        title: u.intl.string(u.t.gG0JBA),
        description: u.intl.string(u.t.SMX0iY),
        type: i.QJ.PARAGRAPH,
        ...t
    });
}

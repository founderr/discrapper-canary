n.r(t), n(47120);
var l = n(200651),
    a = n(192379),
    i = n(97613),
    r = n.n(i),
    o = n(410575),
    s = n(881052),
    u = n(246364),
    d = n(296991),
    c = n(915509),
    f = n(981631),
    g = n(388032);
t.default = function (e) {
    let { field: t, onSave: n, onClose: i, guild: p } = e,
        [x, m] = a.useState(
            (null == t ? void 0 : t.values) != null
                ? null == t
                    ? void 0
                    : t.values.map((e) => ({
                          id: r()(),
                          value: e
                      }))
                : [
                      {
                          id: r()(),
                          value: ''
                      }
                  ]
        ),
        [C, h] = a.useState(null),
        b = async () => {
            null != C && h(null);
            let e = x.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) {
                h(g.intl.string(g.t.TCHkcX));
                return;
            }
            let t = {
                field_type: u.QJ.TERMS,
                label: g.intl.string(g.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                await n(t), i();
            } catch (e) {
                h(new s.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, l.jsx)(o.Z, {
        page: f.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, l.jsx)(c.Z, {
            ...e,
            errorText: C,
            title: g.intl.string(g.t['3pz9t7']),
            onCancel: i,
            onConfirm: b,
            children: (0, l.jsx)(d.k, {
                guild: p,
                rules: x,
                setRules: m
            })
        })
    });
};

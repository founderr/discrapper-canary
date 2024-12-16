t.r(n), t(47120);
var l = t(200651),
    a = t(192379),
    r = t(97613),
    i = t.n(r),
    o = t(410575),
    s = t(881052),
    u = t(246364),
    d = t(296991),
    c = t(915509),
    m = t(981631),
    f = t(388032);
n.default = function (e) {
    let { field: n, onSave: t, onClose: r, guild: x } = e,
        [g, h] = a.useState(
            (null == n ? void 0 : n.values) != null
                ? null == n
                    ? void 0
                    : n.values.map((e) => ({
                          id: i()(),
                          value: e
                      }))
                : [
                      {
                          id: i()(),
                          value: ''
                      }
                  ]
        ),
        [p, C] = a.useState(null),
        b = async () => {
            null != p && C(null);
            let e = g.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) {
                C(f.intl.string(f.t.TCHkcX));
                return;
            }
            let n = {
                field_type: u.QJ.TERMS,
                label: f.intl.string(f.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                await t(n), r();
            } catch (e) {
                C(new s.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, l.jsx)(o.Z, {
        page: m.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, l.jsx)(c.Z, {
            ...e,
            errorText: p,
            title: f.intl.string(f.t['3pz9t7']),
            onCancel: r,
            onConfirm: b,
            children: (0, l.jsx)(d.k, {
                guild: x,
                rules: g,
                setRules: h
            })
        })
    });
};

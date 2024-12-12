n(47120);
var i = n(200651),
    r = n(192379),
    l = n(236413),
    s = n(866894),
    a = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
t.Z = r.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: h, editingRule: g, createNewEditingRule: x, setEditingRule: p } = (0, a.V)(),
        { isLoading: f } = (0, a.w)(),
        [C] = r.useState(() => !(0, l.Vb)(t)),
        _ = (null == g ? void 0 : g.id) === t.id || n,
        I = (0, s.U)(null == t ? void 0 : t.id),
        v = _ && null != g ? g : t,
        N = r.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        T = r.useCallback(() => {
            x(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, x]),
        b = r.useCallback(
            (e) => {
                if (!f) p(e, !0);
            },
            [f, p]
        );
    r.useEffect(() => {
        m && p(t, !0);
    }, [m, t, p]);
    let j = r.useCallback(() => {
        _
            ? !h && p(null)
            : h
              ? N(() => {
                    p(t);
                })
              : p(t);
    }, [_, h, N, t, p]);
    return (0, i.jsx)(d.Z, {
        renderHeader: (0, i.jsx)(u.Z, {
            rule: v,
            forceSetup: C && !_ && !I,
            triggerType: t.triggerType,
            isEditMode: _,
            isDefaultRule: I,
            onChangeRule: b,
            onSetupRule: T
        }),
        isStuck: _ && h,
        isExpanded: _,
        onExpand: j,
        children:
            _ &&
            (0, i.jsx)(c.Z, {
                rule: v,
                isLoading: f,
                onChangeRule: b
            })
    });
});

n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(904245),
    r = n(257559),
    o = n(541716),
    c = n(893718),
    u = n(314897),
    d = n(323873),
    h = n(430824),
    p = n(496675),
    m = n(585483),
    _ = n(630388),
    f = n(838440),
    E = n(930282),
    g = n(955384),
    C = n(981631),
    I = n(916315);
function T(e) {
    let { value: t, channel: n } = e;
    return (0, f.v)({
        type: o.I.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function x(e) {
    let { channel: t, message: n } = e,
        { id: o } = t,
        { id: c } = n,
        m = t.getGuildId(),
        f = (0, a.e7)([h.Z], () => h.Z.getGuild(m), [m]),
        E = t.type === C.d4z.GUILD_ANNOUNCEMENT,
        x = null != f && f.hasFeature(C.oNc.NEWS),
        v = E && x,
        {
            editingMessage: N,
            editingTextValue: A,
            editingRichValue: Z
        } = (0, a.cj)(
            [d.Z],
            () => ({
                editingMessage: d.Z.getEditingMessage(o),
                editingTextValue: d.Z.getEditingTextValue(o),
                editingRichValue: d.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        M = (0, a.e7)([u.default], () => u.default.getId()),
        b = s.useCallback(
            (e, n, i) => {
                let { content: s } = i,
                    a = p.Z.can(C.Plq.MANAGE_MESSAGES, t),
                    o = null != N && null != N.author ? N.author.id : null;
                return v && (o === M || a) && null != N && (0, _.yE)(N.flags, C.iLy.CROSSPOSTED) ? r.Z.confirmEdit(e, n, s) : l.Z.editMessage(e, n, { content: s }), Promise.resolve();
            },
            [N, v, M, t]
        ),
        R = s.useCallback(
            (e) =>
                (0, s.createElement)(S, {
                    ...e,
                    className: I.channelTextArea,
                    key: c
                }),
            [c]
        );
    return null != A && null != Z
        ? (0, i.jsx)(g.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: A,
              richValue: Z,
              onCancel: l.Z.endEditMessage,
              onChange: l.Z.updateEditMessage,
              onConfirmDelete: r.Z.confirmDelete,
              saveMessage: b,
              validateEdit: T,
              children: R
          })
        : null;
}
function S(e) {
    let { textValue: t, richValue: n, message: a, channel: l, onChange: r, onSubmit: u, onKeyDown: d } = e,
        [h, p] = s.useState(!0),
        _ = s.useCallback(() => p(!0), []),
        f = s.useCallback(() => p(!1), []);
    return (
        s.useEffect(
            () => (
                m.S.subscribe(C.CkL.TEXTAREA_FOCUS, _),
                m.S.subscribe(C.CkL.TEXTAREA_BLUR, f),
                () => {
                    m.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, _), m.S.unsubscribe(C.CkL.TEXTAREA_BLUR, f);
                }
            ),
            [_, f]
        ),
        (0, i.jsx)(
            c.Z,
            {
                className: I.channelTextArea,
                textValue: t,
                richValue: n,
                channel: l,
                type: o.I.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return u(t);
                },
                onKeyDown: d,
                focused: h,
                onFocus: _,
                onBlur: f
            },
            a.id
        )
    );
}
function v(e, t, n) {
    let { message: s, channel: a } = e;
    return n
        ? (0, i.jsx)(x, {
              channel: a,
              message: s
          })
        : (0, i.jsx)(E.ZP, {
              message: s,
              content: t
          });
}

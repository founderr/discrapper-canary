n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(904245),
    a = n(257559),
    o = n(541716),
    c = n(893718),
    u = n(314897),
    d = n(323873),
    h = n(430824),
    m = n(496675),
    p = n(585483),
    f = n(630388),
    g = n(838440),
    C = n(930282),
    x = n(955384),
    v = n(981631),
    _ = n(916315);
function I(e) {
    let { value: t, channel: n } = e;
    return (0, g.v)({
        type: o.I.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function E(e) {
    let { channel: t, message: n } = e,
        { id: o } = t,
        { id: c } = n,
        p = t.getGuildId(),
        g = (0, r.e7)([h.Z], () => h.Z.getGuild(p), [p]),
        C = t.type === v.d4z.GUILD_ANNOUNCEMENT,
        E = null != g && g.hasFeature(v.oNc.NEWS),
        S = C && E,
        {
            editingMessage: Z,
            editingTextValue: T,
            editingRichValue: N
        } = (0, r.cj)(
            [d.Z],
            () => ({
                editingMessage: d.Z.getEditingMessage(o),
                editingTextValue: d.Z.getEditingTextValue(o),
                editingRichValue: d.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        j = (0, r.e7)([u.default], () => u.default.getId()),
        A = l.useCallback(
            (e, n, i) => {
                let { content: l } = i,
                    r = m.Z.can(v.Plq.MANAGE_MESSAGES, t),
                    o = null != Z && null != Z.author ? Z.author.id : null;
                return S && (o === j || r) && null != Z && (0, f.yE)(Z.flags, v.iLy.CROSSPOSTED) ? a.Z.confirmEdit(e, n, l) : s.Z.editMessage(e, n, { content: l }), Promise.resolve();
            },
            [Z, S, j, t]
        ),
        y = l.useCallback(
            (e) =>
                (0, l.createElement)(b, {
                    ...e,
                    className: _.channelTextArea,
                    key: c
                }),
            [c]
        );
    return null != T && null != N
        ? (0, i.jsx)(x.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: T,
              richValue: N,
              onCancel: s.Z.endEditMessage,
              onChange: s.Z.updateEditMessage,
              onConfirmDelete: a.Z.confirmDelete,
              saveMessage: A,
              validateEdit: I,
              children: y
          })
        : null;
}
function b(e) {
    let { textValue: t, richValue: n, message: r, channel: s, onChange: a, onSubmit: u, onKeyDown: d } = e,
        [h, m] = l.useState(!0),
        f = l.useCallback(() => m(!0), []),
        g = l.useCallback(() => m(!1), []);
    return (
        l.useEffect(
            () => (
                p.S.subscribe(v.CkL.TEXTAREA_FOCUS, f),
                p.S.subscribe(v.CkL.TEXTAREA_BLUR, g),
                () => {
                    p.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, f), p.S.unsubscribe(v.CkL.TEXTAREA_BLUR, g);
                }
            ),
            [f, g]
        ),
        (0, i.jsx)(
            c.Z,
            {
                className: _.channelTextArea,
                textValue: t,
                richValue: n,
                channel: s,
                type: o.I.EDIT,
                onChange: a,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return u(t);
                },
                onKeyDown: d,
                focused: h,
                onFocus: f,
                onBlur: g
            },
            r.id
        )
    );
}
function S(e, t, n) {
    let { message: l, channel: r } = e;
    return n
        ? (0, i.jsx)(E, {
              channel: r,
              message: l
          })
        : (0, i.jsx)(C.ZP, {
              message: l,
              content: t
          });
}

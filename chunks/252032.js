n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(904245),
    s = n(257559),
    o = n(541716),
    c = n(893718),
    d = n(314897),
    u = n(323873),
    h = n(430824),
    p = n(496675),
    m = n(585483),
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
        m = t.getGuildId(),
        g = (0, a.e7)([h.Z], () => h.Z.getGuild(m), [m]),
        C = t.type === v.d4z.GUILD_ANNOUNCEMENT,
        E = null != g && g.hasFeature(v.oNc.NEWS),
        N = C && E,
        {
            editingMessage: Z,
            editingTextValue: T,
            editingRichValue: S
        } = (0, a.cj)(
            [u.Z],
            () => ({
                editingMessage: u.Z.getEditingMessage(o),
                editingTextValue: u.Z.getEditingTextValue(o),
                editingRichValue: u.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        j = (0, a.e7)([d.default], () => d.default.getId()),
        A = l.useCallback(
            (e, n, i) => {
                let { content: l } = i,
                    a = p.Z.can(v.Plq.MANAGE_MESSAGES, t),
                    o = null != Z && null != Z.author ? Z.author.id : null;
                return N && (o === j || a) && null != Z && (0, f.yE)(Z.flags, v.iLy.CROSSPOSTED) ? s.Z.confirmEdit(e, n, l) : r.Z.editMessage(e, n, { content: l }), Promise.resolve();
            },
            [Z, N, j, t]
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
    return null != T && null != S
        ? (0, i.jsx)(x.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: T,
              richValue: S,
              onCancel: r.Z.endEditMessage,
              onChange: r.Z.updateEditMessage,
              onConfirmDelete: s.Z.confirmDelete,
              saveMessage: A,
              validateEdit: I,
              children: y
          })
        : null;
}
function b(e) {
    let { textValue: t, richValue: n, message: a, channel: r, onChange: s, onSubmit: d, onKeyDown: u } = e,
        [h, p] = l.useState(!0),
        f = l.useCallback(() => p(!0), []),
        g = l.useCallback(() => p(!1), []);
    return (
        l.useEffect(
            () => (
                m.S.subscribe(v.CkL.TEXTAREA_FOCUS, f),
                m.S.subscribe(v.CkL.TEXTAREA_BLUR, g),
                () => {
                    m.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, f), m.S.unsubscribe(v.CkL.TEXTAREA_BLUR, g);
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
                channel: r,
                type: o.I.EDIT,
                onChange: s,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return d(t);
                },
                onKeyDown: u,
                focused: h,
                onFocus: f,
                onBlur: g
            },
            a.id
        )
    );
}
function N(e, t, n) {
    let { message: l, channel: a } = e;
    return n
        ? (0, i.jsx)(E, {
              channel: a,
              message: l
          })
        : (0, i.jsx)(C.ZP, {
              message: l,
              content: t
          });
}

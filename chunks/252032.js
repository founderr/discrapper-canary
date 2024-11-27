n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(904245),
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
    _ = n(981631),
    v = n(46124);
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
        g = (0, r.e7)([h.Z], () => h.Z.getGuild(m), [m]),
        C = t.type === _.d4z.GUILD_ANNOUNCEMENT,
        E = null != g && g.hasFeature(_.oNc.NEWS),
        N = C && E,
        {
            editingMessage: S,
            editingTextValue: Z,
            editingRichValue: T
        } = (0, r.cj)(
            [u.Z],
            () => ({
                editingMessage: u.Z.getEditingMessage(o),
                editingTextValue: u.Z.getEditingTextValue(o),
                editingRichValue: u.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        j = (0, r.e7)([d.default], () => d.default.getId()),
        A = l.useCallback(
            (e, n, i) => {
                let { content: l } = i,
                    r = p.Z.can(_.Plq.MANAGE_MESSAGES, t),
                    o = null != S && null != S.author ? S.author.id : null;
                return N && (o === j || r) && null != S && (0, f.yE)(S.flags, _.iLy.CROSSPOSTED) ? s.Z.confirmEdit(e, n, l) : a.Z.editMessage(e, n, { content: l }), Promise.resolve();
            },
            [S, N, j, t]
        ),
        y = l.useCallback(
            (e) =>
                (0, l.createElement)(b, {
                    ...e,
                    className: v.channelTextArea,
                    key: c
                }),
            [c]
        );
    return null != Z && null != T
        ? (0, i.jsx)(x.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: Z,
              richValue: T,
              onCancel: a.Z.endEditMessage,
              onChange: a.Z.updateEditMessage,
              onConfirmDelete: s.Z.confirmDelete,
              saveMessage: A,
              validateEdit: I,
              children: y
          })
        : null;
}
function b(e) {
    let { textValue: t, richValue: n, message: r, channel: a, onChange: s, onSubmit: d, onKeyDown: u } = e,
        [h, p] = l.useState(!0),
        f = l.useCallback(() => p(!0), []),
        g = l.useCallback(() => p(!1), []);
    return (
        l.useEffect(
            () => (
                m.S.subscribe(_.CkL.TEXTAREA_FOCUS, f),
                m.S.subscribe(_.CkL.TEXTAREA_BLUR, g),
                () => {
                    m.S.unsubscribe(_.CkL.TEXTAREA_FOCUS, f), m.S.unsubscribe(_.CkL.TEXTAREA_BLUR, g);
                }
            ),
            [f, g]
        ),
        (0, i.jsx)(
            c.Z,
            {
                className: v.channelTextArea,
                textValue: t,
                richValue: n,
                channel: a,
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
            r.id
        )
    );
}
function N(e, t, n) {
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

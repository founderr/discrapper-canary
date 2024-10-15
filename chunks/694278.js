s.r(a),
    s.d(a, {
        default: function () {
            return N;
        }
    }),
    s(47120);
var t = s(735250),
    n = s(470079),
    _ = s(481060),
    E = s(881052),
    r = s(434404),
    o = s(78451),
    I = s(915509),
    l = s(981631),
    i = s(689938),
    c = s(113207);
function N(e) {
    let { guild: a, onClose: s, hideColors: N } = e,
        [u, R] = n.useState(a.verificationLevel),
        [T, d] = n.useState(null),
        L = a.hasFeature(l.oNc.COMMUNITY),
        M = (0, o.IF)(L, N).filter((e) => !e.disabled),
        C = n.useCallback(async () => {
            null != T && d(null);
            try {
                await r.Z.saveGuild(a.id, { verificationLevel: u }), r.Z.updateGuild({ verificationLevel: u }), s();
            } catch (e) {
                d(new E.Hx(e).getAnyErrorMessage());
            }
        }, [T, a.id, u, s]);
    return (0, t.jsx)(I.Z, {
        ...e,
        title: i.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
        errorText: T,
        onConfirm: C,
        onCancel: s,
        children: (0, t.jsxs)(_.FormSection, {
            children: [
                (0, t.jsx)(_.FormText, {
                    type: _.FormText.Types.DESCRIPTION,
                    className: c.marginBottom20,
                    children: i.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
                }),
                (0, t.jsx)(_.RadioGroup, {
                    value: u,
                    options: M,
                    onChange: (e) => R(e.value)
                })
            ]
        })
    });
}

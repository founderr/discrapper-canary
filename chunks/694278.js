s.r(a),
    s.d(a, {
        default: function () {
            return c;
        }
    }),
    s(47120);
var _ = s(200651),
    E = s(192379),
    t = s(481060),
    n = s(881052),
    r = s(434404),
    I = s(78451),
    o = s(915509),
    l = s(981631),
    N = s(689938),
    i = s(113207);
function c(e) {
    let { guild: a, onClose: s, hideColors: c } = e,
        [R, u] = E.useState(a.verificationLevel),
        [T, L] = E.useState(null),
        d = a.hasFeature(l.oNc.COMMUNITY),
        M = (0, I.IF)(d, c).filter((e) => !e.disabled),
        C = E.useCallback(async () => {
            null != T && L(null);
            try {
                await r.Z.saveGuild(a.id, { verificationLevel: R }), r.Z.updateGuild({ verificationLevel: R }), s();
            } catch (e) {
                L(new n.Hx(e).getAnyErrorMessage());
            }
        }, [T, a.id, R, s]);
    return (0, _.jsx)(o.Z, {
        ...e,
        title: N.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
        errorText: T,
        onConfirm: C,
        onCancel: s,
        children: (0, _.jsxs)(t.FormSection, {
            children: [
                (0, _.jsx)(t.FormText, {
                    type: t.FormText.Types.DESCRIPTION,
                    className: i.marginBottom20,
                    children: N.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
                }),
                (0, _.jsx)(t.RadioGroup, {
                    value: R,
                    options: M,
                    onChange: (e) => u(e.value)
                })
            ]
        })
    });
}

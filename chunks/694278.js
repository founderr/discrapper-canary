e.r(n),
    e.d(n, {
        default: function () {
            return g;
        }
    }),
    e(47120);
var r = e(200651),
    a = e(192379),
    i = e(481060),
    l = e(881052),
    o = e(434404),
    s = e(78451),
    u = e(915509),
    c = e(981631),
    d = e(388032),
    f = e(113207);
function g(t) {
    let { guild: n, onClose: e, hideColors: g } = t,
        [m, E] = a.useState(n.verificationLevel),
        [_, p] = a.useState(null),
        N = n.hasFeature(c.oNc.COMMUNITY),
        I = (0, s.IF)(N, g).filter((t) => !t.disabled),
        R = a.useCallback(async () => {
            null != _ && p(null);
            try {
                await o.Z.saveGuild(n.id, { verificationLevel: m }), o.Z.updateGuild({ verificationLevel: m }), e();
            } catch (t) {
                p(new l.Hx(t).getAnyErrorMessage());
            }
        }, [_, n.id, m, e]);
    return (0, r.jsx)(u.Z, {
        ...t,
        title: d.intl.string(d.t.DpRdYG),
        errorText: _,
        onConfirm: R,
        onCancel: e,
        children: (0, r.jsxs)(i.FormSection, {
            children: [
                (0, r.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: f.marginBottom20,
                    children: d.intl.format(d.t.iuRk2t, {})
                }),
                (0, r.jsx)(i.RadioGroup, {
                    value: m,
                    options: I,
                    onChange: (t) => E(t.value)
                })
            ]
        })
    });
}

e.r(n),
    e.d(n, {
        default: function () {
            return f;
        }
    }),
    e(47120);
var i = e(200651),
    r = e(192379),
    a = e(481060),
    l = e(881052),
    o = e(434404),
    s = e(78451),
    c = e(915509),
    d = e(981631),
    u = e(388032),
    g = e(232186);
function f(t) {
    let { guild: n, onClose: e, hideColors: f } = t,
        [E, m] = r.useState(n.verificationLevel),
        [_, N] = r.useState(null),
        I = n.hasFeature(d.oNc.COMMUNITY),
        R = (0, s.IF)(I, f).filter((t) => !t.disabled),
        p = r.useCallback(async () => {
            null != _ && N(null);
            try {
                await o.Z.saveGuild(n.id, { verificationLevel: E }), o.Z.updateGuild({ verificationLevel: E }), e();
            } catch (t) {
                N(new l.Hx(t).getAnyErrorMessage());
            }
        }, [_, n.id, E, e]);
    return (0, i.jsx)(c.Z, {
        ...t,
        title: u.intl.string(u.t.DpRdYG),
        errorText: _,
        onConfirm: p,
        onCancel: e,
        children: (0, i.jsxs)(a.FormSection, {
            children: [
                (0, i.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    className: g.marginBottom20,
                    children: u.intl.format(u.t.iuRk2t, {})
                }),
                (0, i.jsx)(a.RadioGroup, {
                    value: E,
                    options: R,
                    onChange: (t) => m(t.value)
                })
            ]
        })
    });
}

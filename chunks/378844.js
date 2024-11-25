n.d(t, {
    R: function () {
        return l;
    }
});
var i,
    l,
    r = n(200651);
n(192379);
var a = n(442837),
    o = n(481060),
    s = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    h = n(607744),
    p = n(594174),
    m = n(981631),
    f = n(815660),
    g = n(388032),
    C = n(816614);
(i = l || (l = {}))[(i.VOICE = 0)] = 'VOICE';
t.Z = (e) => {
    let { type: t, guildId: i, closePopout: l } = e,
        _ = (0, u.Dt)(),
        { notClaimed: v, notEmailVerified: x, notPhoneVerified: I, newAccount: b, newMember: E } = (0, a.e7)([h.Z], () => h.Z.getCheck(i), [i]),
        S = 0 === t ? g.intl.string(g.t['6zY8BA']) : null,
        Z = null,
        N = null;
    return (0 === t && (v ? ((Z = g.intl.string(g.t.IRxUlJ)), (N = g.intl.string(g.t.fiNVio))) : I ? ((Z = g.intl.string(g.t.vW8iUF)), (N = g.intl.string(g.t['50gfOj']))) : x ? ((Z = g.intl.string(g.t.vdSOp6)), (N = g.intl.string(g.t.lm1UKi))) : E ? ((Z = g.intl.formatToPlainString(g.t.v1ktYW, { min: m.YeM.MEMBER_AGE })), (N = g.intl.string(g.t.BddRzc))) : b && ((Z = g.intl.formatToPlainString(g.t['sncw4+'], { min: m.YeM.ACCOUNT_AGE })), (N = g.intl.string(g.t.BddRzc)))), null == S || null == Z)
        ? null
        : (0, r.jsxs)(o.Dialog, {
              className: C.container,
              'aria-labelledby': _,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: C.image,
                      src: n(64395)
                  }),
                  (0, r.jsxs)('div', {
                      className: C.content,
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              id: _,
                              children: S
                          }),
                          (0, r.jsx)(o.Text, {
                              color: 'header-secondary',
                              variant: 'text-sm/normal',
                              children: Z
                          }),
                          (0, r.jsxs)('div', {
                              className: C.buttonContainer,
                              children: [
                                  null != N
                                      ? (0, r.jsx)(o.Button, {
                                            onClick: () => {
                                                v
                                                    ? c.j()
                                                    : I
                                                      ? (0, o.openModalLazy)(
                                                            async () => {
                                                                let { default: e } = await Promise.all([n.e('76540'), n.e('63461')]).then(n.bind(n, 607018));
                                                                return (t) =>
                                                                    (0, r.jsx)(e, {
                                                                        reason: d.L.GUILD_PHONE_REQUIRED,
                                                                        ...t
                                                                    });
                                                            },
                                                            { modalKey: f.M }
                                                        )
                                                      : x &&
                                                        (s.Z.verifyResend(),
                                                        (0, o.openModal)((e) => {
                                                            var t;
                                                            return (0, r.jsx)(o.ConfirmModal, {
                                                                header: g.intl.string(g.t.LykQYm),
                                                                confirmText: g.intl.string(g.t.BddRzc),
                                                                confirmButtonColor: o.Button.Colors.BRAND,
                                                                ...e,
                                                                children: (0, r.jsx)(o.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: g.intl.format(g.t.azKEPz, { email: null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.email })
                                                                })
                                                            });
                                                        })),
                                                    l();
                                            },
                                            className: C.primaryButton,
                                            children: N
                                        })
                                      : null,
                                  v || I || x
                                      ? (0, r.jsx)(o.Button, {
                                            onClick: l,
                                            look: o.Button.Looks.BLANK,
                                            className: C.cancel,
                                            children: g.intl.string(g.t.oEAioK)
                                        })
                                      : null
                              ]
                          })
                      ]
                  })
              ]
          });
};

n.d(t, {
    R: function () {
        return l;
    }
});
var i,
    l,
    r = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    o = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    h = n(607744),
    p = n(594174),
    f = n(981631),
    _ = n(815660),
    m = n(689938),
    g = n(816614);
(i = l || (l = {}))[(i.VOICE = 0)] = 'VOICE';
t.Z = (e) => {
    let { type: t, guildId: i, closePopout: l } = e,
        C = (0, u.Dt)(),
        { notClaimed: I, notEmailVerified: E, notPhoneVerified: N, newAccount: S, newMember: v } = (0, a.e7)([h.Z], () => h.Z.getCheck(i), [i]),
        x = 0 === t ? m.Z.Messages.GUILD_VERIFICATION_VOICE_HEADER : null,
        Z = null,
        T = null;
    return (0 === t && (I ? ((Z = m.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED), (T = m.Z.Messages.CLAIM_ACCOUNT)) : N ? ((Z = m.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED), (T = m.Z.Messages.VERIFY_PHONE)) : E ? ((Z = m.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED), (T = m.Z.Messages.RESEND_VERIFICATION_EMAIL)) : v ? ((Z = m.Z.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({ min: f.YeM.MEMBER_AGE })), (T = m.Z.Messages.OKAY)) : S && ((Z = m.Z.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({ min: f.YeM.ACCOUNT_AGE })), (T = m.Z.Messages.OKAY))), null == x || null == Z)
        ? null
        : (0, r.jsxs)(s.Dialog, {
              className: g.container,
              'aria-labelledby': C,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: g.image,
                      src: n(64395)
                  }),
                  (0, r.jsxs)('div', {
                      className: g.content,
                      children: [
                          (0, r.jsx)(s.Heading, {
                              variant: 'heading-md/semibold',
                              id: C,
                              children: x
                          }),
                          (0, r.jsx)(s.Text, {
                              color: 'header-secondary',
                              variant: 'text-sm/normal',
                              children: Z
                          }),
                          (0, r.jsxs)('div', {
                              className: g.buttonContainer,
                              children: [
                                  null != T
                                      ? (0, r.jsx)(s.Button, {
                                            onClick: () => {
                                                I
                                                    ? c.j()
                                                    : N
                                                      ? (0, s.openModalLazy)(
                                                            async () => {
                                                                let { default: e } = await Promise.all([n.e('76540'), n.e('63461')]).then(n.bind(n, 607018));
                                                                return (t) =>
                                                                    (0, r.jsx)(e, {
                                                                        reason: d.L.GUILD_PHONE_REQUIRED,
                                                                        ...t
                                                                    });
                                                            },
                                                            { modalKey: _.M }
                                                        )
                                                      : E &&
                                                        (o.Z.verifyResend(),
                                                        (0, s.openModal)((e) => {
                                                            var t;
                                                            return (0, r.jsx)(s.ConfirmModal, {
                                                                header: m.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                                                confirmText: m.Z.Messages.OKAY,
                                                                confirmButtonColor: s.Button.Colors.BRAND,
                                                                ...e,
                                                                children: (0, r.jsx)(s.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: m.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.email })
                                                                })
                                                            });
                                                        })),
                                                    l();
                                            },
                                            className: g.primaryButton,
                                            children: T
                                        })
                                      : null,
                                  I || N || E
                                      ? (0, r.jsx)(s.Button, {
                                            onClick: l,
                                            look: s.Button.Looks.BLANK,
                                            className: g.cancel,
                                            children: m.Z.Messages.NEVERMIND
                                        })
                                      : null
                              ]
                          })
                      ]
                  })
              ]
          });
};

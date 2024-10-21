s.d(t, {
    Z: function () {
        return N;
    }
}),
    s(47120);
var a = s(200651),
    n = s(192379),
    o = s(512722),
    l = s.n(o),
    r = s(442837),
    i = s(692547),
    c = s(481060),
    d = s(771308),
    u = s(13430),
    _ = s(594174),
    f = s(63063),
    E = s(981631),
    m = s(723359),
    p = s(689938),
    h = s(738871);
function N(e) {
    let { onComplete: t, onClose: s } = e,
        [o, N] = n.useState(null),
        [T, A] = n.useState(null),
        [x, I] = n.useState(!1),
        C = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        b = n.createRef();
    async function M(e) {
        e.preventDefault(), l()(null != o, 'Cannot submit null birthday.'), I(!0);
        try {
            await d.Av(o, m.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), s();
            else {
                var a;
                (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.username) != null ? A(p.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : A(null == e ? void 0 : e.body.message);
            }
        }
        I(!1);
    }
    n.useEffect(() => {
        null != C && null != C.nsfwAllowed && t();
    }, [C, t]);
    let v = n.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        G = n.useCallback(() => {
            var e;
            null === (e = b.current) || void 0 === e || e.focus();
        }, [b]);
    return null == C
        ? null
        : (0, a.jsxs)('form', {
              className: h.content,
              onSubmit: M,
              children: [
                  (0, a.jsx)(c.ClydeIcon, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: h.logo,
                      color: i.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, a.jsx)(c.Heading, {
                      className: h.title,
                      variant: 'heading-xl/semibold',
                      children: p.Z.Messages.NUF_JOIN_SERVER_TITLE_2
                  }),
                  (0, a.jsx)(c.Text, {
                      color: 'text-normal',
                      className: h.description,
                      variant: 'text-md/normal',
                      children: p.Z.Messages.NUF_AGE_GATE_BODY.format({ helpURL: f.Z.getArticleURL(E.BhN.AGE_GATE) })
                  }),
                  (0, a.jsx)(c.ThemeContextProvider, {
                      theme: E.BRd.LIGHT,
                      children: (0, a.jsx)(u.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: h.formItem,
                          label: p.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                          name: 'birthday',
                          onChange: v,
                          onPopulated: G,
                          error: T,
                          value: o
                      })
                  }),
                  (0, a.jsx)('div', {
                      className: h.footer,
                      children: (0, a.jsx)('div', {
                          className: h.buttonWrapper,
                          children: (0, a.jsx)(c.Button, {
                              buttonRef: b,
                              type: 'submit',
                              size: c.Button.Sizes.LARGE,
                              submitting: x,
                              disabled: null == o,
                              fullWidth: !0,
                              children: p.Z.Messages.NEXT
                          })
                      })
                  })
              ]
          });
}

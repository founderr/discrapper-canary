n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var s = n(200651),
    a = n(192379),
    o = n(512722),
    i = n.n(o),
    l = n(442837),
    r = n(692547),
    c = n(481060),
    d = n(771308),
    u = n(13430),
    f = n(594174),
    _ = n(63063),
    p = n(981631),
    m = n(723359),
    h = n(388032),
    E = n(110766);
function x(e) {
    let { onComplete: t, onClose: n } = e,
        [o, x] = a.useState(null),
        [N, T] = a.useState(null),
        [A, C] = a.useState(!1),
        b = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        I = a.createRef();
    async function v(e) {
        e.preventDefault(), i()(null != o, 'Cannot submit null birthday.'), C(!0);
        try {
            await d.Av(o, m.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
            else {
                var s;
                (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.username) != null ? T(h.intl.string(h.t['TGg/2t'])) : T(null == e ? void 0 : e.body.message);
            }
        }
        C(!1);
    }
    a.useEffect(() => {
        null != b && null != b.nsfwAllowed && t();
    }, [b, t]);
    let j = a.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        g = a.useCallback(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
        }, [I]);
    return null == b
        ? null
        : (0, s.jsxs)('form', {
              className: E.content,
              onSubmit: v,
              children: [
                  (0, s.jsx)(c.ClydeIcon, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: E.logo,
                      color: r.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, s.jsx)(c.Heading, {
                      className: E.title,
                      variant: 'heading-xl/semibold',
                      children: h.intl.string(h.t.n7i7sr)
                  }),
                  (0, s.jsx)(c.Text, {
                      color: 'text-normal',
                      className: E.description,
                      variant: 'text-md/normal',
                      children: h.intl.format(h.t.fa8kW1, { helpURL: _.Z.getArticleURL(p.BhN.AGE_GATE) })
                  }),
                  (0, s.jsx)(c.ThemeContextProvider, {
                      theme: p.BRd.LIGHT,
                      children: (0, s.jsx)(u.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: E.formItem,
                          label: h.intl.string(h.t.rhBeKS),
                          name: 'birthday',
                          onChange: j,
                          onPopulated: g,
                          error: N,
                          value: o
                      })
                  }),
                  (0, s.jsx)('div', {
                      className: E.footer,
                      children: (0, s.jsx)('div', {
                          className: E.buttonWrapper,
                          children: (0, s.jsx)(c.Button, {
                              buttonRef: I,
                              type: 'submit',
                              size: c.Button.Sizes.LARGE,
                              submitting: A,
                              disabled: null == o,
                              fullWidth: !0,
                              children: h.intl.string(h.t.PDTjLC)
                          })
                      })
                  })
              ]
          });
}

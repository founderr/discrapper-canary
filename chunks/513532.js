t(47120);
var r = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    s = t(863249),
    o = t(616230),
    l = t(430824),
    c = t(389134),
    d = t(650461),
    u = t(388032),
    m = t(602075);
n.Z = (e) => {
    let { guildId: n, error: t, inSettings: f = !1 } = e,
        h = (0, a.e7)([l.Z], () => l.Z.getGuild(n)),
        x = (0, a.e7)([c.Z, d.ZP], () => {
            var e, t;
            return f ? c.Z.getState().settings.verificationForm : null === (t = d.ZP.getStateForGuild(n)) || void 0 === t ? void 0 : null === (e = t.progress) || void 0 === e ? void 0 : e.verificationForm;
        });
    return null == h
        ? null
        : (0, r.jsxs)('div', {
              className: m.slideContent,
              children: [
                  (0, r.jsx)(i.Heading, {
                      variant: 'heading-xxl/medium',
                      className: m.title,
                      children: f ? u.intl.string(u.t.aOQWKi) : u.intl.string(u.t.qxqOzM)
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: m.subtitle,
                      children: u.intl.string(u.t['tnz5//'])
                  }),
                  (0, r.jsxs)('div', {
                      className: m.maxWidthContainer,
                      children: [
                          null != t &&
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'status-danger',
                                  className: m.errorText,
                                  children: t
                              }),
                          (0, r.jsx)(o.Z, {
                              guild: h,
                              isClanContext: !0,
                              onFieldsSave: (e, n) => (s.ZP.updateVerificationFormFieldsLocal(e, [...n]), Promise.resolve()),
                              verificationForm: x
                          })
                      ]
                  })
              ]
          });
};

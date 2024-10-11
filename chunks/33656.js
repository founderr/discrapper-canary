t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(724458);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(921801),
    d = t(663389),
    _ = t(960412),
    u = t(151662),
    E = t(930441),
    T = t(726985),
    S = t(689938),
    I = t(325582),
    N = t(113207);
function m(e) {
    let { label: s, onChange: t, enabled: a, subLabel: i } = e;
    return (0, n.jsx)(l.FormSwitch, {
        value: !!a,
        onChange: t,
        note: i,
        children: s
    });
}
function C() {
    let e = (0, o.e7)([d.Z], () => d.Z.getSubsection()),
        s = a.createRef(),
        { categories: t, initialized: i } = (0, o.cj)([u.Z], () => u.Z.getEmailSettings());
    a.useEffect(() => {
        if (null == i) (0, _.Y7)();
        else if (e === E.vG.toUpperCase()) {
            var t;
            null == s || null === (t = s.current) || void 0 === t || t.scrollIntoView(!0);
        }
    }, [i, s, e]);
    let C = E.M0.reduce((e, s) => e || !!t[s], !1),
        A = {
            [E.$Z.COMMUNICATION]: T.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [E.$Z.SOCIAL]: T.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [E.$Z.UPDATES_AND_ANNOUNCEMENTS]: T.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [E.$Z.TIPS]: T.s6.NOTIFICATIONS_EMAILS_TIPS,
            [E.$Z.RECOMMENDATIONS_AND_EVENTS]: T.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return i
        ? (0, n.jsxs)(c.F, {
              setting: T.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, n.jsx)('div', { ref: s }),
                  (0, n.jsxs)(l.FormSection, {
                      className: r()(N.marginTop40),
                      tag: l.FormTitleTags.H1,
                      title: S.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
                      children: [
                          E.Od.map((e) => {
                              let { category: s, label: a, subLabel: i } = e,
                                  r = A[s],
                                  o = (0, n.jsx)(
                                      m,
                                      {
                                          label: a(),
                                          subLabel: i(),
                                          enabled: t[s],
                                          onChange: (e) => {
                                              var t, n;
                                              return (t = s), (n = e), void (0, _.pR)(t, n);
                                          }
                                      },
                                      a()
                                  );
                              return null != r
                                  ? (0, n.jsx)(
                                        c.F,
                                        {
                                            setting: r,
                                            children: o
                                        },
                                        a()
                                    )
                                  : o;
                          }),
                          (0, n.jsxs)(c.F, {
                              setting: T.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, n.jsx)(l.Button, {
                                      className: I.marketingUnsubscribeButton,
                                      disabled: !C,
                                      look: l.ButtonLooks.LINK,
                                      color: l.ButtonColors.LINK,
                                      onClick: _.oc,
                                      children: S.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
                                  }),
                                  (0, n.jsx)(l.FormText, {
                                      type: l.FormTextTypes.DESCRIPTION,
                                      children: S.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
                                  }),
                                  (0, n.jsx)(l.FormDivider, { className: r()(N.marginTop40, N.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}

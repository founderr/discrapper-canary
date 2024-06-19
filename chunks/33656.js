t.d(s, {
  Z: function() {
    return C
  }
}), t(724458);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(921801),
  E = t(663389),
  d = t(960412),
  _ = t(151662),
  T = t(930441),
  S = t(726985),
  u = t(689938),
  I = t(970679),
  N = t(331651);

function A(e) {
  let {
    label: s,
    onChange: t,
    enabled: i,
    subLabel: a
  } = e;
  return (0, n.jsx)(o.FormSwitch, {
    value: !!i,
    onChange: t,
    note: a,
    children: s
  })
}

function C() {
  let e = (0, r.e7)([E.Z], () => E.Z.getSubsection()),
    s = i.createRef(),
    {
      categories: t,
      initialized: a
    } = (0, r.cj)([_.Z], () => _.Z.getEmailSettings());
  i.useEffect(() => {
    if (null == a)(0, d.Y7)();
    else if (e === T.vG.toUpperCase()) {
      var t;
      null == s || null === (t = s.current) || void 0 === t || t.scrollIntoView(!0)
    }
  }, [a, s, e]);
  let C = T.M0.reduce((e, s) => e || !!t[s], !1),
    O = {
      [T.$Z.COMMUNICATION]: S.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
      [T.$Z.SOCIAL]: S.s6.NOTIFICATIONS_EMAILS_SOCIAL,
      [T.$Z.UPDATES_AND_ANNOUNCEMENTS]: S.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
      [T.$Z.TIPS]: S.s6.NOTIFICATIONS_EMAILS_TIPS,
      [T.$Z.RECOMMENDATIONS_AND_EVENTS]: S.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
    };
  return a ? (0, n.jsxs)(c.F, {
    setting: S.s6.NOTIFICATIONS_EMAILS,
    children: [(0, n.jsx)("div", {
      ref: s
    }), (0, n.jsxs)(o.FormSection, {
      className: l()(N.marginTop40),
      tag: o.FormTitleTags.H1,
      title: u.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
      children: [T.Od.map(e => {
        let {
          category: s,
          label: i,
          subLabel: a
        } = e, l = O[s], r = (0, n.jsx)(A, {
          label: i(),
          subLabel: a(),
          enabled: t[s],
          onChange: e => {
            var t, n;
            return t = s, n = e, void(0, d.pR)(t, n)
          }
        }, i());
        return null != l ? (0, n.jsx)(c.F, {
          setting: l,
          children: r
        }, i()) : r
      }), (0, n.jsxs)(c.F, {
        setting: S.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, n.jsx)(o.Button, {
          className: I.marketingUnsubscribeButton,
          disabled: !C,
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          onClick: d.oc,
          children: u.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
        }), (0, n.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: u.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
        }), (0, n.jsx)(o.FormDivider, {
          className: l()(N.marginTop40, N.marginBottom40)
        })]
      })]
    })]
  }) : null
}
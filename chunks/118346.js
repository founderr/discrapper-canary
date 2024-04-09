"use strict";
s.r(t), s.d(t, {
  EmailRequirementFormField: function() {
    return m
  },
  PreviewEmailRequirementFormField: function() {
    return I
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  i = s("481060"),
  a = s("893776"),
  r = s("916187"),
  d = s("489813"),
  o = s("689938"),
  u = s("819104");

function c() {
  let [e, t] = n.useState(!1), [s, r] = n.useState(!1), [d, c] = n.useState(!1);
  n.useEffect(() => {
    let e;
    return s && (e = setTimeout(() => {
      r(!1)
    }, 2e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [s]);
  let I = async () => {
    if (!e) {
      t(!0);
      try {
        await a.default.verifyResend(), r(!0), c(!0)
      } catch (e) {} finally {
        t(!1)
      }
    }
  };
  return s ? (0, l.jsx)(i.Text, {
    className: u.verifyConfirmText,
    variant: "text-sm/normal",
    color: "text-positive",
    children: o.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT
  }) : (0, l.jsx)(i.Button, {
    size: i.Button.Sizes.SMALL,
    submitting: e,
    onClick: I,
    children: d ? o.default.Messages.RESEND_EMAIL_SHORT : o.default.Messages.VERIFY
  })
}

function I() {
  return (0, l.jsx)(d.RequirementWithActionRenderer, {
    icon: r.default,
    text: o.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
    footnote: o.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
    meetsRequirement: !1,
    children: (0, l.jsx)(i.Tooltip, {
      text: o.default.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
      children: e => (0, l.jsx)(i.Button, {
        ...e,
        size: i.Button.Sizes.SMALL,
        disabled: !0,
        children: o.default.Messages.VERIFY
      })
    })
  })
}

function m(e) {
  let {
    isUserVerified: t
  } = e, s = t ? o.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED : o.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;
  return (0, l.jsx)(d.RequirementWithActionRenderer, {
    icon: r.default,
    text: s,
    footnote: o.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
    meetsRequirement: t,
    children: (0, l.jsx)(c, {})
  })
}
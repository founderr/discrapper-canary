"use strict";
s.r(t), s.d(t, {
  MemberVerificationFormRenderer: function() {
    return H
  }
}), s("47120");
var l, n, i = s("735250"),
  a = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("893776"),
  I = s("809206"),
  m = s("607070"),
  E = s("339085"),
  f = s("601964"),
  M = s("650774"),
  R = s("271383"),
  _ = s("430824"),
  F = s("594174"),
  N = s("285952"),
  h = s("346656"),
  C = s("301822"),
  x = s("626135"),
  T = s("768581"),
  g = s("863249"),
  v = s("944163"),
  A = s("246364"),
  O = s("983736"),
  j = s("266395"),
  S = s("990488"),
  p = s("592286"),
  V = s("981631"),
  L = s("689938"),
  B = s("815431"),
  b = s("419851"),
  P = s("296507"),
  y = s("866402"),
  U = s("246403");
(n = l || (l = {}))[n.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", n[n.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", n[n.VERIFICATION_FORM = 2] = "VERIFICATION_FORM";
let D = e => {
    let {
      headerId: t,
      email: s,
      password: l,
      setEmail: n,
      setPassword: a,
      emailError: r,
      passwordError: o
    } = e;
    return (0, i.jsxs)("div", {
      className: B.content,
      children: [(0, i.jsx)("div", {
        className: B.applicationIconContainer,
        children: (0, i.jsx)("img", {
          alt: L.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
          src: b,
          className: B.applicationIcon
        })
      }), (0, i.jsx)(u.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: B.header,
        children: L.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
      }), (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: L.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
      }), (0, i.jsx)("hr", {
        className: B.divider
      }), (0, i.jsx)(u.FormItem, {
        title: L.default.Messages.FORM_LABEL_EMAIL,
        className: B.formItem,
        children: (0, i.jsx)(u.TextInput, {
          value: s,
          error: r,
          onChange: n,
          autoFocus: !0
        })
      }), (0, i.jsx)(u.FormItem, {
        title: L.default.Messages.FORM_LABEL_PASSWORD,
        className: B.formItem,
        children: (0, i.jsx)(u.TextInput, {
          type: "password",
          value: l,
          error: o,
          onChange: a
        })
      })]
    })
  },
  w = e => {
    let {
      headerId: t,
      email: s
    } = e;
    return (0, i.jsxs)("div", {
      className: B.content,
      children: [(0, i.jsx)("img", {
        alt: L.default.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
        src: U,
        className: B.applicationIcon
      }), (0, i.jsx)(u.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: B.header,
        children: L.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({
          email: s
        })
      }), (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: L.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
      }), (0, i.jsx)(u.Button, {
        className: B.resendButton,
        size: u.Button.Sizes.NONE,
        look: u.Button.Looks.LINK,
        onClick: () => c.default.verifyResend(),
        children: L.default.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
      })]
    })
  },
  H = e => {
    var t;
    let {
      guildId: s,
      formState: l,
      updateFormState: n,
      isPreview: a = !1
    } = e, r = (0, d.useStateFromStores)([v.default], () => v.default.get(s));
    if (null == r) return null;
    let o = null !== (t = null != l ? l : null == r ? void 0 : r.formFields) && void 0 !== t ? t : [],
      u = a ? S.PreviewFormRenderer : S.ApplicantFormRenderer;
    return (0, i.jsx)(u, {
      guildId: s,
      formFields: o,
      updateFormFields: n
    })
  },
  k = () => s.e("26176").then(s.t.bind(s, "737848", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  q = e => {
    let {
      headerId: t,
      guildId: s,
      formState: l,
      updateFormState: n,
      useReducedMotion: a,
      isClan: r,
      clanGdmConsent: d,
      onClanGdmConsentChanged: c,
      isPreview: I = !1
    } = e;
    return (0, i.jsxs)("div", {
      className: B.content,
      children: [(0, i.jsxs)("div", {
        className: B.animationAndSparklesContainer,
        children: [(0, i.jsx)("img", {
          alt: L.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: y,
          className: o()(B.sparkleIcon, B.sparkleBottom)
        }), (0, i.jsx)(C.default, {
          importData: k,
          shouldAnimate: !a,
          className: B.animation
        }), (0, i.jsx)("img", {
          alt: L.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: P,
          className: o()(B.sparkleIcon, B.sparkleTop)
        })]
      }), (0, i.jsx)(u.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: B.header,
        children: L.default.Messages.MEMBER_VERIFICATION_MODAL_TITLE
      }), (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: B.subheader,
        children: L.default.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
      }), (0, i.jsx)("hr", {
        className: B.divider
      }), (0, i.jsx)(H, {
        guildId: s,
        formState: l,
        updateFormState: n,
        isPreview: I
      }), r && !I && (0, i.jsx)(u.Checkbox, {
        className: B.clanGdmConsentCheckbox,
        style: {
          borderWidth: 2
        },
        size: 20,
        type: u.Checkbox.Types.INVERTED,
        value: d,
        onChange: c,
        children: (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: L.default.Messages.CLAN_APPLICATION_GDM_CONSENT
        })
      })]
    })
  };
t.default = e => {
  var t, s;
  let {
    headerId: l,
    guildId: n,
    onClose: r,
    onComplete: c,
    inviteCode: C,
    isPreview: S = !1
  } = e, b = (0, j.useMemberVerificationFormNoticeStore)(e => e.hasUnsubmittedChanges), P = (0, d.useStateFromStores)([_.default], () => _.default.getGuild(n)), y = (0, d.useStateFromStores)([v.default], () => v.default.get(n)), U = null == y ? void 0 : y.formFields.some(e => e.field_type !== A.VerificationFormFieldTypes.TERMS), H = (0, d.useStateFromStores)([F.default], () => F.default.getCurrentUser()), k = !(null == H ? void 0 : H.isClaimed()), G = null == H ? void 0 : H.verified, z = null == H ? void 0 : H.isPhoneVerified(), Y = (0, d.useStateFromStores)([E.default], () => E.default.getGuildEmoji(n)), {
    storeMemberCount: W,
    storeOnlineCount: K
  } = (0, d.useStateFromStoresObject)([M.default], () => ({
    storeMemberCount: M.default.getMemberCount(n),
    storeOnlineCount: M.default.getOnlineCount(n)
  })), [J, X] = a.useState(null !== (t = null == y ? void 0 : y.formFields) && void 0 !== t ? t : []), [Q, Z] = a.useState(!1), [$, ee] = a.useState(null), [et, es] = a.useState(k ? 0 : 2), [el, en] = a.useState(""), [ei, ea] = a.useState(""), [er, eo] = a.useState(null), [ed, eu] = a.useState(null), [ec, eI] = a.useState(!1), em = null == y ? void 0 : y.guild, eE = a.useMemo(() => null != P ? P : null != em ? new f.default(em) : null, [P, em]), ef = null !== (s = null == eE ? void 0 : eE.hasFeature(V.GuildFeatures.CLAN)) && void 0 !== s && s, {
    emojisToRender: eM,
    remainingEmojis: eR,
    numGuildEmoji: e_
  } = a.useMemo(() => {
    var e;
    let t = [...null !== (e = 0 === Y.length ? null == em ? void 0 : em.emojis : Y) && void 0 !== e ? e : []].reverse(),
      s = 0,
      l = t.length;
    return l > 12 && null != t && (s = Math.min(l - (t = t.slice(0, 11)).length, 99)), {
      emojisToRender: t,
      remainingEmojis: s,
      numGuildEmoji: l
    }
  }, [em, Y]), eF = null != W ? W : null == em ? void 0 : em.approximate_member_count, eN = null != K ? K : null == em ? void 0 : em.approximate_presence_count;
  a.useEffect(() => ((0, j.setHasUnsubmittedChanges)(!1), () => {
    (0, j.setHasUnsubmittedChanges)(!1)
  }), []), a.useEffect(() => {
    g.default.fetchVerificationForm(n, C)
  }, [n, C]), a.useEffect(() => {
    null != y && X(y.formFields)
  }, [y]), a.useEffect(() => {
    null != H && H.isClaimed() && es(2)
  }, [H]), a.useEffect(() => {
    1 === et && G && es(2)
  }, [et, G]), a.useEffect(() => {
    null != n && x.default.track(V.AnalyticEvents.OPEN_MODAL, {
      type: p.MEMBER_VERIFICATION_TYPE,
      guild_id: n
    })
  }, [n]), a.useEffect(() => {
    let e = J.some(e => e.field_type !== A.VerificationFormFieldTypes.TERMS && (0, O.isValidFormResponse)(e));
    e && !b ? (0, j.setHasUnsubmittedChanges)(!0) : !e && b && (0, j.setHasUnsubmittedChanges)(!1)
  }, [J, b]);
  let eh = a.useMemo(() => {
      let e = ((null == eE ? void 0 : eE.verificationLevel) !== V.VerificationLevels.VERY_HIGH || (null == H ? void 0 : H.isStaff())) && G || z,
        t = !ef || ec;
      return !e || !t || J.some(e => !(0, O.isValidFormResponse)(e))
    }, [J, eE, z, G, H, ef, ec]),
    eC = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion);
  if (null == eE) return null;
  let ex = async () => {
    Z(!0), eo(null), eu(null);
    try {
      await (0, I.saveAccountRequest)({
        email: el,
        password: ei
      }), Z(!1), es(1)
    } catch (s) {
      var e, t;
      eo(null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.email), eu(null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.password)
    } finally {
      Z(!1)
    }
  }, eT = async () => {
    Z(!0), ee(null);
    let e = null != H ? R.default.getMember(n, H.id) : null;
    if (null != e && !e.isPending) {
      null == r || r(!0);
      return
    }
    try {
      await (null == c ? void 0 : c({
        ...null != y ? y : v.NO_MEMBER_VERIFICATION_FORM,
        formFields: J
      })), null == r || r(!0)
    } catch (l) {
      var t, s;
      let e = null == l ? void 0 : l.body;
      (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.version) != null || (null == e ? void 0 : null === (s = e.errors) || void 0 === s ? void 0 : s.form_fields) != null ? ee(L.default.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : ee(null == e ? void 0 : e.message), Z(!1)
    }
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(N.default, {
      direction: N.default.Direction.VERTICAL,
      justify: N.default.Justify.BETWEEN,
      className: B.guildSidebar,
      shrink: 0,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(h.default, {
          guild: eE,
          active: !0,
          className: o()(B.guildIcon, {
            [B.guildIconNoIcon]: null == eE.icon
          })
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          className: B.guildName,
          children: null == eE ? void 0 : eE.name
        }), (0, i.jsx)(u.Text, {
          className: B.guildDescription,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: null == y ? void 0 : y.description
        }), null != eM && eM.length > 0 ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("hr", {
            className: B.divider
          }), (0, i.jsx)(u.FormTitle, {
            children: L.default.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
              emojis: e_
            })
          }), (0, i.jsxs)("div", {
            className: B.emojisContainer,
            children: [eM.map(e => {
              let t = T.default.getEmojiURL({
                id: e.id,
                animated: !1,
                size: 24
              });
              return (0, i.jsx)(u.Tooltip, {
                text: ":".concat(e.name, ":"),
                children: e => (0, i.jsx)("img", {
                  ...e,
                  width: 24,
                  height: 24,
                  src: t,
                  className: B.emoji,
                  alt: ""
                })
              }, e.id)
            }), null != eR && eR > 0 ? (0, i.jsx)(u.Heading, {
              variant: "heading-deprecated-12/semibold",
              className: B.emoji,
              color: "header-secondary",
              children: "+".concat(eR)
            }) : null]
          })]
        }) : null]
      }), (0, i.jsxs)("div", {
        children: [null != eN && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          className: B.onlineCount,
          children: [(0, i.jsx)("div", {
            className: B.dotOnline
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: L.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
              membersOnline: eN
            })
          })]
        }), null != eF && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          children: [(0, i.jsx)("div", {
            className: B.dotMembers
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: L.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
              members: eF
            })
          })]
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: B.modal,
      children: [(0, i.jsx)(u.ModalContent, {
        className: B.modalContent,
        children: (0, i.jsx)(u.Sequencer, {
          className: o()(B.sequencer, {
            [B.centerContent]: 2 !== et
          }),
          steps: [0, 1, 2],
          step: et,
          children: (() => {
            switch (et) {
              case 0:
                return (0, i.jsx)(D, {
                  headerId: l,
                  email: el,
                  password: ei,
                  setEmail: en,
                  setPassword: ea,
                  emailError: er,
                  passwordError: ed
                });
              case 1:
                return (0, i.jsx)(w, {
                  headerId: l,
                  email: el
                });
              case 2:
                return (0, i.jsx)(q, {
                  headerId: l,
                  guildId: n,
                  formState: J,
                  updateFormState: X,
                  isPreview: S,
                  useReducedMotion: eC,
                  isClan: ef,
                  clanGdmConsent: ec,
                  onClanGdmConsentChanged: () => eI(!ec)
                })
            }
          })()
        })
      }), (() => {
        switch (et) {
          case 0:
            return (0, i.jsxs)(u.ModalFooter, {
              className: B.footer,
              children: [(0, i.jsx)(u.Button, {
                className: B.submitButton,
                type: "submit",
                submitting: Q,
                onClick: ex,
                disabled: 0 === el.length || 0 === ei.length,
                children: L.default.Messages.NEXT
              }), (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: L.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
              })]
            });
          case 1:
            return null;
          case 2:
            return (0, i.jsxs)(u.ModalFooter, {
              className: B.footer,
              children: [(0, i.jsx)(u.Button, {
                className: B.submitButton,
                type: "submit",
                submitting: Q,
                onClick: eT,
                color: u.Button.Colors.GREEN,
                disabled: null == c || eh,
                children: L.default.Messages.SUBMIT
              }), null != $ && (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: $
              }), null == $ && U && (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: L.default.Messages.MEMBER_VERIFICATION_WARNING
              })]
            })
        }
      })()]
    })]
  })
}
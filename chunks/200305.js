"use strict";
s.r(t), s.d(t, {
  MemberVerificationFormRenderer: function() {
    return w
  }
}), s("47120");
var l, n, i = s("735250"),
  a = s("470079"),
  r = s("120356"),
  u = s.n(r),
  o = s("442837"),
  d = s("481060"),
  c = s("893776"),
  I = s("809206"),
  m = s("607070"),
  f = s("339085"),
  E = s("601964"),
  M = s("650774"),
  F = s("271383"),
  R = s("430824"),
  _ = s("594174"),
  N = s("285952"),
  h = s("346656"),
  x = s("626135"),
  C = s("768581"),
  T = s("863249"),
  g = s("944163"),
  v = s("246364"),
  A = s("983736"),
  O = s("266395"),
  j = s("990488"),
  S = s("592286"),
  p = s("981631"),
  V = s("689938"),
  L = s("72226"),
  B = s("419851"),
  b = s("296507"),
  P = s("866402"),
  y = s("246403");
(n = l || (l = {}))[n.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", n[n.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", n[n.VERIFICATION_FORM = 2] = "VERIFICATION_FORM";
let U = e => {
    let {
      headerId: t,
      email: s,
      password: l,
      setEmail: n,
      setPassword: a,
      emailError: r,
      passwordError: u
    } = e;
    return (0, i.jsxs)("div", {
      className: L.content,
      children: [(0, i.jsx)("div", {
        className: L.applicationIconContainer,
        children: (0, i.jsx)("img", {
          alt: V.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
          src: B,
          className: L.applicationIcon
        })
      }), (0, i.jsx)(d.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: L.header,
        children: V.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
      }), (0, i.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: V.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
      }), (0, i.jsx)("hr", {
        className: L.divider
      }), (0, i.jsx)(d.FormItem, {
        title: V.default.Messages.FORM_LABEL_EMAIL,
        className: L.formItem,
        children: (0, i.jsx)(d.TextInput, {
          value: s,
          error: r,
          onChange: n,
          autoFocus: !0
        })
      }), (0, i.jsx)(d.FormItem, {
        title: V.default.Messages.FORM_LABEL_PASSWORD,
        className: L.formItem,
        children: (0, i.jsx)(d.TextInput, {
          type: "password",
          value: l,
          error: u,
          onChange: a
        })
      })]
    })
  },
  D = e => {
    let {
      headerId: t,
      email: s
    } = e;
    return (0, i.jsxs)("div", {
      className: L.content,
      children: [(0, i.jsx)("img", {
        alt: V.default.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
        src: y,
        className: L.applicationIcon
      }), (0, i.jsx)(d.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: L.header,
        children: V.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({
          email: s
        })
      }), (0, i.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: V.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
      }), (0, i.jsx)(d.Button, {
        className: L.resendButton,
        size: d.Button.Sizes.NONE,
        look: d.Button.Looks.LINK,
        onClick: () => c.default.verifyResend(),
        children: V.default.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
      })]
    })
  },
  w = e => {
    var t;
    let {
      guildId: s,
      formState: l,
      updateFormState: n,
      isPreview: a = !1
    } = e, r = (0, o.useStateFromStores)([g.default], () => g.default.get(s));
    if (null == r) return null;
    let u = null !== (t = null != l ? l : null == r ? void 0 : r.formFields) && void 0 !== t ? t : [],
      d = a ? j.PreviewFormRenderer : j.ApplicantFormRenderer;
    return (0, i.jsx)(d, {
      guildId: s,
      formFields: u,
      updateFormFields: n
    })
  },
  H = () => s.e("26176").then(s.t.bind(s, "737848", 19)).then(e => {
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
      isPreview: r = !1
    } = e;
    return (0, i.jsxs)("div", {
      className: L.content,
      children: [(0, i.jsxs)("div", {
        className: L.animationAndSparklesContainer,
        children: [(0, i.jsx)("img", {
          alt: V.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: P,
          className: u()(L.sparkleIcon, L.sparkleBottom)
        }), (0, i.jsx)(d.LottieAnimation, {
          importData: H,
          shouldAnimate: !a,
          className: L.animation
        }), (0, i.jsx)("img", {
          alt: V.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: b,
          className: u()(L.sparkleIcon, L.sparkleTop)
        })]
      }), (0, i.jsx)(d.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: L.header,
        children: V.default.Messages.MEMBER_VERIFICATION_MODAL_TITLE
      }), (0, i.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: L.subheader,
        children: V.default.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
      }), (0, i.jsx)("hr", {
        className: L.divider
      }), (0, i.jsx)(w, {
        guildId: s,
        formState: l,
        updateFormState: n,
        isPreview: r
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
    inviteCode: j,
    isPreview: B = !1
  } = e, b = (0, O.useMemberVerificationFormNoticeStore)(e => e.hasUnsubmittedChanges), P = (0, o.useStateFromStores)([R.default], () => R.default.getGuild(n)), y = (0, o.useStateFromStores)([g.default], () => g.default.get(n)), w = null == y ? void 0 : y.formFields.some(e => e.field_type !== v.VerificationFormFieldTypes.TERMS), H = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentUser()), k = !(null == H ? void 0 : H.isClaimed()), G = null == H ? void 0 : H.verified, Y = null == H ? void 0 : H.isPhoneVerified(), z = (0, o.useStateFromStores)([f.default], () => f.default.getGuildEmoji(n)), {
    storeMemberCount: W,
    storeOnlineCount: K
  } = (0, o.useStateFromStoresObject)([M.default], () => ({
    storeMemberCount: M.default.getMemberCount(n),
    storeOnlineCount: M.default.getOnlineCount(n)
  })), [J, X] = a.useState(null !== (t = null == y ? void 0 : y.formFields) && void 0 !== t ? t : []), [Q, Z] = a.useState(!1), [$, ee] = a.useState(null), [et, es] = a.useState(k ? 0 : 2), [el, en] = a.useState(""), [ei, ea] = a.useState(""), [er, eu] = a.useState(null), [eo, ed] = a.useState(null), ec = null == y ? void 0 : y.guild, eI = a.useMemo(() => null != P ? P : null != ec ? new E.default(ec) : null, [P, ec]), em = null !== (s = null == eI ? void 0 : eI.hasFeature(p.GuildFeatures.CLAN)) && void 0 !== s && s, {
    emojisToRender: ef,
    remainingEmojis: eE,
    numGuildEmoji: eM
  } = a.useMemo(() => {
    var e;
    let t = [...null !== (e = 0 === z.length ? null == ec ? void 0 : ec.emojis : z) && void 0 !== e ? e : []].reverse(),
      s = 0,
      l = t.length;
    return l > 12 && null != t && (s = Math.min(l - (t = t.slice(0, 11)).length, 99)), {
      emojisToRender: t,
      remainingEmojis: s,
      numGuildEmoji: l
    }
  }, [ec, z]), eF = null != W ? W : null == ec ? void 0 : ec.approximate_member_count, eR = null != K ? K : null == ec ? void 0 : ec.approximate_presence_count;
  a.useEffect(() => ((0, O.setHasUnsubmittedChanges)(!1), () => {
    (0, O.setHasUnsubmittedChanges)(!1)
  }), []), a.useEffect(() => {
    T.default.fetchVerificationForm(n, j)
  }, [n, j]), a.useEffect(() => {
    null != y && X(y.formFields)
  }, [y]), a.useEffect(() => {
    null != H && H.isClaimed() && es(2)
  }, [H]), a.useEffect(() => {
    1 === et && G && es(2)
  }, [et, G]), a.useEffect(() => {
    null != n && x.default.track(p.AnalyticEvents.OPEN_MODAL, {
      type: S.MEMBER_VERIFICATION_TYPE,
      guild_id: n
    })
  }, [n]), a.useEffect(() => {
    let e = J.some(e => e.field_type !== v.VerificationFormFieldTypes.TERMS && (0, A.isValidFormResponse)(e));
    e && !b ? (0, O.setHasUnsubmittedChanges)(!0) : !e && b && (0, O.setHasUnsubmittedChanges)(!1)
  }, [J, b]);
  let e_ = a.useMemo(() => !(((null == eI ? void 0 : eI.verificationLevel) !== p.VerificationLevels.VERY_HIGH || (null == H ? void 0 : H.isStaff())) && G || Y) || J.some(e => !(0, A.isValidFormResponse)(e)), [J, eI, Y, G, H]),
    eN = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion);
  if (null == eI) return null;
  let eh = async () => {
    Z(!0), eu(null), ed(null);
    try {
      await (0, I.saveAccountRequest)({
        email: el,
        password: ei
      }), Z(!1), es(1)
    } catch (s) {
      var e, t;
      eu(null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.email), ed(null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.password)
    } finally {
      Z(!1)
    }
  }, ex = async () => {
    Z(!0), ee(null);
    let e = null != H ? F.default.getMember(n, H.id) : null;
    if (null != e && !e.isPending) {
      null == r || r(!0);
      return
    }
    try {
      await (null == c ? void 0 : c({
        ...null != y ? y : g.NO_MEMBER_VERIFICATION_FORM,
        formFields: J
      })), null == r || r(!0)
    } catch (l) {
      var t, s;
      let e = null == l ? void 0 : l.body;
      (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.version) != null || (null == e ? void 0 : null === (s = e.errors) || void 0 === s ? void 0 : s.form_fields) != null ? ee(V.default.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : ee(null == e ? void 0 : e.message)
    } finally {
      Z(!1)
    }
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(N.default, {
      direction: N.default.Direction.VERTICAL,
      justify: N.default.Justify.BETWEEN,
      className: L.guildSidebar,
      shrink: 0,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(h.default, {
          guild: eI,
          active: !0,
          className: u()(L.guildIcon, {
            [L.guildIconNoIcon]: null == eI.icon
          })
        }), (0, i.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: L.guildName,
          children: null == eI ? void 0 : eI.name
        }), (0, i.jsx)(d.Text, {
          className: L.guildDescription,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: null == y ? void 0 : y.description
        }), null != ef && ef.length > 0 ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("hr", {
            className: L.divider
          }), (0, i.jsx)(d.FormTitle, {
            children: V.default.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
              emojis: eM
            })
          }), (0, i.jsxs)("div", {
            className: L.emojisContainer,
            children: [ef.map(e => {
              let t = C.default.getEmojiURL({
                id: e.id,
                animated: !1,
                size: 24
              });
              return (0, i.jsx)(d.Tooltip, {
                text: ":".concat(e.name, ":"),
                children: e => (0, i.jsx)("img", {
                  ...e,
                  width: 24,
                  height: 24,
                  src: t,
                  className: L.emoji,
                  alt: ""
                })
              }, e.id)
            }), null != eE && eE > 0 ? (0, i.jsx)(d.Heading, {
              variant: "heading-deprecated-12/semibold",
              className: L.emoji,
              color: "header-secondary",
              children: "+".concat(eE)
            }) : null]
          })]
        }) : null]
      }), (0, i.jsxs)("div", {
        children: [null != eR && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          className: L.onlineCount,
          children: [(0, i.jsx)("div", {
            className: L.dotOnline
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: V.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
              membersOnline: eR
            })
          })]
        }), null != eF && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          children: [(0, i.jsx)("div", {
            className: L.dotMembers
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: V.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
              members: eF
            })
          })]
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: L.modal,
      children: [(0, i.jsx)(d.ModalContent, {
        className: L.modalContent,
        children: (0, i.jsx)(d.Sequencer, {
          className: u()(L.sequencer, {
            [L.centerContent]: 2 !== et
          }),
          steps: [0, 1, 2],
          step: et,
          children: (() => {
            switch (et) {
              case 0:
                return (0, i.jsx)(U, {
                  headerId: l,
                  email: el,
                  password: ei,
                  setEmail: en,
                  setPassword: ea,
                  emailError: er,
                  passwordError: eo
                });
              case 1:
                return (0, i.jsx)(D, {
                  headerId: l,
                  email: el
                });
              case 2:
                return (0, i.jsx)(q, {
                  headerId: l,
                  guildId: n,
                  formState: J,
                  updateFormState: X,
                  isPreview: B,
                  useReducedMotion: eN
                })
            }
          })()
        })
      }), (() => {
        switch (et) {
          case 0:
            return (0, i.jsxs)(d.ModalFooter, {
              className: L.footer,
              children: [(0, i.jsx)(d.Button, {
                className: L.submitButton,
                type: "submit",
                submitting: Q,
                onClick: eh,
                disabled: 0 === el.length || 0 === ei.length,
                children: V.default.Messages.NEXT
              }), (0, i.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: V.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
              })]
            });
          case 1:
            return null;
          case 2:
            return (0, i.jsxs)(d.ModalFooter, {
              className: L.footer,
              children: [(0, i.jsx)(d.Button, {
                className: L.submitButton,
                type: "submit",
                submitting: Q,
                onClick: ex,
                color: d.Button.Colors.GREEN,
                disabled: null == c || e_,
                children: V.default.Messages.SUBMIT
              }), null != $ && (0, i.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: $
              }), null == $ && w && (0, i.jsxs)("div", {
                className: L.disclaimerFooter,
                children: [(0, i.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: V.default.Messages.MEMBER_VERIFICATION_WARNING
                }), em && (0, i.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: V.default.Messages.CLAN_APPLICATION_GDM_CONSENT
                })]
              })]
            })
        }
      })()]
    })]
  })
}
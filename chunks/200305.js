"use strict";
s.r(t), s.d(t, {
  MemberVerificationFormRenderer: function() {
    return H
  }
}), s("47120");
var l, n, i = s("735250"),
  r = s("470079"),
  a = s("803997"),
  d = s.n(a),
  o = s("442837"),
  u = s("481060"),
  c = s("893776"),
  I = s("809206"),
  m = s("607070"),
  E = s("339085"),
  f = s("601964"),
  M = s("650774"),
  R = s("271383"),
  F = s("430824"),
  _ = s("594174"),
  N = s("285952"),
  h = s("346656"),
  x = s("301822"),
  C = s("626135"),
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
      setPassword: r,
      emailError: a,
      passwordError: d
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
          error: a,
          onChange: n,
          autoFocus: !0
        })
      }), (0, i.jsx)(u.FormItem, {
        title: L.default.Messages.FORM_LABEL_PASSWORD,
        className: B.formItem,
        children: (0, i.jsx)(u.TextInput, {
          type: "password",
          value: l,
          error: d,
          onChange: r
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
      isPreview: r = !1
    } = e, a = (0, o.useStateFromStores)([v.default], () => v.default.get(s));
    if (null == a) return null;
    let d = null !== (t = null != l ? l : null == a ? void 0 : a.formFields) && void 0 !== t ? t : [],
      u = r ? S.PreviewFormRenderer : S.ApplicantFormRenderer;
    return (0, i.jsx)(u, {
      guildId: s,
      formFields: d,
      updateFormFields: n
    })
  },
  q = () => s.e("26176").then(s.t.bind(s, "737848", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  k = e => {
    let {
      headerId: t,
      guildId: s,
      formState: l,
      updateFormState: n,
      useReducedMotion: r,
      isPreview: a = !1
    } = e;
    return (0, i.jsxs)("div", {
      className: B.content,
      children: [(0, i.jsxs)("div", {
        className: B.animationAndSparklesContainer,
        children: [(0, i.jsx)("img", {
          alt: L.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: y,
          className: d()(B.sparkleIcon, B.sparkleBottom)
        }), (0, i.jsx)(x.default, {
          importData: q,
          shouldAnimate: !r,
          className: B.animation
        }), (0, i.jsx)("img", {
          alt: L.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: P,
          className: d()(B.sparkleIcon, B.sparkleTop)
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
        isPreview: a
      })]
    })
  };
t.default = e => {
  var t, s;
  let {
    headerId: l,
    guildId: n,
    onClose: a,
    onComplete: c,
    inviteCode: x,
    isPreview: S = !1
  } = e, b = (0, j.useMemberVerificationFormNoticeStore)(e => e.hasUnsubmittedChanges), P = (0, o.useStateFromStores)([F.default], () => F.default.getGuild(n)), y = (0, o.useStateFromStores)([v.default], () => v.default.get(n)), U = null == y ? void 0 : y.formFields.some(e => e.field_type !== A.VerificationFormFieldTypes.TERMS), H = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentUser()), q = !(null == H ? void 0 : H.isClaimed()), G = null == H ? void 0 : H.verified, Y = null == H ? void 0 : H.isPhoneVerified(), z = (0, o.useStateFromStores)([E.default], () => E.default.getGuildEmoji(n)), {
    storeMemberCount: W,
    storeOnlineCount: K
  } = (0, o.useStateFromStoresObject)([M.default], () => ({
    storeMemberCount: M.default.getMemberCount(n),
    storeOnlineCount: M.default.getOnlineCount(n)
  })), [J, X] = r.useState(null !== (t = null == y ? void 0 : y.formFields) && void 0 !== t ? t : []), [Q, Z] = r.useState(!1), [$, ee] = r.useState(null), [et, es] = r.useState(q ? 0 : 2), [el, en] = r.useState(""), [ei, er] = r.useState(""), [ea, ed] = r.useState(null), [eo, eu] = r.useState(null), ec = null == y ? void 0 : y.guild, eI = r.useMemo(() => null != P ? P : null != ec ? new f.default(ec) : null, [P, ec]), em = null !== (s = null == eI ? void 0 : eI.hasFeature(V.GuildFeatures.CLAN)) && void 0 !== s && s, {
    emojisToRender: eE,
    remainingEmojis: ef,
    numGuildEmoji: eM
  } = r.useMemo(() => {
    var e;
    let t = [...null !== (e = 0 === z.length ? null == ec ? void 0 : ec.emojis : z) && void 0 !== e ? e : []].reverse(),
      s = 0,
      l = t.length;
    return l > 12 && null != t && (s = Math.min(l - (t = t.slice(0, 11)).length, 99)), {
      emojisToRender: t,
      remainingEmojis: s,
      numGuildEmoji: l
    }
  }, [ec, z]), eR = null != W ? W : null == ec ? void 0 : ec.approximate_member_count, eF = null != K ? K : null == ec ? void 0 : ec.approximate_presence_count;
  r.useEffect(() => ((0, j.setHasUnsubmittedChanges)(!1), () => {
    (0, j.setHasUnsubmittedChanges)(!1)
  }), []), r.useEffect(() => {
    g.default.fetchVerificationForm(n, x)
  }, [n, x]), r.useEffect(() => {
    null != y && X(y.formFields)
  }, [y]), r.useEffect(() => {
    null != H && H.isClaimed() && es(2)
  }, [H]), r.useEffect(() => {
    1 === et && G && es(2)
  }, [et, G]), r.useEffect(() => {
    null != n && C.default.track(V.AnalyticEvents.OPEN_MODAL, {
      type: p.MEMBER_VERIFICATION_TYPE,
      guild_id: n
    })
  }, [n]), r.useEffect(() => {
    let e = J.some(e => e.field_type !== A.VerificationFormFieldTypes.TERMS && (0, O.isValidFormResponse)(e));
    e && !b ? (0, j.setHasUnsubmittedChanges)(!0) : !e && b && (0, j.setHasUnsubmittedChanges)(!1)
  }, [J, b]);
  let e_ = r.useMemo(() => !(((null == eI ? void 0 : eI.verificationLevel) !== V.VerificationLevels.VERY_HIGH || (null == H ? void 0 : H.isStaff())) && G || Y) || J.some(e => !(0, O.isValidFormResponse)(e)), [J, eI, Y, G, H]),
    eN = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion);
  if (null == eI) return null;
  let eh = async () => {
    Z(!0), ed(null), eu(null);
    try {
      await (0, I.saveAccountRequest)({
        email: el,
        password: ei
      }), Z(!1), es(1)
    } catch (s) {
      var e, t;
      ed(null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.email), eu(null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.password)
    } finally {
      Z(!1)
    }
  }, ex = async () => {
    Z(!0), ee(null);
    let e = null != H ? R.default.getMember(n, H.id) : null;
    if (null != e && !e.isPending) {
      null == a || a(!0);
      return
    }
    try {
      await (null == c ? void 0 : c({
        ...null != y ? y : v.NO_MEMBER_VERIFICATION_FORM,
        formFields: J
      })), null == a || a(!0)
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
          guild: eI,
          active: !0,
          className: d()(B.guildIcon, {
            [B.guildIconNoIcon]: null == eI.icon
          })
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          className: B.guildName,
          children: null == eI ? void 0 : eI.name
        }), (0, i.jsx)(u.Text, {
          className: B.guildDescription,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: null == y ? void 0 : y.description
        }), null != eE && eE.length > 0 ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("hr", {
            className: B.divider
          }), (0, i.jsx)(u.FormTitle, {
            children: L.default.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
              emojis: eM
            })
          }), (0, i.jsxs)("div", {
            className: B.emojisContainer,
            children: [eE.map(e => {
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
            }), null != ef && ef > 0 ? (0, i.jsx)(u.Heading, {
              variant: "heading-deprecated-12/semibold",
              className: B.emoji,
              color: "header-secondary",
              children: "+".concat(ef)
            }) : null]
          })]
        }) : null]
      }), (0, i.jsxs)("div", {
        children: [null != eF && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          className: B.onlineCount,
          children: [(0, i.jsx)("div", {
            className: B.dotOnline
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: L.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
              membersOnline: eF
            })
          })]
        }), null != eR && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          children: [(0, i.jsx)("div", {
            className: B.dotMembers
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: L.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
              members: eR
            })
          })]
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: B.modal,
      children: [(0, i.jsx)(u.ModalContent, {
        className: B.modalContent,
        children: (0, i.jsx)(u.Sequencer, {
          className: d()(B.sequencer, {
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
                  setPassword: er,
                  emailError: ea,
                  passwordError: eo
                });
              case 1:
                return (0, i.jsx)(w, {
                  headerId: l,
                  email: el
                });
              case 2:
                return (0, i.jsx)(k, {
                  headerId: l,
                  guildId: n,
                  formState: J,
                  updateFormState: X,
                  isPreview: S,
                  useReducedMotion: eN
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
                onClick: eh,
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
                onClick: ex,
                color: u.Button.Colors.GREEN,
                disabled: null == c || e_,
                children: L.default.Messages.SUBMIT
              }), null != $ && (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: $
              }), null == $ && U && (0, i.jsxs)("div", {
                className: B.disclaimerFooter,
                children: [(0, i.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: L.default.Messages.MEMBER_VERIFICATION_WARNING
                }), em && (0, i.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: L.default.Messages.CLAN_APPLICATION_GDM_CONSENT
                })]
              })]
            })
        }
      })()]
    })]
  })
}
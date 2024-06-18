"use strict";
t.d(s, {
  Q5: function() {
    return M
  },
  Sf: function() {
    return p
  },
  ZP: function() {
    return f
  }
}), t(47120);
var n, i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(512722),
  c = t.n(o),
  d = t(442837),
  u = t(692547),
  E = t(481060),
  _ = t(570140),
  I = t(484614),
  T = t(852860),
  N = t(881052),
  m = t(751189),
  S = t(409059),
  h = t(518936),
  g = t(999382),
  C = t(58346),
  x = t(689938),
  R = t(86745),
  L = t(331651);

function O(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class A extends(n = d.ZP.Store) {
  getTemplate() {
    let e = g.Z.getProps().guild;
    if (null == e) return null;
    let s = S.Z.getForGuild(e.id);
    return null != s && s.state !== C.Rj.RESOLVING ? s : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && "" !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), O(this, "name", ""), O(this, "description", ""), O(this, "error", null), O(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var s, t;
        this.name = null !== (s = e.name) && void 0 !== s ? s : this.name, this.description = null !== (t = e.description) && void 0 !== t ? t : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), O(this, "setName", e => {
      this.name = e, this.emitChange()
    }), O(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), O(this, "setError", e => {
      this.error = e, this.emitChange()
    }), O(this, "save", async () => {
      await m.Z.updateGuildTemplate(g.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
O(A, "displayName", "GuildSettingsTemplateMetadataStore_");
let p = new A(_.Z);

function M() {
  let [e, s] = l.useState(!1), t = async () => {
    s(!0), await p.save(), s(!1)
  };
  return (0, i.jsx)(T.Z, {
    submitting: e,
    onReset: p.reset,
    onSave: t
  })
}

function f() {
  return (0, i.jsx)(E.FormSection, {
    className: L.marginBottom4,
    children: (0, i.jsxs)(E.HeadingLevel, {
      component: (0, i.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H1,
        children: x.Z.Messages.GUILD_TEMPLATES
      }),
      children: [(0, i.jsx)(E.FormText, {
        className: L.marginBottom20,
        type: E.FormTextTypes.DESCRIPTION,
        children: x.Z.Messages.GUILD_TEMPLATE_SETTINGS_DESCRIPTION.format()
      }), (0, i.jsx)(v, {}), (0, i.jsx)(E.FormDivider, {
        className: R.divider
      }), (0, i.jsx)(D, {})]
    })
  })
}

function D() {
  let {
    guild: e
  } = g.Z.getProps();
  c()(null != e, "guild cannot be null");
  let s = (0, d.e7)([p], () => p.error),
    [t, n] = l.useState(!0),
    {
      loading: a,
      guildTemplate: r
    } = function(e) {
      let [s, t] = l.useState(!0);
      return l.useEffect(() => {
        (async function s() {
          t(!0);
          try {
            await m.Z.loadTemplatesForGuild(e), t(!1)
          } catch (e) {
            p.setError(new N.Hx(e))
          }
        })()
      }, [e]), {
        loading: s,
        guildTemplate: (0, d.e7)([S.Z], () => S.Z.getForGuild(e), [e])
      }
    }(e.id);
  if (l.useEffect(() => {
      if (!!t && !a) {
        if (null != r) {
          var e, s;
          p.setName(null !== (e = r.name) && void 0 !== e ? e : ""), p.setDescription(null !== (s = r.description) && void 0 !== s ? s : "")
        }
        n(!1)
      }
    }, [t, r, a]), l.useEffect(() => () => {
      p.reset(), p.setError(null)
    }, []), t) return null != s ? (0, i.jsx)(E.Text, {
    color: "text-danger",
    variant: "text-sm/normal",
    children: s.message
  }) : (0, i.jsx)(E.Spinner, {
    className: L.marginTop40
  });
  let o = null != s && null == s.getFirstFieldErrorMessage("name") && null == s.getFirstFieldErrorMessage("description");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(Z, {}), (0, i.jsx)(U, {
      guild: e,
      guildTemplate: r
    }), o ? (0, i.jsx)(E.Text, {
      className: L.marginTop8,
      color: "text-danger",
      variant: "text-sm/normal",
      children: s.getAnyErrorMessage()
    }) : null]
  })
}

function v() {
  return (0, i.jsxs)("div", {
    className: R.descriptionBox,
    children: [(0, i.jsxs)("div", {
      className: R.descriptionSection,
      children: [(0, i.jsx)(E.Heading, {
        variant: "eyebrow",
        children: x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WILL_COPY
      }), (0, i.jsxs)("div", {
        className: R.descriptionRow,
        children: [(0, i.jsx)(E.CircleCheckIcon, {
          size: "md",
          className: R.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_CHANNELS]
      }), (0, i.jsxs)("div", {
        className: R.descriptionRow,
        children: [(0, i.jsx)(E.CircleCheckIcon, {
          size: "md",
          className: R.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_ROLES]
      }), (0, i.jsxs)("div", {
        className: R.descriptionRow,
        children: [(0, i.jsx)(E.CircleCheckIcon, {
          size: "md",
          className: R.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_SETTINGS]
      })]
    }), (0, i.jsxs)("div", {
      className: R.descriptionSection,
      children: [(0, i.jsx)(E.Heading, {
        variant: "eyebrow",
        children: x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WONT_COPY
      }), (0, i.jsxs)("div", {
        className: R.descriptionRow,
        children: [(0, i.jsx)(E.CircleXIcon, {
          size: "md",
          className: R.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MESSAGES]
      }), (0, i.jsxs)("div", {
        className: R.descriptionRow,
        children: [(0, i.jsx)(E.CircleXIcon, {
          size: "md",
          className: R.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MEMBERS]
      }), (0, i.jsxs)("div", {
        className: R.descriptionRow,
        children: [(0, i.jsx)(E.CircleXIcon, {
          size: "md",
          className: R.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_PERKS]
      })]
    })]
  })
}

function j(e) {
  let {
    cancel: s,
    confirm: t
  } = e;
  return (0, i.jsx)(E.DeclarativeConfirmModal, {
    dismissable: !0,
    header: x.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    confirmText: x.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    cancelText: x.Z.Messages.CANCEL,
    onCancel: s,
    onConfirm: t,
    children: (0, i.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: x.Z.Messages.GUILD_TEMPLATES_DELETE_DESCRIPTION
    })
  })
}

function Z() {
  let e = (0, d.e7)([p], () => p.name),
    s = (0, d.e7)([p], () => p.description),
    t = (0, d.e7)([p], () => p.error);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.FormItem, {
      className: L.marginBottom20,
      title: x.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_NAME,
      error: null == t ? void 0 : t.getFirstFieldErrorMessage("name"),
      children: (0, i.jsx)(E.TextInput, {
        value: e,
        onChange: e => p.setName(e),
        placeholder: x.Z.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_NAME,
        maxLength: 100
      })
    }), (0, i.jsx)(E.FormItem, {
      className: L.marginBottom20,
      title: x.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_DESCRIPTION,
      error: null == t ? void 0 : t.getFirstFieldErrorMessage("description"),
      children: (0, i.jsx)(E.TextArea, {
        value: s,
        onChange: e => p.setDescription(e),
        placeholder: x.Z.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_DESCRIPTION,
        maxLength: 120
      })
    })]
  })
}

function U(e) {
  let {
    guild: s,
    guildTemplate: t
  } = e;
  return null == t ? (0, i.jsx)(G, {
    guild: s
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.FormItem, {
      title: x.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_LINK,
      children: (0, i.jsx)(I.Z, {
        buttonLook: E.Button.Looks.FILLED,
        buttonColor: E.Button.Colors.BRAND,
        value: (0, h.Z)(t.code)
      })
    }), t.isDirty && (0, i.jsx)(E.Text, {
      color: "text-warning",
      className: L.marginTop8,
      variant: "text-sm/normal",
      children: x.Z.Messages.GUILD_TEMPLATES_UNSYNCED_WARNING
    }), (0, i.jsxs)("div", {
      className: r()(L.marginTop20, R.buttonContainer),
      children: [t.isDirty && (0, i.jsx)(P, {
        guild: s,
        guildTemplate: t
      }), (0, i.jsxs)("div", {
        className: R.rightButtonContainer,
        children: [(0, i.jsx)(b, {
          guild: s,
          guildTemplate: t
        }), (0, i.jsx)(B, {
          guildTemplate: t
        })]
      })]
    }), t.isDirty && (0, i.jsx)("div", {
      className: R.lastSync,
      children: x.Z.Messages.GUILD_TEMPLATES_LAST_SYNC.format({
        timestamp: new Date(t.updatedAt)
      })
    })]
  })
}

function G(e) {
  var s;
  let {
    guild: t
  } = e, n = (0, d.e7)([p], () => p.name), [a, r] = l.useState(!1), o = async () => {
    p.setError(null), r(!0);
    try {
      await m.Z.createGuildTemplate(t.id, p.name, p.description)
    } catch (e) {
      p.setError(new N.Hx(e))
    }
    r(!1)
  };
  return (0, i.jsx)(E.Button, {
    submitting: a,
    disabled: !(null != (s = n) && s.trim().length >= 2),
    color: E.Button.Colors.BRAND,
    onClick: o,
    children: x.Z.Messages.GUILD_TEMPLATES_CREATE_LINK
  })
}

function P(e) {
  let {
    guild: s,
    guildTemplate: t
  } = e, [n, a] = l.useState(!1), r = async () => {
    p.setError(null), a(!0);
    try {
      await m.Z.syncGuildTemplate(s.id, t.code)
    } catch (e) {
      p.setError(new N.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsx)(E.Button, {
    submitting: n,
    className: R.button,
    onClick: r,
    children: x.Z.Messages.GUILD_TEMPLATES_SYNC_TEMPLATE
  })
}

function b(e) {
  let {
    guild: s,
    guildTemplate: t
  } = e, [n, a] = l.useState(!1), r = async () => {
    p.setError(null);
    try {
      await m.Z.deleteGuildTemplate(s.id, t.code), p.setName(""), p.setDescription("")
    } catch (e) {
      p.setError(new N.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.Button, {
      look: E.Button.Looks.OUTLINED,
      className: R.button,
      color: E.Button.Colors.RED,
      onClick: () => a(!0),
      children: x.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE
    }), n ? (0, i.jsx)(j, {
      confirm: r,
      cancel: () => a(!1)
    }) : null]
  })
}

function B(e) {
  let {
    guildTemplate: s
  } = e;
  return (0, i.jsx)(E.Button, {
    color: E.Button.Colors.PRIMARY,
    className: R.button,
    onClick: () => (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("10778"), t.e("81352")]).then(t.bind(t, 766775));
      return t => (0, i.jsx)(e, {
        ...t,
        guildTemplate: s
      })
    }),
    children: x.Z.Messages.GUILD_TEMPLATES_PREVIEW_TEMPLATE
  })
}
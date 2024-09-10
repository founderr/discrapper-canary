t.d(s, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(430824),
    o = t(626135),
    l = t(63063),
    c = t(709054),
    d = t(88658),
    _ = t(695346),
    u = t(639814),
    E = t(838436),
    T = t(51331),
    S = t(922628),
    I = t(726985),
    N = t(736530),
    m = t(981631),
    C = t(689938);
function A() {
    let e = (0, u.i)(),
        s = (0, u.c)(),
        t = _.iG.useSetting(),
        A = _.h2.useSetting().includes(e),
        g = _.mX.useSetting(),
        h = _.zA.useSetting().includes(e),
        O = a.useCallback(
            (s) => {
                let t = new Set((0, d.gl)());
                s ? t.delete(e) : t.add(e), _.zA.updateSetting(Array.from(t));
            },
            [e]
        );
    function p(e, s) {
        o.default.track(m.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    return (0, n.jsx)(E.U, {
        setting: I.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        children:
            e === N.T
                ? (0, n.jsx)(T.Z, {
                      title: C.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE,
                      value: !t && !g,
                      onChange: () => {
                          var e;
                          return (
                              (e = !g),
                              void (0, S.V)({
                                  header: C.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
                                  body: C.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
                                  confirmText: C.Z.Messages.NO_TEXT,
                                  cancelText: C.Z.Messages.YES_TEXT,
                                  confirmButtonColor: i.Button.Colors.BRAND,
                                  onConfirm: () => {
                                      _.mX.updateSetting(e), p(e, !1);
                                  },
                                  onCancel: () => {
                                      _.mX.updateSetting(e), _.zA.updateSetting(e ? c.default.keys(r.Z.getGuilds()) : []), p(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: t,
                      note: C.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({ helpdeskArticle: l.Z.getArticleURL(m.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, n.jsx)(T.Z, {
                      title: C.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE,
                      value: !h,
                      onChange: O,
                      disabled: A,
                      note: s ? C.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({ helpdeskArticle: l.Z.getArticleURL(m.BhN.MESSAGE_REQUESTS) }) : C.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({ helpdeskArticle: l.Z.getArticleURL(m.BhN.MESSAGE_REQUESTS) })
                  })
    });
}

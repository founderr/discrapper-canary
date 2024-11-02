var r = e(570140),
    i = e(668781),
    u = e(287734),
    o = e(881052),
    a = e(314897),
    l = e(592125),
    c = e(979651),
    s = e(352954),
    d = e(630759),
    E = e(760373),
    f = e(981631),
    _ = e(388032);
async function S(t, n) {
    if (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: t
        });
        try {
            await (0, d.om)(E.GB), null == n || n();
        } catch (n) {
            var e;
            let t = new o.Hx(n);
            r.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                i.Z.show({
                    title: _.intl.string(_.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : _.intl.string(_.t.eAn6z8)
                });
        }
    } else
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: t
        }),
            null == n || n();
}
async function h(t) {
    let n = (function () {
        let t = c.Z.getVoiceStateForUser(a.default.getId()),
            n = l.Z.getChannel(null == t ? void 0 : t.channelId);
        return a.default.getSessionId() === (null == t ? void 0 : t.sessionId) && null != n && n.type !== f.d4z.GUILD_STAGE_VOICE ? n.id : null;
    })();
    null != n
        ? s.Z.openSecureFramesUpdateConfirmation({
              title: t ? _.intl.string(_.t.DRFN1N) : _.intl.string(_.t.q29xJy),
              subtitle: t ? _.intl.string(_.t.y015ZW) : _.intl.string(_.t.E66FQk),
              confirmText: _.intl.string(_.t.aTuFYW),
              onConfirm: async () => {
                  await S(t, () => {
                      u.default.disconnect(), u.default.selectVoiceChannel(n);
                  });
              }
          })
        : await S(t);
}
n.Z = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR' });
    },
    updatePersistentCodesEnabled: h,
    addUploadedKeyVersion: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD',
            keyVersion: t
        });
    },
    createSecureFramesVerifiedKey: function (t, n) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: t,
            key: n
        });
    },
    deleteSecureFramesVerifiedKey: function (t, n) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: t,
            serializedKey: n
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: t
        });
    },
    createSecureFramesTransientKey: function (t, n) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: t,
            key: n
        });
    },
    deleteSecureFramesTransientKey: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: t
        });
    }
};
